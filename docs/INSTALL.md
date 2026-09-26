# Install and run Wrong Floor

Wrong Floor is developed from `main`. Historical milestone branches are frozen references and are not development lanes.

## Web

```sh
npm ci
npm test
npm run build
npm run serve
```

The local server exposes the current game from `dist/game/`.

## Desktop development

```sh
npm ci --prefix desktop
npm --prefix desktop run start
```

The Electron shell stages the exact current `game/` tree before launch.

## Candidate packages

```sh
npm run package:web
npm run package:windows
npm run package:linux
npm run package:mac
```

Desktop packaging requires the matching host support expected by Electron Packager. Candidate archives are written under `releases/` and include checksums/manifests. Building a package does not mean it has passed native-device review or store certification.
