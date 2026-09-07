// Call once after GLTFLoader.loadAsync, then update(seconds, reducedFlashes) each frame.
// This affects visuals only; it never changes game RNG or survival deadlines.
export function bindRoomFlicker(root) {
  const controls=[];
  root.traverse(o=>{
    const {flickerRole:role,flickerSeed:seed}=o.userData??{};
    if(!role)return;
    if(role==='light') {
      let light=o.isLight?o:null;
      if(!light)o.traverse(child=>{if(child.isLight)light=child;});
      if(light)controls.push({role,seed,object:light,base:light.intensity});
    } else if(role==='emitter'&&o.material) {
      const source=Array.isArray(o.material)?o.material:[o.material];
      const copies=source.map(m=>m.clone());
      o.material=Array.isArray(o.material)?copies:copies[0];
      for(const material of copies)controls.push({role,seed,object:material,base:material.emissiveIntensity});
    }
  });
  return {
    update(seconds,reducedFlashes=false) {
      for(const c of controls) {
        const phase=((seconds+c.seed*.619)%7+7)%7;
        // Two short brownouts per seven seconds, separated from the next cluster.
        const strength=reducedFlashes?1:phase<.08?.14:phase<.19?1:phase<.31?.28:1;
        if(c.role==='light')c.object.intensity=c.base*strength;
        else c.object.emissiveIntensity=c.base*strength;
      }
    },
    dispose(){for(const c of controls)if(c.role==='emitter')c.object.dispose();},
    controlCount:controls.length
  };
}
