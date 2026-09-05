# Wrong Floor vertical slice

Wrong Floor is a first-person, seeded observation-horror game. Survive thirty elevator stops in 300 seconds of active simulation. Each stop occupies ten seconds; tutorial, loading, pause, and results are outside that clock.

This repository contains the independent `0.1.1` vertical slice migrated from `LuminaryLabs-Dev/NexusArcade-Prototypes@ba5071b7219375980f2085bfb106bc3fedd53193`. It is the baseline for future full-game development, not the planned 8–10-hour campaign.

## Controls and rules

WASD/arrows or gamepad stick inspect; hold Space/gamepad A to seal; Enter/B recenters; Escape/Start pauses. Pointer drag and an on-screen hold button support touch. Close can be remapped. A fresh press is required after each opening. Fully sealing takes 1.2 seconds.

Wait through normal floors. Seal on danger. Three false alarms shut down the lift; intrusion ends immediately. Twelve normal floors and eighteen dangerous floors include all twelve entity variations. See [rules.md](rules.md) and `game/content/` for the complete contracts.

## Procedural construction

The game uses three vendored NexusFactory-Kits generators: Horror Entities, Liminal Corridor Architecture, and Distressed Architectural Surfaces. They produce seeded creature geometry, architecture, and material fields before active play begins. Runtime modules came from `LuminaryLabs-Dev/NexusFactory-Kits@c6f232b6c104638983e0a163fc1ca62e3190290a`; their MIT license is bundled.

Three.js r165 is bundled locally under `game/vendor/three/`. Audio is synthesized through Web Audio. The browser game performs no external runtime downloads.

The cover is AI-generated prototype promotional art, not gameplay evidence. Its bytes and disclosure record are preserved under `marketing/prototype-cover/`.

## Saves and lifecycle

Historical Arcade ID: `NXA-000010`. Settings, tutorial completion, and standard/assisted personal bests use `wrong-floor.save.v1`. Corrupt or unavailable storage recovers safely. Transient run state is not persisted.

Browser Exit returns to the title. The desktop launch uses `?standalone=1`, labels Exit as Quit Game, and closes the native window. Input and active simulation clear or pause on focus loss.

## Validation

```sh
npm test
npm run build
npm run test:browser
```

`npm test` covers deterministic schedules, exact 300-second runs at several frame rates, door deadlines, false alarms, exploits, pause, practice, assistance, save recovery, project structure, migration hashes, and desktop staging.

`npm run test:browser` opens the built site in headless Chrome with software WebGL and checks the landing page, cover, actual rendered geometry, Play, keyboard door closure, pause/resume, local-only runtime requests, and browser errors.

The complete review is manual:

```sh
npm run review:full
```

It adds a ten-second render preflight, a deterministic 30-stop browser trace, both failure modes, all twelve encounter screenshots, and an actual real-time 300-second keyboard-controlled session. This is automated evidence, not human playtesting or native-device proof.

## Known validation boundary

The earliest Arcade publication failed its long Chrome performance run. Version `0.1.1` reduced repeated render-buffer resets, canvas uploads, and drawing work. The standalone migration does not claim Steam readiness, native quality, audio quality, cabinet performance, or human horror quality.

## Future architecture

The current game owns its deterministic rules directly and uses vendored procedural factory code. A future NexusEngine integration remains proposed work. Production must inspect and pin exact public NexusEngine contracts before moving gameplay ownership into Core, Kits/DSKs, Sequences, and host/renderer adapters.
