import { generateSitemapEntries } from '../sitemap';
import { DEFAULT_PARAM_CONFIG } from '../params';

describe('Sitemap generation', () => {
  const baseUrl = 'https://example.com';

  test('Page 2+ should be excluded from sitemap', () => {
    const entries = generateSitemapEntries(DEFAULT_PARAM_CONFIG, baseUrl);

    const page2Entry = entries.find((e) => e.loc.includes('page=2'));

    expect(page2Entry).toBeDefined();
    expect(page2Entry?.included).toBe(false);
    expect(page2Entry?.reason).toMatch(/noindex/i);
  });

  test('Noindex pages should be excluded', () => {
    const entries = generateSitemapEntries(DEFAULT_PARAM_CONFIG, baseUrl);

    const searchEntry = entries.find((e) => e.loc.includes('/search'));
    const accountEntry = entries.find((e) => e.loc.includes('/account'));

    expect(searchEntry?.included).toBe(false);
    expect(accountEntry?.included).toBe(false);
  });

  test('Indexable base pages should be included', () => {
    const entries = generateSitemapEntries(DEFAULT_PARAM_CONFIG, baseUrl);

    const homeEntry = entries.find((e) => e.loc === 'https://example.com/');
    const catalogEntry = entries.find((e) => e.loc === 'https://example.com/catalog/');

    expect(homeEntry?.included).toBe(true);
    expect(catalogEntry?.included).toBe(true);
  });

  test('Stacked params canonical (stable only) should be indexable if no unstable', () => {
    const entries = generateSitemapEntries(DEFAULT_PARAM_CONFIG, baseUrl);

    const stackedEntry = entries.find((e) => e.reason?.includes('stacked params'));

    expect(stackedEntry).toBeDefined();
  });
});
