import { createRandomStream } from './random.js';
export const FINISHES=['plaster','rust','cloth','porcelain','metal'];
const palettes={plaster:[.53,.48,.36],rust:[.32,.15,.065],cloth:[.18,.12,.10],porcelain:[.77,.73,.64],metal:[.33,.35,.34]};
export function createDistressSampler(seed,{finish='plaster',wear=.7,scale=1}={}){
 if(!FINISHES.includes(finish))throw new RangeError('Unknown finish');
 const r=createRandomStream(seed).fork('surface'),phase=r.range(0,30),spots=Array.from({length:14},()=>[r.range(-4,4),r.range(-4,4),r.range(.12,.8)]),palette=palettes[finish];
 return (x,y)=>{x*=scale;y*=scale;let stain=0;for(const [sx,sy,sr] of spots)stain+=Math.exp(-((x-sx)**2+(y-sy)**2)/(sr*sr));
 const grain=Math.sin(x*137+y*71+phase)*Math.sin(y*149-x*39)*.045;
 const crack=Math.exp(-Math.abs(Math.sin(x*7+Math.sin(y*11+phase)*.27))*90)*Math.exp(-Math.abs(Math.sin(y*4+phase))*.6);
 const thread=finish==='cloth'?.035*Math.sin(x*220)*Math.sin(y*220):0;
 const scratch=finish==='metal'?Math.exp(-Math.abs(Math.sin(y*160+phase))*80)*.09:0;
 const strength=Math.max(.12,.94+grain+thread+scratch-wear*(stain*.25+crack*.58));return palette.map(c=>Math.min(1,Math.max(0,c*strength)));
 };
}
