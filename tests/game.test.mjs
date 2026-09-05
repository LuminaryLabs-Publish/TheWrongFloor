import test from 'node:test';
import assert from 'node:assert/strict';
import { createGame } from '../game/src/game.mjs';
import { createSchedule, validateSchedule, ENCOUNTERS } from '../game/src/director.mjs';
import { ElevatorDoors } from '../game/src/elevator.mjs';
import { loadSave, writeSave, recordResult, sanitizeSave, SAVE_KEY } from '../game/src/storage.mjs';
import { APPROACH_PROGRESS, approachTimeForRound, doorSampleMix } from '../game/src/audio-config.mjs';

function play(game, dt = 1 / 60, strategy = snapshot => snapshot.round.danger && snapshot.clueVisible && snapshot.roundTime >= snapshot.round.clueAt + 0.1) {
  let iterations = 0;
  while (game.snapshot().mode === 'running') {
    const s = game.snapshot();
    game.update(dt, { close: strategy(s) });
    assert.ok(++iterations < 100000, 'run terminates');
  }
  return game.snapshot();
}

test('seeded director preserves balance, teaching, timing, baselines, and all authored variants', () => {
  for (let seed = 0; seed < 1000; seed++) {
    const schedule = createSchedule(seed);
    assert.deepEqual(validateSchedule(schedule), [], `seed ${seed}`);
    assert.deepEqual(schedule, createSchedule(seed));
    assert.equal(schedule.filter(r => !r.danger).length, 12);
    assert.deepEqual(schedule.slice(0, 3).map(r => r.environment), ['office', 'hotel', 'basement']);
    assert.equal(new Set(schedule.filter(r => r.danger).map(r => `${r.entity}:${r.variant}`)).size, ENCOUNTERS.length);
    assert.ok(schedule.slice(24, 29).some(r => !r.danger), 'late normal floor prevents blind closure');
  }
  assert.notDeepEqual(createSchedule(1), createSchedule(2));
});

test('complete runs last exactly 300 active seconds across different frame rates', () => {
  for (const dt of [1 / 30, 1 / 60, 1 / 144, 0.037]) {
    const result = play(createGame({ seed: 'duration' }), dt);
    assert.equal(result.mode, 'won'); assert.equal(result.elapsed, 300);
    assert.equal(result.roundIndex, 29); assert.equal(result.correct, 30); assert.equal(result.mistakes, 0);
    assert.ok(result.score >= 3800 && result.score <= 4700);
  }
});

test('no input loses to a threat; permanently held close cannot bypass fresh-press rule', () => {
  for (const close of [false, true]) {
    const game = createGame({ seed: 'exploit' });
    const result = play(game, 1 / 30, () => close);
    assert.equal(result.mode, 'lost'); assert.equal(result.failureReason, 'intrusion');
    assert.equal(result.correct, result.roundIndex);
  }
});

test('closing every floor ends at the third false alarm', () => {
  const result = play(createGame({ seed: 'false-alarm' }), 1 / 60, s => s.opened && !s.resolved);
  assert.equal(result.failureReason, 'shutdown'); assert.equal(result.mistakes, 3);
  assert.equal(result.roundIndex, 2); assert.equal(result.correct, 0);
});

test('normal automatic closure accepts once and does not count as a false alarm', () => {
  const game = createGame(); game.drainEvents();
  game.update(9, { close: false });
  const snapshot = game.snapshot();
  assert.equal(snapshot.correct, 1); assert.equal(snapshot.score, 100); assert.equal(snapshot.mistakes, 0);
  assert.equal(snapshot.door.openness, 0); assert.equal(snapshot.outcome, 'accepted');
  assert.equal(game.drainEvents().filter(e => e.type === 'accepted').length, 1);
});

test('exact arrival/closure tie favors sealing and a late seal fails', () => {
  for (const lateness of [0, 0.001]) {
    const game = createGame({ practice: true, seed: 'tie' });
    game.update(10, { close: false });
    const { arrivalAt } = game.snapshot().round;
    game.update(arrivalAt - 1.2 + lateness, { close: false });
    game.update(1.2, { close: true });
    assert.equal(game.snapshot().outcome, lateness ? 'intrusion' : 'sealed');
  }
});

test('release waits briefly and reopens; repeated tapping does not accelerate doors', () => {
  const door = new ElevatorDoors(); door.advance(0.8, { opening: true });
  door.advance(0.6, { close: true }); assert.ok(Math.abs(door.openness - 0.5) < 1e-9);
  door.advance(0.1, { close: false }); assert.equal(door.openness, 0.5);
  door.advance(0.1, { close: false }); assert.ok(door.openness > 0.5);
  const constant = new ElevatorDoors(), tapping = new ElevatorDoors();
  constant.advance(0.8, { opening: true }); tapping.advance(0.8, { opening: true });
  for (let i = 0; i < 120; i++) { constant.advance(0.01, { close: true }); tapping.advance(0.01, { close: i % 2 === 0 }); }
  assert.ok(constant.openness < 1e-9); assert.ok(tapping.openness > 0.4);
});

