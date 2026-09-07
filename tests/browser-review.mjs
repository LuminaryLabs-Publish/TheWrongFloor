import {reviewAudio} from './audio-review.mjs';
import {FLOOR_PROFILES} from '../game/src/floors/catalog.mjs';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { mkdir, writeFile, readFile } from 'node:fs/promises';

/** Uses the repository smoke runner's CDP transport and localhost server. */
export async function runWrongFloorBrowserChecks({ call, event, evaluate, waitFor, listeners, baseUrl, delay }) {
  const provenance={commit:process.env.GITHUB_SHA??null,manifestSha256:createHash('sha256').update(await readFile('MIGRATION-MANIFEST.json')).digest('hex'),definitionSha256:createHash('sha256').update(await readFile('docs/rules.md')).digest('hex'),startedAt:new Date().toISOString()};
  const reviewDir = process.env.WRONG_FLOOR_REVIEW_DIR ? path.resolve(process.env.WRONG_FLOOR_REVIEW_DIR) : null;
  const smokeOnly = process.env.WRONG_FLOOR_SMOKE_ONLY === '1';
  if (reviewDir) await mkdir(reviewDir, { recursive: true });
  const { targetId } = await call('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await call('Target.attachToTarget', { targetId, flatten: true });
  const findings = [], requests = [], screenshots = [], interactions = [];
  const clipRequested = Boolean(reviewDir && process.env.WRONG_FLOOR_FULL_RUN === '1');
  const clip = { schema: 'wrong-floor-silent-gameplay-capture/1', requested: clipRequested, status: clipRequested ? 'pending' : 'not-requested', audio: false, humanReview: false, source: 'CDP screencast of actual real-time gameplay', targetWallSeconds: 15, maxFrames: 100, maxBase64Bytes: 12 * 1024 * 1024, frames: [], received: 0, discarded: 0, base64Bytes: 0, errors: [] };
  let clipActive = false, clipStartedAt = 0, clipLastTimestamp = -Infinity, clipFlush = null;
  const clipBuffer = [];
  function receiveClipFrame(params) {
    // ACK before filtering or buffering. No image encoding or filesystem work
    // occurs in this listener, and control dispatch never awaits frame capture.
    void call('Page.screencastFrameAck', { sessionId: params.sessionId }, sessionId).catch(error => clip.errors.push(`Frame ACK: ${error.message}`));
    if (!clipActive) return;
    clip.received++;
    const timestamp = params.metadata?.timestamp;
    if (!Number.isFinite(timestamp) || timestamp <= clipLastTimestamp || timestamp - clipLastTimestamp < 1 / 6 || clipBuffer.length >= clip.maxFrames || clip.base64Bytes + params.data.length > clip.maxBase64Bytes) { clip.discarded++; return; }
    clipLastTimestamp = timestamp;
    clip.base64Bytes += params.data.length;
    const filename = `frame-${String(clipBuffer.length).padStart(4, '0')}.jpg`;
    clip.frames.push({ filename, timestamp, receivedWallSeconds: (Date.now() - clipStartedAt) / 1000, metadata: params.metadata });
    clipBuffer.push({ filename, data: params.data });
  }
  async function startClip(state) {
    if (!clipRequested || clip.status !== 'pending') return;
    clip.status = 'recording'; clipActive = true; clipStartedAt = Date.now();
    clip.startedAt = new Date(clipStartedAt).toISOString();
    clip.startGame = { elapsed: state.elapsed, roundIndex: state.roundIndex, entity: state.round.entity, variant: state.round.variant };
    try { await call('Page.startScreencast', { format: 'jpeg', quality: 60, maxWidth: 960, maxHeight: 600, everyNthFrame: 3 }, sessionId); }
    catch (error) { clipActive = false; clip.status = 'failed'; clip.errors.push(`Screencast unavailable: ${error.message}`); }
  }
  async function flushClip() {
    const directory = path.join(reviewDir, 'gameplay-frames');
    await mkdir(directory, { recursive: true });
    for (const frame of clipBuffer) { await writeFile(path.join(directory, frame.filename), Buffer.from(frame.data, 'base64')); frame.data = ''; }
    clipBuffer.length = 0;
    const first = clip.frames[0]?.timestamp ?? 0;
    clip.sourceTimelineSeconds = clip.frames.length > 1 ? clip.frames.at(-1).timestamp - first : 0;
    let concat = 'ffconcat version 1.0\n';
    clip.frames.forEach((frame, index) => {
      frame.relativeSeconds = frame.timestamp - first;
      concat += `file '${frame.filename}'\n`;
      if (index + 1 < clip.frames.length) concat += `duration ${(clip.frames[index + 1].timestamp - frame.timestamp).toFixed(6)}\n`;
    });
    // Last frame is an explicit endpoint. Parent encoding can trim to
    // sourceTimelineSeconds to avoid the image demuxer's final-frame duration.
    if (clip.frames.length) await writeFile(path.join(directory, 'frames.ffconcat'), concat);
    clip.status = clip.errors.length ? 'failed' : clip.frames.length >= 2 && clip.sourceTimelineSeconds >= 10 ? 'complete' : 'partial';
    clip.assembly = { input: 'gameplay-frames/frames.ffconcat', trimSeconds: clip.sourceTimelineSeconds, timing: 'Durations are differences between original monotonic CDP timestamps; retain variable frame timing.', label: 'Silent actual real-time gameplay capture. No human or audio-quality review.' };
    await writeFile(path.join(reviewDir, 'gameplay-capture.json'), `${JSON.stringify(clip, null, 2)}\n`);
  }
  async function stopClip(state = null) {
    if (!clipRequested || clipFlush) return;
    if (clipActive) {
      clipActive = false;
      try { await call('Page.stopScreencast', {}, sessionId); }
      catch (error) { clip.errors.push(`Stop screencast: ${error.message}`); }
    }
    clip.endedAt = new Date().toISOString();
    clip.wallSeconds = clipStartedAt ? (Date.now() - clipStartedAt) / 1000 : 0;
    if (state) clip.endGame = { elapsed: state.elapsed, roundIndex: state.roundIndex, mode: state.mode };
    // Disk flushing runs independently of the input polling loop. It is joined
    // after gameplay; errors are retained for the final evidence gate.
    clipFlush = flushClip().catch(error => { clip.status = 'failed'; clip.errors.push(`Frame export: ${error.message}`); });
  }
  const capture = message => {
    if (message.sessionId !== sessionId) return;
    if (message.method === 'Page.screencastFrame') receiveClipFrame(message.params);
    if (message.method === 'Runtime.exceptionThrown') findings.push({ level: 'error', message: message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text });
    if (message.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(message.params.type)) findings.push({ level: message.params.type, message: message.params.args.map(arg => arg.value || arg.description).join(' ') });
    if (message.method === 'Log.entryAdded' && ['error', 'warning'].includes(message.params.entry.level)) findings.push({ level: message.params.entry.level, message: message.params.entry.text, url: message.params.entry.url });
    if (message.method === 'Network.requestWillBeSent') requests.push(message.params.request.url);
  };
  listeners.add(capture);
  const run = async expression => {
    let timer;
    try {
      return await Promise.race([
        evaluate(sessionId, expression),
        new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(`Wrong Floor Runtime.evaluate exceeded 180 seconds: ${expression.slice(0, 120)}`)), 180000); }),
      ]);
    } finally { clearTimeout(timer); }
  };
  const wait = (expression, timeout = 20000) => waitFor(sessionId, expression, timeout);
  const key = async (code, down) => {
    const keyValue = code === 'Space' ? ' ' : code;
    await call('Input.dispatchKeyEvent', { type: down ? 'keyDown' : 'keyUp', code, key: keyValue, windowsVirtualKeyCode: code === 'Space' ? 32 : code === 'Escape' ? 27 : 13 }, sessionId);
  };
  const tap = async code => { await key(code, true); await key(code, false); };
  const screenshot = async filename => {
    if (!reviewDir) return;
    const { data } = await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }, sessionId);
    await writeFile(path.join(reviewDir, filename), Buffer.from(data, 'base64'));
    screenshots.push(filename);
  };
  const click = async selector => {
    const point = await run(`(()=>{const r=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`);
    await call('Input.dispatchMouseEvent', { type: 'mousePressed', ...point, button: 'left', clickCount: 1 }, sessionId);
    await call('Input.dispatchMouseEvent', { type: 'mouseReleased', ...point, button: 'left', clickCount: 1 }, sessionId);
  };
  let report, fullSession = null, performancePreflight = null;
  try {
    await Promise.all(['Page.enable', 'Runtime.enable', 'Log.enable', 'Network.enable'].map(method => call(method, {}, sessionId)));
    await call('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false }, sessionId);
    const loaded = event('Page.loadEventFired', sessionId, 30000);
    await call('Page.navigate', { url: `${baseUrl}/game/?review=1&skipIntro=1` }, sessionId);
    await loaded;
    await wait('window.__wrongFloor && !document.querySelector("#fatal-error")?.textContent', 30000);
    const webgl = await run(`(()=>{const c=document.querySelector('#scene');const gl=c.getContext('webgl2');const debug=gl?.getExtension('WEBGL_debug_renderer_info');return{width:c.width,height:c.height,webgl2:!!gl,contextLost:gl?.isContextLost(),version:gl?.getParameter(gl.VERSION),driver:{debugExtensionAvailable:!!debug,vendor:debug?gl.getParameter(debug.UNMASKED_VENDOR_WEBGL):null,renderer:debug?gl.getParameter(debug.UNMASKED_RENDERER_WEBGL):null,maskedVendor:gl?.getParameter(gl.VENDOR),maskedRenderer:gl?.getParameter(gl.RENDERER)},layout:{width:innerWidth,height:innerHeight,scrollWidth:document.documentElement.scrollWidth,scrollHeight:document.documentElement.scrollHeight},inspection:__wrongFloor.inspect()}})()`);
    assert.equal(webgl.inspection.lobby.asset,'entrance-lobby','authored entrance loaded');
    assert.equal(webgl.webgl2, true, 'game has a real WebGL2 renderer');
    assert.equal(webgl.contextLost, false, 'WebGL context is live');
    assert.ok(webgl.width >= 640 && webgl.height >= 400, 'renderer has a useful drawing buffer');
    assert.ok(webgl.inspection.renderer?.triangles > 0, 'actual triangles were rendered');
    assert.ok(webgl.layout.scrollWidth <= webgl.layout.width && webgl.layout.scrollHeight <= webgl.layout.height, 'game fits desktop viewport');
    await screenshot('00-title.png');
    for(const [width,height] of [[1280,540],[3440,1440],[390,844]]){
      await call('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false},sessionId);
      await delay(150);
      const fit=await run(`(()=>{const r=document.querySelector('#play-button').getBoundingClientRect();return{scroll:document.documentElement.scrollWidth>innerWidth||document.documentElement.scrollHeight>innerHeight,visible:r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight}})()`);
      assert.equal(fit.scroll,false);assert.equal(fit.visible,true,'hold button fits '+width+'x'+height);
      await screenshot('00-title-'+width+'x'+height+'.png');
      await click('.seed-details summary');
      const seedFit=await run(`(()=>{const input=document.querySelector('#seed-input'),r=input.getBoundingClientRect();return{open:document.querySelector('.seed-details').open,visible:r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight};})()`);
      assert.equal(seedFit.open,true);assert.equal(seedFit.visible,true,'seed input fits '+width+'x'+height);
      await screenshot('00-descent-record-'+width+'x'+height+'.png');
      await click('.seed-details summary');
    }
    await call('Emulation.setDeviceMetricsOverride',{width:1280,height:800,deviceScaleFactor:1,mobile:false},sessionId);


    // This uses trusted browser input, not the deterministic review controls.
    await key('Space',true);
    await delay(250);
    await key('Space',false);
    await wait('__wrongFloor.lobby().holdProgress === 0');
    assert.equal(await run('__wrongFloor.snapshot().mode'),'title','short hold does not start');
    await key('Space',true);
    await wait('__wrongFloor.lobby().accepted',30000);
    await key('Space',false);
    await wait('__wrongFloor.snapshot().mode === "running" && __wrongFloor.snapshot().roundTime > 1.0', 60000);
    const beforeClose = await run('__wrongFloor.snapshot()');
    assert.equal(beforeClose.round.danger, false, 'first floor establishes a safe baseline');
    await screenshot('01-normal-floor.png');
    await key('Space', true);
    await wait('__wrongFloor.snapshot().mistakes === 1');
    await key('Space', false);
    const afterClose = await run('__wrongFloor.snapshot()');
    assert.equal(afterClose.outcome, 'false-alarm');
    assert.equal(afterClose.door.openness, 0);
    interactions.push({ action: 'Hold Space entry, real Space closure and release', before: beforeClose, after: afterClose });
    await tap('Escape');
    await wait('__wrongFloor.snapshot().mode === "paused"');
    const paused = await run('__wrongFloor.snapshot()');
    await delay(400);
    assert.deepEqual(await run('__wrongFloor.snapshot()'), paused, 'pause freezes the complete game snapshot');
    await screenshot('02-paused.png');
    await tap('Escape');
    await wait('__wrongFloor.snapshot().mode === "running"');
    interactions.push({ action: 'Real Escape pause and resume', pausedAt: paused.elapsed });

    await wait('__wrongFloor.inspect().audio.state === \'running\'',10000);
    const audioState=await run('__wrongFloor.inspect().audio');assert.equal(audioState.state,'running');assert.equal(audioState.loaded,8);assert.deepEqual(audioState.failures,[]);
    if (smokeOnly) {
      const externalRequests = requests.filter(url => /^https?:/.test(url) && new URL(url).origin !== new URL(baseUrl).origin);
      assert.deepEqual(externalRequests, [], 'game runtime uses only bundled local resources');
      assert.deepEqual(findings.filter(f => f.level === 'error'), [], `Wrong Floor emitted errors: ${JSON.stringify(findings)}`);
      report = {
        schema: 'wrong-floor-browser-smoke/1', provenance, viewport: { width: 1280, height: 800 },
        webgl, interactions, screenshots, requests: [...new Set(requests)], findings,
        checks: { actualWebGL: true, renderedTriangles: true, realKeyboardClosure: true, realKeyboardPause: true, noExternalRuntimeDependencies: true, noBrowserErrors: true }
      };
      if (reviewDir) await writeFile(path.join(reviewDir, 'validation.json'), `${JSON.stringify(report, null, 2)}\n`);
      console.log('browser Wrong Floor smoke ok: WebGL, rendered geometry, keyboard closure and pause');
      return report;
    }

    // Measure the actual default render profile before spending several minutes
    // on a full session. Preserve this diagnostic, then still capture the
    // deterministic trace and all encounter images before enforcing the gate.
    const performanceBefore = await run('({state:__wrongFloor.snapshot(),inspection:__wrongFloor.inspect()})');
    const performanceStarted = Date.now();
    await delay(10000);
    const performanceAfter = await run('({state:__wrongFloor.snapshot(),inspection:__wrongFloor.inspect()})');
    const performanceWallSeconds = (Date.now() - performanceStarted) / 1000;
    const startFrame = performanceBefore.inspection.renderer?.frame;
    const endFrame = performanceAfter.inspection.renderer?.frame;
    const renderedFrames = Number.isFinite(startFrame) && Number.isFinite(endFrame) && endFrame >= startFrame ? endFrame - startFrame : null;
    const averageRenderedFPS = renderedFrames === null ? null : renderedFrames / performanceWallSeconds;
    performancePreflight = { schema: 'wrong-floor-performance-preflight/1', profile: 'Application default medium settings; no test quality override', wallSeconds: performanceWallSeconds, startFrame: startFrame ?? null, endFrame: endFrame ?? null, renderedFrames, averageRenderedFPS, activeSecondsAdvanced: performanceAfter.state.elapsed - performanceBefore.state.elapsed, minimumRenderedFPS: 10, driver: webgl.driver, before: performanceBefore, after: performanceAfter, passed: averageRenderedFPS !== null && averageRenderedFPS >= 10, interpretation: 'Instrumented browser rendering measurement; does not establish cabinet performance or human quality.' };
    if (reviewDir) await writeFile(path.join(reviewDir, 'performance-preflight.json'), `${JSON.stringify(performancePreflight, null, 2)}\n`);
    await screenshot('performance-preflight.png');

    // Separate deterministic game proof: explicit active-time stepping, not real-time footage.
    await reviewAudio(run,reviewDir);
    const complete = await run(`(async()=>{
      await __wrongFloor.start({seed:'browser-complete',manual:true});
      const rounds=[];
      for(let i=0;i<30;i++){
        const r=__wrongFloor.snapshot().round;
        if(r.danger){
          __wrongFloor.advance(r.clueAt+.1,{close:false});
          __wrongFloor.advance(1.2,{close:true});
        }else __wrongFloor.advance(7.3,{close:false});
        const result=__wrongFloor.snapshot();
        rounds.push({roundIndex:result.roundIndex,round:result.round,elapsed:result.elapsed,door:result.door,outcome:result.outcome,mode:result.mode,score:result.score});
        if(result.mode!=='running')break;
        __wrongFloor.advance(Math.max(0,10-result.roundTime),{close:false});
      }
      return {rounds,final:__wrongFloor.snapshot(),inspection:__wrongFloor.inspect()};
    })()`);
    assert.equal(complete.rounds.length, 30, 'browser exercised all 30 stops');
    assert.equal(complete.inspection.rooms.active,'exit-lobby');assert.equal(complete.inspection.rooms.cabin,'elevator-interior');assert.deepEqual(complete.inspection.rooms.failures,{});
    assert.equal(complete.final.mode, 'won'); assert.equal(complete.final.elapsed, 300);
    assert.equal(complete.final.correct, 30); assert.equal(complete.final.mistakes, 0);
    assert.equal(new Set(complete.rounds.filter(r => r.round.danger).map(r => `${r.round.entity}:${r.round.variant}`)).size, 18);
    assert.ok(complete.rounds.every(r => r.outcome === 'sealed' || r.outcome === 'accepted'));
    await screenshot('03-escape.png');

    const failures = await run(`(async()=>{
      await __wrongFloor.start({seed:'browser-no-input',manual:true});
      __wrongFloor.advance(300,{close:false});
      const intrusion=__wrongFloor.snapshot();
      await __wrongFloor.start({seed:'browser-false-alarms',manual:true});
      for(let i=0;i<3;i++){
        __wrongFloor.advance(.81,{close:false});
        __wrongFloor.advance(1.2,{close:true});
        const s=__wrongFloor.snapshot();if(s.mode!=='running')break;
        __wrongFloor.advance(10-s.roundTime,{close:false});
      }
      return {intrusion,shutdown:__wrongFloor.snapshot()};
    })()`);
    assert.equal(failures.intrusion.failureReason, 'intrusion');
    assert.equal(failures.shutdown.failureReason, 'shutdown');
    assert.equal(failures.shutdown.mistakes, 3);
    await screenshot('04-shutdown.png');

    const variants = [];
    const families = ['guest', 'tall', 'ceiling', 'porter', 'shadow', 'mannequin', 'warden', 'weaver', 'mourner'];
    for (let familyIndex = 0; familyIndex < families.length; familyIndex++) {
      for (const variant of [0, 1]) {
        const specification = { entity: families[familyIndex], variant, environment: ['office', 'hotel', 'basement'][(familyIndex + variant) % 3], seed: `review-${families[familyIndex]}-${variant}`, roundTime: 3.5, clueAt: 1.5, arrivalAt: 5.0 };
        await run(`__wrongFloor.preview(${JSON.stringify(specification)})`);
        await run('new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))');
        const inspection = await run('__wrongFloor.inspect()');
        assert.ok(inspection.renderer?.triangles > 0, `${specification.entity}:${variant} rendered geometry`);
        assert.ok(inspection.actors.some(actor=>actor.model===inspection.characters.roles[specification.entity]), `${specification.entity}:${variant} uses its assigned GLB`);
        variants.push({ ...specification, inspection });
        await screenshot(`entity-${specification.entity}-${variant}.png`);
      }
    }
    for(const profile of FLOOR_PROFILES){await run(`__wrongFloor.preview(${JSON.stringify({entity:'warden',profile:profile.id,seed:'room-'+profile.id,roundTime:2.5})})`);const info=await run('__wrongFloor.inspect()');assert.equal(info.profile,profile.id);assert.equal(info.rooms.active,profile.id);assert.equal(info.rooms.cabin,'elevator-interior');await screenshot('floor-'+profile.id+'.png');}
    await run('__wrongFloor.stopPreview()');
    if (reviewDir) await writeFile(path.join(reviewDir, 'preflight-evidence.json'), `${JSON.stringify({ provenance, webgl, performancePreflight, complete, failures, variants, screenshots, findings }, null, 2)}\n`);
    if (!performancePreflight.passed) clip.skipReason = 'Real-time full session skipped because the default-profile performance preflight failed.';
    assert.ok(performancePreflight.passed, `Wrong Floor default-profile performance preflight failed: ${JSON.stringify(performancePreflight)}. Full 300-second session was not attempted; retained manual trace and encounter images are not real-time performance proof.`);

    if (process.env.WRONG_FLOOR_FULL_RUN === '1') {
      // This is a wall-clock browser session. It must never invoke advance(),
      // virtual time, hidden timer manipulation, or the manual-clock option.
      await run("__wrongFloor.start({seed:'browser-realtime-full-session'})");
      const rendererStartFrame = await run('__wrongFloor.inspect().renderer?.frame ?? null');
      const started = Date.now();
      let holding = false, lastSampleAt = -1;
      const resolved = new Set();
      fullSession = { schema: 'wrong-floor-realtime-session/1', seed: 'browser-realtime-full-session', control: 'trusted CDP keyboard input', clock: 'application requestAnimationFrame; no time manipulation', startedAt: new Date(started).toISOString(), wallSeconds: 0, rendering: { startFrame: rendererStartFrame, endFrame: null, renderedFrames: null, averageRenderedFPS: null, measuredWallSeconds: null, driver: webgl.driver, method: 'Delta of Three.js renderer.info.render.frame divided by wall seconds across the real-time session; includes screenshot/screencast instrumentation overhead.' }, samples: [], rounds: [], final: null, completed: false };
      try {
        while (Date.now() - started < 900000) {
          const observed = await run('({state:__wrongFloor.snapshot(),rendererFrame:__wrongFloor.inspect().renderer?.frame??null})');
          const state = observed.state;
          fullSession.final = state;
          fullSession.wallSeconds = (Date.now() - started) / 1000;
          fullSession.rendering.endFrame = observed.rendererFrame;
          fullSession.rendering.measuredWallSeconds = fullSession.wallSeconds;
          if (Number.isFinite(rendererStartFrame) && Number.isFinite(observed.rendererFrame) && observed.rendererFrame >= rendererStartFrame && fullSession.wallSeconds > 0) {
            fullSession.rendering.renderedFrames = observed.rendererFrame - rendererStartFrame;
            fullSession.rendering.averageRenderedFPS = fullSession.rendering.renderedFrames / fullSession.wallSeconds;
          }
          if (state.elapsed - lastSampleAt >= 0.25 || state.mode !== 'running') {
            fullSession.samples.push({ wallSeconds: fullSession.wallSeconds, rendererFrame: observed.rendererFrame, elapsed: state.elapsed, roundIndex: state.roundIndex, roundTime: state.roundTime, mode: state.mode, outcome: state.outcome, doorOpenness: state.door.openness, clueVisible: state.clueVisible, threatProgress: state.threatProgress, mistakes: state.mistakes, score: state.score });
            lastSampleAt = state.elapsed;
          }
          const shouldHold = state.mode === 'running' && state.round.danger && state.clueVisible && !state.resolved;
          if (shouldHold !== holding) {
            await key('Space', shouldHold);
            holding = shouldHold;
          }
          if (clipRequested && clip.status === 'pending' && state.mode === 'running' && state.round.danger) await startClip(state);
          if (clipRequested && (clipActive && (Date.now() - clipStartedAt >= 15000 || clipBuffer.length >= clip.maxFrames || clip.base64Bytes >= clip.maxBase64Bytes) || clip.status === 'failed' && !clipFlush)) await stopClip(state);
          if (state.resolved && !resolved.has(state.roundIndex)) {
            resolved.add(state.roundIndex);
            fullSession.rounds.push({ roundIndex: state.roundIndex, round: state.round, elapsed: state.elapsed, outcome: state.outcome, mistakes: state.mistakes, score: state.score });
            // Capture only after resolution so image work cannot consume the
            // player's current response window.
            if ((state.roundIndex + 1) % 5 === 0) await screenshot(`full-session-round-${String(state.roundIndex + 1).padStart(2, '0')}.png`);
            if (reviewDir) await writeFile(path.join(reviewDir, 'full-session-trace.json'), `${JSON.stringify(fullSession, null, 2)}\n`);
          }
          if (state.mode === 'won' || state.mode === 'lost') break;
          assert.equal(state.mode, 'running', 'real-time session must remain running without synthetic pauses');
          await delay(100);
        }
        assert.equal(fullSession.final.mode, 'won', `real-time full session did not escape: ${JSON.stringify(fullSession.final)}`);
        assert.equal(fullSession.final.elapsed, 300, 'real-time session must accumulate 300 active seconds');
        assert.equal(fullSession.rounds.length, 30, 'real-time session must observe all 30 resolved rounds');
        assert.equal(fullSession.final.correct, 30);
        assert.equal(fullSession.final.mistakes, 0);
        assert.ok(fullSession.wallSeconds >= 299, 'full session cannot be accelerated');
        assert.ok(fullSession.rounds.every(round => ['sealed', 'accepted'].includes(round.outcome)));
        fullSession.completed = true;
        await delay(1800);
        await screenshot('full-session-escape.png');
        console.log(`browser Wrong Floor real-time session ok: ${fullSession.wallSeconds.toFixed(1)} wall seconds, 300 active seconds, 30 correct rounds`);
      } finally {
        if (holding) await key('Space', false);
        await stopClip(fullSession.final);
        if (clipFlush) await clipFlush;
        fullSession.silentGameplayCapture = clip;
        fullSession.endedAt = new Date().toISOString();
        if (reviewDir) await writeFile(path.join(reviewDir, 'full-session-trace.json'), `${JSON.stringify(fullSession, null, 2)}\n`);
      }
    }

    const externalRequests = requests.filter(url => /^https?:/.test(url) && new URL(url).origin !== new URL(baseUrl).origin);
    assert.deepEqual(externalRequests, [], 'game runtime uses only bundled local resources');
    assert.deepEqual(findings.filter(f => f.level === 'error'), [], `Wrong Floor emitted errors: ${JSON.stringify(findings)}`);
    report = { schema: 'wrong-floor-browser-review/1', provenance, captureKind: fullSession ? 'real-time-input-session-plus-screenshots-and-manual-trace' : 'screenshots-and-manual-simulation-trace', realTimeFullRunVideo: false, silentGameplayCapture: clip, viewport: { width: 1280, height: 800 }, webgl, performancePreflight, interactions, fullSession, complete, failures, variants, screenshots, requests: [...new Set(requests)], findings, checks: { actualWebGL: true, realKeyboardClosure: true, realKeyboardPause: true, thirtyRoundEscape: true, activeSimulationSeconds: 300, defaultProfilePerformance: performancePreflight.passed, realtimeFullSession: fullSession?.completed ?? 'not requested', silentGameplayClip: clipRequested ? clip.status === 'complete' : 'not requested', allEighteenVariants: true, bothFailureTypes: true, noExternalRuntimeDependencies: true, noBrowserErrors: true } };
    if (reviewDir) await writeFile(path.join(reviewDir, 'validation.json'), `${JSON.stringify(report, null, 2)}\n`);
    if (clipRequested) assert.equal(clip.status, 'complete', `Silent gameplay capture incomplete: ${JSON.stringify({ status: clip.status, frames: clip.frames.length, sourceTimelineSeconds: clip.sourceTimelineSeconds, errors: clip.errors })}`);
    console.log('browser Wrong Floor ok: real keyboard closure/pause, 30 stops/300 simulated seconds, 18 variants and 15 themed rooms');
    return report;
  } finally {
    await stopClip(fullSession?.final);
    if (clipFlush) await clipFlush;
    if (reviewDir && !report) await writeFile(path.join(reviewDir, 'incomplete-findings.json'), `${JSON.stringify({ provenance, findings, requests, screenshots, interactions, performancePreflight, fullSession, silentGameplayCapture: clip }, null, 2)}\n`);
    listeners.delete(capture);
    await call('Target.closeTarget', { targetId });
  }
}
