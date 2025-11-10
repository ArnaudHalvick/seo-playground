import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  FileText,
  Link2,
  MapPin,
  Star,
  Video,
  Award,
} from "lucide-react";

export default function UnderstandingTab() {
  return (
    <div className="space-y-6">
      {/* Acronym Glossary */}
      <Card className="border-2 border-purple-300 bg-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-600" />
            Key Terms & Acronyms
          </CardTitle>
          <CardDescription>
            Quick reference for terminology used throughout this guide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">E-E-A-T:</span> Experience, Expertise,
              Authoritativeness, Trustworthiness
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">GBP:</span> Google Business Profile
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">NAP:</span> Name, Address, Phone
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">UGC:</span> User-Generated Content
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">DR/DA:</span> Domain Rating / Domain Authority
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">PR:</span> Public Relations
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">SLA:</span> Service Level Agreement
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">CRM:</span> Customer Relationship Management
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Skills & Outcomes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-purple-600" />
            Core Skills & Outcomes
          </CardTitle>
          <CardDescription>What you&apos;ll learn and what you&apos;ll deliver</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-4">Core Skills</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Link2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Link Acquisition & Digital PR</h4>
                      <p className="text-xs text-slate-700">
                        Create linkable assets (data studies, tools, guides), identify outreach
                        targets, and craft compelling pitches that earn editorially placed links
                        from relevant, authoritative sites.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Local SEO Operations</h4>
                      <p className="text-xs text-slate-700">
                        Optimize GBP (Google Business Profile), maintain NAP (Name, Address, Phone)
                        consistency, create unique location pages, and manage local citations to
                        strengthen geo-relevance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-amber-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Reviews & UGC Governance</h4>
                      <p className="text-xs text-slate-700">
                        Build systems to collect reviews at the right moments, respond promptly to
                        all feedback, and mine UGC (User-Generated Content) for insights and social
                        proof.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Video className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Image & Video SEO</h4>
                      <p className="text-xs text-slate-700">
                        Optimize titles, descriptions, thumbnails, and chapters for video content.
                        Use descriptive filenames and captions for images to win featured spots in
                        search results.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-200 bg-indigo-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">E-E-A-T Amplification</h4>
                      <p className="text-xs text-slate-700">
                        Display author credentials, cite reputable sources, showcase third-party
                        validation (press, awards, certifications), and maintain consistent
                        messaging across all platforms.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Key Deliverables</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Linkable Asset Plan</h4>
                  <p className="text-xs text-slate-700">
                    Data study, tool/template, or local resource with PR angles and target outreach
                    lists (30-50 contacts per asset)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Outreach Dossiers</h4>
                  <p className="text-xs text-slate-700">
                    Media lists with journalist hooks, partner pitches, and CRM/spreadsheet tracking
                    (contact, angle, status, earned links, follow-up dates)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Local SEO Kit</h4>
                  <p className="text-xs text-slate-700">
                    GBP optimization checklist, NAP audit, photo/video guidelines, location page
                    content plan with local proof elements
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Reviews/UGC Program</h4>
                  <p className="text-xs text-slate-700">
                    Collection triggers (&quot;happy moments&quot;), response policy with SLA
                    (Service Level Agreement), highlight criteria for featuring on site
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Media Playbook</h4>
                  <p className="text-xs text-slate-700">
                    Image/video metadata guidelines, thumbnail design principles, embed strategy with
                    textual context for SEO
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">E-E-A-T Proof Pack</h4>
                  <p className="text-xs text-slate-700">
                    Press logos, certifications, awards, testimonials, expert bios with credentials
                    and links to external profiles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Overview */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            6-Step Authority Workflow
          </CardTitle>
          <CardDescription>
            The complete process from gap analysis to monitoring wins
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Identify Linkable Gaps by Cluster</h4>
                <p className="text-xs text-slate-600">
                  Which topics need external validation? Where are competitors earning links?
                </p>
              </div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">Planning</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Build Linkable Asset with PR Angles</h4>
                <p className="text-xs text-slate-600">
                  Create one high-value asset per quarter (data study, tool, guide)
                </p>
              </div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">Planning</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Run Focused Outreach Sprints</h4>
                <p className="text-xs text-slate-600">
                  Personalized pitches to 30-50 targets, two waves, track in CRM
                </p>
              </div>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">Execution</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Operationalize Local SEO</h4>
                <p className="text-xs text-slate-600">
                  Optimize GBP, ensure NAP consistency, build unique location pages
                </p>
              </div>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">Execution</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Scale Reviews & Media SEO</h4>
                <p className="text-xs text-slate-600">
                  Launch review collection, optimize video/image metadata, track performance
                </p>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">Scaling</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                6
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Track Wins & Iterate</h4>
                <p className="text-xs text-slate-600">
                  Monitor referring domains, local actions, review velocity, page impact
                </p>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">Measurement</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

