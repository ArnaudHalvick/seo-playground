import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Users,
  Languages,
  DollarSign,
  Shield,
  Link as LinkIcon,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
} from 'lucide-react';

export default function LocalizationTab() {
  return (
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
                  <p className="text-xs text-slate-600">&quot;Piece of cake&quot; might not work in all languages</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Use local examples</p>
                  <p className="text-xs text-slate-600">NYC references won&apos;t resonate in Tokyo</p>
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
                  <span className="text-red-600">❌ Bad:</span> &quot;Hot dogs for sale&quot;
                </div>
                <div>
                  <span className="text-green-600">✓ Good (France):</span> &quot;Saucisses grillées&quot;
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
              <strong>Key Principle:</strong> Keep users within their language. Don&apos;t link from French pages to English pages
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
              <p>✓ Remember user&apos;s choice (cookie/localStorage)</p>
              <p>✗ Don&apos;t force auto-redirect based on IP (frustrating for travelers, VPN users)</p>
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
                  <p className="font-mono mb-1">&quot;This offer is only available in the US&quot;</p>
                  <p className="text-slate-600">Why show this on UK site?</p>
                </div>
                <div className="bg-white border-2 border-red-200 rounded p-3">
                  <p className="font-mono mb-1">French page links to English T&Cs</p>
                  <p className="text-slate-600">Legal docs must be translated</p>
                </div>
                <div className="bg-white border-2 border-red-200 rounded p-3">
                  <p className="font-mono mb-1">Machine-translated &quot;Bienvenu a notre cite web&quot;</p>
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
                  <p className="font-mono mb-1">&quot;Free delivery on orders over £50&quot;</p>
                  <p className="text-slate-600">UK-specific offer and currency</p>
                </div>
                <div className="bg-white border-2 border-green-200 rounded p-3">
                  <p className="font-mono mb-1">French T&Cs professionally translated</p>
                  <p className="text-slate-600">Legal compliance + UX</p>
                </div>
                <div className="bg-white border-2 border-green-200 rounded p-3">
                  <p className="font-mono mb-1">&quot;Bienvenue sur notre site&quot;</p>
                  <p className="text-slate-600">Native-level translation</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

