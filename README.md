# Wrong Floor

![Wrong Floor prototype concept art](game/cover.webp)

Thirty floors. Five minutes. Close the doors before something gets inside.

Wrong Floor is a first-person 3D observation-horror vertical slice by Luminary Labs. Every seeded run contains 30 ten-second elevator stops, six entity families, twelve encounter variants, and exactly 300 seconds of active simulation.

**Status:** development vertical slice `0.2.0`, aimed at a focused $0.99 horror release. The game now has conditioned and spatially filtered sound, an original music-box phrase, grainy 480p rendering with adjustable brightness, practical lighting, and clearer door feedback. Windows, Linux, and Web share the same offline game. This pass is complete for those three targets; macOS is deferred. Commercial release still requires audio clearance and native target playtests.

## Play

See [installation and local hosting instructions](docs/INSTALL.md) for Windows, Linux, and Web setup.

After GitHub Pages deploys:

- Landing page: https://luminarylabs-publish.github.io/TheWrongFloor/
- Direct game: https://luminarylabs-publish.github.io/TheWrongFloor/game/

Controls:

- WASD, arrows, or gamepad stick: inspect
- Hold Space or gamepad A: close the doors
- Enter or gamepad B: recenter/confirm
- Escape or Start: pause

Wait through normal floors. Seal the doors when an entity appears. Three false alarms shut down the elevator; an intrusion ends the run immediately.

## Develop and validate

Node.js 22.12 or newer is required.

```sh
npm test
npm run build
npm run serve
```

With Chrome or Chromium installed:

```sh
npm run test:browser
```

The complete real-time five-minute browser acceptance run is intentionally manual:

```sh
npm run review:full
```

Desktop candidate packaging is documented in [desktop/README.md](desktop/README.md). The game is self-contained at runtime; Three.js and the procedural factory modules are bundled locally.

```sh
npm run package:web
npm ci --prefix desktop
npm run package:windows
npm run package:linux
```

The **Build platform candidates** workflow builds Windows x64, Linux x64, and Web archives. macOS is deferred. It uploads private workflow artifacts and does not publish a store release. Run `node scripts/archive-release.mjs win32 x64` (or `linux x64`) after desktop packaging to create a portable ZIP and checksums under `releases/`.

See [slice direction](docs/SLICE_ALIGNMENT.md) and [candidate verification](docs/CANDIDATE_REVIEW.md) for scope and measured evidence.

## Provenance

- Historical Nexus Arcade identity: `NXA-000010`
- Version: `0.2.0`
- Migration source: `LuminaryLabs-Dev/NexusArcade-Prototypes@ba5071b7219375980f2085bfb106bc3fedd53193`
- Destination baseline: `LuminaryLabs-Publish/TheWrongFloor@04591fc4021f27ebb7fa1dcaa3eb3adfcf321a14`

The cover is AI-generated promotional concept art, not a gameplay screenshot. Its original bytes and provenance are preserved under [marketing/prototype-cover](marketing/prototype-cover/PROVENANCE.md).

See [docs/README.md](docs/README.md), [docs/rules.md](docs/rules.md), [MIGRATION-MANIFEST.json](MIGRATION-MANIFEST.json), and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
