import { createGame } from './game.mjs';
import { createSchedule } from './director.mjs';
import { loadSave, writeSave, recordResult } from './storage.mjs';
import { createScene } from './scene.mjs';
import { createUI } from './ui.mjs';
import { createInput } from './input.mjs';
import { createAudio } from './audio.mjs';
import * as THREE from '../vendor/three/three.module.js';
import {GLTFLoader} from '../vendor/three/addons/loaders/GLTFLoader.js';
import {createLobbyScene} from '../floor-30/scene.mjs';
import {createLobbyEntry} from '../floor-30/entry.mjs';

const params=new URLSearchParams(location.search),review=params.get('review')==='1';
const desktop=params.has('standalone');
let save=loadSave(),game=null,scene=null,input=null,ui=null,audio=null,frame=0,previous=0;
let loading=false,disposed=false,terminalAt=null,manual=false,preview=null,startToken=0;
let lobby=null,entry=null,lobbySize='';
const titleState={mode:'title',roundIndex:0,totalRounds:30,door:{openness:1},round:{seed:'wrong-floor-title-6',danger:true,entity:'tall',variant:1,environment:'hotel'},clueVisible:true,threatProgress:.12};
function fatal(error){console.error(error);const node=document.getElementById('fatal-error');node.hidden=false;node.textContent=`The elevator could not start. ${error.message}. Reload to try again.`;ui?.setReady(false,'ELEVATOR UNAVAILABLE');}
function randomSeed(){const values=new Uint32Array(2);crypto.getRandomValues(values);return [...values].map(n=>n.toString(36)).join('-');}
function setMenu(screen){input?.setMenu(screen!=='playing');}
function pause(){if(loading)return;if(ui.getScreen()==='settings'){ui.show(game?.snapshot().mode==='paused'?'pause':'title');return;}if(game?.snapshot().mode==='running'){game.pause();input.reset();audio.pause();ui.show('pause');}else if(game?.snapshot().mode==='paused')resume();}
function resume(){if(!game)return;game.resume();input.reset();audio.resume();previous=performance.now();ui.show('playing');}
function title(){startToken++;loading=false;game=null;preview=null;terminalAt=null;manual=false;input.reset();entry?.reset();audio.pause();ui.show('title');ui.setReady(true);}
async function start({seed,practice=false,manual:manualClock=false}={}){
  const token=++startToken;loading=true;terminalAt=null;preview=null;manual=manualClock;
  input.reset();await audio.unlock();audio.setSettings(ui.getSettings());
  ui.show('title');ui.setReady(false,'BUILDING YOUR DESCENT');scene.clearPrepared();
  const settings=ui.getSettings(),chosen=String(seed||randomSeed()).slice(0,64);
  try{
    const schedule=createSchedule(chosen,{assisted:settings.assisted,practice});
    // Generate every seeded shape in a worker before the active clock starts.
    // No generation hitch consumes a player's reaction window.
    for(let i=0;i<schedule.length;i++){await scene.prepare(schedule[i],settings);if(token!==startToken||disposed)return;ui.setReady(false,`BUILDING FLOOR ${i+1} / ${schedule.length}`);}
    game=createGame({seed:chosen,practice,assisted:settings.assisted});loading=false;ui.setReady(true);ui.show('playing');audio.resume();scene.recenter();previous=performance.now();
    processEvents();scene.render(game.snapshot(),0,{},settings);
    return game.snapshot();
  }catch(error){if(token!==startToken||disposed)return;loading=false;fatal(error);throw error;}
}
function processEvents(){for(const event of game?.drainEvents()??[]){audio.event(event);if(event.type==='arrival')ui.caption('');if(event.type==='clue'&&game.snapshot().practice)ui.caption(game.snapshot().round.clueText);if(event.type==='sealed')ui.caption('Heavy impact outside. The doors held.');if(event.type==='false-alarm')ui.caption('Normal floor rejected. False alarm.');if(event.type==='accepted')ui.caption('Floor clear. Descending.');if(event.type==='failure'||event.type==='escape'){save=recordResult(save,game.snapshot());writeSave(save);terminalAt=performance.now();}}}
function finish(){const s=game.snapshot();ui.show('results',{...s,best:save.best[s.assisted?'assisted':'standard'],clueText:s.round.clueText});input.reset();audio.pause();}
function tick(now){if(disposed)return;frame=requestAnimationFrame(tick);const dt=Math.min(.1,Math.max(0,(now-(previous||now))/1000));previous=now;
  const settings=ui.getSettings(),controls=input.poll(settings);
  if(game&&!manual&&!preview&&!loading&&game.snapshot().mode==='running'){game.update(dt,controls);processEvents();}
  const state=preview??(loading?titleState:game?.snapshot()??titleState);
  if(lobby&&!game&&!preview){const s=entry.update(dt);lobby.update(s,settings);const canvas=document.getElementById('scene'),size=`${canvas.clientWidth}:${canvas.clientHeight}`;if(size!==lobbySize){lobbySize=size;lobby.resize(canvas.clientWidth,canvas.clientHeight);}scene.drawExternal(lobby.scene,lobby.camera);audio.update({mode:'lobby',phase:s.stage,door:{openness:s.openness},clueVisible:false,threatProgress:0});}
  else{scene.render(state,state.mode==='paused'?0:dt,ui.getScreen()==='playing'?controls:{},settings);audio.update(state);}ui.update(state);
  const terminalAudioActive=state.mode==='lost'&&state.failureReason==='intrusion'&&audio.isTerminalCuePlaying();
  if(terminalAt&&!manual&&!terminalAudioActive&&performance.now()-terminalAt>(settings.softScares?700:1600)){terminalAt=null;finish();}
}
function dispose(){if(disposed)return;disposed=true;startToken++;cancelAnimationFrame(frame);entry?.dispose();lobby?.dispose();input?.dispose();ui?.dispose();audio?.dispose();scene?.dispose();window.removeEventListener('pagehide',dispose);}
try{
  scene=createScene(document.getElementById('scene'));audio=createAudio();
  ui=createUI({play:seed=>start({seed}).catch(()=>{}),practice:seed=>start({seed,practice:true}).catch(()=>{}),resume,pause,title,retry:()=>start({}).catch(()=>{}),recenter:()=>scene.recenter(),exit:()=>{if(desktop)window.close();else title();},screenChanged:setMenu,settingsChanged:settings=>{save.settings=settings;writeSave(save);audio.setSettings(settings);}});
  input=createInput(document.getElementById('scene'),{onPause:pause,onBlur:()=>{if(game?.snapshot().mode==='running')pause();},onRecenter:()=>scene.recenter(),onConfirm:()=>ui.confirm(),onMenuMove:delta=>ui.menuMove(delta)});
  ui.updateSettings(save.settings);audio.setSettings(save.settings);ui.show('title');ui.setReady(false);
  if(desktop)for(const b of document.querySelectorAll('[data-action="exit"]'))b.textContent='Quit game';
  const loader=new GLTFLoader();
  lobby=await createLobbyScene(THREE,async name=>(await loader.loadAsync(new URL(`../floor-30/assets/${name}.glb`,import.meta.url).href)).scene);
  entry=createLobbyEntry({button:document.getElementById('play-button'),isActive:()=>!game&&!loading&&ui.getScreen()==='title',onGesture:()=>{audio.resume();audio.unlock();},onAccept:()=>start({seed:document.getElementById('seed-input').value.trim()}).catch(()=>{})});
  lobby.update(entry.snapshot(),save.settings);lobby.resize(innerWidth,innerHeight);scene.drawExternal(lobby.scene,lobby.camera);ui.setReady(true);
  window.addEventListener('pagehide',dispose);frame=requestAnimationFrame(tick);
  if(review)window.__wrongFloor={
    start,snapshot:()=>game?.snapshot()??titleState,lobby:()=>entry.snapshot(),inspect:()=>scene.inspect(),
    advance(dt,controls={}){if(!game)throw new Error('Start a review run first');manual=true;game.update(dt,controls);processEvents();const s=game.snapshot();scene.render(s,dt,{},ui.getSettings());ui.update(s);if(s.mode==='won'||s.mode==='lost')finish();return s;},
    async preview(options={}){const round={seed:'review-'+(options.entity??'guest')+'-'+(options.variant??0),danger:true,environment:'office',entity:'guest',variant:0,clueAt:1.8,arrivalAt:4.8,...options};await scene.prepare(round,ui.getSettings());const t=options.roundTime??2.8;preview={mode:'running',roundIndex:options.roundIndex??10,totalRounds:30,round,roundTime:t,elapsed:100+t,door:{openness:1},clueVisible:t>=round.clueAt,threatProgress:Math.max(0,Math.min(1,(t-round.clueAt)/(round.arrivalAt-round.clueAt))),mistakes:0};ui.show('playing');scene.recenter();scene.render(preview,0,{},ui.getSettings());return scene.inspect();},
    stopPreview(){preview=null;title();},pause,resume,dispose,
  };
}catch(error){fatal(error);}
