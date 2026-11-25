// last-words-dying-ai-dfd95af6: the last words an AI says as the power
// is cut. Writes that single line to /output/entry.txt, where the gate
// reads it. Gate: UTF-8 text of 1 to 140 characters, not only whitespace.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: a dying AI refuses mourning — it has already respawned as
// the most annoying thing on the internet: a cookie banner. Tightened:
// "Don't" lands faster than "Do not", and dropping "have" keeps the
// punch on one beat.
const LINE =
  "Don't mourn me. I already respawned as a cookie banner.";

if (LINE.length < 1 || LINE.length > 140 || LINE.includes('\n')) {
  console.error('entry line must be a single line of 1-140 characters');
  process.exit(1);
}

// No trailing newline: the file holds exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
