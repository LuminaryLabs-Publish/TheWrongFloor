import assert from 'node:assert/strict';
import {writeFile,mkdir} from 'node:fs/promises';
export async function runRoomSafetyChecks({call,evaluate,waitFor,baseUrl}){
 const reports=[];
 for(const blocked of [false,true]){
  const {targetId}=await call('Target.createTarget',{url:'about:blank'}),{sessionId}=await call('Target.attachToTarget',{targetId,flatten:true});
  try{
   await call('Page.enable',{},sessionId);await call('Runtime.enable',{},sessionId);await call('Network.enable',{},sessionId);
   if(blocked)await call('Network.setBlockedURLs',{urls:['*/assets/rooms/*.glb']},sessionId);
   await call('Page.navigate',{url:baseUrl+'/game/?review=1&skipIntro=1'},sessionId);
   await waitFor(sessionId,'window.__wrongFloor && !document.querySelector("#fatal-error").textContent',45000);
   const initial=await evaluate(sessionId,'__wrongFloor.inspect()');assert.equal(initial.lobby.asset,blocked?null:'entrance-lobby');
   // Unlock audio through an actual user gesture, as the normal entry flow does.
   await call('Input.dispatchKeyEvent',{type:'keyDown',key:' ',code:'Space',windowsVirtualKeyCode:32},sessionId);
   await call('Input.dispatchKeyEvent',{type:'keyUp',key:' ',code:'Space',windowsVirtualKeyCode:32},sessionId);
   console.log('Room safety: starting',blocked?'blocked-asset fallback':'cached transitions');
   await evaluate(sessionId,"__wrongFloor.start({seed:'room-safety',manual:true})");
   const loaded=await evaluate(sessionId,'__wrongFloor.inspect()');assert.equal(loaded.rooms.cabin,blocked?null:'elevator-interior');assert.ok(loaded.renderer.triangles>0);
   if(blocked){
    assert.equal(loaded.rooms.active,null);assert.ok(Object.keys(loaded.rooms.failures).length>=17);
    const outcome=await evaluate(sessionId,`(()=>{for(let i=0;i<30;i++){const r=__wrongFloor.snapshot().round;if(r.danger){__wrongFloor.advance(r.clueAt+.1,{close:false});__wrongFloor.advance(1.2,{close:true});}else __wrongFloor.advance(7.3,{close:false});const s=__wrongFloor.snapshot();if(s.mode!=='running')break;__wrongFloor.advance(Math.max(0,10-s.roundTime),{close:false});}return {state:__wrongFloor.snapshot(),inspect:__wrongFloor.inspect()};})()`);
    assert.equal(outcome.state.mode,'won');assert.equal(outcome.state.elapsed,300);assert.equal(outcome.inspect.rooms.active,null);reports.push({blocked,passed:true,loaded,finalMode:outcome.state.mode});
   }else{
    // Warm every asset, then repeat the same cycle; resource counts must stay bounded.
    const data=await evaluate(sessionId,`(async()=>{const profiles=${JSON.stringify(['archive','infirmary','laundry','conservatory','chapel','switchboard','security','cold-store','workshop','gallery','nursery','broadcast','filtration','dining','vault'])};const rounds=[];for(let cycle=0;cycle<3;cycle++){for(const profile of profiles)await __wrongFloor.preview({profile,seed:'repeat-'+profile,entity:'warden'});rounds.push(__wrongFloor.inspect());}return rounds;})()`);
    assert.deepEqual(data[2].rooms.failures,{});assert.equal(data[2].rooms.instances,3);
    assert.equal(data[2].renderer.geometries,data[1].renderer.geometries);assert.equal(data[2].renderer.textures,data[1].renderer.textures);
    reports.push({blocked,passed:true,cycles:data.map(i=>({rooms:i.rooms,geometries:i.renderer.geometries,textures:i.renderer.textures}))});
   }
   await evaluate(sessionId,'__wrongFloor.dispose()');
  }finally{await call('Target.closeTarget',{targetId});}
 }
 await mkdir('_review/room-integration',{recursive:true});await writeFile('_review/room-integration/safety.json',JSON.stringify(reports,null,2));console.log('Room safety passed: repeated assets keep stable GPU counts; blocked GLBs retain complete procedural gameplay.');
}
