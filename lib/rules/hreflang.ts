export interface HreflangLink {
  hreflang: string;
  href: string;
}

export interface HreflangResult {
  alternates: HreflangLink[];
  warnings: string[];
}

const SUPPORTED_LANGS = ['en', 'fr'];

export function generateHreflangLinks(
  pathname: string,
  currentLang: string,
  baseUrl: string = 'https://example.com'
): HreflangResult {
  const warnings: string[] = [];
  const alternates: HreflangLink[] = [];

  const pathWithoutLang = pathname.replace(/^\/(en|fr)\//, '/');

  for (const lang of SUPPORTED_LANGS) {
    const href = `${baseUrl}/${lang}${pathWithoutLang}`;
    alternates.push({ hreflang: lang, href });
  }

  alternates.push({
    hreflang: 'x-default',
    href: `${baseUrl}/en${pathWithoutLang}`,
  });

  if (!SUPPORTED_LANGS.includes(currentLang)) {
    warnings.push(`Current language "${currentLang}" not in supported list`);
  }

  return { alternates, warnings };
}

export function validateHreflangReciprocity(alternates: HreflangLink[]): string[] {
  const warnings: string[] = [];

  const hasXDefault = alternates.some((a) => a.hreflang === 'x-default');
  if (!hasXDefault) {
    warnings.push('Missing x-default hreflang link');
  }

  return warnings;
}
