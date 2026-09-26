import {batchRigid} from './batch.mjs';

export async function createLobbyScene(T,loadAsset,{authored=null}={}){
  const scene=new T.Scene();scene.background=new T.Color('#0b1014');scene.fog=new T.FogExp2('#101216',.018);
  const camera=new T.PerspectiveCamera(56,16/9,.05,70);
  const cameraTarget=new T.Vector3(.55,1.42,1.65);
  camera.position.set(-1.12,1.48,-4.72);camera.lookAt(cameraTarget);
  const templates=new Map();let disposed=false,visualTime=0,lastDescendReady=false,currentFloor=30;
  function release(){authored?.userData.release?.();const gs=new Set(),ms=new Set(),ts=new Set();const visit=o=>{if(o.userData.sharedRoomResource)return;if(o.geometry)gs.add(o.geometry);for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[]){ms.add(m);for(const t of Object.values(m))if(t?.isTexture)ts.add(t);}};scene.traverse(visit);for(const root of templates.values())root.traverse(visit);gs.forEach(g=>g.dispose());ts.forEach(t=>t.dispose());ms.forEach(m=>m.dispose());templates.clear();scene.clear();}
  async function place(name,p=[0,0,0],r=0){if(!templates.has(name)){const template=await loadAsset(name);template.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=!/wall|wing|ceiling/.test(o.name);}});templates.set(name,batchRigid(T,template));}const root=templates.get(name).clone(true);root.position.set(...p);root.rotation.y=r;scene.add(root);return root;}
  let left,right;
  if(authored){scene.add(authored);left=authored.getObjectByName('door-left');right=authored.getObjectByName('door-right');}
  else{await place('architecture');await place('fixtures');left=await place('door-left',[-.7,0,-2.96]);right=await place('door-right',[.7,0,-2.96]);await place('seating',[-3.3,0,4.6],Math.PI);await place('seating',[3.3,0,4.6],Math.PI);await place('reception',[-4.5,0,2.3],.15);}
  if(!left||!right)throw new Error('Floor 30 elevator doors are missing');
  const leftClosed=left.position.x,rightClosed=right.position.x;

  function textPlane(text,w,h,font=48,bg='#171b19',fg='#ded7bf'){
    const canvas=document.createElement('canvas');canvas.width=512;canvas.height=160;const ctx=canvas.getContext('2d');
    ctx.fillStyle=bg;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle=fg;ctx.font=`${font}px monospace`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(String(text),256,80);
    const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
    const material=new T.MeshBasicMaterial({map:texture});const mesh=new T.Mesh(new T.PlaneGeometry(w,h),material);
    mesh.userData.setText=value=>{ctx.fillStyle=bg;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle=fg;ctx.fillText(String(value),256,80);texture.needsUpdate=true;};
    return mesh;
  }

  const panel=new T.Group();panel.position.set(1.62,1.72,-1.6);panel.rotation.y=-Math.PI/2;scene.add(panel);
  const boardMat=new T.MeshStandardMaterial({color:'#20231f',roughness:.72,metalness:.48});
  const trimMat=new T.MeshStandardMaterial({color:'#90764d',roughness:.42,metalness:.8});
  const board=new T.Mesh(new T.BoxGeometry(1.28,2.72,.12),boardMat);panel.add(board);
  const display=textPlane('30',.78,.22,82,'#0d1110','#f0a46e');display.position.set(0,1.03,.071);panel.add(display);
  const floors=[...Array.from({length:30},(_,i)=>30-i),'G','B'];
  floors.forEach((floor,index)=>{const cols=5,row=Math.floor(index/cols),col=index%cols;const x=-.46+col*.23,y=.73-row*.22;const m=new T.Mesh(new T.BoxGeometry(.17,.13,.055),index<30?boardMat:trimMat);m.position.set(x,y,.075);panel.add(m);const label=textPlane(floor,.13,.085,42,'#181b18',index<30?'#a9aa9e':'#e0c28b');label.position.set(x,y,.106);panel.add(label);});
  const descendMaterial=new T.MeshStandardMaterial({color:'#332d25',emissive:'#5d2b16',emissiveIntensity:.08,roughness:.38,metalness:.55});
  const descendButton=new T.Mesh(new T.BoxGeometry(.9,.28,.12),descendMaterial);descendButton.position.set(0,-.96,.11);descendButton.name='descend-button';panel.add(descendButton);
  const descendLabel=textPlane('DESCEND',.72,.12,54,'#2a211c','#e9d7bd');descendLabel.position.set(0,-.96,.176);panel.add(descendLabel);

  scene.add(new T.HemisphereLight('#8a9eae','#352215',.5));
  const key=new T.SpotLight('#ffdfb5',82,20,Math.PI/3,.55,2);key.position.set(0,4,1);key.target.position.set(0,1.5,6);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.bias=-.003;key.shadow.normalBias=.035;scene.add(key,key.target);
  for(const x of [-3,3]){const fill=new T.PointLight('#ffdfb5',15,10,2);fill.position.set(x,3.2,5.5);scene.add(fill);}
  const car=new T.PointLight('#afc6cb',8,5,2);car.position.set(0,2.7,-4.5);scene.add(car);

  function descendScreen(){const point=descendButton.getWorldPosition(new T.Vector3()).project(camera),rect=document.getElementById('scene').getBoundingClientRect();return{x:rect.left+(point.x+1)*.5*rect.width,y:rect.top+(1-point.y)*.5*rect.height};}
  function hitTestDescend(clientX,clientY){if(!lastDescendReady)return false;const canvas=document.getElementById('scene'),rect=canvas.getBoundingClientRect(),mouse=new T.Vector2(((clientX-rect.left)/rect.width)*2-1,-((clientY-rect.top)/rect.height)*2+1),ray=new T.Raycaster();ray.setFromCamera(mouse,camera);return ray.intersectObject(descendButton,false).length>0;}

  return{
    scene,camera,hitTestDescend,
    inspect:()=>({asset:authored?.userData.roomAsset??null,doorPositions:[left.position.x,right.position.x],camera:{position:camera.position.toArray(),target:cameraTarget.toArray()},descendReady:lastDescendReady,descendScreen:descendScreen(),displayFloor:currentFloor}),
    resize(w,h){if(w<=0||h<=0||!Number.isFinite(w/h))return;camera.aspect=w/h;camera.fov=w/h<1.2?104:56;camera.updateProjectionMatrix();},
    update(s,settings={},dt=0){if(disposed)return;visualTime+=Math.max(0,dt);authored?.userData.updateRoom?.(visualTime,settings);const openness=Math.max(0,Math.min(1,s.door?.openness??1));left.position.x=leftClosed-openness*1.4;right.position.x=rightClosed+openness*1.4;lastDescendReady=!!s.descendReady&&s.introPhase==='open';descendMaterial.color.set(lastDescendReady?'#bc7148':'#332d25');descendMaterial.emissive.set(lastDescendReady?'#d05f2b':'#5d2b16');descendMaterial.emissiveIntensity=lastDescendReady?1.75:.08;descendButton.position.z=s.descendPressed?.075:.11;currentFloor=s.displayFloor??30;display.userData.setText(currentFloor);const phase=visualTime%4.6;const flicker=settings.reducedFlashes?1:(phase>2.88&&phase<2.96?.55:phase>3.08&&phase<3.14?.72:1+Math.sin(visualTime*29)*.012);key.intensity=82*flicker;car.intensity=8*flicker;},
    dispose(){if(disposed)return;disposed=true;key.shadow.map?.dispose();release();}
  };
}
