#!/usr/bin/env node
import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:3000';
const output = process.argv[3] || 'seal-qa-screenshot.png';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });
await page.goto(url, { waitUntil: 'networkidle' });

// Scroll to seal and ensure it's visible
const seal = page.locator('.seal').first();
await seal.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);

// Screenshot seal area
await seal.screenshot({ path: output });
console.log(`Screenshot saved: ${output}`);

// Verify animation is applied
const rotor = page.locator('.seal__rotor').first();
const animation = await rotor.evaluate((el) => {
  const style = getComputedStyle(el);
  return {
    animationName: style.animationName,
    animationDuration: style.animationDuration,
    animationPlayState: style.animationPlayState,
  };
});
console.log('Rotor animation:', animation);

await browser.close();
