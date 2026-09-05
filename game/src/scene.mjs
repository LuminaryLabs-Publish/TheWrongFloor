import * as THREE from '../vendor/three/three.module.js';
import { kit as horrorKit } from '../vendor/factory-kits/src/domains/factory/object/creature/kits/horror-kit/index.js';
import { kit as liminalKit } from '../vendor/factory-kits/src/domains/factory/object/structure/kits/liminal-kit/index.js';
import { createDistressSampler } from '../vendor/factory-kits/src/domains/factory/material/procedural/kits/distressed-kit/index.js';

// The renderer consumes deterministic factory artifacts. Gameplay never reads visual RNG.
export function createScene(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, powerPreference:'high-performance' });
  let appliedPixelRatio=Math.min(devicePixelRatio,1);
  const gl=renderer.getContext(),debugRenderer=gl.getExtension('WEBGL_debug_renderer_info');
  const driver=String(gl.getParameter(debugRenderer?debugRenderer.UNMASKED_RENDERER_WEBGL:gl.RENDERER));
  renderer.setPixelRatio(appliedPixelRatio);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate=false;
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#08090b');
  scene.fog = new THREE.FogExp2('#111418',.034);
  const camera = new THREE.PerspectiveCamera(65,1,.05,60);
  camera.position.set(0,1.64,3.15);
  const cabin = new THREE.Group(), hall = new THREE.Group(), actors = new THREE.Group();
  scene.add(cabin,hall,actors);
  const textures = [], permanentMaterials = [];
  function texture(kind,seed=1) {
    const c=document.createElement('canvas');c.width=c.height=512;
    const x=c.getContext('2d');let s=seed>>>0;
    const rnd=()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};
    x.fillStyle=kind==='metal'?'#64665f':kind==='carpet'?'#392c2b':kind==='concrete'?'#66685e':'#aaa58f';x.fillRect(0,0,512,512);
    for(let i=0;i<7000;i++){const v=rnd()*90|0;x.fillStyle=`rgba(${v},${v},${v},${rnd()*.14})`;x.fillRect(rnd()*512,rnd()*512,kind==='metal'?rnd()*110:1+rnd()*8,1+rnd()*3);}
    if(kind==='carpet'){x.strokeStyle='#8c7661';x.lineWidth=2;for(let a=-512;a<1024;a+=32){x.beginPath();x.moveTo(a,0);x.lineTo(a+512,512);x.stroke();x.beginPath();x.moveTo(a,0);x.lineTo(a-512,512);x.stroke();}}
    else if(kind==='wall'){x.strokeStyle='#7b7d70';x.lineWidth=3;for(let i=0;i<=512;i+=128){x.beginPath();x.moveTo(0,i);x.lineTo(512,i);x.stroke();}for(let i=0;i<12;i++){x.fillStyle='rgba(30,35,21,.08)';x.fillRect(rnd()*512,0,4+rnd()*15,50+rnd()*440);}}
    else if(kind==='concrete'){for(let j=0;j<12;j++){x.strokeStyle='rgba(12,18,14,.25)';x.beginPath();let a=rnd()*512,b=rnd()*512;x.moveTo(a,b);for(let i=0;i<8;i++){a+=rnd()*30-15;b+=rnd()*30;x.lineTo(a,b);}x.stroke();}}
    const sampler=createDistressSampler(String(seed),{finish:kind==='carpet'?'cloth':kind==='metal'?'metal':'plaster',wear:.7,scale:1});
    const pixels=x.getImageData(0,0,512,512);for(let j=0;j<512;j+=4)for(let i=0;i<512;i+=4){const rgb=sampler(i/180,j/180);for(let a=0;a<4;a++)for(let b=0;b<4;b++){const p=((j+a)*512+i+b)*4;for(let k=0;k<3;k++)pixels.data[p+k]=pixels.data[p+k]*.65+rgb[k]*255*.35;}}x.putImageData(pixels,0,0);
    const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(2,2);return t;
  }
  const metal=new THREE.MeshStandardMaterial({map:texture('metal'),color:'#8b9187',roughness:.48,metalness:.7});
  const dark=new THREE.MeshStandardMaterial({color:'#171d1d',roughness:.75,metalness:.2});
  const brass=new THREE.MeshStandardMaterial({color:'#9a8050',roughness:.45,metalness:.8});
  const glow=new THREE.MeshBasicMaterial({color:'#ffe7a0'});
  permanentMaterials.push(metal,dark,brass,glow);
  function box(parent,w,h,d,x,y,z,material) {const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
  function label(parent,text,width,height,x,y,z,{color='#d3c9a8',bg='#172323',font=60}={}) {
    const c=document.createElement('canvas');c.width=512;c.height=128;const ctx=c.getContext('2d');
    function paint(t){ctx.fillStyle=bg;ctx.fillRect(0,0,512,128);ctx.fillStyle=color;ctx.font=`${font}px monospace`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(t,256,64);}
    let paintedText=String(text);paint(paintedText);const tx=new THREE.CanvasTexture(c);tx.colorSpace=THREE.SRGBColorSpace;
    const mat=new THREE.MeshBasicMaterial({map:tx});const m=new THREE.Mesh(new THREE.PlaneGeometry(width,height),mat);m.position.set(x,y,z);parent.add(m);
    m.userData.setText=t=>{const next=String(t);if(next===paintedText)return;paintedText=next;paint(next);tx.needsUpdate=true;};return m;
  }
  box(cabin,5,.16,5,0,-.08,2,metal);box(cabin,5,.15,5,0,3.35,2,dark);
  box(cabin,.18,3.5,5,-2.15,1.65,2,metal);box(cabin,.18,3.5,5,2.15,1.65,2,metal);
  box(cabin,1.0,3.5,.28,-1.72,1.65,0,metal);box(cabin,1,3.5,.28,1.72,1.65,0,metal);
  box(cabin,2.5,.56,.28,0,3.1,0,metal);
  for(const side of [-1,1]){box(cabin,.07,2.82,.12,side*1.24,1.4,.17,brass);box(cabin,.025,2.8,.025,side*1.28,1.4,.25,glow);}
  const leftDoor=box(cabin,1.23,2.84,.11,-.615,1.42,.04,metal),rightDoor=box(cabin,1.23,2.84,.11,.615,1.42,.04,metal);
  const display=label(cabin,'30  ↓',1,.25,0,3.05,.155,{color:'#ffb46f',bg:'#101416',font:75});
  label(cabin,'LUMINARY  /  LIFT 06',.8,.14,-1.74,2.12,.18,{font:28});
  label(cabin,'CLOSE  ▷◁',.67,.15,1.74,1.18,.18,{font:40});
  label(cabin,'FALSE ALARMS',.69,.14,1.74,2.15,.18,{font:34});
  const indicators=[];for(let i=0;i<3;i++){const m=new THREE.MeshStandardMaterial({color:'#8dd1b1',emissive:'#356e48',emissiveIntensity:1});permanentMaterials.push(m);indicators.push(box(cabin,.1,.06,.025,1.52+i*.2,1.98,.19,m));}
  box(cabin,.25,.25,.04,1.74,1.5,.17,brass);
  box(cabin,1.6,.035,.5,0,3.23,2,glow);
  const cabinLight=new THREE.PointLight('#ffe4bc',11,7,2);cabinLight.position.set(0,3,1.6);scene.add(cabinLight);
  scene.add(new THREE.HemisphereLight('#a0b9c6','#302a22',1.05));
  const key=new THREE.SpotLight('#dceeff',65,25,.6,.55,1.3);key.position.set(.8,2.9,-2);key.target.position.set(0,1,-7);key.castShadow=true;key.shadow.mapSize.set(1024,1024);scene.add(key,key.target);
  const fill=new THREE.PointLight('#adcecd',18,18,1.7);fill.position.set(0,2.3,-6);scene.add(fill);
  let roundKey='',entity=null,secondary=null,mouth=null,head=null,cart=null,ceiling=null,mirror=null,shadowGlyph=null,clueLamp=null,maintenanceDoor=null,escapeTime=0;
  let lastArtifact=null, yaw=0,pitch=0,lastEnvironment='office',visualTime=0,quality='high',shadowResolution=1024,lastShadowSignature='';
  batchRigid(cabin,new Set([leftDoor,rightDoor,...indicators]));
  const prepared=new Map(),pending=new Map();let worker=null,requestId=0;
  function prepare(round,settings={}){const k=String(round.seed);if(prepared.has(k))return Promise.resolve();
    if(!worker){worker=new Worker(new URL('./factory-worker.mjs',import.meta.url),{type:'module'});worker.onmessage=({data})=>{const item=pending.get(data.id);if(!item)return;pending.delete(data.id);if(data.error)item.reject(new Error(data.error));else {prepared.set(item.key,data);item.resolve();}};worker.onerror=error=>{for(const item of pending.values())item.reject(new Error(error.message||'Factory worker failed'));pending.clear();worker?.terminate();worker=null;};}
    return new Promise((resolve,reject)=>{const id=++requestId;pending.set(id,{resolve,reject,key:k});const generationRound=!round.danger&&hash(String(round.seed))%3===0?{...round,danger:true,entity:'mannequin'}:round;worker.postMessage({id,round:generationRound,quality:settings.quality});});
  }
  function disposeGroup(group){group.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material]){if(!permanentMaterials.includes(m)){m.map?.dispose();m.dispose();}}}});group.clear();}
  // Batch only rigid siblings with identical material/attribute contracts. Animated
  // parts retain their pivots; every source vertex and triangle is preserved.
  function batchRigid(parent,excluded=new Set()){
    const groups=new Map();for(const mesh of parent.children){if(!mesh.isMesh||excluded.has(mesh)||mesh.name==='mouth-void'||['arm','finger','cloth','ribbon'].includes(mesh.userData.role)||Array.isArray(mesh.material))continue;const attributes=Object.keys(mesh.geometry.attributes).sort(),key=[mesh.material.uuid,attributes.join(','),mesh.castShadow,mesh.receiveShadow].join('|');if(!groups.has(key))groups.set(key,[]);groups.get(key).push(mesh);}
    for(const members of groups.values()){if(members.length<2)continue;const first=members[0],attributeNames=Object.keys(first.geometry.attributes),geometry=new THREE.BufferGeometry(),vertexCount=members.reduce((sum,m)=>sum+m.geometry.getAttribute('position').count,0),indexCount=members.reduce((sum,m)=>sum+(m.geometry.index?.count??m.geometry.getAttribute('position').count),0),arrays={};for(const name of attributeNames)arrays[name]=new Float32Array(vertexCount*first.geometry.getAttribute(name).itemSize);const indices=new Uint32Array(indexCount);let vertexOffset=0,indexOffset=0;for(const mesh of members){mesh.updateMatrix();const transformed=mesh.geometry.clone().applyMatrix4(mesh.matrix),count=transformed.getAttribute('position').count;for(const name of attributeNames)arrays[name].set(transformed.getAttribute(name).array,vertexOffset*first.geometry.getAttribute(name).itemSize);for(let i=0;i<(transformed.index?.count??count);i++)indices[indexOffset++]=(transformed.index?transformed.index.getX(i):i)+vertexOffset;vertexOffset+=count;transformed.dispose();}for(const name of attributeNames)geometry.setAttribute(name,new THREE.BufferAttribute(arrays[name],first.geometry.getAttribute(name).itemSize));geometry.setIndex(new THREE.BufferAttribute(indices,1));geometry.computeBoundingSphere();const merged=new THREE.Mesh(geometry,first.material);merged.name='rigid-batch-'+first.material.uuid;merged.castShadow=first.castShadow;merged.receiveShadow=first.receiveShadow;merged.userData.role='rigid';parent.add(merged);for(const mesh of members){parent.remove(mesh);mesh.geometry.dispose();}}
  }
  function artifactGroup(artifact){const g=new THREE.Group();const mats={},creature=artifact.kitId==='factory-object-creature-horror';for(const [id,m] of Object.entries(artifact.materials)){mats[id]=new THREE.MeshStandardMaterial({color:new THREE.Color(...(creature&&id==='skin'?[.32,.25,.21]:m.baseColorFactor.slice(0,3))),vertexColors:true,roughness:m.roughnessFactor??.8,metalness:m.metallicFactor??0,emissive:new THREE.Color(...(m.emissiveFactor??[0,0,0])),side:m.doubleSided?THREE.DoubleSide:THREE.FrontSide});}
    for(const mesh of artifact.meshes){const geo=new THREE.BufferGeometry();const pivot=mesh.extras?.pivot??[0,0,0];geo.setAttribute('position',new THREE.Float32BufferAttribute(mesh.positions.map((v,i)=>v-pivot[i%3]),3));geo.setAttribute('normal',new THREE.Float32BufferAttribute(mesh.normals,3));if(mesh.uvs?.length)geo.setAttribute('uv',new THREE.Float32BufferAttribute(mesh.uvs,2));if(mesh.colors?.length){let colors=mesh.colors;if(creature&&mesh.material==='skin'){colors=[...colors];const salt=hash(String(artifact.seed))%91;for(let i=0;i<mesh.positions.length;i+=3){const x=mesh.positions[i],y=mesh.positions[i+1],z=mesh.positions[i+2],marble=Math.sin(x*37+Math.sin(y*19+salt)*2+z*13),crack=Math.exp(-Math.abs(Math.sin(y*29+x*17+Math.sin(z*23+salt)))*22),shade=.68+.25*marble-.46*crack;colors[i]*=Math.max(.15,shade);colors[i+1]*=Math.max(.12,shade*.84);colors[i+2]*=Math.max(.10,shade*.78);}}geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));}geo.setIndex(mesh.indices);const m=new THREE.Mesh(geo,mats[mesh.material]);m.position.set(...pivot);m.name=mesh.id;m.userData={...mesh.extras,original:0};m.castShadow=true;m.receiveShadow=true;g.add(m);}
    // Faces are coherent transform hierarchies, not detached meshes when heads turn.
    const headMesh=g.getObjectByName('head');if(headMesh){const headAssembly=new THREE.Group();headAssembly.name='head-assembly';headAssembly.position.copy(headMesh.position);g.add(headAssembly);for(const part of [...g.children])if(part===headMesh||part.userData.role==='face'){part.position.sub(headAssembly.position);headAssembly.add(part);}}
    // Mouth surface coordinates are authored in artifact space. Center the actual surface
    // before scaling it so a smile expands locally rather than flying above the face.
    const mouthMesh=g.getObjectByName('mouth-void');if(mouthMesh){mouthMesh.geometry.computeBoundingBox();const center=mouthMesh.geometry.boundingBox.getCenter(new THREE.Vector3());mouthMesh.geometry.translate(-center.x,-center.y,-center.z);mouthMesh.position.add(center);}
    const faceAssembly=g.getObjectByName('head-assembly');if(faceAssembly)batchRigid(faceAssembly);batchRigid(g);return g;
  }
  function buildHall(environment,seed,artifact){disposeGroup(hall);lastEnvironment=environment;
    const env=environment==='hotel'?'hotel':environment==='basement'?'basement':'office';
    const wall=new THREE.MeshStandardMaterial({map:texture(env==='basement'?'concrete':'wall',seed),color:env==='hotel'?'#877562':env==='basement'?'#7d8e80':'#adbaa5',roughness:.95});
    const floor=new THREE.MeshStandardMaterial({map:texture(env==='hotel'?'carpet':'concrete',seed+1),roughness:.85,color:env==='hotel'?'#856659':'#737d72'});
    const structure=artifact??liminalKit.services.generate({seed:String(seed),params:{environment:env,width:5,height:3.4,length:16}});const architecture=artifactGroup({...structure,meshes:structure.meshes.filter(mesh=>env==='basement'||!mesh.id.startsWith('arch-'))});hall.add(architecture);
    box(hall,5,.03,16,0,-.005,-8,floor);box(hall,5,3.4,.2,0,1.65,-16,wall);
    for(let i=0;i<4;i++){const z=-2-i*3.8;box(hall,.55,.04,1.2,0,3.28,z,glow);for(const side of [-1,1]){box(hall,.07,2.45,1.25,side*2.36,1.2,z,env==='hotel'?brass:dark);box(hall,.06,.04,.18,side*2.31,1.15,z+.35,brass);box(hall,.035,.1,3.8,side*2.38,.1,z,floor);}}
    box(hall,1.15,2.3,.14,0,1.15,-15.78,dark);label(hall,'STAIRS',.7,.18,0,2.6,-15.65,{color:'#c4dac3',font:55});
    if(env==='office'){box(hall,.8,1.85,.6,-1.75,.925,-5,dark);label(hall,'DRINKS',.66,.22,-1.75,1.65,-4.69,{color:'#ca7754'});for(let i=0;i<4;i++)box(hall,.48,.12,.025,-1.75,1.3-i*.23,-4.68,brass);for(let i=0;i<3;i++){box(hall,.5,.1,.5,1.9,.5,-3-i*.8,dark);box(hall,.06,.5,.5,2.12,.8,-3-i*.8,dark);}}
    if(env==='hotel'){for(let i=0;i<3;i++){const frame=box(hall,.05,.85,1.1,-2.32,1.9,-3-i*4,brass);frame.userData.frame=true;}ensureCart();}
    if(env==='basement'){for(let i=0;i<5;i++){const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(-2.1+i*.22,2.95,0),new THREE.Vector3(-2.1+i*.22,3.03,-5),new THREE.Vector3(-2.1+i*.22,2.8,-10),new THREE.Vector3(-1.7+i*.22,2.8,-16)]);const m=new THREE.Mesh(new THREE.TubeGeometry(curve,24,.065,8,false),metal);hall.add(m);}ceiling=box(hall,1.0,.06,1.0,.35,3.17,-4,dark);}
    label(hall,env.toUpperCase(),1,.24,0,2.95,-5.8,{color:'#cad4bf',bg:'#26372f',font:50});
  }
  function ensureCart(){if(cart)return cart;cart=new THREE.Group();cart.name='luggage-cart';hall.add(cart);box(cart,1.1,.13,.65,0,.22,0,brass);for(const side of [-1,1]){box(cart,.055,1.7,.05,side*.5,1.05,0,brass);box(cart,.13,.15,.18,side*.45,.1,.2,dark);box(cart,.13,.15,.18,side*.45,.1,-.2,dark);}box(cart,1.05,.06,.05,0,1.9,0,brass);box(cart,.9,.55,.45,0,.52,0,dark);cart.position.set(1.3,0,-5);return cart;}
  function makeShadow(){const shape=new THREE.Shape();shape.moveTo(-.12,0);shape.bezierCurveTo(-.65,.18,-.2,.45,-.20,.8);shape.bezierCurveTo(-.8,.55,-1,.85,-.43,.95);shape.lineTo(-.25,1.05);shape.bezierCurveTo(-.38,1.5,.38,1.5,.25,1.05);shape.lineTo(.43,.95);shape.bezierCurveTo(1,.85,.8,.55,.20,.8);shape.bezierCurveTo(.2,.45,.65,.18,.12,0);shape.lineTo(.04,.45);shape.closePath();const m=new THREE.Mesh(new THREE.ShapeGeometry(shape,24),new THREE.MeshBasicMaterial({color:'#030406',transparent:true,opacity:.94,side:THREE.DoubleSide,depthWrite:false}));m.name='impossible-shadow';m.rotation.x=-Math.PI/2;m.scale.set(1.3,2.1,1);m.position.set(0,.028,-3);hall.add(m);return m;}
  function ensurePanel(){if(!ceiling)ceiling=box(hall,1.15,.07,1.15,.15,3.15,-4,dark);return ceiling;}
  function makeMaintenanceDoor(){const frame=new THREE.Group();frame.position.set(-.65,0,-8.45);hall.add(frame);box(frame,.12,2.5,.13,-.77,1.25,0,brass);box(frame,.12,2.5,.13,.77,1.25,0,brass);box(frame,1.65,.12,.13,0,2.5,0,brass);maintenanceDoor=new THREE.Group();maintenanceDoor.position.set(-.70,0,.02);frame.add(maintenanceDoor);box(maintenanceDoor,1.4,2.4,.08,.7,1.2,0,dark);label(frame,'MAINTENANCE',1.3,.17,0,2.68,.09,{font:42});}
  function buildLobby(){disposeGroup(actors);disposeGroup(hall);entity=secondary=mouth=head=cart=ceiling=mirror=shadowGlyph=clueLamp=maintenanceDoor=null;const warm=new THREE.MeshStandardMaterial({color:'#dad1b8',roughness:.7}),stone=new THREE.MeshStandardMaterial({color:'#77796b',roughness:.35});box(hall,9,.15,15,0,-.08,-6.5,stone);box(hall,9,4,.2,0,2,-13,warm);for(const side of [-1,1])box(hall,.2,4,15,side*4.5,2,-6.5,warm);box(hall,4,2.8,.12,0,1.4,-12.8,new THREE.MeshBasicMaterial({color:'#c7e2d2'}));for(const side of [-1,1])box(hall,.09,2.8,.18,side*1.95,1.4,-12.6,brass);box(hall,.09,2.8,.18,0,1.4,-12.6,brass);label(hall,'LOBBY  /  EXIT',3,.42,0,3.22,-12.5,{color:'#e3fff1',bg:'#244737',font:56});label(hall,'YOU MADE IT.',2.3,.28,0,2.3,-6,{color:'#e6e5cc',bg:'#26372f',font:55});fill.color.set('#ffe7bc');lastEnvironment='lobby';escapeTime=0;batchRigid(hall);}
  function loadRound(round,keyValue){roundKey=keyValue;disposeGroup(actors);entity=secondary=mouth=head=cart=ceiling=mirror=shadowGlyph=clueLamp=maintenanceDoor=null;fill.color.set('#adcecd');
    const seed=hash(String(round.seed??keyValue)),cache=prepared.get(String(round.seed));buildHall(round.environment,seed,cache?.interior);
    if(!round.danger){lastArtifact=null;if(cache?.creature){const still=artifactGroup(cache.creature);still.position.set(1.1,0,-7);still.scale.setScalar(.82);actors.add(still);}batchRigid(hall,new Set([ceiling]));return;}
    const aliases={tall:'tall-one',ceiling:'ceiling-walker'};const archetype=aliases[round.entity]??round.entity;
    lastArtifact=cache?.creature??horrorKit.services.generate({seed:String(round.seed??keyValue),params:{archetype,detail:quality==='low'?12:18,distortion:.45+(seed%50)/100,stature:archetype==='tall-one'?2.6:2.25,age:.7}});
    entity=artifactGroup(lastArtifact);actors.add(entity);entity.position.set(0,0,-8);
    head=entity.getObjectByName('head-assembly');mouth=entity.getObjectByName('mouth-void');
    if(archetype==='guest'){secondary=artifactGroup(lastArtifact);actors.add(secondary);secondary.position.set(1.35,0,-8);secondary.scale.setScalar(.85);const m=new THREE.MeshStandardMaterial({color:'#66807b',metalness:.95,roughness:.16});mirror=box(hall,1.35,2.5,.035,1.35,1.25,-8.25,m);for(const side of [-1,1])box(hall,.06,2.55,.06,1.35+side*.69,1.25,-8.20,brass);box(hall,1.42,.06,.06,1.35,2.53,-8.2,brass);}
    if(archetype==='tall-one')makeMaintenanceDoor();
    if(archetype==='ceiling-walker')ensurePanel();
    if(archetype==='porter'){ensureCart();if(Number(round.variant)===1)shadowGlyph=makeShadow();}
    if(archetype==='shadow'){shadowGlyph=makeShadow();clueLamp=new THREE.PointLight('#ffe7a8',12,7,1.4);clueLamp.position.set(-1,2.5,-3.5);const bulb=new THREE.Mesh(new THREE.SphereGeometry(.07,12,8),glow);clueLamp.add(bulb);hall.add(clueLamp);}
    if(archetype==='mannequin'){for(const x of [-1.4,1.4]){const g=artifactGroup(lastArtifact);g.position.set(x,0,-9);g.rotation.y=x*.2;actors.add(g);}}
    batchRigid(hall,new Set([ceiling,shadowGlyph,mirror]));
  }
  function hash(t){let h=2166136261;for(const c of t)h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0;}
  function resize(){const w=canvas.clientWidth||innerWidth,h=canvas.clientHeight||innerHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(canvas);resize();
  function render(snapshot,dt=0,input={},settings={}){
    quality=settings.quality??'medium';const desiredPixelRatio=Math.min(devicePixelRatio,quality==='low'?.75:quality==='high'?1.5:1);if(desiredPixelRatio!==appliedPixelRatio){appliedPixelRatio=desiredPixelRatio;renderer.setPixelRatio(appliedPixelRatio);}
    if(snapshot.mode!=='paused')visualTime+=Math.max(0,dt);const animationTime=Number.isFinite(snapshot.roundTime)?snapshot.roundTime:visualTime;
    const round=snapshot.round??{environment:'office',danger:true,entity:'tall-one',variant:'oversized',seed:'title'};
    const k=`${round.seed}:${snapshot.roundIndex??-1}:${round.entity}:${round.variant}:${snapshot.mode==='won'?'lobby':'floor'}`;if(k!==roundKey){if(snapshot.mode==='won'){roundKey=k;buildLobby();}else loadRound(round,k);}
    yaw=THREE.MathUtils.clamp(yaw+(input.lookX??0)*dt*(settings.sensitivity??1)*1.15,-.46,.46);
    pitch=THREE.MathUtils.clamp(pitch+(input.lookY??0)*dt*(settings.sensitivity??1)*.8,-.27,.35);
    camera.rotation.set(pitch,yaw,0,'YXZ');
    camera.position.y=1.64+(settings.reducedMotion?0:Math.sin(visualTime*.7)*.004);
    if(snapshot.mode==='won')escapeTime+=Math.max(0,dt);const openness=snapshot.mode==='won'?Math.min(1,escapeTime/1.1):snapshot.door?.openness??1;leftDoor.position.x=-.615-openness*1.24;rightDoor.position.x=.615+openness*1.24;
    display.userData.setText(snapshot.mode==='won'?'L  ↓':`${String(Math.min(snapshot.totalRounds??30,Math.max(0,(snapshot.totalRounds??30)-(snapshot.roundIndex??0)))).padStart(2,'0')}  ↓`);
    indicators.forEach((m,i)=>{const on=i<3-(snapshot.mistakes??0);m.material.color.set(on?'#8dd1b1':'#cb4935');m.material.emissive.set(on?'#356e48':'#561308');});
    const clue=!!snapshot.clueVisible,progress=Math.max(0,Math.min(1,snapshot.threatProgress??0)),clueAge=clue?Math.max(0,animationTime-(round.clueAt??0)):0;
    const entityName=({tall:'tall-one',ceiling:'ceiling-walker'})[round.entity]??round.entity??'',variant=Number(round.variant??0);
    if(entity){const approach=Math.max(0,(progress-.14)/.86)**2;entity.position.set(0,0,-8+approach*7.4);entity.rotation.set(0,0,0);entity.scale.set(1,1,1);entity.visible=true;
      if(entityName==='tall-one'){const reveal=clue?Math.min(1,clueAge/.5):0;entity.rotation.z=(variant===1?1.15:.5)*(1-reveal)+Math.sin(animationTime*3)*.025*reveal;entity.scale.y=(variant===1?.4:.74)+(variant===1?.54:.20)*reveal;entity.position.x=-.65*(1-approach);if(maintenanceDoor)maintenanceDoor.rotation.y=variant===1?-Math.PI*.68*reveal:-Math.PI*.7;entity.visible=variant===0||clue;}
      if(entityName==='ceiling-walker'){entity.rotation.z=Math.PI;entity.position.y=3.08;entity.position.z=-4+approach*3.35;entity.rotation.x=clue?.14*Math.sin(animationTime*7):0;entity.visible=variant===0||clueAge>.15;if(ceiling)ceiling.rotation.x=clue&&variant===1?Math.min(.65,clueAge*3):0;}
      if(entityName==='porter'){entity.position.x=.9*(1-approach);entity.position.z=-5+approach*4.35;entity.visible=clue&&(variant===0||progress>.4);const cartMove=clue?Math.min(1,clueAge*1.7):0;if(cart){cart.position.z=-5+(variant===1?cartMove*.65:0)+approach*2.2;cart.position.x=1.3-(variant===1?cartMove*.6:0);}if(shadowGlyph){shadowGlyph.visible=clue;shadowGlyph.position.set(-.85-cartMove*.4,.028,-2.1-approach*.7);shadowGlyph.scale.x=1.1+cartMove*.6;}}
      if(entityName==='shadow'){entity.visible=clue&&progress>.4;entity.position.z=-6+progress*5.35;entity.scale.set(1+Math.sin(animationTime*5)*.06,Math.max(.08,(progress-.4)/.6),1);if(shadowGlyph){shadowGlyph.visible=clue;shadowGlyph.position.set(variant===1?Math.sin(clueAge*2)*.85:0,.028,-4+progress*3.5);shadowGlyph.scale.y=2.1+progress;}if(clueLamp)clueLamp.position.x=variant===1?Math.sin(clueAge*2)*1.1:-1;}
      if(entityName==='guest'){entity.position.x=-.45;entity.position.z=-8+approach*7.35;if(secondary){secondary.rotation.y=clue&&variant===0?Math.min(.9,clueAge*2):0;secondary.position.z=-8.15;secondary.visible=variant===0;secondary.scale.setScalar(.85);}if(mouth){mouth.scale.y=clue&&variant===1?1+Math.min(2.1,clueAge*3):1;mouth.scale.x=clue&&variant===1?1+Math.min(.75,clueAge):1;}}
      if(entityName==='mannequin'){if(variant===0)entity.position.z=clue?-6.4+approach*5.75:-9;if(head)head.rotation.y=clue&&variant===1?Math.min(.85,clueAge*2):0;}
      entity.traverse(part=>{if(['arm','finger','ribbon','cloth'].includes(part.userData.role)){const strength=clue?.018:0;part.rotation.z=Math.sin(animationTime*(clue?9:1)+hash(part.name)%100)*strength;}});
      if(snapshot.mode==='lost'&&snapshot.failureReason==='intrusion'){entity.visible=true;entity.scale.y=Math.max(.8,entity.scale.y);entity.position.z=settings.softScares?.45:1.55;entity.position.y=entityName==='ceiling-walker'?2.9:0;}
    }
    const subtle=settings.reducedFlashes?1:1+Math.sin(animationTime*13)*.015;
    // A single deliberate dip masks the mannequin's step; reduced-flash mode uses a slow dim.
    const dip=entityName==='mannequin'&&variant===0&&clue?(settings.reducedFlashes?1-.25*Math.exp(-clueAge*2):clueAge<.22?.25:1):1;
    fill.intensity=(snapshot.mode==='won'?38:clue?23:18)*subtle*dip;key.intensity=(snapshot.mode==='won'?95:65)*dip;key.color.set(['hotel','lobby'].includes(lastEnvironment)?'#ffdfb7':'#dceeff');
    // The sealed cabin completely occludes the hallway. Skip its draw and shadow work.
    hall.visible=actors.visible=openness>.0001||snapshot.mode==='won';
    const desiredShadowType=quality==='low'?THREE.BasicShadowMap:THREE.PCFSoftShadowMap;if(renderer.shadowMap.type!==desiredShadowType){renderer.shadowMap.type=desiredShadowType;scene.traverse(o=>{if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])m.needsUpdate=true;});lastShadowSignature='';}const desiredShadowResolution=quality==='low'?256:quality==='high'?1024:512;if(desiredShadowResolution!==shadowResolution){shadowResolution=desiredShadowResolution;key.shadow.mapSize.set(shadowResolution,shadowResolution);key.shadow.map?.dispose();key.shadow.map=null;lastShadowSignature='';}
    const shadowSignature=[roundKey,openness.toFixed(5),hall.visible,clue&&hall.visible?animationTime.toFixed(5):'static',snapshot.mode==='lost'].join('|');
    if(shadowSignature!==lastShadowSignature){renderer.shadowMap.needsUpdate=true;lastShadowSignature=shadowSignature;}
    renderer.render(scene,camera);
  }
  function dispose(){resizeObserver.disconnect();worker?.terminate();for(const item of pending.values())item.reject(new Error('Scene disposed'));pending.clear();prepared.clear();disposeGroup(actors);disposeGroup(hall);disposeGroup(cabin);for(const t of textures)t.dispose();for(const m of permanentMaterials){m.map?.dispose();m.dispose();}renderer.dispose();}
  return {render,prepare,clearPrepared(){prepared.clear();},recenter(){yaw=pitch=0;},dispose,inspect(){return {renderer:{...renderer.info.render,quality,driver,pixelRatio:appliedPixelRatio,shadowResolution,geometries:renderer.info.memory.geometries,textures:renderer.info.memory.textures},environment:lastEnvironment,artifactHash:lastArtifact?.deterministicHash,meshes:lastArtifact?.meshes.length,triangles:lastArtifact?.statistics?.triangleCount,roundKey,prepared:prepared.size};},capture(){return canvas.toDataURL('image/png');}};
}
