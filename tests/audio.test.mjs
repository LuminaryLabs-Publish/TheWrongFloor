import test from 'node:test';
import assert from 'node:assert/strict';
import { conditionChannels, measureChannels, findTransientStart } from '../game/src/audio-processing.mjs';
import { hallwayMix, SAMPLE_LEVELS } from '../game/src/audio-config.mjs';


test('conditioning removes DC, preserves stereo balance, and leaves peak headroom', () => {
  const left = Float32Array.from({ length: 48000 }, (_, i) => 0.3 + Math.sin(i * Math.PI / 24) * 1.4);
  const right = Float32Array.from(left, x => (x - 0.3) * 0.5 - 0.12);
  const result = conditionChannels([left, right], 48000);
  assert.ok(result.peak <= 0.750001);
  assert.ok(result.rms <= 0.160001);
  assert.ok(Math.abs(result.channels[0].reduce((a, b) => a + b, 0) / left.length) < 0.0001);
  assert.ok(Math.abs(measureChannels([result.channels[1]]).rms / measureChannels([result.channels[0]]).rms - 0.5) < 0.001);
  assert.equal(Math.abs(result.channels[0][0]), 0);
  assert.equal(Math.abs(result.channels[0].at(-1)), 0);
  assert.ok(left[0] > 0.29, 'source buffer stays untouched');
});
test('silence stays finite and loop joins have no abrupt discontinuity', () => {
  const silent = conditionChannels([new Float32Array(4800)], 48000);
  assert.equal(silent.peak, 0); assert.equal(silent.gain, 0);
  const sample = Float32Array.from({ length: 48000 }, (_, i) => Math.sin(i / 117) * 0.6);
  sample[sample.length - 1] = 1;
  const loop = conditionChannels([sample], 48000, { loop: true }).channels[0];
  assert.ok(loop.length < sample.length);
  assert.ok(Math.abs(loop.at(-1) - loop[0]) < 0.01, 'crossfade removes the hard loop edge');
});
test('impact cues skip quiet source lead-ins and preserve the attack', () => {
  const sample = new Float32Array(48000 * 4);
  for (let i = 48000 * 2; i < 48000 * 2.04; i++) sample[i] = Math.sin(i * 0.2) * 0.7;
  const start = findTransientStart([sample], 48000) / 48000;
  assert.ok(start >= 1.8 && start < 2);
  assert.equal(findTransientStart([new Float32Array(400)], 48000), 0);
});
test('closed doors attenuate and lowpass the hall; danger ducks the music', () => {
  const open = hallwayMix({ door: { openness: 1 } });
  const closed = hallwayMix({ door: { openness: 0 } });
  const danger = hallwayMix({ door: { openness: 1 }, clueVisible: true, threatProgress: 1 });
  assert.ok(closed.gain < open.gain * 0.2);
  assert.ok(closed.cutoff < open.cutoff * 0.15);
  assert.ok(danger.music < open.music * 0.25);
  assert.ok(SAMPLE_LEVELS.musicBox < SAMPLE_LEVELS.jumpscare);
});

test('onset keeps an early attack even when a later impact is louder',()=>{const c=new Float32Array(48000*4);for(let i=48000;i<50000;i++)c[i]=.4*Math.sin(i*.2);for(let i=96000;i<98000;i++)c[i]=.8*Math.sin(i*.2);assert.ok(findTransientStart([c],48000)<48000);});
