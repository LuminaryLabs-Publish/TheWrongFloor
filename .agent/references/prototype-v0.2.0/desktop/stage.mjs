import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const here = path.dirname(fileURLToPath(import.meta.url));
const repository = path.resolve(here, '../..');
const source = path.join(repository, 'prototypes/wrong-floor');
const output = path.join(here, '.generated/app');
const definition = JSON.parse(await readFile(path.join(source, 'game.json'), 'utf8'));
await readFile(path.join(source, 'index.html'));
if (definition.slug !== 'wrong-floor' || !/^\d+\.\d+\.\d+(?:-[a-zA-Z0-9.-]+)?$/.test(definition.version)) {
  throw new Error('Wrong Floor identity/version missing or invalid');
}
const files = [];
async function scan(directory, base = '') {
  for (const entry of (await readdir(directory, { withFileTypes: true })).sort((a,b) => a.name.localeCompare(b.name))) {
    const relative = path.posix.join(base, entry.name);
    const absolute = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error('Symlink cannot be packaged: ' + relative);
    if (entry.isDirectory()) await scan(absolute, relative);
    else if (entry.isFile()) {
      const bytes = await readFile(absolute);
      files.push({ path: relative, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') });
    } else throw new Error('Unsupported package object: ' + relative);
  }
}
await scan(source);
await mkdir(path.dirname(output), { recursive: true });
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, path.join(output, '_game'), { recursive: true, dereference: false });
for (const file of files) {
  const bytes = await readFile(path.join(output, '_game', file.path));
  if (bytes.length !== file.bytes || createHash('sha256').update(bytes).digest('hex') !== file.sha256) {
    throw new Error('Game changed while staging; rerun after edits finish: ' + file.path);
  }
}
for (const file of ['main.cjs', 'asset-path.cjs']) await cp(path.join(here, file), path.join(output, file));
await writeFile(path.join(output, 'package.json'), JSON.stringify({
  name: 'wrong-floor', productName: 'Wrong Floor', version: definition.version,
  description: definition.description, main: 'main.cjs', author: 'Luminary Labs', private: true
}, null, 2) + '\n');
let sourceCommit = null, dirty = true;
try {
  sourceCommit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: repository, encoding: 'utf8' }).trim();
  dirty = Boolean(execFileSync('git', ['status', '--porcelain', '--', 'prototypes/wrong-floor', 'standalone/wrong-floor'], { cwd: repository, encoding: 'utf8' }).trim());
} catch { /* A source archive has hashes but no Git identity. */ }
const record = { schemaVersion: 1, gameId: definition.id, version: definition.version, sourceCommit, dirty, files };
await writeFile(path.join(output, 'build-manifest.json'), JSON.stringify(record, null, 2) + '\n');
console.log(JSON.stringify({ staged: output, gameId: definition.id, sourceCommit, dirty, fileCount: files.length }));
