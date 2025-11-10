import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Brain,
  Link2,
  Award,
  Info,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
} from "lucide-react";

export default function AnalysisTab() {
  return (
    <div className="space-y-6">
      {/* SERP & Intent Modeling */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            SERP & Intent Modeling
          </CardTitle>
          <CardDescription>
            Reverse-engineer what Google rewards for each keyword cluster
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-purple-600" />
              Why This Matters
            </h4>
            <p className="text-sm text-slate-700">
              SERP (Search Engine Results Page) analysis shows what content format and
              features Google considers best for a given intent. Writing a 2,000-word essay
              when SERPs reward checklists is a recipe for failure.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">What to Inventory</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-sm mb-2 text-purple-900">Result Types</h5>
                <div className="space-y-1 text-xs">
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • Guides & tutorials
                  </div>
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • Listicles (Top 10, Best X)
                  </div>
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • PLPs (Product Listing Pages)
                  </div>
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • Comparison pages (X vs Y)
                  </div>
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • Tools & calculators
                  </div>
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • Videos
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-sm mb-2 text-purple-900">
                  SERP Features
                </h5>
                <div className="space-y-1 text-xs">
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • Featured snippet
                  </div>
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • PAA (People Also Ask) boxes
                  </div>
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • Image pack
                  </div>
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • Video carousel
                  </div>
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • Local pack (map + businesses)
                  </div>
                  <div className="bg-white border border-slate-200 rounded p-2">
                    • Reviews/ratings
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Analysis Process</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <h5 className="font-semibold text-sm mb-1">1. Document Patterns</h5>
                <p className="text-xs text-slate-700 mb-2">
                  For top 10 results, note: length, structure (H2/H3 patterns),
                  tables/images, examples used
                </p>
                <div className="bg-white p-2 rounded text-xs">
                  <p className="font-semibold mb-1">Example Pattern:</p>
                  <p>
                    &quot;How to write a resume&quot; → All top results are 1,500-2,500 word
                    guides with:
                  </p>
                  <p>• Step-by-step format (H2 per step)</p>
                  <p>• Multiple visual examples</p>
                  <p>• Downloadable templates</p>
                  <p>• FAQ section at bottom</p>
                </div>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <h5 className="font-semibold text-sm mb-1">
                  2. Identify Entity Expectations
                </h5>
                <p className="text-xs text-slate-700">
                  What products, brands, locations, or concepts are repeatedly mentioned
                  across top results? These entities should appear in your content too.
                </p>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <h5 className="font-semibold text-sm mb-1">
                  3. Target Snippet Opportunities
                </h5>
                <p className="text-xs text-slate-700 mb-2">
                  If a featured snippet exists, format your content to capture it:
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>
                    • <strong>Definition snippet:</strong> 40-60 word paragraph
                  </p>
                  <p>
                    • <strong>List snippet:</strong> Numbered or bulleted list (5-8 items)
                  </p>
                  <p>
                    • <strong>Table snippet:</strong> Comparison table
                  </p>
                  <p>
                    • <strong>Steps snippet:</strong> Sequential how-to steps
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Output: Cluster Playbook</h4>
            <div className="bg-slate-50 border border-slate-200 rounded p-4 text-sm">
              <p className="mb-2">Document for each cluster:</p>
              <ul className="space-y-1 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Recommended page format (guide, listicle, comparison, tool)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Essential sections/H2s that top results share</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Required proof elements (data, screenshots, examples)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Snippet capture strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Freshness expectation (daily, monthly, annual updates)</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="border-purple-300 bg-purple-50">
            <Sparkles className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Quick Check:</strong> Does your planned format match what Google
              already rewards for the same intent? What unique value will you add (original
              data, calculator, benchmark)?
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Topical Authority Planning */}
      <Card className="border-2 border-amber-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5 text-amber-600" />
            Topical Authority Planning
          </CardTitle>
          <CardDescription>
            Design hub-and-spoke content architecture that signals expertise
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-amber-600" />
              Why This Matters
            </h4>
            <p className="text-sm text-slate-700">
              Google rewards comprehensive topic coverage. A single hub with no supporting
              spokes signals shallow expertise. A full hub-spoke cluster shows you&apos;ve
              covered the topic thoroughly.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Hub-Spoke Model</h4>
            <div className="bg-white border-2 border-amber-200 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="inline-block bg-amber-100 border-2 border-amber-400 rounded-lg px-6 py-3">
                  <p className="font-bold text-amber-900">🎯 HUB</p>
                  <p className="text-xs text-amber-700">Definitive Guide</p>
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <div className="text-amber-400 text-2xl">↓ ↓ ↓ ↓</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-slate-50 border border-slate-300 rounded p-2 text-center">
                  <p className="text-xs font-semibold">Spoke 1</p>
                  <p className="text-xs text-slate-600">Sub-task</p>
                </div>
                <div className="bg-slate-50 border border-slate-300 rounded p-2 text-center">
                  <p className="text-xs font-semibold">Spoke 2</p>
                  <p className="text-xs text-slate-600">Comparison</p>
                </div>
                <div className="bg-slate-50 border border-slate-300 rounded p-2 text-center">
                  <p className="text-xs font-semibold">Spoke 3</p>
                  <p className="text-xs text-slate-600">Tool/Template</p>
                </div>
                <div className="bg-slate-50 border border-slate-300 rounded p-2 text-center">
                  <p className="text-xs font-semibold">Spoke 4</p>
                  <p className="text-xs text-slate-600">FAQ</p>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="text-slate-400 text-sm">← Spokes link to each other →</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Planning Steps</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                <h5 className="font-semibold text-sm mb-1">1. Define Hub Scope</h5>
                <p className="text-xs text-slate-700 mb-2">
                  Hub = definitive page solving the core job. Write scope notes to avoid
                  overlap with neighboring hubs.
                </p>
                <div className="bg-white p-2 rounded text-xs">
                  <p className="font-semibold mb-1">Example Hub:</p>
                  <p>&quot;SEO Content Strategy&quot; (hub) covers planning & execution</p>
                  <p>
                    Does NOT cover: technical SEO (separate hub), link building (separate
                    hub)
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                <h5 className="font-semibold text-sm mb-1">
                  2. Plan Spokes (4-10 per Hub)
                </h5>
                <p className="text-xs text-slate-700 mb-2">
                  Spokes drill into sub-tasks, comparisons, tools, common questions
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>• Sub-task spoke: &quot;How to do keyword research&quot;</p>
                  <p>• Comparison spoke: &quot;Free vs paid SEO tools&quot;</p>
                  <p>• Tool spoke: &quot;Content brief template&quot;</p>
                  <p>• FAQ spoke: &quot;How often to update old content&quot;</p>
                </div>
              </div>

              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                <h5 className="font-semibold text-sm mb-1">3. Design Linking Plan</h5>
                <p className="text-xs text-slate-700">
                  • Every spoke links up to hub (intro or conclusion)
                  <br />
                  • Every spoke links to 2-4 sibling spokes (contextually)
                  <br />
                  • Hub links to key spokes in a &quot;Next Steps&quot; section
                  <br />• Use descriptive anchors (what the user will learn)
                </p>
              </div>
            </div>
          </div>

          <Alert className="border-red-300 bg-red-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Pitfall to Avoid:</strong> Spawning multiple
              &quot;near-duplicate&quot; spokes that split equity. If two spoke ideas target
              the same intent, consolidate them into one stronger page.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Competitor Intelligence */}
      <Card className="border-2 border-indigo-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-indigo-600" />
            Competitor Intelligence (SERP-First)
          </CardTitle>
          <CardDescription>
            Identify SERP winners and find your differentiation angle
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-indigo-600" />
              Why This Matters
            </h4>
            <p className="text-sm text-slate-700">
              Your SERP competitors (who ranks #1-#10) are often different from your
              business competitors. Study what&apos;s winning in SERPs, not just who your
              sales team competes with.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Analysis Framework</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-indigo-500 bg-indigo-50 p-3">
                <h5 className="font-semibold text-sm mb-1">1. Identify SERP Competitors</h5>
                <p className="text-xs text-slate-700">
                  For each cluster, note who ranks #1-#5 for the primary keyword. These are
                  your real competitors for this topic (even if they&apos;re not business
                  rivals).
                </p>
              </div>

              <div className="border-l-4 border-l-indigo-500 bg-indigo-50 p-3">
                <h5 className="font-semibold text-sm mb-1">2. Compare on Key Dimensions</h5>
                <div className="bg-white p-2 rounded mt-2">
                  <div className="grid md:grid-cols-2 gap-2 text-xs">
                    <div className="border border-slate-200 rounded p-2">
                      <p className="font-semibold mb-1">Content Coverage</p>
                      <p className="text-slate-600">Topics/subtopics they cover</p>
                    </div>
                    <div className="border border-slate-200 rounded p-2">
                      <p className="font-semibold mb-1">Structure</p>
                      <p className="text-slate-600">Format, H2/H3 patterns, length</p>
                    </div>
                    <div className="border border-slate-200 rounded p-2">
                      <p className="font-semibold mb-1">Media</p>
                      <p className="text-slate-600">Images, videos, diagrams, tables</p>
                    </div>
                    <div className="border border-slate-200 rounded p-2">
                      <p className="font-semibold mb-1">Proof/E-E-A-T</p>
                      <p className="text-slate-600">
                        Data, author bios, citations, case studies
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-l-indigo-500 bg-indigo-50 p-3">
                <h5 className="font-semibold text-sm mb-1">3. Choose Your Play</h5>
                <div className="space-y-2 text-xs mt-2">
                  <div className="bg-green-100 border border-green-300 rounded p-2">
                    <p className="font-semibold text-green-900">Outdo (10× value)</p>
                    <p className="text-green-800">
                      Add unique data, better examples, interactive elements
                    </p>
                  </div>
                  <div className="bg-blue-100 border border-blue-300 rounded p-2">
                    <p className="font-semibold text-blue-900">Angle-Shift (new POV)</p>
                    <p className="text-blue-800">
                      Same topic, different audience or approach
                    </p>
                  </div>
                  <div className="bg-red-100 border border-red-300 rounded p-2">
                    <p className="font-semibold text-red-900">Avoid</p>
                    <p className="text-red-800">
                      If top results are all massive brands, find easier opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-indigo-300 bg-indigo-50">
            <Sparkles className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Quick Check:</strong> Can you articulate in one sentence why your page
              will deserve the click over the current #1 result? If not, you need a clearer
              differentiation strategy.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

