import { createSculptKit } from '../../../../../../foundation/sculpt-kit.js';
import { surface } from '../../../../../../foundation/sculpt.js';
import { FINISHES,createDistressSampler } from '../../../../../../foundation/distressed.js';
export { createDistressSampler };
export const kit=createSculptKit({id:'factory-material-procedural-distressed',displayName:'Distressed Architectural Surfaces',domainPath:'n:factory:material:procedural',requires:['factory:material:procedural','factory:artifact','factory:seed'],provides:['material:distressed:vertex-color'],parameterSchema:[{id:'finish',type:'enum',options:FINISHES,default:'plaster'},{id:'wear',type:'number',minimum:0,maximum:1,default:.7},{id:'scale',type:'number',minimum:.2,maximum:4,default:1},{id:'resolution',type:'integer',minimum:12,maximum:100,default:60}],source:{module:'src/domains/factory/material/procedural/kits/distressed-kit/index.js',exportName:'kit'},metadata:{synthetic:true,outputFormats:['glb','json']}},({seed,params:p})=>{
 const sample=createDistressSampler(seed,p),m=surface('surface-swatch','finish',p.resolution,p.resolution,(u,v)=>[(v-.5)*2,(u-.5)*2,0],{role:'material-swatch'});m.colors=[];for(let i=0;i<m.positions.length;i+=3)m.colors.push(...sample(m.positions[i],m.positions[i+1]));
 return {meshes:[m],materials:{finish:{baseColorFactor:[1,1,1,1],roughnessFactor:p.finish==='porcelain'?.3:p.finish==='metal'?.45:.95,metallicFactor:p.finish==='metal'?.65:p.finish==='rust'?.15:0,doubleSided:true}},metadata:{finish:p.finish,wear:p.wear,field:'seeded Gaussian stains, oscillatory fracture lines and weave',synthetic:true}};
});
export const manifest=kit.manifest;
export const {describe,generate,randomize,reroll,validate}=kit.services;
export const exportArtifact=kit.services.export;
export { exportArtifact as export };
export default kit;
