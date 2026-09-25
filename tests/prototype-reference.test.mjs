import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const referenceRoot = path.join(root, '.agent', 'references', 'prototype-v0.2.0');
const manifest = JSON.parse(await readFile(path.join(referenceRoot, 'source.json'), 'utf8'));

function gitBlobSha(bytes) {
  const header = Buffer.from(`blob ${bytes.length}\0`);
  return createHash('sha1').update(header).update(bytes).digest('hex');
}

test('frozen prototype matches its imported Git blob hashes', async () => {
  assert.equal(manifest.source.version, '0.2.0');
  assert.equal(manifest.source.arcadeId, 'NXA-000010');
  assert.equal(manifest.source.commit, '1d772700edb77eb294f5f7b3f786ad790276fabd');
  for (const file of manifest.files) {
    const relative = file.referencePath.replace(/^\.agent\/references\/prototype-v0\.2\.0\//, '');
    const bytes = await readFile(path.join(referenceRoot, relative));
    assert.equal(bytes.length, file.bytes, file.referencePath);
    assert.equal(gitBlobSha(bytes), file.gitBlobSha1, file.referencePath);
  }
});

test('current game remains authoritative 0.3.0 and independent of prototype', async () => {
  const active = JSON.parse(await readFile(path.join(root, 'game', 'game.json'), 'utf8'));
  const historical = JSON.parse(await readFile(path.join(referenceRoot, 'game', 'game.json'), 'utf8'));
  assert.equal(active.id, 'NXA-000010');
  assert.equal(active.version, '0.3.0');
  assert.equal(historical.id, active.id);
  assert.equal(historical.version, '0.2.0');
  const activeMain = await readFile(path.join(root, 'game', 'src', 'main.mjs'), 'utf8');
  assert.doesNotMatch(activeMain, /\.agent\/references|prototype-v0\.2\.0/);
});

test('prototype runtime imports stay inside frozen prototype game', async () => {
  const gameRoot = path.join(referenceRoot, 'game');
  for (const file of manifest.files.filter(file => file.referencePath.includes('/game/') && /\.(?:m?js)$/.test(file.referencePath))) {
    const relative = file.referencePath.replace(/^\.agent\/references\/prototype-v0\.2\.0\/game\//, '');
    const absolute = path.join(gameRoot, relative);
    const source = await readFile(absolute, 'utf8');
    for (const match of source.matchAll(/(?:from\s*|import\s*\(\s*|new\s+URL\s*\(\s*)['"]([^'"]+)['"]/g)) {
      const specifier = match[1];
      if (!specifier.startsWith('.')) continue;
      const resolved = path.resolve(path.dirname(absolute), specifier);
      assert.ok(resolved === gameRoot || resolved.startsWith(gameRoot + path.sep), `${relative} -> ${specifier}`);
    }
  }
});
