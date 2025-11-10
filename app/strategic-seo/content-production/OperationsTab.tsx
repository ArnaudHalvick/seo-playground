import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  CheckCircle2,
  Info,
  Globe,
  Shield,
  Lock,
  Eye,
} from "lucide-react";

export default function OperationsTab() {
  return (
    <div className="space-y-6">
      {/* Style & Voice System */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Editorial Style & Voice System
          </CardTitle>
          <CardDescription>
            Build consistent voice and structure standards across all content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-600" />
              Why Style Guides Matter
            </h4>
            <p className="text-sm text-slate-700">
              Without a style guide, every writer makes different choices—tone varies, formatting
              is inconsistent, and quality becomes unpredictable. A good style guide creates
              consistency at scale without micromanaging every decision.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Tone of Voice (TOV)</h4>
            <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
              <p className="text-sm text-slate-700 mb-3">
                <strong>Pick 3-5 traits</strong> that define how you sound. Include do/don&apos;t
                examples.
              </p>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-sm mb-2">Example TOV Traits:</p>
                <div className="grid md:grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="font-semibold mb-1">✓ Clear:</p>
                    <p className="text-slate-600">
                      Short sentences, plain language, no jargon unless defined
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">✓ Practical:</p>
                    <p className="text-slate-600">Actionable steps, real examples, no theory-only</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">✓ Evidence-led:</p>
                    <p className="text-slate-600">Cite sources, show data, admit limitations</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">✓ Friendly:</p>
                    <p className="text-slate-600">Conversational, not stuffy; use &quot;you&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Structure Standards</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Intros</p>
                  <p className="text-xs text-slate-700">
                    State the user&apos;s job and outcome within 3 sentences. No fluff.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Subheads</p>
                  <p className="text-xs text-slate-700">
                    Descriptive H2/H3 (not &quot;Introduction&quot; or &quot;Overview&quot;). Tell
                    what the section covers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Lists & Bullets</p>
                  <p className="text-xs text-slate-700">
                    Use for steps, criteria, options. Parallel structure. Keep consistent (all
                    sentence fragments OR all complete sentences).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Claims & Citations</p>
                  <p className="text-xs text-slate-700">
                    Cite at least one reputable source for any statistic, regulation, or bold
                    claim. Link to primary sources (not other blogs).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Linking & Sourcing Rules</h4>
            <div className="bg-white border-2 border-slate-300 rounded p-4">
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">Internal Links:</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Hub link in intro or outro</li>
                    <li>• 2-4 sibling links contextually</li>
                    <li>• Natural, descriptive anchors (not &quot;click here&quot;)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">External Links:</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Cite sources that improve trust (standards bodies, primary research)</li>
                    <li>• Avoid linking to competitors unless necessary for comparison</li>
                    <li>• Open external links in same tab (UX best practice)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">Anchor Text:</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>
                      • Natural language that tells users what they&apos;ll find (e.g., &quot;learn
                      how to create content briefs&quot;)
                    </li>
                    <li>• Avoid keyword stuffing in anchors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Localization */}
      <Card className="border-2 border-green-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-green-600" />
            Localization & International Operations
          </CardTitle>
          <CardDescription>
            True localization (not just translation) for global audiences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Translation vs. Localization</h4>
            <div className="grid md:grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded border-2 border-red-300">
                <p className="font-semibold text-red-900 mb-1">✗ Translation (Weak)</p>
                <p className="text-red-800">
                  Word-for-word conversion. Same examples, same idioms, same pricing (USD). Feels
                  robotic and imported.
                </p>
              </div>
              <div className="bg-white p-3 rounded border-2 border-green-300">
                <p className="font-semibold text-green-900 mb-1">✓ Localization (Strong)</p>
                <p className="text-green-800">
                  Adapted examples, local idioms, regional pricing (EUR, GBP), culturally relevant
                  proof. Feels native.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Localization Actions</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Build Market Glossary</p>
                  <p className="text-xs text-slate-700">
                    Document terms, metaphors, idioms to use/avoid per market. Example: &quot;home
                    run&quot; (US) doesn&apos;t translate to UK; use &quot;spot on&quot; instead.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Localize Titles/Metas/CTAs</p>
                  <p className="text-xs text-slate-700">
                    Adapt to local idiom and promise. UK: &quot;Compare van insurance&quot; not
                    &quot;truck insurance&quot;.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Validate Legal/Regulatory References</p>
                  <p className="text-xs text-slate-700">
                    Work with local SMEs to confirm laws, regulations, compliance requirements.
                    GDPR for EU, different labor laws per country.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Maintain Semantic Parity</p>
                  <p className="text-xs text-slate-700">
                    All locales cover same core entities/topics (same keyword clusters) while
                    adapting angle and proof to local context.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-green-300 bg-green-50">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Quality Bar:</strong> A local reader should feel it was written FOR them, not
              translated AT them. Test with native speakers before launch.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* E-E-A-T Operations */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-purple-600" />
            E-E-A-T Operations
          </CardTitle>
          <CardDescription>
            Build trust through transparent, expert content practices
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Author Program</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <Badge className="bg-purple-600 flex-shrink-0">1</Badge>
                <div>
                  <p className="font-semibold text-sm">Real Bylines with Bios</p>
                  <p className="text-xs text-slate-700">
                    Every piece has a named author. Bio includes credentials, years of experience,
                    relevant certifications. Link to professional profiles (LinkedIn, personal site).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <Badge className="bg-purple-600 flex-shrink-0">2</Badge>
                <div>
                  <p className="font-semibold text-sm">Capture Experience</p>
                  <p className="text-xs text-slate-700">
                    Screenshots from actual use, failure stories, before/after examples, proprietary
                    data. Show you&apos;ve done the work, not just read about it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Review Policy (YMYL Topics)</h4>
            <div className="bg-purple-50 border border-purple-200 rounded p-3">
              <p className="text-sm text-slate-700 mb-2">
                <strong>YMYL = Your Money or Your Life</strong> (financial, medical, legal, safety
                topics)
              </p>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>
                  • Require SME review from credentialed expert before publish (doctor, lawyer, CPA)
                </li>
                <li>• Set re-review cadence (quarterly for medical, semi-annual for legal)</li>
                <li>
                  • Include disclaimer where appropriate (&quot;This is not medical advice&quot;)
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Transparency Standards</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Last-Updated Date & Change Notes</p>
                  <p className="text-xs text-slate-700">
                    Display publish and last-updated dates. For major refreshes, add note:
                    &quot;Updated March 2024: Added 3 new tools, refreshed pricing&quot;
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Methodology Boxes</p>
                  <p className="text-xs text-slate-700">
                    For rankings/comparisons: explain how you tested (sample size, criteria,
                    timeframe). Example: &quot;We tested 12 tools on 10,000 keywords over 3
                    months&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance & Accessibility */}
      <Card className="border-2 border-red-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-red-600" />
            Compliance & Accessibility
          </CardTitle>
          <CardDescription>
            Privacy, data protection, and inclusive content practices
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Privacy & Data Protection</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-red-50 rounded border border-red-200">
                <Lock className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Avoid PII in Screenshots</p>
                  <p className="text-xs text-slate-700">
                    <strong>PII = Personally Identifiable Information</strong> (names, emails,
                    phone numbers). Blur or redact before publishing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-red-50 rounded border border-red-200">
                <Lock className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">GDPR Compliance for EU Audiences</p>
                  <p className="text-xs text-slate-700">
                    Align with your cookie and consent policy. Don&apos;t collect data without
                    consent. Provide clear opt-out mechanisms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Accessibility (WCAG Basics)</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <Eye className="h-4 w-4 text-slate-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Clear Headings</p>
                  <p className="text-xs text-slate-700">
                    Logical H1 → H2 → H3 hierarchy. Screen readers rely on heading structure for
                    navigation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <Eye className="h-4 w-4 text-slate-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Alt Text for Images</p>
                  <p className="text-xs text-slate-700">
                    Describe what&apos;s in the image (not &quot;image123.jpg&quot;). For
                    decorative images, use empty alt=&quot;&quot;.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <Eye className="h-4 w-4 text-slate-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Descriptive Link Text</p>
                  <p className="text-xs text-slate-700">
                    &quot;Learn how to create content briefs&quot; (good) vs. &quot;Click
                    here&quot; (bad). Screen readers read link text out of context.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <Eye className="h-4 w-4 text-slate-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Adequate Contrast</p>
                  <p className="text-xs text-slate-700">
                    Text must be readable against background. Use contrast checker tools (aim for
                    4.5:1 ratio minimum).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <Eye className="h-4 w-4 text-slate-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Readability</p>
                  <p className="text-xs text-slate-700">
                    Short sentences (20 words max ideal), plain language for complex concepts,
                    define acronyms on first use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Claims & Legal</h4>
            <div className="bg-white border border-slate-200 rounded p-4">
              <p className="text-sm text-slate-700 mb-2">
                For regulated topics (medical, financial, legal):
              </p>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>
                  • Cite official sources (FDA, CDC, IRS, government agencies) for any regulatory
                  claim
                </li>
                <li>
                  • Include disclaimers where required (&quot;This is not financial advice. Consult
                  a licensed advisor&quot;)
                </li>
                <li>• Don&apos;t make medical or financial guarantees</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

