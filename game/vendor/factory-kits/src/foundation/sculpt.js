import { computeMeshNormals } from './geometry.js';
export const TAU=Math.PI*2;
export function surface(id,material,nu,nv,fn,{wrap=false,role='surface',pivot=[0,0,0],color=[1,1,1]}={}){
 const m={id,material,positions:[],indices:[],uvs:[],colors:[],doubleSided:true,extras:{role,pivot}};
 for(let i=0;i<=nu;i++)for(let j=0;j<=nv;j++){
  const u=i/nu,v=j/nv,p=fn(u,v);m.positions.push(...p);m.uvs.push(v,u);
  const grain=.82+.12*Math.sin(p[0]*21+p[1]*15)*Math.sin(p[2]*31-p[1]*11);
  m.colors.push(...color.map(c=>Math.max(0,Math.min(1,c*grain))));
 }
 for(let i=0;i<nu;i++)for(let j=0;j<nv;j++){const a=i*(nv+1)+j,b=a+nv+1;m.indices.push(a,b,a+1,a+1,b,b+1);}
 m.normals=computeMeshNormals(m);return m;
}
export function bezier(p,t){const s=1-t;return [0,1,2].map(k=>s*s*s*p[0][k]+3*s*s*t*p[1][k]+3*s*t*t*p[2][k]+t*t*t*p[3][k]);}
export function sweep(id,material,controls,radius,detail=20,options={}){
 return surface(id,material,detail,10,(t,v)=>{
  const p=bezier(controls,t),a=bezier(controls,Math.max(0,t-.001)),b=bezier(controls,Math.min(1,t+.001));
  let d=b.map((x,i)=>x-a[i]),l=Math.hypot(...d)||1;d=d.map(x=>x/l);
  const ref=Math.abs(d[1])>.93?[1,0,0]:[0,1,0];let n=[d[1]*ref[2]-d[2]*ref[1],d[2]*ref[0]-d[0]*ref[2],d[0]*ref[1]-d[1]*ref[0]];l=Math.hypot(...n)||1;n=n.map(x=>x/l);
  const q=[d[1]*n[2]-d[2]*n[1],d[2]*n[0]-d[0]*n[2],d[0]*n[1]-d[1]*n[0]],r=typeof radius==='function'?radius(t):radius,ang=v*TAU;
  return p.map((x,k)=>x+r*(Math.cos(ang)*n[k]+Math.sin(ang)*q[k]));
 },options);
}
export function sculptHead(id,center,size,distortion,seedPhase,detail=24){
 return surface(id,'skin',detail,detail*2,(u,v)=>{
  const lat=.015+(Math.PI-.03)*u,a=TAU*v,sy=Math.cos(lat),ring=Math.sin(lat),x=Math.cos(a)*ring,y=sy,z=Math.sin(a)*ring;
  const front=Math.max(0,z),eye=(Math.exp(-((x-.38)**2+(y-.18)**2)*35)+Math.exp(-((x+.38)**2+(y-.18)**2)*35))*front;
  const mouth=Math.exp(-(x*x*6+(y+.4)**2*28))*front;
  const scar=Math.sin(a*9+u*17+seedPhase)*Math.sin(u*37)*.018*distortion;
  return [center[0]+size[0]*(x*(1+.15*distortion*sy)+.10*distortion*Math.sin(lat*3)+scar),center[1]+size[1]*(y+.06*distortion*Math.sin(a*5)*ring),center[2]+size[2]*(z-eye*.6-mouth*.55+front*.13*Math.exp(-x*x*70-y*y*20)+scar)];
 },{role:'head',pivot:center});
}
