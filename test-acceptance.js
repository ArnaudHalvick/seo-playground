// Simple test to verify acceptance criteria
const { computeCanonical } = require('./lib/rules/canonical.ts');
const { DEFAULT_PARAM_CONFIG } = require('./lib/rules/params.ts');

console.log('Testing SEO acceptance criteria...\n');

const tests = [
  {
    name: '/catalog → index,follow, Included in Sitemap',
    path: '/catalog',
    params: new URLSearchParams(),
    expected: {
      robots: 'index,follow',
      sitemapIncluded: true,
    },
  },
  {
    name: '/catalog/t-shirts?color=black → index,follow, Included in Sitemap',
    path: '/catalog/t-shirts',
    params: new URLSearchParams('color=black'),
    expected: {
      robots: 'index,follow',
      sitemapIncluded: true,
    },
  },
  {
    name: '/catalog/t-shirts?sort=price_desc → noindex,follow, Excluded from Sitemap',
    path: '/catalog/t-shirts',
    params: new URLSearchParams('sort=price_desc'),
    expected: {
      robots: 'noindex,follow',
      sitemapIncluded: false,
    },
  },
  {
    name: '/catalog/t-shirts?page=2 → noindex,follow, Excluded from Sitemap',
    path: '/catalog/t-shirts',
    params: new URLSearchParams('page=2'),
    expected: {
      robots: 'noindex,follow',
      sitemapIncluded: false,
    },
  },
  {
    name: '/catalog/t-shirts?sort=price_desc&color=black → noindex,follow, Excluded, Canonical keeps only color',
    path: '/catalog/t-shirts',
    params: new URLSearchParams('sort=price_desc&color=black'),
    expected: {
      robots: 'noindex,follow',
      sitemapIncluded: false,
      canonicalHas: ['color=black'],
      canonicalNotHas: ['sort'],
    },
  },
];

let passed = 0;
let failed = 0;

tests.forEach((test) => {
  console.log(`\nTest: ${test.name}`);
  const result = computeCanonical(test.path, test.params, DEFAULT_PARAM_CONFIG);

  let testPassed = true;

  if (result.robots !== test.expected.robots) {
    console.log(`  ❌ FAIL: Expected robots "${test.expected.robots}", got "${result.robots}"`);
    testPassed = false;
  } else {
    console.log(`  ✓ Robots: ${result.robots}`);
  }

  if (result.sitemapIncluded !== test.expected.sitemapIncluded) {
    console.log(`  ❌ FAIL: Expected sitemap ${test.expected.sitemapIncluded ? 'INCLUDED' : 'EXCLUDED'}, got ${result.sitemapIncluded ? 'INCLUDED' : 'EXCLUDED'}`);
    testPassed = false;
  } else {
    console.log(`  ✓ Sitemap: ${result.sitemapIncluded ? 'INCLUDED' : 'EXCLUDED'}`);
  }

  if (test.expected.canonicalHas) {
    test.expected.canonicalHas.forEach((str) => {
      if (!result.canonical.includes(str)) {
        console.log(`  ❌ FAIL: Canonical should contain "${str}"`);
        testPassed = false;
      } else {
        console.log(`  ✓ Canonical contains: ${str}`);
      }
    });
  }

  if (test.expected.canonicalNotHas) {
    test.expected.canonicalNotHas.forEach((str) => {
      if (result.canonical.includes(str)) {
        console.log(`  ❌ FAIL: Canonical should NOT contain "${str}"`);
        testPassed = false;
      } else {
        console.log(`  ✓ Canonical does not contain: ${str}`);
      }
    });
  }

  console.log(`  Canonical: ${result.canonical}`);

  if (testPassed) {
    console.log(`  ✅ PASSED`);
    passed++;
  } else {
    failed++;
  }
});

console.log(`\n${'='.repeat(50)}`);
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log(`${'='.repeat(50)}`);

process.exit(failed > 0 ? 1 : 0);
