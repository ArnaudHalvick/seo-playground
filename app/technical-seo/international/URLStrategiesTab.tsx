import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Globe,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
} from 'lucide-react';

export default function URLStrategiesTab() {
  return (
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
  );
}

