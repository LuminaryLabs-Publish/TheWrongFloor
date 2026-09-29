# Wrong Floor agent operating contract

Wrong Floor is an active first-person observation-horror vertical slice. `main` is the only active development line. This file is the current maintainer operating contract; existing migration/reference material under `.agent/` remains preserved historical evidence.

## Read order

1. `AGENTS.md`
2. `.agent/start-here.md`
3. `.agent/repository-profile.md`
4. `.agent/memory.md`
5. `.agent/workflow.md`
6. `docs/README.md`
7. `docs/rules.md`
8. task-specific docs such as `docs/floor-30.md`, `docs/SLICE_ALIGNMENT.md`, or `docs/CANDIDATE_REVIEW.md`

## Authority boundaries

- `game/` is the current implementation authority.
- `main` is the only active development branch.
- Frozen milestone branches `0.0.1`, `0.0.2`, and `0.0.3` are evidence, not development lanes.
- `.agent/references/prototype-v0.2.0/` is frozen historical reference material. Never implement new game work there.
- The Master GDD remains design authority where repository residue/history and intended design differ.
- `MIGRATION-MANIFEST.json` is migration/provenance evidence, not a gameplay design document.

## Core gameplay invariants

- Floor 30 is an untimed diegetic opening and consumes zero scored simulation seconds.
- The scored run starts on Floor 29 and ends on Ground.
- The standard scored descent is 30 rounds × 9 seconds = exactly 270 active simulation seconds.
- A fresh close press is required after each opening; held input must not leak through travel.
- Three false alarms end the run.
- Existing deterministic schedule/settings/save contracts should not be changed casually.

## Delivery boundaries

The repository owns browser/web and Electron desktop delivery. Packaging, browser evidence, deterministic rule tests and human horror-quality review are distinct evidence tiers.

## Provenance

- Historical Arcade identity: `NXA-000010`.
- Current migration manifest source: `LuminaryLabs-Dev/NexusArcade-Prototypes@ba5071b7219375980f2085bfb106bc3fedd53193`.
- Frozen prototype reference provenance remains separately recorded in `.agent/README.md` and the versioned reference tree.
- Promotional cover art is AI-generated promotional material, not gameplay evidence.

## Validation floor

```sh
npm ci
npm test
npm run build
npm run test:browser
```

Optional full real-time review:

```sh
npm run review:full
```

Use platform package commands only when that delivery target is actually in scope.

## Scope discipline

Preserve historical references, provenance and third-party notices. Record out-of-scope findings in `.agent/feedback.md` rather than silently expanding the task.
