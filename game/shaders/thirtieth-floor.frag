// ASYLUM — single pass, no textures
// 30 floors; lit ground floor; one upper window.
// Camera stops OUTSIDE the upper window.
// Interior art matches the game: ward-green paint, worn checkerboard, corroded fixtures.
// Elevator is on the side wall, outside the final sightline.
#define LOOP 0
#define SAT(x) clamp(x,0.,1.)

float T,FLASH;
vec3 BOLT;
const float WIN=85.5;

float hash(float n){return fract(sin(n*127.1)*43758.5453);}
float hash2(vec2 p){
 return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);
}
float noise(vec2 p){
 vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash2(i),hash2(i+vec2(1,0)),f.x),
 mix(hash2(i+vec2(0,1)),hash2(i+1.),f.x),f.y);
}
float box(vec3 p,vec3 b){
 vec3 q=abs(p)-b;
 return length(max(q,0.))+min(max(q.x,max(q.y,q.z)),0.);
}
float capsule(vec3 p,vec3 a,vec3 b,float r){
 vec3 v=b-a;
 return length(p-a-v*SAT(dot(p-a,v)/dot(v,v)))-r;
}
vec2 add(vec2 a,float d,float m){
 return d<a.x?vec2(d,m):a;
}
// Exact distance to a bounded row of identical boxes.
float row(vec3 p,float spacing,float count,vec3 size){
 p.z-=spacing*clamp(floor(p.z/spacing+.5),-count,count);
 return box(p,size);
}
float tree(vec3 p){
 float d=capsule(p,vec3(0),vec3(.2,8,0),.21);
 d=min(d,capsule(p,vec3(.1,3.5,0),vec3(-2.1,6.6,.4),.11));
 d=min(d,capsule(p,vec3(.1,5,0),vec3(2.,7.5,-.5),.095));
 d=min(d,capsule(p,vec3(-1.3,5.5,.25),vec3(-1.4,7.7,1.),.06));
 return min(d,capsule(p,vec3(.15,6.,0),vec3(.5,8.9,1.5),.065));
}

