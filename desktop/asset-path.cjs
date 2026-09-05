const path = require('node:path');

function resolveGameAsset(root, requestUrl) {
  const url = new URL(requestUrl);
  if (url.protocol !== 'wrong-floor:' || url.hostname !== 'game' || url.port || url.username || url.password) {
    throw new Error('Untrusted game origin');
  }
  const pathname = decodeURIComponent(url.pathname);
  if (pathname.includes('\\') || pathname.includes('\0')) throw new Error('Invalid asset path');
  const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const target = path.resolve(root, relative);
  const within = path.relative(root, target);
  if (!within || within.startsWith('..' + path.sep) || within === '..' || path.isAbsolute(within)) {
    throw new Error('Asset outside game package');
  }
  return target;
}
module.exports = { resolveGameAsset };
