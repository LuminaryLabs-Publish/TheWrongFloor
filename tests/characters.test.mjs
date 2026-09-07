import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { CHARACTER_ROLES } from '../game/src/character-models.mjs';

test('four offline GLBs contain skins, embedded materials and changing animation data',async()=>{
  for(const name of ['butler','hollow','matriarch','unburied']){
    const bytes=await readFile(new URL(`../game/assets/characters/${name}.glb`,import.meta.url));
    assert.equal(bytes.readUInt32LE(0),0x46546c67);assert.equal(bytes.readUInt32LE(8),bytes.length);
    const size=bytes.readUInt32LE(12),gltf=JSON.parse(bytes.subarray(20,20+size)),binary=bytes.subarray(28+size);
    assert.ok(gltf.skins.length>0);assert.ok(gltf.images.length>0);
    assert.ok(gltf.images.every(i=>Number.isInteger(i.bufferView)&&!i.uri));assert.ok(gltf.buffers.every(b=>!b.uri));
    for(const clipName of name==='unburied'?['Idle']:['Idle','Walk']){
      const clip=gltf.animations.find(c=>c.name===clipName);assert.ok(clip,`${name} ${clipName}`);
      const changing=clip.samplers.some(s=>{
        const a=gltf.accessors[s.output],v=gltf.bufferViews[a.bufferView],n={SCALAR:1,VEC3:3,VEC4:4}[a.type];
        if(a.componentType!==5126||!n||a.count<2)return false;
        const offset=(v.byteOffset??0)+(a.byteOffset??0),stride=v.byteStride??n*4;
        for(let i=1;i<a.count;i++)for(let j=0;j<n;j++)if(Math.abs(binary.readFloatLE(offset+i*stride+j*4)-binary.readFloatLE(offset+j*4))>1e-5)return true;
        return false;
      });assert.ok(changing,`${name} ${clipName} actually moves`);
    }
  }
});

test('Unburied is assigned only to the harmless looming role',()=>{
  assert.equal(CHARACTER_ROLES.looming,'unburied');
  for(const role of ['guest','tall','ceiling','porter','shadow','mannequin'])assert.notEqual(CHARACTER_ROLES[role],'unburied');
});
