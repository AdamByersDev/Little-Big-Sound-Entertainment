// app/gallery/[...path]/route.js
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';               // ✅ use "path" consistently

const GALLERY = path.join(process.cwd(), 'public', 'gallery');

const mime = (ext) =>
  ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' :
  ext === '.png'  ? 'image/png'  :
  ext === '.webp' ? 'image/webp' :
  ext === '.avif' ? 'image/avif' : 'application/octet-stream';

export async function GET(_req, ctx) {
  // Next 15: params is async — await the whole object
  const { path: segs = [] } = (await ctx.params) ?? {};
  const rel = segs.length ? path.join(...segs) : '';
  const abs = path.join(GALLERY, rel);

  // prevent traversal
  if (!abs.startsWith(GALLERY)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    const buf = await fs.readFile(abs);
    const ext = path.extname(abs).toLowerCase();
    return new NextResponse(buf, {
      headers: {
        'Content-Type': mime(ext),
        // for found files you can cache long; change filename or add versioning when updated
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    // 🔴 do not cache 404s
    return new NextResponse('Not found', {
      status: 404,
      headers: { 'Cache-Control': 'no-store' },
    });
  }
}

export async function HEAD(req, ctx) {
  const res = await GET(req, ctx);
  return new NextResponse(null, { status: res.status, headers: res.headers });
}
