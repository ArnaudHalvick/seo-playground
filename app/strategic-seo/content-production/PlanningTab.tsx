import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  CheckCircle2,
  Info,
  Users,
  GitBranch,
  AlertTriangle,
} from "lucide-react";

export default function PlanningTab() {
  return (
    <div className="space-y-6">
      {/* Editorial Planning */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            Editorial Planning
          </CardTitle>
          <CardDescription>
            Build a rolling calendar that aligns capacity with strategic priorities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-600" />
              Why Planning Matters
            </h4>
            <p className="text-sm text-slate-700">
              Without a calendar and clear ownership, content production becomes chaotic—deadlines
              slip, work duplicates, and strategic priorities get buried under urgent requests. Good
              planning creates predictability and lets you say no to low-value work.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Planning Inputs</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white border border-slate-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">📊 Cluster Priorities from Strategy</h5>
                <p className="text-xs text-slate-700">
                  ICE scores, traffic potential, business value—which clusters matter most this
                  quarter?
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">👥 Capacity Per Role</h5>
                <p className="text-xs text-slate-700">
                  How many pages can each writer/SME deliver per month? Account for vacations,
                  meetings, other commitments.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">📅 Seasonal Moments</h5>
                <p className="text-xs text-slate-700">
                  Holiday prep, tax season, industry events—what needs to publish ahead of peaks?
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">🚀 Product/Feature Launches</h5>
                <p className="text-xs text-slate-700">
                  New features require supporting content—coordinate with product roadmap.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Planning Actions</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Create Rolling 12-Week Calendar</p>
                  <p className="text-xs text-slate-700">
                    Organize by cluster and funnel stage (awareness, consideration, decision). Update
                    weekly as work progresses.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Assign DRI Per Page</p>
                  <p className="text-xs text-slate-700">
                    Every page has ONE Directly Responsible Individual. They own delivery
                    end-to-end—no shared accountability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Set SLA for Each Step</p>
                  <p className="text-xs text-slate-700">
                    Briefing: 2 days | Drafting: 5 days | Review: 2 days | Publish: 1 day. Adjust
                    for complexity.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Track Dependencies</p>
                  <p className="text-xs text-slate-700">
                    Design work, data pulls, customer quotes, subject-matter interviews—log what
                    needs to happen before drafting starts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Reserve Buffer for Refreshes</p>
                  <p className="text-xs text-slate-700">
                    Protect 10-25% of monthly capacity for updates, consolidations, and urgent
                    fixes. Don&apos;t fill 100% with new content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Planning Outputs</h4>
            <div className="bg-white border-2 border-slate-300 rounded p-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Badge className="bg-blue-600 flex-shrink-0">Output 1</Badge>
                  <div>
                    <p className="font-semibold">Calendar with Owner, Status, Due Dates</p>
                    <p className="text-xs text-slate-600">
                      Visible to all stakeholders. Updated in weekly standups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="bg-blue-600 flex-shrink-0">Output 2</Badge>
                  <div>
                    <p className="font-semibold">Risk Log</p>
                    <p className="text-xs text-slate-600">
                      What&apos;s at risk of missing deadlines? Who&apos;s over capacity?
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="bg-blue-600 flex-shrink-0">Output 3</Badge>
                  <div>
                    <p className="font-semibold">Weekly Standup Agenda</p>
                    <p className="text-xs text-slate-600">
                      Wins, blockers, what&apos;s publishing next week. Keep it to 25 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-purple-300 bg-purple-50">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Quick Checks:</strong> Does every planned page tie to a cluster and have a
              single, accountable owner? Is at least one refresh scheduled for each high-value hub
              this quarter?
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Governance & Workflows */}
      <Card className="border-2 border-green-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-600" />
            Governance & Workflows
          </CardTitle>
          <CardDescription>
            Define roles, responsibilities, and handoffs for smooth operations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Core Roles</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-purple-600">Role</Badge>
                  <h5 className="font-semibold text-sm">DRI (Directly Responsible Individual)</h5>
                </div>
                <p className="text-xs text-slate-700">
                  <strong>Accountability:</strong> Owns delivery end-to-end. If it slips, the DRI is
                  responsible.
                </p>
                <div className="mt-2 bg-white p-2 rounded text-xs">
                  <p className="font-semibold mb-1">Typical DRI:</p>
                  <p>Content lead, editor, or writer—depends on team structure</p>
                </div>
              </div>

              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-600">Role</Badge>
                  <h5 className="font-semibold text-sm">SME (Subject Matter Expert)</h5>
                </div>
                <p className="text-xs text-slate-700">
                  <strong>Contribution:</strong> Provides facts, screenshots, examples, quotes. Not
                  responsible for drafting unless they&apos;re also the writer.
                </p>
                <div className="mt-2 bg-white p-2 rounded text-xs">
                  <p className="font-semibold mb-1">Example SME Input:</p>
                  <p>
                    Product manager provides feature screenshots | Customer success shares user
                    quotes
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-600">Role</Badge>
                  <h5 className="font-semibold text-sm">Editor</h5>
                </div>
                <p className="text-xs text-slate-700">
                  <strong>Responsibility:</strong> Ensures structure, clarity, adherence to style
                  guide and brief. Catches tone mismatches and structural issues.
                </p>
              </div>

              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-amber-600">Role</Badge>
                  <h5 className="font-semibold text-sm">SEO Reviewer</h5>
                </div>
                <p className="text-xs text-slate-700">
                  <strong>Validation:</strong> Confirms intent fit, SERP alignment, internal link
                  execution, snippet capture opportunities. Not a line editor.
                </p>
              </div>

              <div className="border-l-4 border-l-red-500 bg-red-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-red-600">Role</Badge>
                  <h5 className="font-semibold text-sm">Legal/Brand Approver (Optional)</h5>
                </div>
                <p className="text-xs text-slate-700">
                  <strong>Gate:</strong> For sensitive topics (regulatory, financial, medical), brand
                  claims, or partnership content. Don&apos;t involve unless necessary—adds delay.
                </p>
              </div>

              <div className="border-l-4 border-l-indigo-500 bg-indigo-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-indigo-600">Role</Badge>
                  <h5 className="font-semibold text-sm">Publisher</h5>
                </div>
                <p className="text-xs text-slate-700">
                  <strong>Action:</strong> Final formatter/uploader. In small teams, often the same
                  person as DRI.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">RACI Matrix</h4>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-4">
              <p className="text-sm text-slate-700 mb-3">
                <strong>RACI:</strong> Responsible, Accountable, Consulted, Informed
              </p>
              <div className="bg-white rounded p-3">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Step</th>
                      <th className="text-center p-2">Responsible</th>
                      <th className="text-center p-2">Accountable</th>
                      <th className="text-center p-2">Consulted</th>
                      <th className="text-center p-2">Informed</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b">
                      <td className="p-2">Briefing</td>
                      <td className="text-center p-2">SEO Lead</td>
                      <td className="text-center p-2">DRI</td>
                      <td className="text-center p-2">SME</td>
                      <td className="text-center p-2">Team</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Drafting</td>
                      <td className="text-center p-2">Writer</td>
                      <td className="text-center p-2">DRI</td>
                      <td className="text-center p-2">SME</td>
                      <td className="text-center p-2">Editor</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Review</td>
                      <td className="text-center p-2">Editor</td>
                      <td className="text-center p-2">DRI</td>
                      <td className="text-center p-2">SEO</td>
                      <td className="text-center p-2">-</td>
                    </tr>
                    <tr>
                      <td className="p-2">Publish</td>
                      <td className="text-center p-2">Publisher</td>
                      <td className="text-center p-2">DRI</td>
                      <td className="text-center p-2">-</td>
                      <td className="text-center p-2">Team</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-600 mt-3">
                <strong>Note:</strong> Define per template type (guides, comparisons, local pages).
                Keep it visible in your tracker.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Handoff Definition of Done</h4>
            <div className="bg-white border border-slate-200 rounded p-4">
              <p className="text-sm text-slate-700 mb-3">
                Each step requires a clear definition of done before passing to next person:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Brief → Draft Handoff:</p>
                    <p className="text-xs text-slate-600">
                      Brief approved, SME sources gathered, outline confirmed, internal link targets
                      identified
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Draft → Review Handoff:</p>
                    <p className="text-xs text-slate-600">
                      Complete draft with sources cited, image list included, internal link anchors
                      written
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Review → Publish Handoff:</p>
                    <p className="text-xs text-slate-600">
                      All edits accepted, title/meta finalized, images uploaded, internal links
                      implemented
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-amber-300 bg-amber-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Avoid Over-Approval:</strong> Too many gates add delay without improving
              quality. Only involve legal/brand for sensitive topics. Trust your editor and SEO
              reviewer for most content.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Capacity Planning */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-purple-600" />
            Capacity Planning & Buffer Management
          </CardTitle>
          <CardDescription>
            Balance new content production with maintenance work
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">The 75/25 Rule</h4>
            <p className="text-sm text-slate-700">
              Don&apos;t plan for 100% capacity utilization. Reserve 15-25% for refreshes,
              consolidations, urgent fixes, and unexpected requests. Protect this buffer ruthlessly.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Capacity Estimation Guide</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white border border-slate-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">Experienced Writer</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Short spoke (600-800 words): 2-3 hours</li>
                  <li>• Medium spoke (1,200-1,500 words): 4-6 hours</li>
                  <li>• Long hub (2,500-3,000 words): 8-12 hours</li>
                </ul>
                <p className="text-xs text-slate-600 mt-2">
                  <strong>Monthly capacity:</strong> 6-8 spokes OR 2-3 hubs
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">SME (Non-Writer)</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Short technical piece: 6-8 hours</li>
                  <li>• Medium guide with examples: 10-15 hours</li>
                  <li>• Long definitive resource: 20-30 hours</li>
                </ul>
                <p className="text-xs text-slate-600 mt-2">
                  <strong>Monthly capacity:</strong> 2-4 pieces (depending on other
                  responsibilities)
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Buffer Allocation</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">10% - Urgent Fixes</p>
                  <p className="text-xs text-slate-700">
                    Broken links, outdated pricing, regulatory changes that need immediate updates
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">10-15% - Refreshes & Consolidations</p>
                  <p className="text-xs text-slate-700">
                    Update decaying content, merge overlapping pages, optimize underperforming pieces
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="border-2 border-red-300 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-900">
            <AlertTriangle className="h-5 w-5" />
            Planning & Governance Pitfalls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  No DRI or Dates
                </h5>
                <p className="text-xs text-red-800">
                  Content with shared accountability and vague deadlines stalls. Every page needs
                  ONE owner and a publish date.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  100% Capacity Planning
                </h5>
                <p className="text-xs text-red-800">
                  Filling every hour with new content leaves no room for refreshes, fixes, or urgent
                  requests. Reserve 15-25% buffer.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Over-Approval Delays
                </h5>
                <p className="text-xs text-red-800">
                  Requiring legal/brand review for every piece adds weeks without improving quality.
                  Only gate sensitive topics.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Unclear Handoffs
                </h5>
                <p className="text-xs text-red-800">
                  Without definition-of-done per step, work bounces back and forth. Define what
                  &quot;draft complete&quot; means.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

