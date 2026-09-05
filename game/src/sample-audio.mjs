import { AUDIO_ASSETS, SAMPLE_LEVELS, monsterVisibleForAudio } from './audio-config.mjs';

export function createSampleAudio({ context, effectsBus, getSettings }) {
  const buffers = new Map();
  const active = new Map();
  const nodes = new Set();
  let preloadPromise = null;
  let breathing = null;
  let disposed = false;

  const smooth = (parameter, value, time = 0.12) => {
    if (!parameter || disposed) return;
    parameter.setTargetAtTime(Math.max(0, value), context.currentTime, time);
  };

  async function decode(name, url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Audio asset unavailable: ${name}`);
    const bytes = await response.arrayBuffer();
    buffers.set(name, await context.decodeAudioData(bytes));
  }

  function preload() {
    if (!preloadPromise) {
      preloadPromise = Promise.all(Object.entries(AUDIO_ASSETS).map(([name, url]) => decode(name, url)))
        .then(() => true)
        .catch(error => {
          console.warn('[audio] sample layer unavailable; procedural audio remains active', error);
          return false;
        });
    }
    return preloadPromise;
  }

  function createSource(name, destination, { loop = false, gain = 1, offset = 0, when = context.currentTime } = {}) {
    const buffer = buffers.get(name);
    if (!buffer || disposed) return null;
    const source = context.createBufferSource();
    const level = context.createGain();
    source.buffer = buffer;
    source.loop = loop;
    level.gain.value = Math.max(0, gain);
    source.connect(level);
    level.connect(destination);
    source.start(when, Math.max(0, offset));
    nodes.add(source); nodes.add(level);
    const handle = { name, source, gain: level, ended: false, stop(fade = 0.08) {
      if (handle.ended) return;
      handle.ended = true;
      const stopAt = context.currentTime + Math.max(0.02, fade * 4);
      level.gain.cancelScheduledValues(context.currentTime);
      level.gain.setTargetAtTime(0, context.currentTime, Math.max(0.01, fade));
      try { source.stop(stopAt); } catch {}
    } };
    source.onended = () => {
      handle.ended = true;
      active.delete(name);
      try { source.disconnect(); } catch {}
      try { level.disconnect(); } catch {}
      nodes.delete(source); nodes.delete(level);
      if (breathing === handle) breathing = null;
    };
    return handle;
  }

  function setBreathing(enabled) {
    if (enabled && !breathing && buffers.has('scaredBreathing')) {
      breathing = createSource('scaredBreathing', effectsBus, { loop: true, gain: 0 });
      if (breathing) smooth(breathing.gain.gain, SAMPLE_LEVELS.scaredBreathing * (getSettings().softScares ? 0.55 : 1), 0.16);
    } else if (!enabled && breathing) {
      breathing.stop(0.13);
      breathing = null;
    } else if (enabled && breathing) {
      smooth(breathing.gain.gain, SAMPLE_LEVELS.scaredBreathing * (getSettings().softScares ? 0.55 : 1), 0.16);
    }
  }

  function playJumpscare() {
    if (active.get('jumpscare') || !buffers.has('jumpscare')) return;
    const handle = createSource('jumpscare', effectsBus, {
      gain: SAMPLE_LEVELS.jumpscare * (getSettings().softScares ? 0.68 : 1),
    });
    if (handle) active.set('jumpscare', handle);
  }

  function update(snapshot = {}) {
    if (disposed) return;
    setBreathing(monsterVisibleForAudio(snapshot));
  }

  function event(entry = {}) {
    const type = typeof entry === 'string' ? entry : entry.type;
    if (type === 'approach') playJumpscare();
    if (['sealed', 'accepted', 'false-alarm', 'escape'].includes(type)) setBreathing(false);
  }

  function isTerminalCuePlaying() {
    const cue = active.get('jumpscare');
    return Boolean(cue && !cue.ended);
  }

  function dispose() {
    disposed = true;
    breathing?.stop(0.01);
    for (const handle of active.values()) handle.stop(0.01);
    active.clear();
    for (const node of nodes) { try { node.stop?.(); } catch {} try { node.disconnect(); } catch {} }
    nodes.clear(); buffers.clear(); breathing = null;
  }

  return { preload, update, event, isTerminalCuePlaying, dispose };
}
