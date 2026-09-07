import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
export async function runCinematicChecks({call,evaluate,waitFor,baseUrl,listeners,delay}){
 if(process.argv.includes('--cinematic-safety'))return runCinematicSafety({call,evaluate,waitFor,baseUrl});
 const out='_review/cinematic/browser';await mkdir(out,{recursive:true});const errors=[],samples=[];
 const {targetId}=await call('Target.createTarget',{url:'about:blank'}),{sessionId}=await call('Target.attachToTarget',{targetId,flatten:true});
 const listener=m=>{if(m.sessionId===sessionId&&m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);};listeners.add(listener);
 try{
  await call('Page.enable',{},sessionId);await call('Runtime.enable',{},sessionId);await call('Emulation.setDeviceMetricsOverride',{width:1280,height:800,deviceScaleFactor:1,mobile:false},sessionId);
  await call('Page.navigate',{url:baseUrl+'/game/?review=1'},sessionId);await waitFor(sessionId,'window.__wrongFloor',60000);
  const read=()=>evaluate(sessionId,'({audio:__wrongFloor.inspect().audio,intro:__wrongFloor.inspect().cinematic,game:__wrongFloor.snapshot().mode,inert:document.querySelector("#title-screen").inert,credit:getComputedStyle(document.querySelector("#studio-credit")).opacity,title:getComputedStyle(document.querySelector("#title-screen")).opacity})');
  let initial=await read();assert.equal(initial.intro.error,null);assert.equal(initial.intro.started,true);assert.equal(initial.intro.active,true);
  // A start key during the film must neither advance lobby hold nor enter the game.
  await call('Input.dispatchKeyEvent',{type:'keyDown',key:' ',code:'Space',windowsVirtualKeyCode:32},sessionId);await delay(1600);await call('Input.dispatchKeyEvent',{type:'keyUp',key:' ',code:'Space',windowsVirtualKeyCode:32},sessionId);assert.equal(await evaluate(sessionId,'__wrongFloor.snapshot().mode'),'title');
  for(const [seconds,name] of [[6,'01-studio'],[14,'02-ascent'],[32,'03-approach'],[38.5,'03b-lobby'],[39.4,'04-crossfade'],[40,'05-menu']]){
   await waitFor(sessionId,`__wrongFloor.inspect().cinematic.seconds>=${seconds}`,65000);
   const state=await read();samples.push(state);assert.equal(state.intro.error,null);
   const {data}=await call('Page.captureScreenshot',{format:'png'},sessionId);await writeFile(out+'/'+name+'.png',Buffer.from(data,'base64'));
  }
  assert.deepEqual(samples[0].audio.opening.failures,[]);assert.ok(samples[0].audio.opening.playing.includes('horrorintro'));assert.ok(!samples[0].audio.opening.playing.includes('creepytheme'));assert.ok(samples[4].audio.opening.playing.includes('horrorintro'));assert.ok(samples[4].audio.opening.playing.includes('creepytheme'));await waitFor(sessionId,`__wrongFloor.inspect().audio.opening.playing.length===1&&!__wrongFloor.inspect().audio.opening.playing.includes('horrorintro')`,5000);assert.ok(samples[0].intro.credit>.99);assert.equal(samples[1].intro.credit,0);assert.ok(samples[4].intro.fade>0&&samples[4].intro.fade<1);assert.equal(samples[5].intro.active,false);assert.equal(samples[5].inert,false);
  const fps=(samples[2].intro.frames-samples[1].intro.frames)/(samples[2].intro.seconds-samples[1].intro.seconds);assert.ok(fps>27&&fps<31,'30fps cadence: '+fps);
  await call('Input.dispatchKeyEvent',{type:'keyDown',key:' ',code:'Space',windowsVirtualKeyCode:32},sessionId);await waitFor(sessionId,'__wrongFloor.lobby().accepted',15000);await call('Input.dispatchKeyEvent',{type:'keyUp',key:' ',code:'Space',windowsVirtualKeyCode:32},sessionId);await waitFor(sessionId,'__wrongFloor.snapshot().mode==="running"',60000);
  await waitFor(sessionId,'__wrongFloor.inspect().audio.opening.playing.length===0',5000);
  assert.deepEqual(errors,[]);await writeFile(out+'/validation.json',JSON.stringify({fps,samples,errors,realTimePlayback:true,entryWorks:true},null,2));console.log('Cinematic passed: 40s real-time playback, '+fps.toFixed(2)+'fps, credit fades, direct crossfade, gated then working entry.');
 }finally{listeners.delete(listener);await call('Target.closeTarget',{targetId});}
}
async function runCinematicSafety({call,evaluate,waitFor,baseUrl}){
 const reports=[];
 for(const blocked of [false,true]){
  const {targetId}=await call('Target.createTarget',{url:'about:blank'}),{sessionId}=await call('Target.attachToTarget',{targetId,flatten:true});
  try{
   for(const method of ['Page.enable','Runtime.enable','Network.enable'])await call(method,{},sessionId);
   await call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false},sessionId);
   if(blocked)await call('Network.setBlockedURLs',{urls:['*/shaders/thirtieth-floor.frag']},sessionId);
   await call('Page.navigate',{url:baseUrl+'/game/?review=1'},sessionId);await waitFor(sessionId,'window.__wrongFloor',60000);
   if(!blocked){
    const start=Date.now();await evaluate(sessionId,'document.querySelector("#skip-intro").focus()');
    await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13},sessionId);await call('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13},sessionId);
    await waitFor(sessionId,'!__wrongFloor.inspect().cinematic.active',10000);assert.ok(Date.now()-start<6000);
   }
   const state=await evaluate(sessionId,'({intro:__wrongFloor.inspect().cinematic,inert:document.querySelector("#title-screen").inert,error:document.querySelector("#fatal-error").textContent,visible:!document.querySelector("#title-screen").hidden,mode:__wrongFloor.snapshot().mode})');
   assert.equal(state.intro.active,false);assert.equal(state.inert,false);assert.equal(state.error,'');assert.equal(state.mode,'title');assert.equal(state.visible,true);assert.equal(Boolean(state.intro.error),blocked);reports.push({blocked,state});
  }finally{await call('Target.closeTarget',{targetId});}
 }
 await writeFile('_review/cinematic/browser/safety.json',JSON.stringify(reports,null,2));console.log('Cinematic safety passed: keyboard skip on portrait, shader failure returns usable menu.');
}
