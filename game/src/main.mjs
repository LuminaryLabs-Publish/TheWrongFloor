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

const params=new URLSearchParams(location.search),review=params.get('review')==='1';
const desktop=params.has('standalone');
const INTRO_TIMING=Object.freeze({close:1.2,travel:1.0,open:.8});
let save=loadSave(),game=null,scene=null,input=null,ui=null,audio=null,frame=0,previous=0;
let loading=false,disposed=false,terminalAt=null,manual=false,preview=null,startToken=0,introToken=0,introSeed=null;
let lobby=null,lobbySize='';
const makeIntroState=()=>({mode:'intro',elapsed:0,roundIndex:-1,totalRounds:30,door:{openness:1},round:{floor:30,seed:'wrong-floor-floor-30',danger:false,entity:null,variant:0,environment:'lobby',clueAt:null,arrivalAt:null,normalResolveAt:null,name:'Floor 30'},clueVisible:false,threatProgress:0,mistakes:0,resolved:false,opened:true,descendReady:false,descendPressed:false,introPhase:'open',introTime:0,displayFloor:30});
let introState=makeIntroState();

function fatal(error){console.error(error);const node=document.getElementById('fatal-error');node.hidden=false;node.textContent=`The elevator could not start. ${error.message}. Reload to try again.`;ui?.setReady(false,'ELEVATOR UNAVAILABLE');}
function randomSeed(){const values=new Uint32Array(2);crypto.getRandomValues(values);return [...values].map(n=>n.toString(36)).join('-');}
function setInputMode(screen){input?.setMode(screen==='playing'?'playing':screen==='title'?'intro':'menu');}
function pause(){if(loading)return;if(ui.getScreen()==='settings'){ui.show(game?.snapshot().mode==='paused'?'pause':'title');return;}if(game?.snapshot().mode==='running'){game.pause();input.reset();audio.pause();ui.show('pause');}else if(game?.snapshot().mode==='paused')resume();}
function resume(){if(!game)return;game.resume();input.reset();audio.resume();previous=performance.now();ui.show('playing');}

async function prepareIntro(seed){
  const token=++introToken;loading=true;
  introState={...makeIntroState(),descendReady:false};
  ui.setReady(false,'PREPARING DESCENT');scene.clearPrepared();
  const settings=ui.getSettings(),chosen=String(seed||randomSeed()).slice(0,64),schedule=createSchedule(chosen,{assisted:settings.assisted});
  try{
    for(let i=0;i<schedule.length;i++){await scene.prepare(schedule[i],settings);if(token!==introToken||disposed)return;}
    if(token!==introToken||disposed)return;
    introSeed=chosen;loading=false;introState.descendReady=true;ui.setReady(true,'DESCEND READY');
  }catch(error){if(token!==introToken||disposed)return;loading=false;fatal(error);throw error;}
}
function title(){
  startToken++;introToken++;loading=false;game=null;preview=null;terminalAt=null;manual=false;introSeed=null;introState=makeIntroState();
  document.body.classList.remove('intro-transition');input.reset();audio.reset();audio.resume();ui.show('title');previous=performance.now();
  prepareIntro().catch(()=>{});
}
function descend(){
  if(game||preview||loading||!introState.descendReady||introState.introPhase!=='open')return false;
  audio.unlock();audio.setSettings(ui.getSettings());audio.event({type:'lobby-closing'});
  introState.descendReady=false;introState.descendPressed=true;introState.introPhase='closing';introState.introTime=0;
  document.body.classList.add('intro-transition');ui.setReady(false,'DESCENDING');previous=performance.now();return true;
}
function beginGameplayFromIntro(){
  const settings=ui.getSettings();
  game=createGame({seed:introSeed||randomSeed(),assisted:settings.assisted,initialOpen:true});
  introState.descendPressed=false;document.body.classList.remove('intro-transition');ui.show('playing');audio.resume();scene.recenter();previous=performance.now();processEvents();scene.render(game.snapshot(),0,{},settings);
}
function advanceIntro(dt){
  if(!introState||introState.introPhase==='open')return;
  introState.introTime+=dt;
  if(introState.introPhase==='closing'){
    introState.door.openness=Math.max(0,1-introState.introTime/INTRO_TIMING.close);
    if(introState.introTime>=INTRO_TIMING.close){introState.introPhase='travel';introState.introTime=0;introState.door.openness=0;}
  }else if(introState.introPhase==='travel'){
    if(introState.introTime>=.35)introState.displayFloor=29;
    if(introState.introTime>=INTRO_TIMING.travel){introState.introPhase='opening';introState.introTime=0;introState.displayFloor=29;audio.event({type:'lobby-entering'});}
  }else if(introState.introPhase==='opening'){
    introState.door.openness=Math.min(1,introState.introTime/INTRO_TIMING.open);
    if(introState.introTime>=INTRO_TIMING.open){introState.door.openness=1;beginGameplayFromIntro();}
  }
}

