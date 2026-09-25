export function hashSeed(seed) {
  let value = 2166136261;
  for (const char of String(seed)) { value ^= char.charCodeAt(0); value = Math.imul(value, 16777619); }
  return value >>> 0;
}
export function createSeededRandom(seed) {
  let state = hashSeed(seed) || 1;
  return () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
}
export function randomBetween(random,min,max){ return min+(max-min)*random(); }
export function randomInt(random,min,maxInclusive){ return Math.floor(randomBetween(random,min,maxInclusive+1)); }
export function deriveSeed(seed,label){ return `${String(seed)}:${String(label)}:${hashSeed(`${seed}:${label}`).toString(16)}`; }
export function createRandomStream(seed) {
  const random = createSeededRandom(seed);
  const stream = {
    seed: String(seed),
    float: () => random(),
    range: (min,max) => randomBetween(random,min,max),
    int: (min,max) => randomInt(random,min,max),
    chance: (probability) => random() < probability,
    sign: () => random() < 0.5 ? -1 : 1,
    pick: (values) => values[Math.min(values.length - 1, Math.floor(random() * values.length))],
    fork: (label) => createRandomStream(deriveSeed(seed,label))
  };
  return Object.freeze(stream);
}
export function poissonSample1D({ random, min, max, count, minDistance, attempts = 32 }) {
  const points=[];
  for(let i=0;i<attempts*count && points.length<count;i++){
    const candidate=randomBetween(random,min,max);
    if(points.every((point)=>Math.abs(point-candidate)>=minDistance)) points.push(candidate);
  }
  while(points.length<count) points.push(randomBetween(random,min,max));
  return points.sort((a,b)=>a-b);
}
