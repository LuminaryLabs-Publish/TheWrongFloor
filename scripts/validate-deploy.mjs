import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { moduleReferences } from './module-references.mjs';

const root = process.cwd();
const game = path.join(root, 'game');

const required = [
  'index.html',
  'game/game.json',
  'game/index.html',
  'game/styles.css',
  'game/src/main.mjs',
  'game/vendor/three/three.module.js',
  'game/assets/elevator/wrong-floor-elevator.glb',
];

for (const relative of required) await access(path.join(root, relative));

const pkg = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
assert.equal(pkg.private, true);
assert.equal(typeof pkg.scripts?.build, 'string');

const metadata = JSON.parse(await readFile(path.join(game, 'game.json'), 'utf8'));
assert.equal(metadata.id, 'NXA-000010');
assert.equal(metadata.slug, 'wrong-floor');

const landing = await readFile(path.join(root, 'index.html'), 'utf8');
assert.match(landing, /location\.replace\('\.\/game\/'\)/);
assert.doesNotMatch(landing, /<iframe/i);

async function scan(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Symlink is not allowed: ${path.relative(root, absolute)}`);
    if (entry.isDirectory()) {
      await scan(absolute);
      continue;
    }
    if (!/\.(?:m?js)$/.test(entry.name)) continue;
    const source = await readFile(absolute, 'utf8');
    for (const specifier of moduleReferences(source)) {
      if (!specifier.startsWith('.')) throw new Error(`Non-local runtime import: ${path.relative(root, absolute)} -> ${specifier}`);
      const resolved = path.resolve(path.dirname(absolute), specifier);
      if (resolved !== game && !resolved.startsWith(`${game}${path.sep}`)) {
        throw new Error(`Runtime import escapes game: ${specifier}`);
      }
      await access(resolved);
    }
  }
}
await scan(game);

console.log(`[validate:deploy] basic deploy inputs valid; ${required.length} required files present`);
