# Feedback and deferred observations

Grounded findings only; this file does not authorize implementation.

## WF-001 — First Floor 30 anomaly remains unresolved

- Evidence: `README.md`, `docs/rules.md`, `docs/floor-30.md`
- Observation: preserved corpse/head/hand/claw assets do not settle the canonical first anomaly.
- Status: owner/design decision.

## WF-002 — 0.0.4 is a target, not a branch

- Evidence: `docs/SLICE_ALIGNMENT.md`
- Observation: work toward Polished Descent happens on `main`; a milestone branch should appear only after proof.
- Status: required branch invariant.

## WF-003 — Historical prototype must remain frozen

- Evidence: `.agent/README.md`, `.agent/migration-plan.md`
- Observation: the imported 0.2 reference exists for comparison/provenance and should not receive current implementation work.
- Status: required invariant.

## WF-004 — Human horror-quality approval is a separate gate

- Evidence: `docs/README.md`, `docs/CANDIDATE_REVIEW.md`
- Observation: deterministic and browser checks establish implementation behavior, not subjective horror/readability quality or minimum-device certification.
- Status: review gate.

## WF-005 — Promotional cover is not gameplay evidence

- Evidence: `MIGRATION-MANIFEST.json`, `marketing/prototype-cover/PROVENANCE.md`
- Observation: the cover is AI-generated promotional concept art.
- Status: provenance invariant.
