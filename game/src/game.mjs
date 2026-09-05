import { createSchedule, validateSchedule, DIFFICULTY } from './director.mjs';
import { ElevatorDoors, DOOR_TIMING } from './elevator.mjs';

const EPS = 1e-9;
export function createGame({ seed = 'wrong-floor', assisted = false, practice = false } = {}) {
  const schedule = createSchedule(seed, { assisted, practice });
  const errors = validateSchedule(schedule, { practice });
  if (errors.length) throw new Error(`Invalid encounter schedule: ${errors.join(', ')}`);
  const door = new ElevatorDoors();
  let mode = 'running', elapsed = 0, roundIndex = 0, roundTime = 0;
  let mistakes = 0, score = 0, correct = 0, resolved = false, outcome = null, failureReason = null;
  let heldPreviously = false, closeActive = false, closeStartedAt = null, opened = false, clueEmitted = false;
  const events = [];
  const emit = (type, data = {}) => events.push({ type, elapsed, roundIndex, data });
  const round = () => schedule[roundIndex];
  const lose = (reason) => { mode = 'lost'; failureReason = reason; closeActive = false; emit('failure', { reason, entity: round().entity, clueText: round().clueText }); };
  const resolve = (result) => {
    if (resolved) return;
    resolved = true; outcome = result;
    if (result === 'false-alarm') {
      mistakes++; emit('false-alarm', { mistakes });
      if (mistakes >= 3) lose('shutdown');
    } else {
      correct++;
      let bonus = 0;
      if (result === 'sealed' && closeStartedAt !== null && closeStartedAt >= round().clueAt) {
        const available = round().arrivalAt - round().clueAt - DOOR_TIMING.close;
        bonus = Math.round(50 * Math.max(0, Math.min(1, 1 - (closeStartedAt - round().clueAt) / available)));
      }
      score += 100 + bonus;
      emit(result === 'sealed' ? 'sealed' : 'accepted', { bonus, score });
    }
  };
  const nextRound = () => {
    if (roundIndex === schedule.length - 1) {
      elapsed = schedule.length * DIFFICULTY.roundSeconds;
      mode = 'won'; score += 500 + (3 - mistakes) * 100;
      emit('escape', { score }); return;
    }
    roundIndex++; roundTime = 0; door.reset(); resolved = false; outcome = null;
    closeActive = false; closeStartedAt = null; opened = false; clueEmitted = false;
    emit('arrival', { floor: round().floor, environment: round().environment });
  };
  const update = (dt, input = {}) => {
    if (!Number.isFinite(dt) || dt < 0) throw new RangeError('dt must be a finite nonnegative number');
    if (mode !== 'running') return snapshot();
    const close = Boolean(input.close);
    const pressed = close && !heldPreviously;
    heldPreviously = close;
    if (!close) closeActive = false;
    if (pressed && opened && !resolved) {
      closeActive = true;
      if (closeStartedAt === null) closeStartedAt = roundTime;
      emit('close-start');
    }
    let remaining = dt;
    while (remaining > EPS && mode === 'running') {
      const current = round();
      const opening = !opened;
      const automaticClose = resolved;
      const closing = automaticClose || closeActive;
      const sealed = resolved && door.openness <= EPS;
      let step = Math.min(remaining, 1 / 120, 10 - roundTime);
      const boundaries = [
        opening ? 0.8 - roundTime : Infinity,
        !resolved && current.danger ? current.arrivalAt - roundTime : Infinity,
        !resolved && !current.danger ? current.normalResolveAt - roundTime : Infinity,
        current.danger && !clueEmitted ? current.clueAt - roundTime : Infinity,
        door.timeToBoundary({ opening, close: closing, sealed }),
      ];
      for (const boundary of boundaries) if (boundary > EPS) step = Math.min(step, boundary);
      door.advance(step, { opening, close: closing, sealed });
      roundTime += step; elapsed += step; remaining -= step;
      if (!opened && roundTime >= 0.8 - EPS) { opened = true; door.openness = 1; emit('opened'); }
      if (current.danger && !clueEmitted && roundTime >= current.clueAt - EPS) { clueEmitted = true; emit('clue', { entity: current.entity, variant: current.variant }); }
      // Process sealing before arrival so exact deadline ties favor the player.
      if (opened && !resolved && closeActive && door.openness <= EPS) {
        door.openness = 0;
        resolve(current.danger ? 'sealed' : 'false-alarm');
      }
      if (!resolved && current.danger && roundTime >= current.arrivalAt - EPS) {
        resolved = true; outcome = 'intrusion'; lose('intrusion');
      }
      if (!resolved && !current.danger && roundTime >= current.normalResolveAt - EPS) resolve('accepted');
      if (mode === 'running' && roundTime >= 10 - EPS) {
        roundTime = 10;
        nextRound();
      }
    }
    return snapshot();
  };
  const snapshot = () => {
    const current = round();
    const clueVisible = current.danger && roundTime >= current.clueAt - EPS;
    const threatProgress = current.danger ? Math.max(0, Math.min(1, (roundTime - current.clueAt) / (current.arrivalAt - current.clueAt))) : 0;
    const phase = mode === 'won' ? 'escape' : mode === 'lost' ? 'intrusion' : !opened ? 'opening' : resolved ? 'travel' : closeActive ? 'closing' : 'observing';
    return {
      seed, mode, phase, elapsed, roundIndex, roundTime, round: { ...current },
      door: door.snapshot(), resolved, outcome, mistakes, score, correct, failureReason,
      threatProgress, clueVisible, assisted, practice, totalRounds: schedule.length,
      closeActive, opened,
    };
  };
  emit('arrival', { floor: round().floor, environment: round().environment });
  return {
    update, snapshot,
    pause() { if (mode === 'running') { mode = 'paused'; closeActive = false; heldPreviously = true; emit('paused'); } },
    resume() { if (mode === 'paused') { mode = 'running'; emit('resumed'); } },
    drainEvents() { return events.splice(0); },
  };
}
