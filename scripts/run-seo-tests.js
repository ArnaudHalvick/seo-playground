#!/usr/bin/env node
// Lightweight runner for canonical and sitemap rules without Jest.

const path = require("path");
const assert = require("assert");
const Module = require("module");
const createJiti = require("jiti");

const originalResolve = Module._resolveFilename;
Module._resolveFilename = function patchedResolve(request, parent, isMain, options) {
  if (request.startsWith("@/")) {
    const rewritten = path.join(__dirname, "..", request.slice(2));
    return originalResolve.call(this, rewritten, parent, isMain, options);
  }
  return originalResolve.call(this, request, parent, isMain, options);
};

const jiti = createJiti(__dirname, {
  interopDefault: true,
  alias: {
    "@": path.join(__dirname, ".."),
    "@/*": path.join(__dirname, "..", "*"),
  },
});

const { computeCanonical } = jiti(path.join(__dirname, "..", "lib/rules/canonical.ts"));
const { generateSitemapEntries } = jiti(path.join(__dirname, "..", "lib/rules/sitemap.ts"));
const { DEFAULT_PARAM_CONFIG } = jiti(path.join(__dirname, "..", "lib/rules/params.ts"));

const baseUrl = "https://example.com";

function testCanonical(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (err) {
    console.error(`❌ ${name}`);
    console.error(err.message);
    process.exitCode = 1;
  }
}

function runCanonicalTests() {
  testCanonical("Stacked params (sort + color) canonicalizes to base and noindex", () => {
    const params = new URLSearchParams();
    params.set("sort", "price_desc");
    params.set("color", "black");
    const result = computeCanonical("/catalog/t-shirts/", params, DEFAULT_PARAM_CONFIG, baseUrl);
    assert.strictEqual(result.robots, "noindex,follow");
    assert.strictEqual(result.canonical, "https://example.com/catalog/t-shirts/");
  });

  testCanonical("Pagination page 2 is indexable with self-canonical", () => {
    const params = new URLSearchParams();
    params.set("page", "2");
    const result = computeCanonical("/catalog/t-shirts/", params, DEFAULT_PARAM_CONFIG, baseUrl);
    assert.strictEqual(result.robots, "index,follow");
    assert.strictEqual(result.canonical, "https://example.com/catalog/t-shirts/?page=2");
  });

  testCanonical("Tracking param is non-indexable and stripped in canonical", () => {
    const params = new URLSearchParams();
    params.set("utm_source", "fb");
    const result = computeCanonical("/catalog/t-shirts/", params, DEFAULT_PARAM_CONFIG, baseUrl);
    assert.strictEqual(result.robots, "noindex,follow");
    assert.strictEqual(result.blockInRobots, true);
    assert.strictEqual(result.canonical, "https://example.com/catalog/t-shirts/");
  });

  testCanonical("Page 1 query is treated as base", () => {
    const params = new URLSearchParams();
    params.set("page", "1");
    const result = computeCanonical("/catalog/t-shirts/", params, DEFAULT_PARAM_CONFIG, baseUrl);
    assert.strictEqual(result.robots, "index,follow");
    assert.ok(!result.canonical.includes("page=1"));
  });

  testCanonical("Unstable param alone triggers noindex and canonical to base", () => {
    const params = new URLSearchParams();
    params.set("sort", "price_asc");
    const result = computeCanonical("/catalog/t-shirts/", params, DEFAULT_PARAM_CONFIG, baseUrl);
    assert.strictEqual(result.robots, "noindex,follow");
    assert.strictEqual(result.canonical, "https://example.com/catalog/t-shirts/");
  });

  testCanonical("Stable param alone is treated as variant noindex", () => {
    const params = new URLSearchParams();
    params.set("color", "blue");
    const result = computeCanonical("/catalog/t-shirts/", params, DEFAULT_PARAM_CONFIG, baseUrl);
    assert.strictEqual(result.robots, "noindex,follow");
    assert.strictEqual(result.canonical, "https://example.com/catalog/t-shirts/");
  });
}

function runSitemapTests() {
  const entries = generateSitemapEntries(DEFAULT_PARAM_CONFIG, baseUrl);

  const excludedWithQuery = entries.filter((e) => e.loc.includes("?"));
  try {
    assert.ok(excludedWithQuery.length > 0, "Expected some query-param entries");
    console.log(
      `✅ Query-param entries generated (${excludedWithQuery.length}); included=${excludedWithQuery.filter(
        (e) => e.included
      ).length}`
    );
  } catch (err) {
    console.error("❌ Variant/query URLs excluded from sitemap");
    console.error(err.message);
    process.exitCode = 1;
  }

  try {
    const homeEntry = entries.find((e) => e.loc === "https://example.com/");
    const shopEntry = entries.find((e) => e.loc === "https://example.com/shop/");
    assert.ok(homeEntry?.included, "Home not included");
    assert.ok(shopEntry?.included, "Shop not included");
    console.log("✅ Base pages included");
  } catch (err) {
    console.error("❌ Base pages included");
    console.error(err.message);
    process.exitCode = 1;
  }
}

console.log("Running canonical tests...");
runCanonicalTests();
console.log("\nRunning sitemap tests...");
runSitemapTests();

if (process.exitCode && process.exitCode !== 0) {
  process.exit(process.exitCode);
}
