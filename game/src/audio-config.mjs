export const APPROACH_PROGRESS = 0.14;

export const AUDIO_ASSETS = Object.freeze({
  closedHorror: new URL('../assets/audio/closed-horror.ogg', import.meta.url),
  openDoorMusicBox: new URL('../assets/audio/open-door-music-box.ogg', import.meta.url),
  scaredBreathing: new URL('../assets/audio/scared-breathing.ogg', import.meta.url),
  jumpscare: new URL('../assets/audio/jumpscare.ogg', import.meta.url),
});

export const SAMPLE_LEVELS = Object.freeze({
  closedHorror: 1.55,
  openDoorMusicBox: 1.85,
  scaredBreathing: 0.72,
  jumpscare: 1.16,
});

export function clamp01(value) {
  return Math.max(0, Math.min(1, Number(value) || 0));
}

export function smoothstep(value) {
  const t = clamp01(value);
  return t * t * (3 - 2 * t);
}

export function doorSampleMix(openness) {
  const open = smoothstep(openness);
  return {
    closedHorror: SAMPLE_LEVELS.closedHorror * (1 - open),
    openDoorMusicBox: SAMPLE_LEVELS.openDoorMusicBox * (0.045 + open * 0.955),
  };
}

export function approachTimeForRound(round = {}) {
  const clueAt = Number(round.clueAt) || 0;
  const arrivalAt = Number(round.arrivalAt) || clueAt;
  return clueAt + Math.max(0, arrivalAt - clueAt) * APPROACH_PROGRESS;
}

export function monsterVisibleForAudio(snapshot = {}) {
  if (snapshot.mode !== 'running' || !snapshot.round?.danger || snapshot.resolved) return false;
  const round = snapshot.round;
  const entity = ({ tall: 'tall-one', ceiling: 'ceiling-walker' })[round.entity] ?? round.entity;
  const variant = Number(round.variant ?? 0);
  const clue = Boolean(snapshot.clueVisible);
  const progress = clamp01(snapshot.threatProgress);
  const clueAge = clue ? Math.max(0, Number(snapshot.roundTime || 0) - Number(round.clueAt || 0)) : 0;
  if (entity === 'tall-one') return variant === 0 || clue;
  if (entity === 'ceiling-walker') return variant === 0 || clueAge > 0.15;
  if (entity === 'porter') return clue && (variant === 0 || progress > 0.4);
  if (entity === 'shadow') return clue && progress > 0.4;
  return true;
}
