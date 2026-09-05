import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const output = path.join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'site.css']) await cp(path.join(root, file), path.join(output, file));
await cp(path.join(root, 'game'), path.join(output, 'game'), { recursive: true, dereference: false });
await writeFile(path.join(output, '.nojekyll'), '');
console.log(`[build] standalone site -> ${output}`);
