# Candidate review

A candidate is acceptable only when it is built from a known commit on `main` or a frozen milestone branch and the corresponding validation evidence is retained.

## Required checks

1. `npm test`
2. `npm run build`
3. Browser smoke on the built web output.
4. Desktop stage and integrity validation.
5. Native launch on each packaged target when that target is being considered for release.
6. Confirm the packaged game ID remains `NXA-000010`.
7. Confirm no runtime network dependency was introduced.
8. Record the exact source commit and archive SHA-256.

The **Build platform candidates** workflow is manual. It creates private workflow artifacts; it does not publish a storefront release or declare a milestone stable.