test('pause freezes all simulation state and requires a fresh close input after resume', () => {
  const game = createGame({ practice: true }); game.update(11, { close: false });
  game.update(0.2, { close: true }); game.pause();
  const before = game.snapshot(); game.update(90, { close: true }); assert.deepEqual(game.snapshot(), before);
  game.resume(); game.update(0.1, { close: true }); assert.equal(game.snapshot().closeActive, false);
  game.update(0.01, { close: false }); game.update(0.01, { close: true }); assert.equal(game.snapshot().closeActive, true);
  assert.ok(game.snapshot().elapsed < 12);
});

test('practice has two rounds outside the scored run; snapshots cannot mutate live rules', () => {
  const game = createGame({ practice: true });
  const exposed = game.snapshot(); exposed.round.danger = true; exposed.door.openness = 100;
  assert.equal(game.snapshot().round.danger, false); assert.equal(game.snapshot().door.openness, 0);
  const result = play(game); assert.equal(result.mode, 'won'); assert.equal(result.elapsed, 20);
  assert.equal(createGame().snapshot().elapsed, 0);
});

test('assisted mode grants additional threat response time without lengthening a run', () => {
  const standard = createSchedule('assist'), assisted = createSchedule('assist', { assisted: true });
  standard.forEach((r, i) => { if (r.danger) assert.ok(Math.abs(assisted[i].arrivalAt - r.arrivalAt - 0.8) < 1e-9); });
  const result = play(createGame({ assisted: true })); assert.equal(result.elapsed, 300); assert.equal(result.mode, 'won');
});

test('door audio crossfade preserves a quiet synchronized music layer and raises it as doors open', () => {
  const closed = doorSampleMix(0), half = doorSampleMix(0.5), open = doorSampleMix(1);
  assert.ok(closed.closedHorror > half.closedHorror && half.closedHorror > open.closedHorror);
  assert.ok(closed.openDoorMusicBox > 0);
  assert.ok(open.openDoorMusicBox > half.openDoorMusicBox && half.openDoorMusicBox > closed.openDoorMusicBox);
});

test('monster approach emits once at the same progress threshold used by the visual advance', () => {
  const seed = 'approach-event';
  const firstDanger = createSchedule(seed).findIndex(round => round.danger);
  const game = createGame({ seed });
  game.drainEvents();
  for (let index = 0; index < firstDanger; index++) game.update(10, { close: false });
  game.drainEvents();
  const round = game.snapshot().round;
  const expected = approachTimeForRound(round);
  assert.equal(expected, round.clueAt + (round.arrivalAt - round.clueAt) * APPROACH_PROGRESS);
  game.update(expected - 0.001, { close: false });
  assert.equal(game.drainEvents().some(event => event.type === 'approach'), false);
  game.update(0.001, { close: false });
  const approaches = game.drainEvents().filter(event => event.type === 'approach');
  assert.equal(approaches.length, 1);
  game.update(0.2, { close: false });
  assert.equal(game.drainEvents().filter(event => event.type === 'approach').length, 0);
});

test('corrupt, blocked, future, and malformed saves recover; scores stay separated', () => {
  const map = new Map(); const storage = { getItem: key => map.get(key), setItem: (key, value) => map.set(key, value) };
  map.set(SAVE_KEY, 'broken JSON'); const save = loadSave(storage); assert.equal(save.version, 1);
  assert.equal(loadSave({ getItem() { throw new Error('denied'); } }).best.standard, 0);
  assert.equal(writeSave(save, { setItem() { throw new Error('quota'); } }), false);
  const malformed = sanitizeSave({ version: 1, settings: { sensitivity: -100, masterVolume: Infinity, bindings: { close: 'Space', recenter: 'Space', pause: 'Escape' } }, best: { standard: -1 } });
  assert.equal(malformed.settings.sensitivity, 0.25); assert.equal(malformed.best.standard, 0); assert.equal(malformed.settings.bindings.recenter, 'Enter');
  let scored = recordResult(save, { score: 4100, mode: 'won' });
  scored = recordResult(scored, { score: 4400, assisted: true, mode: 'won' });
  scored = recordResult(scored, { score: 9999, practice: true, mode: 'won' });
  assert.equal(scored.best.standard, 4100); assert.equal(scored.best.assisted, 4400); assert.equal(scored.tutorialComplete, true);
  assert.equal(writeSave(scored, storage), true); assert.deepEqual(loadSave(storage), scored);
  assert.equal(sanitizeSave({ version: 999, best: { standard: 9999 } }).best.standard, 0);
});
