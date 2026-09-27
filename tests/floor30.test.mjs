import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as THREE from '../game/vendor/three/three.module.js';
import { createLobbyScene } from '../game/floor-30/scene.mjs';
import { moduleReferences } from '../scripts/module-references.mjs';

function installDocument() {
  const saved = Object.getOwnPropertyDescriptor(globalThis, 'document');
  const context = { fillStyle:'', font:'', textAlign:'', textBaseline:'', fillRect(){}, fillText(){} };
  const canvas = { width:512, height:160, getContext:()=>context, getBoundingClientRect:()=>({left:0,top:0,width:1280,height:800}) };
  Object.defineProperty(globalThis, 'document', { configurable:true, value:{ createElement:()=>({...canvas}), getElementById:()=>canvas } });
  return () => saved ? Object.defineProperty(globalThis,'document',saved) : delete globalThis.document;
}
function authoredLobby(){
  const root=new THREE.Group();root.userData.roomAsset='entrance-lobby';
  for(const [name,x] of [['door-left',-.7],['door-right',.7]]){const mesh=new THREE.Mesh(new THREE.BoxGeometry(.6,2.8,.1),new THREE.MeshStandardMaterial());mesh.name=name;mesh.position.x=x;root.add(mesh);}
  return root;
}

test('Floor 30 scene uses a nervous corner camera and physical DESCEND panel', async()=>{
  const restore=installDocument();const authored=authoredLobby();
  const character=new THREE.Group();const body=new THREE.Mesh(new THREE.BoxGeometry(.55,1.8,.35),new THREE.MeshStandardMaterial());body.position.y=.9;character.add(body);
  const visual=await createLobbyScene(THREE,async()=>new THREE.Group(),{authored,character});
  try{
    const direction=visual.camera.getWorldDirection(new THREE.Vector3());
    assert.ok(visual.camera.position.x < -.8);
    assert.ok(visual.camera.position.z < -4);
    assert.ok(direction.x > .1 && direction.z > .8,'camera looks diagonally across the lobby');
    const descend=visual.scene.getObjectByName('descend-button');
    assert.ok(descend?.isMesh,'physical DESCEND button exists in the Three.js scene');
    const inspection=visual.inspect();
    assert.ok(inspection.panel.position[2] < -3.3,'panel is mounted deep inside the elevator');assert.ok(inspection.panel.position[0] < -1.2,'panel is mounted to the left interior wall');
    assert.ok(inspection.character,'rear character exists');
    assert.ok(inspection.character.position[2] < -3.8,'character is in the rear half of the elevator');assert.ok(inspection.character.position[0] > -.8&&inspection.character.position[0] < .2,'character remains visible in the rear peripheral composition');
    assert.ok(inspection.character.bounds.max[0] < 1.7,'character does not intersect the right-side panel wall');
    visual.update({door:{openness:1},descendReady:true,descendPressed:false,introPhase:'open',displayFloor:30},{reducedFlashes:true},0);
    assert.equal(visual.inspect().descendReady,true);
    assert.equal(visual.inspect().displayFloor,30);
    assert.ok(descend.material.emissiveIntensity > 1,'DESCEND illuminates when available');
    visual.scene.updateMatrixWorld(true);visual.camera.updateMatrixWorld(true);
    const point=visual.inspect().descendScreen;
    assert.equal(visual.hitTestDescend(point.x,point.y),true,'projected center hits the physical DESCEND mesh bounds');
    assert.equal(visual.hitTestDescend(point.x+500,point.y+500),false,'distant screen point does not hit DESCEND');
    visual.setVisualTime(2.90);
    visual.update({door:{openness:1},descendReady:true,descendPressed:false,introPhase:'open',displayFloor:30},{reducedFlashes:false},0);
    const dark=visual.inspect();
    assert.equal(dark.blackout,true);
    assert.equal(dark.lights.hemi,0);assert.equal(dark.lights.key,0);assert.equal(dark.lights.car,0);assert.ok(dark.lights.fills.every(v=>v===0));
    visual.setVisualTime(2.90);
    visual.update({door:{openness:1},descendReady:true,descendPressed:false,introPhase:'open',displayFloor:30},{reducedFlashes:true},0);
    assert.equal(visual.inspect().blackout,false,'reduced-flash mode suppresses hard blackouts');
    visual.update({door:{openness:0},descendReady:false,descendPressed:true,introPhase:'travel',displayFloor:29},{reducedFlashes:true},.5);
    assert.equal(visual.inspect().displayFloor,29);
    assert.equal(visual.inspect().descendReady,false);
  }finally{visual.dispose();restore();}
});

test('Floor 30 canonical scene does not require the retired creature-door opening', async()=>{
  const source=await readFile(new URL('../game/floor-30/scene.mjs',import.meta.url),'utf8');
  assert.doesNotMatch(source,/createIntroCharacter|outside-claw|loadIntro/);
  assert.match(source,/descend-button/);
  assert.match(source,/30-i/);
  assert.match(source,/'G','B'/);
});

test('dependency parser distinguishes real imports from documentation',()=>{
  assert.deepEqual(moduleReferences('// import x from "https://example.invalid"\nimport x from "./real.mjs"; const a=new URL("./asset.glb",import.meta.url);'),['./real.mjs','./asset.glb']);
  assert.throws(()=>moduleReferences('export const =;'));
});
