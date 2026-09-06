# Third-party notices

Wrong Floor bundles the following third-party or separately licensed code for offline runtime use.

## Three.js

- Version lineage: r165
- License: MIT
- License file: `game/vendor/three/LICENSE`
- Source: https://github.com/mrdoob/three.js

## NexusFactory-Kits modules

- Source repository: `LuminaryLabs-Dev/NexusFactory-Kits`
- Source commit: `c6f232b6c104638983e0a163fc1ca62e3190290a`
- Bundled modules: Horror Entities, Liminal Corridor Architecture, Distressed Architectural Surfaces, and their required foundations
- License: MIT
- License file: `game/vendor/factory-kits/LICENSE`

## Supplied audio recordings

The source names and current cue mapping are recorded in `game/assets/audio/README.md`. Commercial permission and attribution requirements for the seven supplied voice/impact recordings have not been established from repository evidence. Their presence does not imply a license grant. Retain the original licenses or replace these recordings before a paid release.

The new music-box phrase, mechanical audio synthesis, and native elevator-door icon were authored in this repository. Their reproducible source is in `scripts/render-music-box.mjs`, `game/src/procedural-audio.mjs`, and `scripts/render-icon.mjs`.

## Desktop dependencies

The optional desktop candidate uses the dependencies pinned in `desktop/package-lock.json`. Their licenses remain with their respective authors. They are development/packaging dependencies and are not downloaded by the browser game at runtime.

Wrong Floor project source does not currently declare an open-source license. The included dependency licenses do not grant rights to unrelated project-owned code or art.
