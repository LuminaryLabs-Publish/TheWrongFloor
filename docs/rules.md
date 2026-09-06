# Wrong Floor: deterministic rules and integration contract

Status: implementation contract for vertical slice 0.2.0. Horror quality and device performance require separately recorded visual/audio review.

## Experience

A successful standard or assisted run lasts exactly 300 active simulation seconds: 30 rounds of ten seconds. The first three stops establish normal office, hotel, and basement environments. Every run contains 12 normal and 18 dangerous stops. Practice is a separate two-stop, twenty-second loop and never contributes to scored personal bests.

Normal floors resolve at six seconds and close automatically. Dangerous clues appear between 1.3 and 2.4 seconds after arrival. Arrival follows the clue by three seconds in rounds 1–10, 2.6 seconds in rounds 11–20, and 2.2 seconds in rounds 21–30. Assisted mode adds 0.8 seconds to threat response time without extending a round. Correct early closure leaves the remaining time for travel.

The first six dangerous encounters introduce each family’s easy variant. The next six introduce each hard variant. The remaining six repeat seeded family/variant combinations. An entity never occurs on adjacent rounds; no more than three dangers occur consecutively; the final encounter is dangerous and already taught. All 12 authored variations occur in every complete run. Decorative seeds are independent of simulation randomness.

## Doors and outcomes

Doors open in 0.8 seconds and close from fully open in 1.2 seconds. A fresh press after opening is required; carrying a held button through travel cannot reject the next floor. Releasing briefly stops closure for 0.15 seconds before reopening. Tapping provides no speed boost. Input is cleared on pause; release/repress is required after resume.

A fully sealed door resolves danger successfully. Sealing a normal floor early adds one false alarm. Three false alarms shut down the elevator. A threat reaching the threshold before sealing ends the run. The integration splits time at mechanical and encounter boundaries so an exact seal/arrival tie favors sealing, but a closure 1ms late loses. Resolved floors cannot resolve again. The entity can strike outside after success without changing the outcome.

Correct decisions award 100 points. A correctly timed danger press can award up to 50 reaction points, measured from the visible clue. Closing before the clue gives no reaction bonus. Escape awards 500 points and 100 for each unused mistake allowance. No-input and always-held-Close strategies lose. Closing every floor loses on the third normal baseline.

## Browser API

```js
import { createGame } from './src/game.mjs';
const game = createGame({ seed: 'example', assisted: false, practice: false });
game.update(deltaSeconds, { close: false });
game.pause();
game.resume();
const state = game.snapshot();
const events = game.drainEvents();
```

`update` accepts finite nonnegative seconds. Paused and terminal games do not advance. Never feed hidden-tab accumulated time after resume; use the current frame delta. Every returned snapshot is isolated from mutable internal state.

Snapshot fields:

- `mode`: running, paused, won, lost.
- `phase`: opening, observing, closing, travel, intrusion, escape.
- `elapsed`, `roundIndex` (zero-based), `roundTime`, `totalRounds`.
- `round`: index, floor, danger, entity, variant (0 or 1), environment, seed, clueAt, arrivalAt, normalResolveAt, name, clueText.
- `door`: openness (0 closed, 1 fully open), releaseRemaining.
- `resolved`, `outcome`: accepted, sealed, false-alarm, intrusion, or null.
- `mistakes`, `correct`, `score`, `failureReason`: shutdown, intrusion, or null.
- `threatProgress` (0–1), `clueVisible`, `closeActive`, `opened`, `seed`, `assisted`, `practice`.

Events contain `{type, elapsed, roundIndex, data}`. Types are arrival, opened, clue, close-start, accepted, sealed, false-alarm, failure, paused, resumed, escape. `drainEvents()` removes delivered events. Failure data includes reason, entity, and clueText. Presentation owns the short post-failure animation; simulation is already terminal.

## Saves

`storage.mjs` exports `loadSave`, `writeSave`, `sanitizeSave`, `recordResult`, `DEFAULT_SETTINGS`, and `SAVE_KEY`. Optional storage arguments support tests and alternative host adapters. Save key is `wrong-floor.save.v1`; no run state is persisted.

Shape: `{version:1, settings, tutorialComplete, best:{standard,assisted}}`. Settings include sensitivity, deadZone, masterVolume, effectsVolume, ambienceVolume, filmGrain (0–1), brightness (0.7–1.5), captions, reducedMotion, reducedFlashes, softScares, assisted, quality, and bindings for close/recenter/pause. Old saves receive grain 0.35 and brightness 1. Unknown versions, malformed JSON, blocked access, and quota failure recover without blocking play. Bindings must use distinct supported keyboard codes. Values are clamped to valid ranges.

## Validation

Run `node --test tests/game.test.mjs`. Tests cover 1,000 seeded schedules, all encounter variants, 30/60/144 FPS and irregular-frame successful runs, precise tie deadlines, false alarms, preheld inputs, tapping, pause, practice separation, assisted timing, snapshot isolation, and save recovery. A separate 10,000-seed inspection passed during initial prototype development. These checks establish rules; browser rendering and human play/listening remain distinct evidence.

`content/encounters.json` and `content/difficulty.json` are descriptive contracts mirrored by the standalone ESM exports in `director.mjs`. Update both when changing content so no runtime fetch is required to start a game. The executable game and validation use the ESM exports as authority.
