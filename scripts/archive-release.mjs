import { mkdir, readdir, lstat, readFile, readlink, writeFile, open } from 'node:fs/promises';
import { deflateRawSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [target = 'web', arch = 'x64'] = process.argv.slice(2);
if (!['web', 'win32', 'darwin', 'linux'].includes(target) || !['x64', 'arm64'].includes(arch)) throw new Error('Unknown release target');
const definition = JSON.parse(await readFile(path.join(repository, 'game/game.json'), 'utf8'));
const source = target === 'web' ? path.join(repository, 'dist/game') : path.join(repository, 'desktop/dist', `Wrong Floor-${target}-${arch}`);
const directory = path.join(repository, 'releases'); await mkdir(directory, { recursive: true });
const name = `wrong-floor-${definition.version}-${target}${target === 'web' ? '' : '-' + arch}.zip`;
const filename = path.join(directory, name), entries = [];
async function collect(dir, prefix = '') {
  for (const entry of (await readdir(dir, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
    const relative = prefix + entry.name, absolute = path.join(dir, entry.name), stat = await lstat(absolute);
    if (entry.isDirectory()) { entries.push({ name: relative + '/', data: Buffer.alloc(0), mode: 0o40755 }); await collect(absolute, relative + '/'); }
    else if (entry.isSymbolicLink()) entries.push({ name: relative, data: Buffer.from(await readlink(absolute)), mode: 0o120777 });
    else {
      const executable = /(?:^|\/)(wrong-floor|chrome-sandbox|chrome_crashpad_handler)$|\.app\/Contents\/MacOS\//.test(relative);
      entries.push({ name: relative, file: absolute, mode: 0o100000 | (executable ? 0o755 : stat.mode & 0o777) });
    }
  }
}
await collect(source);
entries.push({ name: 'THIRD_PARTY_NOTICES.md', file: path.join(repository, 'THIRD_PARTY_NOTICES.md'), mode: 0o100644 });
const table = Uint32Array.from({ length: 256 }, (_, n) => { for (let k = 0; k < 8; k++) n = n & 1 ? 0xedb88320 ^ n >>> 1 : n >>> 1; return n >>> 0; });
function crc32(data) { let crc = 0xffffffff; for (const byte of data) crc = table[(crc ^ byte) & 255] ^ crc >>> 8; return (crc ^ 0xffffffff) >>> 0; }
const central = [], hashes = [], hash = createHash('sha256'), file = await open(filename, 'w');
let offset = 0;
async function append(bytes) { await file.writeFile(bytes); offset += bytes.length; hash.update(bytes); }
try {
  for (const entry of entries) {
    const data = entry.data ?? await readFile(entry.file), compressed = deflateRawSync(data, { level: 6 }), label = Buffer.from(entry.name), crc = crc32(data), start = offset;
    const local = Buffer.alloc(30); local.writeUInt32LE(0x04034b50); local.writeUInt16LE(20, 4); local.writeUInt16LE(0x800, 6); local.writeUInt16LE(8, 8); local.writeUInt16LE(33, 12);
    local.writeUInt32LE(crc, 14); local.writeUInt32LE(compressed.length, 18); local.writeUInt32LE(data.length, 22); local.writeUInt16LE(label.length, 26);
    await append(local); await append(label); await append(compressed);
    const header = Buffer.alloc(46); header.writeUInt32LE(0x02014b50); header.writeUInt16LE(0x0314, 4); header.writeUInt16LE(20, 6); header.writeUInt16LE(0x800, 8); header.writeUInt16LE(8, 10); header.writeUInt16LE(33, 14);
    header.writeUInt32LE(crc, 16); header.writeUInt32LE(compressed.length, 20); header.writeUInt32LE(data.length, 24); header.writeUInt16LE(label.length, 28); header.writeUInt32LE((entry.mode << 16) >>> 0, 38); header.writeUInt32LE(start, 42);
    central.push(header, label);
    if (!entry.name.endsWith('/')) hashes.push({ path: entry.name, bytes: data.length, sha256: createHash('sha256').update(data).digest('hex') });
  }
  const centralOffset = offset;
  for (const bytes of central) await append(bytes);
  const end = Buffer.alloc(22); end.writeUInt32LE(0x06054b50); end.writeUInt16LE(entries.length, 8); end.writeUInt16LE(entries.length, 10); end.writeUInt32LE(offset - centralOffset, 12); end.writeUInt32LE(centralOffset, 16); await append(end);
} finally { await file.close(); }
await writeFile(filename + '.sha256', `${hash.digest('hex')}  ${name}\n`);
let nativeRuntimeVerified = false;
if (target === 'win32') {
  try {
    const evidence = JSON.parse(await readFile(path.join(repository, '_review/native/native-validation.json'), 'utf8'));
    nativeRuntimeVerified = evidence.passed === true && evidence.arch === arch && Boolean(evidence.archiveSha256) && evidence.archiveSha256 === hashes.find(file => file.path === 'resources/app.asar')?.sha256;
  } catch { /* A build without local native evidence remains unverified. */ }
}
await writeFile(filename + '.manifest.json', JSON.stringify({ version: definition.version, target, arch: target === 'web' ? null : arch, nativeRuntimeVerified, files: hashes }, null, 2) + '\n');
console.log(`[release] ${filename} (${(offset / 1048576).toFixed(1)} MiB; ${entries.length} entries)`);
