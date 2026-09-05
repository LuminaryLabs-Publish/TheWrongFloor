export const STAGES=['quiet','closing','emerge','pry','retreat','silence','opening'];
export const HOLD_SECONDS=1.5;
const ease=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);};
export function createLobbyCycle(seed='floor30-menu'){
 let h=2166136261;for(const c of String(seed))h=Math.imul(h^c.charCodeAt(0),16777619);
 const random=()=>{h=(Math.imul(h,1664525)+1013904223)>>>0;return h/4294967296;};
 let durations,stage=0,time=0,cycle=0,hold=0,accepted=false,transition=0,entry;
 const choose=()=>{durations=[2+6*random(),.5+.5*random(),1,2+random(),1,2+2*random(),2+random()];};choose();
 function pose(){const p=time/durations[stage],u=ease(p);let openness=1,claws=0,strain=0,shudder=0;
  if(stage===1){openness=1-.985*u;shudder=Math.sin(p*60)*.004*Math.sin(p*Math.PI);}
  if(stage===2){openness=.015;claws=u;}
  if(stage===3){strain=Math.sin(p*Math.PI)**2;openness=.015+.012*strain;claws=1;}
  if(stage===4){claws=1-ease(p/.8);openness=p<.8?.015:.015*(1-ease((p-.8)/.2));}
  if(stage===5)openness=0;if(stage===6)openness=u;
  return {openness,claws,strain,shudder};
 }
 function snapshot(){let p=pose();if(accepted)p={openness:entry.openness*(1-ease((transition-.45)/.45)),claws:entry.claws*(1-ease(transition/.45)),strain:0,shudder:0};return{stage:accepted?'entering':STAGES[stage],stageTime:time,cycle,durations:[...durations],holdProgress:hold/HOLD_SECONDS,accepted,readyToEnter:accepted&&transition>=.9,...p};}
 return{snapshot,clearHold(){if(!accepted)hold=0;},update(dt,{held=false,active=true}={}){
  if(!Number.isFinite(dt)||dt<0||dt>60)throw new RangeError('Invalid lobby delta');
  if(!active){if(!accepted)hold=0;return snapshot();}
  if(accepted){transition=Math.min(.9,transition+dt);return snapshot();}
  hold=held?Math.min(HOLD_SECONDS,hold+dt):0;
  if(hold>=HOLD_SECONDS){entry=pose();accepted=true;return snapshot();}
  time+=dt;while(time>=durations[stage]){time-=durations[stage];stage++;if(stage===STAGES.length){stage=0;cycle++;choose();}}
  return snapshot();
 }};
}
