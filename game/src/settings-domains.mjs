export const SETTINGS_DOMAINS = Object.freeze({
  audio: Object.freeze(['masterVolume','ambienceVolume','effectsVolume']),
  input: Object.freeze(['sensitivity','deadZone','bindings.close']),
  accessibility: Object.freeze(['captions','reducedMotion','reducedFlashes','softScares']),
  rendering: Object.freeze(['quality']),
  gameplay: Object.freeze(['assisted']),
});

const fieldToDomain = new Map();
for (const [domain, fields] of Object.entries(SETTINGS_DOMAINS)) {
  for (const field of fields) fieldToDomain.set(field, domain);
}

export function settingsDomainForField(field) {
  const key = field === 'close' ? 'bindings.close' : field;
  return fieldToDomain.get(key) ?? null;
}

export function validateSettingsDomainForm(form) {
  const seen = new Set();
  for (const input of form.querySelectorAll('input[name],select[name]')) {
    const domain = settingsDomainForField(input.name);
    if (!domain) throw new Error(`Settings field has no runtime domain: ${input.name}`);
    const owner = input.closest('[data-settings-domain]')?.dataset.settingsDomain;
    if (owner !== domain) throw new Error(`Settings field ${input.name} is under ${owner ?? 'no domain'} instead of ${domain}`);
    seen.add(input.name);
  }
  return [...seen];
}
