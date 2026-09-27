import test from 'node:test';
import assert from 'node:assert/strict';
import { SETTINGS_DOMAINS, settingsDomainForField } from '../game/src/settings-domains.mjs';

test('settings menu fields map to real runtime domains', () => {
  assert.deepEqual(Object.keys(SETTINGS_DOMAINS), ['audio','input','accessibility','rendering','gameplay']);
  assert.equal(settingsDomainForField('masterVolume'),'audio');
  assert.equal(settingsDomainForField('sensitivity'),'input');
  assert.equal(settingsDomainForField('captions'),'accessibility');
  assert.equal(settingsDomainForField('quality'),'rendering');
  assert.equal(settingsDomainForField('assisted'),'gameplay');
  assert.equal(settingsDomainForField('unknown'),null);
});
