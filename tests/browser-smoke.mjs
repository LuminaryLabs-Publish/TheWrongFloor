import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { runWrongFloorBrowserChecks } from './browser-review.mjs';

const root = path.resolve('dist');
const reviewDir = process.env.WRONG_FLOOR_REVIEW_DIR ? path.resolve(process.env.WRONG_FLOOR_REVIEW_DIR) : null;
const mime = { '.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json','.webp':'image/webp','.png':'image/png' };
const server = createServer(async (request,response) => {
  try {
    const url = new URL(request.url,'http://localhost');
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
    const file = path.resolve(root, relative.endsWith('/') ? `${relative}index.html` : relative);
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) throw new Error('outside site');
    const body = await readFile(file);
    response.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'}).end(body);
  } catch { response.writeHead(404).end('not found'); }
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const baseUrl = `http://127.0.0.1:${server.address().port}`;
const delay = ms => new Promise(resolve=>setTimeout(resolve,ms));

const candidates=[process.env.CHROME_PATH,'google-chrome','google-chrome-stable','chromium','chromium-browser'].filter(Boolean);
const chrome=candidates.find(candidate=>spawnSync(candidate,['--version'],{stdio:'ignore'}).status===0);
assert.ok(chrome,'Chrome or Chromium is required for the browser check');
const profile=await mkdtemp(path.join(tmpdir(),'wrong-floor-chrome-'));
const child=spawn(chrome,[
  '--headless=new','--no-sandbox','--disable-dev-shm-usage','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader',
  '--ignore-gpu-blocklist','--disable-background-timer-throttling','--disable-renderer-backgrounding','--window-size=1280,800',
  '--remote-debugging-port=0',`--user-data-dir=${profile}`,'about:blank'
],{stdio:['ignore','ignore','pipe']});

async function endpoint(){
  for(let attempt=0;attempt<100;attempt++){
    try{
      const [port]=String(await readFile(path.join(profile,'DevToolsActivePort'))).trim().split(/\s+/);
      return (await fetch(`http://127.0.0.1:${port}/json/version`).then(response=>response.json())).webSocketDebuggerUrl;
    }catch{await delay(100);}
  }
  throw new Error('Chrome did not expose DevTools');
}
const socket=new WebSocket(await endpoint());
await new Promise((resolve,reject)=>{socket.addEventListener('open',resolve,{once:true});socket.addEventListener('error',reject,{once:true});});
let callId=0;
const pending=new Map(),listeners=new Set();
socket.addEventListener('message',({data})=>{
  const message=JSON.parse(String(data));
  if(message.id){const task=pending.get(message.id);pending.delete(message.id);if(message.error)task?.reject(new Error(`${task.method}: ${message.error.message}`));else task?.resolve(message.result);}
  else for(const listener of listeners)listener(message);
});
function call(method,params={},sessionId){
  const id=++callId;socket.send(JSON.stringify({id,method,params,...(sessionId?{sessionId}:{})}));
  return new Promise((resolve,reject)=>pending.set(id,{resolve,reject,method}));
}
function event(method,sessionId,timeoutMs=15000){
  return new Promise((resolve,reject)=>{
    const timeout=setTimeout(()=>{listeners.delete(listener);reject(new Error(`Timed out waiting for ${method}`));},timeoutMs);
    const listener=message=>{if(message.method===method&&(!sessionId||message.sessionId===sessionId)){clearTimeout(timeout);listeners.delete(listener);resolve(message.params);}};
    listeners.add(listener);
  });
}
async function evaluate(sessionId,expression){
  const result=await call('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true},sessionId);
  if(result.exceptionDetails)throw new Error(result.exceptionDetails.exception?.description||result.exceptionDetails.text);
  return result.result.value;
}
async function waitFor(sessionId,expression,timeoutMs=15000){
  const deadline=Date.now()+timeoutMs;
  while(Date.now()<deadline){if(await evaluate(sessionId,`Boolean(${expression})`))return;await delay(150);}
  throw new Error(`Condition did not become true: ${expression}`);
}

async function checkLanding(){
  const {targetId}=await call('Target.createTarget',{url:'about:blank'});
  const {sessionId}=await call('Target.attachToTarget',{targetId,flatten:true});
  try{
    await Promise.all([call('Page.enable',{},sessionId),call('Runtime.enable',{},sessionId)]);
    const loaded=event('Page.loadEventFired',sessionId,20000);
    await call('Page.navigate',{url:`${baseUrl}/`},sessionId);await loaded;
    await waitFor(sessionId,'document.querySelector(".play") && document.querySelector(".hero img")?.complete',20000);
    const state=await evaluate(sessionId,'(()=>{const a=document.querySelector(".play"),i=document.querySelector(".hero img");return{title:document.title,heading:document.querySelector("h1")?.textContent,play:new URL(a.href).pathname,cover:{complete:i.complete,width:i.naturalWidth,height:i.naturalHeight}}})()');
    assert.equal(state.heading,'Wrong Floor');assert.equal(state.play,'/game/');assert.deepEqual(state.cover,{complete:true,width:1536,height:1024});
    if(reviewDir){await mkdir(reviewDir,{recursive:true});const {data}=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false},sessionId);await writeFile(path.join(reviewDir,'landing.png'),Buffer.from(data,'base64'));await writeFile(path.join(reviewDir,'landing.json'),`${JSON.stringify(state,null,2)}\n`);}
    console.log('browser landing ok: cover, title and Play link');
  }finally{await call('Target.closeTarget',{targetId});}
}

try{
  await checkLanding();
  await runWrongFloorBrowserChecks({call,event,evaluate,waitFor,listeners,baseUrl,delay});
}finally{
  socket.close();
  if(child.exitCode===null){
    const gracefulExit=new Promise(resolve=>child.once('exit',resolve));
    child.kill('SIGTERM');
    await Promise.race([gracefulExit,delay(3000)]);
    if(child.exitCode===null){
      const forcedExit=new Promise(resolve=>child.once('exit',resolve));
      child.kill('SIGKILL');
      await forcedExit;
    }
  }
  await rm(profile,{recursive:true,force:true,maxRetries:10,retryDelay:100});
  await new Promise(resolve=>server.close(resolve));
}
