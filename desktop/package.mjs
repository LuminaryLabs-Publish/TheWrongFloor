import { packager } from '@electron/packager';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const [platform = process.platform, arch = 'x64'] = process.argv.slice(2);
if (!['linux', 'win32', 'darwin'].includes(platform) || !['x64', 'arm64'].includes(arch)) {
  throw new Error('Supported package targets: linux/win32/darwin x64/arm64');
}
const output = await packager({
  dir: path.join(here, '.generated/app'), out: path.join(here, 'dist'),
  name: 'Wrong Floor', executableName: 'wrong-floor',
  icon: path.join(here, 'icons', platform === 'win32' ? 'wrong-floor.ico' : platform === 'darwin' ? 'wrong-floor.icns' : 'wrong-floor.png'),
  appBundleId: 'dev.luminarylabs.wrongfloor',
  appCategoryType: 'public.app-category.games', darwinDarkModeSupport: true,
  ...(platform === 'darwin' ? { extendInfo: { NSHighResolutionCapable: true } } : {}),
  electronVersion: '44.2.0', platform, arch, asar: true,
  overwrite: true, prune: true, download: { cacheRoot: path.join(here, '.electron-cache') },
  appCopyright: 'Luminary Labs'
});
if (!output.length) throw new Error(`No ${platform}/${arch} package was produced. macOS packaging requires a host that can preserve symlinks; use the macOS CI runner.`);
console.log(JSON.stringify({ packages: output, platform, arch, nativeRuntimeVerified: false, signed: false }, null, 2));
