import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Code2,
  FileText,
  Globe,
  XCircle,
  AlertTriangle,
  Info,
} from 'lucide-react';

export default function ExamplesTab() {
  return (
    <div className="space-y-6">
      {/* Full HTML Implementation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-indigo-600" />
            Complete HTML Implementation
          </CardTitle>
          <CardDescription>
            Full working example showing hreflang tags, canonical, and proper structure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">
            This example shows the complete <code className="bg-slate-100 px-1 rounded text-xs">{'<head>'}</code> section
            for an English product page with French, Spanish, and German variants.
          </p>

          <div className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs font-mono space-y-1 overflow-x-auto">
            <div className="text-slate-400">{'<!DOCTYPE html>'}</div>
            <div className="text-slate-400">{'<html lang="en">'}</div>
            <div className="text-slate-400">{'<head>'}</div>
            <div className="pl-2 text-slate-400">{'<!-- Basic Meta Tags -->'}</div>
            <div className="pl-2">{'<meta charset="UTF-8" />'}</div>
            <div className="pl-2">{'<meta name="viewport" content="width=device-width, initial-scale=1.0" />'}</div>
            <div className="pl-2">{'<title>Premium Headphones | AudioShop</title>'}</div>
            <div className="pl-2">{'<meta name="description" content="High-quality wireless headphones with noise cancellation" />'}</div>
            <div className="pl-2 text-slate-400 mt-2">{'<!-- Canonical (self-referencing) -->'}</div>
            <div className="pl-2 text-yellow-400">{'<link rel="canonical" href="https://example.com/en/products/headphones/" />'}</div>
            <div className="pl-2 text-slate-400 mt-2">{'<!-- Hreflang Tags (all variants + self + x-default) -->'}</div>
            <div className="pl-2 text-cyan-400">{'<link rel="alternate" hreflang="en" href="https://example.com/en/products/headphones/" />'}</div>
            <div className="pl-2 text-cyan-400">{'<link rel="alternate" hreflang="fr" href="https://example.com/fr/produits/casques/" />'}</div>
            <div className="pl-2 text-cyan-400">{'<link rel="alternate" hreflang="es" href="https://example.com/es/productos/auriculares/" />'}</div>
            <div className="pl-2 text-cyan-400">{'<link rel="alternate" hreflang="de" href="https://example.com/de/produkte/kopfhoerer/" />'}</div>
            <div className="pl-2 text-cyan-400">{'<link rel="alternate" hreflang="x-default" href="https://example.com/en/products/headphones/" />'}</div>
            <div className="pl-2 text-slate-400 mt-2">{'<!-- Open Graph (optional but recommended) -->'}</div>
            <div className="pl-2">{'<meta property="og:title" content="Premium Headphones" />'}</div>
            <div className="pl-2">{'<meta property="og:url" content="https://example.com/en/products/headphones/" />'}</div>
            <div className="pl-2">{'<meta property="og:locale" content="en_US" />'}</div>
            <div className="pl-2">{'<meta property="og:locale:alternate" content="fr_FR" />'}</div>
            <div className="pl-2">{'<meta property="og:locale:alternate" content="es_ES" />'}</div>
            <div className="text-slate-400">{'</head>'}</div>
          </div>

          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Key Points:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Canonical is self-referencing (EN points to EN)</li>
                <li>• All hreflang tags use absolute URLs</li>
                <li>• Self-reference included (hreflang="en" on EN page)</li>
                <li>• x-default points to English (fallback)</li>
                <li>• HTML lang attribute matches page language</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Sitemap Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-indigo-600" />
            Sitemap Structure for International Sites
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">
            You have two options for organizing sitemaps: one sitemap per locale, or a single sitemap with hreflang annotations.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-2 border-blue-300">
              <CardHeader>
                <CardTitle className="text-sm">Option 1: Separate Sitemaps (Recommended)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1">
                  <div>sitemap_en.xml</div>
                  <div>sitemap_fr.xml</div>
                  <div>sitemap_es.xml</div>
                  <div>sitemap_de.xml</div>
                </div>
                <div className="text-xs space-y-1">
                  <p>✓ Easier to manage per locale</p>
                  <p>✓ Submit to Search Console per country</p>
                  <p>✓ Clear separation</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-2 border-green-300">
              <CardHeader>
                <CardTitle className="text-sm">Option 2: Single Sitemap with Hreflang</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1">
                  <div>{'<url>'}</div>
                  <div className="pl-2">{'<loc>.../en/products/</loc>'}</div>
                  <div className="pl-2">{'<xhtml:link rel="alternate"'}</div>
                  <div className="pl-4">hreflang="fr"</div>
                  <div className="pl-4">{'href=".../fr/produits/" />'}</div>
                  <div>{'</url>'}</div>
                </div>
                <div className="text-xs space-y-1">
                  <p>✓ Single source of truth</p>
                  <p>✗ More complex XML</p>
                  <p>✗ Larger file size</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs font-mono space-y-1">
            <div className="text-slate-400">{'<!-- Separate Sitemap Example: sitemap_en.xml -->'}</div>
            <div>{'<?xml version="1.0" encoding="UTF-8"?>'}</div>
            <div>{'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'}</div>
            <div className="pl-2">{'<url>'}</div>
            <div className="pl-4">{'<loc>https://example.com/en/</loc>'}</div>
            <div className="pl-4">{'<lastmod>2024-01-15</lastmod>'}</div>
            <div className="pl-4">{'<changefreq>weekly</changefreq>'}</div>
            <div className="pl-4">{'<priority>1.0</priority>'}</div>
            <div className="pl-2">{'</url>'}</div>
            <div className="pl-2">{'<url>'}</div>
            <div className="pl-4">{'<loc>https://example.com/en/products/</loc>'}</div>
            <div className="pl-4">{'<lastmod>2024-01-15</lastmod>'}</div>
            <div className="pl-4">{'<priority>0.8</priority>'}</div>
            <div className="pl-2">{'</url>'}</div>
            <div>{'</urlset>'}</div>
          </div>

          <Alert className="border-amber-300 bg-amber-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Important:</strong> Submit each sitemap to Google Search Console under the appropriate country property.
              For example, submit sitemap_fr.xml to the French property if using separate properties per locale.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Visual Hreflang Flow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-indigo-600" />
            Hreflang Reciprocity Visual
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white border-2 rounded-lg p-6">
            <p className="text-center font-semibold mb-6">How Google Processes Hreflang</p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-1">User searches in French</p>
                  <p className="text-xs text-slate-600">Google detects user language: French (fr)</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-1">Google finds English page in index</p>
                  <p className="text-xs text-slate-600 font-mono">example.com/en/products/headphones/</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-1">Checks EN page for hreflang tags</p>
                  <p className="text-xs text-slate-600">Finds: hreflang="fr" → /fr/produits/casques/</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-1">Verifies reciprocity on FR page</p>
                  <p className="text-xs text-slate-600">FR page must have: hreflang="en" → /en/products/headphones/</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-center gap-4">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  ✓
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-1">Shows French version in results</p>
                  <p className="text-xs text-slate-600 font-mono">example.com/fr/produits/casques/</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-50 border-2 border-red-300 rounded">
              <p className="font-semibold text-sm mb-2 text-red-900">If reciprocity fails:</p>
              <p className="text-xs text-slate-700">
                Google ignores BOTH hreflang tags and may show wrong language to users. This is why reciprocity is critical.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="bg-red-50 border-2 border-red-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-600" />
            Common Pitfalls Illustrated
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {/* Pitfall 1 */}
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <p className="font-semibold text-sm mb-2 text-red-900">Pitfall #1: Non-Reciprocal Links</p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="font-semibold mb-1">English Page:</p>
                  <div className="bg-slate-100 p-2 rounded font-mono">
                    hreflang="fr" → /fr/<br />
                    hreflang="es" → /es/
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-1">French Page:</p>
                  <div className="bg-red-100 p-2 rounded font-mono">
                    hreflang="fr" → /fr/<br />
                    <span className="line-through">Missing EN reference!</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-700 mt-2">
                <strong>Result:</strong> Google ignores all hreflang tags from both pages.
              </p>
            </div>

            {/* Pitfall 2 */}
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <p className="font-semibold text-sm mb-2 text-red-900">Pitfall #2: Cross-Language Canonical</p>
              <div className="text-xs space-y-2">
                <div className="bg-slate-100 p-2 rounded font-mono">
                  FR page: {'<link rel="canonical" href="/en/products/" />'}
                </div>
                <p className="text-slate-700">
                  <strong>Problem:</strong> This tells Google the French page is a duplicate of English.
                  It will only index the English version, defeating the purpose of localization.
                </p>
                <div className="bg-green-100 p-2 rounded font-mono">
                  Correct: {'<link rel="canonical" href="/fr/produits/" />'}
                </div>
              </div>
            </div>

            {/* Pitfall 3 */}
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <p className="font-semibold text-sm mb-2 text-red-900">Pitfall #3: Missing x-default</p>
              <div className="text-xs space-y-2">
                <p className="text-slate-700">
                  Without x-default, users whose language isn't available see unpredictable results.
                  Always include x-default pointing to your fallback language (usually English).
                </p>
                <div className="bg-green-100 p-2 rounded font-mono">
                  {'<link rel="alternate" hreflang="x-default" href="/en/" />'}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

