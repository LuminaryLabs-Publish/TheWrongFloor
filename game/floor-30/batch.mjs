import {mergeGeometries} from '../vendor/three/addons/utils/BufferGeometryUtils.js';
// Each GLB root is a rigid unit. Doors remain independent and fingers are excluded.
export function batchRigid(T,root){
 root.updateMatrixWorld(true);const inverse=root.matrixWorld.clone().invert(),groups=new Map();
 root.traverse(mesh=>{if(!mesh.isMesh||Array.isArray(mesh.material)||mesh.isSkinnedMesh)return;const key=mesh.material.uuid+':'+mesh.receiveShadow;const group=groups.get(key)??[];group.push(mesh);groups.set(key,group);});
 for(const group of groups.values()){if(group.length<2)continue;const parts=group.map(m=>m.geometry.clone().applyMatrix4(new T.Matrix4().multiplyMatrices(inverse,m.matrixWorld)));const merged=mergeGeometries(parts);parts.forEach(g=>g.dispose());if(!merged)continue;merged.computeBoundingSphere();const first=group[0],mesh=new T.Mesh(merged,first.material);mesh.castShadow=first.castShadow;mesh.receiveShadow=first.receiveShadow;mesh.name='rigid-'+first.material.name;const old=new Set();for(const m of group){old.add(m.geometry);m.removeFromParent();}old.forEach(g=>g.dispose());root.add(mesh);}
 return root;
}
