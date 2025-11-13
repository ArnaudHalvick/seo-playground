"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

interface GenderFilterProps {
  category: string;
  currentGender?: string;
  genderCounts: Record<string, number>;
  totalCount: number;
}

export function GenderFilter({ category, currentGender, genderCounts, totalCount }: GenderFilterProps) {
  const genders = [
    { key: 'all', label: 'All', href: `/shop/${category}` },
    { key: 'women', label: 'Women', href: `/shop/${category}/for/women` },
    { key: 'men', label: 'Men', href: `/shop/${category}/for/men` },
    { key: 'girls', label: 'Girls', href: `/shop/${category}/for/girls` },
    { key: 'boys', label: 'Boys', href: `/shop/${category}/for/boys` },
  ];

  return (
    <div className="mb-6">
      {/* SEO Explanation Banner */}
      {currentGender && (
        <Alert className="mb-4 border-green-200 bg-green-50">
          <Info className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <div className="space-y-1">
              <div>
                <strong>✓ Clean Path URL:</strong> This page uses{' '}
                <code className="bg-green-100 px-1 py-0.5 rounded">/shop/{category}/for/{currentGender}/</code>{' '}
                instead of query parameters (<code className="bg-green-100 px-1 py-0.5 rounded">?gender={currentGender}</code>).
              </div>
              <div className="text-sm">
                <strong>SEO Benefits:</strong> Gender is a stable filter that creates meaningful landing pages.
                Clean paths are <strong>index,follow</strong> and included in sitemaps.
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Gender Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {genders.map((gender) => {
          const isActive = (!currentGender && gender.key === 'all') || currentGender === gender.key;
          
          return (
            <Link key={gender.key} href={gender.href} scroll={false}>
              <Button
                variant={isActive ? 'default' : 'outline'}
                size="lg"
                className="min-w-[120px]"
              >
                {gender.label}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

