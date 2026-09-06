import { createProceduralAudio } from './procedural.mjs';
import { createSampleAudio } from './voices.mjs';

import {audioPresentation} from './mixer.mjs';
export function createAudio() {
  let ctx = null, master = null, limiter = null, ambienceBus = null, effectsBus = null, rumbleFilter = null;
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
    limiter.threshold.value = -6; limiter.knee.value = 6; limiter.ratio.value = 8;
    limiter.attack.value = 0.004; limiter.release.value = 0.24;
    rumbleFilter = ctx.createBiquadFilter(); rumbleFilter.type = 'highpass'; rumbleFilter.frequency.value = 32; rumbleFilter.Q.value = 0.5;
    ambienceBus.connect(rumbleFilter); effectsBus.connect(rumbleFilter); rumbleFilter.connect(limiter); limiter.connect(master); master.connect(ctx.destination);
    master.gain.value = 0.85 * settings.masterVolume;
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
      // Resume inside the initiating gesture, including Safari's stricter activation window.
      if (ctx?.state === 'suspended' && !paused) await ctx.resume();
      await samples?.preload();
    } catch {
      // Audio is optional; visual gameplay remains available.
    }
  }

  function setSettings(next = {}) {
    settings = { ...settings, ...next };
    smooth(master?.gain, 0.85 * settings.masterVolume);
    smooth(ambienceBus?.gain, settings.ambienceVolume);
    smooth(effectsBus?.gain, settings.effectsVolume);
  }

  function update(snapshot = {}) {
    if (!ctx || paused || disposed) return;
    snapshot=audioPresentation(snapshot);
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
    for (const node of [ambienceBus, effectsBus, rumbleFilter, limiter, master]) { try { node?.disconnect(); } catch {} }
    ctx?.close().catch(() => {}); ctx = null;
  }

  function reset() { samples?.reset(); procedural?.reset(); }
  return { unlock, setSettings, update, event, pause, resume, reset, isTerminalCuePlaying, dispose,
    inspect: () => ({ state: ctx?.state ?? 'unavailable', ...samples?.inspect() }) };
}
