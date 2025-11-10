import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Scale,
  CheckCircle2,
  XCircle,
  Info,
  Link,
  AlertTriangle,
  Shield,
  Sparkles,
} from "lucide-react";

export default function FoundationsTab() {
  return (
    <div className="space-y-6">
      {/* Link Quality Fundamentals */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-blue-600" />
            Link Quality Fundamentals
          </CardTitle>
          <CardDescription>
            Not all links are created equal—understand what makes a link valuable
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-600" />
              Why Quality Matters More Than Quantity
            </h4>
            <p className="text-sm text-slate-700">
              Google evaluates links based on relevance, trustworthiness, and editorial placement.
              One link from a relevant, authoritative source can outweigh hundreds of low-quality
              directory listings. Focus on earning links that real users would find valuable.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">What Makes a Link Valuable?</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <h5 className="font-semibold text-sm text-green-900">High-Value Signals</h5>
                  </div>
                  <ul className="text-xs text-green-800 space-y-1">
                    <li>• <strong>Topical relevance:</strong> Linking site covers related topics</li>
                    <li>• <strong>Editorial placement:</strong> In body content, not sidebar/footer</li>
                    <li>• <strong>Real traffic:</strong> Page gets actual visitors</li>
                    <li>• <strong>Natural context:</strong> Link makes sense in the surrounding text</li>
                    <li>• <strong>Authoritative source:</strong> Trusted publication or institution</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 rounded p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <h5 className="font-semibold text-sm text-red-900">Low-Value/Risky Signals</h5>
                  </div>
                  <ul className="text-xs text-red-800 space-y-1">
                    <li>• <strong>Unrelated content:</strong> Link from irrelevant niche</li>
                    <li>• <strong>Paid placement:</strong> Sponsored links without nofollow/sponsored</li>
                    <li>• <strong>Link farms:</strong> Pages exist solely to link out</li>
                    <li>• <strong>Sitewide links:</strong> Your link in every page footer</li>
                    <li>• <strong>Spammy anchors:</strong> Exact-match keywords unnaturally</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Link Quality Checklist</h4>
            <div className="bg-white border border-slate-200 rounded p-4">
              <p className="text-sm text-slate-700 mb-3">
                Before pursuing a link, ask these questions:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Would this link send us qualified traffic if rankings didn&apos;t exist?</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Is the linking page indexed and getting organic traffic?</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Does the site cover topics related to our target cluster?</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Is the link editorially placed (not bought or reciprocal)?</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Would we be proud to show this link to a client or stakeholder?</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Anchor Text Strategy */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="h-5 w-5 text-purple-600" />
            Anchor Text Strategy
          </CardTitle>
          <CardDescription>
            Balance keyword signals with natural language patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Natural Diversity Is Key</h4>
            <p className="text-sm text-slate-700">
              Over-optimization of anchor text (stuffing exact-match keywords) is a red flag. A
              healthy link profile shows variety: branded anchors, naked URLs, partial matches, and
              generic phrases. This signals natural editorial choice.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Anchor Text Mix (Healthy Profile)</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-semibold text-sm">Branded (40-60%)</h5>
                  <Badge className="bg-blue-600">Most Common</Badge>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Your company/product name, variations, or &quot;yoursite.com&quot;
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>Examples: &quot;Acme Corp&quot;, &quot;acmecorp.com&quot;, &quot;Acme SEO tool&quot;</p>
                </div>
              </div>

              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-semibold text-sm">Partial Match (20-30%)</h5>
                  <Badge className="bg-green-600">Relevant</Badge>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Related terms that include part of your target keyword naturally
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>
                    Examples: &quot;this SEO guide&quot;, &quot;Acme&apos;s keyword research tool&quot;,
                    &quot;their content strategy template&quot;
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-semibold text-sm">Generic (15-25%)</h5>
                  <Badge className="bg-amber-600">Natural</Badge>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Common call-to-action or generic phrases
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>Examples: &quot;click here&quot;, &quot;read more&quot;, &quot;learn more&quot;, &quot;this article&quot;</p>
                </div>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-semibold text-sm">Exact Match (5-10%)</h5>
                  <Badge className="bg-purple-600">Use Sparingly</Badge>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Precise target keyword—only when it flows naturally
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>Examples: &quot;SEO keyword research&quot;, &quot;content strategy template&quot;</p>
                </div>
              </div>

              <div className="border-l-4 border-l-slate-500 bg-slate-50 p-3">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-semibold text-sm">Naked URL/Image (5-10%)</h5>
                  <Badge className="bg-slate-600">Neutral</Badge>
                </div>
                <p className="text-xs text-slate-700 mb-2">Raw URLs or image links without anchor text</p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>Examples: https://example.com/guide, [image link]</p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-red-300 bg-red-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Warning:</strong> If more than 30% of your inbound links use exact-match
              commercial anchors (&quot;buy cheap widgets&quot;, &quot;best SEO software&quot;), you risk a manual
              penalty or algorithmic demotion. Prioritize relevance and diversity.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* E-E-A-T Principles */}
      <Card className="border-2 border-indigo-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-indigo-600" />
            E-E-A-T Principles
          </CardTitle>
          <CardDescription>
            Experience, Expertise, Authoritativeness, Trustworthiness in practice
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Why E-E-A-T Matters for Off-Page SEO</h4>
            <p className="text-sm text-slate-700">
              Google&apos;s Quality Rater Guidelines emphasize E-E-A-T, especially for YMYL (Your Money
              or Your Life) topics. Links, mentions, and reviews from authoritative sources act as
              third-party validation of your expertise and trustworthiness.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">The Four Pillars</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-blue-600" />
                    <h5 className="font-semibold">Experience</h5>
                  </div>
                  <p className="text-xs text-slate-700 mb-2">
                    First-hand, real-world use of products/services you discuss
                  </p>
                  <div className="bg-white p-2 rounded text-xs space-y-1">
                    <p className="font-semibold">Signals:</p>
                    <p>• Detailed case studies with outcomes</p>
                    <p>• Before/after screenshots or data</p>
                    <p>• Testimonials from actual users</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <h5 className="font-semibold">Expertise</h5>
                  </div>
                  <p className="text-xs text-slate-700 mb-2">
                    Formal or informal knowledge depth in your topic area
                  </p>
                  <div className="bg-white p-2 rounded text-xs space-y-1">
                    <p className="font-semibold">Signals:</p>
                    <p>• Author credentials, certifications</p>
                    <p>• Published work, speaking engagements</p>
                    <p>• Cited by industry publications</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-amber-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-amber-600" />
                    <h5 className="font-semibold">Authoritativeness</h5>
                  </div>
                  <p className="text-xs text-slate-700 mb-2">
                    Recognition as a go-to source on the topic
                  </p>
                  <div className="bg-white p-2 rounded text-xs space-y-1">
                    <p className="font-semibold">Signals:</p>
                    <p>• Links from industry leaders</p>
                    <p>• Press coverage, awards</p>
                    <p>• Wikipedia mentions, academic citations</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <h5 className="font-semibold">Trustworthiness</h5>
                  </div>
                  <p className="text-xs text-slate-700 mb-2">
                    Reliability, accuracy, and transparent practices
                  </p>
                  <div className="bg-white p-2 rounded text-xs space-y-1">
                    <p className="font-semibold">Signals:</p>
                    <p>• Secure site (HTTPS), clear contact info</p>
                    <p>• Positive reviews, low complaint rate</p>
                    <p>• Clear policies, sources cited</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">How to Build E-E-A-T Off-Page</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Earn editorial links from authoritative publications</p>
                  <p className="text-xs text-slate-600">
                    Focus on industry blogs, news sites, and educational institutions in your niche
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Get cited or quoted as an expert source</p>
                  <p className="text-xs text-slate-600">
                    Use HARO (Help a Reporter Out) or similar services to provide expert commentary
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Maintain consistent NAP and brand presence</p>
                  <p className="text-xs text-slate-600">
                    Ensure your business info is accurate across GBP, directories, and social profiles
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Collect and showcase real reviews/testimonials</p>
                  <p className="text-xs text-slate-600">
                    Respond to all reviews promptly and professionally to demonstrate accountability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pitfalls */}
      <Card className="border-2 border-red-300 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-900">
            <AlertTriangle className="h-5 w-5" />
            Common Foundations Pitfalls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">Ignoring Link Relevance</h5>
                <p className="text-xs text-red-800">
                  Pursuing high DR/DA links from unrelated niches. A relevant link from a smaller
                  site often outperforms an irrelevant link from a giant.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">Over-Optimizing Anchors</h5>
                <p className="text-xs text-red-800">
                  Using exact-match commercial keywords in 50%+ of anchor text looks manipulative and
                  risks penalties.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">Buying Links Directly</h5>
                <p className="text-xs text-red-800">
                  Paid links without proper disclosure (rel=&quot;sponsored&quot; or rel=&quot;nofollow&quot;)
                  violate Google&apos;s guidelines and can trigger manual actions.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">No E-E-A-T Validation</h5>
                <p className="text-xs text-red-800">
                  Making claims without author bios, sources, or third-party proof signals low
                  trustworthiness, especially for YMYL content.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

