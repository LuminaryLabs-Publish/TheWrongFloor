# Wrong Floor 0.2.0 candidate review

This pass targets a compact $0.99 experience: one complete five-minute descent, twelve learnable threat variants, replayable seeds, scores, practice, and comfort settings.

**Completed scope:** Windows, Web, and Linux. The user deferred macOS after candidate delivery; it is no longer a completion requirement. Active build CI targets Windows/Linux/Web. Optional Mac packaging code is retained for future work.

## Implemented

- Original 16-second music-box phrase replaces a nearly silent recording. Recorded scares are conditioned, filtered, and timed to their audible attacks. Approach and death use separate cues; sealing/retrying clears old voices.
- Three resolution profiles (360p / 480p / 720p), tonal quantization, restrained grain, color grading, brighter practical sources against darker corners, distant light separation, floor wear, dust, and cabin warning details.
- Brightness and film grain persist in settings. Door seal percentage and progress provide immediate hold feedback. A three-line title brief explains safe floors and false alarms.
- Windows, Linux, macOS Intel and Apple Silicon package commands; native build workflow; original launcher icons; Web/desktop ZIPs with file hashes and archive checksums.

## Evidence

- Rules and audio regression tests cover seeded schedules, exact 300-second completion, input edge cases, silence, loop seams, impact alignment, source peak headroom, stereo balance, and save migration.
- Browser review inspects all twelve variants, both failures, thirty-floor escape, real keyboard close/pause, WebGL, local resources, and default-quality rendering performance.
- Offline audio review decodes all eight runtime assets and renders a 17-second mix covering retry/cleanup. A listening preview is written with the numeric report.
- Native Windows smoke uses an isolated save profile and the packaged executable, checks the secure custom protocol, real keyboard closure/pause, renderer isolation, and all audio sources.
- Final measured results and artifact paths are recorded in `memory.md` after checks finish. Generated reports are under `_review/`.

Final results: **20/20 tests pass**; real-time browser escape completed in **305.8 wall seconds / 300 active seconds**, with **30 correct floors / zero mistakes**. All 12 variants and both failures passed separate checks. The 17-second audio render had **zero clipped samples** and **0.266 peak amplitude**. The exact Windows archive payload passed the native executable check. Windows (154.9 MiB), Linux (119.8 MiB), and Web (1.0 MiB) ZIPs passed independent CRC, file-hash, and archive-hash verification. These are unsigned development candidates. Full-session software rendering averaged 27.05 FPS with capture overhead; no native Mac/Linux performance claim is made.

## Remaining release work

- The supplied voice/impact recordings have filenames but no license evidence in the repository. Clearance or replacement is necessary for commercial distribution.
- macOS is deferred. Its optional packaging code remains, but Mac jobs are excluded from active candidate builds.
- Linux cross-packaging does not verify Linux gameplay. Target-OS playtests, controllers, headphones/speakers, display brightness, and fullscreen transitions remain required.
- macOS signing/notarization and any Windows signing require the publisher's credentials. Follow [Electron's signing documentation](https://www.electronjs.org/docs/latest/tutorial/code-signing).
- No store upload, payment setup, signing, or public release has been performed. The intended price is $0.99; this pass does not establish buyer demand or commercial approval.
