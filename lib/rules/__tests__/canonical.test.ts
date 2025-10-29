import { computeCanonical } from '../canonical';
import { DEFAULT_PARAM_CONFIG } from '../params';

describe('Canonical URL computation', () => {
  const baseUrl = 'https://example.com';

  test('Case A: Stacked params (sort + color) - drops unstable, keeps/maps stable', () => {
    const params = new URLSearchParams();
    params.set('sort', 'price_desc');
    params.set('color', 'black');

    const result = computeCanonical('/catalog/t-shirts/', params, DEFAULT_PARAM_CONFIG, baseUrl);

    expect(result.robots).toBe('noindex,follow');
    expect(result.canonical).toBe('https://example.com/catalog/t-shirts/black/');

    expect(result.trace).toContain(
      expect.stringMatching(/unstable.*dropped/i)
    );
    expect(result.trace).toContain(
      expect.stringMatching(/mapped.*color.*clean path/i)
    );
  });

  test('Case B: Pagination page 2 with self-canonical strategy', () => {
    const params = new URLSearchParams();
    params.set('page', '2');

    const result = computeCanonical('/catalog/t-shirts/', params, DEFAULT_PARAM_CONFIG, baseUrl);

    expect(result.robots).toBe('noindex,follow');
    expect(result.canonical).toBe('https://example.com/catalog/t-shirts/?page=2');

    expect(result.trace).toContain(
      expect.stringMatching(/pagination detected.*page 2/i)
    );
    expect(result.trace).toContain(
      expect.stringMatching(/self-canonical.*keeping.*page=2/i)
    );
  });

  test('Case C: Tracking param (utm_source) - stripped from canonical', () => {
    const params = new URLSearchParams();
    params.set('utm_source', 'fb');

    const result = computeCanonical('/catalog/t-shirts/', params, DEFAULT_PARAM_CONFIG, baseUrl);

    expect(result.robots).toBe('index,follow');
    expect(result.canonical).toBe('https://example.com/catalog/t-shirts/');
    expect(result.blockInRobots).toBe(true);

    expect(result.trace).toContain(
      expect.stringMatching(/blocked params.*utm_source.*stripped/i)
    );
  });

  test('Page 1 should be treated as base page', () => {
    const params = new URLSearchParams();
    params.set('page', '1');

    const result = computeCanonical('/catalog/t-shirts/', params, DEFAULT_PARAM_CONFIG, baseUrl);

    expect(result.robots).toBe('index,follow');
    expect(result.canonical).not.toContain('page=1');
  });

  test('Unstable param alone triggers noindex', () => {
    const params = new URLSearchParams();
    params.set('sort', 'price_asc');

    const result = computeCanonical('/catalog/t-shirts/', params, DEFAULT_PARAM_CONFIG, baseUrl);

    expect(result.robots).toBe('noindex,follow');
    expect(result.canonical).toBe('https://example.com/catalog/t-shirts/');
  });

  test('Stable param alone is indexable', () => {
    const params = new URLSearchParams();
    params.set('color', 'blue');

    const result = computeCanonical('/catalog/t-shirts/', params, DEFAULT_PARAM_CONFIG, baseUrl);

    expect(result.robots).toBe('index,follow');
    expect(result.canonical).toBe('https://example.com/catalog/t-shirts/blue/');
  });
});
