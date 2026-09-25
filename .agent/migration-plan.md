# Prototype Reference Migration

## Outcome

Preserve the complete Wrong Floor `0.2.0` prototype beside the current `0.3.0` game without replacing current work.

## Rules

1. Current development happens only under `game/`.
2. The prototype reference is immutable after import.
3. Build output may copy the reference to `dist/prototype/`, but may not modify the stored reference.
4. Prototype browser storage is rewritten only in build output to avoid sharing saves/settings with the current game.
5. `dist/compare/` exists only to launch the two versions side by side.
6. Any future prototype refresh must use a new versioned reference directory rather than editing this one.
