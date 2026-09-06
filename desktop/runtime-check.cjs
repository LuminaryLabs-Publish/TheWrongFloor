const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const originalFs = require('original-fs');

module.exports = async function checkRuntime(window, output) {
  const contents = window.webContents, errors = [];
  contents.on('console-message', (event, details) => { const message = details && typeof details === 'object' ? details : event; if (message.level === 'error' || message.level === 3) errors.push(message.message); });
  const run = code => contents.executeJavaScript(code, true);
  async function waitFor(code, timeout = 60000) {
    const until = Date.now() + timeout;
    while (Date.now() < until) { if (await run(code)) return; await new Promise(resolve => setTimeout(resolve, 100)); }
    throw new Error('Native check timed out: ' + code);
  }
  await fs.mkdir(output, { recursive: true });
  await waitFor('Boolean(window.__wrongFloor && !document.querySelector("#play-button").disabled)');
  await run('__wrongFloor.start({seed:"native-windows-smoke"})');
  await waitFor('__wrongFloor.snapshot().roundTime > 1');
  const initial = await run('__wrongFloor.inspect()');
  assert.equal(initial.audio.loaded, 8);
  assert.deepEqual(initial.audio.failures, []);
  assert.ok(initial.renderer.triangles > 100);
  await fs.writeFile(path.join(output, 'native-gameplay.png'), (await contents.capturePage()).toPNG());
  contents.sendInputEvent({ type: 'keyDown', keyCode: 'Space' });
  await waitFor('__wrongFloor.snapshot().mistakes === 1');
  contents.sendInputEvent({ type: 'keyUp', keyCode: 'Space' });
  const closure = await run('__wrongFloor.snapshot()');
  assert.equal(closure.outcome, 'false-alarm');
  contents.sendInputEvent({ type: 'keyDown', keyCode: 'Escape' });
  contents.sendInputEvent({ type: 'keyUp', keyCode: 'Escape' });
  await waitFor('__wrongFloor.snapshot().mode === "paused"');
  const paused = await run('__wrongFloor.snapshot().elapsed');
  await new Promise(resolve => setTimeout(resolve, 300));
  assert.equal(await run('__wrongFloor.snapshot().elapsed'), paused);
  assert.equal(await run('location.protocol'), 'wrong-floor:');
  assert.equal(await run('typeof window.require'), 'undefined');
  assert.ok(await run('[...document.querySelectorAll("[data-action=exit]")].every(b=>b.textContent==="Quit game")'));
  assert.deepEqual(errors, []);
  const archive = path.join(process.resourcesPath, 'app.asar');
  const archiveSha256 = originalFs.existsSync(archive) ? createHash('sha256').update(originalFs.readFileSync(archive)).digest('hex') : null;
  const report = { platform: process.platform, arch: process.arch, electron: process.versions.electron, archiveSha256,
    passed: true, checks: ['custom-protocol', 'WebGL', 'all-eight-audio-assets', 'keyboard-door-closure', 'keyboard-pause', 'renderer-isolation', 'quit-label'], initial, closure, errors };
  await fs.writeFile(path.join(output, 'native-validation.json'), JSON.stringify(report, null, 2) + '\n');
  return report;
};
