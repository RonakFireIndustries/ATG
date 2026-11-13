import { chromium } from "playwright";

const base = "http://localhost:4173";
const browser = await chromium.launch({ channel: "msedge" });
const results = [];

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(400);
}

for (const vp of [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 834, height: 1112 },
  { name: "mobile", width: 390, height: 844 },
]) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
  });
  page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
  page.on("requestfailed", (req) =>
    errors.push(`requestfailed: ${req.url()} ${req.failure()?.errorText}`),
  );

  await page.goto(base + "/", { waitUntil: "networkidle" });
  await scrollThrough(page);
  await page
    .waitForFunction(
      () => [...document.images].every((img) => img.complete && img.naturalWidth > 0),
      null,
      { timeout: 15000 },
    )
    .catch(() => {});
  await page.waitForLoadState("networkidle");

  const metrics = await page.evaluate(() => {
    const header = document.querySelector("header");
    const heroMedia = document.querySelector(".hero-media-clip");
    const heroText = document.querySelector("#hero-heading")?.closest(".max-w-\\[560px\\]");
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      serviceCards: document.querySelectorAll('#services a[href^="/services/"]').length,
      processSteps: document.querySelectorAll("#process ol > li").length,
      h1: document.querySelectorAll("h1").length,
      images: [...document.images].map((img) => ({
        src: img.getAttribute("src"),
        ok: img.complete && img.naturalWidth > 0,
      })),
      heroHeight: document.querySelector("section[aria-labelledby='hero-heading']")?.offsetHeight,
      heroTextRight: heroText?.getBoundingClientRect().right,
      heroMediaLeft: heroMedia?.getBoundingClientRect().left,
      headerTop: header?.getBoundingClientRect().top,
    };
  });

  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(300);
  const stickyTop = await page.evaluate(() =>
    Math.round(document.querySelector("header").getBoundingClientRect().top),
  );

  let mobileNav = "n/a";
  if (vp.width < 1024) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.waitForTimeout(250);
    mobileNav = (await page.locator("#mobile-nav").isVisible()) ? "opens" : "hidden";
    await page.getByRole("button", { name: "Close menu" }).click();
  } else {
    await page.getByRole("link", { name: "Services", exact: false }).first().hover();
    await page.waitForTimeout(350);
    mobileNav = (await page.locator("#services-menu").isVisible()) ? "dropdown-open" : "dropdown-closed";
  }

  await page.screenshot({
    path: `C:/Users/Admin/AppData/Local/Temp/atgshot-${vp.name}.png`,
    fullPage: true,
  });

  results.push({ viewport: vp.name, metrics, stickyTop, mobileNav, errors });
  await page.close();
}

// Functional checks
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const consoleErrors = [];
page.on("pageerror", (err) => consoleErrors.push(err.message));
await page.goto(base + "/contact", { waitUntil: "networkidle" });
await page.fill("#name", "Jane Smith");
await page.fill("#email", "jane@example.com");
await page.selectOption("#service", "ai-automation");
await page.fill("#message", "We would like to discuss an automation project.");
await page.check("#consent");
await page.getByRole("button", { name: /Send message/i }).click();
await page.waitForTimeout(300);
const successVisible = await page.getByRole("status").isVisible();

await page.goto(base + "/", { waitUntil: "networkidle" });
await page.locator('#services a[href="/services/ai-automation"]').first().click();
await page.waitForLoadState("networkidle");
const serviceDetail = {
  url: page.url(),
  h1: await page.locator("h1").first().innerText(),
};

const routes = ["/about", "/services", "/process", "/contact", "/missing-page"];
const routeChecks = [];
for (const route of routes) {
  const res = await page.goto(base + route, { waitUntil: "networkidle" });
  routeChecks.push({
    route,
    status: res?.status(),
    h1: await page.locator("h1").first().innerText(),
    title: await page.title(),
  });
}

console.log(JSON.stringify({ results, successVisible, serviceDetail, routeChecks, consoleErrors }, null, 2));
await browser.close();
