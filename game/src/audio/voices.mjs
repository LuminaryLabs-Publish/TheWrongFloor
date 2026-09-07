import {AUDIO_ASSETS,SAMPLE_LEVELS} from './assets.mjs';
import {clamp01,hallwayMix,monsterVisibleForAudio} from '../audio-config.mjs';
import { conditionChannels, findTransientStart } from './processing.mjs';

export function createSampleAudio({ context: ctx, ambienceBus, effectsBus, getSettings }) {
  const buffers = new Map(), active = new Map(), voices = new Set(), metrics = {};
  let preloadPromise, music, somebodyPlayed = false, breathPlayed = false, shakyPlayed = false, disposed = false;
  let roundIndex = -1, roundEntity = '';
  const failures = [];
  const hallFilter = ctx.createBiquadFilter(), hallGain = ctx.createGain();
  hallFilter.type = 'lowpass'; hallFilter.frequency.value = 480; hallFilter.Q.value = 0.5;
  hallGain.gain.value = 0.12;
  hallFilter.connect(hallGain); hallGain.connect(effectsBus);
  const smooth = (parameter, value, time = 0.12) => {
    if (!disposed) parameter.setTargetAtTime(value, ctx.currentTime, time);
  };

  async function decode(name, urls) {
    let bytes;
    if (urls.length === 1 && !urls[0].pathname.endsWith('.b64')) {
      const response = await fetch(urls[0],{signal:AbortSignal.timeout(10000)});
      if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
      bytes = await response.arrayBuffer();
    } else {
      const chunks = await Promise.all(urls.map(async url => {
        const response = await fetch(url,{signal:AbortSignal.timeout(10000)});
        if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
        return response.text();
      }));
      const binary = atob(chunks.join(''));
      bytes = Uint8Array.from(binary, value => value.charCodeAt(0)).buffer;
    }
    const decoded = await ctx.decodeAudioData(bytes);
    if (disposed) return;
    let channels = Array.from({ length: decoded.numberOfChannels }, (_, i) => decoded.getChannelData(i));
    // Supplied impact files contain seconds of near-silence before the actual sound.
    const onset = ['bones', 'jumpscare'].includes(name) ? findTransientStart(channels, decoded.sampleRate) : 0;
    if (onset) channels = channels.map(channel => channel.subarray(onset));
    const conditioned = conditionChannels(channels, decoded.sampleRate, { loop: name === 'musicBox' || name === 'heartbeat', maxGain: name === 'shakyBreaths' ? 6 : 2 });
    const buffer = ctx.createBuffer(decoded.numberOfChannels, conditioned.channels[0].length, decoded.sampleRate);
    conditioned.channels.forEach((channel, i) => buffer.copyToChannel(channel, i));
    buffers.set(name, buffer);
    metrics[name] = { duration: buffer.duration, sourceOffset: onset / decoded.sampleRate, peak: conditioned.peak, rms: conditioned.rms, gain: conditioned.gain };
  }
  function preload() {
    return preloadPromise ??= Promise.allSettled(Object.entries(AUDIO_ASSETS).map(([name, urls]) => decode(name, urls)))
      .then(results => {
        for (const result of results) if (result.status === 'rejected') failures.push(String(result.reason));
        if (failures.length) console.warn('[audio] Some recordings could not load', failures);
        return failures.length === 0;
      });
  }

  function createSource(name, destination, { loop = false, gain = 1, delay = 0, pan = 0, cutoff = 5200, duration, rate = 1 } = {}) {
    const buffer = buffers.get(name);
    if (!buffer || disposed || voices.size >= 24) return null;
    const source = ctx.createBufferSource(), level = ctx.createGain(), filter = ctx.createBiquadFilter(), panner = ctx.createStereoPanner();
    const start = ctx.currentTime + Math.max(0, delay);
    source.buffer = buffer; source.loop = loop; source.playbackRate.value = rate;
    filter.type = 'lowpass'; filter.frequency.value = cutoff; filter.Q.value = 0.5;
    panner.pan.value = pan;
    level.gain.setValueAtTime(0, start); level.gain.linearRampToValueAtTime(gain, start + 0.035);
    source.connect(filter); filter.connect(level); level.connect(panner); panner.connect(destination);
    const handle = { name, source, gain: level, filter, ended: false, stop(fade = 0.06) {
      if (handle.ended || handle.stopping) return;
      handle.stopping = true;
      level.gain.cancelAndHoldAtTime(ctx.currentTime);
      level.gain.linearRampToValueAtTime(0, ctx.currentTime + fade);
      try { source.stop(ctx.currentTime + fade + 0.01); } catch {}
    }};
    source.onended = () => {
      handle.ended = true; voices.delete(handle);
      if (active.get(name) === handle) active.delete(name);
      for (const node of [source, filter, level, panner]) node.disconnect();
      if (music === handle) music = null;
    };
    voices.add(handle);
    if (duration && !loop) {
      const end = start + Math.min(duration, buffer.duration / rate);
      level.gain.setValueAtTime(gain, Math.max(start + 0.04, end - 0.18));
      level.gain.linearRampToValueAtTime(0, end);
      source.start(start); source.stop(end + 0.01);
    } else source.start(start);
    return handle;
  }
  function play(name, gain, options = {}) {
    if (active.get(name) && !active.get(name).ended) return active.get(name);
    const handle = createSource(name, options.hallway ? hallFilter : effectsBus, { gain, ...options });
    if (handle) active.set(name, handle);
    return handle;
  }
  function stop(name, fade) { active.get(name)?.stop(fade); active.delete(name); }
  function clearThreat() { for (const name of ['heartbeat', 'scaredBreathing', 'shakyBreaths', 'somebodyPlease', 'bones']) stop(name, 0.1); }
  function reset() {
    for (const voice of voices) voice.stop(0.04);
    active.clear(); music = null;
    somebodyPlayed = breathPlayed = shakyPlayed = false; roundIndex = -1;
  }
  function update(snapshot = {}) {
    if (disposed) return;
    const running = snapshot.mode === 'running' || snapshot.mode === 'lobby', mix = hallwayMix(snapshot);
    const soft = getSettings().softScares ? 0.58 : 1;
    if (!running) { if (music) smooth(music.gain.gain, 0, 0.15); return; }
    if (!music && buffers.has('musicBox')) music = createSource('musicBox', ambienceBus, { loop: true, gain: 0, pan: -0.18, cutoff: 3400 });
    if (music) { smooth(music.gain.gain, snapshot.mode==='lobby'?0:mix.music, 0.35); smooth(music.filter.frequency, mix.cutoff, 0.18); }
    smooth(hallGain.gain, mix.gain); smooth(hallFilter.frequency, mix.cutoff);
    const pressure = clamp01(snapshot.threatProgress);
    // Panic follows the visible clue, leaving the arrival quiet enough to inspect.
    const visible = snapshot.clueVisible && monsterVisibleForAudio(snapshot);
    if (visible && snapshot.mode === 'running') {
      const heartbeat = play('heartbeat', 0, { loop: true, cutoff: 600 });
      if (heartbeat) {
        smooth(heartbeat.source.playbackRate, 0.86 + pressure * 0.27, 0.3);
        smooth(heartbeat.gain.gain, SAMPLE_LEVELS.heartbeat * (0.22 + pressure * 0.7) * soft, 0.2);
      }
      if (pressure > 0.24 && !breathPlayed) { breathPlayed = true; play('scaredBreathing', SAMPLE_LEVELS.scaredBreathing * soft, { duration: 2.8, cutoff: 2400 }); }
      if (pressure > 0.74 && !shakyPlayed) {
        shakyPlayed = true; stop('scaredBreathing', 0.16);
        play('shakyBreaths', SAMPLE_LEVELS.shakyBreaths * soft, { duration: 1.8, cutoff: 2200 });
      }
    } else stop('heartbeat', 0.16);
  }
  function event(entry = {}) {
    const type = typeof entry === 'string' ? entry : entry.type, data = entry.data ?? {};
    const soft = getSettings().softScares ? 0.55 : 1;
    if (type === 'arrival') {
      clearThreat(); breathPlayed = shakyPlayed = false;
      roundIndex = entry.roundIndex; roundEntity = data.entity ?? '';
      if (roundIndex === 0) { reset(); roundIndex = 0; }
    }
    if (type === 'clue' && !somebodyPlayed && roundIndex >= 7) {
      somebodyPlayed = true;
      play('somebodyPlease', SAMPLE_LEVELS.somebodyPlease * soft, { hallway: true, pan: -0.6, delay: 0.12, cutoff: 1800, duration: 2.6 });
    }
    if (type === 'approach') {
      roundEntity = data.entity ?? roundEntity;
      const pan = roundEntity === 'porter' ? 0.45 : roundEntity === 'tall' ? -0.3 : 0;
      play('bones', SAMPLE_LEVELS.bones * soft, { hallway: true, pan, duration: 1.2, cutoff: 2600, rate: 0.86 });
    }
    if (type === 'failure') {
      clearThreat(); if (music) smooth(music.gain.gain, 0, 0.025);
      if (data.reason === 'intrusion') {
        play('jumpscare', SAMPLE_LEVELS.jumpscare * soft, { duration: 1.4, cutoff: 4200 });
        play('scream', SAMPLE_LEVELS.scream * soft, { delay: 0.12, duration: 1.5, cutoff: 3000 });
      }
    }
    if (['sealed', 'accepted', 'false-alarm', 'escape'].includes(type)) clearThreat();
    if (type === 'escape' && music) smooth(music.gain.gain, 0, 0.5);
  }
  function dispose() { reset(); disposed = true; hallFilter.disconnect(); hallGain.disconnect(); buffers.clear(); }
  return { preload, update, event, reset, dispose,
    inspect: () => ({ loaded: buffers.size, failures: [...failures], active: [...active.keys()], voices: voices.size, metrics }),
    isTerminalCuePlaying: () => ['jumpscare', 'scream'].some(name => active.has(name) && !active.get(name).ended) };
}
