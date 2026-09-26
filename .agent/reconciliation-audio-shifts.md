# audio-shifts reconciliation

Source branch: `audio-shifts@f1e59634603d1050414e51475b55486eb1a8a51c`

The branch diverged from `04e636e83731f90c015f052d06cb7a6a0b33650a`. It is not merged wholesale because current `main` contains newer authored environments, characters, Floor 30 work, modular audio, and validation.

## Disposition

### PORT
- Manual platform-candidate workflow.
- Windows/Linux/macOS packaging scripts.
- Application icons.
- Deterministic release ZIP/checksum/manifest tooling.
- Installation and candidate-review documentation.

### KEEP / already represented on main
- Conditioned sample audio.
- Original lift music-box phrase.
- Door attenuation / low-pass behavior.
- Event-driven audio review and unit coverage.
- Runtime audio provenance warnings.

### MERGE-CONCEPT
- `game/src/atmosphere.mjs`: generic wear/dust/light-shaft ideas remain useful, but the old implementation predates authored room models. Reuse only during room-by-room polish.
- `game/src/retro-pass.mjs`: console-era low-resolution presentation is not canonical. Keep only as historical visual reference.

### PORT
- Native Electron runtime smoke, adapted to the canonical physical DESCEND → Floor 29 handoff.

### ARCHIVE / do not port
- `scripts/capture-media.mjs`: hard-coded to the older `0.2.0` runtime and review API.
- `memory.md`: branch-local planning memory, superseded by current docs and `.agent` context.
- Older runtime/audio replacements that would regress the current modular audio system.

## Retirement gate

The branch may be deleted only after:
1. the PORT items exist on `main`;
2. current audio tests remain green;
3. no production-only path exists exclusively on `audio-shifts`;
4. the final branch list is `0.0.1`, `0.0.2`, `0.0.3`, and `main`.
