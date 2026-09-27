# Canonical elevator asset

`game/assets/elevator/wrong-floor-elevator.glb` is the active elevator asset for Wrong Floor.

It follows the Nexus Engine authoring model: one assembly owns the cabin, left/right door nodes and control panel, while seconds-based LINEAR translation clips own the mechanical door motion.

```text
ElevatorRoot
└── Cabin
    ├── Floor / Ceiling / Walls
    ├── DoorLeft
    ├── DoorRight
    ├── PanelHousing
    ├── FloorDisplay
    ├── FloorButton_00..31
    └── DescendButton

Animations
├── DoorsOpen   0.8 s
└── DoorsClose  1.2 s
```

The game still owns deterministic door **state** and timing decisions. The GLB owns the actual spatial motion. Runtime code samples `DoorsOpen` while opening and `DoorsClose` while closing, so the two doors always retract symmetrically from the center.

The adjacent `wrong-floor-elevator.authoring.json` preserves the assembly/animation source contract. The historical `assets/rooms/elevator-interior.glb` remains in migration provenance but is no longer the active elevator.
