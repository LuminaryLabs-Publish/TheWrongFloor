// Game-local creature factory: indexed skin with normalized weights and a real bone hierarchy.
export const RIGGED_ENTITIES=['warden','weaver','mourner'];
export function createRiggedCreature(T,kind='warden') {
 const group=new T.Group();group.name=kind;
 const bones=[],points=[],positions=[],normals=[],indices=[],skinIndices=[],skinWeights=[];
 const bone=(name,p,parent=-1)=>{const b=new T.Bone();b.name=name;const base=parent<0?[0,0,0]:points[parent];b.position.set(...p.map((v,i)=>v-base[i]));if(parent>=0)bones[parent].add(b);bones.push(b);points.push(p);return bones.length-1;};
 const root=bone('pelvis',[0,1,0]),spine=bone('spine',[0,1.55,0],root),neck=bone('neck',[0,1.95,0],spine),head=bone('head',[0,2.17,0],neck);
 const chains=[];
 for(const side of [-1,1]){
  const shoulder=bone(`shoulder-${side}`,[side*(kind==='warden'?.42:.32),1.75,0],spine),elbow=bone(`elbow-${side}`,[side*.52,1.13,.06],shoulder),hand=bone(`wrist-${side}`,[side*.60,kind==='weaver'?.37:.58,.13],elbow);
  chains.push({ids:[spine,shoulder],radii:[.2,.14],limb:'joint',side});
  chains.push({ids:[shoulder,elbow,hand],radii:[.14,.085,.095],limb:'arm',side});
  for(let f=0;f<4;f++){const tip=bone(`finger-${side}-${f}`,[side*(.52+f*.055),(kind==='weaver'?.08:.24)-f*.025,.22],hand);chains.push({ids:[hand,tip],radii:[.033,.008],limb:'finger',side});}
  const hip=bone(`hip-${side}`,[side*.17,1,0],root),knee=bone(`knee-${side}`,[side*.20,.52,.03],hip),foot=bone(`ankle-${side}`,[side*.20,.09,.12],knee);
  chains.push({ids:[root,hip],radii:[.19,.15],limb:'joint',side});
  chains.push({ids:[hip,knee,foot],radii:[.15,.10,.09],limb:'leg',side});
 }
 const addTube=(ids,radii)=>{
  const start=positions.length/3, rings=(ids.length-1)*10+1, sides=16;
  for(let ring=0;ring<rings;ring++){
   const at=ring/10,seg=Math.min(ids.length-2,Math.floor(at)),u=Math.min(1,at-seg),ia=ids[seg],ib=ids[seg+1];
   const a=new T.Vector3(...points[ia]),b=new T.Vector3(...points[ib]),c=a.clone().lerp(b,u),axis=b.sub(a).normalize();
   const normal=new T.Vector3(0,0,1).cross(axis).normalize(),other=axis.clone().cross(normal).normalize();
   const radius=radii[seg]*(1-u)+radii[seg+1]*u;
   for(let j=0;j<sides;j++){const angle=j/sides*Math.PI*2;const n=normal.clone().multiplyScalar(Math.cos(angle)).addScaledVector(other,Math.sin(angle));const r=radius*(1+.08*Math.sin(ring*1.9+angle*3));const p=c.clone().addScaledVector(n,r);positions.push(p.x,p.y,p.z);normals.push(n.x,n.y,n.z);skinIndices.push(ia,ib,0,0);skinWeights.push(1-u,u,0,0);}
  }
  for(let ring=0;ring<rings-1;ring++)for(let j=0;j<sides;j++){const a=start+ring*sides+j,b=start+ring*sides+(j+1)%sides,c=a+sides,d=b+sides;indices.push(a,b,c,b,d,c);}
  // Caps close each skin surface, including hands/feet. Overlapping anatomical parts remain separate shells.
  for(const end of [0,rings-1]){const center=positions.length/3,id=ids[end===0?0:ids.length-1];positions.push(...points[id]);normals.push(0,end===0?-1:1,0);skinIndices.push(id,0,0,0);skinWeights.push(1,0,0,0);for(let j=0;j<sides;j++){const a=start+end*sides+j,b=start+end*sides+(j+1)%sides;indices.push(...(end===0?[center,b,a]:[center,a,b]));}}
 };
 addTube([root,spine,neck],[.23,.32,.095]);for(const c of chains)addTube(c.ids,c.radii);
 // Distorted cranium, not a primitive left as the final silhouette.
 const skull=new T.SphereGeometry(.21,24,20);const attr=skull.attributes.position;
 for(let i=0;i<attr.count;i++){const x=attr.getX(i),y=attr.getY(i),z=attr.getZ(i);attr.setXYZ(i,x*(1+.16*Math.sin(y*19)),y*1.38,z*(z>0?.72:1.05));}skull.computeVertexNormals();
 const offset=positions.length/3;for(let i=0;i<attr.count;i++){positions.push(attr.getX(i),attr.getY(i)+2.17,attr.getZ(i));normals.push(skull.attributes.normal.getX(i),skull.attributes.normal.getY(i),skull.attributes.normal.getZ(i));skinIndices.push(head,0,0,0);skinWeights.push(1,0,0,0);}for(const i of skull.index.array)indices.push(offset+i);skull.dispose();
 const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('normal',new T.Float32BufferAttribute(normals,3));geo.setAttribute('skinIndex',new T.Uint16BufferAttribute(skinIndices,4));geo.setAttribute('skinWeight',new T.Float32BufferAttribute(skinWeights,4));geo.setIndex(indices);
 const colors=[];for(let i=0;i<positions.length;i+=3){const [x,y,z]=positions.slice(i,i+3);const vein=Math.exp(-Math.abs(Math.sin(x*37+y*19+Math.sin(z*41)))*24),v=.70-.29*vein+.07*Math.sin(y*51+x*23);colors.push(v,v*.83,v*.72);}geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));
 const material=new T.MeshStandardMaterial({color:kind==='mourner'?'#69665e':kind==='weaver'?'#807e68':'#857b74',vertexColors:true,roughness:.77,metalness:.02});
 const skin=new T.SkinnedMesh(geo,material);skin.name='weighted-skin';skin.add(bones[0]);skin.bind(new T.Skeleton(bones));skin.frustumCulled=false;skin.castShadow=true;skin.receiveShadow=true;group.add(skin);
 const black=new T.MeshStandardMaterial({color:'#100e0f',roughness:.28});
 for(const side of [-1,1]){const eye=new T.Mesh(new T.SphereGeometry(.041,12,8),black);eye.position.set(side*.085,.015,.185);eye.scale.set(1,kind==='weaver'?1.6:.55,.35);bones[head].add(eye);}
 const mouth=new T.Mesh(new T.SphereGeometry(.073,16,12),black);mouth.position.set(0,-.14,.17);mouth.scale.set(.62,1.35,.22);bones[head].add(mouth);
 if(kind==='mourner'){const shroud=new T.Mesh(new T.ConeGeometry(.40,1.48,32,12,true),new T.MeshStandardMaterial({color:'#48413b',roughness:1,side:T.DoubleSide}));shroud.position.set(0,-.48,-.07);bones[spine].add(shroud);}
 const walk=(time,progress=0,variant=0)=>{const phase=time*5.2;for(const c of chains){if(c.limb==='leg'){bones[c.ids[0]].rotation.x=Math.sin(phase+c.side*Math.PI/2)*.46*progress;bones[c.ids[1]].rotation.x=Math.max(0,Math.sin(phase+c.side*Math.PI/2))*.68*progress;}if(c.limb==='arm'){bones[c.ids[0]].rotation.x=-Math.sin(phase+c.side*Math.PI/2)*.3*progress;bones[c.ids[1]].rotation.z=c.side*(kind==='weaver'?.55:.12)*progress;}}
  bones[spine].rotation.z=Math.sin(phase*.5)*.035*progress;bones[neck].rotation.z=kind==='warden'?(variant?-.8:.75):(variant?-.23:.12)*progress;bones[root].position.y=1+Math.abs(Math.sin(phase))*.027*progress;
  if(kind==='weaver')bones[spine].rotation.x=.48*progress;
  mouth.scale.y=1.35+progress*.5;skin.skeleton.update();
 };
 group.userData.animate=walk;group.userData.boneCount=bones.length;return group;
}
