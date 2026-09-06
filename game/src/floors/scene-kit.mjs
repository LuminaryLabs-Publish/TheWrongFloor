import {floorProfile,createInspection,inspectionReading} from './catalog.mjs';
// Local Three.js factory adapter. Shared by the live renderer and review capture.
export function createFloorDetail(T,round,{label}={}) {
 const profile=floorProfile(round.profile),root=new T.Group();root.name='floor-'+profile.id;
 const metal=new T.MeshStandardMaterial({color:profile.tint,roughness:.63,metalness:.42});
 const wood=new T.MeshStandardMaterial({color:'#534335',roughness:.91});
 const dark=new T.MeshStandardMaterial({color:'#161f21',roughness:.82});
 const cloth=new T.MeshStandardMaterial({color:'#948b73',roughness:1});
 const pale=new T.MeshStandardMaterial({color:'#a8b7ac',roughness:.8});
 const glass=new T.MeshStandardMaterial({color:'#344a4b',metalness:.6,roughness:.2});
 const light=new T.MeshStandardMaterial({color:'#b7c1a4',emissive:'#708579',emissiveIntensity:.35,roughness:.8});
 const pixels=new Uint8Array(128*128*4);let noise=(Number(round.seed)>>>0)||617;
 for(let y=0;y<128;y++)for(let x=0;x<128;x++){noise=(Math.imul(noise,1664525)+1013904223)>>>0;const seam=(x%32===0||y%64===0),scratch=(x*7+y*13)%113===0,value=seam?85:scratch?135:185+(noise%55);const i=(y*128+x)*4;pixels.set([value,value,value,255],i);}
 const wear=new T.DataTexture(pixels,128,128);wear.wrapS=wear.wrapT=T.RepeatWrapping;wear.colorSpace=T.SRGBColorSpace;wear.minFilter=T.LinearMipmapLinearFilter;wear.magFilter=T.LinearFilter;wear.generateMipmaps=true;wear.needsUpdate=true;
 for(const material of [metal,wood,cloth,pale]){material.map=wear;material.bumpMap=wear;material.bumpScale=.012;}
 function mesh(g,m,x,y,z,parent=root){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;parent.add(o);return o;}
 const box=(w,h,d,x,y,z,m=metal,parent=root)=>mesh(new T.BoxGeometry(w,h,d),m,x,y,z,parent);
 const cylinder=(a,b,h,x,y,z,m=metal)=>mesh(new T.CylinderGeometry(a,b,h,18),m,x,y,z);
 const tube=(points,r,m=metal)=>{const curve=new T.CatmullRomCurve3(points.map(v=>new T.Vector3(...v)));return mesh(new T.TubeGeometry(curve,24,r,8,false),m,0,0,0);};
 function feet(x,z,w=.7,d=.5,h=.7){for(const a of [-1,1])for(const b of [-1,1])box(.045,h,.045,x+a*w/2,h/2,z+b*d/2,dark);}
 let serial=0;
 for(const side of [-1,1]) for(let row=0;row<3;row++){
  const x=side*1.82,z=-4-row*3.7;serial++;
  switch(profile.prop){
   case 'shelves':
    box(.07,2.4,1,x-.48,1.2,z,wood);box(.07,2.4,1,x+.48,1.2,z,wood);
    for(let k=0;k<5;k++){box(1,.06,.95,x,.35+k*.47,z,wood);for(let b=0;b<4;b++){box(.16,.32,.7,x-.32+b*.21,.54+k*.47,z,serial%2?cloth:pale);box(.1,.04,.01,x-.32+b*.21,.6+k*.47,z+.355,dark);}}break;
   case 'beds':
    feet(x,z,.8,1.8,.6);box(.95,.18,2,x,.7,z,pale);box(.92,.08,1.5,x,.82,z+.2,cloth);box(.7,.16,.35,x,.85,z-.75,pale);
    tube([[x-.5,.6,z-.95],[x-.5,1.1,z-.95],[x+.5,1.1,z-.95],[x+.5,.6,z-.95]],.028);break;
   case 'washers':{
    box(.95,1.3,.8,x,.65,z,pale);const door=cylinder(.31,.31,.07,x,.65,z+.44,dark);door.rotation.x=Math.PI/2;
    const window=cylinder(.24,.24,.08,x,.65,z+.485,glass);window.rotation.x=Math.PI/2;box(.8,.1,.025,x,1.15,z+.42,metal);break;}
   case 'plants':
    cylinder(.33,.22,.55,x,.28,z,wood);for(let k=0;k<7;k++){const a=k*2.4,sx=x+Math.cos(a)*.4,sy=1.1+(k%3)*.3,sz=z+Math.sin(a)*.4;tube([[x,.4,z],[x,.8,z],[sx,sy,sz]],.016,wood);const leaf=mesh(new T.SphereGeometry(.2,12,8),metal,sx,sy,sz);leaf.scale.set(.6,1.5,.16);leaf.rotation.z=a;}break;
   case 'pews':
    feet(x,z,.8,.7,.45);box(.95,.12,.8,x,.5,z,wood);box(.95,.6,.08,x,.82,z-.36,wood);cylinder(.045,.045,.25,x,.69,z+.12,pale);break;
   case 'panels':
    box(.9,2.25,.45,x,1.12,z,dark);for(let k=0;k<12;k++){box(.13,.07,.045,x-.28+(k%3)*.28,.5+Math.floor(k/3)*.42,z+.25,k%4?metal:light);tube([[x-.25,.4,z+.28],[x+.2,.2,z+.4],[x+.3,.45,z+.28]],.013,metal);}break;
   case 'screens':
    feet(x,z);box(1.1,.08,.7,x,.75,z,wood);for(let k=0;k<2;k++){box(.48,.42,.3,x+(k-.5)*.52,1.02,z,dark);box(.39,.3,.015,x+(k-.5)*.52,1.02,z+.16,glass);for(let line=0;line<3;line++)box(.3,.007,.01,x+(k-.5)*.52,.94+line*.06,z+.175,light);}break;
   case 'freezers':
    box(.98,2.5,.65,x,1.25,z,pale);box(.93,2.4,.04,x,1.25,z+.35,metal);box(.04,.45,.07,x+.33,1.25,z+.4,dark);for(let k=0;k<6;k++)box(.7,.02,.01,x,.2+k*.055,z+.38,dark);break;
   case 'tools':
    feet(x,z,.8,.6,.85);box(1.1,.14,.8,x,.9,z,wood);box(1.1,.85,.06,x,1.45,z-.32,wood);for(let k=0;k<4;k++){box(.03,.45,.04,x-.35+k*.23,1.5,z-.27,metal);box(.16,.09,.055,x-.35+k*.23,1.7,z-.27,dark);}break;
   case 'frames':{
    feet(x,z,.7,.3,.7);box(.85,.07,.3,x,.68,z,wood);
    box(1.0,1.7,.09,x,1.5,z,wood);box(.86,1.56,.04,x,1.5,z+.08,cloth);const oval=mesh(new T.SphereGeometry(.24,20,12),dark,x,1.7,z+.11);oval.scale.set(.7,1,.06);const shoulders=mesh(new T.SphereGeometry(.4,20,12),dark,x,1.25,z+.11);shoulders.scale.set(1,.65,.03);break;}
   case 'cots':
    feet(x,z,.8,1.6,.4);box(.85,.12,1.7,x,.48,z,cloth);for(const a of [-1,1]){box(.04,.06,1.7,x+a*.43,1,z,wood);for(let k=0;k<8;k++)box(.025,.5,.025,x+a*.43,.73,z-.72+k*.2,wood);}break;
   case 'speakers':
    box(.9,1.9,.65,x,.95,z,wood);for(let k=0;k<2;k++){const cone=cylinder(.27,.18,.13,x,.5+k*.85,z+.38,dark);cone.rotation.x=Math.PI/2;}tube([[x,.1,z],[x+.3,.03,z+.6],[x-.4,.03,z+1]],.018,dark);break;
   case 'tanks':
    cylinder(.42,.42,2.15,x,1.15,z);for(const y of [.2,1,2]){const ring=mesh(new T.TorusGeometry(.425,.035,8,24),dark,x,y,z);ring.rotation.x=Math.PI/2;}
    tube([[x,2.2,z],[x,2.8,z],[side*2.3,2.8,z],[side*2.3,2.8,z-3]],.06);break;
   case 'tables':
    feet(x,z,.8,.8,.8);box(1.05,.08,1.05,x,.84,z,wood);for(let k=0;k<2;k++){cylinder(.15,.15,.02,x,.895,z+(k-.5)*.4,pale);cylinder(.04,.035,.13,x+.27,.94,z+(k-.5)*.4,pale);}break;
   case 'lockers':
    box(1,2.3,.7,x,1.15,z,dark);for(let k=0;k<8;k++){box(.43,.5,.035,x+(k%2-.5)*.48,.3+Math.floor(k/2)*.56,z+.36,metal);box(.14,.035,.035,x+(k%2-.5)*.48,.3+Math.floor(k/2)*.56,z+.4,dark);}break;
  }
 }
 // A close, explicit inspection plaque supplements entity clues without hiding them.
 const puzzle=round.puzzle??createInspection(profile.id,round.seed,round.index??0);
 let reading=null;
 if(label){label(root,profile.title,2.1,.19,0,2.95,-2.7,{font:40});
 label(root,puzzle.rule,1.65,.2,0,2.65,-2.65,{font:45});
 reading=label(root,puzzle.normal,1.65,.22,0,2.4,-2.65,{font:56});}
 // Room furniture is rigid: combine by material while leaving inspection labels live.
 const batches=new Map();for(const item of [...root.children]){if(!item.isMesh||item.userData.setText)continue;const key=item.material.uuid;if(!batches.has(key))batches.set(key,[]);batches.get(key).push(item);}
 for(const items of batches.values()){
  if(items.length<2)continue;const values={position:[],normal:[],uv:[]};
  for(const item of items){item.updateMatrix();const g=item.geometry.index?item.geometry.toNonIndexed():item.geometry.clone();g.applyMatrix4(item.matrix);for(const key of Object.keys(values)){const a=g.getAttribute(key);for(const value of a.array)values[key].push(value);}g.dispose();item.geometry.dispose();root.remove(item);}
  const g=new T.BufferGeometry();for(const [key,array] of Object.entries(values))g.setAttribute(key,new T.Float32BufferAttribute(array,key==='uv'?2:3));g.computeBoundingSphere();const merged=new T.Mesh(g,items[0].material);merged.name='furniture-batch';merged.castShadow=merged.receiveShadow=true;root.add(merged);
 }
 root.userData.profile=profile.id;root.userData.tint=profile.tint;
 root.userData.update=(snapshot)=>reading?.userData.setText(inspectionReading(puzzle,round,!!snapshot.clueVisible));
 return root;
}
