import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Languages,
  Code2,
  Link as LinkIcon,
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
} from 'lucide-react';

export default function HreflangTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-indigo-600" />
            What is Hreflang?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">
            Hreflang is an HTML attribute that tells search engines about language and regional variants of a page.
            It helps Google serve the right version to the right user based on their language preference and location.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded p-4">
            <p className="text-sm font-semibold mb-2">Without hreflang:</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• French users might see English content in search results</li>
              <li>• Duplicate content issues across language versions</li>
              <li>• Wrong currency/language shown in snippets</li>
              <li>• Poor user experience from language mismatches</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="text-sm font-semibold mb-2">With hreflang:</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Users automatically see their language version</li>
              <li>• Search engines understand content relationships</li>
              <li>• Consolidates SEO signals across equivalent pages</li>
              <li>• Better CTR from relevant language in results</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Syntax and Implementation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-indigo-600" />
            Implementation Syntax
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700 mb-3">
            Hreflang tags go in the <code className="bg-slate-100 px-1 rounded text-xs">{'<head>'}</code> section of your HTML.
            Each page must reference ALL language variants, including itself.
          </p>

          <div className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs font-mono space-y-1">
            <div className="text-slate-400">{'<!-- English version (example.com/en/products) -->'}</div>
            <div>{'<link rel="alternate" hreflang="en" href="https://example.com/en/products/" />'}</div>
            <div>{'<link rel="alternate" hreflang="fr" href="https://example.com/fr/produits/" />'}</div>
            <div>{'<link rel="alternate" hreflang="es" href="https://example.com/es/productos/" />'}</div>
            <div>{'<link rel="alternate" hreflang="de" href="https://example.com/de/produkte/" />'}</div>
            <div>{'<link rel="alternate" hreflang="x-default" href="https://example.com/en/products/" />'}</div>
          </div>

          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Language codes:</strong> Use ISO 639-1 (en, fr, es). Optionally add region: en-US, en-GB, fr-CA.
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            <div className="border rounded p-4 bg-white">
              <p className="font-semibold text-sm mb-2">Language only</p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">hreflang="en"</code>
              <p className="text-xs text-slate-600 mt-1">
                Use when content is same for all English speakers (US, UK, AU, etc.)
              </p>
            </div>

            <div className="border rounded p-4 bg-white">
              <p className="font-semibold text-sm mb-2">Language + Region</p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">hreflang="en-GB"</code>
              <p className="text-xs text-slate-600 mt-1">
                Use when you have UK-specific content (pricing, spelling, local terms)
              </p>
            </div>

            <div className="border rounded p-4 bg-white">
              <p className="font-semibold text-sm mb-2">x-default</p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">hreflang="x-default"</code>
              <p className="text-xs text-slate-600 mt-1">
                Fallback when user's language isn't available. Usually points to English or language selector page.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reciprocity Requirement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LinkIcon className="h-5 w-5 text-indigo-600" />
            Reciprocity Requirement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-red-300 bg-red-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Critical Rule:</strong> Hreflang annotations must be bidirectional. If page A links to page B as an alternate,
              page B must link back to page A. Google will ignore hreflang tags that don't reciprocate.
            </AlertDescription>
          </Alert>

          <div className="bg-white border-2 rounded-lg p-6">
            <p className="font-semibold mb-4 text-center">Reciprocity Diagram</p>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 border-2 border-blue-300 rounded p-3">
                  <p className="font-mono text-xs mb-1">/en/</p>
                  <p className="text-xs text-slate-600">English</p>
                </div>
                <div className="bg-red-50 border-2 border-red-300 rounded p-3">
                  <p className="font-mono text-xs mb-1">/fr/</p>
                  <p className="text-xs text-slate-600">French</p>
                </div>
                <div className="bg-amber-50 border-2 border-amber-300 rounded p-3">
                  <p className="font-mono text-xs mb-1">/es/</p>
                  <p className="text-xs text-slate-600">Spanish</p>
                </div>
              </div>

              <div className="text-center text-xs text-slate-600">
                <p className="mb-2">↕️ All pages reference ALL other pages (including self) ↕️</p>
              </div>

              <div className="bg-slate-100 p-4 rounded space-y-2 text-xs">
                <p className="font-semibold">Each page must include:</p>
                <div className="space-y-1 font-mono text-xs">
                  <div>✓ hreflang="en" → /en/</div>
                  <div>✓ hreflang="fr" → /fr/</div>
                  <div>✓ hreflang="es" → /es/</div>
                  <div>✓ hreflang="x-default" → /en/ (or language selector)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-green-300 bg-green-50 rounded p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <p className="font-semibold text-sm">Correct</p>
              </div>
              <div className="text-xs space-y-1">
                <p className="font-mono">/en/ references: en, fr, es</p>
                <p className="font-mono">/fr/ references: en, fr, es</p>
                <p className="font-mono">/es/ references: en, fr, es</p>
              </div>
              <p className="text-xs text-slate-700 mt-2">All pages reference each other ✓</p>
            </div>

            <div className="border-2 border-red-300 bg-red-50 rounded p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <p className="font-semibold text-sm">Broken</p>
              </div>
              <div className="text-xs space-y-1">
                <p className="font-mono">/en/ references: en, fr, es</p>
                <p className="font-mono">/fr/ references: fr (only itself)</p>
                <p className="font-mono">/es/ references: en, es</p>
              </div>
              <p className="text-xs text-slate-700 mt-2">Non-reciprocal - Google will ignore ✗</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Self-Referencing Canonicals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-indigo-600" />
            Canonicals for International Sites
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-green-300 bg-green-50">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription>
              <strong>Core Rule:</strong> Each locale should have a self-referencing canonical. Do NOT point
              language variants to a single canonical - this signals they are duplicates, which they are not.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-green-300 rounded p-4 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <p className="font-semibold text-sm">Correct: Self-Referencing</p>
              </div>
              <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-2">
                <div className="text-slate-400">{'<!-- /en/products -->'}</div>
                <div>{'<link rel="canonical" href="/en/products/" />'}</div>
                <div className="text-slate-400 mt-3">{'<!-- /fr/produits -->'}</div>
                <div>{'<link rel="canonical" href="/fr/produits/" />'}</div>
                <div className="text-slate-400 mt-3">{'<!-- /es/productos -->'}</div>
                <div>{'<link rel="canonical" href="/es/productos/" />'}</div>
              </div>
              <p className="text-xs text-slate-600 mt-2">Each page is its own canonical ✓</p>
            </div>

            <div className="border-2 border-red-300 rounded p-4 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="h-5 w-5 text-red-600" />
                <p className="font-semibold text-sm">Wrong: Cross-Language Canonical</p>
              </div>
              <div className="bg-slate-900 text-red-400 p-3 rounded text-xs font-mono space-y-2">
                <div className="text-slate-400">{'<!-- /en/products -->'}</div>
                <div>{'<link rel="canonical" href="/en/products/" />'}</div>
                <div className="text-slate-400 mt-3">{'<!-- /fr/produits -->'}</div>
                <div className="line-through">{'<link rel="canonical" href="/en/products/" />'}</div>
                <div className="text-slate-400 mt-3">{'<!-- /es/productos -->'}</div>
                <div className="line-through">{'<link rel="canonical" href="/en/products/" />'}</div>
              </div>
              <p className="text-xs text-slate-600 mt-2">Tells Google FR/ES are duplicates ✗</p>
            </div>
          </div>

          <p className="text-sm text-slate-700">
            <strong>Why self-referencing?</strong> Hreflang tells Google the pages are related but unique.
            Canonical should confirm each version is the preferred URL for its language/region.
          </p>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Common Mistakes to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="border-l-4 border-red-500 bg-red-50 p-3">
            <p className="font-semibold text-sm mb-1">Missing reciprocity</p>
            <p className="text-xs text-slate-700">
              If EN references FR but FR doesn't reference EN, Google ignores both tags.
            </p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-3">
            <p className="font-semibold text-sm mb-1">Missing self-reference</p>
            <p className="text-xs text-slate-700">
              Each page must include hreflang to itself (e.g., /en/ must have hreflang="en" → /en/).
            </p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-3">
            <p className="font-semibold text-sm mb-1">Wrong language codes</p>
            <p className="text-xs text-slate-700">
              Use <code className="bg-red-100 px-1 rounded">en-US</code>, not <code className="bg-red-100 px-1 rounded">en_US</code> or <code className="bg-red-100 px-1 rounded">eng</code>.
            </p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-3">
            <p className="font-semibold text-sm mb-1">Non-absolute URLs</p>
            <p className="text-xs text-slate-700">
              Use <code className="bg-red-100 px-1 rounded">https://example.com/en/</code>, not <code className="bg-red-100 px-1 rounded">/en/</code>.
            </p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-3">
            <p className="font-semibold text-sm mb-1">Cross-language canonicals</p>
            <p className="text-xs text-slate-700">
              Don't point French pages to English canonical - use self-referencing canonicals.
            </p>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-3">
            <p className="font-semibold text-sm mb-1">Missing x-default</p>
            <p className="text-xs text-slate-700">
              Always include x-default for users whose language isn't supported.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Validation */}
      <Card className="bg-blue-50 border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="text-lg">Validation Checklist</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">Every page references all language variants (including itself)</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">All hreflang links are bidirectional (reciprocal)</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">x-default is included and points to fallback language</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">Each locale has self-referencing canonical</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">All URLs are absolute (include https:// and domain)</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">Language codes follow ISO 639-1 format</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">Test with Google Search Console International Targeting report</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

