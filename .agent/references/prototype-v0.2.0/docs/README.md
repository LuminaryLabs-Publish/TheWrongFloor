# Wrong Floor

A first-person, seeded observation horror game. Floor 30 is an untimed diegetic opening inside the elevator. Activating the physical DESCEND control carries the player to Floor 29; the scored descent then runs for thirty elevator stops through Ground in exactly 300 seconds of active simulation. Each scored stop occupies ten seconds; an early seal leaves more time travelling. Floor 30, loading, pause and results are outside that clock.

## Controls and rules

On Floor 30 the camera is fixed and gameplay input is locked; activate the illuminated physical DESCEND control with pointer/touch, Enter or gamepad A. Once Floor 29 opens, WASD/arrows or gamepad stick inspect; hold Space/gamepad A to seal; Enter/B recenters; Escape/Start pauses. Pointer drag and an on-screen hold button support touch. Close can be remapped. A fresh press is required after each opening. Fully sealing takes 1.2 seconds. Releasing briefly stops then reopens unresolved doors. Seal wins an exact arrival tie.

Wait through normal floors. Seal on danger. Three false alarms shut down the lift; intrusion ends immediately. Twelve normal floors and eighteen dangerous floors include all twelve entity variations. The first three floors establish office, hotel and basement baselines. No adjacent identical entities or more than three consecutive dangers. Hard variants follow their introductions. The final round is dangerous. Assisted timing has a separate best score.

See [rules.md](rules.md) and the game `content/` JSON for timing and encounter contracts.

## Procedural construction

The game uses three actual NexusFactory-Kits generators: Horror Entities, Liminal Corridor Architecture, and Distressed Architectural Surfaces. Entities are custom indexed swept/sculpted geometry, including ribs, facial features, fingers, cloth and ribbons. Architecture has seeded deformation and wear; materials sample procedural stain/fracture/weave fields. There are six entity grammars with two clue variants each, continuously varied by seed within the rules. This is bounded procedural generation, not an unlimited source of unique encounter rules.

Runtime factory modules are vendored from `LuminaryLabs-Dev/NexusFactory-Kits` commit `c6f232b6c104638983e0a163fc1ca62e3190290a`. Relative imports remain unchanged; MIT license included. Factory preparation runs in a module worker before the active run clock starts. The game owns animations, placement, doors, collision decisions and audio.

Three.js r165 is bundled from the repository's existing Rift Runner dependency; its upstream MIT license is included. Audio is synthesized locally through Web Audio. No external runtime downloads, model service, font service or audio service is required. Actual LFM inference calls during this implementation: zero; the configured model service was unavailable. Code and procedural grammars were authored directly.

The promotional cover was generated with OpenAI image generation and converted to WebP. It is promotional artwork, not gameplay evidence. Steam disclosures should accurately identify this AI-generated promotional material and the development process. No third-party characters or branded artworks are included.

## Integration and saves

Permanent ID: `NXA-000010`. Local metadata lives in `prototypes/wrong-floor/game.json`. The registry generator produces the complete install manifest from immutable committed source. Source lock affects all local games; review all generated manifest differences.

Settings, tutorial completion and standard/assisted personal bests use `wrong-floor.save.v1`. Corrupt or unavailable storage recovers safely. Game transient state is not persisted. Host Close must dispose the game frame and clean its installed bytes while retaining the host's save policy; the game does not delete saves on exit.

The standalone Electron wrapper under `standalone/wrong-floor/` stages the same game, records hashes, uses a stable secure local origin and retains its renderer sandbox. Windows and Linux packaging commands are documented there. Steamworks account/AppID/depot configuration and native OS testing remain separate release gates.

## Validation

Run from repository root:

```sh
npm test
WRONG_FLOOR_REVIEW_DIR=_review/wrong-floor node tests/browser-smoke.mjs
```

The first command includes deterministic rules, timing, schedule and save tests. Browser checks require a working Chrome/WebGL runtime and exercise real input, pause, a manually advanced 300-second simulation, both failure types, all twelve rendered variations, and runtime requests. A manual-clock trace is not a real-time full-run video or a human playtest.

The `?review=1` route enables explicit inspection hooks for reproducible screenshots and deterministic test advancement. Normal launches do not expose these hooks. Captured artifacts distinguish rendering, scripted simulation and human assessment.

Local Chromium was blocked before page load by the execution environment's socket restriction. The cloud browser also blocks localhost. Those results are unverified, not passing. CI Chrome screenshots and post-publication review are required before making visual quality claims. Target cabinet/native performance and human listening/playtests must be recorded independently.

The first published source (`3d188c2`, release pointer `9fca405`) failed CI run [33940174778](https://github.com/LuminaryLabs-Dev/NexusArcade-Prototypes/actions/runs/33940174778): only 71.57 active seconds advanced over 900 wall seconds. Deployment was blocked. Actual title, normal-floor and pause screenshots exposed a floor-display error, overly smooth entity shading and tunnel-like office architecture. Version 0.1.1 repairs these findings and removes redundant drawing-buffer resets, canvas uploads and rendering work. Those changes require a new measured browser result; they are not performance proof by themselves.

The browser review now records a ten-second default-quality render preflight, deterministic outcomes and all twelve encounter images before the full real-time session. A failed preflight leaves evidence and blocks deployment promptly. The full run uses actual keyboard events and the application's real clock; its bounded silent screencast retains original frame timestamps. Neither scripted controls nor silent capture establish human playability or audio quality.

## Publication sequence

1. Commit game source and validation tooling.
2. Set `registry/source-lock.json.localSourceRef` to that source commit; generate and validate registry, commit.
3. Set `registry/ref-lock.json.ref` to the registry commit; generate moving pointer, validate and commit.
4. Fast-forward main, monitor deployment, pull exact published source back down and repeat affected checks.
5. Inspect actual screenshots, fix findings, and regenerate immutable references for any game-source repair.

Publication to Nexus Arcade is prototype publication. Steam readiness additionally requires satisfactory human horror/playability review, native target testing, performance evidence, final storefront assets and Valve review. Do not label this Steam-ready solely because a desktop package builds.
