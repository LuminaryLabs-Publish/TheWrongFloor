import { AUDIO_ASSETS, SAMPLE_LEVELS, clamp01, smoothstep, musicBoxGain, monsterVisibleForAudio } from './audio-config.mjs';

export function createSampleAudio({ context, ambienceBus, effectsBus, getSettings }) {
  const buffers = new Map();
  const active = new Map();
  let preloadPromise = null;
  let music = null;
  let somebodyPlayed = false;
  let disposed = false;

  const smooth = (parameter, value, time = 0.12) => {
    if (!parameter || disposed) return;
    parameter.setTargetAtTime(Math.max(0, value), context.currentTime, time);
  };

  async function decode(name, urls) {
    const chunks = await Promise.all(urls.map(async url => {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Audio asset unavailable: ${name}`);
      return response.text();
    }));
    const binary = atob(chunks.join(''));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    buffers.set(name, await context.decodeAudioData(bytes.buffer));
  }

  function preload() {
    if (!preloadPromise) {
      preloadPromise = Promise.all(Object.entries(AUDIO_ASSETS).map(([name, url]) => decode(name, url)))
        .then(() => true)
        .catch(error => {
          console.warn('[audio] recorded sample layer unavailable', error);
          return false;
        });
    }
    return preloadPromise;
  }

  function createSource(name, destination, { loop = false, gain = 1, rate = 1, delay = 0 } = {}) {
    const buffer = buffers.get(name);
    if (!buffer || disposed) return null;
    const source = context.createBufferSource();
    const level = context.createGain();
    source.buffer = buffer;
    source.loop = loop;
    source.playbackRate.value = Math.max(0.25, rate);
    level.gain.value = Math.max(0, gain);
    source.connect(level);
    level.connect(destination);
    const handle = {
      name, source, gain: level, ended: false,
      stop(fade = 0.08) {
        if (handle.ended) return;
        handle.ended = true;
        level.gain.cancelScheduledValues(context.currentTime);
        level.gain.setTargetAtTime(0, context.currentTime, Math.max(0.01, fade));
        try { source.stop(context.currentTime + Math.max(0.03, fade * 4)); } catch {}
      },
    };
    source.onended = () => {
      handle.ended = true;
      if (active.get(name) === handle) active.delete(name);
      try { source.disconnect(); } catch {}
      try { level.disconnect(); } catch {}
      if (music === handle) music = null;
    };
    source.start(context.currentTime + Math.max(0, delay));
    return handle;
  }

  function ensureLoop(name, destination, gain = 0) {
    const existing = active.get(name);
    if (existing && !existing.ended) return existing;
    const handle = createSource(name, destination, { loop: true, gain });
    if (handle) active.set(name, handle);
    return handle;
  }

  function stopLoop(name, fade = 0.12) {
    const handle = active.get(name);
    if (!handle) return;
    handle.stop(fade);
    active.delete(name);
  }

  function playOneShot(name, gain, { delay = 0 } = {}) {
    const current = active.get(name);
    if (current && !current.ended) return current;
    const handle = createSource(name, effectsBus, { gain, delay });
    if (handle) active.set(name, handle);
    return handle;
  }

  function ensureMusic() {
    if (music || !buffers.has('musicBox')) return;
    music = createSource('musicBox', ambienceBus, { loop: true, gain: 0 });
  }

  function update(snapshot = {}) {
    if (disposed) return;
    ensureMusic();
    const settings = getSettings();
    const soft = settings.softScares ? 0.62 : 1;
    const running = snapshot.mode === 'running';
    const intrusionTail = snapshot.mode === 'lost' && snapshot.failureReason === 'intrusion';
    const openness = clamp01(snapshot.door?.openness ?? 0);
    if (music) smooth(music.gain.gain, (running || intrusionTail) ? musicBoxGain(openness) : 0, 0.28);

    const visible = monsterVisibleForAudio(snapshot);
    const pressure = clamp01(snapshot.threatProgress);
    const panic = smoothstep((pressure - 0.25) / 0.75);

    if (visible) {
      const heartbeat = ensureLoop('heartbeat', effectsBus, 0);
      if (heartbeat) {
        heartbeat.source.playbackRate.setTargetAtTime(0.96 + pressure * 0.22, context.currentTime, 0.18);
        smooth(heartbeat.gain.gain, SAMPLE_LEVELS.heartbeat * (0.38 + pressure * 0.62) * soft, 0.18);
      }
      const breathing = ensureLoop('scaredBreathing', effectsBus, 0);
      if (breathing) smooth(breathing.gain.gain, SAMPLE_LEVELS.scaredBreathing * (1 - panic * 0.6) * soft, 0.2);
      const shaky = ensureLoop('shakyBreaths', effectsBus, 0);
      if (shaky) smooth(shaky.gain.gain, SAMPLE_LEVELS.shakyBreaths * panic * soft, 0.22);
    } else {
      stopLoop('heartbeat', 0.18);
      stopLoop('scaredBreathing', 0.18);
      stopLoop('shakyBreaths', 0.18);
    }
  }

  function event(entry = {}) {
    const type = typeof entry === 'string' ? entry : entry.type;
    const data = entry.data ?? {};
    const soft = getSettings().softScares ? 0.68 : 1;
    if (type === 'arrival' && entry.roundIndex === 0) somebodyPlayed = false;
    if (type === 'clue' && !somebodyPlayed) {
      somebodyPlayed = true;
      playOneShot('somebodyPlease', SAMPLE_LEVELS.somebodyPlease * soft, { delay: 0.12 });
    }
    if (type === 'approach') {
      playOneShot('bones', SAMPLE_LEVELS.bones * soft);
      playOneShot('jumpscare', SAMPLE_LEVELS.jumpscare * soft);
    }
    if (type === 'failure' && data.reason === 'intrusion') {
      playOneShot('scream', SAMPLE_LEVELS.scream * soft);
    }
    if (['sealed', 'accepted', 'false-alarm', 'escape'].includes(type)) {
      stopLoop('heartbeat', 0.12);
      stopLoop('scaredBreathing', 0.12);
      stopLoop('shakyBreaths', 0.12);
    }
  }

  function isTerminalCuePlaying() {
    const cue = active.get('jumpscare');
    return Boolean(cue && !cue.ended);
  }

  function dispose() {
    disposed = true;
    for (const handle of active.values()) handle.stop(0.01);
    active.clear();
    music?.stop(0.01);
    music = null;
    buffers.clear();
  }

  return { preload, update, event, isTerminalCuePlaying, dispose };
}
