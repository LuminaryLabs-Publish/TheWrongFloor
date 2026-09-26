const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const originalFs = require('original-fs');

module.exports = async function checkRuntime(window, output) {
  const contents = window.webContents, errors = [];
  contents.on('console-message', (event, details) => {
    const message = details && typeof details === 'object' ? details : event;
    if (message.level === 'error' || message.level === 3) errors.push(message.message);
  });
  const run = code => contents.executeJavaScript(code, true);
  async function waitFor(code, timeout = 60000) {
    const until = Date.now() + timeout;
    while (Date.now() < until) {
      if (await run(code)) return;
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error('Native check timed out: ' + code);
  }
  await fs.mkdir(output, { recursive: true });
  await waitFor('Boolean(window.__wrongFloor?.inspect?.().lobby?.descendReady)');
  const intro = await run('({state:__wrongFloor.snapshot(),lobby:__wrongFloor.inspect().lobby})');
  assert.equal(intro.state.mode, 'intro');
  assert.equal(intro.state.elapsed, 0);
  assert.equal(intro.state.displayFloor, 30);
  const point = intro.lobby.descendScreen;
  contents.sendInputEvent({ type: 'mouseDown', x: Math.round(point.x), y: Math.round(point.y), button: 'left', clickCount: 1 });
  contents.sendInputEvent({ type: 'mouseUp', x: Math.round(point.x), y: Math.round(point.y), button: 'left', clickCount: 1 });
  await waitFor('__wrongFloor.snapshot().mode === "running" && __wrongFloor.snapshot().round.floor === 29 && __wrongFloor.snapshot().opened === true', 15000);
  const handoff = await run('__wrongFloor.snapshot()');
  assert.ok(handoff.elapsed < 1);
  assert.equal(handoff.round.floor, 29);
  await new Promise(resolve => setTimeout(resolve, 300));
  contents.sendInputEvent({ type: 'keyDown', keyCode: 'Space' });
  await waitFor('__wrongFloor.snapshot().mistakes === 1', 5000);
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
  await fs.writeFile(path.join(output, 'native-floor30.png'), (await contents.capturePage()).toPNG());
  const archive = path.join(process.resourcesPath, 'app.asar');
  const archiveSha256 = originalFs.existsSync(archive) ? createHash('sha256').update(originalFs.readFileSync(archive)).digest('hex') : null;
  const report = {
    platform: process.platform, arch: process.arch, electron: process.versions.electron, archiveSha256,
    passed: true,
    checks: ['custom-protocol','floor30-descend','floor29-handoff','keyboard-door-closure','keyboard-pause','renderer-isolation','quit-label'],
    intro, handoff, closure, errors
  };
  await fs.writeFile(path.join(output, 'native-validation.json'), JSON.stringify(report, null, 2) + '\n');
  return report;
};
