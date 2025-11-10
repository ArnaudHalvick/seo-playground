import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  CheckCircle2,
  Info,
  MapPin,
  Star,
  Video,
  Image as ImageIcon,
  Users,
  Megaphone,
  FileText,
  Sparkles,
} from "lucide-react";

export default function AcquisitionTab() {
  return (
    <div className="space-y-6">
      {/* Link Acquisition & Digital PR */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-blue-600" />
            Link Acquisition & Digital PR
          </CardTitle>
          <CardDescription>
            Earn editorially placed links through valuable content and strategic outreach
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-600" />
              The Goal
            </h4>
            <p className="text-sm text-slate-700">
              Earn editorially placed, relevant links and brand mentions that real people would
              click—no junk directories or paid link schemes. One quarterly linkable asset can earn
              20-50 quality links with proper PR execution.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">4 Types of Linkable Assets</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <h5 className="font-semibold text-sm mb-1">1. Data Studies</h5>
                <p className="text-xs text-slate-700 mb-2">
                  Proprietary usage data or curated industry stats with charts
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Example:</p>
                  <p>&quot;2024 SEO Salary Report: Analysis of 5,000 job postings&quot;</p>
                  <p className="text-slate-600">Creates quote-worthy nuggets for journalists</p>
                </div>
              </div>

              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <h5 className="font-semibold text-sm mb-1">2. Tools & Templates</h5>
                <p className="text-xs text-slate-700 mb-2">
                  Calculators, checklists, planners, audit templates
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Example:</p>
                  <p>&quot;Free Content ROI Calculator (Google Sheets template)&quot;</p>
                  <p className="text-slate-600">Earns links from resource roundups</p>
                </div>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <h5 className="font-semibold text-sm mb-1">3. Definitive Guides</h5>
                <p className="text-xs text-slate-700 mb-2">
                  Genuinely comprehensive, with original examples and visuals
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Example:</p>
                  <p>&quot;Complete Guide to International SEO (100+ screenshots)&quot;</p>
                  <p className="text-slate-600">Referenced by educators and practitioners</p>
                </div>
              </div>

              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                <h5 className="font-semibold text-sm mb-1">4. Local Resources</h5>
                <p className="text-xs text-slate-700 mb-2">
                  Curated lists/maps, event calendars, compliance guides
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Example:</p>
                  <p>&quot;Complete Directory of Chicago Tech Meetups (interactive map)&quot;</p>
                  <p className="text-slate-600">Earns local press and community links</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Outreach Target Categories</h4>
            <div className="bg-slate-50 border border-slate-200 rounded p-4">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Journalists & Bloggers</p>
                      <p className="text-xs text-slate-600">Beats that match your asset topic</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Niche Publications</p>
                      <p className="text-xs text-slate-600">Industry magazines, newsletters</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Partners & Suppliers</p>
                      <p className="text-xs text-slate-600">
                        Existing business relationships with sites
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Universities & Associations</p>
                      <p className="text-xs text-slate-600">.edu domains, professional groups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Resource Pages</p>
                      <p className="text-xs text-slate-600">Curated tool/guide lists</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Community Sites & Podcasts</p>
                      <p className="text-xs text-slate-600">Forums, Slack communities, shows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">The Perfect Pitch Anatomy</h4>
            <div className="space-y-3">
              <div className="bg-white border-l-4 border-l-blue-500 p-3 rounded">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-blue-600">1</Badge>
                  <h5 className="font-semibold text-sm">Hook (Why Now)</h5>
                </div>
                <p className="text-xs text-slate-700">
                  Tie to seasonality, regulation change, or trending topic. Example: &quot;With new
                  privacy laws taking effect Q2, I thought you&apos;d find our compliance audit
                  checklist useful&quot;
                </p>
              </div>

              <div className="bg-white border-l-4 border-l-green-500 p-3 rounded">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-green-600">2</Badge>
                  <h5 className="font-semibold text-sm">One Insight</h5>
                </div>
                <p className="text-xs text-slate-700">
                  Contrarian or surprising stat that makes them curious. Example: &quot;73% of
                  companies we surveyed still use outdated...&quot;
                </p>
              </div>

              <div className="bg-white border-l-4 border-l-purple-500 p-3 rounded">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-purple-600">3</Badge>
                  <h5 className="font-semibold text-sm">Why You (Credibility)</h5>
                </div>
                <p className="text-xs text-slate-700">
                  Methodology, sample size, expertise. Example: &quot;Based on analysis of 10,000
                  websites and feedback from certified auditors&quot;
                </p>
              </div>

              <div className="bg-white border-l-4 border-l-amber-500 p-3 rounded">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-amber-600">4</Badge>
                  <h5 className="font-semibold text-sm">Easy Pickup</h5>
                </div>
                <p className="text-xs text-slate-700">
                  Pull-quotes, charts, embed options. Example: &quot;I&apos;ve attached 3 key charts
                  and pull-quotes you can use directly&quot;
                </p>
              </div>

              <div className="bg-white border-l-4 border-l-red-500 p-3 rounded">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-red-600">5</Badge>
                  <h5 className="font-semibold text-sm">Follow-ups</h5>
                </div>
                <p className="text-xs text-slate-700">
                  Fresh angles for different beats. Example: &quot;Happy to provide
                  vertical-specific breakdowns if you cover [fintech/healthcare/etc]&quot;
                </p>
              </div>
            </div>
          </div>

          <Alert className="border-blue-300 bg-blue-50">
            <Sparkles className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Sustainable Habit:</strong> Quarterly asset → outreach cycle. Weekly
              micro-pitches for timely opportunities. Maintain a CRM/spreadsheet: contact, angle
              pitched, status, links earned, follow-up date.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Local SEO Operations */}
      <Card className="border-2 border-green-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-green-600" />
            Local SEO Operations
          </CardTitle>
          <CardDescription>
            Non-technical tactics to strengthen geo-relevance and local visibility
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">
              Google Business Profile (GBP) Essentials
            </h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <h5 className="font-semibold text-sm mb-2">Business Information</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>
                    • <strong>Categories:</strong> Primary & secondary categories that match your
                    services
                  </li>
                  <li>
                    • <strong>NAP consistency:</strong> Name, Address, Phone must match website and
                    citations exactly
                  </li>
                  <li>
                    • <strong>Description:</strong> Include value props, services, and relevant
                    keywords (750 char limit)
                  </li>
                  <li>
                    • <strong>Hours:</strong> Accurate business hours including holidays and special
                    hours
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <h5 className="font-semibold text-sm mb-2">Visual Content</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>
                    • <strong>Photos:</strong> Exterior, interior, team, products (recent,
                    high-quality)
                  </li>
                  <li>
                    • <strong>Videos:</strong> 30-second tours, service demonstrations, team
                    introductions
                  </li>
                  <li>
                    • <strong>Geotagging:</strong> Photos tagged with actual business location
                    improve relevance
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <h5 className="font-semibold text-sm mb-2">Ongoing Activities</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>
                    • <strong>Posts (weekly):</strong> Offers, events, updates (max 1,500 chars +
                    photo)
                  </li>
                  <li>
                    • <strong>Q&A:</strong> Seed common questions and answers proactively
                  </li>
                  <li>
                    • <strong>Products/Services:</strong> Add detailed entries with prices,
                    descriptions, photos
                  </li>
                  <li>
                    • <strong>Messaging:</strong> Enable if staffed to respond within business hours
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Location Pages (Editorial Side)</h4>
            <div className="bg-white border border-slate-200 rounded p-4">
              <p className="text-sm text-slate-700 mb-3">
                Each location page needs <strong>unique local proof</strong> to avoid thin content:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Team photos (actual staff at that location), storefront/interior photos
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Maps/directions, parking details, public transit options specific to this
                    location
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Local testimonials/case studies from customers in that area</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Community involvement (sponsorships, local events, partnerships with nearby
                    businesses)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Local FAQs (neighborhood specifics, local regulations, delivery/coverage areas)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Citations & Directories</h4>
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <p className="text-sm text-slate-700 mb-2">
                Prioritize <strong>quality over quantity</strong>:
              </p>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>
                  • Industry-specific directories (e.g., FindLaw for lawyers, Houzz for home
                  services)
                </li>
                <li>
                  • Local chamber of commerce, Better Business Bureau, Yelp, Facebook, Apple Maps
                </li>
                <li>• Fix NAP inconsistencies before submitting to new directories</li>
                <li>
                  • Avoid mass low-quality submissions (spammy directories hurt more than help)
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reviews & UGC */}
      <Card className="border-2 border-amber-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-amber-600" />
            Reviews & User-Generated Content
          </CardTitle>
          <CardDescription>
            Build systems to collect, respond to, and leverage customer feedback
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Collection System</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                <h5 className="font-semibold text-sm mb-2">Identify &quot;Happy Moments&quot;</h5>
                <p className="text-xs text-slate-700 mb-2">
                  Trigger review requests at moments of peak satisfaction:
                </p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Delivery confirmation or project completion</li>
                  <li>• Milestone reached (anniversary, subscription renewal)</li>
                  <li>• Support ticket resolved successfully</li>
                  <li>• Positive feedback in other channels (email, chat)</li>
                </ul>
              </div>

              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                <h5 className="font-semibold text-sm mb-2">Request Flow Best Practices</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>
                    • <strong>Mobile-friendly:</strong> Most reviews happen on phones—optimize for
                    mobile
                  </li>
                  <li>
                    • <strong>Rotate platforms:</strong> Diversify between GBP, Yelp, industry
                    sites, Facebook
                  </li>
                  <li>
                    • <strong>Ethical incentives:</strong> Enter in a draw for feedback (not for
                    5-stars specifically)
                  </li>
                  <li>
                    • <strong>Make it easy:</strong> Direct link to review page, 2-3 clicks maximum
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Response Policy</h4>
            <div className="bg-white border border-slate-200 rounded p-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Badge className="bg-amber-600 flex-shrink-0">Rule</Badge>
                  <div>
                    <p className="font-semibold">Respond to ALL reviews (positive and negative)</p>
                    <p className="text-xs text-slate-600">
                      Acknowledge positives with gratitude. For negatives: apologize → diagnose →
                      offer next step
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amber-600 flex-shrink-0">Rule</Badge>
                  <div>
                    <p className="font-semibold">
                      Set and meet a response SLA (Service Level Agreement)
                    </p>
                    <p className="text-xs text-slate-600">
                      Example: 48 hours for all reviews. Track compliance, assign ownership
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amber-600 flex-shrink-0">Rule</Badge>
                  <div>
                    <p className="font-semibold">Sign with a human name + role</p>
                    <p className="text-xs text-slate-600">
                      &quot;Thanks for the feedback! - Sarah, Customer Success Manager&quot; feels
                      more authentic
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amber-600 flex-shrink-0">Rule</Badge>
                  <div>
                    <p className="font-semibold">Escalate recurring themes to product/support</p>
                    <p className="text-xs text-slate-600">
                      If 10 reviews mention the same issue, flag it for operational fix
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Reuse & Insight Mining</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-amber-50 border border-amber-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">Feature on Site</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Snippets/carousels on key pages</li>
                  <li>• Video testimonials on homepage</li>
                  <li>• Case study pages from detailed reviews</li>
                  <li>• Get permission when using customer names/photos</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">Mine for Language</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Extract objections mentioned repeatedly</li>
                  <li>• Note benefits customers value most</li>
                  <li>• Use exact phrases in ad copy, CTAs, FAQs</li>
                  <li>• Feed insights back to content briefs</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Image & Video SEO */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-purple-600" />
            Image & Video SEO Workflow
          </CardTitle>
          <CardDescription>Optimize visual content to win featured spots in search</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">When to Invest in Video SEO</h4>
            <div className="bg-purple-50 border border-purple-200 rounded p-3">
              <p className="text-sm text-slate-700 mb-2">Prioritize video for topics where:</p>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>
                  • <strong>Visual demos help:</strong> How-tos, installations, software
                  walkthroughs
                </li>
                <li>
                  • <strong>SERP shows video features:</strong> Video carousel, featured video
                  snippets
                </li>
                <li>
                  • <strong>Engagement uplift:</strong> Pages with embedded video see longer time on
                  page
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Video Optimization Checklist</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Titles mirror searcher phrasing</p>
                  <p className="text-xs text-slate-600">
                    Example: &quot;How to Set Up Google Tag Manager (Step-by-Step)&quot; instead of
                    &quot;GTM Tutorial&quot;
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Descriptions with time-stamped chapters</p>
                  <p className="text-xs text-slate-600">
                    00:00 Intro | 01:12 Step 1: Install Container | 03:45 Step 2: Add Tags...
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">On-screen text reinforces key steps</p>
                  <p className="text-xs text-slate-600">
                    Captions, arrows, highlights help viewers follow along and improve accessibility
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Embed on relevant page with textual summary</p>
                  <p className="text-xs text-slate-600">
                    Don&apos;t just embed—add a 100-200 word summary above/below for context and SEO
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Custom thumbnails telegraph the answer</p>
                  <p className="text-xs text-slate-600">
                    Clear subject, minimal text, face or focal object when relevant
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Image Optimization Best Practices</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-purple-50 border border-purple-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">
                  <ImageIcon className="h-4 w-4 inline mr-1" />
                  Purposeful Visuals
                </h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Steps, comparisons, before/after</li>
                  <li>• Diagrams, flowcharts, infographics</li>
                  <li>• Product photos (multiple angles)</li>
                  <li>• Avoid generic stock photos</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">
                  <FileText className="h-4 w-4 inline mr-1" />
                  Metadata
                </h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Descriptive filenames (not IMG_1234.jpg)</li>
                  <li>• Captions that add meaning for users</li>
                  <li>• Place near relevant section in content</li>
                  <li>• Reference in copy to increase engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
