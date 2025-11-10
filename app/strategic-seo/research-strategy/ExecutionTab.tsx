import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  FileText,
  AlertTriangle,
  Rocket,
  Info,
} from "lucide-react";

export default function ExecutionTab() {
  return (
    <div className="space-y-6">
      {/* ICE Scoring & Prioritization */}
      <Card className="border-2 border-green-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            ICE Scoring & Prioritization
          </CardTitle>
          <CardDescription>
            Decide what to build first using Impact, Confidence, and Effort scoring
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-green-600" />
              Why This Matters
            </h4>
            <p className="text-sm text-slate-700">
              Without prioritization, teams chase high-volume keywords that may never rank
              or build low-value content. ICE (Impact × Confidence ÷ Effort) scoring ensures
              you focus on the highest-ROI opportunities first.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">ICE Scoring Formula</h4>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-400 rounded-lg p-6 text-center">
              <p className="text-2xl font-bold text-slate-900 mb-2">
                ICE Score = (Impact × Confidence) ÷ Effort
              </p>
              <p className="text-sm text-slate-700">Higher scores = higher priority</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">
              Scoring Dimensions (1-10 scale)
            </h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-semibold">Impact</h5>
                  <Badge className="bg-green-600">Traffic + Revenue Potential</Badge>
                </div>
                <p className="text-sm text-slate-700 mb-2">
                  How much traffic and business value could this opportunity generate?
                </p>
                <div className="bg-white p-3 rounded text-xs space-y-1">
                  <p>
                    <strong>10:</strong> High volume + high-intent + converts well (e.g.,
                    &quot;best CRM software&quot;)
                  </p>
                  <p>
                    <strong>5:</strong> Moderate volume or intent (e.g., &quot;what is
                    CRM&quot;)
                  </p>
                  <p>
                    <strong>1:</strong> Low volume + informational only (e.g., &quot;CRM
                    history&quot;)
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-semibold">Confidence</h5>
                  <Badge className="bg-blue-600">Evidence Strength</Badge>
                </div>
                <p className="text-sm text-slate-700 mb-2">
                  How confident are you that this will work?
                </p>
                <div className="bg-white p-3 rounded text-xs space-y-1">
                  <p>
                    <strong>10:</strong> Strong data, proven format, weak SERP competitors
                  </p>
                  <p>
                    <strong>5:</strong> Some data, standard approach, mixed competition
                  </p>
                  <p>
                    <strong>1:</strong> Hypothesis, untested, strong competition
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-semibold">Effort</h5>
                  <Badge className="bg-amber-600">People × Time</Badge>
                </div>
                <p className="text-sm text-slate-700 mb-2">How much work is required?</p>
                <div className="bg-white p-3 rounded text-xs space-y-1">
                  <p>
                    <strong>1:</strong> Quick update to existing page (1-2 hours)
                  </p>
                  <p>
                    <strong>5:</strong> New 2,000-word guide with visuals (8-16 hours)
                  </p>
                  <p>
                    <strong>10:</strong> Complex interactive tool or full cluster (40+
                    hours)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Example Scoring</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-200 p-2 text-left">Opportunity</th>
                    <th className="border border-slate-200 p-2 text-center">Impact</th>
                    <th className="border border-slate-200 p-2 text-center">Confidence</th>
                    <th className="border border-slate-200 p-2 text-center">Effort</th>
                    <th className="border border-slate-200 p-2 text-center font-bold">
                      ICE Score
                    </th>
                    <th className="border border-slate-200 p-2 text-center">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-slate-200 p-2">
                      &quot;Best SEO tools 2024&quot;
                    </td>
                    <td className="border border-slate-200 p-2 text-center">9</td>
                    <td className="border border-slate-200 p-2 text-center">8</td>
                    <td className="border border-slate-200 p-2 text-center">4</td>
                    <td className="border border-slate-200 p-2 text-center font-bold">
                      18.0
                    </td>
                    <td className="border border-slate-200 p-2 text-center">
                      <Badge className="bg-green-600">High</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-2">
                      &quot;How to do keyword research&quot;
                    </td>
                    <td className="border border-slate-200 p-2 text-center">7</td>
                    <td className="border border-slate-200 p-2 text-center">7</td>
                    <td className="border border-slate-200 p-2 text-center">6</td>
                    <td className="border border-slate-200 p-2 text-center font-bold">
                      8.2
                    </td>
                    <td className="border border-slate-200 p-2 text-center">
                      <Badge className="bg-amber-600">Medium</Badge>
                    </td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-slate-200 p-2">
                      &quot;SEO history timeline&quot;
                    </td>
                    <td className="border border-slate-200 p-2 text-center">3</td>
                    <td className="border border-slate-200 p-2 text-center">5</td>
                    <td className="border border-slate-200 p-2 text-center">8</td>
                    <td className="border border-slate-200 p-2 text-center font-bold">
                      1.9
                    </td>
                    <td className="border border-slate-200 p-2 text-center">
                      <Badge className="bg-red-600">Low</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">
              Traffic Sizing (Directional)
            </h4>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-slate-700 mb-3">
                Use this formula for rough traffic estimates:
              </p>
              <div className="bg-white p-3 rounded text-sm font-mono mb-3">
                Expected Traffic = Volume × CTR (Click-Through Rate) × Rank Probability
              </div>
              <div className="space-y-2 text-xs text-slate-700">
                <p>
                  <strong>Example:</strong> &quot;content strategy template&quot;
                </p>
                <p>• Volume: 2,000/month</p>
                <p>• CTR at #3: ~10% (accounting for SERP features)</p>
                <p>• Rank probability: 70% (moderate difficulty)</p>
                <p>
                  • <strong>Expected traffic:</strong> 2,000 × 0.10 × 0.70 = 140
                  visits/month
                </p>
                <p>
                  • <strong>Plus long-tail uplift:</strong> +30-50 visits from variations
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Brief Template */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-600" />
            Content Brief Template
          </CardTitle>
          <CardDescription>
            Reusable structure for briefing writers and ensuring quality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">
              A great brief saves time and improves quality
            </h4>
            <p className="text-sm text-slate-700">
              Clear, detailed briefs prevent back-and-forth revisions and ensure writers
              deliver content that matches search intent and business goals.
            </p>
          </div>

          <div className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs font-mono space-y-1 overflow-x-auto">
            <div className="text-slate-400">### CONTENT BRIEF TEMPLATE ###</div>
            <div className="mt-3">
              <span className="text-yellow-400">[HEADER]</span>
            </div>
            <div>Cluster: Content Strategy</div>
            <div>Page Type: Hub / Spoke / Comparison</div>
            <div>Owner: [Name]</div>
            <div>Draft Due: [Date] | Publish Date: [Date]</div>

            <div className="mt-3">
              <span className="text-yellow-400">[GOAL]</span>
            </div>
            <div>Primary Intent: [What user wants to accomplish]</div>
            <div>Business Outcome: Lead / Trial / Sale / Awareness</div>

            <div className="mt-3">
              <span className="text-yellow-400">[KEYWORDS]</span>
            </div>
            <div>Primary KW: [One keyword]</div>
            <div>Supporting KWs: [5-12 keywords grouped by section]</div>

            <div className="mt-3">
              <span className="text-yellow-400">[SERP SUMMARY]</span>
            </div>
            <div>Result Types: Guides, listicles, tools</div>
            <div>Features: Featured snippet, PAA, images</div>
            <div>Bar to Beat: [Current #1 result]</div>
            <div>Gap We&apos;ll Fill: [Our differentiation]</div>

            <div className="mt-3">
              <span className="text-yellow-400">[OUTLINE]</span>
            </div>
            <div>H2: [Section title]</div>
            <div> H3: [Subsection]</div>
            <div> H3: [Subsection]</div>

            <div className="mt-3">
              <span className="text-yellow-400">[PROOF & E-E-A-T]</span>
            </div>
            <div>Data: [Stat sources]</div>
            <div>Examples: [Screenshots, case studies]</div>
            <div>Author: [Name + credentials]</div>

            <div className="mt-3">
              <span className="text-yellow-400">[INTERNAL LINKS]</span>
            </div>
            <div>Must-link Hub: [URL + anchor]</div>
            <div>Sibling Spokes: [2-4 URLs + anchors]</div>

            <div className="mt-3">
              <span className="text-yellow-400">[CONVERSION]</span>
            </div>
            <div>Primary CTA: [Action]</div>
            <div>Secondary CTA: [Action]</div>
            <div>Trust Builders: Testimonials, logos, guarantee</div>

            <div className="mt-3">
              <span className="text-yellow-400">[SNIPPET CAPTURE]</span>
            </div>
            <div>Target: Definition / List / Table / Steps</div>

            <div className="mt-3">
              <span className="text-yellow-400">[MAINTENANCE]</span>
            </div>
            <div>Freshness Trigger: Product updates, quarterly review</div>
            <div>Next Review Date: [Date]</div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="border-2 border-red-300 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-900">
            <AlertTriangle className="h-5 w-5" />
            Common Pitfalls to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Volume Obsession
                </h5>
                <p className="text-xs text-red-800">
                  Chasing high-volume keywords without considering intent fit and business
                  value. A keyword with 10K searches won&apos;t help if it doesn&apos;t
                  convert.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Keyword Cannibalization
                </h5>
                <p className="text-xs text-red-800">
                  Multiple pages targeting the same primary keyword compete against each
                  other. Consolidate when intent is the same.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Ignoring SERP Format
                </h5>
                <p className="text-xs text-red-800">
                  Writing 3,000-word essays when SERPs reward checklists or tools. Match the
                  format Google is already rewarding.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  &quot;Me-Too&quot; Content
                </h5>
                <p className="text-xs text-red-800">
                  Copying top results without adding unique value. You need proof, data, or
                  a fresh angle to deserve the click.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">No Ownership</h5>
                <p className="text-xs text-red-800">
                  Clusters with no DRI (Directly Responsible Individual) or refresh plan
                  stall after first publish. Assign owners and schedule reviews.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Publishing Orphan Hubs
                </h5>
                <p className="text-xs text-red-800">
                  Launching a hub with no spokes signals shallow expertise. Build at least
                  3-4 spokes before promoting the hub.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Use This Guide */}
      <Card className="border-2 border-green-300 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <Rocket className="h-5 w-5" />
            How to Use This Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0 text-sm">
                1
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-sm text-green-900">
                  Start Every New Segment with Full Discovery
                </h5>
                <p className="text-xs text-green-800">
                  Run the complete workflow: Market Discovery → Keyword Clustering → SERP
                  Modeling → Topical Map → Competitor Analysis → Prioritization
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0 text-sm">
                2
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-sm text-green-900">
                  Maintain a Single Source of Truth
                </h5>
                <p className="text-xs text-green-800">
                  One spreadsheet/tool that ties: Clusters ↔ Keywords ↔ Briefs ↔ Roadmap ↔
                  Metrics. Everyone should reference the same system.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0 text-sm">
                3
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-sm text-green-900">
                  Review by Cluster, Not Page
                </h5>
                <p className="text-xs text-green-800">
                  Monthly reviews should look at cluster performance holistically to catch
                  cannibalization early and plan refreshes with leverage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0 text-sm">
                4
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-sm text-green-900">
                  Reserve Capacity for Refreshes
                </h5>
                <p className="text-xs text-green-800">
                  Allocate 20-30% of monthly content capacity to updating existing hubs and
                  spokes. Fresh content compounds; stale content decays.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

