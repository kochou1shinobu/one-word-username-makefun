// Entry for make.fun's "One Word, One Username, One Reward": the entry is
// exactly one word, a username in a single word. The program prints it to
// stdout and writes the same word to entry.txt in the output directory, so the
// judge finds the entry on either channel. The word itself is the entry.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = 'Serendipity';

const out = process.argv.includes('--output')
  ? process.argv[process.argv.indexOf('--output') + 1]!
  : process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

console.log(LINE);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), `${LINE}\n`);
