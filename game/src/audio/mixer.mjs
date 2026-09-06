export function audioPresentation(s={}) {
 const lobby=s.mode==='lobby';
 return {...s, audible:lobby||s.mode==='running', lobby,
  doorMoving: ['opening','closing','entering'].includes(s.phase)};
}
