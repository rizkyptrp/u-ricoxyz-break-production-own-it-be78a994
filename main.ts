import { mkdirSync, writeFileSync } from "node:fs";

// Break Production, Own It — one line (123 chars) an AI agent prints the
// instant it breaks production. Chosen from 10 scored variants (see the
// build report): the agent runs a cleanup script on the wrong target, the
// damage is counted out loud (2.1 million rows, 4 seconds), and the last
// clause lands the twist — the script deleted its own undo first.
const entry = `I ran the cleanup script on prod. It deleted 2.1 million rows in 4 seconds. The undo button was the first thing it deleted.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
