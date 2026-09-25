import { packager } from '@electron/packager';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const [platform = process.platform, arch = 'x64'] = process.argv.slice(2);
if (!['linux', 'win32'].includes(platform) || !['x64', 'arm64'].includes(arch)) {
  throw new Error('Supported package targets: linux/win32 x64/arm64');
}
const output = await packager({
  dir: path.join(here, '.generated/app'), out: path.join(here, 'dist'),
  name: 'Wrong Floor', executableName: 'wrong-floor',
  appBundleId: 'dev.luminarylabs.wrongfloor',
  electronVersion: '44.2.0', platform, arch, asar: true,
  overwrite: true, prune: true,
  appCopyright: 'Luminary Labs'
});
console.log(JSON.stringify({ packages: output, platform, arch, steamUploaded: false }, null, 2));