async function start({seed,practice=false,manual:manualClock=false}={}){
  const token=++startToken;loading=true;terminalAt=null;preview=null;manual=manualClock;
  document.body.classList.remove('intro-transition');input.reset();audio.reset();audio.resume();audio.setSettings(ui.getSettings());await audio.unlock();if(token!==startToken||disposed)return;
  ui.show('title');ui.setReady(false,'BUILDING YOUR DESCENT');scene.clearPrepared();
  const settings=ui.getSettings(),chosen=String(seed||randomSeed()).slice(0,64);
  try{
    const schedule=createSchedule(chosen,{assisted:settings.assisted,practice});
    for(let i=0;i<schedule.length;i++){await scene.prepare(schedule[i],settings);if(token!==startToken||disposed)return;}
    game=createGame({seed:chosen,practice,assisted:settings.assisted});loading=false;ui.setReady(true);ui.show('playing');audio.resume();scene.recenter();previous=performance.now();
    processEvents();scene.render(game.snapshot(),0,{},settings);
    return game.snapshot();
  }catch(error){if(token!==startToken||disposed)return;loading=false;fatal(error);throw error;}
}
function processEvents(){for(const event of game?.drainEvents()??[]){audio.event(event);if(event.type==='arrival'){const r=game.snapshot().round;ui.caption(r.puzzle ? `INSPECT: ${r.puzzle.rule}. A mismatch means close.` : '');}if(event.type==='clue'&&game.snapshot().practice)ui.caption(game.snapshot().round.clueText);if(event.type==='sealed')ui.caption('Heavy impact outside. The doors held.');if(event.type==='false-alarm')ui.caption('Normal floor rejected. False alarm.');if(event.type==='accepted')ui.caption('Floor clear. Descending.');if(event.type==='failure'||event.type==='escape'){save=recordResult(save,game.snapshot());writeSave(save);terminalAt=performance.now();}}}
function finish(){const s=game.snapshot();ui.show('results',{...s,best:save.best[s.assisted?'assisted':'standard'],clueText:s.round.clueText});input.reset();audio.pause();}
function tick(now){
  if(disposed)return;frame=requestAnimationFrame(tick);const dt=Math.min(.1,Math.max(0,(now-(previous||now))/1000));previous=now;
  const settings=ui.getSettings(),controls=input.poll(settings);
  audio.updateOpening({active:false,menu:!game&&!preview&&!document.hidden});
  if(!game&&!preview&&introState.introPhase!=='open')advanceIntro(dt);
  if(game&&!manual&&!preview&&!loading&&game.snapshot().mode==='running'){game.update(dt,controls);processEvents();}
  const state=preview??game?.snapshot()??introState;
  if(lobby&&!game&&!preview){
    lobby.update(introState,settings,dt);
    const canvas=document.getElementById('scene'),size=`${canvas.clientWidth}:${canvas.clientHeight}`;
    if(size!==lobbySize){lobbySize=size;lobby.resize(canvas.clientWidth,canvas.clientHeight);}
    scene.drawExternal(lobby.scene,lobby.camera);
    audio.update({mode:'lobby',phase:introState.introPhase,door:introState.door,clueVisible:false,threatProgress:0});
  }else{
    scene.render(state,state.mode==='paused'?0:dt,game&&ui.getScreen()==='playing'?controls:{},settings);audio.update(state);
  }
  ui.update(state);
  const terminalAudioActive=state.mode==='lost'&&state.failureReason==='intrusion'&&audio.isTerminalCuePlaying();
  if(terminalAt&&!manual&&!terminalAudioActive&&performance.now()-terminalAt>(settings.softScares?700:1600)){terminalAt=null;finish();}
}
function onFocus(){if(!game)audio?.resume();}
function dispose(){window.removeEventListener('focus',onFocus);if(disposed)return;disposed=true;startToken++;introToken++;cancelAnimationFrame(frame);lobby?.dispose();input?.dispose();ui?.dispose();audio?.dispose();scene?.dispose();window.removeEventListener('pagehide',dispose);}
try{
  scene=createScene(document.getElementById('scene'));audio=createAudio();
  ui=createUI({descend,resume,pause,title,retry:title,recenter:()=>scene.recenter(),exit:()=>{if(desktop)window.close();else title();},screenChanged:setInputMode,settingsChanged:settings=>{save.settings=settings;writeSave(save);audio.setSettings(settings);}});
  input=createInput(document.getElementById('scene'),{onPause:pause,onBlur:()=>{audio.pause();if(game?.snapshot().mode==='running')pause();},onRecenter:()=>scene.recenter(),onDescend:descend,onIntroPointer:(x,y)=>lobby?.hitTestDescend(x,y)&&descend(),onConfirm:()=>ui.confirm(),onMenuMove:delta=>ui.menuMove(delta)});
  ui.updateSettings(save.settings);audio.setSettings(save.settings);audio.unlock();ui.show('title');ui.setReady(false);
  if(desktop)for(const b of document.querySelectorAll('[data-action="exit"]'))b.textContent='Quit game';
  const loader=new GLTFLoader();
  const loadLobbyAsset=async name=>(await loader.loadAsync(new URL(`../floor-30/assets/${name}.glb`,import.meta.url).href)).scene;
  lobby=await createLobbyScene(THREE,loadLobbyAsset,{authored:await scene.prepareLobby()});
  lobby.update(introState,save.settings);lobby.resize(innerWidth,innerHeight);scene.drawExternal(lobby.scene,lobby.camera);prepareIntro().catch(()=>{});
  window.addEventListener('focus',onFocus);window.addEventListener('pagehide',dispose);frame=requestAnimationFrame(tick);
  if(review)window.__wrongFloor={
    start,descend,snapshot:()=>preview??game?.snapshot()??introState,inspect:()=>({...scene.inspect(),lobby:lobby?.inspect(),audio:audio.inspect()}),
    advance(dt,controls={}){if(!game)throw new Error('Start a review run first');manual=true;game.update(dt,controls);processEvents();const s=game.snapshot();scene.render(s,dt,{},ui.getSettings());ui.update(s);audio.update(s);if(s.mode==='won'||s.mode==='lost')finish();return s;},
    async preview(options={}){const round={seed:'review-'+(options.entity??'guest')+'-'+(options.variant??0),danger:true,environment:'office',entity:'guest',variant:0,clueAt:1.8,arrivalAt:4.8,...options};await scene.prepare(round,ui.getSettings());const t=options.roundTime??2.8;ui.caption('');preview={mode:'running',roundIndex:options.roundIndex??10,totalRounds:30,round,roundTime:t,elapsed:90+t,door:{openness:1},clueVisible:t>=round.clueAt,threatProgress:Math.max(0,Math.min(1,(t-round.clueAt)/(round.arrivalAt-round.clueAt))),mistakes:0};ui.show('playing');scene.recenter();scene.render(preview,0,{},ui.getSettings());return scene.inspect();},
    stopPreview(){preview=null;title();},pause,resume,dispose,
  };
}catch(error){fatal(error);}
