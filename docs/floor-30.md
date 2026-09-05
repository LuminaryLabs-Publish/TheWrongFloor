# Floor 30 entry experience

This change reconstructs the lost local candidate on source commit `04e636e83731f90c015f052d06cb7a6a0b33650a`. It does not claim to reproduce the unavailable commit byte for byte. Current sampled audio and gameplay behavior are preserved; the menu adds only a quiet procedural prying cue.

The root page displays the game viewport. The Floor 30 scene uses seven locally generated GLBs, embedded PBR textures, a fixed camera, separately animated doors and fingers, and a presentation-only seeded clock. Hold Space, gamepad A while focused on the entry button, or the entry button itself for 1.5 seconds. Release cancels an incomplete hold. The accepted transition retracts fingers before sealing and starts once. Space must be released before operating gameplay doors. Reduced intensity removes claws and shuddering; reduced motion removes shuddering. One reusable menu scene owns its resources until application disposal, avoiding repeated menu allocations.

## Reproduction

```sh
npm ci
node scripts/build-floor30-assets.mjs
node scripts/audit-floor30.mjs topology.json
node scripts/migration-manifest.mjs
npm test
npm run build
npm run serve
npm run test:browser
npm ci --prefix desktop --ignore-scripts
npm run package:linux --prefix desktop
```

Keep generated review files outside this repository's packaged game. `assets/manifest.json` records deterministic generator and GLB hashes. The game-local factory exposes the six existing NexusFactory-Kits services through its bundled foundation; shared Factory repositories and NexusEngine are unchanged. This is a Three.js/Electron prototype, not a native Rust engine implementation or an AAA/Steam-readiness claim.

## Three review passes

The user approved documented defect corrections and acceptance checks in place of the 50-improvements-per-pass quota. The attached plan's 20-second duration is retained so each video includes a complete natural cycle. All captures use 1920×1080, 24 fps, 480 frames, `floor30-menu`, and the same camera. Source hashes accompany each capture.

| Pass | Changes evaluated | Evidence and outcome |
| --- | --- | --- |
| 1 | Rebuilt full viewport, authored GLBs, safe cycle, entry controller and release barrier. | Actual scene renders, door/claw sequence completes, rule and entry tests pass. Uniform claws and wall patterning identified. |
| 2 | Tapered fingers, varied finger lengths, adjusted wall shadow reception, added restrained prying audio, focused root iframe. | Claw silhouette variation is visible. Wall patterning remains; shadow adjustment is not counted as a resolved visual defect. |
| 3 | Added armrests, reduced steel glare, stabilized stone roughness, batched rigid geometry while preserving articulation. | 216 authored parts become 38 scene meshes including clones. Final video is compared against earlier framing. Further art polish remains a future task. |

The native headless Three.js adapter renders actual runtime scene builders and GLBs through Mesa Lavapipe. It uses the renderer's compatible Three.js version, while the browser remains pinned to r165. These captures prove scene/animation appearance, not browser CSS, trusted input, real-time frame rate or native-device performance. Audio is rendered from the actual procedural menu module at matching steps; the sampled layer is silent in menu mode. The offline adapter omits the browser limiter; audio listening approval remains unverified.

Local Chromium installation timed out. The unchanged automatic CI workflow retains actual Chrome WebGL startup, root-frame checks, trusted Space entry, door operation and pause checks before Pages deployment. Full 300-second real-time browser acceptance remains manual. Deterministic tests continue checking exact 300 active seconds, both loss conditions, settings and saves. Native gameplay and Windows/macOS device tests remain unverified even when packaging succeeds.

The topology audit checks directed edge pairing with a 1e-6 metre weld tolerance. Factory validation separately checks indices, nondegenerate triangles, finite attributes and unit normals. Closed individual parts do not imply one connected building shell, global collision clearance or artistic acceptance.
