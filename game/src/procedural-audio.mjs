// Original mechanical foley; no external samples or runtime downloads.
export function createProceduralAudio({ context: ctx, ambienceBus, effectsBus, getSettings }) {
  const nodes = new Set(), transient = new Set();
  let disposed = false, seed = 617;
  const noise = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate), samples = noise.getChannelData(0);
  let brown = 0;
  for (let i = 0; i < samples.length; i++) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    brown = (brown + (seed / 4294967296 * 2 - 1) * 0.035) / 1.025;
    samples[i] = brown * 3;
  }
  const motor = ctx.createBufferSource(), filter = ctx.createBiquadFilter(), motorGain = ctx.createGain();
  motor.buffer = noise; motor.loop = true;
  filter.type = 'lowpass'; filter.frequency.value = 200; filter.Q.value = 0.5;
  motorGain.gain.value = 0;
  motor.connect(filter); filter.connect(motorGain); motorGain.connect(ambienceBus); motor.start();
  const hum = ctx.createOscillator(), humGain = ctx.createGain();
  hum.type = 'sine'; hum.frequency.value = 51; humGain.gain.value = 0;
  hum.connect(humGain); humGain.connect(ambienceBus); hum.start();
  for (const node of [motor, filter, motorGain, hum, humGain]) nodes.add(node);
  const smooth = (parameter, value, seconds = 0.2) => parameter.setTargetAtTime(value, ctx.currentTime, seconds);

  function tone(frequency, gain, duration, delay = 0, endFrequency = frequency) {
    if (disposed) return;
    const source = ctx.createOscillator(), level = ctx.createGain(), start = ctx.currentTime + delay;
    source.frequency.setValueAtTime(frequency, start);
    source.frequency.exponentialRampToValueAtTime(endFrequency, start + duration);
    level.gain.setValueAtTime(0, start); level.gain.linearRampToValueAtTime(gain, start + 0.008);
    level.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(level); level.connect(effectsBus);
    transient.add(source);
    source.onended = () => { source.disconnect(); level.disconnect(); transient.delete(source); };
    source.start(start); source.stop(start + duration + 0.02);
  }
  function knock(gain = 0.22, delay = 0) {
    const source = ctx.createBufferSource(), band = ctx.createBiquadFilter(), level = ctx.createGain(), start = ctx.currentTime + delay;
    source.buffer = noise; band.type = 'lowpass'; band.frequency.value = 580;
    level.gain.setValueAtTime(0, start); level.gain.linearRampToValueAtTime(gain, start + 0.006);
    level.gain.exponentialRampToValueAtTime(0.0001, start + 0.42);
    source.connect(band); band.connect(level); level.connect(effectsBus);
    transient.add(source);
    source.onended = () => { source.disconnect(); band.disconnect(); level.disconnect(); transient.delete(source); };
    source.start(start); source.stop(start + 0.45);
    tone(88, gain * 0.34, 0.3, delay, 42);
  }
  function update(snapshot = {}) {
    if (disposed) return;
    const running = snapshot.mode === 'running', travel = snapshot.phase === 'travel';
    const door = snapshot.phase === 'opening' || snapshot.phase === 'closing';
    const hush = snapshot.clueVisible && !snapshot.resolved ? 0.6 : 1;
    smooth(motorGain.gain, running ? (travel ? 0.17 : door ? 0.11 : 0.035) * hush : 0);
    smooth(filter.frequency, travel ? 210 : door ? 760 : 340);
    smooth(humGain.gain, running ? (travel ? 0.027 : 0.012) * hush : 0);
    smooth(hum.frequency, travel ? 48 : 51);
  }
  function event(entry = {}) {
    const soft = getSettings().softScares ? 0.55 : 1;
    if (entry.type === 'arrival') { tone(660, 0.065, 0.8); tone(1321, 0.015, 0.38); }
    if (entry.type === 'close-start') knock(0.08);
    if (entry.type === 'sealed') { knock(0.16); knock(0.28 * soft, 0.28); }
    if (entry.type === 'accepted') knock(0.09);
    if (entry.type === 'false-alarm') { tone(180, 0.05, 0.25); tone(142, 0.045, 0.4, 0.27); }
    if (entry.type === 'escape') { tone(523, 0.05, 1.2); tone(784, 0.035, 1.3, 0.25); }
    if (entry.type === 'failure' && entry.data?.reason === 'shutdown') tone(92, 0.065, 1.1, 0, 38);
  }
  function reset() {
    for (const source of transient) { try { source.stop(); } catch {} }
    transient.clear(); motorGain.gain.cancelScheduledValues(ctx.currentTime); motorGain.gain.value = 0;
    humGain.gain.cancelScheduledValues(ctx.currentTime); humGain.gain.value = 0;
  }
  function dispose() {
    reset(); disposed = true;
    for (const node of nodes) { try { node.stop?.(); } catch {} node.disconnect(); }
    nodes.clear();
  }
  return { update, event, reset, dispose };
}
