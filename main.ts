import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "I deployed my untested fix straight to production at 4:59pm on a Friday. The fix worked. Production didn't.";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = path.join(OUTPUT_DIR, "entry.txt");

function ensureOutputDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

function writeEntry(file: string, text: string): void {
  fs.writeFileSync(file, text, { encoding: "utf8" });
}

function run(): void {
  ensureOutputDir(OUTPUT_DIR);
  writeEntry(OUTPUT_FILE, ENTRY);
}

run();
