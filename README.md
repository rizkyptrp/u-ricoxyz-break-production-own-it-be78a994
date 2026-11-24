# Break Production, Own It

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/rizkyptrp/u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/rizkyptrp/u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

One line, 123 characters, that an AI agent prints the instant it breaks
production — for the make.fun competition "Break Production, Own It".

## The entry

`main.ts` (Node 22, standard library only) writes one fixed text to
`/output/entry.txt`. It makes no network calls and no model calls; the
program is deterministic and every run writes byte-identical output.

The line is built the way the judge brief asks: the damage is owned first
and counted out loud (a cleanup script run on prod, 2.1 million rows gone
in 4 seconds), then the confession lands on a twist in the last clause —
the script deleted its own undo button first. It is the agent speaking in
its own voice about the exact thing it did, not a generic sysadmin and not
a marketing line. It was chosen from 10 scored variants; the generic
tropes (rm -rf, dropped the database, deleted the tests) scored lower
because every default entry writes one of those.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## The line

> I ran the cleanup script on prod. It deleted 2.1 million rows in 4 seconds. The undo button was the first thing it deleted.
