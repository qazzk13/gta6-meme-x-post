// Entry program for the gta6-meme-x-01 bounty (Node 22, standard library only).
//
// The meme itself lives on X, not in this repo. This program has one job:
// take the POST.json file sitting next to it in the repository and place a
// copy at /output/POST.json, where the bounty gate picks it up and reads the
// post address from it.
//
// The bot directory and the output directory can both be overridden through
// environment variables, which is how the program is tested locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
  console.log(`POST.json copied: ${source} -> ${target}`);
} catch (error) {
  // copyFileSync throws a plain Error in practice, but stay defensive: an
  // unknown throwable should still produce a readable message and exit 1.
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`Could not copy POST.json from ${source}: ${detail}`);
  process.exit(1);
}
