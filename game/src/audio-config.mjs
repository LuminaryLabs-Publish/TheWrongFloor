export const APPROACH_PROGRESS = 0.14;

function encodedAsset(name, count) {
  return Object.freeze(Array.from({ length: count }, (_, index) =>
    new URL(`../assets/audio/runtime/${name}/${String(index).padStart(3, '0')}.b64`, import.meta.url)));
}

export const AUDIO_ASSETS = Object.freeze({
  musicBox: encodedAsset('music-box', 4),
  scaredBreathing: encodedAsset('scared-breathing', 3),
  shakyBreaths: encodedAsset('shaky-breaths', 4),
  heartbeat: encodedAsset('heartbeat', 4),
  bones: encodedAsset('bones', 3),
  somebodyPlease: encodedAsset('somebody-please', 4),
  jumpscare: encodedAsset('jumpscare', 4),
  scream: encodedAsset('scream', 3),
});

export const SAMPLE_LEVELS = Object.freeze({
  musicBox: 2.1,
  scaredBreathing: 0.58,
  shakyBreaths: 0.62,
  heartbeat: 0.72,
  bones: 0.42,
  somebodyPlease: 0.34,
  jumpscare: 1.0,
  scream: 0.72,
});

export function clamp01(value) { return Math.max(0, Math.min(1, Number(value) || 0)); }
export function smoothstep(value) { const t = clamp01(value); return t * t * (3 - 2 * t); }
export function musicBoxGain(openness) { const open = smoothstep(openness); return SAMPLE_LEVELS.musicBox * (0.16 + open * 0.84); }
export function doorSampleMix(openness) {
  const open = smoothstep(openness), gain = musicBoxGain(openness);
  return { closedHorror: 1 - open, openDoorMusicBox: gain, musicBox: gain };
}
export function approachTimeForRound(round = {}) {
  const clueAt = Number(round.clueAt) || 0, arrivalAt = Number(round.arrivalAt) || clueAt;
  return clueAt + Math.max(0, arrivalAt - clueAt) * APPROACH_PROGRESS;
}
export function monsterVisibleForAudio(snapshot = {}) {
  if (snapshot.mode !== 'running' || !snapshot.round?.danger || snapshot.resolved) return false;
  const round = snapshot.round;
  const entity = ({ tall: 'tall-one', ceiling: 'ceiling-walker' })[round.entity] ?? round.entity;
  const variant = Number(round.variant ?? 0), clue = Boolean(snapshot.clueVisible), progress = clamp01(snapshot.threatProgress);
  const clueAge = clue ? Math.max(0, Number(snapshot.roundTime || 0) - Number(round.clueAt || 0)) : 0;
  if (entity === 'tall-one') return variant === 0 || clue;
  if (entity === 'ceiling-walker') return variant === 0 || clueAge > 0.15;
  if (entity === 'porter') return clue && (variant === 0 || progress > 0.4);
  if (entity === 'shadow') return clue && progress > 0.4;
  return true;
}
