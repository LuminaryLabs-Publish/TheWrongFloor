// Original, deterministic music-box phrase. No third-party recording is used.
import { writeFile } from 'node:fs/promises';
const rate = 24000, seconds = 16, samples = new Float32Array(rate * seconds);
const phrase = [[0.45, 76, 0.40], [2.5, 71, 0.32], [4.3, 79, 0.30], [7.2, 75, 0.26], [9.4, 72, 0.28], [12.1, 71, 0.22]];
for (const [at, note, amplitude] of phrase) {
  const frequency = 440 * 2 ** ((note - 69) / 12);
  for (let i = 0; i < rate * 3.5 && Math.round(at * rate) + i < samples.length; i++) {
    const t = i / rate, attack = Math.min(1, t / 0.004);
    const body = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-t * 1.65);
    const tine = Math.sin(2 * Math.PI * frequency * 2.756 * t) * Math.exp(-t * 5.5) * 0.25;
    const air = Math.sin(2 * Math.PI * frequency * 1.0014 * t) * Math.exp(-t * 2.8) * 0.17;
    samples[Math.round(at * rate) + i] += (body + tine + air) * amplitude * attack;
  }
}
const wav = Buffer.alloc(44 + samples.length * 2);
wav.write('RIFF'); wav.writeUInt32LE(wav.length - 8, 4); wav.write('WAVE', 8); wav.write('fmt ', 12); wav.writeUInt32LE(16, 16);
wav.writeUInt16LE(1, 20); wav.writeUInt16LE(1, 22); wav.writeUInt32LE(rate, 24); wav.writeUInt32LE(rate * 2, 28); wav.writeUInt16LE(2, 32); wav.writeUInt16LE(16, 34);
wav.write('data', 36); wav.writeUInt32LE(samples.length * 2, 40);
samples.forEach((sample, i) => wav.writeInt16LE(Math.round(Math.max(-1, Math.min(1, sample)) * 32767), 44 + i * 2));
await writeFile(new URL('../game/assets/audio/runtime/lift-music-box.wav', import.meta.url), wav);
console.log('[audio] rendered original 16-second music-box phrase');
