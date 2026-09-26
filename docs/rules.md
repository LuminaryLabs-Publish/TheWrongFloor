# Wrong Floor: deterministic rules and integration contract

Status: current implementation contract on `main`. The Master GDD owns intended game design; this file describes the executable rules.

## Opening

Floor 30 is not a scored round and consumes zero active simulation seconds. The player begins inside the elevator with normal locomotion disabled. The authored entrance lobby is visible from a fixed back/side-corner composition.

The elevator panel shows the long-term floor language `30 … 1 / G / B`. A large physical DESCEND control illuminates when all scored-floor assets are ready. Activating it closes the doors, changes the display from 30 to 29 during travel, opens the doors on Floor 29, and only then creates the active game state.

The exact first Floor 30 anomaly remains unresolved. Historical corpse/head/hand/claw assets are preserved but are not required by the canonical opening.

## Scored descent

A successful standard or assisted run lasts exactly **270 active simulation seconds**: 30 rounds of nine seconds.

Floor labels are:

```text
29 → 28 → … → 2 → 1 → G
```

Every run contains 12 normal and 18 dangerous stops. The first three scored stops are normal baselines. All 18 authored encounter variations occur in every complete run. Decorative/room seeds remain independent from decision simulation.

Normal floors resolve at six seconds. Dangerous clues appear between 1.3 and 2.4 seconds after arrival. Arrival follows the clue by three seconds in rounds 1–10, 2.6 seconds in rounds 11–20, and 2.2 seconds in rounds 21–30. Assisted mode adds 0.8 seconds to threat response time without extending a round.

## Doors and outcomes

Gameplay doors open in 0.8 seconds and close from fully open in 1.2 seconds. The Floor 29 handoff uses `initialOpen`, so the scored timer begins at elapsed 0 with the doors already fully open.

A fresh press after opening is required; carrying a held button through travel cannot reject the next floor. Releasing briefly stops closure for 0.15 seconds before reopening.

A fully sealed door resolves danger successfully. Sealing a normal floor early adds one false alarm. Three false alarms shut down the elevator. A threat reaching the threshold before sealing ends the run. Exact seal/arrival ties favor the player.

Correct decisions award 100 points. A correctly timed danger press can award up to 50 reaction points. Escape awards 500 points plus 100 for each unused mistake allowance.

## Runtime state

`createGame({seed, assisted, practice, initialOpen})` owns scored simulation. Important snapshot fields include:

- `mode`: running, paused, won, lost
- `phase`: opening, observing, closing, travel, intrusion, escape
- `elapsed`, `roundIndex`, `roundTime`, `totalRounds`
- `round.floor`: 29 through 1, then `G`
- `door.openness`
- `resolved`, `outcome`, `mistakes`, `score`, `failureReason`
- `threatProgress`, `clueVisible`, `closeActive`, `opened`

The application owns the separate Floor 30 intro state; it never increments scored elapsed time.

## Saves

Save key: `wrong-floor.save.v1`. Only settings/tutorial completion/personal bests persist. Run state does not.

## Validation

`npm test` proves:

- deterministic schedule balance over seeded runs
- first scored floor = 29
- final scored floor = G
- exact 270-second completion at several frame rates
- initial-open Floor 29 begins at elapsed/roundTime 0 with door openness 1
- door deadlines, false alarms, input freshness and pause behavior
- saves/settings recovery
- Floor 30 physical panel/camera contract
- current authored room/character/audio contracts

Browser evidence remains separate from deterministic rule proof.
