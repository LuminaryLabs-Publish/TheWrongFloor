const EPSILON = 1e-9;

export function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
export function add(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
export function scale(v, s) { return [v[0] * s, v[1] * s, v[2] * s]; }
export function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
export function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
export function length(v) { return Math.hypot(v[0], v[1], v[2]); }
export function normalize(v) {
  const n = length(v);
  if (n < EPSILON) throw new TypeError("Cannot normalize a zero-length vector.");
  return scale(v, 1 / n);
}

export function createMesh(id, material) { return { id, material, positions: [], indices: [] }; }
export function addTriangle(mesh, a, b, c) { const offset = mesh.positions.length / 3; mesh.positions.push(...a, ...b, ...c); mesh.indices.push(offset, offset + 1, offset + 2); }
function addQuad(mesh, a, b, c, d) { addTriangle(mesh, a, b, c); addTriangle(mesh, a, c, d); }

export function computeMeshNormals(mesh) {
  const vertexCount = Math.floor((mesh?.positions?.length ?? 0) / 3);
  const normals = new Array(vertexCount * 3).fill(0);
  const positions = mesh?.positions ?? [];
  for (let index = 0; index < (mesh?.indices?.length ?? 0); index += 3) {
    const ia = mesh.indices[index], ib = mesh.indices[index + 1], ic = mesh.indices[index + 2];
    const a = [positions[ia * 3], positions[ia * 3 + 1], positions[ia * 3 + 2]];
    const b = [positions[ib * 3], positions[ib * 3 + 1], positions[ib * 3 + 2]];
    const c = [positions[ic * 3], positions[ic * 3 + 1], positions[ic * 3 + 2]];
    const face = cross(sub(b, a), sub(c, a));
    for (const vertex of [ia, ib, ic]) { normals[vertex * 3] += face[0]; normals[vertex * 3 + 1] += face[1]; normals[vertex * 3 + 2] += face[2]; }
  }
  for (let index = 0; index < vertexCount; index += 1) {
    const value = [normals[index * 3], normals[index * 3 + 1], normals[index * 3 + 2]];
    const magnitude = length(value);
    const unit = magnitude > EPSILON ? scale(value, 1 / magnitude) : [0, 1, 0];
    normals[index * 3] = unit[0]; normals[index * 3 + 1] = unit[1]; normals[index * 3 + 2] = unit[2];
  }
  return normals;
}

export function mergeMeshes(id, parts, material) {
  const merged = createMesh(id, material);
  for (const part of parts) {
    if (!part || !Array.isArray(part.positions) || !Array.isArray(part.indices)) throw new TypeError(`Invalid mesh part while building ${id}.`);
    const vertexOffset = merged.positions.length / 3;
    merged.positions.push(...part.positions);
    merged.indices.push(...part.indices.map((index) => index + vertexOffset));
  }
  merged.normals = computeMeshNormals(merged);
  return merged;
}

export function createBoxMesh(id, center, size, material) {
  const mesh = createMesh(id, material); const [cx, cy, cz] = center; const [hx, hy, hz] = size.map((value) => value / 2);
  const p = [[cx-hx,cy-hy,cz-hz],[cx+hx,cy-hy,cz-hz],[cx+hx,cy+hy,cz-hz],[cx-hx,cy+hy,cz-hz],[cx-hx,cy-hy,cz+hz],[cx+hx,cy-hy,cz+hz],[cx+hx,cy+hy,cz+hz],[cx-hx,cy+hy,cz+hz]];
  addQuad(mesh,p[0],p[3],p[2],p[1]); addQuad(mesh,p[4],p[5],p[6],p[7]); addQuad(mesh,p[0],p[4],p[7],p[3]); addQuad(mesh,p[1],p[2],p[6],p[5]); addQuad(mesh,p[3],p[7],p[6],p[2]); addQuad(mesh,p[0],p[1],p[5],p[4]); return mesh;
}

export function createBeamMesh(id, start, end, width, depth, material) {
  const mesh=createMesh(id,material),axis=normalize(sub(end,start)),reference=Math.abs(axis[1])<.92?[0,1,0]:[1,0,0],side=normalize(cross(axis,reference)),up=normalize(cross(side,axis)),sw=scale(side,width/2),ud=scale(up,depth/2);
  const corners=(origin)=>[add(add(origin,sw),ud),add(sub(origin,sw),ud),sub(sub(origin,sw),ud),add(sub(origin,ud),sw)]; const a=corners(start),b=corners(end); addQuad(mesh,a[0],a[1],a[2],a[3]); addQuad(mesh,b[3],b[2],b[1],b[0]); for(let i=0;i<4;i++){const next=(i+1)%4;addQuad(mesh,a[i],b[i],b[next],a[next]);} return mesh;
}

export function createCylinderMesh(id, start, end, radius, segments, material) {
  const mesh=createMesh(id,material),axis=normalize(sub(end,start)),reference=Math.abs(axis[1])<.92?[0,1,0]:[1,0,0],tangent=normalize(cross(axis,reference)),bitangent=normalize(cross(tangent,axis)); const ringPoint=(origin,angle)=>add(origin,add(scale(tangent,Math.cos(angle)*radius),scale(bitangent,Math.sin(angle)*radius)));
  for(let i=0;i<segments;i++){const a0=i*Math.PI*2/segments,a1=(i+1)*Math.PI*2/segments,s0=ringPoint(start,a0),s1=ringPoint(start,a1),e0=ringPoint(end,a0),e1=ringPoint(end,a1);addQuad(mesh,s0,e0,e1,s1);addTriangle(mesh,start,s1,s0);addTriangle(mesh,end,e0,e1);} return mesh;
}

export function createConeMesh(id, baseCenter, tip, radius, segments, material) {
  const mesh=createMesh(id,material),axis=normalize(sub(tip,baseCenter)),reference=Math.abs(axis[1])<.92?[0,1,0]:[1,0,0],tangent=normalize(cross(axis,reference)),bitangent=normalize(cross(tangent,axis));
  for(let i=0;i<segments;i++){const a0=i*Math.PI*2/segments,a1=(i+1)*Math.PI*2/segments,p0=add(baseCenter,add(scale(tangent,Math.cos(a0)*radius),scale(bitangent,Math.sin(a0)*radius))),p1=add(baseCenter,add(scale(tangent,Math.cos(a1)*radius),scale(bitangent,Math.sin(a1)*radius)));addTriangle(mesh,p0,tip,p1);addTriangle(mesh,baseCenter,p1,p0);} return mesh;
}

export function createOctahedronMesh(id, center, radius, material) {
  const mesh=createMesh(id,material),[x,y,z]=center,top=[x,y+radius,z],bottom=[x,y-radius,z],ring=[[x+radius,y,z],[x,y,z+radius],[x-radius,y,z],[x,y,z-radius]]; for(let i=0;i<4;i++){const next=(i+1)%4;addTriangle(mesh,top,ring[i],ring[next]);addTriangle(mesh,bottom,ring[next],ring[i]);} return mesh;
}

export function createLowPolyClusterMesh(id, center, radius, material, options = {}) {
  const mesh=createMesh(id,material),[cx,cy,cz]=center,[sx,sy,sz]=options.scale??[1,1,1],rotation=Number(options.rotation??0),irregularity=Math.max(0,Number(options.irregularity??0)),random=typeof options.random==="function"?options.random:null,ringSegments=6,jitter=()=>random?1+(random()-.5)*2*irregularity:1,top=[cx,cy+radius*sy,cz],bottom=[cx,cy-radius*sy,cz],upper=[],lower=[];
  for(let i=0;i<ringSegments;i++){const upperAngle=rotation+i*Math.PI*2/ringSegments,lowerAngle=upperAngle+Math.PI/ringSegments;upper.push([cx+Math.cos(upperAngle)*radius*.88*sx*jitter(),cy+radius*.35*sy*jitter(),cz+Math.sin(upperAngle)*radius*.88*sz*jitter()]);lower.push([cx+Math.cos(lowerAngle)*radius*.82*sx*jitter(),cy-radius*.32*sy*jitter(),cz+Math.sin(lowerAngle)*radius*.82*sz*jitter()]);}
  for(let i=0;i<ringSegments;i++){const next=(i+1)%ringSegments;addTriangle(mesh,top,upper[i],upper[next]);addTriangle(mesh,upper[i],lower[i],upper[next]);addTriangle(mesh,upper[next],lower[i],lower[next]);addTriangle(mesh,bottom,lower[next],lower[i]);} return mesh;
}

export function meshBounds(meshes) {
  const points=meshes.flatMap((mesh)=>{const out=[];for(let i=0;i<mesh.positions.length;i+=3)out.push([mesh.positions[i],mesh.positions[i+1],mesh.positions[i+2]]);return out;});
  if(!points.length)return{min:[0,0,0],max:[0,0,0],size:[0,0,0]}; const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const p of points)for(let i=0;i<3;i++){min[i]=Math.min(min[i],p[i]);max[i]=Math.max(max[i],p[i]);}return{min,max,size:max.map((value,index)=>value-min[index])};
}
export function triangleCount(meshes){return meshes.reduce((total,mesh)=>total+Math.floor(mesh.indices.length/3),0);}
