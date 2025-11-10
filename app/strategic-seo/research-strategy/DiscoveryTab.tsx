import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Users,
  Search,
  Info,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
} from "lucide-react";

export default function DiscoveryTab() {
  return (
    <div className="space-y-6">
      {/* Market & Audience Discovery */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            Market & Audience Discovery
          </CardTitle>
          <CardDescription>
            Understand who you&apos;re creating content for and what problems they&apos;re
            trying to solve
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-600" />
              Why This Matters
            </h4>
            <p className="text-sm text-slate-700">
              Without deep audience understanding, you&apos;ll create content that uses the
              wrong language, answers the wrong questions, and fails to resonate. ICPs and
              JTBD research ensures every piece of content speaks directly to your target
              audience&apos;s needs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Data Sources (Inputs)</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white border border-slate-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-1">Internal Sources</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Sales/support call recordings</li>
                  <li>• Win/loss analysis notes</li>
                  <li>• Feature request tickets</li>
                  <li>• Onboarding questions</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-1">External Sources</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Reddit/forum discussions</li>
                  <li>• G2/Capterra reviews</li>
                  <li>• Competitor positioning</li>
                  <li>• Industry reports</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Process Steps</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <h5 className="font-semibold text-sm mb-1">
                  1. Define ICPs (Ideal Customer Profiles)
                </h5>
                <p className="text-xs text-slate-700 mb-2">
                  Create 3-5 detailed profiles of your best customers including
                  demographics, company attributes, goals, and pain points.
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Example ICP Elements:</p>
                  <p>• Role: Marketing Director at B2B SaaS (50-200 employees)</p>
                  <p>• Goal: Scale content production without sacrificing quality</p>
                  <p>• Pain: Small team, limited budget, CEO pressure for leads</p>
                </div>
              </div>

              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <h5 className="font-semibold text-sm mb-1">
                  2. Identify JTBD (Jobs To Be Done)
                </h5>
                <p className="text-xs text-slate-700 mb-2">
                  What functional and emotional &quot;jobs&quot; are customers hiring your
                  product/content to do? Frame as: &quot;When [situation], I want to
                  [action], so I can [outcome].&quot;
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Example JTBD:</p>
                  <p>
                    &quot;When planning Q2 content, I want to find high-ROI topics, so I can
                    justify my budget and hit lead targets.&quot;
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <h5 className="font-semibold text-sm mb-1">
                  3. Extract Language Bank (VoC)
                </h5>
                <p className="text-xs text-slate-700 mb-2">
                  Document exact phrases customers use to describe pains, desired outcomes,
                  and objections. This becomes your keyword seed list and copy inspiration.
                </p>
                <div className="bg-white p-2 rounded text-xs">
                  <p className="font-semibold mb-1">Real Customer Phrases:</p>
                  <p>
                    &quot;We&apos;re drowning in keyword data but don&apos;t know what to
                    prioritize&quot;
                  </p>
                  <p>
                    &quot;Need to prove SEO value to leadership with real pipeline
                    impact&quot;
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <h5 className="font-semibold text-sm mb-1">4. Map Buying Stages</h5>
                <p className="text-xs text-slate-700 mb-2">
                  Plot your ICPs through awareness stages: Problem Aware → Solution Aware →
                  Vendor Aware → Ready to Buy. Different content needed at each stage.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Outputs</h4>
            <div className="bg-slate-50 border border-slate-200 rounded p-4">
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    3-5 ICP one-pagers with demographics, goals, pains, and evaluation
                    criteria
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>JTBD statements for each ICP at different buying stages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Language bank: 50-100 exact customer phrases organized by theme
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Top 10 objections/concerns that must be addressed in content</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="border-purple-300 bg-purple-50">
            <Sparkles className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Quick Check:</strong> Can you name the five most repeated pains and
              the three evaluation criteria your ICPs use when comparing solutions? If not,
              dig deeper.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Keyword Research & Clustering */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-purple-600" />
            Keyword Research & Clustering
          </CardTitle>
          <CardDescription>
            Transform customer language into searchable keywords organized by intent
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-purple-600" />
              Why This Matters
            </h4>
            <p className="text-sm text-slate-700">
              Keyword clustering prevents cannibalization (multiple pages competing for the
              same term) and creates clear content assignments. Each cluster becomes a
              content hub with supporting spokes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Keyword Sources (Inputs)</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="bg-white border border-slate-200 rounded p-2 text-center">
                <p className="font-semibold text-xs">Site Search</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-2 text-center">
                <p className="font-semibold text-xs">Competitor Pages</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-2 text-center">
                <p className="font-semibold text-xs">PPC Terms</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-2 text-center">
                <p className="font-semibold text-xs">GSC Queries</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-2 text-center">
                <p className="font-semibold text-xs">Autosuggest</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-2 text-center">
                <p className="font-semibold text-xs">PAA Boxes</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-2 text-center">
                <p className="font-semibold text-xs">Related Searches</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-2 text-center">
                <p className="font-semibold text-xs">Keyword Tools</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Process Steps</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <h5 className="font-semibold text-sm mb-1">1. Expand with Modifiers</h5>
                <p className="text-xs text-slate-700 mb-2">
                  Take seed terms and add intent modifiers to discover the full keyword
                  universe.
                </p>
                <div className="bg-white p-2 rounded text-xs">
                  <p className="mb-1">Seed: &quot;content strategy&quot;</p>
                  <p>→ how to build content strategy</p>
                  <p>→ content strategy template</p>
                  <p>→ content strategy vs content marketing</p>
                  <p>→ best content strategy tools</p>
                </div>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <h5 className="font-semibold text-sm mb-1">2. Classify Intent</h5>
                <p className="text-xs text-slate-700 mb-2">
                  Tag each keyword with search intent to determine content type.
                </p>
                <div className="grid md:grid-cols-2 gap-2 text-xs">
                  <div className="bg-blue-100 p-2 rounded">
                    <p className="font-semibold">Informational</p>
                    <p className="text-slate-700">
                      Learning/understanding (guides, tutorials)
                    </p>
                  </div>
                  <div className="bg-amber-100 p-2 rounded">
                    <p className="font-semibold">Commercial Investigation</p>
                    <p className="text-slate-700">Comparing options (reviews, vs pages)</p>
                  </div>
                  <div className="bg-green-100 p-2 rounded">
                    <p className="font-semibold">Transactional</p>
                    <p className="text-slate-700">Ready to buy (pricing, demo, signup)</p>
                  </div>
                  <div className="bg-slate-100 p-2 rounded">
                    <p className="font-semibold">Navigational</p>
                    <p className="text-slate-700">
                      Finding specific brand/page (login, support)
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <h5 className="font-semibold text-sm mb-1">3. Cluster Semantically</h5>
                <p className="text-xs text-slate-700 mb-2">
                  Group keywords by topic, not exact match. One parent topic per hub; 4-10
                  spokes per hub.
                </p>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-xs mb-2">Example Cluster:</p>
                  <div className="space-y-2 text-xs">
                    <div className="bg-purple-100 p-2 rounded">
                      <p className="font-semibold">
                        🎯 Hub: &quot;SEO keyword research&quot;
                      </p>
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="bg-slate-50 p-1 rounded">
                        ↳ Spoke: keyword research tools
                      </p>
                      <p className="bg-slate-50 p-1 rounded">
                        ↳ Spoke: how to do keyword research
                      </p>
                      <p className="bg-slate-50 p-1 rounded">
                        ↳ Spoke: keyword research for local SEO
                      </p>
                      <p className="bg-slate-50 p-1 rounded">
                        ↳ Spoke: free vs paid keyword tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <h5 className="font-semibold text-sm mb-1">
                  4. Map One Primary Keyword per URL
                </h5>
                <p className="text-xs text-slate-700">
                  Assign exactly one primary keyword to each planned page. Supporting
                  keywords are fine, but each URL should have one clear primary target to
                  prevent cannibalization.
                </p>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <h5 className="font-semibold text-sm mb-1">5. Score Each Keyword</h5>
                <p className="text-xs text-slate-700 mb-2">
                  Formula: Volume × Clickability × Business Value × (1/Difficulty)
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>
                    • <strong>Volume:</strong> Monthly search volume
                  </p>
                  <p>
                    • <strong>Clickability:</strong> CTR after SERP features (0-1)
                  </p>
                  <p>
                    • <strong>Business Value:</strong> How valuable is this traffic? (1-10)
                  </p>
                  <p>
                    • <strong>Difficulty:</strong> How hard to rank? (1-100)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-amber-300 bg-amber-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Quality Bar:</strong> Each URL has exactly one primary keyword and a
              small set of supporting variants. Long-tail variants live as spokes—not
              separate hubs. This prevents cannibalization where multiple pages compete for
              the same rankings.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

