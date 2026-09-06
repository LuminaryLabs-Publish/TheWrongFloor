import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const root = process.cwd();
const game = path.join(root, 'game');
const required = [
  'index.html','styles.css','cover.webp','game.json','content/encounters.json','content/difficulty.json',
  'src/main.mjs','src/game.mjs','src/director.mjs','src/scene.mjs','src/input.mjs','src/audio.mjs','src/ui.mjs','src/storage.mjs','src/elevator.mjs','src/factory-worker.mjs',
  'vendor/three/three.module.js','vendor/three/LICENSE','vendor/factory-kits/LICENSE'
];
for (const file of required) await access(path.join(game, file));
const metadata = JSON.parse(await readFile(path.join(game, 'game.json'), 'utf8'));
assert.equal(metadata.id, 'NXA-000010');
assert.equal(metadata.slug, 'wrong-floor');
assert.equal(metadata.version, '0.2.0');
const difficulty = JSON.parse(await readFile(path.join(game, 'content/difficulty.json'), 'utf8'));
assert.equal(difficulty.rounds * difficulty.roundSeconds, 300);
const encounters = JSON.parse(await readFile(path.join(game, 'content/encounters.json'), 'utf8'));
assert.equal(encounters.length, 12);
const cover = await readFile(path.join(game, 'cover.webp'));
const concept = await readFile(path.join(root, 'marketing/prototype-cover/wrong-floor-prototype-cover.webp'));
assert.equal(createHash('sha256').update(cover).digest('hex'), createHash('sha256').update(concept).digest('hex'));
const landing = await readFile(path.join(root, 'index.html'), 'utf8');
assert.match(landing, /href="\.\/game\/"/);
assert.match(landing, /src="\.\/game\/cover\.webp"/);

async function scan(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Symlink is not allowed: ${path.relative(root, absolute)}`);
    if (entry.isDirectory()) { await scan(absolute); continue; }
    if (!/\.(?:m?js|html|css)$/.test(entry.name)) continue;
    const source = await readFile(absolute, 'utf8');
    const imports = /(?:\bfrom\s*|\bimport\s*\(\s*|\bimport\s+|\bnew\s+URL\s*\(\s*)['"]([^'"]+)['"]/g;
    for (const match of source.matchAll(imports)) {
      const specifier = match[1];
      if (!specifier.startsWith('.')) throw new Error(`Non-local runtime import: ${path.relative(root, absolute)} -> ${specifier}`);
      const resolved = path.resolve(path.dirname(absolute), specifier);
      if (resolved !== game && !resolved.startsWith(`${game}${path.sep}`)) throw new Error(`Runtime import escapes game: ${specifier}`);
      await access(resolved);
    }
  }
}
await scan(game);
console.log(`[validate] ${required.length} required files, ${encounters.length} encounters, exact 300-second contract, local runtime imports`);
