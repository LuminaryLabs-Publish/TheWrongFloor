import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import {moduleReferences} from './module-references.mjs';

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
assert.equal(metadata.version, '0.3.0');
const difficulty = JSON.parse(await readFile(path.join(game, 'content/difficulty.json'), 'utf8'));
assert.equal(difficulty.rounds, 30);
assert.equal(difficulty.roundSeconds, 9);
assert.equal(difficulty.rounds * difficulty.roundSeconds, 270);
const encounters = JSON.parse(await readFile(path.join(game, 'content/encounters.json'), 'utf8'));
assert.equal(encounters.length, 18);
const cover = await readFile(path.join(game, 'cover.webp'));
const concept = await readFile(path.join(root, 'marketing/prototype-cover/wrong-floor-prototype-cover.webp'));
assert.equal(createHash('sha256').update(cover).digest('hex'), createHash('sha256').update(concept).digest('hex'));
const prototypeRoot = path.join(root, '.agent', 'references', 'prototype-v0.2.0');
const prototypeMetadata = JSON.parse(await readFile(path.join(prototypeRoot, 'game', 'game.json'), 'utf8'));
assert.equal(prototypeMetadata.id, 'NXA-000010');
assert.equal(prototypeMetadata.version, '0.2.0');
const prototypeSource = JSON.parse(await readFile(path.join(prototypeRoot, 'source.json'), 'utf8'));
assert.equal(prototypeSource.source.repository, 'LuminaryLabs-Dev/NexusArcade-Prototypes');
assert.equal(prototypeSource.source.commit, '1d772700edb77eb294f5f7b3f786ad790276fabd');
await access(path.join(root, 'compare', 'index.html'));

const gameHtml = await readFile(path.join(game, 'index.html'), 'utf8');
assert.doesNotMatch(gameHtml, /id="play-button"|id="seed-input"|data-action="practice"/);
assert.match(gameHtml, /id="descend-accessible"/);
const directorSource = await readFile(path.join(game, 'src', 'director.mjs'), 'utf8');
assert.match(directorSource, /index === 29 \? 'G' : 29 - index/);
const mainSource = await readFile(path.join(game, 'src', 'main.mjs'), 'utf8');
assert.match(mainSource, /mode:'intro'/);
assert.match(mainSource, /initialOpen:true/);

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
    for (const specifier of /\.m?js$/.test(entry.name)?moduleReferences(source):[]) {
      if (!specifier.startsWith('.')) throw new Error(`Non-local runtime import: ${path.relative(root, absolute)} -> ${specifier}`);
      const resolved = path.resolve(path.dirname(absolute), specifier);
      if (resolved !== game && !resolved.startsWith(`${game}${path.sep}`)) throw new Error(`Runtime import escapes game: ${specifier}`);
      await access(resolved);
    }
  }
}
await scan(game);
console.log(`[validate] current main: untimed Floor 30, Floor 29→G, 30×9s=270s; ${required.length} required current files, ${encounters.length} encounters`);
