// Capture-only harness. Serves the release sources with review clock/audio taps;
// does not alter shipped game files, rules, geometry, lighting, or sound assets.
import { createServer } from 'node:http';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { createSchedule } from '../game/src/director.mjs';

const root=path.resolve('.'), out=path.resolve('releases/wrong-floor-media-0.2.0');
const raw=path.resolve('_review/media-capture');
await mkdir(path.join(out,'screenshots'),{recursive:true});await mkdir(raw,{recursive:true});
const seed='wrong-floor-media-2026', schedule=createSchedule(seed);
const reviewMethods=`
    mediaSeek(index,time=0,live=false){
      manual=true;preview=null;terminalAt=null;input.reset();audio.reset();
      game=createGame({seed:${JSON.stringify(seed)}});
      while(game.snapshot().roundIndex<index){const s=game.snapshot();game.update(1/60,{close:s.round.danger&&s.roundTime>s.round.clueAt+.25});game.drainEvents();if(game.snapshot().mode!=='running')throw new Error('Media seek failed');}
      game.update(time);game.drainEvents();ui.caption('');ui.show('playing');scene.recenter();
      audio.resume();audio.event({type:'arrival',data:{floor:game.snapshot().round.floor,environment:game.snapshot().round.environment}});
      previous=performance.now();manual=!live;return game.snapshot();
    },
    mediaRun(){manual=false;previous=performance.now();},
    mediaFreeze(){manual=true;},
`;
const audioTap=`
const OriginalConnect=AudioNode.prototype.connect;
AudioNode.prototype.connect=function(destination,...args){
  const result=OriginalConnect.call(this,destination,...args);
  if(destination===this.context.destination){
    const tap=this.context.createMediaStreamDestination();OriginalConnect.call(this,tap);
    window.__mediaAudio=tap;window.__mediaContext=this.context;
  }
  return result;
};
window.__recordStart=async()=>{
  await window.__mediaContext.resume();
  window.__audioChunks=[];window.__recorder=new MediaRecorder(window.__mediaAudio.stream,{mimeType:'audio/webm;codecs=opus',audioBitsPerSecond:192000});
  window.__recorder.ondataavailable=e=>window.__audioChunks.push(e.data);
  window.__recorder.start();return (performance.timeOrigin+performance.now())/1000;
};
window.__recordStop=()=>new Promise(resolve=>{
  window.__recorder.onstop=async()=>{const blob=new Blob(window.__audioChunks,{type:'audio/webm'});const reader=new FileReader();reader.onload=()=>resolve(reader.result.split(',')[1]);reader.readAsDataURL(blob);};window.__recorder.stop();
});
`;
const mime={'.html':'text/html','.css':'text/css','.mjs':'text/javascript','.js':'text/javascript','.json':'application/json','.png':'image/png','.webp':'image/webp','.wav':'audio/wav'};
const server=createServer(async(req,res)=>{try{
  const u=new URL(req.url,'http://localhost');let rel=decodeURIComponent(u.pathname).replace(/^\/+/, '');if(rel.endsWith('/'))rel+='index.html';
  const file=path.resolve(root,rel);if(!file.startsWith(root+path.sep))throw Error('outside root');
  let body=await readFile(file);
  if(rel==='game/src/main.mjs')body=Buffer.from(audioTap+String(body).replace('start,snapshot:',reviewMethods+'start,snapshot:'));
  res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'}).end(body);
}catch{res.writeHead(404).end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const base=`http://127.0.0.1:${server.address().port}`;
const delay=ms=>new Promise(r=>setTimeout(r,ms));
const profile=await mkdtemp(path.join(tmpdir(),'wrong-floor-media-'));
const child=spawn(process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',[
  '--headless=new','--no-sandbox','--disable-dev-shm-usage','--autoplay-policy=no-user-gesture-required',
  '--ignore-gpu-blocklist','--disable-background-timer-throttling','--disable-renderer-backgrounding',
  '--window-size=1920,1080','--remote-debugging-port=0',`--user-data-dir=${profile}`,'about:blank'
],{stdio:['ignore','ignore','pipe'],windowsHide:true});child.stderr.on('data',()=>{});
let ws;
try{
  let endpoint;for(let i=0;i<100;i++){try{const [port]=String(await readFile(path.join(profile,'DevToolsActivePort'))).trim().split(/\s+/);endpoint=(await fetch(`http://127.0.0.1:${port}/json/version`).then(r=>r.json())).webSocketDebuggerUrl;break;}catch{await delay(100);}}
  ws=new WebSocket(endpoint);await new Promise((r,j)=>{ws.addEventListener('open',r,{once:true});ws.addEventListener('error',j,{once:true});});
  let id=0;const pending=new Map(),listeners=new Set();
  ws.addEventListener('message',({data})=>{const m=JSON.parse(String(data));if(m.id){const p=pending.get(m.id);pending.delete(m.id);if(m.error)p.reject(Error(m.error.message));else p.resolve(m.result);}else for(const l of listeners)l(m);});
  const call=(method,params={},sessionId)=>new Promise((resolve,reject)=>{const n=++id;pending.set(n,{resolve,reject});ws.send(JSON.stringify({id:n,method,params,...(sessionId?{sessionId}:{})}));});
  const {targetId}=await call('Target.createTarget',{url:'about:blank'});const {sessionId:sid}=await call('Target.attachToTarget',{targetId,flatten:true});
  const evaluate=async expression=>{const r=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true},sid);if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;};
  const waitFor=async(expression,timeout=120000)=>{const end=Date.now()+timeout;while(Date.now()<end){if(await evaluate(`Boolean(${expression})`))return;await delay(150);}throw Error('Timed out '+expression);};
  await call('Page.enable',{},sid);await call('Runtime.enable',{},sid);
  await call('Emulation.setDeviceMetricsOverride',{width:1920,height:1080,deviceScaleFactor:1,mobile:false},sid);
  await call('Page.addScriptToEvaluateOnNewDocument',{source:`localStorage.setItem('wrong-floor.save.v1',JSON.stringify({version:1,settings:{quality:'high',captions:false,filmGrain:.35,brightness:1,reducedFlashes:true}}));`},sid);
  await call('Page.navigate',{url:base+'/game/?review=1'},sid);await waitFor('window.__wrongFloor');
  const shot=async name=>{await delay(200);const r=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false},sid);await writeFile(path.join(out,'screenshots',name+'.png'),Buffer.from(r.data,'base64'));console.log('Screenshot '+name);};
  await shot('01-wrong-floor-title');
  await evaluate(`window.__wrongFloor.start({seed:${JSON.stringify(seed)},manual:true})`);
  const shotRecords=[];
  for(const [i,env]of ['office','hotel','basement'].entries()){
    const state=await evaluate(`window.__wrongFloor.mediaSeek(${i},3.2)`);await shot(`${String(i+2).padStart(2,'0')}-${env}`);shotRecords.push(state);
  }
  const chosen=['tall','guest','ceiling','porter','shadow','mannequin'].map(entity=>schedule.find(r=>r.entity===entity));
  for(const [i,r]of chosen.entries()){
    const state=await evaluate(`window.__wrongFloor.mediaSeek(${r.index},${r.clueAt+(r.arrivalAt-r.clueAt)*.62})`);
    await shot(`${String(i+5).padStart(2,'0')}-${r.entity}`);shotRecords.push(state);
  }
  if(!process.argv.includes('--shots-only')){
    await call('Emulation.setDeviceMetricsOverride',{width:1280,height:720,deviceScaleFactor:1,mobile:false},sid);
    // Medium is a shipped user setting, preserving the native PS2 presentation.
    await evaluate(`(()=>{const e=document.querySelector('select[name="quality"]');e.value='medium';e.dispatchEvent(new Event('input',{bubbles:true}));})()`);
    const clips=[{name:'01-office',round:schedule[0],start:0,duration:6.1},
      ...chosen.filter(r=>['tall','guest','ceiling','porter','mannequin'].includes(r.entity)).map((r,i)=>({name:`${String(i+2).padStart(2,'0')}-${r.entity}`,round:r,start:.45,duration:5.9}))];
    const report=[];
    for(const clip of clips){
      const dir=path.join(raw,clip.name);await mkdir(dir,{recursive:true});
      await call('Input.dispatchKeyEvent',{type:'keyUp',key:' ',code:'Space',windowsVirtualKeyCode:32},sid);
      const state=await evaluate(`window.__wrongFloor.mediaSeek(${clip.round.index},${clip.start})`);await delay(300);
      const frames=[];let active=false;
      const listener=m=>{if(m.method==='Page.screencastFrame'&&m.sessionId===sid){void call('Page.screencastFrameAck',{sessionId:m.params.sessionId},sid);if(active)frames.push({t:m.params.metadata.timestamp,data:m.params.data});}};
      listeners.add(listener);await call('Page.startScreencast',{format:'jpeg',quality:92,maxWidth:1280,maxHeight:720,everyNthFrame:1},sid);
      const start=await evaluate('window.__recordStart()');active=true;const startWall=Date.now();await evaluate('window.__wrongFloor.mediaRun()');
      let closed=false;
      while(Date.now()-startWall<clip.duration*1000){
        if(clip.round.danger&&!closed){const s=await evaluate('window.__wrongFloor.snapshot()');if(s.roundTime>=s.round.arrivalAt-1.45){await call('Input.dispatchKeyEvent',{type:'keyDown',key:' ',code:'Space',windowsVirtualKeyCode:32},sid);closed=true;}}
        await delay(50);
      }
      const audio=await evaluate('window.__recordStop()');active=false;await call('Page.stopScreencast',{},sid);listeners.delete(listener);
      const endState=await evaluate('window.__wrongFloor.snapshot()');await evaluate('window.__wrongFloor.mediaFreeze()');
      await writeFile(path.join(dir,'audio.webm'),Buffer.from(audio,'base64'));
      const valid=frames.filter(f=>f.t>=start);if(valid.length<30)throw Error('Too few frames '+valid.length);
      let concat='ffconcat version 1.0\n';
      for(let i=0;i<valid.length;i++){const file=`frame-${String(i).padStart(4,'0')}.jpg`;await writeFile(path.join(dir,file),Buffer.from(valid[i].data,'base64'));concat+=`file '${file}'\nduration ${Math.max(.001,i+1<valid.length?valid[i+1].t-valid[i].t:.034).toFixed(6)}\n`;}
      concat+=`file 'frame-${String(valid.length-1).padStart(4,'0')}.jpg'\n`;await writeFile(path.join(dir,'frames.ffconcat'),concat);
      const row={name:clip.name,duration:clip.duration,frames:valid.length,fps:valid.length/(valid.at(-1).t-valid[0].t),videoOffset:valid[0].t-start,startState:state,endState};report.push(row);console.log(JSON.stringify({clip:clip.name,frames:row.frames,fps:row.fps,outcome:endState.outcome}));
    }
    await writeFile(path.join(raw,'clips.json'),JSON.stringify(report,null,2));
  }
  await writeFile(path.join(raw,'capture-provenance.json'),JSON.stringify({seed,shots:shotRecords,inspect:await evaluate('window.__wrongFloor.inspect()'),notes:'Actual engine and rendering. Review harness seeks between takes; each video take runs real time with trusted Space key input. No new assets or altered encounter timings.'},null,2));
  console.log('Media capture complete');
}finally{
  ws?.close();if(child.exitCode===null&&child.signalCode===null){child.kill();await delay(1000);}
  await rm(profile,{recursive:true,force:true,maxRetries:5,retryDelay:200}).catch(()=>{});server.closeAllConnections();await new Promise(r=>server.close(r));
}
