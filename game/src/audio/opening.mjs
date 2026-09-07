// User-supplied soundtrack, routed through the existing ambience/master controls.
export function createOpeningAudio({context:ctx,ambienceBus}){
 const buffers=new Map(),voices=new Map(),failures=[];let disposed=false,preloading;
 function preload(){return preloading??=Promise.allSettled(['horrorintro','creepytheme'].map(async name=>{
  try{const response=await fetch(new URL(`../../assets/audio/${name}.wav`,import.meta.url));if(!response.ok)throw Error(`${name}: ${response.status}`);
   const buffer=await ctx.decodeAudioData(await response.arrayBuffer());if(!disposed)buffers.set(name,buffer);
  }catch(e){failures.push(String(e));}
 }));}
 function stop(name){const v=voices.get(name);if(!v)return;v.source.stop();v.source.disconnect();v.gain.disconnect();voices.delete(name);}
 function track(name,volume,seconds=0){
  if(volume<=0){stop(name);return;}
  const buffer=buffers.get(name);if(!buffer||ctx.state!=='running')return;
  let v=voices.get(name);
  if(!v){const source=ctx.createBufferSource(),gain=ctx.createGain();source.buffer=buffer;source.loop=name==='creepytheme';gain.gain.value=0;source.connect(gain);gain.connect(ambienceBus);
   const offset=name==='horrorintro'?Math.min(seconds,buffer.duration-.01):0;source.start(0,offset);v={source,gain,offset,started:ctx.currentTime};voices.set(name,v);
  }
  v.gain.gain.setTargetAtTime(volume,ctx.currentTime,.045);
 }
 function update({active=false,fade=0,seconds=0,menu=false}={}){
  if(disposed)return;
  track('horrorintro',active?.8*(1-fade):0,seconds);
  track('creepytheme',menu?.7*(active?fade:1):0);
 }
 return{preload,update,dispose(){disposed=true;for(const name of [...voices.keys()])stop(name);buffers.clear();},inspect:()=>({loaded:[...buffers.keys()],playing:[...voices.keys()],failures,levels:Object.fromEntries([...voices].map(([n,v])=>[n,v.gain.gain.value]))})};
}
