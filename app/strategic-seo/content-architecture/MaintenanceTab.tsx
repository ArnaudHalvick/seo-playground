import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Link2,
  CheckCircle2,
  RefreshCw,
  AlertTriangle,
  TrendingDown,
  Trash2,
  Rocket,
} from "lucide-react";

export default function MaintenanceTab() {
  return (
    <div className="space-y-6">
      {/* Internal Linking */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5 text-blue-600" />
            Internal Linking (Editorial Layer)
          </CardTitle>
          <CardDescription>
            Wire editorial links to distribute authority and guide user journeys
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Why Internal Linking Matters</h4>
            <p className="text-sm text-slate-700">
              Internal links distribute page authority (equity), help Google understand site
              structure, and guide users to related content. Good internal linking can boost
              rankings without earning a single external link.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">5 Rules of Thumb</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-600">Rule 1</Badge>
                  <h5 className="font-semibold text-sm">Every Spoke Links Up to Hub</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  In the intro or conclusion, spokes link to their hub with natural, descriptive
                  anchors
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Good Example:</p>
                  <p>
                    &quot;For a complete overview of content strategy, see our{" "}
                    <span className="text-blue-600 underline">
                      SEO Content Strategy Guide
                    </span>
                    &quot;
                  </p>
                  <p className="text-red-700 mt-2">Bad Example:</p>
                  <p>
                    &quot;<span className="text-red-600 underline">Click here</span> for more
                    info&quot; (vague, no context)
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-600">Rule 2</Badge>
                  <h5 className="font-semibold text-sm">2-4 Sibling Links Per Spoke</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Add contextual links to related sibling spokes where they genuinely help the
                  reader
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Example Context:</p>
                  <p>
                    &quot;If you&apos;re comparing tools, check our{" "}
                    <span className="text-blue-600 underline">Ahrefs vs SEMrush breakdown</span>.
                    For free options, see our{" "}
                    <span className="text-blue-600 underline">
                      free SEO tools roundup
                    </span>
                    &quot;
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-purple-600">Rule 3</Badge>
                  <h5 className="font-semibold text-sm">Hub Has Curated &quot;Next Steps&quot; Module</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Don&apos;t list every spoke—highlight 4-6 key spokes users should explore next
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Next Steps Section Example:</p>
                  <p>• <span className="text-blue-600 underline">How to Do Keyword Research</span> (Sub-task)</p>
                  <p>• <span className="text-blue-600 underline">Content Brief Template</span> (Tool)</p>
                  <p>• <span className="text-blue-600 underline">Free vs Paid SEO Tools</span> (Comparison)</p>
                  <p>• <span className="text-blue-600 underline">Content Calendar Template</span> (Download)</p>
                </div>
              </div>

              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-amber-600">Rule 4</Badge>
                  <h5 className="font-semibold text-sm">Use Descriptive Anchors</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Anchor text should tell users what they&apos;ll learn or do—not keyword-stuffed
                  or generic
                </p>
                <div className="bg-white p-2 rounded text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-semibold text-green-700">✓ Good Anchors:</p>
                      <p>• &quot;our complete keyword research guide&quot;</p>
                      <p>• &quot;learn how to create content briefs&quot;</p>
                      <p>• &quot;download our SEO checklist&quot;</p>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700">✗ Avoid:</p>
                      <p>• &quot;click here&quot; (no context)</p>
                      <p>• &quot;SEO SEO SEO&quot; (keyword spam)</p>
                      <p>• &quot;read more&quot; (vague)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-l-red-500 bg-red-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-red-600">Rule 5</Badge>
                  <h5 className="font-semibold text-sm">Fix Cannibalization</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  If multiple pages target the same intent, select ONE target URL and align all
                  internal anchors to it
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Example Problem:</p>
                  <p>• Page A: &quot;Best SEO Tools&quot;</p>
                  <p>• Page B: &quot;Top SEO Software 2024&quot;</p>
                  <p className="text-slate-600">
                    → Both target commercial intent for &quot;SEO tools&quot;
                  </p>
                  <p className="font-semibold mt-2">Solution:</p>
                  <p className="text-green-700">
                    Consolidate into Page A, redirect Page B → A, update all internal links to
                    point to Page A
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Maintenance Workflow</h4>
            <div className="bg-white border border-slate-200 rounded p-4">
              <p className="text-sm text-slate-700 mb-3">
                Revisit internal links during content refreshes to redistribute equity:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Quarterly audit:</strong> Identify high-authority pages (many inbound
                    links) and ensure they link to strategic pages
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Refresh opportunity:</strong> When updating old content, add 2-3 new
                    internal links to recently published spokes
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Deprecation cleanup:</strong> When deleting/redirecting pages, remove
                    or update all internal links pointing to them
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Refresh & Pruning */}
      <Card className="border-2 border-green-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5 text-green-600" />
            Content Refresh & Pruning
          </CardTitle>
          <CardDescription>
            Keep content fresh, relevant, and aligned with current search intent
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">4 Triggers for Refresh</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-red-500 bg-red-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-4 w-4 text-red-600" />
                  <h5 className="font-semibold text-sm">1. Traffic Decay</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Traffic or rankings down vs. last 3-6 months (check GSC, GA4)
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>
                    <strong>Red Flag:</strong> Page lost 30%+ organic traffic in 6 months without
                    seasonality explanation
                  </p>
                  <p>
                    <strong>Action:</strong> Review SERP, check if competitors updated content,
                    refresh with new data/examples
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <h5 className="font-semibold text-sm">2. Intent Drift</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  SERP format shifts (e.g., now favors checklists/tools over guides)
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>
                    <strong>Example:</strong> Query used to show long-form guides, now shows short
                    listicles + video carousel
                  </p>
                  <p>
                    <strong>Action:</strong> Restructure content to match new SERP pattern (add
                    video, tighten format)
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <RefreshCw className="h-4 w-4 text-purple-600" />
                  <h5 className="font-semibold text-sm">3. Outdated Information</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Prices, screenshots, regulations, product features changed
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>
                    <strong>Common Issues:</strong> Old pricing (misleading), deprecated feature
                    screenshots, outdated laws/regulations
                  </p>
                  <p>
                    <strong>Action:</strong> Update dates, prices, screenshots; add revision note
                    (&quot;Updated March 2024&quot;)
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-4 w-4 text-blue-600" />
                  <h5 className="font-semibold text-sm">4. Thinness / Low Engagement</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  High impressions with low CTR, or weak engagement (bounce rate, time on page)
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>
                    <strong>Diagnosis:</strong> Title/meta might not match intent, or content
                    doesn&apos;t deliver on promise
                  </p>
                  <p>
                    <strong>Action:</strong> Rewrite title/intro to better match searcher
                    expectations; add proof (data, examples)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Refresh Action Checklist</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Tighten the Intro</p>
                  <p className="text-xs text-slate-700">
                    Lead with user job and outcome in 1-3 sentences. Answer core question within
                    first screenful.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Refine Title/Meta</p>
                  <p className="text-xs text-slate-700">
                    Update year, sharpen promise, match current SERP patterns (e.g., add
                    &quot;2024&quot; if competitors have it)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Upgrade Proof</p>
                  <p className="text-xs text-slate-700">
                    Add fresh data, quotes, visuals (screenshots, charts). Replace generic stock
                    photos with purposeful images.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Add/Remove Sections</p>
                  <p className="text-xs text-slate-700">
                    Match current SERP patterns and user tasks. If all top results now have FAQ,
                    add one. If they&apos;ve dropped a section, consider trimming it.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Improve Internal Links</p>
                  <p className="text-xs text-slate-700">
                    Add hub/sibling links if missing. Retire links to deprecated pages. Redirect
                    broken internal links.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-green-300 bg-green-50">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Best Practice:</strong> Schedule quarterly refresh reviews for strategic
              clusters. Review traffic, SERP changes, and competitor updates. Update 2-3 priority
              pages per quarter.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Consolidate or Prune */}
      <Card className="border-2 border-red-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trash2 className="h-5 w-5 text-red-600" />
            When to Consolidate or Prune
          </CardTitle>
          <CardDescription>
            Merge overlapping pages or remove low-value content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Consolidation Scenarios</h4>
            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2 text-red-900">
                  Scenario 1: Overlapping Intent
                </h5>
                <p className="text-xs text-slate-700 mb-2">
                  Multiple pages target the same keyword/intent and compete with each other
                  (cannibalization)
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Example:</p>
                  <p>
                    • Page A: &quot;Best SEO Tools 2023&quot; (1,200 visits/mo)
                  </p>
                  <p>
                    • Page B: &quot;Top SEO Software for Agencies&quot; (400 visits/mo)
                  </p>
                  <p className="text-slate-600">
                    → Both target commercial &quot;SEO tools&quot; searches
                  </p>
                  <p className="font-semibold mt-2 text-green-700">Solution:</p>
                  <p>
                    Merge B into A (keep strongest URL), 301 redirect B → A, update internal links
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2 text-red-900">
                  Scenario 2: Outdated Thin Content
                </h5>
                <p className="text-xs text-slate-700 mb-2">
                  Old, short pages (300-500 words) with minimal traffic that can&apos;t stand
                  alone
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Example:</p>
                  <p>
                    • Page: &quot;What is Keyword Research?&quot; (350 words, 20 visits/mo)
                  </p>
                  <p className="font-semibold mt-2 text-green-700">Solution:</p>
                  <p>
                    Fold into comprehensive hub (&quot;Keyword Research Guide&quot;) as an H2
                    section, redirect old URL
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Pruning Decision Tree</h4>
            <div className="bg-white border-2 border-slate-300 rounded p-4">
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2">
                  <Badge className="bg-slate-600 flex-shrink-0">Q1</Badge>
                  <div>
                    <p className="font-semibold mb-1">Does the topic have search volume?</p>
                    <p className="text-slate-600">
                      <strong>Yes:</strong> Consider refresh or consolidation →{" "}
                      <strong>No:</strong> Continue to Q2
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="bg-slate-600 flex-shrink-0">Q2</Badge>
                  <div>
                    <p className="font-semibold mb-1">Does it support a strategic cluster?</p>
                    <p className="text-slate-600">
                      <strong>Yes:</strong> Keep and refresh (it strengthens hub authority) →{" "}
                      <strong>No:</strong> Continue to Q3
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="bg-slate-600 flex-shrink-0">Q3</Badge>
                  <div>
                    <p className="font-semibold mb-1">Does it have quality backlinks?</p>
                    <p className="text-slate-600">
                      <strong>Yes:</strong> Keep as thin landing page, improve content →{" "}
                      <strong>No:</strong> Continue to Q4
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="bg-red-600 flex-shrink-0">Q4</Badge>
                  <div>
                    <p className="font-semibold mb-1">Can content be merged into another page?</p>
                    <p className="text-slate-600">
                      <strong>Yes:</strong> Consolidate + 301 redirect →{" "}
                      <strong>No:</strong> Prune (404 or noindex)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-red-300 bg-red-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Caution:</strong> Only prune when the topic has no value AND no viable
              consolidation path. Always redirect deleted URLs (301) to preserve any link equity.
              Don&apos;t delete pages with quality backlinks—refresh them instead.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Quarterly Action Plan */}
      <Card className="border-2 border-green-300 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <Rocket className="h-5 w-5" />
            Quarterly Content Maintenance Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-green-800 mb-4">
            <strong>Operationalize maintenance with these quarterly actions:</strong>
          </p>
          <div className="space-y-2 text-sm text-green-800">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Pre-draft:</strong> Approve the cluster map and brief (Architecture +
                Optimization)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>During drafting:</strong> Enforce on-page standards and E-E-A-T checklist
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Post-publish:</strong> Run 14-45 day optimization pass (check GSC,
                improve CTR), schedule first refresh
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Quarterly review:</strong> Analyze cluster performance, add spokes for
                gaps, consolidate overlaps, refresh top 2-3 decaying pages
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Internal link audit:</strong> Identify high-authority pages, ensure they
                link to strategic targets, clean up deprecated links
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="border-2 border-red-300 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-900">
            <AlertTriangle className="h-5 w-5" />
            Maintenance Pitfalls to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Ignoring Refresh
                </h5>
                <p className="text-xs text-red-800">
                  Content goes stale, competitors overtake you. Schedule quarterly reviews for
                  strategic clusters to stay ahead.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Generic/Keyword-Stuffed Anchors
                </h5>
                <p className="text-xs text-red-800">
                  Over-linking with &quot;click here&quot; or keyword-heavy anchors weakens
                  internal linking. Use descriptive, natural anchors.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Deleting Without Redirects
                </h5>
                <p className="text-xs text-red-800">
                  Pruning pages without 301 redirects wastes link equity and creates broken links.
                  Always redirect to relevant content.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Letting Cannibalization Persist
                </h5>
                <p className="text-xs text-red-800">
                  Multiple pages targeting the same intent compete and both rank poorly.
                  Consolidate into one strong page.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

