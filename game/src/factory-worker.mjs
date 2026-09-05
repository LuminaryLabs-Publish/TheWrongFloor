import { kit as horror } from '../vendor/factory-kits/src/domains/factory/object/creature/kits/horror-kit/index.js';
import { kit as liminal } from '../vendor/factory-kits/src/domains/factory/object/structure/kits/liminal-kit/index.js';
self.onmessage=({data})=>{
  const {id,round,quality}=data;
  try{
    const seed=String(round.seed),archetype=({tall:'tall-one',ceiling:'ceiling-walker'})[round.entity]??round.entity;
    const interior=liminal.services.generate({seed,params:{environment:round.environment,width:5,height:3.4,length:16,distortion:.3,wear:.7}});
    const creature=round.danger?horror.services.generate({seed,params:{archetype,detail:quality==='low'?12:18,distortion:.55+(Number.parseInt(interior.deterministicHash.slice(-2),16)%35)/100,stature:archetype==='tall-one'?2.6:2.25,age:.7}}):null;
    self.postMessage({id,interior,creature});
  }catch(error){self.postMessage({id,error:error.message});}
};
