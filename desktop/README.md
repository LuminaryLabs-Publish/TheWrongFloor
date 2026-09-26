# Wrong Floor desktop candidate

This directory packages the exact `game/` vertical slice as a self-contained Electron desktop application. The browser game remains the source of truth. This is a desktop candidate build system, not a Steam release or a claim that Steam review has passed.

## Build

Use Node 22.12 or newer. From this directory:

```sh
npm ci
npm test
npm start
npm run package:linux
npm run package:windows
npm run package:mac
npm run smoke
```

`npm start` installs the pinned Electron runtime if missing, copies the current game into `.generated/app` and opens it. Packaging writes portable application directories into `dist/`; these directories contain the executable plus all required Electron resources. Distribute the entire directory, not just the executable. Linux, Windows, and macOS candidates should be built and tested on their actual target OS. Cross-packaging does not verify the target OS.

Run as a normal desktop user. No `--no-sandbox` or browser-security-disabling flags are shipped. A managed environment that prevents Chromium process sockets cannot validate the desktop runtime; use a compatible desktop test machine.

The game version comes from `game.json`. `build-manifest.json` records source commit, dirty state, and SHA-256/size of every staged game file. Rebuild after every game change. Generated copies, dependencies, and executable packages are ignored by Git.

## Native smoke

After `npm run stage`, `npm run smoke` launches the staged Electron app in review mode, activates the physical Floor 30 DESCEND control through native Electron input, verifies the Floor 29 handoff, closes a safe floor to prove real keyboard input, verifies pause, protocol isolation, Quit labeling, and writes evidence under `_review/native/`.

This is a runtime sanity check, not a substitute for a full native-device playthrough.

## Runtime boundary

The renderer uses `wrong-floor://game/`, a standard secure custom protocol with persistent browser storage. Only packaged game files are served. Encoded traversal, unexpected origins, symlinks outside the game, new windows, webviews, external navigation, network requests, and permissions are blocked. Context isolation, renderer sandboxing, and web security remain enabled; Node integration remains disabled. There is no renderer IPC bridge or preload script.

The desktop launch includes `?standalone=1`. The game should use that flag to label its exit action **Quit Game** and invoke `window.close()` instead of linking to the browser library. The native Game menu provides Quit and the View menu provides fullscreen. On platforms with an auto-hidden menu, press Alt to show it.

Settings and scores use the game's existing localStorage under Electron's per-user `Wrong Floor` data directory. The packaged game files stay installed; temporary-file removal is the web launcher's responsibility. Cloud saves, achievements, Steam overlay integration, crash reporting, and automatic updates are not claimed.

## Verification required before distributing

- Confirm the source manifest matches the final committed game and reports `dirty: false`.
- Run a complete 270-second scored game after the untimed Floor 30 opening, tutorial, every failure, pause/focus loss, controller reconnect, retry, and quit.
- Test fullscreen transitions, resolution/DPI combinations, audio devices, muted audio, and accessibility options.
- Restart the packaged executable and confirm settings and personal bests persist.
- Verify no runtime network dependency by playing with network access unavailable.
- Test Linux, Windows, and macOS packages where supported on their actual supported OS/hardware; record graphics renderer and frame times.
- Review the art, audio, and game with human playtesters. A passing package build is not quality evidence.
- Supply a final application icon and reviewed branding before commercial distribution.

## Steam publication gates

No Steam account, AppID, depot ID, publisher credentials, signing identity, or actual target hardware is configured here. No Steam upload or submission is performed by these scripts.

A publisher must complete Steamworks onboarding and product setup, provide store assets and accurate content disclosures, configure depots/launch options, upload tested builds, and pass Valve's store/build review. Steam Direct describes a per-product fee and release timing requirements, including the fee waiting period and a public Coming Soon page period. Confirm these requirements in the publisher's live dashboard before scheduling release.

Keep the product in candidate status until playable quality, target-device checks, and the applicable Steam release gates pass. A generated executable alone cannot establish Steam readiness.

Official references checked during implementation:

- [Electron security](https://www.electronjs.org/docs/latest/tutorial/security)
- [Electron custom protocols](https://www.electronjs.org/docs/latest/api/protocol)
- [Electron Packager options](https://electron.github.io/packager/main/interfaces/Options.html)
- [Steam Direct onboarding](https://partner.steamgames.com/steamdirect/)
- [Steam release options](https://partner.steamgames.com/doc/store/types)
