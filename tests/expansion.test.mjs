import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../game/vendor/three/three.module.js';
import {createSchedule} from '../game/src/director.mjs';
import {FLOOR_PROFILES,createInspection,inspectionReading} from '../game/src/floors/catalog.mjs';
import {createRiggedCreature,RIGGED_ENTITIES} from '../game/src/creatures/rig.mjs';
import {createFloorDetail} from '../game/src/floors/scene-kit.mjs';
import {createLobbyAudioPolicy} from '../game/floor-30/audio.mjs';
test('every run visits all fifteen profiles twice with solvable inspection clues',()=>{
 for(let seed=0;seed<100;seed++){const rounds=createSchedule(seed);for(const p of FLOOR_PROFILES)assert.equal(rounds.filter(r=>r.profile===p.id).length,2);
 for(const r of rounds){assert.notEqual(r.puzzle.normal,r.puzzle.anomaly);assert.equal(inspectionReading(r.puzzle,r,false),r.puzzle.normal);assert.equal(inspectionReading(r.puzzle,r,true),r.danger?r.puzzle.anomaly:r.puzzle.normal);}}
});
test('all room kits build bounded geometry and dispose without browser dependencies',()=>{
 for(const p of FLOOR_PROFILES){const room=createFloorDetail(T,{profile:p.id,seed:3});let meshes=0;room.traverse(o=>{if(!o.isMesh)return;meshes++;o.geometry.computeBoundingBox();assert.ok(Number.isFinite(o.geometry.boundingBox.max.x));o.geometry.dispose();o.material.dispose();});assert.ok(meshes>0&&meshes<20);}
});
test('skins contain normalized valid bone weights and actually deform under walking',()=>{
 for(const kind of RIGGED_ENTITIES){const root=createRiggedCreature(T,kind),skin=root.getObjectByName('weighted-skin');assert.ok(skin.isSkinnedMesh);assert.ok(skin.skeleton.bones.length===24);const w=skin.geometry.attributes.skinWeight,ids=skin.geometry.attributes.skinIndex;for(let i=0;i<w.count;i++){assert.ok(Math.abs(w.getX(i)+w.getY(i)+w.getZ(i)+w.getW(i)-1)<1e-6);assert.ok(ids.getX(i)<skin.skeleton.bones.length&&ids.getY(i)<skin.skeleton.bones.length);}root.updateMatrixWorld(true);skin.skeleton.update();const before=Array.from(skin.skeleton.boneMatrices);root.userData.animate(1.7,.8,1);root.updateMatrixWorld(true);skin.skeleton.update();assert.notDeepEqual(Array.from(skin.skeleton.boneMatrices),before);root.traverse(o=>{o.geometry?.dispose();o.skeleton?.dispose();o.material?.dispose();});}
});
test('safe lobby stage edges emit once and never emit gameplay failure',()=>{const events=[],p=createLobbyAudioPolicy(e=>events.push(e));for(const stage of ['quiet','closing','pry','retreat','closed','opening'])for(let i=0;i<60;i++)p.update({stage,cycle:1});assert.equal(events.length,6);assert.ok(events.every(e=>e.type.startsWith('lobby-')));p.reset();p.update({stage:'quiet',cycle:1});assert.equal(events.length,7);});
