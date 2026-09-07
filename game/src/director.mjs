import {FLOOR_PROFILES,createInspection} from './floors/catalog.mjs';
export const ENVIRONMENTS = Object.freeze(['office', 'hotel', 'basement']);
export const ENTITIES = Object.freeze(['guest', 'tall', 'ceiling', 'porter', 'shadow', 'mannequin', 'warden', 'weaver', 'mourner']);
export const DIFFICULTY = Object.freeze({ rounds: 30, roundSeconds: 10, normalFloors: 12, dangerousFloors: 18, normalResolveAt: 6, assistedExtraSeconds: 0.8 });
export const ENCOUNTERS = Object.freeze([
  { entity: 'guest', variant: 0, name: 'The Reflection', clueText: 'The reflection moved while the guest stood still.' },
  { entity: 'guest', variant: 1, name: 'The Twist', clueText: 'The butler’s skull twisted while its body stayed still.' },
  { entity: 'tall', variant: 0, name: 'The Tall Guest', clueText: 'The bent figure was taller than its doorway.' },
  { entity: 'tall', variant: 1, name: 'The Unfolding', clueText: 'A figure unfolded from the maintenance entrance.' },
  { entity: 'ceiling', variant: 0, name: 'Ceiling Walker', clueText: 'Fingers gripped the ceiling above the light.' },
  { entity: 'ceiling', variant: 1, name: 'The Panel', clueText: 'The ceiling panel moved before limbs emerged.' },
  { entity: 'porter', variant: 0, name: 'The Empty Uniform', clueText: 'The porter’s uniform had nobody inside it.' },
  { entity: 'porter', variant: 1, name: 'The Luggage', clueText: 'The cart moved with a shadow that did not belong to it.' },
  { entity: 'shadow', variant: 0, name: 'The Shadow', clueText: 'A shadow approached without an owner.' },
  { entity: 'shadow', variant: 1, name: 'Against the Light', clueText: 'The shadow moved against the direction of the light.' },
  { entity: 'mannequin', variant: 0, name: 'The Mannequins', clueText: 'A mannequin changed position when the light dipped.' },
  { entity: 'mannequin', variant: 1, name: 'The Turn', clueText: 'One mannequin turned its head while the others stayed still.' },
{"entity": "warden", "variant": 0, "name": "The Warden", "clueText": "The figure walked with its head locked sideways."},{"entity": "warden", "variant": 1, "name": "The Crooked Patrol", "clueText": "The patrol dragged its arms with an impossible gait."},{"entity": "weaver", "variant": 0, "name": "The Weaver", "clueText": "Long fingers moved before the figure stepped forward."},{"entity": "weaver", "variant": 1, "name": "The Knot", "clueText": "The figure twisted its spine while walking toward the lift."},{"entity": "mourner", "variant": 0, "name": "The Mourner", "clueText": "A shrouded figure approached with a silently opening mouth."},{"entity": "mourner", "variant": 1, "name": "The Lament", "clueText": "The shroud bent sideways as the figure began its approach."},
]);

export function seedNumber(seed) {
  let value = 2166136261;
  for (const char of String(seed ?? 'wrong-floor')) value = Math.imul(value ^ char.charCodeAt(0), 16777619);
  return value >>> 0;
}
export function randomFromSeed(seed) {
  let state = seedNumber(seed);
  return () => {
    state += 0x6D2B79F5;
    let t = state;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const shuffle = (items, random) => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

function dangerMask(random) {
  // Nine blocks each contain two dangers and one calm stop. Boundaries are checked.
  const path = [false, false, false];
  const visit = (safe, danger, streak) => {
    if (!safe && !danger) return path.at(-1) === true;
    const options = shuffle([false, true], random);
    for (const next of options) {
      if (next ? !danger || streak === 3 : !safe) continue;
      if (safe + danger === 1 && !next) continue;
      const ns = safe - Number(!next), nd = danger - Number(next), st = next ? streak + 1 : 0;
      if (nd > (3 - st) + ns * 3) continue;
      path.push(next);
      if (visit(ns, nd, st)) return true;
      path.pop();
    }
    return false;
  };
  if (!visit(9, 18, 0)) return [false, false, false, ...Array.from({ length: 9 }, () => [true, false, true]).flat()];
  return path;
}

export function createSchedule(seed, { assisted = false, practice = false } = {}) {
  const random = randomFromSeed(seed);
  const mask = practice ? [false, true] : dangerMask(random);
  const easy = shuffle(ENTITIES, random);
  let previous = null, dangerIndex = 0;
  const harder = shuffle(ENTITIES, random);
  if (harder[0] === easy.at(-1)) [harder[0], harder[1]] = [harder[1], harder[0]];
  const profileOrder=shuffle(FLOOR_PROFILES,random);
  const rounds = mask.map((danger, index) => {
    let entity = null, variant = 0;
    if (danger) {
      if (dangerIndex < ENTITIES.length) entity = easy[dangerIndex];
      else if (dangerIndex < ENTITIES.length * 2) {
        entity = harder.shift(); variant = 1;
      } else {
        const choices = ENTITIES.filter(candidate => candidate !== previous);
        entity = choices[Math.floor(random() * choices.length)];
        variant = Math.floor(random() * 2);
      }
      dangerIndex++;
    }
    const clueAt = danger ? 1.3 + random() * 1.1 : null;
    const allowance = index < 10 ? 3 : index < 20 ? 2.6 : 2.2;
    const encounter = danger ? ENCOUNTERS.find(item => item.entity === entity && item.variant === variant) : null;
    previous = danger ? entity : null;
    const profile=profileOrder[index%profileOrder.length].id, decorSeed=seedNumber(`${seed}:decor:${index}`), puzzle=createInspection(profile,decorSeed,index);
    return {
      index, profile, puzzle, floor: practice ? 2 - index : 30 - index, danger, entity, variant,
      environment: index < 3 ? ENVIRONMENTS[index] : ENVIRONMENTS[Math.floor(random() * 3)],
      seed: seedNumber(`${seed}:decor:${index}`), clueAt,
      arrivalAt: danger ? clueAt + allowance + (assisted ? 0.8 : 0) : null,
      normalResolveAt: 6, name: encounter?.name ?? 'A normal floor',
      clueText: encounter ? `${encounter.clueText} Inspection rule: ${puzzle.rule}; the display changed to ${puzzle.anomaly}.` : 'The inspection display matched its rule and no dangerous anomaly appeared.',
    };
  });
  return rounds;
}

export function validateSchedule(rounds, { practice = false } = {}) {
  const errors = [];
  if (rounds.length !== (practice ? 2 : 30)) errors.push('Incorrect round count');
  if (!practice && rounds.filter(round => round.danger).length !== 18) errors.push('Incorrect danger balance');
  if (!practice && rounds.slice(0, 3).some(round => round.danger)) errors.push('Missing normal baselines');
  const taught = new Set(); let streak = 0;
  rounds.forEach((round, index) => {
    streak = round.danger ? streak + 1 : 0;
    if (streak > 3) errors.push(`Danger streak at ${index}`);
    if (!round.danger) return;
    if (index && rounds[index - 1].entity === round.entity) errors.push(`Repeated entity at ${index}`);
    if (round.variant && !taught.has(round.entity)) errors.push(`Untaught variant at ${index}`);
    if (round.arrivalAt - round.clueAt < 2.19 || round.arrivalAt >= 8) errors.push(`Unsafe timing at ${index}`);
    taught.add(round.entity);
  });
  if (!rounds.at(-1)?.danger) errors.push('Final floor must be dangerous');
  return errors;
}
