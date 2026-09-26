# Wrong Floor vertical slice

Wrong Floor is a first-person, seeded observation-horror game. Floor 30 is an untimed controlled opening inside the elevator. The scored run begins on Floor 29 and contains thirty nine-second stops, ending on Ground after exactly 270 active simulation seconds.

This repository contains the current independent game on `main`. Historical milestone branches are frozen evidence; they are not active development lanes.

## Opening contract

```text
Floor 30 (untimed)
→ physical elevator panel
→ illuminated DESCEND
→ doors close
→ 30 → 29
→ Floor 29 doors open
→ controls unlock
```

There is no conventional Play button or seed selector in the normal opening. Settings remain secondary. The exact first Floor 30 anomaly is intentionally unresolved.

## Gameplay contract

Every scored run contains 12 normal and 18 dangerous stops. All 18 encounter variants appear in a complete deterministic schedule. Normal floors establish readable baselines; dangerous floors alter a room rule or present a threat. Three false alarms shut down the elevator.

The 15 authored room profiles are reused across the run. Authored GLBs carry the primary room/elevator identity; procedural systems remain supporting fallback/dressing.

## Controls

- WASD/arrows or gamepad stick: inspect after Floor 29 opens
- Hold Space/gamepad A: close
- Enter/gamepad B: recenter
- Escape/Start: pause
- Floor 30: physical DESCEND via pointer, Enter, or gamepad A

## Saves and lifecycle

Historical Arcade ID: `NXA-000010`. Settings, tutorial completion, and standard/assisted personal bests use `wrong-floor.save.v1`. Corrupt or unavailable storage recovers safely. Transient run state is not persisted.

## Validation

```sh
npm test
npm run build
npm run test:browser
npm run review:full
```

Unit validation covers deterministic schedules, exact 270-second runs, Floor 29/G labels, the initial-open handoff, door deadlines, failures, pause, saves, authored rooms/characters, Floor 30 panel behavior, migration hashes and desktop staging.

Browser validation exercises the real Floor 30 scene, physical DESCEND hit target, Floor 30 → 29 handoff, WebGL rendering, trusted keyboard closure/pause, local-only resources, all threat variants and room profiles. The optional full review adds a real-time 270-second session.

These checks establish implementation evidence, not human horror-quality approval or minimum-device certification.
