#!/usr/bin/env node/**


import { promises as fsp } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[2] ?? process.cwd());
const DRY = process.argv.includes('--dry-run');
const EXCLUDE_ROOT = process.argv.includes('--exclude-root');

const charMap = new Map([
  ['ž', 'z'], ['Ž', 'z'],
  ['š', 's'], ['Š', 's'],
  ['č', 'c'], ['Č', 'c'],
  [' ', '_'],
  [',', '_'],
]);

function normalizeBaseName(base) {
  let out = base.toLowerCase();
  out = [...out].map(ch => charMap.get(ch) ?? ch).join('');
  out = out.replace(/_+/g, '_').replace(/^_+|_+$/g, ''); // tidy underscores
  return out || 'file';
}

function normalizedPngName(file) {
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  return `${normalizeBaseName(base)}.png`; // force .png lowercase
}

async function exists(p) {
  try { await fsp.access(p); return true; } catch { return false; }
}

async function renameWithWindowsCaseWorkaround(oldPath, newPath) {
  if (DRY) {
    console.log(`[dry] ${path.relative(ROOT, oldPath)} → ${path.relative(ROOT, newPath)}`);
    return;
  }
  // If only case changes on Windows, do a 2-step rename.
  const sameIgnoringCase = process.platform === 'win32'
    && oldPath.toLowerCase() === newPath.toLowerCase()
    && oldPath !== newPath;

  if (sameIgnoringCase) {
    const tmp = path.join(path.dirname(oldPath), `.__tmp__${Date.now()}-${Math.random().toString(36).slice(2)}.tmp`);
    await fsp.rename(oldPath, tmp);
    await fsp.rename(tmp, newPath);
  } else {
    await fsp.rename(oldPath, newPath);
  }
  console.log(`Renamed: ${path.relative(ROOT, oldPath)} → ${path.basename(newPath)}`);
}

async function safeRename(oldPath, newPath) {
  if (oldPath === newPath) return;
  const dir = path.dirname(newPath);
  const base = path.basename(newPath, '.png');

  let candidate = newPath;
  let i = 1;
  while (await exists(candidate)) {
    candidate = path.join(dir, `${base}-${i}.png`);
    i += 1;
  }
  await renameWithWindowsCaseWorkaround(oldPath, candidate);
}

async function walk(dir, isRoot = false) {
  let entries;
  try {
    entries = await fsp.readdir(dir, { withFileTypes: true });
  } catch (err) {
    console.error(`Cannot read "${dir}": ${err.message}`);
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath, false);
    } else if (entry.isFile()) {
      if (isRoot && EXCLUDE_ROOT) continue;
      if (path.extname(entry.name).toLowerCase() === '.png') {
        const newName = normalizedPngName(entry.name);
        const newPath = path.join(dir, newName);
        await safeRename(fullPath, newPath);
      }
    }
  }
}

(async () => {
  console.log(`Starting at: ${ROOT}${DRY ? ' (dry run)' : ''}${EXCLUDE_ROOT ? ' — excluding root files' : ''}`);
  await walk(ROOT, true);
  console.log('Done.');
})();
