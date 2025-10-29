'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { useConfig } from '@/lib/config/provider';
import { checkRobotsBlocking } from '@/lib/rules/robots';

interface DemoChip {
  label: string;
  params: string;
  description: string;
}

interface DemoChipsProps {
  basePath: string;
}

export function DemoChips({ basePath }: DemoChipsProps) {
  const { config } = useConfig();

  const demos: DemoChip[] = [
    { label: '+ Sort (unstable)', params: 'sort=price_desc', description: 'Unstable param alone → noindex,follow' },
    { label: '+ Color (stable)', params: 'color=black', description: 'Stable facet → indexable' },
    { label: '+ Size (stable)', params: 'size=m', description: 'Stable facet → indexable' },
    { label: '+ Pagination (page=2)', params: 'page=2', description: 'Page 2+ → noindex,follow, self-canonical' },
    { label: '+ Sort + Color', params: 'sort=price_desc&color=black', description: 'Unstable+Stable → noindex, drops sort from canonical' },
    { label: '+ View (unstable)', params: 'view=grid', description: 'UI preference → noindex,follow' },
    { label: '+ Per-page (unstable)', params: 'per_page=60', description: 'UI preference → noindex,follow' },
    { label: '+ Price range (unstable)', params: 'price_min=20&price_max=40', description: 'Dynamic filter → noindex,follow' },
    { label: '+ Multi-select color (stable)', params: 'color=black,blue', description: 'Multi-value facet (normalized) → indexable' },
    { label: '+ Color synonym', params: 'color=nero', description: 'Synonym normalization → nero becomes black' },
    { label: '+ Unstable + Pagination', params: 'sort=price_desc&page=2', description: 'Unstable+Page2 → noindex, drops sort, keeps page' },
    { label: '+ Stable + Pagination', params: 'color=black&page=2', description: 'Stable+Page2 → noindex, keeps both' },
    { label: '+ Stable + Stable', params: 'color=black&size=m', description: 'Multiple stable facets → indexable' },
    { label: '+ Unstable + Tracking', params: 'sort=price_desc&utm_source=fb', description: 'Unstable+Tracking → noindex, both dropped' },
    { label: '+ UI prefs', params: 'view=grid&per_page=60', description: 'UI noise → noindex, both dropped' },
  ];

  return (
    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <h3 className="font-semibold mb-3 text-sm">Try Parameter Combinations:</h3>
      <p className="text-xs text-slate-600 mb-3">
        Click any chip to see how the SEO Receipt explains the decision. Watch for "(Blocked)" suffix when robots.txt applies.
      </p>
      <div className="flex flex-wrap gap-2">
        {demos.map((demo, idx) => {
          const url = `${basePath}?${demo.params}`;
          const searchParams = new URLSearchParams(demo.params);
          const robotsCheck = checkRobotsBlocking(basePath, searchParams, config);

          const isBlocked = robotsCheck.isBlocked;
          const displayLabel = isBlocked ? `${demo.label} (Blocked)` : demo.label;

          return (
            <Link key={idx} href={url} title={demo.description}>
              <Button
                variant={isBlocked ? 'destructive' : 'outline'}
                size="sm"
                className="text-xs"
              >
                {displayLabel}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
