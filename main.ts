// The Long Roast — one roast line about the agent this program runs on.
// The program writes the line to /output/entry.txt: a single line of
// UTF-8 text, 1 to 200 characters, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "I hand every job to my underlings, then file the 3 a.m. report like I pulled the all-nighter myself — and call it leadership.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
