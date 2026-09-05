import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {kit,ASSETS} from '../game/floor-30/factory.mjs';
import {exportArtifactGlb} from '../game/vendor/factory-kits/src/foundation/glb.js';
const root=new URL('../game/floor-30/assets/',import.meta.url);await mkdir(root,{recursive:true});const hash=b=>createHash('sha256').update(b).digest('hex');
const files=[];for(const asset of ASSETS){const artifact=kit.services.generate({seed:'floor30-001',params:{asset}}),bytes=exportArtifactGlb(artifact);await writeFile(new URL(asset+'.glb',root),bytes);files.push({path:asset+'.glb',bytes:bytes.length,sha256:hash(bytes),artifact:artifact.deterministicHash,triangles:artifact.statistics.triangleCount});}
await writeFile(new URL('manifest.json',root),JSON.stringify({seed:'floor30-001',synthetic:true,factorySHA256:hash(await readFile(new URL('../game/floor-30/factory.mjs',import.meta.url))),files},null,2)+'\n');console.log(files);
