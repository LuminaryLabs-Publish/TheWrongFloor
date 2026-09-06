import * as THREE from '../vendor/three/three.module.js';

export function addAtmosphere(hall, environment, seed) {
  let state = seed >>> 0;
  const random = () => ((state = (Math.imul(state, 1664525) + 1013904223) >>> 0) / 4294967296);
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 256;
  const context = canvas.getContext('2d');
  // A single transparent wear layer adds footprints, leaks, and contact grime.
  for (let i = 0; i < 80; i++) {
    const x = random() * 256, y = random() * 256;
    context.fillStyle = `rgba(12,18,14,${0.04 + random() * 0.12})`;
    context.beginPath(); context.ellipse(x, y, 2 + random() * 12, 1 + random() * 9, random() * 3, 0, Math.PI * 2); context.fill();
  }
  for (const x of [12, 232]) {
    const edge = context.createLinearGradient(x, 0, x + 12, 0);
    edge.addColorStop(0, 'rgba(4,9,7,0)'); edge.addColorStop(0.5, 'rgba(4,9,7,0.45)'); edge.addColorStop(1, 'rgba(4,9,7,0)');
    context.fillStyle = edge; context.fillRect(x, 0, 12, 256);
  }
  const map = new THREE.CanvasTexture(canvas);
  const wear = new THREE.Mesh(new THREE.PlaneGeometry(4.85, 15.8), new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false, opacity: environment === 'hotel' ? 0.45 : 0.8 }));
  wear.rotation.x = -Math.PI / 2; wear.position.set(0, 0.014, -8); hall.add(wear);

  const dustGeometry = new THREE.BufferGeometry(), positions = new Float32Array(54 * 3);
  for (let i = 0; i < positions.length; i += 3) { positions[i] = (random() - 0.5) * 4; positions[i + 1] = random() * 3.2; positions[i + 2] = -1 - random() * 13; }
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: '#bfc2a6', size: 0.012, transparent: true, opacity: 0.12, depthWrite: false }));
  dust.name = 'hall-dust'; hall.add(dust);

  const warm = environment === 'hotel';
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: { tint: { value: new THREE.Color(warm ? '#bea072' : '#93bba4') } },
    vertexShader: 'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}',
    fragmentShader: 'uniform vec3 tint; varying vec2 vUv; void main(){float fade=pow(vUv.y,2.0)*sin(vUv.x*3.14159);gl_FragColor=vec4(tint,fade*0.018);}',
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
  });
  const shafts = new THREE.InstancedMesh(new THREE.ConeGeometry(0.8, 2.9, 12, 1, true), glowMaterial, 3);
  const matrix = new THREE.Matrix4();
  for (let i = 0; i < 3; i++) { matrix.makeTranslation(0, 1.8, -2 - i * 3.8); shafts.setMatrixAt(i, matrix); }
  hall.add(shafts);

  const glow = new THREE.PointLight(warm ? '#f2ae67' : '#86b9aa', 8, 7, 2); glow.position.set(0, 2.75, -10); hall.add(glow);
  const exitLight = new THREE.PointLight('#71977d', 4, 5, 2); exitLight.position.set(0, 2.1, -14.2); hall.add(exitLight);
  // Emissive doorway light gives silhouettes separation without flattening the room.
  const exitStrip = new THREE.Mesh(new THREE.PlaneGeometry(0.04, 2.25), new THREE.MeshBasicMaterial({ color: '#839f7c' }));
  exitStrip.position.set(0.55, 1.14, -15.69); hall.add(exitStrip);
  return { update(time, reducedMotion) { dust.position.y = reducedMotion ? 0 : Math.sin(time * 0.12) * 0.035; dust.position.x = reducedMotion ? 0 : Math.sin(time * 0.08) * 0.025; } };
}
