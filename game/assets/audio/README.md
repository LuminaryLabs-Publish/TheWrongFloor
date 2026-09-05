# Wrong Floor runtime audio

These are compact web-runtime derivatives from the supplied WAV masters.

- `closed-horror.ogg` and `open-door-music-box.ogg` use the same 20-second source window and identical encoded duration. They start on the same `AudioContext` timestamp, so the two layers remain synchronized while door openness crossfades the mix.
- `scared-breathing.ogg` is a 3-second breathing excerpt that loops whenever the dangerous entity is actually visible.
- `jumpscare.ogg` is a 3.5-second impact excerpt from the supplied jumpscare master. It starts at the same threat-progress threshold where the monster's final approach begins; after an intrusion death, the results screen waits until the cue finishes.
- The unrelated asylum-entrance clip is intentionally excluded.