// 1 concrete; 2 ground; 3 metal; 4 interior plaster;
// 5 amber light; 6 furniture; 7 elevator; 8 red indicator;
// 9 vegetation; 10 paving.
vec2 scene(vec3 p){
 float shell=box(p-vec3(0,45,0),vec3(12,45,7));
 float upper=box(p-vec3(0,WIN,6.3),vec3(2.15,1.25,2.3));
 float lower=box(p-vec3(0,1.45,6.3),vec3(10.4,1.28,2.3));
 shell=max(shell,-min(upper,lower));

 float room=box(p-vec3(0,WIN,-.1),vec3(5.6,1.55,6.4));
 float downstairs=box(p-vec3(0,1.5,0),vec3(10.7,1.38,6.4));
 shell=max(shell,-min(room,downstairs));

 vec2 r=vec2(shell,1.);
 r=add(r,p.y,2.);
 r=add(r,box(p-vec3(0,90.35,0),vec3(12.25,.35,7.2)),1.);

 // Single upper window frame.
 vec3 w=p-vec3(0,WIN,7.025);
 float frame=max(box(w,vec3(2.23,1.33,.09)),
 -box(w,vec3(2.08,1.18,.3)));
 r=add(r,frame,3.);
 r=add(r,box(p-vec3(0,WIN-1.29,7.15),vec3(2.3,.08,.25)),1.);

 // Floor and back wall of upper lobby.
 r=add(r,box(p-vec3(0,WIN-1.52,0),vec3(5.55,.035,6.35)),4.);
 r=add(r,box(p-vec3(0,WIN,-6.35),vec3(5.55,1.5,.045)),4.);

 // Reception faces the window.
 r=add(r,box(p-vec3(-.8,WIN-.94,-3.6),vec3(2.15,.58,.72)),6.);
 r=add(r,box(p-vec3(-.8,WIN-.32,-3.6),vec3(2.25,.05,.8)),3.);
 r=add(r,box(p-vec3(-1.65,WIN-.13,-3.55),vec3(.27,.15,.04)),3.);

 // Unlit noticeboard behind reception.
 float board=box(p-vec3(-.8,WIN+.28,-6.23),vec3(1.7,.65,.07));
 r=add(r,board,6.);

 // Elevator faces across the room, not toward the window.
 r=add(r,box(p-vec3(5.53,WIN-.2,-3.15),vec3(.06,1.25,1.05)),7.);
 r=add(r,box(p-vec3(5.45,WIN-.2,-3.15),vec3(.025,1.25,.022)),3.);
 r=add(r,box(p-vec3(5.44,WIN+1.18,-3.15),vec3(.04,.08,.19)),8.);

 // Waiting bench along the left wall.
 r=add(r,box(p-vec3(-4.7,WIN-1.04,.2),vec3(.55,.13,1.55)),6.);
 r=add(r,box(p-vec3(-5.16,WIN-.61,.2),vec3(.08,.52,1.55)),6.);

 // Institutional upholstery in the same moss-green palette as the game.
 vec3 chair=p-vec3(3.65,WIN-.65,-.75);
 chair.z-=.95*clamp(floor(chair.z/.95+.5),-1.,1.);
 r=add(r,box(chair-vec3(0,-.41,0),vec3(.49,.12,.41)),12.);
 r=add(r,capsule(chair,vec3(.38,-.27,0),vec3(.38,.17,0),.26),12.);
 r=add(r,box(chair-vec3(0,-.71,0),vec3(.035,.22,.032)),13.);
 // Corroded wall bumpers, conduit and a sagging exposed cable.
 vec3 side=p;side.x=abs(side.x);
 r=add(r,box(side-vec3(5.42,WIN-.28,0),vec3(.045,.05,6.2)),13.);
 r=add(r,capsule(p,vec3(-5.35,WIN+1.1,5.9),vec3(-5.35,WIN+1.1,-5.9),.045),13.);
 r=add(r,capsule(p,vec3(-5.35,WIN+1.1,-5.7),vec3(-5.35,WIN-1.4,-5.7),.045),13.);
 r=add(r,capsule(p,vec3(-3.4,WIN+1.43,-2.8),vec3(-2.5,WIN+.93,-2.8),.018),3.);
 r=add(r,capsule(p,vec3(-2.5,WIN+.93,-2.8),vec3(-1.4,WIN+1.43,-2.8),.018),3.);
 // The actual lobby's ward identification, with no external font texture.
 r=add(r,box(p-vec3(-.8,WIN+1.04,-6.17),vec3(2.8,.25,.025)),14.);
 // Fixed lights: no infinite repetition.
 r=add(r,box(p-vec3(0,WIN+1.47,-2.8),vec3(.8,.035,.22)),5.);
 r=add(r,box(p-vec3(0,WIN+1.47,1.2),vec3(.8,.035,.22)),5.);

 // Ground-floor mullions, finite and confined to the building.
 vec3 g=p-vec3(0,1.45,7.02);
 g.x-=2.6*clamp(floor(g.x/2.6+.5),-4.,4.);
 r=add(r,box(g,vec3(.055,1.3,.07)),3.);
 r=add(r,box(p-vec3(0,2.78,1.5),vec3(10.3,.035,1.)),5.);
 r=add(r,box(p-vec3(0,1.45,-6.38),vec3(10.65,1.3,.035)),4.);

 // All grounds fit inside this conservative bounding box.
 // Its distance safely limits ray steps while far away.
 float grounds=box(p-vec3(0,5.,18.),vec3(43.,6.,53.));
 if(grounds>1.) {
  r=add(r,grounds+1.,1.);
 } else {
  // Raised entrance apron and path toward the gates.
  r=add(r,box(p-vec3(0,.1,11.),vec3(16.,.1,4.)),10.);
  r=add(r,box(p-vec3(0,.065,39.),vec3(3.,.065,24.)),10.);

  // Low perimeter walls; open entrance at the front.
  r=add(r,box(p-vec3(39.,1.15,15.),vec3(.55,1.15,45.)),1.);
  r=add(r,box(p-vec3(-39.,1.15,15.),vec3(.55,1.15,45.)),1.);
  r=add(r,box(p-vec3(0,1.15,-30.),vec3(39.,1.15,.55)),1.);
  vec3 front=p;front.x=abs(front.x);
  r=add(r,box(front-vec3(23.,1.15,60.),vec3(16.,1.15,.55)),1.);

  // Front gate pillars.
  vec3 gate=p;gate.x=abs(gate.x);
  r=add(r,box(gate-vec3(6.9,2.,60.),vec3(.7,2.,.8)),1.);
  r=add(r,box(gate-vec3(6.9,4.1,60.),vec3(.86,.12,.96)),1.);

  // Wall caps and repeated masonry posts.
  vec3 wall=p;wall.x=abs(wall.x);
  r=add(r,box(wall-vec3(39.,2.35,15.),vec3(.7,.08,45.)),1.);
  r=add(r,row(wall-vec3(39.,1.65,15.),9.,5.,
  vec3(.8,1.65,.8)),1.);

  // Walkway curbs.
  vec3 curb=p;curb.x=abs(curb.x);
  r=add(r,box(curb-vec3(3.2,.17,39.),vec3(.12,.17,24.)),1.);

  // Four substantial planters flanking the entrance.
  vec3 pl=p;pl.x=abs(pl.x);pl.z-=24.;
  pl.z-=10.*clamp(floor(pl.z/10.+.5),0.,1.);
  float pot=max(box(pl-vec3(9.,.55,0),vec3(2.4,.55,2.4)),
  -box(pl-vec3(9.,.8,0),vec3(2.13,.55,2.13)));
  r=add(r,pot,1.);
  r=add(r,box(pl-vec3(9.,.35,0),vec3(2.1,.3,2.1)),9.);

  // Eight bare trees in finite rows.
  vec3 tr=p;tr.x=abs(tr.x);tr-=vec3(25.,0,12.);
  tr.z-=13.*clamp(floor(tr.z/13.+.5),0.,3.);
  float tb=box(tr-vec3(0,4.5,.5),vec3(3.,4.6,2.));
  r=add(r,tb>.5?tb+.5:tree(tr),9.);

  // Concrete benches near the path.
  vec3 seat=p;seat.x=abs(seat.x);seat-=vec3(14.,0,16.);
  r=add(r,box(seat-vec3(0,.75,0),vec3(2.,.15,.65)),1.);
  vec3 leg=seat;leg.x=abs(leg.x);
  r=add(r,box(leg-vec3(1.5,.3,0),vec3(.18,.3,.5)),1.);
 }
 return r;
}
vec3 normal(vec3 p,float t){
 vec2 e=vec2(1,-1)*max(.0015,t*.000025);
 return normalize(e.xyy*scene(p+e.xyy).x+
 e.yyx*scene(p+e.yyx).x+e.yxy*scene(p+e.yxy).x+
 e.xxx*scene(p+e.xxx).x);
}
float bolt(vec3 d,vec3 dir,float seed){
 float az=atan(d.x,d.z),ba=atan(dir.x,dir.z);
 float dx=atan(sin(az-ba),cos(az-ba));
 float h=d.y/max(length(d.xz),.08);
 float cell=floor(h*15.),f=fract(h*15.);
 float path=mix(hash(cell+seed),hash(cell+1.+seed),f)-.5;
 float dist=abs(dx-path*.10);
 float fork=abs(dx-path*.10-.18*(h-.35));
 float b=exp(-dist*1000.)+.12*exp(-dist*60.);
 b+=.5*exp(-fork*800.)*smoothstep(.12,.2,h)*
 (1.-smoothstep(.38,.5,h));
 return b*smoothstep(.015,.06,h)*(1.-smoothstep(1.3,1.6,h));
}
vec3 sky(vec3 d){
 vec3 c=mix(vec3(.033,.043,.048),vec3(.005,.011,.023),
 SAT(d.y*.65+.35));
 vec2 uv=d.xz/max(d.y+.55,.12);
 float cloud=.7*noise(uv*2.+vec2(T*.022,0))+
 .3*noise(uv*5.-T*.015);
 c*=.55+.65*cloud;
 c+=FLASH*vec3(.16,.23,.32)*(.35+.65*cloud);
 c+=bolt(d,BOLT,17.+floor(T/3.7)*9.)*
 FLASH*vec3(.7,.82,1.)*3.;
 return c;
}
vec3 rain(vec2 uv,vec3 col,float depth){
 float amount=0.;
 for(int i=0;i<3;i++){
  float k=float(i),s=31.+k*24.;
  vec2 p=uv;p.x+=p.y*(.12+k*.035);
  p*=vec2(s,s*.16);p.y+=T*(11.+k*8.);
  vec2 id=floor(p),f=fract(p);
  float h=hash2(id+19.*k),x=.12+.76*hash2(id+4.);
  float streak=(1.-smoothstep(.008,.033,abs(f.x-x)))*
  smoothstep(.02,.2,f.y)*(1.-smoothstep(.62,.98,f.y));
  amount+=streak*step(.63,h)*
  smoothstep(1.+k*2.,4.+k*4.,depth)*(.08+k*.035);
 }
 return col+amount*vec3(.32,.42,.5)*(1.+FLASH*3.);
}
float wardGlyph(int c,vec2 uv){
 if(any(lessThan(uv,vec2(0)))||any(greaterThanEqual(uv,vec2(1))))return 0.;
 ivec2 q=ivec2(floor(uv*vec2(6,8)));if(q.x>4||q.y>6)return 0.;
 uvec2 bits=uvec2(0);
 if(c==76)bits=uvec2(3775414800u,7u);
 if(c==85)bits=uvec2(2736309809u,3u);
 if(c==77)bits=uvec2(1662703473u,4u);
 if(c==73)bits=uvec2(3359772831u,7u);
 if(c==78)bits=uvec2(1731913521u,4u);
 if(c==65)bits=uvec2(1663026734u,4u);
 if(c==82)bits=uvec2(1699694142u,4u);
 if(c==89)bits=uvec2(138553905u,1u);
 if(c==87)bits=uvec2(2002437681u,4u);
 if(c==68)bits=uvec2(2736309822u,7u);
 if(c==51)bits=uvec2(2182546494u,7u);
 if(c==48)bits=uvec2(2744831534u,3u);
 int bit=q.y*5+(4-q.x);return float((bit<32?bits.x>>uint(bit):bits.y>>uint(bit-32))&1u);
}
float wardLetter(vec2 uv){const int chars[16]=int[16](76,85,77,73,78,65,82,89,32,87,65,82,68,32,51,48);float x=uv.x*16.;int i=int(floor(x));if(i<0||i>=16)return 0.;return wardGlyph(chars[i],vec2(fract(x),uv.y));}
vec3 shade(vec3 p,vec3 n,vec3 rd,float mat){
 vec3 base=vec3(.14,.155,.15);
 float rough=.85,wet=.12;
 if(mat==1.&&abs(p.y-WIN)<1.56&&abs(p.x)<5.67&&p.z<6.5)mat=4.;
 if(mat==14.){
  vec2 uv=vec2((p.x+.8+2.65)/5.3,(WIN+1.20-p.y)/.34);
  float letter=wardLetter(uv);
  float wear=.78+.22*noise(p.xy*45.);
  return mix(vec3(.060,.076,.060),vec3(.48,.48,.34),letter)*wear;
 }
 if(mat==1.){
  float y=mod(p.y,3.);
  float seam=1.-smoothstep(.025,.09,min(y,3.-y));
  float grain=noise(p.xy*3.7)+noise(p.zy*4.1);
  float stains=noise(vec2(p.x*1.9+p.z*.4,p.y*.075));
  base*=.65+.22*grain;
  base*=mix(.48,1.,smoothstep(.22,.7,stains));
  // Horizontal floor divisions apply only to the main tower.
  float tower=step(abs(p.x),12.3)*step(abs(p.z),7.3);
  base*=1.-seam*.62*tower;
 }
 if(mat==2.){
  // Asphalt road, overgrown soil, gravel, and puddles.
  float road=1.-smoothstep(7.,8.,abs(p.x));
  float yard=1.-smoothstep(37.,41.,max(abs(p.x),abs(p.z-15.)*.85));
  float f=noise(p.xz*.32),grit=noise(p.xz*19.);
  base=mix(vec3(.034,.043,.028),vec3(.035,.041,.044),road);
  base*=.65+.55*grit;
  base*=mix(.7,1.,yard);
  float puddle=smoothstep(.52,.69,f);
  rough=mix(.85,.13,puddle);wet=mix(.08,1.,puddle);
  // Broken painted edge lines on the approach road.
  float line=1.-smoothstep(.04,.11,abs(abs(p.x)-5.8));
  line*=step(.35,fract(p.z*.12))*smoothstep(15.,20.,p.z);
  base=mix(base,vec3(.22,.22,.17),line*.5);
 }
 if(mat==3.){base=vec3(.045,.055,.055);rough=.3;wet=.7;}
 if(mat==4.){
  // Match the authored lobby's grimy green dado and water-damaged plaster.
  float low=1.-smoothstep(WIN+.04,WIN+.12,p.y);
  base=mix(vec3(.39,.40,.30),vec3(.18,.28,.21),low);
  vec2 surface=abs(n.x)>.5?p.zy:p.xy;
  float peeling=smoothstep(.44,.62,noise(surface*6.3)+.22*noise(surface*21.));
  base=mix(base,vec3(.31,.32,.24),peeling*.6);
  float damp=noise(vec2(surface.x*11.,surface.y*.8));
  base*=.53+.47*smoothstep(.2,.8,damp);
  base*=.78+.22*noise(surface*67.);
  if(n.y>.5){
   // Broad alternating worn slabs, rather than an immaculate fine grid.
   vec2 tile=p.xz/1.10,cell=floor(tile),f=fract(tile);
   float check=mod(cell.x+cell.y,2.);
   base=mix(vec3(.034,.069,.054),vec3(.43,.46,.35),check);
   float grout=1.-smoothstep(.007,.018,min(min(f.x,1.-f.x),min(f.y,1.-f.y)));
   base*=1.-grout*.40;
   base*=.65+.25*noise(p.xz*3.7)+.10*noise(p.xz*58.);
   float scuff=smoothstep(.67,.81,noise(p.xz*12.));
   base=mix(base,vec3(.12,.15,.115),scuff*.5);
   rough=.72;wet=.10;
  }else if(n.y<-.5){base=vec3(.28,.30,.23)*(.45+.55*noise(p.xz*4.));}
 }
 if(mat==12.){base=vec3(.17,.23,.105)*(.56+.30*noise(p.zy*16.)+.14*noise(p.xy*60.));rough=.98;}
 if(mat==13.){base=mix(vec3(.17,.20,.15),vec3(.28,.105,.033),smoothstep(.25,.6,noise(p.xy*13.)));rough=.87;}
 if(mat==6.)base=vec3(.11,.095,.058);
 if(mat==7.){base=vec3(.055,.07,.066);rough=.3;}
 if(mat==9.)base=vec3(.035,.032,.023);
 if(mat==10.){
  vec2 tile=abs(fract(p.xz*.75)-.5);
  float grout=1.-smoothstep(.012,.04,.5-max(tile.x,tile.y));
  base=vec3(.11,.12,.115)*(1.-grout*.55);
  base*=.75+.3*noise(p.xz*9.);
  rough=.3;wet=.6;
 }
 float flicker=1.-.12*pow(.5+.5*sin(T*19.7),18.);
 if(mat==5.)return (p.y>WIN-2.?vec3(1.3,1.55,1.10):vec3(1.8,1.2,.53))*flicker;
 if(mat==8.)return vec3(.65,.018,.004);

 vec3 moon=normalize(vec3(-.6,.8,.4));
 vec3 c=base*(vec3(.075,.105,.13)+
 max(dot(n,moon),0.)*vec3(.2,.28,.36));
 c+=base*FLASH*max(dot(n,BOLT),0.)*vec3(1.1,1.35,1.65);

 float inRoom=(1.-smoothstep(6.8,7.25,p.z))*
 (1.-smoothstep(1.55,2.1,abs(p.y-WIN)))*
 (1.-smoothstep(5.6,6.,abs(p.x)));
 vec3 light=vec3(0,WIN+1.2,-.5)-p;
 float ll=length(light);vec3 l=light/max(ll,.001);
 c=mix(c,base*vec3(.2,.16,.095),inRoom*.8);
 c+=base*vec3(1.65,1.83,1.35)*(max(dot(n,l),0.)+.12)/
 (1.+ll*ll*.12)*inRoom*flicker;

 float groundLight=exp(-abs(p.y-1.5)*.55)*
 exp(-abs(p.z-5.)*.12)*exp(-max(abs(p.x)-10.,0.)*.22);
 c+=base*vec3(.75,.46,.18)*groundLight;

 float fres=pow(1.-max(dot(n,-rd),0.),5.);
 c+=sky(reflect(rd,n))*wet*(.07+.5*fres)*(1.-inRoom);
 c+=pow(max(dot(n,normalize(l-rd)),0.),mix(65.,8.,rough))*
 vec3(.3,.2,.08)*inRoom;
 if(mat==2.||mat==10.){
  float glow=exp(-abs(p.x)*.12)*exp(-abs(p.z-9.)*.075);
  c+=vec3(.26,.14,.045)*glow*wet*(.5+.5*noise(p.xz*3.));
 }
 return c;
}
void mainImage(out vec4 fragColor,in vec2 fragCoord){
 T=iTime;float time=T;
 #if LOOP
 time=mod(T,48.);
 #endif

 float event=floor(T/3.7),phase=mod(T,3.7);
 float a=event*2.39996;
 BOLT=normalize(vec3(sin(a),.45,cos(a)));
 FLASH=exp(-phase*19.)+.6*exp(-abs(phase-.16)*65.)+
 .23*exp(-abs(phase-.33)*90.);

 float climb=smoothstep(6.,24.,time);
 float approach=smoothstep(23.,40.,time);
 vec3 wide=vec3(43.*cos(time*.045),13.+climb*65.,114.-climb*34.);

 // Exterior stop: front facade is z=7, camera ends at z=9.2.
 // Aim slightly left at reception, away from side-wall elevator.
 vec3 ro=mix(wide,vec3(-.12,WIN-.05,9.2),approach);
 vec3 target=mix(vec3(0,43.+climb*34.,0),
 vec3(-.85,WIN-.3,-3.8),approach);
 float sway=(1.-approach)*.12;
 ro.x+=sin(T*.67)*sway;ro.y+=sin(T*.51)*sway;

 vec2 uv=(fragCoord-.5*iResolution.xy)/iResolution.y;
 vec3 fw=normalize(target-ro);
 vec3 rt=normalize(cross(fw,vec3(0,1,0)));
 vec3 up=cross(rt,fw);
 vec3 rd=normalize(rt*uv.x+up*uv.y+
 fw*mix(1.18,1.45,approach));

 float t=.03,limit=260.;vec2 hit=vec2(0);bool found=false;
 for(int i=0;i<100;i++){
  hit=scene(ro+rd*t);
  if(hit.x<max(.0015,t*.00010)){found=true;break;}
  t+=max(.001,hit.x*.85);
  if(t>limit)break;
 }
 vec3 col=sky(rd);
 if(found){
  vec3 p=ro+rd*t,n=normal(p,t);
  col=shade(p,n,rd,hit.y);
  float fog=1.-exp(-t*.0065);
  col=mix(col,vec3(.029,.042,.05)+FLASH*vec3(.07,.1,.14),fog);
 }

 // Rain only in front of the facade once framing the lobby.
 float rainDepth=found?t:limit;
 if(ro.z>7.2&&rd.z<-.001){
  float facade=(7.2-ro.z)/rd.z;
  vec3 q=ro+rd*facade;
  float opening=step(abs(q.x),2.15)*step(abs(q.y-WIN),1.25);
  if(opening>.5)rainDepth=min(rainDepth,facade);
 }
 col=rain(uv,col,rainDepth);
 col+=FLASH*vec3(.018,.027,.043);
 col*=max(.35,1.-.36*dot(uv,uv));
 col=1.-exp(-col*1.5);
 col=pow(max(col,0.),vec3(1./2.2));
 col+=(hash2(fragCoord+fract(T)*137.)-.5)/255.;
 fragColor=vec4(col,1);
}