import { createSculptKit } from '../../../../../../foundation/sculpt-kit.js';
import { surface,sweep,TAU } from '../../../../../../foundation/sculpt.js';
import { createRandomStream } from '../../../../../../foundation/random.js';
import { createDistressSampler } from '../../../../../../foundation/distressed.js';
const schema=[{id:'environment',type:'enum',options:['office','hotel','basement'],default:'hotel'},{id:'width',type:'number',minimum:2.8,maximum:6,default:3.8},{id:'height',type:'number',minimum:2.8,maximum:5,default:3.2},{id:'length',type:'number',minimum:8,maximum:22,default:14},{id:'distortion',type:'number',minimum:0,maximum:1,default:.25},{id:'wear',type:'number',minimum:0,maximum:1,default:.7}];
export const kit=createSculptKit({id:'factory-object-structure-liminal',displayName:'Liminal Corridor Architecture',domainPath:'n:factory:object:structure',requires:['factory:object:structure','factory:seed','factory:artifact'],provides:['liminal:interior:mesh'],parameterSchema:schema,source:{module:'src/domains/factory/object/structure/kits/liminal-kit/index.js',exportName:'kit'},metadata:{synthetic:true,outputFormats:['glb','json']}},({seed,params:p})=>{
 const r=createRandomStream(seed).fork('geometry'),phase=r.range(0,TAU),meshes=[],w=p.width/2,h=p.height,l=p.length,d=p.distortion;
 const sample=createDistressSampler(seed,{finish:p.environment==='hotel'?'cloth':'plaster',wear:p.wear,scale:.8});
 const tint=p.environment==='hotel'?[.8,.64,.46]:p.environment==='office'?[.84,.9,.78]:[.65,.73,.69];
 const materials={wall:{baseColorFactor:[...tint,1],roughnessFactor:.97,doubleSided:true},floor:{baseColorFactor:p.environment==='hotel'?[.19,.055,.039,1]:[.13,.15,.14,1],roughnessFactor:.9,doubleSided:true},metal:{baseColorFactor:[.15,.13,.11,1],roughnessFactor:.65,metallicFactor:.55,doubleSided:true},trim:{baseColorFactor:[.32,.25,.15,1],roughnessFactor:.8,doubleSided:true}};
 // Grid surfaces incorporate subtle wall bowing while preserving the entrance and central clearance.
 for(const side of [-1,1]){const m=surface(`wall-${side}`,'wall',32,22,(u,v)=>{const z=-u*l,bow=d*.12*Math.sin(u*Math.PI)*Math.sin(v*5+phase);return [side*(w+bow),v*h,z];},{role:'wall'});m.colors=[];for(let i=0;i<m.positions.length;i+=3)m.colors.push(...sample(m.positions[i+2],m.positions[i+1]));meshes.push(m);}
 meshes.push(surface('floor','floor',40,16,(u,v)=>[(v-.5)*p.width,0,-u*l],{role:'floor'}));
 meshes.push(surface('ceiling','wall',32,16,(u,v)=>[(v-.5)*p.width,h+d*.07*Math.sin(u*11+phase)*Math.sin(v*Math.PI),-u*l],{role:'ceiling'}));
 for(let j=1;j<=Math.floor(l/2.8);j++){
  const z=-j*2.8;
  for(const side of [-1,1]){
   meshes.push(sweep(`arch-${j}-${side}`,'trim',[[side*w,0,z],[side*w,h*.75,z],[side*w*.72,h,z],[0,h-.02,z]],t=>.045+.025*Math.sin(t*Math.PI),24,{role:'architecture'}));
   meshes.push(surface(`wainscot-${j}-${side}`,'trim',6,12,(u,v)=>[side*(w-.018-.01*Math.sin(v*TAU*3)),.12+u*.82,z+v*2.5],{role:'architecture'}));
  }
 }
 if(p.environment==='basement')for(let i=0;i<5;i++){const x=-w+.20+i*.18;meshes.push(sweep(`overhead-pipe-${i}`,'metal',[[x,h-.22,0],[x+.08,h-.12,-l*.3],[x-.09,h-.20,-l*.7],[x,h-.23,-l]],.035+i*.006,40,{role:'pipe'}));}
 return {meshes,materials,metadata:{environment:p.environment,dimensions:{width:p.width,height:h,length:l},entrance:[0,0,0],forward:'-Z',up:'+Y',clearance:{min:[-1.2,0,-l],max:[1.2,2.5,0]},propAnchors:Array.from({length:Math.floor(l/3)},(_,i)=>({id:`bay-${i}`,position:[i%2?w-.35:-w+.35,0,-2-i*3],side:i%2?1:-1})),lightAnchors:Array.from({length:Math.floor(l/3)},(_,i)=>[0,h-.15,-1.5-i*3]),visualApproval:'required'}};
});
export const manifest=kit.manifest;
export const {describe,generate,randomize,reroll,validate}=kit.services;
export const exportArtifact=kit.services.export;
export { exportArtifact as export };
export default kit;
