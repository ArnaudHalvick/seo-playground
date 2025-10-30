import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Docs', href: '/docs' }, { label: 'SEO Concepts', href: '/concepts' }]} />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">SEO Concepts</h1>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="robots-txt" className="bg-white rounded-lg border px-6">
            <AccordionTrigger className="text-lg font-semibold">
              robots.txt vs Meta Robots
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 space-y-3">
              <p>
                <strong>robots.txt</strong> controls crawling. It tells search engines which URLs they should or shouldn't request. Blocked URLs won't be crawled, but if they're linked from other sites, they might still appear in search results with limited information.
              </p>
              <p>
                <strong>Meta robots</strong> controls indexing. It tells search engines what to do with a page they've already crawled. Use noindex to prevent a page from appearing in search results.
              </p>
              <p className="bg-blue-50 border border-blue-200 p-3 rounded">
                <strong>Best practice:</strong> Use both for sensitive content (defense in depth). Block in robots.txt to save crawl budget, and add noindex in case the page is discovered another way.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="canonical" className="bg-white rounded-lg border px-6">
            <AccordionTrigger className="text-lg font-semibold">
              Canonical URLs
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 space-y-3">
              <p>
                A canonical URL tells search engines which version of a page is the "main" one when multiple URLs show similar content. This consolidates ranking signals to one preferred URL.
              </p>
              <p>
                <strong>Self-canonical:</strong> A page canonicalizes to itself (e.g., page 2 → page 2). Use when each page has unique value.
              </p>
              <p>
                <strong>Canonical to base:</strong> A page canonicalizes to a different URL (e.g., page 2 → page 1). Use when paginated pages are just fragments of the main listing.
              </p>
              <p className="bg-amber-50 border border-amber-200 p-3 rounded">
                <strong>Warning:</strong> Avoid canonical loops (A → B → A) and chains (A → B → C). Always point directly to the final canonical URL.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="parameters" className="bg-white rounded-lg border px-6">
            <AccordionTrigger className="text-lg font-semibold">
              URL Parameters (Stable/Unstable/Blocked)
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 space-y-3">
              <p>
                <strong>Stable parameters</strong> represent meaningful content variations (e.g., ?color=blue). They can be indexed or mapped to clean paths.
              </p>
              <p>
                <strong>Unstable parameters</strong> create duplicates with no unique value (e.g., ?sort=price). Mark as noindex,follow to allow link discovery but prevent indexing.
              </p>
              <p>
                <strong>Blocked parameters</strong> are tracking params (e.g., ?utm_source=email). Strip from canonical URLs and optionally block in robots.txt.
              </p>
              <p className="bg-blue-50 border border-blue-200 p-3 rounded">
                <strong>Pro tip:</strong> Stable params can be mapped to clean paths (/catalog/t-shirts/blue/) for better URL aesthetics.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pagination" className="bg-white rounded-lg border px-6">
            <AccordionTrigger className="text-lg font-semibold">
              Pagination Strategies
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 space-y-3">
              <p>
                <strong>Page 1:</strong> Always indexable (index,follow).
              </p>
              <p>
                <strong>Page 2+:</strong> Two common approaches:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>noindex,follow + self-canonical:</strong> Prevents duplicate content while allowing crawlers to discover links on page 2+. Recommended for most cases.
                </li>
                <li>
                  <strong>noindex,follow + canonical to base:</strong> Points page 2+ back to page 1. Use when paginated pages have no unique value.
                </li>
              </ul>
              <p className="bg-red-50 border border-red-200 p-3 rounded">
                <strong>Never:</strong> Block pagination in robots.txt. This prevents crawlers from discovering products/links on page 2+!
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="hreflang" className="bg-white rounded-lg border px-6">
            <AccordionTrigger className="text-lg font-semibold">
              Hreflang for International SEO
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 space-y-3">
              <p>
                Hreflang links tell search engines about language and regional variations of a page. This helps serve the right version to users in different locations.
              </p>
              <p>
                <strong>Key requirements:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>All alternates must reference each other (reciprocity)</li>
                <li>Include self-referential hreflang</li>
                <li>Add x-default for fallback language</li>
              </ul>
              <p className="bg-blue-50 border border-blue-200 p-3 rounded">
                <strong>Example:</strong> /en/shoes and /fr/chaussures should both have hreflang links pointing to each other and themselves.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="search-pages" className="bg-white rounded-lg border px-6">
            <AccordionTrigger className="text-lg font-semibold">
              Search Pages & Thin Content
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 space-y-3">
              <p>
                Internal search results pages (e.g., /search?q=shoes) typically should be noindex,follow because:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>They often duplicate category pages</li>
                <li>Query strings create unlimited URL variations</li>
                <li>Content is unstable and changes over time</li>
              </ul>
              <p>
                When search results closely match a category page, canonicalize to the category to consolidate signals.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sitemap" className="bg-white rounded-lg border px-6">
            <AccordionTrigger className="text-lg font-semibold">
              Sitemap Best Practices
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 space-y-3">
              <p>
                Only include indexable URLs in your sitemap. Don't include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Noindex pages</li>
                <li>Pages blocked in robots.txt</li>
                <li>Canonical targets (include the canonical, not the duplicate)</li>
                <li>Parameterized URLs unless they're truly unique</li>
              </ul>
              <p>
                Keep sitemaps focused on your best content to help search engines prioritize crawling.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
    </div>
  );
}
