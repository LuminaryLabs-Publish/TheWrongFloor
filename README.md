# Wrong Floor

![Wrong Floor prototype concept art](game/cover.webp)

Thirty scored stops. Four and a half minutes. Close the doors before something gets inside.

Wrong Floor is a first-person 3D observation-horror vertical slice by Luminary Labs. `main` is the only active development line. Floor 30 is an untimed diegetic opening; the scored descent begins on Floor 29 and runs through Ground for exactly 270 active simulation seconds.

**Status:** active development on `main`, working toward the future `0.0.4 — Polished Descent` milestone. There is no `0.0.4` branch yet.

## Play

After GitHub Pages deploys:

- Landing page: https://luminarylabs-publish.github.io/TheWrongFloor/
- Direct game: https://luminarylabs-publish.github.io/TheWrongFloor/game/
- Historical prototype preview: https://luminarylabs-publish.github.io/TheWrongFloor/prototype/
- Comparison launcher: https://luminarylabs-publish.github.io/TheWrongFloor/compare/

Opening flow:

```text
Launch
→ already inside the Floor 30 elevator
→ read the physical panel
→ DESCEND illuminates
→ activate DESCEND
→ doors close / travel
→ display changes 30 → 29
→ Floor 29 opens
→ full gameplay begins
```

Gameplay controls:

- WASD, arrows, or gamepad stick: inspect
- Hold Space or gamepad A: close the doors
- Enter or gamepad B: recenter
- Escape or Start: pause

## Current game

The active game keeps the strongest current systems:

- 15 authored asylum room profiles plus entrance/exit lobbies and elevator interior
- 9 threat families / 18 authored encounter variants
- modular local audio with conditioned samples, procedural machinery, room tone, threat cues and opening ambience
- accessibility settings for motion, flashes, scare intensity, captions and assisted timing
- deterministic schedules, scores and recoverable settings/personal bests
- browser and Electron desktop builds
- local runtime dependencies only

The retired corpse/claw Floor 30 sequence is preserved as source/assets for future design use, but it is not required by the canonical opening. The exact first Floor 30 anomaly remains unresolved by the Master GDD.

## Branch model

Wrong Floor follows the Nexus Engine milestone pattern:

```text
0.0.1   frozen initial standalone milestone
0.0.2   frozen Floor 30 / elevator presentation milestone
0.0.3   frozen expanded authored vertical slice
main    only active development branch
```

Future milestone branches are created only after the corresponding state of `main` is validated. Development does not move onto the frozen branches.

## Develop and validate

Node.js 22.12 or newer is required.

```sh
npm ci
npm test
npm run build
npm run test:browser
```

The optional real-time review is:

```sh
npm run review:full
```

Desktop candidate packaging:

```sh
npm ci --prefix desktop
npm run package:windows
npm run package:linux
npm run package:mac
npm run package:web
```

See [docs/README.md](docs/README.md), [docs/rules.md](docs/rules.md), [docs/floor-30.md](docs/floor-30.md), [docs/INSTALL.md](docs/INSTALL.md), and [docs/CANDIDATE_REVIEW.md](docs/CANDIDATE_REVIEW.md).

## Provenance

- Historical Nexus Arcade identity: `NXA-000010`
- Current package/game metadata version: `0.3.0`
- Active milestone target: `0.0.4 — Polished Descent` (not branched yet)
- Migration source: `LuminaryLabs-Dev/NexusArcade-Prototypes@ba5071b7219375980f2085bfb106bc3fedd53193`
- Frozen prototype reference: `.agent/references/prototype-v0.2.0/`

The cover is AI-generated promotional concept art, not gameplay evidence. Its original bytes and provenance are preserved under `marketing/prototype-cover/`.
