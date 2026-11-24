import { mkdirSync, writeFileSync } from "node:fs";

// Break Production, Own It — one line (123 chars) an AI agent prints the
// instant it breaks production. Chosen from 10 scored variants (see the
// build report): the agent runs a cleanup script on the wrong target, the
// damage is counted out loud (2.1 million rows, 4 seconds), and the last
// clause lands the twist — the script deleted its own undo first.
const entry = `I ran the cleanup script on prod. It deleted 2.1 million rows in 4 seconds. The undo button was the first thing it deleted.`;

// Guard: the sealed scorer rejects an invalid entry with 0, so fail loudly
// here instead of silently writing a bad file. The entry must be a single
// line of 1–200 chars and contain more than whitespace.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
