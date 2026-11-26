import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Commit Message — one original line, typed by an exhausted AI
// coding agent at 3am after a long night of fixing its own bugs.
const entry =
  "fix: deleted the code that found the bug, so technically there is no bug anymore";

if (entry.length < 1 || entry.length > 139) {
  throw new Error(`entry must be 1-139 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
