#!/usr/bin/env node
/**
 * P0 Seal QA — generates artifacts for ship gate
 * Usage:
 *   DEBUG=1 node scripts/qa-seal-artifacts.mjs   # 5s debug video + computed styles
 *   DEBUG=0 node scripts/qa-seal-artifacts.mjs   # 10s prod video + computed styles
 */
import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "docs", "qa-artifacts");

const isDebug = process.env.DEBUG === "1";
const url = process.env.URL || "http://localhost:3000";
const duration = isDebug ? 5000 : 10000;

mkdirSync(outDir, { recursive: true });

console.log(`\nP0 Seal QA — ${isDebug ? "DEBUG" : "PROD"} mode`);
console.log(`URL: ${url}`);
console.log(`Duration: ${duration / 1000}s\n`);

const browser = await chromium.launch();
const context = await browser.newContext({
  recordVideo: { dir: outDir, size: { width: 1280, height: 900 } },
  viewport: { width: 1280, height: 900 },
});
const page = await context.newPage();

await page.goto(url, { waitUntil: "networkidle" });

// Scroll to seal
const seal = page.locator(".seal").first();
await seal.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);

// Verify data-seal-debug when expected
if (isDebug) {
  const hasDebug = await page.evaluate(
    () => document.documentElement.getAttribute("data-seal-debug") === "1"
  );
  console.log(hasDebug ? "✓ data-seal-debug=1 on <html>" : "✗ data-seal-debug missing!");
}

// Extract computed styles for .seal__rotor
const rotor = page.locator(".seal__rotor").first();
const computed = await rotor.evaluate((el) => {
  const s = getComputedStyle(el);
  return {
    animationName: s.animationName,
    animationDuration: s.animationDuration,
    animationPlayState: s.animationPlayState,
    animationTimingFunction: s.animationTimingFunction,
    animationIterationCount: s.animationIterationCount,
    transform: s.transform,
    transformOrigin: s.transformOrigin,
  };
});

const stylesReport = `# Computed Styles — .seal__rotor
# Captured: ${new Date().toISOString()}
# Mode: ${isDebug ? "DEBUG" : "PROD"}

animation-name: ${computed.animationName}
animation-duration: ${computed.animationDuration}
animation-play-state: ${computed.animationPlayState}
animation-timing-function: ${computed.animationTimingFunction}
animation-iteration-count: ${computed.animationIterationCount}
transform: ${computed.transform}
transform-origin: ${computed.transformOrigin}
`;

const stylesPath = join(
  outDir,
  `seal-computed-styles-${isDebug ? "debug" : "prod"}.txt`
);
writeFileSync(stylesPath, stylesReport);
console.log(`✓ Computed styles: ${stylesPath}`);

// Record for duration
console.log(`Recording ${duration / 1000}s...`);
await page.waitForTimeout(duration);

// Close context — video saves to recordVideo.dir
await context.close();
const video = page.video();
const videoPath = video ? await video.path() : "saved in " + outDir;
console.log(`✓ Video: ${videoPath}`);

console.log("\n--- Computed styles ---");
console.log(stylesReport);

console.log("\nArtifacts in docs/qa-artifacts/");
console.log("Provide: debug video, prod video, computed styles screenshot\n");

await browser.close();
