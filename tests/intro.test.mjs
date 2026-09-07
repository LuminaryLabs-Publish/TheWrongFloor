import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as T from '../game/vendor/three/three.module.js';
import {createIntroCharacter} from '../game/floor-30/intro-character.mjs';
import {createLobbyCycle,STAGES} from '../game/floor-30/cycle.mjs';
import {createLobbyScene} from '../game/floor-30/scene.mjs';

function fixture(name,disposed=()=>{}){
 const root=new T.Group(),node=new T.Group();node.name=name;root.add(node);
 const g=new T.BoxGeometry(.2,.3,.12),m=new T.MeshStandardMaterial();g.addEventListener('dispose',disposed);
 if(name==='intro-head'){g.morphAttributes.position=[g.attributes.position.clone()];}
 const mesh=new T.Mesh(g,m);if(name==='intro-head'){mesh.morphTargetDictionary={Smile:0};mesh.morphTargetInfluences=[0];}node.add(mesh);return root;
}
test('intro exports complete human hand and portable facial Smile morph',async()=>{
 for(const name of ['intro-head','intro-hand']){
  const b=await readFile(new URL(`../game/floor-30/assets/${name}.glb`,import.meta.url));assert.equal(b.readUInt32LE(8),b.length);
  const g=JSON.parse(b.subarray(20,20+b.readUInt32LE(12)));
  assert.ok(g.nodes.some(n=>n.name===name));assert.ok(g.buffers.every(b=>!b.uri));assert.ok(g.meshes.some(m=>m.primitives.some(p=>p.attributes.COLOR_0!==undefined)));
  if(name==='intro-head'){assert.ok(g.meshes.some(m=>m.extras?.targetNames?.includes('Smile')));assert.ok(g.meshes.some(m=>m.primitives.some(p=>p.targets?.length)));}
  else{assert.ok(g.nodes.some(n=>n.extras?.digits===5));for(let i=1;i<=5;i++)assert.ok(g.nodes.some(n=>n.name==='Claw-'+i));}
 }
});
test('head and both hands share exact visibility across intro and every interruption',async()=>{
 const actor=await createIntroCharacter(T,async name=>fixture(name));let maxSmile=0,maxTilt=0,maxGap=0;
 for(const stage of STAGES){const cycle=createLobbyCycle(stage);while(cycle.snapshot().stage!==stage)cycle.update(.01);
  for(let i=0;i<80;i++){
   const s=cycle.update(.04);actor.update(s);const v=actor.inspect();assert.equal(v.headVisible,s.claws>0);assert.deepEqual(v.handsVisible,[v.headVisible,v.headVisible]);
   maxSmile=Math.max(maxSmile,v.smile);maxTilt=Math.max(maxTilt,Math.abs(v.tilt));if(s.claws>0)maxGap=Math.max(maxGap,s.openness*2.8);
  }
  cycle.update(1.5,{held:true});cycle.update(.45);actor.update(cycle.snapshot());assert.equal(actor.inspect().visible,false);assert.equal(actor.inspect().smile,0);
 }
 assert.ok(maxSmile>.9);assert.ok(maxTilt>.2);assert.ok(maxGap>.45&&maxGap<.56);actor.dispose();
});
test('accessibility hides whole character or removes head motion without disabling smile',async()=>{
 const actor=await createIntroCharacter(T,async name=>fixture(name)),s={stage:'pry',stageTime:2.4,durations:[0,0,1,2.5],claws:1,openness:.18,strain:1};
 actor.update(s,{reducedMotion:true});assert.equal(actor.inspect().tilt,0);assert.ok(actor.inspect().smile>.9);assert.equal(actor.inspect().visible,true);
 actor.update(s,{softScares:true});assert.equal(actor.inspect().visible,false);assert.equal(actor.inspect().smile,0);actor.dispose();
});
test('shared hand geometry releases once and failed partial load releases head',async()=>{
 let count=0;const actor=await createIntroCharacter(T,async name=>fixture(name,()=>count++));actor.dispose();actor.dispose();assert.equal(count,2);
 count=0;await assert.rejects(createIntroCharacter(T,async name=>{if(name==='intro-hand')throw Error('missing hand');return fixture(name,()=>count++);}),/missing hand/);assert.equal(count,1);
});
test('lobby falls back to old claws when intro asset fails',async()=>{
 const loaded=[],lobby=await createLobbyScene(T,async name=>{loaded.push(name);return new T.Group();},{loadIntro:async()=>{throw Error('offline');}});
 assert.equal(lobby.inspect().intro.fallback,true);assert.equal(lobby.inspect().intro.error,'offline');assert.ok(loaded.includes('claw'));lobby.dispose();
});
