# Install and play Wrong Floor

Version 0.2.0 is available as portable Windows and Linux applications and a Web build. Desktop ZIPs include the runtime. macOS is deferred.

## Windows

1. Download `wrong-floor-0.2.0-win32-x64.zip` from the supplied release files.
2. Right-click the ZIP and select **Extract All**.
3. Open the extracted folder and double-click **wrong-floor.exe**.
4. Keep the executable and its accompanying files together. Create a shortcut to the executable if desired.

The packaged Windows application passed its native startup, audio, keyboard, and pause checks. Installation consists of extracting the portable folder; there is no setup wizard.

## Linux

Download `wrong-floor-0.2.0-linux-x64.zip`. Open a terminal in the download directory and run:

```sh
unzip wrong-floor-0.2.0-linux-x64.zip -d wrong-floor
cd wrong-floor
chmod +x wrong-floor
./wrong-floor
```

Keep all extracted files together. This x64 Linux package has been built and archive-verified; gameplay on a native Linux machine remains unverified.

## Web players

Open the game's hosted address in a browser, then select **Begin descent**. The Web version runs in the browser and requires no desktop installation. Keyboard controls are listed below.

On the development machine, the current address is [http://127.0.0.1:4173/game/](http://127.0.0.1:4173/game/). That address requires the local server below. For other players, upload the Web build to a static website host and share that host's public address.

## Run the Web build locally from this repository

Install Node.js **22.12.0 or later**. From PowerShell:

```powershell
cd C:\Github\TheWrongFloor
node scripts/build-site.mjs
node scripts/serve.mjs
```

Open [http://127.0.0.1:4173/game/](http://127.0.0.1:4173/game/). Keep the terminal running while playing; Ctrl+C stops the server. The Web build and local server use Node's built-in modules, so these commands do not require `npm install`.

If the server is already running, open the address directly. After editing the game, repeat the build command to refresh `dist/`.

## Host the standalone Web ZIP

Extract `wrong-floor-0.2.0-web.zip`. Its top-level `index.html` is the game entry. Upload **all** extracted files to a static HTTP(S) host, preserving the folders. For a local preview with Python 3 installed, run this inside the extracted directory:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/). The game uses JavaScript modules and workers, so it must be served over HTTP(S) rather than opened by double-clicking `index.html`.

## Controls

- WASD / arrow keys: look around.
- Hold Space: close the elevator doors until they seal.
- Enter: recenter the view.
- Escape: pause.
- Gamepad: left stick to look, A to close, B to recenter, Start to pause.

Wait through normal floors. Hold Close when something is wrong. Three false alarms end the run. Practice and comfort settings are available from the title screen.

The current files are development candidates. See [candidate review](CANDIDATE_REVIEW.md) for commercial audio clearance and remaining platform verification.
