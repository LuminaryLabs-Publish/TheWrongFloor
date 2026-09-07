import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as T from '../game/vendor/three/three.module.js';
import {createRoomModels,ROOM_IDS} from '../game/src/room-models.mjs';
import {createFloorDetail} from '../game/src/floors/scene-kit.mjs';
import {createLobbyScene} from '../game/floor-30/scene.mjs';
import {bindRoomFlicker} from '../game/src/room-flicker.mjs';

test('all 18 authored environments ship offline with embedded textures',async()=>{
 assert.equal(ROOM_IDS.length,18);
 for(const id of ROOM_IDS){const bytes=await readFile(new URL(`../game/assets/rooms/${id}.glb`,import.meta.url));assert.equal(bytes.readUInt32LE(0),0x46546c67);assert.equal(bytes.readUInt32LE(8),bytes.length);const g=JSON.parse(bytes.subarray(20,20+bytes.readUInt32LE(12)));assert.ok(g.images.length);assert.ok(g.images.every(i=>Number.isInteger(i.bufferView)&&!i.uri));assert.ok(g.buffers.every(b=>!b.uri));assert.ok(!g.cameras?.length);assert.ok(g.nodes.some(n=>n.name===id));if(id==='entrance-lobby')for(const name of ['door-left','door-right'])assert.ok(g.nodes.some(n=>n.name===name&&n.extras.runtimeRole==='slidingDoor'));}
});
test('room cache deduplicates loads and owns geometry until final disposal',async()=>{
 let loads=0,geometryDisposed=0,materialDisposed=0;
 const root=new T.Group(),g=new T.BoxGeometry(),m=new T.MeshStandardMaterial();g.addEventListener('dispose',()=>geometryDisposed++);m.addEventListener('dispose',()=>materialDisposed++);root.add(new T.Mesh(g,m));
 const cache=createRoomModels({load:async()=>{loads++;return root;}});
 assert.deepEqual(await Promise.all([cache.prepare('archive'),cache.prepare('archive')]),[true,true]);assert.equal(loads,1);
 const a=cache.instantiate('archive'),b=cache.instantiate('archive');assert.equal(a.children[0].geometry,b.children[0].geometry);a.userData.release();a.userData.release();assert.equal(geometryDisposed,0);assert.equal(cache.inspect().instances,1);
 cache.dispose();cache.dispose();assert.equal(geometryDisposed,1);assert.equal(materialDisposed,1);assert.equal(cache.inspect().instances,0);assert.equal(cache.instantiate('archive'),null);
});
test('failed assets return fallback status and retry only on a new preparation cycle',async()=>{
 let loads=0;const cache=createRoomModels({load:async()=>{if(++loads===1)throw Error('offline');return new T.Group();}});
 assert.equal(await cache.prepare('vault'),false);assert.equal(await cache.prepare('vault'),false);assert.equal(loads,1);assert.equal(cache.instantiate('vault'),null);cache.clearFailures();assert.equal(await cache.prepare('vault'),true);assert.equal(loads,2);cache.dispose();
});
test('disposal during a pending load releases the late result',async()=>{
 let resolve,disposals=0;const root=new T.Group(),g=new T.BoxGeometry();g.addEventListener('dispose',()=>disposals++);root.add(new T.Mesh(g,new T.MeshStandardMaterial()));
 const cache=createRoomModels({load:()=>new Promise(r=>resolve=r)}),pending=cache.prepare('archive');cache.dispose();resolve(root);assert.equal(await pending,false);assert.equal(disposals,1);assert.deepEqual(cache.inspect().loaded,[]);
});
test('authored rooms retain changing inspection clues without procedural furniture',()=>{
 const labels=[];const label=(root,value)=>{const o=new T.Group();o.userData.setText=v=>o.userData.value=v;o.userData.value=value;root.add(o);labels.push(o);return o;};
 const round={profile:'archive',seed:3,danger:true,puzzle:{rule:'MATCH 45',normal:'45',anomaly:'54'}};
 const detail=createFloorDetail(T,round,{label,decorations:false});assert.equal(detail.children.length,3);assert.equal(detail.children.filter(o=>o.isMesh).length,0);detail.userData.update({clueVisible:false});assert.equal(labels[2].userData.value,'45');detail.userData.update({clueVisible:true});assert.equal(labels[2].userData.value,'54');
});
test('combined entrance skips old scenery while preserving doors and claws',async()=>{
 const root=new T.Group();root.userData.roomAsset='entrance-lobby';let releases=0,updates=0;root.userData.release=()=>releases++;root.userData.updateRoom=()=>updates++;
 for(const [name,x] of [['door-left',-.7],['door-right',.7]]){const p=new T.Group();p.name=name;p.position.set(x,0,-2.96);root.add(p);}
 const loaded=[];const lobby=await createLobbyScene(T,async name=>{loaded.push(name);return new T.Group();},{authored:root});assert.deepEqual(loaded,['claw']);lobby.update({openness:1,claws:0,strain:0,shudder:0,stageTime:0},{},.1);assert.deepEqual(lobby.inspect().doorPositions,[-2.0999999999999996,2.0999999999999996]);assert.equal(updates,1);assert.ok(lobby.scene.getObjectByName('outside-claw--1'));lobby.dispose();lobby.dispose();assert.equal(releases,1);
});
test('flicker dims paired fixtures without mutating templates and supports steady mode',()=>{
 const root=new T.Group(),light=new T.PointLight(0xffffff,9),material=new T.MeshStandardMaterial({emissive:0xffffff,emissiveIntensity:3}),mesh=new T.Mesh(new T.BoxGeometry(),material);
 light.userData={flickerRole:'light',flickerSeed:1};mesh.userData={flickerRole:'emitter',flickerSeed:1};root.add(light,mesh);const control=bindRoomFlicker(root);let min=1;
 for(let i=0;i<700;i++){control.update(i/100);min=Math.min(min,light.intensity/9);assert.ok(Math.abs(light.intensity/9-mesh.material.emissiveIntensity/3)<1e-9);}
 assert.ok(min<.3);control.update(6.4,true);assert.equal(light.intensity,9);assert.equal(mesh.material.emissiveIntensity,3);assert.equal(material.emissiveIntensity,3);control.dispose();
});
