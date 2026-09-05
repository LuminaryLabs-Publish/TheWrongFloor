import {createLobbyCycle} from './cycle.mjs';
export function createLobbyEntry({button,isActive,onAccept,onGesture}){
 const abort=new AbortController();let cycle=createLobbyCycle(),held=false,blocked=false,started=false,padBlocked=false,padWasHeld=false;
 const listen=(target,type,fn,options={})=>target.addEventListener(type,fn,{...options,signal:abort.signal});
 function release(){held=false;blocked=false;cycle.clearHold();}
 listen(window,'keydown',e=>{if(e.code!=='Space'||e.target?.matches?.('input,textarea,select'))return;if(isActive()||blocked){e.preventDefault();e.stopImmediatePropagation();if(isActive()&&!e.repeat&&!button.disabled){held=true;onGesture();}}},{capture:true});
 listen(window,'keyup',e=>{if(e.code==='Space'){if(blocked){e.preventDefault();e.stopImmediatePropagation();}release();}},{capture:true});
 listen(button,'pointerdown',e=>{if(!isActive()||button.disabled)return;e.preventDefault();button.setPointerCapture?.(e.pointerId);held=true;onGesture();});
 for(const type of ['pointerup','pointercancel','lostpointercapture'])listen(button,type,release);
 listen(button,'click',e=>{e.preventDefault();e.stopImmediatePropagation();},{capture:true});
 function loseFocus(){release();padBlocked=true;}
 listen(window,'blur',loseFocus);listen(document,'visibilitychange',()=>{if(document.hidden)loseFocus();});
 return{reset(){cycle=createLobbyCycle();held=false;started=false;padBlocked=true;padWasHeld=false;button.style.setProperty('--hold','0%');},update(dt){const active=isActive()&&!document.hidden&&!button.disabled;const pad=[...(navigator.getGamepads?.()??[])].find(Boolean),pressed=Boolean(pad?.buttons[0]?.pressed);if(!pressed)padBlocked=false;const padHeld=pressed&&document.activeElement===button&&!padBlocked;if(active&&padHeld&&!padWasHeld)onGesture();padWasHeld=padHeld;const before=cycle.snapshot().accepted;const s=cycle.update(dt,{held:held||padHeld,active:active||(cycle.snapshot().accepted&&!document.hidden)});if(s.accepted&&!before)blocked=held;button.style.setProperty('--hold',`${Math.round(s.holdProgress*100)}%`);if(s.readyToEnter&&!started){started=true;onAccept();}return s;},snapshot:()=>cycle.snapshot(),dispose(){abort.abort();release();}};
}
