import { access, cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const output = path.join(root, 'dist');
const reference = path.join(root, '.agent', 'references', 'prototype-v0.2.0', 'game');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ['index.html', 'site.css']) await cp(path.join(root, file), path.join(output, file));
await cp(path.join(root, 'game'), path.join(output, 'game'), { recursive: true, dereference: false });
await cp(reference, path.join(output, 'prototype'), { recursive: true, dereference: false });
await cp(path.join(root, 'compare'), path.join(output, 'compare'), { recursive: true, dereference: false });

// Keep the frozen source byte-identical in .agent; isolate browser state only in deploy output.
const prototypeStorage = path.join(output, 'prototype', 'src', 'storage.mjs');
const stored = await readFile(prototypeStorage, 'utf8');
const isolated = stored.replaceAll('wrong-floor.save.v1', 'wrong-floor.prototype-v0.2.0.save.v1');
if (isolated === stored) throw new Error('Prototype storage namespace was not found; refusing an unisolated preview build');
await writeFile(prototypeStorage, isolated);

for (const relative of ['index.html','game/index.html','prototype/index.html','compare/index.html']) await access(path.join(output, relative));
await writeFile(path.join(output, '.nojekyll'), '');
console.log('[build] current game -> dist/game');
console.log('[build] frozen prototype -> dist/prototype (isolated storage namespace)');
console.log('[build] comparison launcher -> dist/compare');
