import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const here = path.dirname(fileURLToPath(import.meta.url));
const app = path.join(here, '.generated/app');
const root = path.join(app, '_game');
const manifest = JSON.parse(await readFile(path.join(app, 'build-manifest.json'), 'utf8'));
const failures = [];
let imports = 0;
for (const file of manifest.files) {
  const absolute = path.join(root, file.path);
  const bytes = await readFile(absolute);
  if (bytes.length !== file.bytes || createHash('sha256').update(bytes).digest('hex') !== file.sha256) failures.push('Hash mismatch: ' + file.path);
  if (!/\.(m?js|html|css)$/.test(file.path)) continue;
  const source = bytes.toString('utf8');
  const expression = /(?:\bfrom\s*|\bimport\s*\(\s*|\bimport\s+|\bnew\s+URL\s*\(\s*)['"]([^'"]+)['"]/g;
  for (const match of source.matchAll(expression)) {
    const specifier = match[1];
    if (!specifier.startsWith('.')) {
      failures.push('Non-local runtime module: ' + file.path + ' -> ' + specifier);
      continue;
    }
    imports++;
    const resolved = path.resolve(path.dirname(absolute), specifier);
    const relative = path.relative(root, resolved);
    if (relative.startsWith('..') || path.isAbsolute(relative)) { failures.push('Module escapes game: ' + specifier); continue; }
    try { await access(resolved); } catch { failures.push('Missing module: ' + file.path + ' -> ' + specifier); }
  }
}
const html = await readFile(path.join(root, 'index.html'), 'utf8');
if (/<script\b(?![^>]*\bsrc\s*=)[^>]*>[\s\S]*?\S[\s\S]*?<\/script>/i.test(html)) failures.push('Inline script conflicts with desktop CSP');
if (!manifest.files.some(file => file.path === 'src/factory-worker.mjs')) failures.push('Factory module worker missing');
console.log(JSON.stringify({ sourceCommit: manifest.sourceCommit, dirty: manifest.dirty, fileCount: manifest.files.length, localImports: imports, failures, nativeRuntimeVerified: false }, null, 2));
if (failures.length) process.exitCode = 1;
