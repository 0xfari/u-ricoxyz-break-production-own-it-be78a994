import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "I deployed my untested fix straight to production at 4:59pm on a Friday. The fix worked. Production didn't.";
const FALLBACK_OUTPUT_DIR = "/output";

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  return dir && dir.length > 0 ? dir : FALLBACK_OUTPUT_DIR;
}

function ensureOutputDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

function writeEntry(file: string, text: string): void {
  fs.writeFileSync(file, text, { encoding: "utf8" });
}

function run(): void {
  const dir = outputDir();
  ensureOutputDir(dir);
  writeEntry(path.join(dir, "entry.txt"), ENTRY);
}

run();
