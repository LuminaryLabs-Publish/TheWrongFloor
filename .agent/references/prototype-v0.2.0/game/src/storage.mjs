export const SAVE_KEY = 'wrong-floor.save.v1';
export const DEFAULT_SETTINGS = Object.freeze({ sensitivity: 1, deadZone: 0.18, masterVolume: 0.7, effectsVolume: 0.85, ambienceVolume: 0.5, captions: true, reducedMotion: false, reducedFlashes: true, softScares: false, assisted: false, quality: 'medium', bindings: { close: 'Space', recenter: 'Enter', pause: 'Escape' } });
const fresh = () => ({ version: 1, settings: { ...DEFAULT_SETTINGS, bindings: { ...DEFAULT_SETTINGS.bindings } }, tutorialComplete: false, best: { standard: 0, assisted: 0 } });
const bounded = (value, min, max, fallback) => Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
export function sanitizeSave(value) {
  const save = fresh();
  if (!value || value.version !== 1 || typeof value !== 'object') return save;
  const settings = value.settings ?? {};
  for (const field of ['captions', 'reducedMotion', 'reducedFlashes', 'softScares', 'assisted']) if (typeof settings[field] === 'boolean') save.settings[field] = settings[field];
  for (const field of ['masterVolume', 'effectsVolume', 'ambienceVolume']) save.settings[field] = bounded(settings[field], 0, 1, save.settings[field]);
  save.settings.sensitivity = bounded(settings.sensitivity, 0.25, 3, 1);
  save.settings.deadZone = bounded(settings.deadZone, 0.05, 0.5, 0.18);
  if (['low', 'medium', 'high'].includes(settings.quality)) save.settings.quality = settings.quality;
  if (settings.bindings && typeof settings.bindings === 'object') {
    const entries = ['close', 'recenter', 'pause'].map(key => settings.bindings[key]);
    if (entries.every(code => typeof code === 'string' && /^(Space|Enter|Escape|Key[A-Z]|Digit[0-9]|Arrow(Up|Down|Left|Right))$/.test(code)) && new Set(entries).size === 3)
      for (const key of ['close', 'recenter', 'pause']) save.settings.bindings[key] = settings.bindings[key];
  }
  save.tutorialComplete = value.tutorialComplete === true;
  for (const category of ['standard', 'assisted']) save.best[category] = Math.floor(bounded(value.best?.[category], 0, 1000000, 0));
  return save;
}
export function loadSave(storage) {
  try { return sanitizeSave(JSON.parse((storage ?? globalThis.localStorage).getItem(SAVE_KEY))); } catch { return fresh(); }
}
export function writeSave(save, storage) {
  try { (storage ?? globalThis.localStorage).setItem(SAVE_KEY, JSON.stringify(sanitizeSave(save))); return true; } catch { return false; }
}
export function recordResult(save, { score = 0, assisted = false, practice = false, mode } = {}) {
  const result = sanitizeSave(save);
  if (practice) { if (mode === 'won') result.tutorialComplete = true; return result; }
  const category = assisted ? 'assisted' : 'standard';
  result.best[category] = Math.max(result.best[category], Math.floor(bounded(score, 0, 1000000, 0)));
  return result;
}
