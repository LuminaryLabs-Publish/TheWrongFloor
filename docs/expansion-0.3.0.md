# Wrong Floor — 0.3.0 expansion

## Scope and source

This update preserves the 30-stop, exactly 300-active-second survival game. The additional content is **15 reusable floor variations in that run**, not 15 additional timed stops. Every run visits each variation twice, with different encounters and progression timing. The game remains a development vertical slice, not a finished AAA campaign.

Baseline main: `2b12534f90634957928b2e6fc81175ad3e48817a`.
Audio reference: `audio-shifts` at `f1e59634603d1050414e51475b55486eb1a8a51c`.
The reference branch is selectively ported: conditioning, music synthesis, cue levels and voice behavior. Its scene, desktop and unrelated UI replacements are not merged over the current inside-elevator lobby.

## Floors and observation puzzles

| Floor variation | Distinct props | Inspection rule |
| --- | --- | --- |
| Records archive | Shelves, file boxes and labels | Match the printed pair |
| Infirmary | Beds, pillows and head rails | Count signals |
| Linen service | Washer drums and control panels | Ascending order |
| Conservatory | Branched plants and pots | Matching arrow direction |
| Memorial chapel | Pews and candles | Verify the code |
| Switchboard | Patch panels and cable loops | Match the printed pair |
| Security office | Desks, monitors and scan lines | Count signals |
| Cold storage | Freezers, vents and handles | Ascending order |
| Repair workshop | Benches and tool racks | Matching arrow direction |
| Portrait gallery | Framed silhouettes | Verify the code |
| Day nursery | Cots, slats and mattresses | Match the printed pair |
| Broadcast room | Speaker cones and cables | Count signals |
| Water filtration | Banded tanks and bent pipes | Ascending order |
| Staff dining | Tables, plates and cups | Matching arrow direction |
| Document vault | Individual lockers and handles | Verify the code |

The close inspection plaque states its own rule. On a normal floor, the display obeys it. On a dangerous floor, it changes at the declared clue time. Entity clues remain present. Players can use either clue and the existing wait-or-hold-Close action. These are short observation puzzles; they do not add exploration, inventory or multi-step interaction.

Early, middle and late floors retain 3 / 2.6 / 2.2 seconds from clue to arrival. Assisted timing adds 0.8 seconds. The order puzzle adds larger numbers in later tiers. Difficulty must remain learnable; no knowledge of a previous room is required.

## Creature presentation

The Warden, Weaver and Mourner add six encounter definitions. Each uses an indexed `SkinnedMesh`, a 24-bone hierarchy and normalized vertex weights. Walking deforms the skin, with alternating legs, knees, counter-swinging arms, spine and neck motion. Fingers have tapered meshes; the Mourner has a separate cloth shroud. The six original entities and all their variants remain.

This is procedural, stylized creature art. It is not motion capture, scanned anatomy, simulated cloth, or a certified watertight unified character mesh. Anatomical surfaces overlap. Further artist review and foot-placement refinement are appropriate for production-quality realism.

## Ownership and future portability

| Module | Responsibility |
| --- | --- |
| `src/game.mjs`, `elevator.mjs` | Authoritative rules, timing, outcomes and event production |
| `src/director.mjs` | Seeded schedules and taught encounter ordering |
| `src/floors/catalog.mjs` | Room identities and deterministic inspection rules |
| `src/floors/scene-kit.mjs` | Local room factory adapter consuming injected Three.js |
| `src/creatures/rig.mjs` | Local skinned-creature factory and animation |
| `floor-30/audio.mjs` | Menu stage edges; no gameplay failure events |
| `src/audio/system.mjs` | Audio context, activation, buses, settings and lifecycle |
| `src/audio/assets.mjs` | Stable asset/config boundary |
| `src/audio/mixer.mjs` | Presentation state derived from snapshots |
| `src/audio/voices.mjs` | Loading, conditioning, sample voices and cue policy |
| `src/audio/procedural.mjs` | Machinery, room hum, footsteps and mechanical events |
| `src/audio/processing.mjs` | Pure signal conditioning and transient detection |
| `src/scene.mjs`, `main.mjs` | Three.js host and application composition |

These are game-local modules aligned with domain ownership. They are not newly registered NexusEngine domains or published NexusFactory kits. The existing bundled factory kits still generate architecture and original creatures. No Rust compilation or engine replacement is introduced. Pure rules and content can later be reused behind another renderer/audio host without making the simulation depend on browser audio or Three.js objects.

## Audio event contract

| State or event | Audible behavior |
| --- | --- |
| User gesture | Resume the context and load bundled assets; failure stays playable |
| Safe Floor 30 menu | Quiet music box and machinery; no panic or intrusion sting |
| Menu closing / pry / retreat / entry | Restrained latch, strain, scrape and confirmation; softer mode suppresses pry/retreat accents |
| Arrival | Bell, clear prior threat voices, begin current room ambience |
| Inspection clue | Eligible distant voice once after opening floors; panic only when the threat is visible |
| Approach | Filtered/panned bone movement; no death sting |
| New creature walking | Mechanical foot impacts follow the animation phase |
| Door movement | Motor layer; hallway attenuation and lowpass follow openness |
| Sealed / accepted / false alarm | Clear threat voices; impact, latch or warning as appropriate |
| Intrusion failure | Short sting and scream tail, reduced by softer scares |
| Shutdown failure | Mechanical descending tone |
| Escape | Release threat voices and play the ending chime |
| Pause / focus loss | Suspend audio along with play; resume explicitly |
| Retry / title / disposal | Cancel active and delayed cues; release nodes and listeners |

All audio remains local. The sample layer caps voices at 24, preserves stereo balance, removes DC and leaves headroom. Impact trimming uses the first significant transient rather than the loudest later moment. Ambient, effect and master controls remain wired. The seven supplied recordings retain their existing provenance uncertainty; this update does not establish commercial licensing.

## Verification boundaries

Deterministic tests cover all room assignments, explicit clue readings, normalized bone weights, changed animation transforms, full-run timing, both failure conditions, saves, pause, input and lobby safety. Browser review checks actual WebGL, trusted input, all 18 variants, all 15 room captures, an offline mixed-audio signal and lifecycle cleanup. The manual full-session workflow remains separate from automatic startup checks.

Lavapipe videos import the real new room and creature builders but use an adapter cabin and lights. They are visual review evidence, not browser performance measurements. Browser screenshots and traces cover the actual application. Native Electron gameplay and human listening remain separate checks.
