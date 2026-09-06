import assert from 'node:assert/strict';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const root = process.cwd();
const output = path.join(root, 'MIGRATION-MANIFEST.json');
const roots = ['game','desktop','docs','marketing','scripts','tests','.github'];
const rootFiles = ['.gitignore','README.md','THIRD_PARTY_NOTICES.md','index.html','site.css','package.json','package-lock.json'];
const ignored = new Set(['node_modules','.generated','dist','_review','.npm-cache','.electron-cache','releases']);
const files = [];
async function scan(relative) {
  const absolute = path.join(root, relative);
  for (const entry of (await readdir(absolute, { withFileTypes:true })).sort((a,b)=>a.name.localeCompare(b.name))) {
    if (ignored.has(entry.name)) continue;
    const child = path.posix.join(relative.replaceAll('\\','/'), entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Symlink is not allowed: ${child}`);
    if (entry.isDirectory()) await scan(child);
    else {
      const bytes = await readFile(path.join(root, child));
      files.push({ path:child, bytes:bytes.length, sha256:createHash('sha256').update(bytes).digest('hex') });
    }
  }
}
for (const directory of roots) await scan(directory);
for (const relative of rootFiles.sort()) {
  const bytes = await readFile(path.join(root, relative));
  files.push({ path:relative, bytes:bytes.length, sha256:createHash('sha256').update(bytes).digest('hex') });
}
files.sort((a,b)=>a.path.localeCompare(b.path));
const cover = files.find(file=>file.path==='game/cover.webp');
const expected = {
  schemaVersion:1,
  product:{ title:'Wrong Floor', version:'0.2.0', historicalArcadeId:'NXA-000010', status:'development-vertical-slice' },
  migration:{ sourceRepository:'LuminaryLabs-Dev/NexusArcade-Prototypes', sourceCommit:'ba5071b7219375980f2085bfb106bc3fedd53193', destinationRepository:'LuminaryLabs-Publish/TheWrongFloor', destinationBaseCommit:'04591fc4021f27ebb7fa1dcaa3eb3adfcf321a14' },
  cover:{ path:'game/cover.webp', provenanceCopy:'marketing/prototype-cover/wrong-floor-prototype-cover.webp', width:1536, height:1024, sha256:cover.sha256, generatedPromotionalArt:true, gameplayEvidence:false },
  files
};
const serialized = `${JSON.stringify(expected,null,2)}\n`;
if (process.argv.includes('--check')) {
  assert.equal(await readFile(output,'utf8'), serialized, 'MIGRATION-MANIFEST.json is stale; run node scripts/migration-manifest.mjs');
  console.log(`[manifest] verified ${files.length} files from source commit ${expected.migration.sourceCommit}`);
} else {
  await writeFile(output, serialized);
  console.log(`[manifest] wrote ${files.length} files`);
}
