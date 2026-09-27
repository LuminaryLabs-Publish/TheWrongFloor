import {batchRigid} from './batch.mjs';

export async function createLobbyScene(T,loadAsset,{authored=null,character=null}={}){
  const scene=new T.Scene();scene.background=new T.Color('#0b1014');scene.fog=new T.FogExp2('#101216',.018);
  const camera=new T.PerspectiveCamera(56,16/9,.05,70);
  const cameraTarget=new T.Vector3(.55,1.42,1.65);
  camera.position.set(-1.12,1.48,-4.72);camera.lookAt(cameraTarget);
  const templates=new Map();let disposed=false,visualTime=0,forcedVisualTime=null,lastDescendReady=false,currentFloor=30,lastBlackout=false;
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

  // Mount the panel against the cabin's right wall, well behind the threshold.
  const panel=new T.Group();panel.name='floor30-control-panel';panel.position.set(.45,1.72,-3.15);panel.rotation.y=-Math.PI/2;scene.add(panel);
  const boardMat=new T.MeshStandardMaterial({color:'#20231f',roughness:.72,metalness:.48});
  const trimMat=new T.MeshStandardMaterial({color:'#90764d',roughness:.42,metalness:.8});
  const board=new T.Mesh(new T.BoxGeometry(1.28,2.72,.12),boardMat);panel.add(board);
  const display=textPlane('30',.78,.22,82,'#0d1110','#f0a46e');display.position.set(0,1.03,.071);panel.add(display);
  const floors=[...Array.from({length:30},(_,i)=>30-i),'G','B'];
  floors.forEach((floor,index)=>{const cols=5,row=Math.floor(index/cols),col=index%cols;const x=-.46+col*.23,y=.73-row*.22;const m=new T.Mesh(new T.BoxGeometry(.17,.13,.055),index<30?boardMat:trimMat);m.position.set(x,y,.075);panel.add(m);const label=textPlane(floor,.13,.085,42,'#181b18',index<30?'#a9aa9e':'#e0c28b');label.position.set(x,y,.106);panel.add(label);});
  const descendMaterial=new T.MeshStandardMaterial({color:'#332d25',emissive:'#5d2b16',emissiveIntensity:.08,roughness:.38,metalness:.55});
  const descendButton=new T.Mesh(new T.BoxGeometry(.9,.28,.12),descendMaterial);descendButton.position.set(0,-.96,.11);descendButton.name='descend-button';panel.add(descendButton);
  const descendLabel=textPlane('DESCEND',.72,.12,54,'#2a211c','#e9d7bd');descendLabel.position.set(0,-.96,.176);panel.add(descendLabel);

  let rearCharacter=null;
  if(character){
    rearCharacter=character;
    rearCharacter.name='floor30-rear-character';
    const bounds=new T.Box3().setFromObject(rearCharacter),size=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3());
    const scale=size.y>0?1.20/size.y:1;
    rearCharacter.scale.setScalar(scale);
    rearCharacter.position.set(-.15,-bounds.min.y*scale,-3.78);
    rearCharacter.position.x-=center.x*scale;
    rearCharacter.position.z-=center.z*scale;
    rearCharacter.rotation.y=Math.PI;
    rearCharacter.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;}});
    scene.add(rearCharacter);
  }

  const hemi=new T.HemisphereLight('#8a9eae','#352215',.5);scene.add(hemi);
  const key=new T.SpotLight('#ffdfb5',82,20,Math.PI/3,.55,2);key.position.set(0,4,1);key.target.position.set(0,1.5,6);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.bias=-.003;key.shadow.normalBias=.035;scene.add(key,key.target);
  const fills=[];for(const x of [-3,3]){const fill=new T.PointLight('#ffdfb5',15,10,2);fill.position.set(x,3.2,5.5);scene.add(fill);fills.push(fill);}
  const car=new T.PointLight('#afc6cb',8,5,2);car.position.set(0,2.7,-4.5);scene.add(car);
  // Faint emergency rim: primary illumination still reaches true zero.
  const silhouetteLight=new T.SpotLight('#6b1711',0,4,Math.PI/3,.85,2);
  silhouetteLight.position.set(.1,1.75,-2.85);silhouetteLight.target.position.set(-.15,1.0,-3.78);
  scene.add(silhouetteLight,silhouetteLight.target);

  const authoredLights=[];authored?.traverse?.(o=>{if(o.isLight)authoredLights.push({light:o,base:o.intensity});});
  const setBlackout=value=>{
    lastBlackout=Boolean(value);
    hemi.intensity=lastBlackout?0:.5;
    key.intensity=lastBlackout?0:82;
    car.intensity=lastBlackout?0:8;
    for(const fill of fills)fill.intensity=lastBlackout?0:15;
    for(const item of authoredLights)item.light.intensity=lastBlackout?0:item.base;
    silhouetteLight.intensity=lastBlackout?2.2:0;
  };

  function descendBounds(){
    const canvas=document.getElementById('scene'),rect=canvas.getBoundingClientRect();
    scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);camera.updateProjectionMatrix();
    const box=new T.Box3().setFromObject(descendButton),points=[];
    for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){
      const p=new T.Vector3(x,y,z).project(camera);
      points.push({x:rect.left+(p.x+1)*.5*rect.width,y:rect.top+(1-p.y)*.5*rect.height});
    }
    return{left:Math.min(...points.map(p=>p.x)),right:Math.max(...points.map(p=>p.x)),top:Math.min(...points.map(p=>p.y)),bottom:Math.max(...points.map(p=>p.y))};
  }
  function descendScreen(){const b=descendBounds();return{x:(b.left+b.right)/2,y:(b.top+b.bottom)/2};}
  function hitTestDescend(clientX,clientY){if(!lastDescendReady)return false;const b=descendBounds(),pad=10;return clientX>=b.left-pad&&clientX<=b.right+pad&&clientY>=b.top-pad&&clientY<=b.bottom+pad;}

  return{
    scene,camera,hitTestDescend,
    inspect:()=>{
      const characterBounds=rearCharacter?new T.Box3().setFromObject(rearCharacter):null;
      return{asset:authored?.userData.roomAsset??null,doorPositions:[left.position.x,right.position.x],camera:{position:camera.position.toArray(),target:cameraTarget.toArray()},panel:{position:panel.position.toArray(),rotationY:panel.rotation.y},character:rearCharacter?{position:rearCharacter.position.toArray(),bounds:{min:characterBounds.min.toArray(),max:characterBounds.max.toArray()}}:null,descendReady:lastDescendReady,descendScreen:descendScreen(),displayFloor:currentFloor,blackout:lastBlackout,lights:{hemi:hemi.intensity,key:key.intensity,car:car.intensity,fills:fills.map(l=>l.intensity),authored:authoredLights.map(x=>x.light.intensity),silhouette:silhouetteLight.intensity}};},
    resize(w,h){if(w<=0||h<=0||!Number.isFinite(w/h))return;camera.aspect=w/h;camera.fov=w/h<1.2?104:56;camera.updateProjectionMatrix();},
    update(s,settings={},dt=0){if(disposed)return;if(forcedVisualTime===null)visualTime+=Math.max(0,dt);else visualTime=forcedVisualTime;authored?.userData.updateRoom?.(visualTime,settings);const openness=Math.max(0,Math.min(1,s.door?.openness??1));left.position.x=leftClosed-openness*1.4;right.position.x=rightClosed+openness*1.4;lastDescendReady=!!s.descendReady&&s.introPhase==='open';descendMaterial.color.set(lastDescendReady?'#bc7148':'#332d25');descendMaterial.emissive.set(lastDescendReady?'#d05f2b':'#5d2b16');descendMaterial.emissiveIntensity=lastDescendReady?1.75:.08;descendButton.position.z=s.descendPressed?.075:.11;currentFloor=s.displayFloor??30;display.userData.setText(currentFloor);
      const phase=visualTime%4.6;
      const blackout=!settings.reducedFlashes&&((phase>=2.88&&phase<3.00)||(phase>=3.10&&phase<3.22));
      setBlackout(blackout);
    },
    setVisualTime(value){if(value===null){forcedVisualTime=null;return;}forcedVisualTime=Math.max(0,Number(value)||0);visualTime=forcedVisualTime;},
    dispose(){if(disposed)return;disposed=true;key.shadow.map?.dispose();rearCharacter?.removeFromParent();release();}
  };
}
