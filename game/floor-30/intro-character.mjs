// The head and both complete hands consume ONE visibility envelope from the lobby clock.
export async function createIntroCharacter(T,loadAsset){
 const resources=[];
 function release(){
  const geometries=new Set(),materials=new Set(),textures=new Set();
  for(const root of resources)root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[]){materials.add(m);for(const value of Object.values(m))if(value?.isTexture)textures.add(value);}});
  geometries.forEach(g=>g.dispose());textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());resources.length=0;
 }
 try{
  const head=await loadAsset('intro-head');resources.push(head);
  const hand=await loadAsset('intro-hand');resources.push(hand);
  if(!head.getObjectByName('intro-head')||!hand.getObjectByName('intro-hand'))throw Error('Invalid intro character nodes');
  const morphs=[];head.traverse(o=>{const index=o.morphTargetDictionary?.Smile;if(index!==undefined)morphs.push({o,index});});
  if(!morphs.length)throw Error('Intro head has no Smile morph');
  const root=new T.Group();root.name='corpse-doorkeeper';root.visible=false;
  const neck=new T.Group();neck.name='intro-head-pivot';neck.add(head);head.rotation.y=Math.PI;head.scale.setScalar(1.25);root.add(neck);
  const hands=[];for(const side of [-1,1]){const pivot=new T.Group();pivot.name='intro-hand-'+(side<0?'left':'right');const model=hand.clone(true);model.rotation.y=Math.PI;model.scale.set(1.12*side,1.12,1.12);pivot.add(model);root.add(pivot);hands.push({pivot,side});}
  root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
  let disposed=false,last={visible:false,smile:0,tilt:0,envelope:0};
  return{root,update(s,settings={}){
   if(disposed)return;
   const envelope=Math.max(0,Math.min(1,s.claws??0));
   const visible=!settings.softScares&&envelope>0;
   root.visible=visible;
   const progress=s.stage==='pry'?Math.max(0,Math.min(1,s.stageTime/(s.durations?.[3]??2.5))):s.stage==='emerge'?0:1;
   const ease=t=>t*t*(3-2*t);
   const smile=visible?(.10+.90*ease(progress))*envelope:0;
   const tilt=visible&&!settings.reducedMotion?(-.04-.23*ease(progress))*envelope:0;
   for(const {o,index} of morphs)o.morphTargetInfluences[index]=smile;
   neck.rotation.z=tilt;neck.rotation.x=settings.reducedMotion?0:-.045*envelope;
   neck.position.set(.012*envelope,1.72,-2.69+.42*(1-envelope));
   // Retreat translates the whole character behind the seam; nothing remains after hands vanish.
   for(const {pivot,side} of hands){pivot.position.set(side*(s.openness*1.4+.012),1.47+(side>0?.055:0),-2.98+.34*(1-envelope));pivot.rotation.z=settings.reducedMotion?0:side*.035*(s.strain??0);}
   last={visible,smile,tilt,envelope};
  },inspect:()=>({asset:'corpse-doorkeeper',...last,headVisible:root.visible,handsVisible:[root.visible,root.visible]}),dispose(){if(disposed)return;disposed=true;root.removeFromParent();root.clear();release();}};
 }catch(error){release();throw error;}
}
