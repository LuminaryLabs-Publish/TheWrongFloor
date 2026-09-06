const { app, BrowserWindow, Menu, protocol, session, dialog } = require('electron');
const path = require('node:path');
const fs = require('node:fs/promises');
const { resolveGameAsset } = require('./asset-path.cjs');

const smoke = process.argv.includes('--smoke-test');
const smokeOutput = process.env.WRONG_FLOOR_SMOKE_OUTPUT;
if (smoke && !smokeOutput) throw new Error('WRONG_FLOOR_SMOKE_OUTPUT must name the test output directory');
const GAME_URL = 'wrong-floor://game/index.html?standalone=1' + (smoke ? '&review=1' : '');
const GAME_ROOT = path.join(__dirname, '_game');
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.glb': 'model/gltf-binary', '.gltf': 'model/gltf+json', '.wasm': 'application/wasm',
  '.ogg': 'audio/ogg', '.wav': 'audio/wav', '.mp3': 'audio/mpeg',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ico': 'image/x-icon'
};
const CSP = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self'; media-src 'self' blob:; font-src 'self'; worker-src 'self' blob:; object-src 'none'; base-uri 'none'; frame-src 'none'; form-action 'none'";

app.setName('Wrong Floor');
app.setPath('userData', smoke ? path.join(smokeOutput, 'profile') : path.join(app.getPath('appData'), 'Wrong Floor'));
app.enableSandbox();
protocol.registerSchemesAsPrivileged([{ scheme: 'wrong-floor', privileges: {
  standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true
} }]);

let window;
function openWindow() {
  window = new BrowserWindow({
    width: 1440, height: 900, minWidth: 960, minHeight: 600,
    title: 'Wrong Floor', backgroundColor: '#080907', show: false,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true, sandbox: true, nodeIntegration: false,
      webSecurity: true, allowRunningInsecureContent: false,
      webviewTag: false, devTools: !app.isPackaged,
      spellcheck: false, backgroundThrottling: !smoke
    }
  });
  window.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  window.webContents.on('will-navigate', (event, target) => {
    try {
      const url = new URL(target);
      if (url.protocol !== 'wrong-floor:' || url.hostname !== 'game') event.preventDefault();
    } catch { event.preventDefault(); }
  });
  window.webContents.on('will-attach-webview', event => event.preventDefault());
  window.once('ready-to-show', () => { if (!smoke) window.show(); });
  window.on('closed', () => { window = null; });
  window.loadURL(GAME_URL).then(async () => {
    if (!smoke) return;
    try {
      await require('./runtime-check.cjs')(window, smokeOutput);
      app.exit(0);
    } catch(error) {
      await fs.mkdir(smokeOutput, {recursive:true});
      await fs.writeFile(path.join(smokeOutput,'native-error.txt'), String(error.stack || error));
      app.exit(1);
    }
  }).catch(error => {
    dialog.showErrorBox('Wrong Floor could not start', String(error.message));
    app.quit();
  });
}

if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => { if (window) { if (window.isMinimized()) window.restore(); window.focus(); } });
  app.whenReady().then(async () => {
    session.defaultSession.setPermissionRequestHandler((_contents, _permission, callback) => callback(false));
    session.defaultSession.setPermissionCheckHandler(() => false);
    session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
      callback({ cancel: !/^(wrong-floor:|data:|blob:)/.test(details.url) });
    });
    protocol.handle('wrong-floor', async request => {
      if (!['GET', 'HEAD'].includes(request.method)) return new Response('Method not allowed', { status: 405 });
      try {
        const target = resolveGameAsset(GAME_ROOT, request.url);
        const real = await fs.realpath(target);
        const root = await fs.realpath(GAME_ROOT);
        const relative = path.relative(root, real);
        if (relative.startsWith('..' + path.sep) || path.isAbsolute(relative)) return new Response('Forbidden', { status: 403 });
        const bytes = await fs.readFile(real);
        return new Response(request.method === 'HEAD' ? null : bytes, { headers: {
          'Content-Type': MIME[path.extname(real)] || 'application/octet-stream',
          'Content-Security-Policy': CSP,
          'X-Content-Type-Options': 'nosniff',
          'Cache-Control': 'no-store'
        } });
      } catch (error) {
        return new Response('Asset unavailable', { status: error.code === 'ENOENT' ? 404 : 403 });
      }
    });
    Menu.setApplicationMenu(Menu.buildFromTemplate([
      ...(process.platform === 'darwin' ? [{ role: 'appMenu' }] : []),
      { label: 'Game', submenu: [{ role: 'quit' }] },
      { label: 'View', submenu: [{ role: 'togglefullscreen' }] }
    ]));
    openWindow();
    app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) openWindow(); });
  }).catch(error => {
    dialog.showErrorBox('Wrong Floor could not start', String(error.message));
    app.quit();
  });
  app.on('window-all-closed', () => app.quit());
}
