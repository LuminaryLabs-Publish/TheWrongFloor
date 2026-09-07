export const INTRO_SECONDS=40,FADE_SECONDS=1.2,INTRO_FPS=30;
const smooth=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);};
export function introPose(seconds){return{fade:smooth((seconds-(INTRO_SECONDS-FADE_SECONDS))/FADE_SECONDS),credit:smooth((seconds-3)/2)*(1-smooth((seconds-10)/3)),done:seconds>=INTRO_SECONDS};}

// Separate startup renderer: one fullscreen pass, no textures, no game clock consumption.
export function createCinematic({settings={},skip=false,onComplete=()=>{}}={}){
 const root=document.getElementById('cinematic-intro'),canvas=document.getElementById('cinematic-canvas'),credit=document.getElementById('studio-credit'),title=document.getElementById('title-screen');
 const abort=new AbortController();let gl,program,vao,shaderObjects=[],raf=0,ready=false,disposed=false,active=!skip,started=false,lastNow=null,elapsed=0,lastSlot=-1,frames=0,error=null,skipRequested=false;
 let uniforms={},fade=0;
 const listen=(target,type,fn)=>target.addEventListener(type,fn,{signal:abort.signal});
 function releaseGL(){if(!gl)return;shaderObjects.forEach(s=>gl.deleteShader(s));if(program)gl.deleteProgram(program);if(vao)gl.deleteVertexArray(vao);gl.getExtension('WEBGL_lose_context')?.loseContext();gl=null;}
 function finish(){if(disposed)return;active=false;cancelAnimationFrame(raf);abort.abort();releaseGL();root.hidden=true;document.body.classList.remove('cinematic-playing');document.body.style.removeProperty('--menu-reveal');title.inert=false;onComplete();}
 function fail(e){error=e?.message??String(e);finish();}
 function compile(type,source){const shader=gl.createShader(type);shaderObjects.push(shader);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(shader));return shader;}
 function resize(){const aspect=Math.max(.1,innerWidth/Math.max(1,innerHeight));const scale=Math.min(1,Math.sqrt(921600/Math.max(1,innerWidth*innerHeight)));const w=Math.max(1,Math.round(innerWidth*scale)),h=Math.max(1,Math.round(w/aspect));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}}
 function tick(now){
  if(!active||disposed)return;raf=requestAnimationFrame(tick);
  if(document.hidden){lastNow=null;return;}
  if(lastNow!==null)elapsed+=Math.max(0,(now-lastNow)/1000);lastNow=now;
  if(!ready)elapsed=Math.min(INTRO_SECONDS-FADE_SECONDS,elapsed);
  if(skipRequested&&ready)elapsed=Math.max(INTRO_SECONDS-FADE_SECONDS,elapsed);
  const pose=introPose(elapsed);fade=pose.fade;
  root.style.opacity=String(1-fade);credit.style.opacity=String(pose.credit);document.body.style.setProperty('--menu-reveal',String(fade));
  if(pose.done){finish();return;}
  const slot=Math.floor(elapsed*INTRO_FPS+1e-6);if(slot===lastSlot)return;lastSlot=slot;
  resize();gl.useProgram(program);gl.uniform1f(uniforms.iTime,slot/INTRO_FPS);gl.uniform3f(uniforms.iResolution,canvas.width,canvas.height,1);
  gl.uniform1f(uniforms.uReducedFlashes,settings.reducedFlashes||settings.softScares?1:0);gl.uniform1f(uniforms.uReducedMotion,settings.reducedMotion?1:0);
  gl.drawArrays(gl.TRIANGLES,0,3);frames++;
 }
 function requestSkip(){skipRequested=true;}
 if(skip){root.hidden=true;title.inert=false;document.body.classList.remove('cinematic-playing');}
 else{
  document.body.classList.add('cinematic-playing');title.inert=true;
  listen(document.getElementById('skip-intro'),'click',requestSkip);
  document.addEventListener('keydown',e=>{if(!active)return;if(e.code==='Escape'||((e.code==='Space'||e.code==='Enter')&&e.target.closest?.('#skip-intro'))){e.preventDefault();e.stopImmediatePropagation();requestSkip();}else if(e.code==='Space'||e.code==='Enter'){e.preventDefault();e.stopImmediatePropagation();}},{capture:true,signal:abort.signal});
  listen(document,'visibilitychange',()=>{lastNow=null;});
  listen(canvas,'webglcontextlost',e=>{e.preventDefault();if(active)fail(Error('Cinematic context lost'));});
  (async()=>{
   try{
    const response=await fetch(new URL('../shaders/thirtieth-floor.frag',import.meta.url),{signal:abort.signal});if(!response.ok)throw Error('Intro shader unavailable');const original=await response.text();if(disposed||!active)return;
    gl=canvas.getContext('webgl2',{alpha:false,antialias:false,depth:false,stencil:false,powerPreference:'high-performance'});if(!gl)throw Error('Intro WebGL2 unavailable');
    // Keep supplied art/timeline intact; disable lightning/flicker and sway for comfort settings.
    const source=original.replace('float flicker=1.-.12*pow(.5+.5*sin(T*19.7),18.);','float flicker=1.-(1.-uReducedFlashes)*.12*pow(.5+.5*sin(T*19.7),18.);').replace('float climb=','FLASH*=1.-uReducedFlashes;\n float climb=').replace('float sway=(1.-approach)*.12;','float sway=(1.-approach)*.12*(1.-uReducedMotion);').replace('float inside=smoothstep(7.35,6.65,ro.z);','float inside;');
    const vertex=compile(gl.VERTEX_SHADER,'#version 300 es\nvoid main(){vec2 p=vec2((gl_VertexID<<1)&2,gl_VertexID&2);gl_Position=vec4(p*2.-1.,0.,1.);}');
    const fragment=compile(gl.FRAGMENT_SHADER,'#version 300 es\nprecision highp float;\nuniform float iTime;uniform vec3 iResolution;uniform float uReducedFlashes;uniform float uReducedMotion;out vec4 outputColor;\n'+source+'\nvoid main(){mainImage(outputColor,gl_FragCoord.xy);}\n');
    program=gl.createProgram();gl.attachShader(program,vertex);gl.attachShader(program,fragment);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));
    vao=gl.createVertexArray();gl.bindVertexArray(vao);for(const name of ['iTime','iResolution','uReducedFlashes','uReducedMotion'])uniforms[name]=gl.getUniformLocation(program,name);
    started=true;raf=requestAnimationFrame(tick);
   }catch(e){if(!disposed&&active)fail(e);}
  })();
 }
 return{get active(){return active;},get blending(){return fade>0;},markReady(){ready=true;},skip:requestSkip,inspect:()=>({active,started,seconds:elapsed,frames,targetFPS:INTRO_FPS,fade,credit:introPose(elapsed).credit,width:canvas.width,height:canvas.height,error}),dispose(){if(disposed)return;disposed=true;active=false;cancelAnimationFrame(raf);abort.abort();releaseGL();}};
}
