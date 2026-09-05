import { createProceduralAudio } from './procedural-audio.mjs';
import { createSampleAudio } from './sample-audio.mjs';

export function createAudio() {
  let ctx = null, master = null, limiter = null, ambienceBus = null, effectsBus = null;
  let procedural = null, samples = null;
  let settings = { masterVolume: 0.7, ambienceVolume: 0.5, effectsVolume: 0.85, softScares: false };
  let paused = false, disposed = false;
  const smooth = (parameter, value, time = 0.07) => {
    if (ctx && parameter) parameter.setTargetAtTime(Math.max(0, value), ctx.currentTime, time);
  };

  function build() {
    if (ctx || disposed) return;
    const Audio = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!Audio) return;
    ctx = new Audio({ latencyHint: 'interactive' });
    master = ctx.createGain(); ambienceBus = ctx.createGain(); effectsBus = ctx.createGain();
    limiter = ctx.createDynamicsCompressor();
    limiter.threshold.value = -12; limiter.knee.value = 12; limiter.ratio.value = 12;
    limiter.attack.value = 0.003; limiter.release.value = 0.18;
    ambienceBus.connect(limiter); effectsBus.connect(limiter); limiter.connect(master); master.connect(ctx.destination);
    master.gain.value = 0.5 * settings.masterVolume;
    ambienceBus.gain.value = settings.ambienceVolume;
    effectsBus.gain.value = settings.effectsVolume;
    const getSettings = () => settings;
    procedural = createProceduralAudio({ context: ctx, ambienceBus, effectsBus, getSettings });
    samples = createSampleAudio({ context: ctx, ambienceBus, effectsBus, getSettings });
  }

  async function unlock() {
    if (disposed) return;
    try {
      build();
      await samples?.preload();
      if (ctx?.state === 'suspended' && !paused) await ctx.resume();
    } catch {
      // Audio is optional; visual gameplay remains available.
    }
  }

  function setSettings(next = {}) {
    settings = { ...settings, ...next };
    smooth(master?.gain, 0.5 * settings.masterVolume);
    smooth(ambienceBus?.gain, settings.ambienceVolume);
    smooth(effectsBus?.gain, settings.effectsVolume);
  }

  function update(snapshot = {}) {
    if (!ctx || paused || disposed) return;
    procedural?.update(snapshot);
    samples?.update(snapshot);
  }

  function event(entry = {}) {
    if (!ctx || paused || disposed) return;
    procedural?.event(entry);
    samples?.event(entry);
  }

  function pause() {
    paused = true;
    if (ctx?.state === 'running') ctx.suspend().catch(() => {});
  }

  function resume() {
    paused = false;
    if (ctx?.state === 'suspended') ctx.resume().catch(() => {});
  }

  function isTerminalCuePlaying() {
    return samples?.isTerminalCuePlaying() ?? false;
  }

  function dispose() {
    disposed = true;
    samples?.dispose(); procedural?.dispose();
    samples = null; procedural = null;
    for (const node of [ambienceBus, effectsBus, limiter, master]) { try { node?.disconnect(); } catch {} }
    ctx?.close().catch(() => {}); ctx = null;
  }

  return { unlock, setSettings, update, event, pause, resume, isTerminalCuePlaying, dispose };
}
