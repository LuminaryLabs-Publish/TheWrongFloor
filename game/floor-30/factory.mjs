import * as T from '../vendor/three/three.module.js';
import {createSculptKit} from '../vendor/factory-kits/src/foundation/sculpt-kit.js';
import {bytesToBase64} from '../vendor/factory-kits/src/foundation/raster/surface.js';
export const ASSETS=['architecture','door-left','door-right','seating','reception','fixtures','claw'];
function cappedTube(curve,radius){
 const g=new T.TubeGeometry(curve,20,radius,10,false),p=Array.from(g.attributes.position.array),uv=Array.from(g.attributes.uv.array),indices=Array.from(g.index.array);
 for(let ring=0;ring<=20;ring++){const t=ring/20,c=curve.getPointAt(t),scale=1-.5*t+.22*Math.exp(-(((t-.4)*12)**2));for(let j=0;j<=10;j++)for(let a=0;a<3;a++){const k=(ring*11+j)*3+a;p[k]=c.getComponent(a)+(p[k]-c.getComponent(a))*scale;}}
 for(const end of [0,1]){const center=curve.getPointAt(end),normal=curve.getTangentAt(end).multiplyScalar(end?1:-1),c=p.length/3;p.push(center.x,center.y,center.z);uv.push(.5,.5);for(let j=0;j<10;j++){let a=end*220+j,b=a+1;if(new T.Vector3(...p.slice(a*3,a*3+3)).sub(center).cross(new T.Vector3(...p.slice(b*3,b*3+3)).sub(center)).dot(normal)<0)[a,b]=[b,a];indices.push(c,a,b);}}
 g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return g;
}
export const kit=createSculptKit({id:'wrong-floor-lobby',displayName:'Floor 30 Lobby',domainPath:'n:factory:object:structure',requires:[],provides:['floor30:lobby'],parameterSchema:[{id:'asset',type:'enum',options:ASSETS,default:'architecture'}],source:{module:'floor-30/factory.mjs',exportName:'kit'}},({seed,params})=>{
 const meshes=[],textures={},materials={stone:{baseColorFactor:[.36,.32,.25,1],roughnessFactor:.7},dark:{baseColorFactor:[.028,.033,.032,1],roughnessFactor:.48},brass:{baseColorFactor:[.48,.31,.13,1],metallicFactor:.78,roughnessFactor:.36},steel:{baseColorFactor:[.24,.27,.27,1],metallicFactor:.65,roughnessFactor:.45},velvet:{baseColorFactor:[.11,.024,.018,1],roughnessFactor:.95},ivory:{baseColorFactor:[.58,.53,.43,1],roughnessFactor:.8},light:{baseColorFactor:[1,.72,.36,1],emissiveFactor:[1,.6,.2]},skin:{baseColorFactor:[.28,.23,.16,1],roughnessFactor:.75},nail:{baseColorFactor:[.075,.04,.018,1],roughnessFactor:.32}};
 const size=128;
 for(const kind of ['stone','steel','velvet','skin']){const color=new Uint8Array(size*size*4),rough=new Uint8Array(color.length),normal=new Uint8Array(color.length);for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4,grain=.5+.5*Math.sin(x*91.7+y*17.3+seed.length),v=kind==='stone'?.88+.005*grain:kind==='steel'?.78+.08*grain:.8+.1*grain;color.set([v*255,v*255,v*255,255],i);rough.set([255,180+40*grain,255,255],i);normal.set([128,128,255,255],i);}for(const [suffix,data,space] of [['color',color,'srgb'],['rough',rough,'linear'],['normal',normal,'linear']])textures[kind+'-'+suffix]={width:size,height:size,pixelFormat:'rgba8',rgbaBase64:bytesToBase64(data),colorSpace:space};Object.assign(materials[kind],{baseColorTexture:kind+'-color',metallicRoughnessTexture:kind+'-rough',normalTexture:kind+'-normal',normalScale:.04});}
 function add(id,g,material,p=[0,0,0],rotation=[0,0,0]){g.applyMatrix4(new T.Matrix4().compose(new T.Vector3(...p),new T.Quaternion().setFromEuler(new T.Euler(...rotation)),new T.Vector3(1,1,1)));meshes.push({id,material,positions:Array.from(g.attributes.position.array),normals:Array.from(g.attributes.normal.array),uvs:Array.from(g.attributes.uv.array),indices:g.index?Array.from(g.index.array):Array.from({length:g.attributes.position.count},(_,i)=>i),extras:{part:id,units:'meters'}});g.dispose();}
 function block(id,w,h,d,x,y,z,mat='stone'){
  const r=Math.min(.025,w/6,h/6,d/6),s=new T.Shape();s.moveTo(-w/2+r,-h/2);s.lineTo(w/2-r,-h/2);s.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);s.lineTo(w/2,h/2-r);s.quadraticCurveTo(w/2,h/2,w/2-r,h/2);s.lineTo(-w/2+r,h/2);s.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);s.lineTo(-w/2,-h/2+r);s.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
  const g=new T.ExtrudeGeometry(s,{depth:d-2*r,steps:1,bevelEnabled:true,bevelThickness:r,bevelSize:r*.5,bevelSegments:2,curveSegments:3});g.translate(0,0,-d/2+r);add(id,g,mat,[x,y,z]);
 }
 if(params.asset==='architecture'){
  block('floor',14,.18,13,0,-.12,1,'dark');block('ceiling',14,.2,13,0,4.4,1,'ivory');
  for(const side of [-1,1]){block('side-wall-'+side,.25,4.4,13,side*6.6,2.1,1);block('wing-'+side,5.2,4.4,.32,side*4.1,2.1,-3);for(let i=0;i<5;i++){block(`pilaster-${side}-${i}`,.13,3.4,.18,side*(1.7+i*1.05),1.9,-2.78,'brass');block(`panel-${side}-${i}`,.83,1.15,.1,side*(1.7+i*1.05),.7,-2.75,'dark');}}
  block('lobby-far-wall',13.2,4.4,.22,0,2.1,7.25,'stone');
  for(const x of [-5,-2.8,0,2.8,5]){block('far-panel-'+x,1.8,2.65,.055,x,1.85,7.1,'dark');for(const side of [-1,1])block(`far-trim-${x}-${side}`,.035,2.75,.07,x+side*.92,1.85,7.04,'brass');block('far-cap-'+x,1.88,.04,.07,x,3.225,7.04,'brass');}
  block('far-centre-inlay',1.25,1.8,.065,0,1.95,7.02,'dark');
  block('lintel',3.05,1.15,.35,0,3.79,-3,'dark');for(const side of [-1,1]){block('jamb-'+side,.16,3.2,.5,side*1.47,1.57,-2.93,'brass');block('reveal-'+side,.2,3.2,2.2,side*1.38,1.57,-4.3,'steel');}
  block('car-rear',2.75,3.2,.18,0,1.57,-5.4,'steel');block('car-floor',2.8,.12,2.4,0,-.03,-4.3,'dark');block('car-ceiling',2.8,.12,2.4,0,3.2,-4.3,'ivory');block('threshold',3,.035,.5,0,.005,-2.95,'brass');
  for(let x=-5;x<=5;x++)for(let z=-2;z<7;z++)block(`tile-${x}-${z}`,.985,.025,.985,x,.001,z,(x+z)%2?'stone':'dark');
  for(const z of [-1.5,1.5,4.5])block('coffer-'+z,12,.15,.14,0,4.15,z,'brass');
 }
 if(params.asset.startsWith('door-')){block('panel',1.395,3.12,.11,0,1.56,0,'steel');block('edge',.025,3.1,.025,params.asset==='door-left'?.68:-.68,1.56,.068,'brass');for(const x of [-.48,.48])block('inset-'+x,.015,2.8,.012,x,1.56,.065,'dark');}
 if(params.asset==='seating'){block('seat-base',2.3,.2,.85,0,.34,0,'brass');for(const side of [-1,1]){block('arm-'+side,.12,.16,.8,side*1.13,.8,0,'velvet');block('arm-support-'+side,.055,.4,.055,side*1.13,.61,.29,'brass');}for(const x of [-.72,0,.72]){const g=new T.SphereGeometry(1,20,12);g.scale(.37,.15,.4);add('cushion-'+x,g,'velvet',[x,.54,0]);const b=new T.SphereGeometry(1,20,12);b.scale(.38,.5,.14);add('back-'+x,b,'velvet',[x,.91,-.32]);}for(const x of [-1.02,1.02])for(const z of [-.29,.29])add(`leg-${x}-${z}`,new T.CylinderGeometry(.035,.024,.32,12),'brass',[x,.16,z]);}
 if(params.asset==='reception'){block('body',2.7,1.04,.85,0,.57,0,'dark');block('top',2.85,.1,1,0,1.13,0,'stone');for(let i=-12;i<=12;i++)block('flute-'+i,.035,.85,.05,i*.1,.6,.45,'brass');block('ledger',.32,.04,.25,-.5,1.2,0,'velvet');add('bell',new T.SphereGeometry(.1,20,12),'brass',[.65,1.2,.1]);}
 if(params.asset==='fixtures'){
  for(const side of [-1,1])for(const x of [2.4,4.6]){block(`back-${side}-${x}`,.22,.75,.08,side*x,2.4,-2.66,'brass');add(`sconce-${side}-${x}`,new T.CylinderGeometry(.08,.08,.52,12),'light',[side*x,2.4,-2.51]);}
  const digits={3:[0,1,2,3,6],0:[0,1,2,3,4,5]},segments=[[0,.15,.13,.024],[.075,.075,.022,.13],[.075,-.075,.022,.13],[0,-.15,.13,.024],[-.075,-.075,.022,.13],[-.075,.075,.022,.13],[0,0,.13,.024]];
  [3,0].forEach((d,i)=>digits[d].forEach(j=>{const [x,y,w,h]=segments[j];block(`digit-${i}-${j}`,w,h,.025,x+(i-.5)*.22,y+3.55,-2.79,'light');}));
  [3,0].forEach((d,i)=>digits[d].forEach(j=>{const [x,y,w,h]=segments[j];block(`far-digit-${i}-${j}`,w*2,h*2,.025,-(x+(i-.5)*.22)*2,y*2+1.95,6.96,'brass');}));
 }
 if(params.asset==='claw')for(let i=0;i<4;i++){const curve=new T.CatmullRomCurve3([new T.Vector3(.02,0,-.16),new T.Vector3(.02,.04,0),new T.Vector3(.12,.08,.06),new T.Vector3(.23,.02,.05)]);add('finger-'+i,cappedTube(curve,.025-i*.002),'skin',[0,i*.12,0]);add('tip-'+i,new T.CylinderGeometry(.001,.022-i*.002,.1,12),'nail',[.24,i*.12-.02,.05],[0,0,-2.6]);}
 // Broad stone faces need stable roughness; high-frequency specular maps alias at menu distance.
 materials.stone.roughnessFactor=.92;delete materials.stone.metallicRoughnessTexture;delete materials.stone.normalTexture;
 materials.steel.roughnessFactor=.8;materials.steel.metallicFactor=.35;
 const used=new Set(meshes.map(m=>m.material));for(const id of Object.keys(materials))if(!used.has(id))delete materials[id];const maps=new Set(Object.values(materials).flatMap(m=>[m.baseColorTexture,m.metallicRoughnessTexture,m.normalTexture]));for(const id of Object.keys(textures))if(!maps.has(id))delete textures[id];
 return{meshes,materials,textures,metadata:{synthetic:true,asset:params.asset,units:'meters',source:'Game-local NexusFactory-Kits composition'}};
});
