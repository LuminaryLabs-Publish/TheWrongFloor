import { defineKit } from '../domain.js';
import { createArtifact, createExportResult, normalizeParameters, randomizeParameters, validateArtifactShape } from '../contracts.js';
import { createSeededRandom, deriveSeed } from './random.js';
import { exportArtifactGlb } from './glb.js';
import { sha256 } from './hash.js';
export function createSculptKit(config,builder){
 const manifest=defineKit({...config,version:'0.1.0',services:['describe','generate','randomize','reroll','validate','export'],runtime:{environments:['node','browser'],permissions:[]},provides:['factory:generate','factory:validate','factory:variation','factory:export','artifact:mesh','export:glb','export:json','seed:deterministic',...(config.provides??[])],editor:{preview:'mesh-3d',inspector:'schema',surfaces:['parameters','preview','export'],...config.editor}});
 const seedOf=r=>{const s=String(r.seed??'horror:001').trim();if(!s)throw new TypeError('Nonempty explicit seed required');return s;};
 function generate(request={}){
  if(request.sourceStatus==='blocked')throw new Error('Source is blocked');
  const seed=seedOf(request),params=normalizeParameters(manifest.parameterSchema,request.params),parts=builder({seed,params});
  const stageInput=sha256({seed,params}),stages=[{id:'sculpt',status:'pass',inputSignature:stageInput,outputSignature:sha256(parts.meshes),warnings:[]}];
  const artifact=createArtifact({kitId:manifest.id,domainPath:manifest.domainPath,seed,params,...parts,metadata:{...parts.metadata,synthetic:true,units:'meters',seedPolicy:{algorithm:'fnv1a-lcg32',streams:['geometry','surface']},stageRecords:stages,source:{kind:'mathematical',version:manifest.version}}});
  const report=validate(artifact);if(!report.valid)throw new Error('Sculpt validation failed: '+report.checks.filter(c=>!c.pass).map(c=>c.id));return artifact;
 }
 function validate(artifact){
  const checks=[...validateArtifactShape(artifact).checks];
  checks.push({id:'identity',pass:artifact?.kitId===manifest.id},{id:'nonempty-triangles',pass:(artifact?.statistics?.triangleCount??0)>0});
  for(const m of artifact?.meshes??[]){const n=m.positions.length/3;let nondegenerate=true;for(let j=0;j<m.indices.length;j+=3){const a=m.indices[j]*3,b=m.indices[j+1]*3,c=m.indices[j+2]*3,ux=m.positions[b]-m.positions[a],uy=m.positions[b+1]-m.positions[a+1],uz=m.positions[b+2]-m.positions[a+2],vx=m.positions[c]-m.positions[a],vy=m.positions[c+1]-m.positions[a+1],vz=m.positions[c+2]-m.positions[a+2];if(!(Math.hypot(uy*vz-uz*vy,uz*vx-ux*vz,ux*vy-uy*vx)>1e-12)){nondegenerate=false;break;}}checks.push({id:`${m.id}:nondegenerate-triangles`,pass:nondegenerate});checks.push({id:`${m.id}:index-range`,pass:m.indices.every(i=>Number.isInteger(i)&&i>=0&&i<n)},{id:`${m.id}:material`,pass:!!artifact.materials[m.material]},{id:`${m.id}:unit-normals`,pass:m.normals.every((_,i,a)=>i%3||Math.abs(Math.hypot(a[i],a[i+1],a[i+2])-1)<.001)});}
  const base=artifact?Object.fromEntries(Object.entries(artifact).filter(([k])=>k!=='deterministicHash')):{};checks.push({id:'integrity',pass:artifact?.deterministicHash===sha256(base)});
  return {schemaVersion:'nexusfactory.validation-report/1',valid:checks.every(c=>c.pass),checks,authority:'indexed geometry, finite attributes, computed bounds and SHA-256; visual quality requires image review'};
 }
 function randomize(request={}){const seed=seedOf(request),groupId=request.groupId??'everything',group=manifest.editor.randomizationGroups.find(g=>g.id===groupId);if(!group)throw new RangeError('Unknown group '+groupId);const entropy=String(request.entropy??'0'),params=randomizeParameters({schema:manifest.parameterSchema,input:request.params,parameterIds:group.parameters,random:createSeededRandom(deriveSeed(seed,'parameters:'+groupId+':'+entropy))}),nextSeed=group.rerollSeed?deriveSeed(seed,'randomize:'+entropy):seed;return {seed:nextSeed,params,artifact:generate({seed:nextSeed,params})};}
 function reroll(request={}){const seed=deriveSeed(seedOf(request),'individual:'+String(request.entropy??'0')),params=normalizeParameters(manifest.parameterSchema,request.params);return {seed,params,artifact:generate({seed,params})};}
 function exportArtifact(artifact,format='glb'){if(!validate(artifact).valid)throw new TypeError('Cannot export invalid artifact');const fileName=manifest.id+'-'+artifact.deterministicHash.slice(-8)+'.'+format;if(format==='glb')return createExportResult({format,fileName,mimeType:'model/gltf-binary',bytes:exportArtifactGlb(artifact)});if(format==='json')return createExportResult({format,fileName,mimeType:'application/json',text:JSON.stringify(artifact)});throw new RangeError('Unsupported export '+format);}
 return Object.freeze({manifest,services:Object.freeze({describe:()=>structuredClone(manifest),generate,randomize,reroll,validate,export:exportArtifact})});
}
