import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Search,
  TrendingDown,
  GitMerge,
  Eye,
  Link2,
  FileText,
  Info,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DiagnosticsTab() {
  return (
    <div className="space-y-6">
      {/* Diagnostic Overview */}
      <Alert className="border-purple-300 bg-purple-50">
        <Search className="h-4 w-4" />
        <AlertDescription>
          <strong>Find the &quot;Why&quot;:</strong> Diagnostics turn data into insights. When
          metrics move, dig deeper to understand the root cause before taking action.
        </AlertDescription>
      </Alert>

      {/* Key Diagnostic Areas */}
      <Card className="border-2 border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <AlertTriangle className="h-5 w-5" />
            5 Critical Diagnostic Areas
          </CardTitle>
          <CardDescription className="text-blue-800">
            Common performance issues and how to spot them
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Card className="border-2 border-red-200 bg-red-50">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <GitMerge className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 text-red-900">1. Cannibalization</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Multiple URLs ranking for the same primary keyword, competing against each
                    other
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded border border-red-200">
                      <p className="text-xs font-semibold mb-1">Symptoms:</p>
                      <ul className="text-xs text-slate-700 space-y-0.5">
                        <li>• 2+ pages fluctuating for same query in GSC</li>
                        <li>• Neither page ranks as well as expected</li>
                        <li>• Internal links split between competing pages</li>
                      </ul>
                    </div>
                    <div className="bg-white p-2 rounded border border-red-200">
                      <p className="text-xs font-semibold mb-1">Fix:</p>
                      <ul className="text-xs text-slate-700 space-y-0.5">
                        <li>• Choose the strongest target page</li>
                        <li>• Merge or reframe competing pages (301 redirect or reposition)</li>
                        <li>• Update all internal links to point to chosen target</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 bg-orange-50">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <TrendingDown className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 text-orange-900">2. Content Decay</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Clicks or positions falling compared to last 90–180 days
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded border border-orange-200">
                      <p className="text-xs font-semibold mb-1">Symptoms:</p>
                      <ul className="text-xs text-slate-700 space-y-0.5">
                        <li>• Consistent downward trend in impressions/clicks</li>
                        <li>• Outdated information or stale examples</li>
                        <li>• Competitors have published newer, better content</li>
                      </ul>
                    </div>
                    <div className="bg-white p-2 rounded border border-orange-200">
                      <p className="text-xs font-semibold mb-1">Fix:</p>
                      <ul className="text-xs text-slate-700 space-y-0.5">
                        <li>• Refresh content with current data and examples</li>
                        <li>• Strengthen internal links from hubs and high-traffic pages</li>
                        <li>• Add &quot;last updated&quot; note with summary of changes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-200 bg-amber-50">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 text-amber-900">3. Intent Drift</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    SERP now favors different content formats (lists, tools, videos) than when you
                    published
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded border border-amber-200">
                      <p className="text-xs font-semibold mb-1">Symptoms:</p>
                      <ul className="text-xs text-slate-700 space-y-0.5">
                        <li>• Position drop despite content quality</li>
                        <li>• SERP is dominated by a different format than yours</li>
                        <li>• New SERP features (PAA, video, local pack) you&apos;re not in</li>
                      </ul>
                    </div>
                    <div className="bg-white p-2 rounded border border-amber-200">
                      <p className="text-xs font-semibold mb-1">Fix:</p>
                      <ul className="text-xs text-slate-700 space-y-0.5">
                        <li>• Reshape content format to match current SERP pattern</li>
                        <li>• Add media (images, videos, tables) if SERP shows them</li>
                        <li>• Add snippet optimization blocks if PAA/featured snippets dominate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 bg-yellow-50">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 text-yellow-900">4. Thin Proof</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Low dwell time or scroll depth—users aren&apos;t finding what they need
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded border border-yellow-200">
                      <p className="text-xs font-semibold mb-1">Symptoms:</p>
                      <ul className="text-xs text-slate-700 space-y-0.5">
                        <li>• High bounce rate or low engagement time</li>
                        <li>• Few internal link clicks or scroll depth below 50%</li>
                        <li>• Generic claims without data, examples, or screenshots</li>
                      </ul>
                    </div>
                    <div className="bg-white p-2 rounded border border-yellow-200">
                      <p className="text-xs font-semibold mb-1">Fix:</p>
                      <ul className="text-xs text-slate-700 space-y-0.5">
                        <li>• Add concrete examples, data points, and case studies</li>
                        <li>• Include screenshots, mini-tables, and comparison visuals</li>
                        <li>• Tighten redundant copy; make content more scannable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-lime-200 bg-lime-50">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <Link2 className="h-5 w-5 text-lime-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 text-lime-900">5. Link Flow Gaps</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Important spoke pages have few editorial links from hubs or high-authority
                    pages
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded border border-lime-200">
                      <p className="text-xs font-semibold mb-1">Symptoms:</p>
                      <ul className="text-xs text-slate-700 space-y-0.5">
                        <li>• High-quality page with low visibility despite strong content</li>
                        <li>• Pages rank better when they get more internal links</li>
                        <li>• Hub page has few outbound links to supporting content</li>
                      </ul>
                    </div>
                    <div className="bg-white p-2 rounded border border-lime-200">
                      <p className="text-xs font-semibold mb-1">Fix:</p>
                      <ul className="text-xs text-slate-700 space-y-0.5">
                        <li>• Add links from hub pages to important spokes</li>
                        <li>• Link from high-traffic pages to related deep content</li>
                        <li>• Remove links to deprecated/low-value pages</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Optimization Levers */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <CheckCircle2 className="h-5 w-5" />
            Optimization Levers (No Code Required)
          </CardTitle>
          <CardDescription className="text-green-800">
            Editorial changes you can make immediately to improve performance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-300 bg-white">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Editorial-First Optimization:</strong> Most SEO wins come from better
              content, not technical changes. Focus on on-page copy, structure, and internal links
              before touching code.
            </AlertDescription>
          </Alert>

          <div>
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-base">On-Page (Editorial Layer)</CardTitle>
                <CardDescription className="text-blue-800">
                  Refine copy, structure, and presentation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-white p-3 rounded border border-blue-200">
                  <h5 className="font-semibold text-sm mb-2">Titles & Meta Descriptions</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Clarify promise/benefit:</strong> Make it obvious who the content
                        is for and what outcome they&apos;ll get
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Test specificity:</strong> &quot;7 Project Management Tools for
                        Remote Teams&quot; vs. &quot;Project Management Tools&quot;
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Add differentiation:</strong> What makes your content unique
                        compared to competitors?
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded border border-blue-200">
                  <h5 className="font-semibold text-sm mb-2">Intros (First 100 Words)</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Answer job-to-be-done in 2–3 sentences:</strong> What problem does
                        this solve?
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Preview structure:</strong> &quot;In this guide, we&apos;ll
                        cover...&quot;
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Add credentials note:</strong> &quot;Based on 5 years of managing
                        distributed teams...&quot;
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded border border-blue-200">
                  <h5 className="font-semibold text-sm mb-2">Sections & Body Copy</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Add selection criteria:</strong> Help users choose between options
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Include pitfalls:</strong> What mistakes should users avoid?
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Add step visuals:</strong> Screenshots, diagrams, mini-tables
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Tighten redundant copy:</strong> Remove fluff; make it scannable
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded border border-blue-200">
                  <h5 className="font-semibold text-sm mb-2">Internal Links</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Hub ↔ spoke connections:</strong> Every hub should link to 5-10
                        spokes
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Sibling links:</strong> 2-4 related spoke pages linked per page
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Descriptive anchors:</strong> Use natural, keyword-rich phrases (no
                        &quot;click here&quot;)
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-base">Cluster-Level Actions</CardTitle>
                <CardDescription className="text-purple-800">
                  Optimize content architecture and coverage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-white p-3 rounded border border-purple-200">
                  <h5 className="font-semibold text-sm mb-2">Expand Coverage</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>
                        <strong>Add missing spokes:</strong> Identify gaps from SERP analysis and
                        PAA (People Also Ask) questions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>
                        <strong>Target high-impression queries:</strong> Create dedicated pages for
                        queries with 1K+ monthly impressions
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded border border-purple-200">
                  <h5 className="font-semibold text-sm mb-2">Consolidate Overlaps</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>
                        <strong>Merge overlapping pages:</strong> Same primary intent → combine
                        into strongest URL
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>
                        <strong>Update anchors:</strong> Point all internal links to the chosen
                        target URL
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded border border-purple-200">
                  <h5 className="font-semibold text-sm mb-2">Strengthen Hub Structure</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>
                        <strong>Create definitive hub:</strong> If you have multiple &quot;half
                        hubs,&quot; merge into one comprehensive pillar page
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>
                        <strong>Link flow optimization:</strong> Ensure hub distributes authority
                        to all important spokes
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

