import * as THREE from '../vendor/three/three.module.js';

// Render the world at a deliberate console-era resolution; UI remains native and legible.
export function createRetroPass(renderer) {
  const target = new THREE.WebGLRenderTarget(1, 1, {
    minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
    type: renderer.getContext().getExtension('EXT_color_buffer_float') ? THREE.HalfFloatType : THREE.UnsignedByteType,
  });
  const uniforms = {
    sceneTexture: { value: target.texture }, resolution: { value: new THREE.Vector2(1, 1) },
    time: { value: 0 }, grain: { value: 0.35 }, brightness: { value: 1 }, pressure: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms, depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }',
    fragmentShader: `
      uniform sampler2D sceneTexture;
      uniform vec2 resolution;
      uniform float time, grain, brightness, pressure;
      varying vec2 vUv;
      float noise(vec2 p) { return fract(sin(dot(p,vec2(12.9898,78.233))) * 43758.5453); }
      void main() {
        vec2 pixel = 1.0 / resolution;
        vec3 color = texture2D(sceneTexture,vUv).rgb;
        vec3 glow = (texture2D(sceneTexture,vUv+pixel*vec2(2.,0.)).rgb
          + texture2D(sceneTexture,vUv-pixel*vec2(2.,0.)).rgb
          + texture2D(sceneTexture,vUv+pixel*vec2(0.,2.)).rgb
          + texture2D(sceneTexture,vUv-pixel*vec2(0.,2.)).rgb) * 0.25;
        color += max(glow-0.8,0.0) * 0.09;
        float luma = dot(color,vec3(0.2126,0.7152,0.0722));
        color = mix(vec3(luma),color,0.82);
        color *= mix(vec3(0.88,1.02,1.02),vec3(1.045,1.0,0.92),smoothstep(0.05,0.8,luma));
        gl_FragColor = vec4(color * brightness,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        vec2 p = floor(vUv * resolution);
        float dither = mod(p.x+mod(p.y,2.0)*2.0,4.0)/4.0-0.375;
        gl_FragColor.rgb = floor(gl_FragColor.rgb*63.0+dither+0.5)/63.0;
        float grit = noise(p+floor(time*12.0)*vec2(71.,39.))-0.5;
        gl_FragColor.rgb += grit * grain * 0.095;
        float edges = smoothstep(0.24,0.76,length((vUv-0.5)*vec2(1.1,0.9)));
        gl_FragColor.rgb *= 1.0-edges*(0.18+pressure*0.12);
      }`,
  });
  const scene = new THREE.Scene(), camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material); scene.add(quad);
  function render(world, view, { width, height, quality, time, settings, pressure }) {
    const targetHeight = Math.max(1, Math.round(Math.min(height, quality === 'low' ? 360 : quality === 'high' ? 720 : 480)));
    const targetWidth = Math.max(1, Math.round(targetHeight * width / height));
    if (target.width !== targetWidth || target.height !== targetHeight) target.setSize(targetWidth, targetHeight);
    uniforms.resolution.value.set(targetWidth, targetHeight);
    uniforms.time.value = settings.reducedMotion || settings.reducedFlashes ? 0 : time;
    uniforms.grain.value = settings.filmGrain ?? 0.35;
    uniforms.brightness.value = settings.brightness ?? 1;
    uniforms.pressure.value = settings.softScares ? 0 : pressure;
    renderer.info.reset(); renderer.setRenderTarget(target); renderer.render(world, view);
    renderer.setRenderTarget(null); renderer.render(scene, camera);
  }
  renderer.info.autoReset = false;
  return { render, inspect: () => ({ width: target.width, height: target.height, grain: uniforms.grain.value }),
    dispose() { target.dispose(); quad.geometry.dispose(); material.dispose(); } };
}
