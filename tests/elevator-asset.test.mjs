import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

function parseGlb(bytes) {
  const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
  assert.equal(String.fromCharCode(...bytes.subarray(0,4)),'glTF');
  assert.equal(view.getUint32(4,true),2);
  assert.equal(view.getUint32(8,true),bytes.byteLength);
  const jsonLength=view.getUint32(12,true);
  assert.equal(String.fromCharCode(...bytes.subarray(16,20)),'JSON');
  return JSON.parse(new TextDecoder().decode(bytes.subarray(20,20+jsonLength)).trim());
}

test('canonical elevator GLB owns symmetric left/right door animation', async()=>{
  const bytes=new Uint8Array(await readFile(new URL('../game/assets/elevator/wrong-floor-elevator.glb',import.meta.url)));
  const gltf=parseGlb(bytes);
  const names=new Map(gltf.nodes.map((n,i)=>[n.name,i]));
  for(const name of ['ElevatorRoot','Cabin','DoorLeft','DoorRight','PanelHousing','DescendButton'])assert.ok(names.has(name),name);
  const clips=Object.fromEntries(gltf.animations.map(a=>[a.name,a]));
  assert.ok(clips.DoorsOpen);assert.ok(clips.DoorsClose);
  const duration=clip=>Math.max(...clip.samplers.map(s=>gltf.accessors[s.input].max[0]));
  assert.equal(duration(clips.DoorsOpen),.8);
  assert.equal(duration(clips.DoorsClose),1.2);
  for(const clip of [clips.DoorsOpen,clips.DoorsClose]){
    assert.equal(clip.channels.length,2);
    assert.deepEqual(new Set(clip.channels.map(c=>gltf.nodes[c.target.node].name)),new Set(['DoorLeft','DoorRight']));
    assert.ok(clip.samplers.every(s=>s.interpolation==='LINEAR'));
  }
});

test('authoring source mirrors NexusEngine seconds/TRS clip contract', async()=>{
  const source=JSON.parse(await readFile(new URL('../game/assets/elevator/wrong-floor-elevator.authoring.json',import.meta.url),'utf8'));
  assert.equal(source.schema,'nexusengine.authoring-project-fragment/1');
  assert.equal(source.animation.clips[0].name,'DoorsOpen');
  assert.equal(source.animation.clips[0].duration,.8);
  assert.equal(source.animation.clips[1].name,'DoorsClose');
  assert.equal(source.animation.clips[1].duration,1.2);
  for(const clip of source.animation.clips)for(const track of clip.tracks){
    assert.equal(track.property,'translation');
    assert.equal(track.interpolation,'LINEAR');
    assert.equal(track.keys.length,2);
  }
});
