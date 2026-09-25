# Wrong Floor Agent Context

## Authority

- `game/` is the current implementation authority and remains version `0.3.0`.
- `.agent/references/prototype-v0.2.0/` is a frozen historical reference imported from Nexus Arcade.
- Never implement new game work inside the frozen reference.
- Use the reference only for comparison, regression recovery, and provenance checks.
- The reference is deployed only as an explicitly labeled historical preview.

## Reference source

`LuminaryLabs-Dev/NexusArcade-Prototypes@1d772700edb77eb294f5f7b3f786ad790276fabd`

Permanent Arcade identity: `NXA-000010`.
