import { kit as liminal } from '../vendor/factory-kits/src/domains/factory/object/structure/kits/liminal-kit/index.js';
self.onmessage=({data})=>{
  const {id,round,quality}=data;
  try{
    const seed=String(round.seed),archetype=({tall:'tall-one',ceiling:'ceiling-walker'})[round.entity]??round.entity;
    const interior=liminal.services.generate({seed,params:{environment:round.environment,width:5,height:3.4,length:16,distortion:.3,wear:.7}});
    self.postMessage({id,interior});
  }catch(error){self.postMessage({id,error:error.message});}
};
