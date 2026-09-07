import test from 'node:test';
import assert from 'node:assert/strict';
import {createLobbyCycle,STAGES} from '../game/floor-30/cycle.mjs';
import {moduleReferences} from '../scripts/module-references.mjs';
import {createLobbyScene} from '../game/floor-30/scene.mjs';
import {createLobbyEntry} from '../game/floor-30/entry.mjs';
import * as THREE from '../game/vendor/three/three.module.js';
test('lobby cycles are repeatable, bounded and safe at the door seam',()=>{const a=createLobbyCycle(),b=createLobbyCycle();for(let i=0;i<5000;i++){const s=a.update(.05);assert.deepEqual(s,b.update(.05));[[2,8],[.5,1],[1,1],[2,3],[1,1],[2,4],[2,3]].forEach(([lo,hi],j)=>assert.ok(s.durations[j]>=lo&&s.durations[j]<=hi));assert.ok(s.openness>=0&&s.openness<=1);if(s.claws>0)assert.ok(s.openness>=.0149);}});
test('entry interrupts every stage, retracts before closing, and resolves once',()=>{for(const stage of STAGES){const c=createLobbyCycle(stage);while(c.snapshot().stage!==stage)c.update(.01);const before=c.snapshot();c.update(1.5,{held:true});assert.equal(c.snapshot().accepted,true);c.update(.45);assert.equal(c.snapshot().claws,0);assert.equal(c.snapshot().openness,before.openness);c.update(.45);assert.equal(c.snapshot().readyToEnter,true);assert.equal(c.snapshot().openness,0);c.update(5,{held:true});assert.equal(c.snapshot().stage,'entering');}});
test('release and focus cancel hold, hidden simulation freezes',()=>{const c=createLobbyCycle();c.update(1.4,{held:true});c.update(0);assert.equal(c.snapshot().holdProgress,0);c.update(1.4,{held:true});const t=c.snapshot().stageTime;c.update(5,{active:false,held:true});assert.equal(c.snapshot().stageTime,t);assert.equal(c.snapshot().accepted,false);assert.equal(c.snapshot().holdProgress,0);});
test('invalid deltas are rejected',()=>{for(const dt of [-1,NaN,Infinity,61])assert.throws(()=>createLobbyCycle().update(dt));});
test('dependency parser distinguishes real imports from documentation',()=>{assert.deepEqual(moduleReferences('// import x from "https://example.invalid"\nimport x from "./real.mjs"; const a=new URL("./asset.glb",import.meta.url);'),['./real.mjs','./asset.glb']);assert.throws(()=>moduleReferences('export const =;'));});
test('scene loads seven unique assets and releases shared resources exactly once',async()=>{let loads=0;const counts=[];const visual=await createLobbyScene(THREE,async()=>{loads++;const root=new THREE.Group(),g=new THREE.BoxGeometry();let count=0;g.addEventListener('dispose',()=>count++);counts.push(()=>count);root.add(new THREE.Mesh(g,new THREE.MeshStandardMaterial()));return root;});assert.equal(loads,7);visual.resize(0,0);assert.ok(Number.isFinite(visual.camera.aspect));visual.dispose();visual.dispose();assert.ok(counts.every(c=>c()===1));});
test('failed asset load releases earlier resources',async()=>{let count=0;await assert.rejects(createLobbyScene(THREE,async name=>{if(name==='fixtures')throw Error('missing');const root=new THREE.Group(),g=new THREE.BoxGeometry();g.addEventListener('dispose',()=>count++);root.add(new THREE.Mesh(g,new THREE.MeshStandardMaterial()));return root;}),/missing/);assert.equal(count,1);});
test('entry holds start once, block repeated Space until release and clear held gamepad after blur',()=>{
 const saved=new Map(['window','document','navigator'].map(k=>[k,Object.getOwnPropertyDescriptor(globalThis,k)]));const win=new EventTarget(),doc=new EventTarget(),button=new EventTarget();button.style={setProperty(){}};doc.activeElement=button;doc.hidden=false;let pressed=false,active=true,starts=0;
 for(const [k,v] of Object.entries({window:win,document:doc,navigator:{getGamepads:()=>[{buttons:[{pressed}]}]}}))Object.defineProperty(globalThis,k,{value:v,configurable:true});
 const entry=createLobbyEntry({button,isActive:()=>active,onAccept(){starts++;active=false;},onGesture(){}});const key=(type,repeat=false)=>{const e=new Event(type,{cancelable:true});Object.defineProperties(e,{code:{value:'Space'},repeat:{value:repeat}});win.dispatchEvent(e);return e;};
 try{key('keydown');entry.update(.4);key('keyup');assert.equal(entry.snapshot().holdProgress,0);key('keydown');entry.update(1.5);entry.update(.9);assert.equal(starts,1);assert.equal(key('keydown',true).defaultPrevented,true);key('keyup');assert.equal(key('keydown',true).defaultPrevented,false);entry.update(1);assert.equal(starts,1);active=true;entry.reset();pressed=true;entry.update(.5);win.dispatchEvent(new Event('blur'));entry.update(2);assert.equal(entry.snapshot().accepted,false);pressed=false;entry.update(0);pressed=true;entry.update(1.5);entry.update(.9);assert.equal(starts,2);}finally{entry.dispose();for(const [k,d] of saved){if(d)Object.defineProperty(globalThis,k,d);else delete globalThis[k];}}
});
test('inside camera faces lobby and outside claws remain confined to doorway',async()=>{
 const {kit}=await import('../game/floor-30/factory.mjs');
 const visual=await createLobbyScene(THREE,async name=>{
  const root=new THREE.Group();if(name!=='claw')return root;
  for(const part of kit.services.generate({seed:'floor30-001',params:{asset:'claw'}}).meshes){const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(part.positions,3));const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial());m.name=part.id;root.add(m);}return root;
 });
 try{
  for(const [w,h] of [[1920,1080],[1280,720],[3440,1440],[390,844]]){visual.resize(w,h);assert.equal(visual.camera.position.z,-4.9);assert.equal(visual.camera.position.y,1.64);assert.ok(visual.camera.getWorldDirection(new THREE.Vector3()).z>.99);}
  const c=createLobbyCycle();for(let i=0;i<400;i++){const s=c.update(.05);visual.update(s);visual.scene.updateMatrixWorld(true);for(const side of [-1,1]){const root=visual.scene.getObjectByName('outside-claw-'+side);if(root.visible){const b=new THREE.Box3().setFromObject(root);assert.ok(b.min.z>-3.35&&b.max.z<-2.5,'claws stay at threshold');assert.ok(Math.max(Math.abs(b.min.x),Math.abs(b.max.x))<.65);}}}
  visual.update({openness:.02,claws:1,strain:1,shudder:.004,stageTime:1},{softScares:true});for(const side of [-1,1])assert.equal(visual.scene.getObjectByName('outside-claw-'+side).visible,false);
 }finally{visual.dispose();}
});
