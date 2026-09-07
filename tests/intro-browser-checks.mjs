import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
export async function runIntroChecks({call,evaluate,waitFor,baseUrl,listeners,delay}){
 const output='_review/intro-character/browser';await mkdir(output,{recursive:true});const reports=[];
 for(const blocked of [false,true]){
  const {targetId}=await call('Target.createTarget',{url:'about:blank'}),{sessionId}=await call('Target.attachToTarget',{targetId,flatten:true});
  const errors=[];const listener=m=>{if(m.sessionId===sessionId&&m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);};listeners.add(listener);
  try{
   for(const method of ['Page.enable','Runtime.enable','Network.enable'])await call(method,{},sessionId);
   await call('Emulation.setDeviceMetricsOverride',{width:1280,height:800,deviceScaleFactor:1,mobile:false},sessionId);
   if(blocked)await call('Network.setBlockedURLs',{urls:['*/floor-30/assets/intro-*.glb']},sessionId);
   await call('Page.navigate',{url:baseUrl+'/game/?review=1&skipIntro=1'},sessionId);await waitFor(sessionId,'window.__wrongFloor && !document.querySelector("#play-button").disabled',60000);
   const before=await evaluate(sessionId,'__wrongFloor.inspect().lobby');assert.equal(before.intro.asset,blocked?null:'corpse-doorkeeper');
   if(!blocked){
    await waitFor(sessionId,'__wrongFloor.lobby().stage==="emerge"',30000);
    const samples=[];const deadline=Date.now()+6500;let shot=false,index=0;
    while(Date.now()<deadline){
     const v=await evaluate(sessionId,'({pose:__wrongFloor.lobby(),visual:__wrongFloor.inspect().lobby})');samples.push(v);
     assert.equal(v.visual.intro.headVisible,v.pose.claws>0);assert.deepEqual(v.visual.intro.handsVisible,[v.visual.intro.headVisible,v.visual.intro.headVisible]);
     if(v.visual.intro.smile>.75&&!shot){const {data}=await call('Page.captureScreenshot',{format:'png'},sessionId);await writeFile(output+'/intro-smile.png',Buffer.from(data,'base64'));shot=true;}
     const {data}=await call('Page.captureScreenshot',{format:'jpeg',quality:88},sessionId);await writeFile(output+`/frame-${String(index++).padStart(3,'0')}.jpg`,Buffer.from(data,'base64'));
     await delay(140);
    }
    assert.ok(shot,'smile became readable');assert.ok(samples.some(v=>v.pose.stage==='retreat'&&!v.visual.intro.visible));
    reports.push({blocked,samples,frames:index,errors});
   }else reports.push({blocked,fallback:before.intro,errors});
   // Actual hold gesture still starts through the interrupted character animation.
   await call('Input.dispatchKeyEvent',{type:'keyDown',key:' ',code:'Space',windowsVirtualKeyCode:32},sessionId);
   await waitFor(sessionId,'__wrongFloor.lobby().accepted',15000);
   await waitFor(sessionId,'!__wrongFloor.inspect().lobby.intro.headVisible',15000);
   await call('Input.dispatchKeyEvent',{type:'keyUp',key:' ',code:'Space',windowsVirtualKeyCode:32},sessionId);
   await waitFor(sessionId,'__wrongFloor.snapshot().mode==="running"',60000);
   assert.deepEqual(errors,[]);await evaluate(sessionId,'__wrongFloor.dispose()');
  }finally{listeners.delete(listener);await call('Target.closeTarget',{targetId});}
 }
 await writeFile(output+'/validation.json',JSON.stringify(reports,null,2));console.log('Intro browser passed: smile/tilt, shared disappearance, real hold entry, blocked-asset fallback.');
}
