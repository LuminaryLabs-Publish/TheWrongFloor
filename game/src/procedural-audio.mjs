export function createProceduralAudio({ context: ctx, ambienceBus, effectsBus, getSettings }) {
  const nodes = new Set();
  const voices = new Set();
  let lastHeartbeat = -10;
  let disposed = false;

  const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  let previous = 0;
  for (let i = 0; i < data.length; i++) {
    const white = Math.random() * 2 - 1;
    previous = 0.98 * previous + 0.02 * white;
    data[i] = previous * 3 + white * 0.15;
  }
  const smooth = (parameter, value, time = 0.07) => {
    if (parameter && !disposed) parameter.setTargetAtTime(Math.max(0, value), ctx.currentTime, time);
  };
  function noiseSource(loop = false) {
    const source = ctx.createBufferSource(); source.buffer = noiseBuffer; source.loop = loop; return source;
  }

  const humGain = ctx.createGain(); humGain.gain.value = 0.12; humGain.connect(ambienceBus); nodes.add(humGain);
  for (const [frequency, volume, type] of [[49,0.15,'sine'],[98.2,0.035,'triangle'],[147,0.012,'sine']]) {
    const tone = ctx.createOscillator(), gain = ctx.createGain();
    tone.type = type; tone.frequency.value = frequency; gain.gain.value = volume;
    tone.connect(gain); gain.connect(humGain); tone.start(); nodes.add(tone); nodes.add(gain);
  }

  const motorFilter = ctx.createBiquadFilter(); motorFilter.type = 'lowpass'; motorFilter.frequency.value = 180;
  const motorNoiseGain = ctx.createGain(); motorNoiseGain.gain.value = 0.035;
  const motor = noiseSource(true); motor.connect(motorFilter); motorFilter.connect(motorNoiseGain); motorNoiseGain.connect(ambienceBus); motor.start();
  [motor, motorFilter, motorNoiseGain].forEach(node => nodes.add(node));

  const doorFilter = ctx.createBiquadFilter(); doorFilter.type = 'bandpass'; doorFilter.frequency.value = 630; doorFilter.Q.value = 1.8;
  const doorNoiseGain = ctx.createGain(); doorNoiseGain.gain.value = 0;
  const doorNoise = noiseSource(true); doorNoise.connect(doorFilter); doorFilter.connect(doorNoiseGain); doorNoiseGain.connect(effectsBus); doorNoise.start();
  [doorNoise, doorFilter, doorNoiseGain].forEach(node => nodes.add(node));

  const tensionGain = ctx.createGain(); tensionGain.gain.value = 0; tensionGain.connect(ambienceBus); nodes.add(tensionGain);
  for (const [frequency, volume, type] of [[31,0.19,'sine'],[46.5,0.055,'triangle'],[62,0.025,'sawtooth']]) {
    const oscillator = ctx.createOscillator(), gain = ctx.createGain();
    oscillator.type = type; oscillator.frequency.value = frequency; gain.gain.value = volume;
    oscillator.connect(gain); gain.connect(tensionGain); oscillator.start(); nodes.add(oscillator); nodes.add(gain);
  }

  const heartbeatGain = ctx.createGain(); heartbeatGain.gain.value = 1; heartbeatGain.connect(effectsBus); nodes.add(heartbeatGain);

  function tone({ frequency = 100, endFrequency = frequency, duration = 0.3, volume = 0.1, delay = 0, type = 'sine', pan = 0, noise = false, filter = 1000, filterType = 'lowpass', destination = effectsBus, attack = 0.01 } = {}) {
    if (ctx.state !== 'running' || disposed) return;
    const start = ctx.currentTime + delay;
    const source = noise ? noiseSource(false) : ctx.createOscillator();
    const gain = ctx.createGain(), spectral = ctx.createBiquadFilter();
    const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : ctx.createGain();
    if (panner.pan) panner.pan.value = Math.max(-1, Math.min(1, pan));
    if (!noise) {
      source.type = type; source.frequency.setValueAtTime(frequency, start);
      source.frequency.exponentialRampToValueAtTime(Math.max(10, endFrequency), start + duration);
    }
    spectral.type = filterType; spectral.frequency.value = filter; spectral.Q.value = noise ? 2.3 : 0.7;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(volume, start + Math.min(attack, duration * 0.3));
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(spectral); spectral.connect(gain); gain.connect(panner); panner.connect(destination);
    const voice = { source, gain, spectral, panner }; voices.add(voice);
    source.onended = () => {
      for (const node of Object.values(voice)) { try { node.disconnect(); } catch {} }
      voices.delete(voice);
    };
    source.start(start); source.stop(start + duration + 0.04);
  }

  function metallicImpact(strength = 1, pan = 0) {
    tone({ frequency: 88, endFrequency: 33, duration: 0.48, volume: 0.25 * strength, pan });
    for (const [frequency, volume, duration] of [[211,0.08,0.62],[487,0.035,0.31],[933,0.018,0.19]]) {
      tone({ frequency, endFrequency: frequency * 0.94, duration, volume: volume * strength, type: 'triangle', pan });
    }
    tone({ noise: true, filter: 1100, duration: 0.17, volume: 0.09 * strength, pan });
  }

  function voice(entity = 'guest', intensity = 1) {
    const low = { guest:83, tall:49, ceiling:166, porter:65, shadow:39, mannequin:113 }[entity] ?? 79;
    const strength = intensity * (getSettings().softScares ? 0.55 : 1);
    tone({ frequency: low, endFrequency: low * 0.55, duration: 1.25, volume: 0.12 * strength, type: 'sawtooth', filter: 480, attack: 0.18 });
    tone({ frequency: low * 1.031, endFrequency: low * 0.67, duration: 1.06, volume: 0.065 * strength, type: 'triangle', filter: 780, delay: 0.09, pan: 0.22, attack: 0.22 });
    tone({ noise: true, filter: 960, filterType: 'bandpass', duration: 1.3, volume: 0.14 * strength, pan: -0.18, attack: 0.17 });
  }

  function update(snapshot = {}) {
    const travel = snapshot.phase === 'travel';
    const movingDoor = ['opening', 'closing'].includes(snapshot.phase);
    smooth(humGain.gain, travel ? 0.72 : 0.17, 0.4);
    smooth(motorNoiseGain.gain, travel ? 0.16 : movingDoor ? 0.09 : 0.025, 0.2);
    motorFilter.frequency.setTargetAtTime(travel ? 330 : movingDoor ? 550 : 130, ctx.currentTime, 0.25);
    smooth(doorNoiseGain.gain, movingDoor ? 0.045 + Math.abs(0.5 - (snapshot.door?.openness ?? 0.5)) * 0.05 : 0, 0.08);
    doorFilter.frequency.setTargetAtTime(snapshot.phase === 'closing' ? 420 : 760, ctx.currentTime, 0.12);

    const pressure = Math.max(0, Math.min(1, snapshot.threatProgress ?? 0));
    const monsterVisible = snapshot.mode === 'running' && snapshot.round?.danger && snapshot.clueVisible && !snapshot.resolved;
    smooth(tensionGain.gain, monsterVisible ? 0.07 + pressure * 0.23 : 0, 0.18);
    const period = 1.2 - pressure * 0.55;
    if (monsterVisible && ctx.currentTime - lastHeartbeat > period) {
      lastHeartbeat = ctx.currentTime;
      tone({ frequency: 59, endFrequency: 33, duration: 0.16, volume: 0.065 + pressure * 0.06, destination: heartbeatGain });
      tone({ frequency: 52, endFrequency: 29, duration: 0.13, volume: 0.04 + pressure * 0.04, delay: 0.18, destination: heartbeatGain });
    }
  }

  function event(entry = {}) {
    const type = typeof entry === 'string' ? entry : entry.type;
    const data = entry.data ?? {};
    const settings = getSettings();
    switch (type) {
      case 'arrival':
        tone({ frequency:786,duration:1.05,volume:0.105,filter:3500 });
        tone({ frequency:1179,duration:0.65,volume:0.045,delay:0.06,filter:3500 });
        tone({ frequency:1572,duration:0.3,volume:0.012,filter:4000 });
        break;
      case 'opened': tone({ noise:true,duration:0.14,volume:0.035,filter:1600,pan:0.3 }); break;
      case 'close-start': tone({ frequency:172,endFrequency:110,duration:0.2,volume:0.035,type:'triangle' }); break;
      case 'approach':
        tone({ frequency:72,endFrequency:28,duration:1.1,volume:settings.softScares?0.045:0.09,type:'sawtooth',filter:310,attack:0.2 });
        tone({ noise:true,filter:520,filterType:'bandpass',duration:1.4,volume:settings.softScares?0.035:0.075,attack:0.18 });
        break;
      case 'sealed':
        metallicImpact(0.35);
        if ((entry.roundIndex ?? 0) % 3 !== 1) {
          tone({ frequency:64,endFrequency:30,duration:0.5,volume:0.18,delay:0.35 });
          tone({ noise:true,filter:1700,duration:0.12,volume:0.12,delay:0.35 });
        }
        break;
      case 'accepted': tone({ frequency:382,duration:0.24,volume:0.025 }); break;
      case 'false-alarm':
        tone({ frequency:130,endFrequency:120,duration:0.38,volume:0.07,type:'triangle' });
        tone({ frequency:130,endFrequency:120,duration:0.38,volume:0.07,type:'triangle',delay:0.47 });
        break;
      case 'clue': voice(data.entity, 0.45); break;
      case 'failure':
        metallicImpact(settings.softScares ? 0.5 : 1);
        if (!String(data.reason).includes('alarm') && data.reason !== 'shutdown') voice(data.entity, 1.5);
        else tone({ frequency:180,endFrequency:30,duration:1.5,volume:0.11,type:'triangle' });
        break;
      case 'escape':
        [261.63,329.63,392].forEach((frequency, i) => tone({ frequency,duration:2,volume:0.025,delay:i*0.35,attack:0.18 }));
        break;
    }
  }

  function dispose() {
    disposed = true;
    for (const voice of voices) {
      try { voice.source.stop(); } catch {}
      for (const node of Object.values(voice)) { try { node.disconnect(); } catch {} }
    }
    voices.clear();
    for (const node of nodes) { try { node.stop?.(); } catch {} try { node.disconnect(); } catch {} }
    nodes.clear();
  }

  return { update, event, dispose };
}
