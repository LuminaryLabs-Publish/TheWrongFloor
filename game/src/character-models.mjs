import * as THREE from '../vendor/three/three.module.js';
import { GLTFLoader } from '../vendor/three/addons/loaders/GLTFLoader.js';
import { clone } from '../vendor/three/SkeletonUtils.js';

export const CHARACTER_ROLES = Object.freeze({ guest:'butler', tall:'hollow', 'tall-one':'hollow', ceiling:'matriarch', porter:'butler', shadow:'hollow', mannequin:'butler', warden:'butler', weaver:'hollow', mourner:'hollow', looming:'unburied' });
const files = { butler:'butler.glb', hollow:'hollow.glb', matriarch:'matriarch.glb', unburied:'unburied.glb' };
const heights = { butler:2.15, hollow:2.55, matriarch:1.75, unburied:1.9 };

// Templates own geometry/textures; instances own skeletons and animation mixers.
export function createCharacterModels() {
  const templates = new Map(), pending = new Map();
  let disposed = false;
  function release(root) {
    const geometry=new Set(), materials=new Set(), textures=new Set();
    root.traverse(o=>{if(o.geometry)geometry.add(o.geometry);for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[]){materials.add(m);for(const value of Object.values(m))if(value?.isTexture)textures.add(value);}});
    for(const t of textures){t.source?.data?.close?.();t.dispose();}for(const m of materials)m.dispose();for(const g of geometry)g.dispose();
  }
  async function prepare(role) {
    const key=CHARACTER_ROLES[role]??role;
    if(templates.has(key))return;
    if(!files[key])throw new Error(`Unknown character ${role}`);
    if(!pending.has(key))pending.set(key,(async()=>{
      const manager=new THREE.LoadingManager(),failures=[];
      manager.onError=url=>failures.push(url);
      const loader=new GLTFLoader(manager);
      const gltf=await loader.loadAsync(new URL(`../assets/characters/${files[key]}`,import.meta.url).href);
      if(failures.length){release(gltf.scene);throw new Error('Embedded character textures failed to decode');}
      if(disposed){release(gltf.scene);throw new Error('Character loader disposed');}
      // Locomotion belongs to the encounter; remove exported root travel only.
      for(const clip of gltf.animations)for(const track of clip.tracks){
        if(/^(root|ROOT)\.position$/.test(track.name))for(let i=3;i<track.values.length;i++)track.values[i]=track.values[i%3];
      }
      gltf.scene.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(gltf.scene),size=bounds.getSize(new THREE.Vector3());
      const scale=Math.min(heights[key]/size.y,key==='matriarch'?3.4/size.x:Infinity);
      templates.set(key,{...gltf,scale,center:bounds.getCenter(new THREE.Vector3()),floor:bounds.min.y});
    })().catch(error=>{pending.delete(key);throw new Error(`Could not load ${key}: ${error.message}`);}));
    await pending.get(key);
  }
  function instantiate(role) {
    const key=CHARACTER_ROLES[role]??role,template=templates.get(key);
    if(!template)throw new Error(`Character was not prepared: ${key}`);
    const actor=new THREE.Group(),pivot=new THREE.Group(),model=clone(template.scene);
    actor.name=key;actor.userData.characterModel=key;
    pivot.scale.setScalar(template.scale);
    model.position.x-=template.center.x;model.position.y-=template.floor;model.position.z-=template.center.z;
    // Blender exports forward -Y as +Z, facing the elevator.
    pivot.add(model);actor.add(pivot);
    model.traverse(o=>{o.userData.sharedCharacterResource=true;if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;}});
    const mixer=new THREE.AnimationMixer(model),clips=template.animations;
    let selected=null;
    actor.userData.animate=(time,walking=false,frozen=false)=>{
      const clip=clips.find(c=>c.name.toLowerCase()===(walking?'walk':'idle'))??clips[0];
      if(!clip)return;
      if(selected!==clip){mixer.stopAllAction();mixer.clipAction(clip).play();selected=clip;}
      mixer.setTime(frozen?0:Math.max(0,time)%clip.duration);
      actor.userData.clip=clip.name;actor.userData.animationTime=mixer.time;
    };
    actor.userData.release=()=>{mixer.stopAllAction();mixer.uncacheRoot(model);model.traverse(o=>o.skeleton?.dispose());};
    actor.userData.animate(0);
    return actor;
  }
  return {prepare,instantiate,inspect:()=>({loaded:[...templates.keys()],roles:CHARACTER_ROLES}),dispose(){disposed=true;for(const t of templates.values())release(t.scene);templates.clear();pending.clear();}};
}
