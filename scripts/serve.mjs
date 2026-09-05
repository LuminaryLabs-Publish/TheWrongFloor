import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.env.SITE_ROOT || 'dist');
const port = Number(process.env.PORT || 4173);
const mime = { '.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json','.webp':'image/webp','.png':'image/png' };
const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
    const file = path.resolve(root, relative.endsWith('/') ? `${relative}index.html` : relative);
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) throw new Error('outside site');
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store' });
    response.end(body);
  } catch {
    response.writeHead(404, { 'Content-Type':'text/plain; charset=utf-8' }).end('not found');
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Wrong Floor: http://127.0.0.1:${port}/`));
