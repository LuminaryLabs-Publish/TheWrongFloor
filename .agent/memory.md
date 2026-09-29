# Maintainer memory

## Current authority

- `main` is the only active development line.
- `game/` is the current game implementation authority.
- `.agent/references/prototype-v0.2.0/` is frozen and must remain immutable.
- The Master GDD remains design authority for unresolved/product decisions.

## Timing/rules memory

- Floor 30 consumes zero active scored seconds.
- The scored sequence is 29→...→1→G.
- There are 30 scored rounds at 9 seconds each: exactly 270 active simulation seconds.
- Complete runs contain 12 normal and 18 dangerous stops.
- All 18 authored encounter variants appear in a complete deterministic schedule.
- First three scored stops are normal baselines.
- Three false alarms end the run.
- Exact seal/arrival ties favor the player.
- A fresh press after opening is required; held input cannot automatically reject the next floor.

## Floor 30 memory

- Floor 30 suppresses normal look/door-close input.
- DESCEND is the active physical control for the current opening.
- Doors close, display transitions 30→29, then Floor 29 opens with scored elapsed still 0 at handoff.
- The old corpse/head/hand/claw sequence is preserved but is not required by the canonical opening.
- The first Floor 30 anomaly remains unresolved.
- Current docs also record a rear Unburied silhouette/lighting composition and an authored animated elevator asset; treat current source/docs as authority when presentation details evolve.

## Saves

- Save key: `wrong-floor.save.v1`.
- Settings, tutorial completion and personal bests persist.
- Transient run state does not persist.

## Branch/history memory

- `0.0.1`, `0.0.2`, `0.0.3` are frozen milestone evidence.
- `0.0.4 — Polished Descent` is a target, not yet a branch.
- Historical Arcade identity: `NXA-000010`.
- Current migration manifest source commit: `ba5071b7219375980f2085bfb106bc3fedd53193`.
- Frozen 0.2 reference provenance is separately recorded in `.agent/README.md` and its reference source metadata.

## Provenance memory

- `game/cover.webp` is AI-generated promotional concept art and must not be used as gameplay evidence.
- Preserve `THIRD_PARTY_NOTICES.md`, asset provenance files and migration hashes.

## Evidence memory

- `npm test` proves deterministic and repository contracts, not visual horror quality.
- browser smoke proves real browser/WebGL behavior for exercised paths, not minimum-device certification.
- `review:full` is a separate real-time full-run review.
- platform packaging is separate from deterministic/browser evidence.
