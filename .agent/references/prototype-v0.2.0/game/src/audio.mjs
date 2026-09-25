// All audio is synthesized locally. No network samples, voices, or runtime downloads.
export function createAudio() {
  let ctx = null, master, limiter, ambienceBus, effectsBus, humGain, motorFilter, motorNoiseGain, heartbeatGain;
  let settings = { masterVolume: .7, ambienceVolume: .5, effectsVolume: .85, softScares: false };
  let paused = false, lastHeartbeat = -10, noiseBuffer = null, disposed = false;
  const nodes = new Set();
  const voices = new Set();
  const smooth = (parameter, value, time = .07) => { if (ctx && parameter) parameter.setTargetAtTime(Math.max(0, value), ctx.currentTime, time); };

  function noiseSource(loop = false) {
    const source = ctx.createBufferSource();
    source.buffer = noiseBuffer; source.loop = loop;
    return source;
  }

  function build() {
    if (ctx || disposed) return;
    const Audio = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!Audio) return;
    ctx = new Audio({ latencyHint: 'interactive' });
    master = ctx.createGain(); ambienceBus = ctx.createGain(); effectsBus = ctx.createGain();
    limiter = ctx.createDynamicsCompressor();
    limiter.threshold.value = -12; limiter.knee.value = 12; limiter.ratio.value = 12; limiter.attack.value = .003; limiter.release.value = .18;
    ambienceBus.connect(limiter); effectsBus.connect(limiter); limiter.connect(master); master.connect(ctx.destination);
    master.gain.value = .5 * settings.masterVolume;
    ambienceBus.gain.value = settings.ambienceVolume; effectsBus.gain.value = settings.effectsVolume;
    [master, ambienceBus, effectsBus, limiter].forEach(n => nodes.add(n));
    noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    let previous = 0;
    for (let i = 0; i < data.length; i++) { const white = Math.random() * 2 - 1; previous = .98 * previous + .02 * white; data[i] = previous * 3 + white * .15; }
    humGain = ctx.createGain(); humGain.gain.value = .12; humGain.connect(ambienceBus); nodes.add(humGain);
    for (const [frequency, volume, type] of [[49,.15,'sine'],[98.2,.035,'triangle'],[147,.012,'sine']]) {
      const tone = ctx.createOscillator(), gain = ctx.createGain(); tone.type = type; tone.frequency.value = frequency; gain.gain.value = volume;
      tone.connect(gain); gain.connect(humGain); tone.start(); nodes.add(tone); nodes.add(gain);
    }
    motorFilter = ctx.createBiquadFilter(); motorFilter.type = 'lowpass'; motorFilter.frequency.value = 180;
    motorNoiseGain = ctx.createGain(); motorNoiseGain.gain.value = .035;
    const motor = noiseSource(true); motor.connect(motorFilter); motorFilter.connect(motorNoiseGain); motorNoiseGain.connect(ambienceBus); motor.start();
    [motor, motorFilter, motorNoiseGain].forEach(n => nodes.add(n));
    heartbeatGain = ctx.createGain(); heartbeatGain.gain.value = 1; heartbeatGain.connect(effectsBus); nodes.add(heartbeatGain);
  }

  function tone({ frequency = 100, endFrequency = frequency, duration = .3, volume = .1, delay = 0, type = 'sine', pan = 0, noise = false, filter = 1000, filterType = 'lowpass', destination = effectsBus, attack = .01 } = {}) {
    if (!ctx || ctx.state !== 'running' || paused || disposed) return;
    const start = ctx.currentTime + delay;
    const source = noise ? noiseSource(false) : ctx.createOscillator();
    const gain = ctx.createGain(), spectral = ctx.createBiquadFilter();
    const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : ctx.createGain();
    if (panner.pan) panner.pan.value = Math.max(-1, Math.min(1, pan));
    if (!noise) { source.type = type; source.frequency.setValueAtTime(frequency, start); source.frequency.exponentialRampToValueAtTime(Math.max(10,endFrequency), start + duration); }
    spectral.type = filterType; spectral.frequency.value = filter; spectral.Q.value = noise ? 2.3 : .7;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(volume, start + Math.min(attack, duration * .3));
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    source.connect(spectral); spectral.connect(gain); gain.connect(panner); panner.connect(destination);
    const voice = { source, gain, spectral, panner }; voices.add(voice);
    source.onended = () => { source.disconnect(); spectral.disconnect(); gain.disconnect(); panner.disconnect(); voices.delete(voice); };
    source.start(start); source.stop(start + duration + .04);
  }

  function metallicImpact(strength = 1, pan = 0) {
    tone({ frequency: 88, endFrequency: 33, duration: .48, volume: .25 * strength, pan });
    for (const [frequency,volume,duration] of [[211,.08,.62],[487,.035,.31],[933,.018,.19]]) tone({ frequency, endFrequency: frequency*.94, duration, volume:volume*strength, type:'triangle', pan });
    tone({ noise:true, filter:1100, duration:.17, volume:.09*strength, pan });
  }

  function voice(entity = 'guest', intensity = 1) {
    const low = { guest:83, tall:49, ceiling:166, porter:65, shadow:39, mannequin:113 }[entity] ?? 79;
    const strength = intensity * (settings.softScares ? .55 : 1);
    tone({ frequency:low, endFrequency:low*.55, duration:1.25, volume:.12*strength, type:'sawtooth', filter:480, attack:.18 });
    tone({ frequency:low*1.031, endFrequency:low*.67, duration:1.06, volume:.065*strength, type:'triangle', filter:780, delay:.09, pan:.22, attack:.22 });
    tone({ noise:true, filter:960, filterType:'bandpass', duration:1.3, volume:.14*strength, pan:-.18, attack:.17 });
  }

  async function unlock() {
    if (disposed) return;
    try { build(); if (ctx?.state === 'suspended' && !paused) await ctx.resume(); } catch { /* Browser audio is optional; visual gameplay remains available. */ }
  }

  function setSettings(next = {}) {
    settings = { ...settings, ...next };
    smooth(master?.gain, .5 * settings.masterVolume);
    smooth(ambienceBus?.gain, settings.ambienceVolume);
    smooth(effectsBus?.gain, settings.effectsVolume);
  }

  function update(snapshot = {}) {
    if (!ctx || paused || disposed) return;
    const travel = snapshot.phase === 'travel';
    const movingDoor = ['opening','closing'].includes(snapshot.phase);
    smooth(humGain.gain, travel ? .72 : .17, .4);
    smooth(motorNoiseGain.gain, travel ? .16 : movingDoor ? .09 : .025, .2);
    motorFilter.frequency.setTargetAtTime(travel ? 330 : movingDoor ? 550 : 130, ctx.currentTime, .25);
    const pressure = Math.max(0, Math.min(1, snapshot.threatProgress ?? 0));
    const period = 1.2 - pressure * .55;
    if (snapshot.mode === 'running' && snapshot.round?.danger && snapshot.clueVisible && !snapshot.resolved && ctx.currentTime - lastHeartbeat > period) {
      lastHeartbeat = ctx.currentTime;
      tone({ frequency:59,endFrequency:33,duration:.16,volume:.065 + pressure*.06,destination:heartbeatGain });
      tone({ frequency:52,endFrequency:29,duration:.13,volume:.04 + pressure*.04,delay:.18,destination:heartbeatGain });
    }
  }

  function event(entry = {}) {
    if (!ctx || paused || disposed) return;
    const type = typeof entry === 'string' ? entry : entry.type;
    const data = entry.data ?? {};
    switch (type) {
      case 'arrival':
        tone({ frequency:786,duration:1.05,volume:.105,filter:3500 });
        tone({ frequency:1179,duration:.65,volume:.045,delay:.06,filter:3500 });
        tone({ frequency:1572,duration:.3,volume:.012,filter:4000 });
        break;
      case 'opened': tone({ noise:true,duration:.14,volume:.035,filter:1600,pan:.3 }); break;
      case 'close-start': tone({ frequency:172,endFrequency:110,duration:.2,volume:.035,type:'triangle' }); break;
      case 'sealed':
        metallicImpact(.35);
        // A sealed door remains safe; the delayed impact is purely an audio near miss.
        if ((entry.roundIndex ?? 0) % 3 !== 1) { tone({ frequency:64,endFrequency:30,duration:.5,volume:.18,delay:.35 }); tone({ noise:true,filter:1700,duration:.12,volume:.12,delay:.35 }); }
        break;
      case 'accepted': tone({ frequency:382,duration:.24,volume:.025 }); break;
      case 'false-alarm':
        tone({ frequency:130,endFrequency:120,duration:.38,volume:.07,type:'triangle' });
        tone({ frequency:130,endFrequency:120,duration:.38,volume:.07,type:'triangle',delay:.47 });
        break;
      case 'clue': voice(data.entity,.45); break;
      case 'failure':
        metallicImpact(settings.softScares ? .5 : 1);
        if (!String(data.reason).includes('alarm') && data.reason !== 'shutdown') voice(data.entity,1.5);
        else tone({ frequency:180,endFrequency:30,duration:1.5,volume:.11,type:'triangle' });
        break;
      case 'escape':
        [261.63,329.63,392].forEach((frequency,i) => tone({frequency,duration:2,volume:.025,delay:i*.35,attack:.18}));
        break;
    }
  }

  function pause() { paused = true; if (ctx?.state === 'running') ctx.suspend().catch(() => {}); }
  function resume() { paused = false; if (ctx?.state === 'suspended') ctx.resume().catch(() => {}); }
  function dispose() {
    disposed = true;
    for (const voice of voices) { try { voice.source.stop(); } catch {} for (const node of Object.values(voice)) { try { node.disconnect(); } catch {} } }
    voices.clear();
    for (const node of nodes) { try { node.stop?.(); } catch {} try { node.disconnect(); } catch {} }
    nodes.clear();
    ctx?.close().catch(() => {}); ctx = null;
  }
  return { unlock, setSettings, update, event, pause, resume, dispose };
}
