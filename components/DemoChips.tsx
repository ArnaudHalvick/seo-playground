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

interface ChipGroup {
  title: string;
  description: string;
  chips: DemoChip[];
}

interface DemoChipsProps {
  basePath: string;
}

export function DemoChips({ basePath }: DemoChipsProps) {
  const { config } = useConfig();

  const groups: ChipGroup[] = [
    {
      title: 'Common Parameter Types',
      description: 'See how different parameter policies affect indexability',
      chips: [
        { label: '+ Sort (unstable)', params: 'sort=price_desc', description: 'Unstable param → noindex,follow' },
        { label: '+ Color (stable)', params: 'color=black', description: 'Stable facet → index,follow' },
        { label: '+ Size (stable)', params: 'size=m', description: 'Stable facet → index,follow' },
        { label: '+ Pagination (page=2)', params: 'page=2', description: 'Page 2+ → noindex,follow, self-canonical' },
        { label: '+ Price range (unstable)', params: 'price_min=20&price_max=40', description: 'Dynamic filter → noindex,follow' },
        { label: '+ Multi-select color (stable)', params: 'color=black,blue', description: 'Multi-value stable facet → index,follow' },
        { label: '+ UI prefs (unstable)', params: 'view=grid', description: 'UI preference → noindex,follow' },
      ],
    },
    {
      title: 'Stacked Parameters',
      description: 'What happens when parameters are combined',
      chips: [
        { label: '+ Sort + Color', params: 'sort=price_desc&color=black', description: 'Unstable+Stable → noindex,follow, canonical keeps only color' },
        { label: '+ Unstable + Pagination', params: 'sort=price_desc&page=2', description: 'Unstable+Page2 → noindex,follow, canonical drops sort, keeps page' },
        { label: '+ Stable + Pagination', params: 'color=black&page=2', description: 'Stable+Page2 → noindex,follow, canonical keeps both' },
        { label: '+ Stable + Stable', params: 'color=black&size=m', description: 'Multiple stable facets → index,follow' },
        { label: '+ Unstable + Tracking', params: 'sort=price_desc&utm_source=fb', description: 'Unstable+Tracking → noindex,follow, both dropped' },
      ],
    },
  ];

  return (
    <div className="mb-6 p-5 bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-lg">
      <h3 className="font-semibold mb-2 text-base">Try Parameter Combinations</h3>
      <p className="text-sm text-slate-600 mb-4">
        Click any chip to see how parameters affect indexability, canonical URLs, robots.txt, and sitemap inclusion. The SEO Receipt shows the complete decision flow.
      </p>

      <div className="space-y-5">
        {groups.map((group, groupIdx) => (
          <div key={groupIdx}>
            <div className="mb-2">
              <h4 className="font-semibold text-sm text-slate-700">{group.title}</h4>
              <p className="text-xs text-slate-500">{group.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.chips.map((demo, idx) => {
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
        ))}
      </div>
    </div>
  );
}
