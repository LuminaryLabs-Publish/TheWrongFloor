// Stage edges only; never translate the safe menu into a failure event.
export function createLobbyAudioPolicy(send) {
 let key='';
 return {update(s){const next=`${s.cycle}:${s.stage}`;if(next!==key){key=next;send({type:`lobby-${s.stage}`,id:next});}},reset(){key='';}};
}
