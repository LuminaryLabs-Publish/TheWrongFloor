import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

export async function reviewAudio(run, reviewDir) {
  const result = await run(`(async () => {
    const { createSampleAudio } = await import('/game/src/sample-audio.mjs');
    const { createProceduralAudio } = await import('/game/src/procedural-audio.mjs');
    const rate = 24000, context = new OfflineAudioContext(2, rate * 17, rate);
    const ambienceBus = context.createGain(), effectsBus = context.createGain(), master = context.createGain();
    const limiter = context.createDynamicsCompressor();
    limiter.threshold.value = -6; limiter.knee.value = 6; limiter.ratio.value = 8; limiter.attack.value = 0.004; limiter.release.value = 0.24;
    ambienceBus.gain.value = 0.5; effectsBus.gain.value = 0.85; master.gain.value = 0.595;
    const rumble=context.createBiquadFilter();rumble.type='highpass';rumble.frequency.value=32;rumble.Q.value=.5;ambienceBus.connect(rumble);effectsBus.connect(rumble);rumble.connect(limiter); limiter.connect(master); master.connect(context.destination);
    const options = { context, ambienceBus, effectsBus, getSettings: () => ({ softScares: false }) };
    const layer = createSampleAudio(options), machinery = createProceduralAudio(options);
    await layer.preload();
    const metrics = layer.inspect(), snapshots = [];
    const update = (s) => { layer.update(s); machinery.update(s); };
    const event = (e) => { layer.event(e); machinery.event(e); };
    const normal = { mode: 'running', phase: 'observing', roundIndex: 0, round: { danger: false }, door: { openness: 1 } };
    const danger = { ...normal, roundIndex: 8, round: { danger: true, entity: 'tall', variant: 0, clueAt: 1.5 }, roundTime: 2, clueVisible: true, threatProgress: 0.3 };
    const steps = [
      [0, () => { update({...normal,mode:'lobby',phase:'quiet'}); snapshots.push({phase:'lobby',...layer.inspect()}); }],
      [3, () => update({...normal, phase:'travel',door:{openness:0}})],
      [5, () => { event({type:'arrival',roundIndex:8}); update({...normal, roundIndex:8}); }],
      [6.5, () => { event({type:'clue',roundIndex:8}); update(danger); }],
      [7, () => { event({type:'approach',data:{entity:'tall'}}); update({...danger,threatProgress:0.65}); snapshots.push({phase:'approach',...layer.inspect()}); }],
      [8, () => { update({...danger,threatProgress:0.85}); event({type:'failure',data:{reason:'intrusion'}}); update({...danger,mode:'lost'}); snapshots.push({phase:'intrusion',...layer.inspect()}); }],
      [10, () => { layer.reset(); machinery.reset(); event({type:'arrival',roundIndex:0}); update(normal); snapshots.push({phase:'retry',...layer.inspect()}); }],
      [12, () => { event({type:'arrival',roundIndex:4}); event({type:'clue'}); update(danger); }],
      [13, () => { event({type:'sealed'}); update({...normal,phase:'travel',resolved:true,door:{openness:0}}); snapshots.push({phase:'sealed',...layer.inspect()}); }],
      [15, () => { layer.reset(); machinery.reset(); snapshots.push({phase:'reset',...layer.inspect()}); }],
    ];
    const pauses = steps.map(([time, fn]) => context.suspend(time).then(() => { fn(); return context.resume(); }));
    const rendered = await context.startRendering(); await Promise.all(pauses);
    const channels = [rendered.getChannelData(0), rendered.getChannelData(1)];
    let peak=0,squares=0,clipped=0;
    const windows = [];
    for (let second=0;second<17;second++) {
      let sum=0,localPeak=0;
      for(let i=second*rate;i<(second+1)*rate;i++) for(const c of channels){const value=c[i];sum+=value*value;localPeak=Math.max(localPeak,Math.abs(value));if(Math.abs(value)>=0.999)clipped++;}
      windows.push({second,peak:localPeak,rms:Math.sqrt(sum/(rate*2))}); squares+=sum;peak=Math.max(peak,localPeak);
    }
    const wav = new Uint8Array(44+rendered.length*4), view = new DataView(wav.buffer);
    const text=(offset,value)=>[...value].forEach((c,i)=>view.setUint8(offset+i,c.charCodeAt(0)));
    text(0,'RIFF');view.setUint32(4,wav.length-8,true);text(8,'WAVE');text(12,'fmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,2,true);view.setUint32(24,rate,true);view.setUint32(28,rate*4,true);view.setUint16(32,4,true);view.setUint16(34,16,true);text(36,'data');view.setUint32(40,wav.length-44,true);
    for(let i=0;i<rendered.length;i++)for(let c=0;c<2;c++)view.setInt16(44+i*4+c*2,Math.round(Math.max(-1,Math.min(1,channels[c][i]))*32767),true);
    let binary='';for(let i=0;i<wav.length;i+=8192)binary+=String.fromCharCode(...wav.subarray(i,i+8192));
    layer.dispose(); machinery.dispose();
    return { loaded: metrics.loaded, failures: metrics.failures, samples: metrics.metrics, peak, rms:Math.sqrt(squares/(rendered.length*2)), clipped,windows,snapshots,wav:btoa(binary) };
  })()`);
  const { wav, ...report } = result;
  if (reviewDir) {
    await writeFile(path.join(reviewDir, 'sound-mix-preview.wav'), Buffer.from(wav, 'base64'));
    await writeFile(path.join(reviewDir, 'audio-review.json'), JSON.stringify(report, null, 2) + '\n');
  }
  assert.equal(report.loaded, 8, 'all recordings decode');
  assert.deepEqual(report.failures, []);
  assert.equal(report.clipped, 0, 'default mixed output does not clip');
  assert.ok(report.peak > 0.02 && report.peak < 0.9, 'mix remains audible with headroom');
  assert.ok(report.windows[1].rms>0.00001,'lobby music is audible');
  const at = phase => report.snapshots.find(s => s.phase === phase).active;
  assert.ok(!at('approach').includes('jumpscare'), 'no death sting at approach');
  assert.ok(at('intrusion').includes('jumpscare'), 'intrusion triggers the sting');
  assert.ok(!at('retry').includes('scream'), 'retry cancels the old death');
  assert.deepEqual(at('sealed'), [], 'sealing clears threat voices');
  assert.ok(report.windows[16].peak < 0.0001, 'reset leaves silence');
  console.log('audio review ok: 8 conditioned samples, approach/intrusion/retry/seal, no clipping');
  return report;
}
