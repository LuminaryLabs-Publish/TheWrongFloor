# Third-party notices

Wrong Floor bundles the following third-party or separately licensed code for offline runtime use.

## Three.js

- Version lineage: r165
- License: MIT
- License file: `game/vendor/three/LICENSE`
- Source: https://github.com/mrdoob/three.js
- Floor 30 bundles GLTFLoader and BufferGeometryUtils from `three@0.165.0`, with imports redirected to the local r165 module. The existing MIT notice applies. Its game-local procedural kit uses the bundled NexusFactory-Kits foundations; it is not a new shared kit release.

## NexusFactory-Kits modules

- Source repository: `LuminaryLabs-Dev/NexusFactory-Kits`
- Source commit: `c6f232b6c104638983e0a163fc1ca62e3190290a`
- Bundled modules: Horror Entities, Liminal Corridor Architecture, Distressed Architectural Surfaces, and their required foundations
- License: MIT
- License file: `game/vendor/factory-kits/LICENSE`

## Electron desktop development dependencies

The optional desktop candidate uses the dependencies pinned in `desktop/package-lock.json`. Their licenses remain with their respective authors. They are development/packaging dependencies and are not downloaded by the browser game at runtime.

Wrong Floor project source does not currently declare an open-source license. The included dependency licenses do not grant rights to unrelated project-owned code or art.

Character instances also use Three.js r165 SkeletonUtils (MIT), with its import redirected to the bundled module. User-supplied GLB provenance is recorded in game/assets/characters/provenance.json.

## Metal Mania font

Metal Mania by Open Window, Copyright 2012. Bundled unmodified under SIL Open Font License 1.1. Source: https://github.com/google/fonts/tree/main/ofl/metalmania . License: game/assets/fonts/OFL.txt. Used for the title and main menu; no runtime external font requests.
