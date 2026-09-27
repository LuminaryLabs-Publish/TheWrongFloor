import * as THREE from '../vendor/three/three.module.js';
import {GLTFLoader} from '../vendor/three/addons/loaders/GLTFLoader.js';

export const ELEVATOR_ASSET_URL = new URL('../assets/elevator/wrong-floor-elevator.glb', import.meta.url);

export async function loadElevatorInstance({position=[0,0,0], rotationY=0}={}) {
  const gltf = await new GLTFLoader().loadAsync(ELEVATOR_ASSET_URL.href);
  const root = gltf.scene;
  const doorLeft = root.getObjectByName('DoorLeft');
  const doorRight = root.getObjectByName('DoorRight');
  const descendButton = root.getObjectByName('DescendButton');
  const panelHousing = root.getObjectByName('PanelHousing');
  const openClip = THREE.AnimationClip.findByName(gltf.animations, 'DoorsOpen');
  const closeClip = THREE.AnimationClip.findByName(gltf.animations, 'DoorsClose');
  if (!doorLeft || !doorRight || !descendButton || !panelHousing || !openClip || !closeClip)
    throw new Error('Canonical elevator GLB is missing required nodes or clips');
  if (Math.abs(openClip.duration - .8) > 1e-6 || Math.abs(closeClip.duration - 1.2) > 1e-6)
    throw new Error('Canonical elevator door clip durations are invalid');

  root.position.set(...position);
  root.rotation.y = rotationY;
  root.updateMatrixWorld(true);

  root.traverse(o => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
      o.frustumCulled = false;
    }
  });

  const mixer = new THREE.AnimationMixer(root);
  const openAction = mixer.clipAction(openClip);
  const closeAction = mixer.clipAction(closeClip);
  let openness = 0;
  let direction = 'closed';

  function sample(action, time) {
    mixer.stopAllAction();
    action.reset();
    action.enabled = true;
    action.setEffectiveWeight(1);
    action.setLoop(THREE.LoopOnce, 1);
    action.clampWhenFinished = true;
    action.play();
    action.paused = true;
    action.time = Math.max(0, Math.min(action.getClip().duration, time));
    mixer.update(0);
    root.updateMatrixWorld(true);
  }

  function setOpenness(value) {
    const next = Math.max(0, Math.min(1, Number(value) || 0));
    if (next >= openness) {
      direction = next >= 1 ? 'open' : 'opening';
      sample(openAction, next * openClip.duration);
    } else {
      direction = next <= 0 ? 'closed' : 'closing';
      sample(closeAction, (1 - next) * closeClip.duration);
    }
    openness = next;
  }

  setOpenness(0);

  return {
    root,
    doorLeft,
    doorRight,
    descendButton,
    panelHousing,
    animations: {open: openClip, close: closeClip},
    setOpenness,
    inspect() {
      return {
        asset: 'wrong-floor-elevator.glb',
        clips: gltf.animations.map(c => ({name:c.name,duration:c.duration})),
        openness,
        direction,
        left: doorLeft.getWorldPosition(new THREE.Vector3()).toArray(),
        right: doorRight.getWorldPosition(new THREE.Vector3()).toArray(),
        panel: panelHousing.getWorldPosition(new THREE.Vector3()).toArray(),
        descend: descendButton.getWorldPosition(new THREE.Vector3()).toArray(),
      };
    },
    dispose() {
      mixer.stopAllAction();
      mixer.uncacheRoot(root);
    },
  };
}
