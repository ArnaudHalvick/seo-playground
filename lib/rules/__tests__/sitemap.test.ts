import { generateSitemapEntries } from '../sitemap';
import { DEFAULT_PARAM_CONFIG } from '../params';

describe('Sitemap generation', () => {
  const baseUrl = 'https://example.com';

  test('Pagination pages should remain indexable and included', () => {
    const entries = generateSitemapEntries(DEFAULT_PARAM_CONFIG, baseUrl);

    const page2Entry = entries.find((e) => e.loc.includes('page=2'));

    expect(page2Entry).toBeDefined();
    expect(page2Entry?.included).toBe(true);
    expect(page2Entry?.reason).toMatch(/Indexable/i);
  });

  test('Variant parameter URLs should be excluded', () => {
    const entries = generateSitemapEntries(DEFAULT_PARAM_CONFIG, baseUrl);

    const excludedWithQuery = entries.filter((e) => e.loc.includes('?'));

    expect(excludedWithQuery.length).toBeGreaterThan(0);
    excludedWithQuery.forEach((entry) => expect(entry.included).toBe(false));
  });

  test('Indexable base pages should be included', () => {
    const entries = generateSitemapEntries(DEFAULT_PARAM_CONFIG, baseUrl);

    const homeEntry = entries.find((e) => e.loc === 'https://example.com/');
    const catalogEntry = entries.find((e) => e.loc === 'https://example.com/catalog/');

    expect(homeEntry?.included).toBe(true);
    expect(catalogEntry?.included).toBe(true);
  });
});
