# Repository profile

## Identity

- Owner: `LuminaryLabs-Publish`
- Repository: `TheWrongFloor`
- Visibility: public
- Default branch: `main`
- Audit baseline: `568bb6e5978e045c2c8d7305b87be05c8ed9c090`
- Package: `the-wrong-floor@0.3.0`
- Node engine: `>=22.12.0`
- Historical Arcade ID: `NXA-000010`

## Current product

Wrong Floor is a first-person 3D observation-horror vertical slice. Floor 30 is the untimed opening/tutorial. Floor 29 starts the scored game. The scored descent contains 30 nine-second stops for exactly 270 active simulation seconds and ends on Ground.

The current implementation documents 12 normal and 18 dangerous stops per complete run, 18 authored encounter variations, 15 authored asylum room profiles plus entrance/exit/elevator spaces, authored character/audio/elevator assets, accessibility settings, deterministic scheduling and recoverable settings/personal bests.

## Repository areas

- `game/` — active browser game implementation, content, assets and vendored runtime dependencies
- `desktop/` — Electron staging/runtime/package path
- `tests/` — deterministic, content, browser and desktop tests/review harnesses
- `scripts/` — build, migration, release, asset and deploy validation tooling
- `docs/` — current rules/install/review/milestone authorities
- `marketing/` — promotional provenance material
- `compare/` — comparison launcher
- `.github/workflows/` — candidate build, full browser review and Pages publishing
- `.agent/references/prototype-v0.2.0/` — frozen prototype evidence
- `MIGRATION-MANIFEST.json` — migration/provenance ledger
- `THIRD_PARTY_NOTICES.md` — third-party boundary

## Opening/runtime contract

Floor 30 begins with normal look/door-close input suppressed. The physical DESCEND control becomes available after preparation, then closes the doors, transitions the display 30→29, travels and opens into Floor 29. Scored simulation begins only at the Floor 29 handoff with doors fully open.

`createGame({seed, assisted, practice, initialOpen})` owns scored simulation. Canonical fields/semantics live in `docs/rules.md`.

## Saves

Repository docs identify `wrong-floor.save.v1` for settings, tutorial completion and personal bests. Transient run state is not persisted.

## Branch/milestone model

Frozen milestone branches:

- `0.0.1` — initial standalone milestone
- `0.0.2` — Floor 30/elevator presentation milestone
- `0.0.3` — expanded authored vertical slice

`main` is active. The future `0.0.4 — Polished Descent` branch should not exist until that state is proven.

## Migration/provenance

`MIGRATION-MANIFEST.json` records migration from `LuminaryLabs-Dev/NexusArcade-Prototypes@ba5071b7219375980f2085bfb106bc3fedd53193` into this publishing repository.

The frozen `prototype-v0.2.0` reference carries its own source/provenance record and is immutable after import.

The cover/provenance manifest explicitly marks the AI-generated promotional cover as not gameplay evidence.

## Commands

`package.json` defines build, serve, validate, deterministic tests, browser smoke/full review, room-safety browser checks, web packaging, desktop platform packaging and deploy validation.

The normal development floor is:

```sh
npm ci
npm test
npm run build
npm run test:browser
```

A full 270-second review is a separate optional real-time evidence tier.
