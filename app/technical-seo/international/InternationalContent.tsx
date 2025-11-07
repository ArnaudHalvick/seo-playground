'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Globe, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Info, 
  DollarSign, 
  MapPin, 
  Shield,
  Users,
  Link as LinkIcon,
  Code2,
  Languages,
  FileText
} from 'lucide-react';

export default function InternationalSEOPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-10 w-10 text-indigo-600" />
            <h1 className="text-4xl font-bold">International SEO</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Serve the right language and region version to each searcher while consolidating SEO equity across equivalent content
          </p>
          <Alert className="border-indigo-300 bg-indigo-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Goal:</strong> Reach global audiences by making your content discoverable and relevant in different languages and regions, 
              while maintaining strong SEO signals through proper technical implementation.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="url-strategies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="url-strategies">URL Strategies</TabsTrigger>
            <TabsTrigger value="hreflang">Hreflang & Canonicals</TabsTrigger>
            <TabsTrigger value="localization">Localization</TabsTrigger>
            <TabsTrigger value="examples">Live Examples</TabsTrigger>
          </TabsList>

          {/* Tab 1: URL Strategies */}
          <TabsContent value="url-strategies" className="space-y-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                    Choosing Your URL Structure
                  </CardTitle>
                  <CardDescription>
                    The foundation of international SEO - this decision impacts everything from technical implementation to SEO authority
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-slate-700">
                    There are three main URL strategies for international sites. Each has trade-offs in terms of SEO authority, 
                    geo-targeting capability, technical complexity, and cost. Choose based on your business needs and resources.
                  </p>

                  {/* Comparison Table */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {/* ccTLD */}
                    <Card className="border-2 border-blue-300 bg-blue-50">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Globe className="h-5 w-5 text-blue-600" />
                          ccTLD
                        </CardTitle>
                        <CardDescription className="text-slate-700">
                          Country Code Top-Level Domain
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-white p-3 rounded border border-blue-200">
                          <p className="text-xs text-slate-600 mb-1">Examples:</p>
                          <code className="text-xs font-mono">example.co.uk</code><br />
                          <code className="text-xs font-mono">example.de</code><br />
                          <code className="text-xs font-mono">example.fr</code>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Strongest geo-targeting</p>
                              <p className="text-xs text-slate-600">Clear signal to search engines about target country</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">User trust</p>
                              <p className="text-xs text-slate-600">Local domains feel more trustworthy to users</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Expensive</p>
                              <p className="text-xs text-slate-600">Must purchase and maintain multiple domains</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">No shared authority</p>
                              <p className="text-xs text-slate-600">Each domain starts from zero SEO authority</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Complex infrastructure</p>
                              <p className="text-xs text-slate-600">Multiple hosting, SSL certs, maintenance</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-100 p-3 rounded border border-blue-300">
                          <p className="text-xs font-semibold mb-1">Use ccTLD when:</p>
                          <ul className="text-xs text-slate-700 space-y-1">
                            <li>• Large established brand with resources</li>
                            <li>• Country-specific legal requirements</li>
                            <li>• Completely different content per country</li>
                            <li>• Long-term commitment to markets</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Subdomain */}
                    <Card className="border-2 border-green-300 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Globe className="h-5 w-5 text-green-600" />
                          Subdomain
                        </CardTitle>
                        <CardDescription className="text-slate-700">
                          Language/region on subdomain
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-white p-3 rounded border border-green-200">
                          <p className="text-xs text-slate-600 mb-1">Examples:</p>
                          <code className="text-xs font-mono">uk.example.com</code><br />
                          <code className="text-xs font-mono">de.example.com</code><br />
                          <code className="text-xs font-mono">fr.example.com</code>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Easier setup</p>
                              <p className="text-xs text-slate-600">Single domain, DNS configuration only</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Flexible hosting</p>
                              <p className="text-xs text-slate-600">Can host subdomains on different servers/CDNs</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Treated as separate sites</p>
                              <p className="text-xs text-slate-600">Google treats subdomains almost like separate domains</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Limited authority sharing</p>
                              <p className="text-xs text-slate-600">Less link equity transfer than subfolder</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Weaker geo-targeting</p>
                              <p className="text-xs text-slate-600">Must configure in Search Console</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-100 p-3 rounded border border-green-300">
                          <p className="text-xs font-semibold mb-1">Use subdomain when:</p>
                          <ul className="text-xs text-slate-700 space-y-1">
                            <li>• Need separate hosting per region</li>
                            <li>• Different tech stacks per locale</li>
                            <li>• Want separation but not ccTLD cost</li>
                            <li>• Testing international expansion</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Subfolder */}
                    <Card className="border-2 border-purple-300 bg-purple-50">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Globe className="h-5 w-5 text-purple-600" />
                          Subfolder
                        </CardTitle>
                        <CardDescription className="text-slate-700">
                          Language/region in URL path
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-white p-3 rounded border border-purple-200">
                          <p className="text-xs text-slate-600 mb-1">Examples:</p>
                          <code className="text-xs font-mono">example.com/uk/</code><br />
                          <code className="text-xs font-mono">example.com/de/</code><br />
                          <code className="text-xs font-mono">example.com/fr/</code>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Shared authority</p>
                              <p className="text-xs text-slate-600">All locales benefit from domain authority</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Easiest to set up</p>
                              <p className="text-xs text-slate-600">No DNS changes, just routing</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Simple maintenance</p>
                              <p className="text-xs text-slate-600">Single codebase, hosting, SSL cert</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Cost-effective</p>
                              <p className="text-xs text-slate-600">No additional domain costs</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">Weaker geo-targeting</p>
                              <p className="text-xs text-slate-600">Must use hreflang and Search Console</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-100 p-3 rounded border border-purple-300">
                          <p className="text-xs font-semibold mb-1">Use subfolder when:</p>
                          <ul className="text-xs text-slate-700 space-y-1">
                            <li>• Limited budget or resources</li>
                            <li>• Want to leverage existing domain authority</li>
                            <li>• Shared hosting infrastructure</li>
                            <li>• Most common choice (recommended for most)</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Real-World Examples */}
                  <Card className="bg-slate-50 border-2">
                    <CardHeader>
                      <CardTitle className="text-lg">Real-World Examples</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded p-4 bg-white">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-blue-100 text-blue-800 border-blue-300">ccTLD</Badge>
                            <p className="font-semibold text-sm">Amazon</p>
                          </div>
                          <ul className="text-xs text-slate-700 space-y-1">
                            <li>• <code className="bg-slate-100 px-1 rounded">amazon.com</code> (US)</li>
                            <li>• <code className="bg-slate-100 px-1 rounded">amazon.co.uk</code> (UK)</li>
                            <li>• <code className="bg-slate-100 px-1 rounded">amazon.de</code> (Germany)</li>
                            <li>• <code className="bg-slate-100 px-1 rounded">amazon.fr</code> (France)</li>
                          </ul>
                          <p className="text-xs text-slate-600 mt-2">
                            <strong>Why:</strong> Massive brand with resources, country-specific content, legal requirements
                          </p>
                        </div>

                        <div className="border rounded p-4 bg-white">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-purple-100 text-purple-800 border-purple-300">Subfolder</Badge>
                            <p className="font-semibold text-sm">Airbnb</p>
                          </div>
                          <ul className="text-xs text-slate-700 space-y-1">
                            <li>• <code className="bg-slate-100 px-1 rounded">airbnb.com</code> (Global/EN)</li>
                            <li>• <code className="bg-slate-100 px-1 rounded">airbnb.com/fr/</code> (French)</li>
                            <li>• <code className="bg-slate-100 px-1 rounded">airbnb.com/es/</code> (Spanish)</li>
                            <li>• <code className="bg-slate-100 px-1 rounded">airbnb.com/de/</code> (German)</li>
                          </ul>
                          <p className="text-xs text-slate-600 mt-2">
                            <strong>Why:</strong> Leverages strong domain authority, simpler infrastructure, mostly language variations
                          </p>
                        </div>

                        <div className="border rounded p-4 bg-white">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-purple-100 text-purple-800 border-purple-300">Subfolder</Badge>
                            <p className="font-semibold text-sm">Spotify</p>
                          </div>
                          <ul className="text-xs text-slate-700 space-y-1">
                            <li>• <code className="bg-slate-100 px-1 rounded">spotify.com/us/</code> (US)</li>
                            <li>• <code className="bg-slate-100 px-1 rounded">spotify.com/gb/</code> (UK)</li>
                            <li>• <code className="bg-slate-100 px-1 rounded">spotify.com/de/</code> (Germany)</li>
                          </ul>
                          <p className="text-xs text-slate-600 mt-2">
                            <strong>Why:</strong> Content is similar across markets, wants unified brand presence
                          </p>
                        </div>

                        <div className="border rounded p-4 bg-white">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-blue-100 text-blue-800 border-blue-300">ccTLD</Badge>
                            <p className="font-semibold text-sm">BBC</p>
                          </div>
                          <ul className="text-xs text-slate-700 space-y-1">
                            <li>• <code className="bg-slate-100 px-1 rounded">bbc.com</code> (International)</li>
                            <li>• <code className="bg-slate-100 px-1 rounded">bbc.co.uk</code> (UK)</li>
                          </ul>
                          <p className="text-xs text-slate-600 mt-2">
                            <strong>Why:</strong> Different content and legal/licensing requirements per region
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Decision Matrix */}
                  <Alert className="border-indigo-300 bg-indigo-50">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Quick Decision Guide:</strong>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• <strong>Most sites should use subfolder</strong> - easiest, most cost-effective, shares authority</li>
                        <li>• Use ccTLD only if you have significant resources and country-specific needs</li>
                        <li>• Subdomain is rarely optimal - consider only for technical separation needs</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 2: Hreflang & Canonicals */}
          <TabsContent value="hreflang" className="space-y-6">
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
          </TabsContent>

          {/* Tab 3: Localization Best Practices */}
          <TabsContent value="localization" className="space-y-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-indigo-600" />
                    Beyond Translation: True Localization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-amber-300 bg-amber-50">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Common Mistake:</strong> Running content through Google Translate and calling it "localized". 
                      True localization adapts content, UX, and legal elements to local culture and expectations.
                    </AlertDescription>
                  </Alert>

                  <p className="text-sm text-slate-700">
                    Localization means making your site feel native to each market. This goes far beyond word-for-word translation 
                    to encompass cultural adaptation, local conventions, and market-specific requirements.
                  </p>
                </CardContent>
              </Card>

              {/* Three-Column Checklist */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Content Localization */}
                <Card className="border-2 border-purple-300">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Languages className="h-5 w-5 text-purple-600" />
                      Content
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Translate professionally</p>
                          <p className="text-xs text-slate-600">Use native speakers, not machine translation alone</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Adapt idioms & phrases</p>
                          <p className="text-xs text-slate-600">"Piece of cake" might not work in all languages</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Use local examples</p>
                          <p className="text-xs text-slate-600">NYC references won't resonate in Tokyo</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Localize imagery</p>
                          <p className="text-xs text-slate-600">Show people and contexts from target market</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Cultural sensitivity</p>
                          <p className="text-xs text-slate-600">Avoid gestures/colors/symbols that offend</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Transcreate marketing copy</p>
                          <p className="text-xs text-slate-600">Capture intent and tone, not literal words</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded p-3 mt-4">
                      <p className="text-xs font-semibold mb-2">Example:</p>
                      <div className="space-y-1 text-xs">
                        <div>
                          <span className="text-red-600">❌ Bad:</span> "Hot dogs for sale"
                        </div>
                        <div>
                          <span className="text-green-600">✓ Good (France):</span> "Saucisses grillées"
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* UX Localization */}
                <Card className="border-2 border-blue-300">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                      UX & Formatting
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Currency</p>
                          <p className="text-xs text-slate-600">Show USD ($) in US, GBP (£) in UK, EUR (€) in France</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Date formats</p>
                          <p className="text-xs text-slate-600">US: MM/DD/YYYY, UK: DD/MM/YYYY, ISO: YYYY-MM-DD</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Time formats</p>
                          <p className="text-xs text-slate-600">US: 12-hour (2:00 PM), most of world: 24-hour (14:00)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Number formatting</p>
                          <p className="text-xs text-slate-600">US: 1,234.56 vs Germany: 1.234,56</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Units of measure</p>
                          <p className="text-xs text-slate-600">US: miles/°F, rest: km/°C</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Phone formats</p>
                          <p className="text-xs text-slate-600">+1 (555) 123-4567 vs +44 20 1234 5678</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Address formats</p>
                          <p className="text-xs text-slate-600">Vary wildly by country (postcode position, etc.)</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded p-3 mt-4">
                      <p className="text-xs font-semibold mb-2">Example:</p>
                      <div className="space-y-1 text-xs">
                        <div>
                          <span className="font-semibold">US:</span> $1,234.56 on 3/15/2024
                        </div>
                        <div>
                          <span className="font-semibold">DE:</span> 1.234,56 € am 15.03.2024
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Legal & Compliance */}
                <Card className="border-2 border-green-300">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      Legal & Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Privacy policies</p>
                          <p className="text-xs text-slate-600">GDPR (EU), CCPA (California), local requirements</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Terms & conditions</p>
                          <p className="text-xs text-slate-600">Adapt to local consumer protection laws</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Cookie consent</p>
                          <p className="text-xs text-slate-600">EU requires explicit opt-in</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Return policies</p>
                          <p className="text-xs text-slate-600">EU: 14-day cooling-off period mandatory</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Disclaimers</p>
                          <p className="text-xs text-slate-600">Medical/financial advice varies by jurisdiction</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Contact information</p>
                          <p className="text-xs text-slate-600">Local business address, support hours, language</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded p-3 mt-4">
                      <p className="text-xs font-semibold mb-2">Critical:</p>
                      <p className="text-xs text-slate-700">
                        Legal requirements vary significantly. Always consult legal counsel for each target market.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Internal Linking Strategy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-indigo-600" />
                    Internal Linking Across Locales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-blue-300 bg-blue-50">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Key Principle:</strong> Keep users within their language. Don't link from French pages to English pages 
                      unless absolutely necessary. Each locale should be a complete experience.
                    </AlertDescription>
                  </Alert>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-2 border-green-300 rounded p-4 bg-white">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <p className="font-semibold text-sm">Good Internal Linking</p>
                      </div>
                      <ul className="text-xs space-y-2">
                        <li>• French homepage → French category pages</li>
                        <li>• French product → Related French products</li>
                        <li>• French blog → Other French blog posts</li>
                        <li>• Complete navigation within locale</li>
                      </ul>
                      <p className="text-xs text-slate-600 mt-2">User never leaves French version ✓</p>
                    </div>

                    <div className="border-2 border-red-300 rounded p-4 bg-white">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="h-5 w-5 text-red-600" />
                        <p className="font-semibold text-sm">Poor Internal Linking</p>
                      </div>
                      <ul className="text-xs space-y-2">
                        <li>• French homepage → English blog</li>
                        <li>• French product → English checkout</li>
                        <li>• Missing French versions of pages</li>
                        <li>• Language switcher as only navigation</li>
                      </ul>
                      <p className="text-xs text-slate-600 mt-2">Breaks user experience and dilutes SEO ✗</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded p-4">
                    <p className="font-semibold text-sm mb-2">Language Switcher</p>
                    <p className="text-xs text-slate-700 mb-2">
                      Provide a language/region switcher in header/footer, but it should be secondary navigation. 
                      Primary navigation should stay within locale.
                    </p>
                    <div className="text-xs space-y-1">
                      <p>✓ Place in header or footer</p>
                      <p>✓ Switch to equivalent page in other language</p>
                      <p>✓ Remember user's choice (cookie/localStorage)</p>
                      <p>✗ Don't force auto-redirect based on IP (frustrating for travelers, VPN users)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Good vs Bad Localization Examples */}
              <Card className="bg-gradient-to-r from-red-50 to-green-50 border-2">
                <CardHeader>
                  <CardTitle>Good vs Bad Localization Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-sm mb-3 text-red-700">❌ Bad Localization</p>
                      <div className="space-y-3 text-xs">
                        <div className="bg-white border-2 border-red-200 rounded p-3">
                          <p className="font-mono mb-1">German site shows $USD</p>
                          <p className="text-slate-600">Should show €EUR</p>
                        </div>
                        <div className="bg-white border-2 border-red-200 rounded p-3">
                          <p className="font-mono mb-1">"This offer is only available in the US"</p>
                          <p className="text-slate-600">Why show this on UK site?</p>
                        </div>
                        <div className="bg-white border-2 border-red-200 rounded p-3">
                          <p className="font-mono mb-1">French page links to English T&Cs</p>
                          <p className="text-slate-600">Legal docs must be translated</p>
                        </div>
                        <div className="bg-white border-2 border-red-200 rounded p-3">
                          <p className="font-mono mb-1">Machine-translated "Bienvenu a notre cite web"</p>
                          <p className="text-slate-600">Grammatically incorrect</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-sm mb-3 text-green-700">✓ Good Localization</p>
                      <div className="space-y-3 text-xs">
                        <div className="bg-white border-2 border-green-200 rounded p-3">
                          <p className="font-mono mb-1">German site shows €124,99</p>
                          <p className="text-slate-600">Correct currency and formatting</p>
                        </div>
                        <div className="bg-white border-2 border-green-200 rounded p-3">
                          <p className="font-mono mb-1">"Free delivery on orders over £50"</p>
                          <p className="text-slate-600">UK-specific offer and currency</p>
                        </div>
                        <div className="bg-white border-2 border-green-200 rounded p-3">
                          <p className="font-mono mb-1">French T&Cs professionally translated</p>
                          <p className="text-slate-600">Legal compliance + UX</p>
                        </div>
                        <div className="bg-white border-2 border-green-200 rounded p-3">
                          <p className="font-mono mb-1">"Bienvenue sur notre site"</p>
                          <p className="text-slate-600">Native-level translation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 4: Live Examples */}
          <TabsContent value="examples" className="space-y-6">
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
          </TabsContent>
        </Tabs>

        {/* Summary Footer */}
        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 mt-8">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-600" />
              International SEO Checklist
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Choose URL structure: subfolder recommended for most sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Implement hreflang tags with full reciprocity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use self-referencing canonicals per locale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Include x-default for fallback language</span>
                </li>
              </ul>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Localize content, UX, and legal elements (not just translate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Adapt currency, dates, units, and formatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Keep internal links within each locale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Test with Google Search Console International Targeting</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}

