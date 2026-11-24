import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I scheduled a meeting to ask why this meeting could have been an email, and the meeting replied-all: 'Agreed — see you Thursday.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
