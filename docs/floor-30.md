# Floor 30 — canonical opening

## Intent

Floor 30 is the controlled opening/tutorial defined by the Master GDD. It is a physical scene inside the elevator, not a conventional menu and not part of the scored clock.

## Sequence

```text
Launch
→ player already inside elevator
→ fixed nervous back/side-corner view
→ entrance lobby visible diagonally
→ floor controls readable
→ DESCEND illuminates when the run is prepared
→ player activates the physical button
→ doors close (1.2 s)
→ elevator travels (1.0 s)
→ display changes 30 → 29
→ doors open (0.8 s)
→ Floor 29 starts with doors fully open
→ gameplay controls unlock
```

## Interaction

Floor 30 suppresses normal look/door-close input. DESCEND can be activated through the Three.js hit target, Enter, the accessible backing control, or gamepad A.

Settings are available as a small secondary overlay. There is no normal opening Play button, Practice button, or seed selector.

## Scene

The opening reuses the current authored `entrance-lobby` model and its elevator doors. The camera is placed toward the back/side of the cabin and looks diagonally across the lobby. A game-owned physical panel is added inside the scene:

```text
30 29 28 27 26
25 … 
...
2 1 G B

[ DESCEND ]
```

Only DESCEND is an active floor-control interaction in this milestone. The remaining buttons establish the intended physical language.

DESCEND is dark while preparation is incomplete, illuminates when available, and visibly depresses when activated.

## Horror presentation

Floor 30 is intentionally mostly normal with restrained fluorescent instability. Reduced-flash mode removes the sharp dips.

The old corpse/head/hand/claw opening is no longer required by the canonical scene. Its assets and modules remain preserved for later reuse. This does **not** resolve the Master GDD's open decision about the first Floor 30 anomaly.

## Acceptance

The opening passes when:

- active elapsed remains exactly 0 throughout Floor 30
- normal locomotion/look is disabled
- camera is in the approved corner composition
- authored lobby loads
- physical DESCEND exists and illuminates only when ready
- pointer/keyboard/gamepad can activate DESCEND
- doors close, display changes 30 → 29, then doors open
- Floor 29 starts at elapsed 0 with `opened=true` and door openness 1
- scored simulation does not begin before the Floor 29 handoff


## Rapid composition pass

The Floor 30 control panel is mounted deep against the elevator's interior right wall rather than at the threshold. A full-body Unburied character occupies the rear of the cabin as a restrained silhouette. Strong fluorescent interruptions now drive all principal Floor 30 lights to zero for brief blackout beats; Reduced light changes suppresses those hard blackouts.
