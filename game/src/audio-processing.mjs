// Preserve dynamics, remove DC offset, and keep headroom before live mixing.
export function measureChannels(channels) {
  let peak = 0, squares = 0, samples = 0;
  for (const channel of channels) for (const value of channel) {
    peak = Math.max(peak, Math.abs(value)); squares += value * value; samples++;
  }
  return { peak, rms: samples ? Math.sqrt(squares / samples) : 0 };
}
export function findTransientStart(channels, sampleRate) {
  const size = Math.max(1, Math.floor(sampleRate * 0.025));
  let loudest = 0, start = 0;
  for (let i = 0; i < (channels[0]?.length ?? 0); i += size) {
    let energy = 0;
    for (const channel of channels) for (let j = i; j < Math.min(i + size, channel.length); j++) energy += channel[j] ** 2;
    if (energy > loudest) { loudest = energy; start = i; }
  }
  return Math.max(0, start - Math.floor(sampleRate * 0.09));
}
export function conditionChannels(channels, sampleRate, { loop = false, targetRms = 0.16, peakCeiling = 0.75, maxGain = 2 } = {}) {
  const frames = channels[0]?.length ?? 0;
  const overlap = loop ? Math.min(Math.floor(sampleRate * 0.08), Math.floor(frames / 8)) : 0;
  const result = channels.map(source => {
    const mean = source.reduce((sum, value) => sum + value, 0) / Math.max(1, frames);
    const cleaned = Float32Array.from(source, value => value - mean);
    const output = cleaned.slice(overlap);
    if (overlap) {
      // Crossfade tail into head, then wrap into the untouched body.
      for (let i = 0; i < overlap; i++) {
        const t = i / Math.max(1, overlap - 1);
        output[output.length - overlap + i] = cleaned[frames - overlap + i] * (1 - t) + cleaned[i] * t;
      }
    } else {
      const fade = Math.min(Math.floor(sampleRate * 0.012), Math.floor(frames / 2));
      for (let i = 0; i < fade; i++) {
        const gain = Math.sin(i / Math.max(1, fade - 1) * Math.PI / 2) ** 2;
        output[i] *= gain; output[frames - 1 - i] *= gain;
      }
    }
    return output;
  });
  const before = measureChannels(result);
  const gain = before.rms < 0.00001 ? 0 : Math.min(maxGain, targetRms / before.rms, peakCeiling / Math.max(0.00001, before.peak));
  for (const channel of result) for (let i = 0; i < channel.length; i++) channel[i] *= gain;
  return { channels: result, gain, ...measureChannels(result) };
}
