// Recorded samples own every scare cue. This module only supplies subtle elevator machinery.
export function createProceduralAudio({ context: ctx, ambienceBus, getSettings=()=>({}) }) {
  const nodes = new Set();
  let disposed = false;
  const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.12;
  const smooth = (parameter, value, time = 0.08) => {
    if (parameter && !disposed) parameter.setTargetAtTime(Math.max(0, value), ctx.currentTime, time);
  };

  const motor = ctx.createBufferSource();
  const motorFilter = ctx.createBiquadFilter();
  const motorGain = ctx.createGain();
  motor.buffer = noiseBuffer; motor.loop = true;
  motorFilter.type = 'lowpass'; motorFilter.frequency.value = 135;
  motorGain.gain.value = 0.003;
  motor.connect(motorFilter); motorFilter.connect(motorGain); motorGain.connect(ambienceBus); motor.start();
  nodes.add(motor); nodes.add(motorFilter); nodes.add(motorGain);

  function update(snapshot = {}) {
    const travel = snapshot.phase === 'travel';
    const movingDoor = snapshot.phase === 'opening' || snapshot.phase === 'closing';
    const prying=snapshot.mode==='lobby'&&snapshot.phase==='pry'&&!getSettings().softScares;
    smooth(motorGain.gain, travel ? 0.012 : movingDoor ? 0.009 : prying ? .014 : 0.003, 0.25);
    motorFilter.frequency.setTargetAtTime(travel ? 210 : movingDoor ? 280 : prying ? 390 : 130, ctx.currentTime, 0.25);
  }
  function event() {}
  function dispose() {
    disposed = true;
    for (const node of nodes) { try { node.stop?.(); } catch {} try { node.disconnect(); } catch {} }
    nodes.clear();
  }
  return { update, event, dispose };
}
