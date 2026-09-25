import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import path from 'node:path';
const { resolveGameAsset } = createRequire(import.meta.url)('../asset-path.cjs');
const root = path.resolve('package/_game');
test('game entry, modules, and URL query resolve only inside game', () => {
  assert.equal(resolveGameAsset(root, 'wrong-floor://game/'), path.join(root, 'index.html'));
  assert.equal(resolveGameAsset(root, 'wrong-floor://game/src/main.mjs?seed=12'), path.join(root, 'src/main.mjs'));
});
test('external origins, encoded traversal, and malformed paths are refused', () => {
  for (const url of ['https://game/index.html', 'file:///etc/passwd', 'wrong-floor://other/index.html',
    'wrong-floor://game/%2e%2e%2fsecret', 'wrong-floor://game/%5csecret', 'wrong-floor://game/%00secret',
    'wrong-floor://user@game/index.html', 'wrong-floor://game:80/index.html']) {
    assert.throws(() => resolveGameAsset(root, url), undefined, url);
  }
});
