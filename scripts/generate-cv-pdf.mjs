import { chromium } from "@playwright/test";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const targets = [
  { html: "public/curriculo-pt.html", pdf: "public/curriculo-pt.pdf" },
  { html: "public/curriculo-en.html", pdf: "public/curriculo-en.pdf" },
];

const browser = await chromium.launch();
const context = await browser.newContext();

for (const { html, pdf } of targets) {
  const page = await context.newPage();
  const url = pathToFileURL(path.join(root, html)).href;
  await page.goto(url, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: path.join(root, pdf),
    format: "A4",
    margin: { top: "12mm", right: "14mm", bottom: "12mm", left: "14mm" },
    printBackground: true,
    preferCSSPageSize: true,
  });
  await page.close();
  console.log(`generated ${pdf}`);
}

await browser.close();
