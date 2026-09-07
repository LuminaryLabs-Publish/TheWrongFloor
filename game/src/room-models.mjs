import * as THREE from '../vendor/three/three.module.js';
import {GLTFLoader} from '../vendor/three/addons/loaders/GLTFLoader.js';
import {FLOOR_PROFILES} from './floors/catalog.mjs';
import {bindRoomFlicker} from './room-flicker.mjs';

export const ROOM_IDS=Object.freeze([...FLOOR_PROFILES.map(p=>p.id),'entrance-lobby','exit-lobby','elevator-interior']);
function releaseResources(root){
 const geometries=new Set(),materials=new Set(),textures=new Set();
 root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[]){materials.add(m);for(const value of Object.values(m))if(value?.isTexture)textures.add(value);}});
 for(const t of textures){t.source?.data?.close?.();t.dispose();}for(const m of materials)m.dispose();for(const g of geometries)g.dispose();
}
async function loadRoom(id){
 const manager=new THREE.LoadingManager(),failures=[];manager.onError=url=>failures.push(url);
 const {scene}=await new GLTFLoader(manager).loadAsync(new URL(`../assets/rooms/${id}.glb`,import.meta.url).href);
 if(failures.length){releaseResources(scene);throw Error('Embedded room texture failed to decode');}return scene;
}
// Templates own geometry/textures; each instance owns only its flicker materials.
export function createRoomModels({load=loadRoom}={}){
 const templates=new Map(),pending=new Map(),failures=new Map(),instances=new Set();let disposed=false;
 async function prepare(id){
  if(disposed||!ROOM_IDS.includes(id))return false;
  if(templates.has(id))return true;
  if(failures.has(id))return false;
  if(!pending.has(id))pending.set(id,(async()=>{
   let root;
   try{
    root=await load(id);
    if(disposed)throw Error('Room loader disposed');
    if(id==='entrance-lobby'&&(!root.getObjectByName('door-left')||!root.getObjectByName('door-right')))throw Error('Missing lobby door pivots');
    // Blender's photometric exports exceed the established game exposure.
    // Calibrate once, before binding the per-instance flicker baseline.
    root.traverse(o=>{if(o.isLight){o.intensity=id==='entrance-lobby'?16:id==='elevator-interior'?3:9;o.distance=8;o.castShadow=false;}if(o.isMesh){o.castShadow=true;o.receiveShadow=!/plaster/.test(o.name);}});
    templates.set(id,root);return true;
   }catch(error){if(root)releaseResources(root);if(!disposed)failures.set(id,error.message);return false;}
   finally{pending.delete(id);}
  })());
  return pending.get(id);
 }
 function instantiate(id){
  const template=templates.get(id);if(!template||disposed)return null;
  const root=template.clone(true);root.userData.roomAsset=id;
  root.traverse(o=>{o.userData.sharedRoomResource=true;});
  const flicker=bindRoomFlicker(root);let released=false;instances.add(root);
  root.userData.updateRoom=(seconds,settings={})=>{if(!released)flicker.update(seconds,!!(settings.reducedFlashes||settings.softScares||settings.reducedMotion));};
  root.userData.release=()=>{if(released)return;released=true;flicker.dispose();instances.delete(root);};
  return root;
 }
 return {prepare,instantiate,clearFailures(){failures.clear();},inspect:()=>({loaded:[...templates.keys()],failures:Object.fromEntries(failures),instances:instances.size}),dispose(){if(disposed)return;disposed=true;for(const i of instances)i.userData.release();for(const t of templates.values())releaseResources(t);templates.clear();failures.clear();}};
}
