# Workflow

## Before editing

1. verify exact remote `main`
2. read `AGENTS.md`, `.agent/start-here.md`, `docs/README.md`, and `docs/rules.md`
3. read task-specific docs
4. confirm no work targets `.agent/references/prototype-v0.2.0/`
5. preserve migration/provenance/third-party evidence

## Standard development validation

```sh
npm ci
npm test
npm run build
npm run test:browser
```

## Additional evidence routes

```sh
npm run review:full
npm run test:rooms:browser
npm run validate:deploy
npm run package:web
npm run package:windows
npm run package:linux
npm run package:mac
```

Run only the evidence tier relevant to the task and report exactly what ran.

## Minimum evidence by change type

- docs only → links/paths/commands/authority checks and documentation-only diff
- deterministic game rules → `npm test`
- browser scene/input/rendering → deterministic tests + browser smoke
- full pacing/horror session → `review:full`
- room safety/content → unit/content tests + room browser route as applicable
- web release → build/package/deploy validation
- desktop changes → desktop tests/staging plus target packaging when required
- asset/provenance changes → manifest/provenance checks plus relevant tests

## Branch discipline

Work on `main` unless a separately authorized release/milestone operation says otherwise. Frozen milestone branches are not development branches.

## Closeout

- review every changed path
- do not modify frozen prototype reference unintentionally
- ensure promotional/reference artifacts are not reported as current gameplay proof
- race-check `main`
- fast-forward only for routine maintenance
- verify remote equals intended commit
