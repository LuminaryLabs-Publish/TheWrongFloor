import { createSculptKit } from '../../../../../../foundation/sculpt-kit.js';
import { surface,sweep,sculptHead,TAU } from '../../../../../../foundation/sculpt.js';
import { createRandomStream } from '../../../../../../foundation/random.js';
export const ARCHETYPES=['guest','tall-one','ceiling-walker','porter','shadow','mannequin'];
const schema=[{id:'archetype',type:'enum',options:ARCHETYPES,default:'guest'},{id:'distortion',type:'number',minimum:0,maximum:1,default:.7,step:.05},{id:'stature',type:'number',minimum:1,maximum:4,default:2.4,step:.1},{id:'detail',type:'integer',minimum:12,maximum:40,default:24},{id:'age',type:'number',minimum:0,maximum:1,default:.7,step:.05}];
function build({seed,params:p}){
 const rng=createRandomStream(seed).fork('geometry'),phase=rng.range(0,TAU),d=p.distortion,n=p.detail,s=p.stature/2.4,kind=p.archetype,meshes=[];
 const mat=(c,r=.8)=>({baseColorFactor:[...c,1],roughnessFactor:r,metallicFactor:0,doubleSided:true});
 const materials={skin:mat(kind==='mannequin'?[.73,.70,.61]:kind==='shadow'?[.035,.025,.04]:[.52,.44,.36]),dark:mat([.018,.008,.012],.33),cloth:mat([.075,.065,.06]),bone:mat([.68,.59,.44]),eye:{...mat([.95,.68,.28],.16),emissiveFactor:[.20,.05,.008]}};
 const add=m=>{meshes.push(m);return m;};
 const curve=(id,controls,r,material='skin',role='limb')=>{const stream=createRandomStream(seed).fork('geometry:'+id),warped=controls.map((point,i)=>point.map((value,k)=>value+((i===1||i===2)?stream.range(-.07,.07)*d:0)));return add(sweep(id,material,warped,r,n,{role,pivot:controls[0]}));};
 const tall=kind==='tall-one',walker=kind==='ceiling-walker',porter=kind==='porter',shadow=kind==='shadow';
 const hip=tall?1.4:walker?.8:1,shoulder=tall?2.65:walker?1.35:1.85;
 if(!shadow&&!porter){
  add(surface('torso','skin',n,32,(u,v)=>{const a=v*TAU,y=hip+(shoulder-hip)*u,width=(.15+.19*Math.sin(Math.PI*u))*(1+.065*d*Math.cos(u*70)),depth=.13+.06*Math.sin(Math.PI*u);return [Math.cos(a)*width+.07*d*Math.sin(u*5+phase),y,Math.sin(a)*depth+.12*d*Math.sin(u*3)];},{role:'torso',pivot:[0,hip,0]}));
  // Raised rib arches wrap an emaciated thorax; swept rather than block attachments.
  for(let i=0;i<7;i++)for(const side of [-1,1]){const y=hip+.27+i*(shoulder-hip-.35)/7;curve(`rib-${side}-${i}`,[[side*.015,y,.18],[side*.38,y+.07,.18],[side*.31,y-.06,-.04],[side*.12,y-.13,-.13]],.012+d*.008,'bone','rib');}
 }
 if(porter){
  add(surface('hollow-coat','cloth',n,48,(u,v)=>{const a=v*TAU,y=.15+u*1.75,r=.25+.21*(1-u)+(.025+d*.04)*Math.sin(a*13+u*2+phase*.1),hem=(1-u)**9*(.05+d*.10)*Math.sin(a*17);return [Math.cos(a)*r,y+hem,Math.sin(a)*r*.6+.05*Math.sin(u*7+phase)];},{role:'cloth',pivot:[0,1.8,0]}));
  curve('collar-left',[[-.2,1.8,.1],[-.22,2,.15],[-.04,1.97,.11],[0,1.83,.14]],.045,'cloth','collar');
  curve('collar-right',[[.2,1.8,.1],[.22,2,.15],[.04,1.97,.11],[0,1.83,.14]],.045,'cloth','collar');
 }
 if(shadow){
  for(let i=0;i<15;i++){const a=i*TAU/15,phaseI=rng.range(0,TAU),len=rng.range(1.6,2.7);add(surface(`torn-ribbon-${i}`,'dark',n,4,(u,v)=>{const width=(.14+.10*Math.sin(u*6+phaseI))*(1-u*.7),bend=.18*Math.sin(u*11+phaseI);return [Math.cos(a)*(.12+.48*(1-u))+Math.sin(a)*(v-.5)*width+bend,u*len,Math.sin(a)*(.13+.22*(1-u))+(v-.5)*width];},{role:'ribbon',pivot:[0,1.5,0]}));}
 }
 const headY=tall?2.9:walker?1.47:2.12;
 if(!porter){add(sculptHead('head',[tall?.18:0,headY,.12],[shadow?.14:.20,tall?.32:.28,.18],d,phase,n));
  for(const side of [-1,1]){
   const eyeX=side*.076,ey=headY+.045;add(surface(`eye-socket-${side}`,'dark',8,16,(u,v)=>{const a=v*TAU,r=.015+u*.036;return [eyeX+Math.cos(a)*r,ey+Math.sin(a)*r*.65,.275-.03*u];},{role:'face',pivot:[0,headY,.12]}));
   curve(`eyelid-${side}`,[[eyeX-.04,ey,.284],[eyeX-.03,ey+.034,.30],[eyeX+.035,ey+.02,.30],[eyeX+.048,ey-.005,.28]],.009,'skin','face');
   if(kind!=='mannequin')add(surface(`eye-glint-${side}`,'eye',4,8,(u,v)=>{const a=v*TAU,r=.001+u*.009;return [eyeX+Math.cos(a)*r,ey+Math.sin(a)*r,.285];},{role:'face'}));
  }
  add(surface('mouth-void','dark',10,24,(u,v)=>{const a=v*TAU,r=.008+u*.085;return [Math.cos(a)*r*(1+d*.5),headY-.10+Math.sin(a)*r*.55,.278-u*.014];},{role:'face'}));
  for(let i=0;i<11;i++){const x=(i-5)*.021;curve(`tooth-${i}`,[[x,headY-.068,.284],[x,headY-.077,.299],[x+.003,headY-.091,.299],[x+.004,headY-.10,.285]],t=>.006*(1-t*.85),'bone','face');}
 }
 if(!shadow){
  const limbs=walker?6:2;
  for(let i=0;i<limbs;i++){
   const side=i%2?-1:1,row=Math.floor(i/2),root=[side*.28,shoulder-row*.15,0],end=walker?[side*(1.05+row*.15),.2+row*.30,.5-row*.35]:[side*(tall?.57:.5),porter?.6:.48,.24];
   curve(`arm-${i}`,[root,[side*(walker?.8:.60),shoulder+.12,.0],[side*(walker?1.2:.38),walker?.5:1.0,-.25],end],t=>(.066+.035*Math.sin(t*9))* (1-t*.65),porter?'cloth':'skin','arm');
   for(let f=0;f<5;f++){const x=end[0]+side*(f-2)*.028;curve(`finger-${i}-${f}`,[[x,end[1],end[2]],[x+side*.10,end[1]-.08,end[2]+.03],[x+side*.13,end[1]-.23-f*.018,end[2]+.09],[x+side*.06,end[1]-.29-f*.025,end[2]+.18]],t=>.019*(1-t*.92),'skin','finger');}
  }
  if(!walker&&!porter)for(const side of [-1,1])curve(`leg-${side}`,[[side*.12,hip,0],[side*.29,hip*.72,-.08],[side*.12,.35,.02],[side*.20,.05,.23]],t=>.10*(1-t*.65)*(1+.2*Math.sin(t*13)),'skin','leg');
 }
 if(kind==='mannequin')for(let i=0;i<12;i++){const y=.9+i*.095,side=i%2?1:-1;curve(`porcelain-fracture-${i}`,[[side*.02,y,.19],[side*.13,y+.06,.20],[side*.18,y-.06,.17],[side*.25,y-.035,.12]],.005,'dark','fracture');}
 if(tall)for(let i=0;i<9;i++)curve(`spinal-hook-${i}`,[[0,1.45+i*.13,-.13],[.06,1.55+i*.13,-.30],[.02,1.62+i*.13,-.35],[0,1.64+i*.13,-.30]],t=>.022*(1-t*.9),'bone','spine');
 // Scale geometry and pivots coherently, then make minimum Y exactly floor contact.
 let minY=Infinity;for(const m of meshes)for(let i=1;i<m.positions.length;i+=3)minY=Math.min(minY,m.positions[i]);
 for(const m of meshes){m.positions=m.positions.map((x,i)=>(x-(i%3===1?minY:0))*s);m.extras.pivot=m.extras.pivot.map((x,i)=>(x-(i===1?minY:0))*s);m.colors=m.colors.map(c=>c*(1-p.age*.13));}
 return {meshes,materials,metadata:{archetype:kind,forward:'+Z',up:'+Y',floorContact:true,anatomy:'parametric swept tissue, sculpted face, ribs, cloth or ribbons',animationRoles:['torso','head','arm','finger','cloth','ribbon'],visualApproval:'required'}};
}
export const kit=createSculptKit({id:'factory-object-creature-horror',displayName:'Procedural Horror Entities',domainPath:'n:factory:object:creature',requires:['factory:object:creature','factory:seed','factory:artifact'],provides:['horror:creature:mesh'],parameterSchema:schema,source:{module:'src/domains/factory/object/creature/kits/horror-kit/index.js',exportName:'kit'},metadata:{synthetic:true,outputFormats:['glb','json']}},build);
export const manifest=kit.manifest;
export const {describe,generate,randomize,reroll,validate}=kit.services;
export const exportArtifact=kit.services.export;
export { exportArtifact as export };
export default kit;
