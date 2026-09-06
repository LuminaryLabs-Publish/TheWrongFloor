// Authored room modules; decorative generation cannot change survival deadlines.
export const FLOOR_PROFILES = Object.freeze([
 ['archive','RECORDS ARCHIVE','shelves','#786448','match'],
 ['infirmary','INFIRMARY','beds','#88aba2','count'],
 ['laundry','LINEN SERVICE','washers','#869caf','order'],
 ['conservatory','CONSERVATORY','plants','#718957','direction'],
 ['chapel','MEMORIAL CHAPEL','pews','#9f785c','code'],
 ['switchboard','SWITCHBOARD','panels','#a69b65','match'],
 ['security','SECURITY OFFICE','screens','#739ca4','count'],
 ['cold-store','COLD STORAGE','freezers','#82aebe','order'],
 ['workshop','REPAIR WORKSHOP','tools','#bd9369','direction'],
 ['gallery','PORTRAIT GALLERY','frames','#ad806f','code'],
 ['nursery','DAY NURSERY','cots','#b99e7d','match'],
 ['broadcast','BROADCAST ROOM','speakers','#8276a6','count'],
 ['filtration','WATER FILTRATION','tanks','#689f99','order'],
 ['dining','STAFF DINING','tables','#ab7957','direction'],
 ['vault','DOCUMENT VAULT','lockers','#9ca2a5','code'],
].map(([id,title,prop,tint,puzzle])=>Object.freeze({id,title,prop,tint,puzzle})));
export function floorProfile(id){return FLOOR_PROFILES.find(p=>p.id===id)??FLOOR_PROFILES[0];}
export function createInspection(profile,seed,index){
 const p=floorProfile(profile), n=(Number(seed)>>>0)%5+2, tier=index<10?1:index<20?2:3;
 const forms={match:[`MATCH ${n}${n+1}`,`${n}${n+1}`,`${n+1}${n}`],count:[`EXPECT ${n} SIGNALS`,'|'.repeat(n),'|'.repeat(n-1)],order:['LOW TO HIGH',tier===1?'1 2 3':'2 4 6',tier===1?'1 3 2':'2 6 4'],direction:['ARROWS MUST AGREE','> > >','> < >'],code:[`CODE ${n}${n+2}`,`${n}${n+2}`,`${n}${n+3}`]};
 const [rule,normal,anomaly]=forms[p.puzzle];return {kind:p.puzzle,rule,normal,anomaly,tier};
}
export function inspectionReading(puzzle,round,clueVisible){return round.danger&&clueVisible?puzzle.anomaly:puzzle.normal;}
