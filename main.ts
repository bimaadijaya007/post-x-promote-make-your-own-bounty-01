// Entry program for post-x-promote-make-your-own-bounty-01 (Node 22, stdlib only).
//
// The entry is the X post itself: one post quoting make.fun's make-your-own-bounty
// post (https://x.com/makefunai/status/2124915864336236646), with a photo of its
// own, make.fun / @makefunai and the play code in its text. This program only
// hands the post's address to the grader: it reads POST.json from the repository
// root and writes the exact same bytes to <output>/POST.json, where the gate
// reads it. No network, no clock, no randomness, so two runs write identical bytes.
//
// Local run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'POST.json');
const targetPath = join(outDir, 'POST.json');

let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch (err) {
  console.error(`cannot read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error('POST.json must be an object with a string "url" field');
  process.exit(1);
}

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(targetPath, raw);
} catch (err) {
  console.error(`cannot write ${targetPath}: ${(err as Error).message}`);
  process.exit(1);
}
