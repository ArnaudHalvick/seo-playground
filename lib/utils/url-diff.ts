export interface UrlDiffSegment {
  text: string;
  type: 'same' | 'removed' | 'added';
}

export function parseUrl(urlString: string): { base: string; params: Map<string, string> } {
  try {
    const url = new URL(urlString, 'http://example.com');
    const params = new Map<string, string>();
    url.searchParams.forEach((value, key) => {
      params.set(key, value);
    });
    return {
      base: url.pathname,
      params,
    };
  } catch {
    return { base: urlString, params: new Map() };
  }
}

export function diffUrls(inputUrl: string, canonicalUrl: string): {
  baseChanged: boolean;
  segments: UrlDiffSegment[];
} {
  const input = parseUrl(inputUrl);
  const canonical = parseUrl(canonicalUrl);

  const baseChanged = input.base !== canonical.base;
  const segments: UrlDiffSegment[] = [];

  segments.push({
    text: canonical.base,
    type: baseChanged ? 'added' : 'same',
  });

  const allKeys = new Set([
    ...Array.from(input.params.keys()),
    ...Array.from(canonical.params.keys()),
  ]);

  const sortedKeys = Array.from(allKeys).sort();

  if (sortedKeys.length > 0) {
    segments.push({ text: '?', type: 'same' });

    sortedKeys.forEach((key, index) => {
      const inputValue = input.params.get(key);
      const canonicalValue = canonical.params.get(key);

      if (inputValue !== undefined && canonicalValue !== undefined) {
        if (inputValue === canonicalValue) {
          segments.push({
            text: `${key}=${canonicalValue}`,
            type: 'same',
          });
        } else {
          segments.push({
            text: `${key}=${inputValue}`,
            type: 'removed',
          });
          segments.push({
            text: `${key}=${canonicalValue}`,
            type: 'added',
          });
        }
      } else if (inputValue !== undefined) {
        segments.push({
          text: `${key}=${inputValue}`,
          type: 'removed',
        });
      } else if (canonicalValue !== undefined) {
        segments.push({
          text: `${key}=${canonicalValue}`,
          type: 'added',
        });
      }

      if (index < sortedKeys.length - 1) {
        segments.push({ text: '&', type: 'same' });
      }
    });
  }

  return { baseChanged, segments };
}
