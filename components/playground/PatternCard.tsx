"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Check, X } from 'lucide-react';

export interface SeoPattern {
  id: string;
  name: string;
  icon: string;
  category: string;
  risk: 'high' | 'medium' | 'low' | 'varies' | 'none';
  description: string;
  explanation: string;
  example: {
    url: string;
    liveLink: string;
  };
  whenToUse: string[];
  whenToAvoid: string[];
  strategy: string;
  implementation: string;
  seoImpact: {
    indexable: boolean | null;
    robotsBlocked: boolean | null;
    sitemapIncluded: boolean | null;
  };
}

interface PatternCardProps {
  pattern: SeoPattern;
}

const riskColors = {
  high: 'border-red-200 bg-red-50',
  medium: 'border-orange-200 bg-orange-50',
  low: 'border-green-200 bg-green-50',
  varies: 'border-purple-200 bg-purple-50',
  none: 'border-gray-200 bg-gray-50',
};

const riskBadgeColors = {
  high: 'bg-red-600 text-white',
  medium: 'bg-orange-600 text-white',
  low: 'bg-green-600 text-white',
  varies: 'bg-purple-600 text-white',
  none: 'bg-gray-600 text-white',
};

const riskLabels = {
  high: 'High Risk',
  medium: 'Medium Risk',
  low: 'Low Risk',
  varies: 'Varies',
  none: 'N/A',
};

export function PatternCard({ pattern }: PatternCardProps) {
  const cardColorClass = riskColors[pattern.risk];
  const badgeColorClass = riskBadgeColors[pattern.risk];

  return (
    <Card className={`${cardColorClass} hover:shadow-lg transition-shadow`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="text-2xl">{pattern.icon}</span>
            {pattern.name}
          </CardTitle>
          <Badge className={badgeColorClass}>
            {riskLabels[pattern.risk]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-sm text-slate-700 font-medium">
          {pattern.description}
        </p>

        {/* Explanation */}
        <p className="text-sm text-slate-600">
          {pattern.explanation}
        </p>

        {/* Example */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-700">Example:</h4>
          <code className="block text-xs bg-white/50 p-2 rounded border border-slate-300 overflow-x-auto">
            {pattern.example.url}
          </code>
          <Link href={pattern.example.liveLink}>
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink className="w-3 h-3 mr-2" />
              Try it Live
            </Button>
          </Link>
        </div>

        {/* When to Use */}
        {pattern.whenToUse.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-green-700 flex items-center gap-1">
              <Check className="w-4 h-4" />
              When to Use:
            </h4>
            <ul className="text-xs text-slate-700 space-y-1">
              {pattern.whenToUse.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* When to Avoid */}
        {pattern.whenToAvoid.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-red-700 flex items-center gap-1">
              <X className="w-4 h-4" />
              When to Avoid:
            </h4>
            <ul className="text-xs text-slate-700 space-y-1">
              {pattern.whenToAvoid.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Strategy */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-700">Strategy:</h4>
          <p className="text-xs text-slate-600 bg-white/50 p-2 rounded border border-slate-300">
            {pattern.strategy}
          </p>
        </div>

        {/* SEO Impact */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-700">SEO Impact:</h4>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/50 p-2 rounded border border-slate-300 text-center">
              <div className="font-semibold mb-1">Indexable</div>
              <div>
                {pattern.seoImpact.indexable === null ? (
                  <span className="text-gray-500">Varies</span>
                ) : pattern.seoImpact.indexable ? (
                  <span className="text-green-600 font-bold">✓ Yes</span>
                ) : (
                  <span className="text-red-600 font-bold">✗ No</span>
                )}
              </div>
            </div>
            <div className="bg-white/50 p-2 rounded border border-slate-300 text-center">
              <div className="font-semibold mb-1">Robots</div>
              <div>
                {pattern.seoImpact.robotsBlocked === null ? (
                  <span className="text-gray-500">Varies</span>
                ) : pattern.seoImpact.robotsBlocked ? (
                  <span className="text-red-600 font-bold">Blocked</span>
                ) : (
                  <span className="text-green-600 font-bold">Allowed</span>
                )}
              </div>
            </div>
            <div className="bg-white/50 p-2 rounded border border-slate-300 text-center">
              <div className="font-semibold mb-1">Sitemap</div>
              <div>
                {pattern.seoImpact.sitemapIncluded === null ? (
                  <span className="text-gray-500">Varies</span>
                ) : pattern.seoImpact.sitemapIncluded ? (
                  <span className="text-green-600 font-bold">✓ Yes</span>
                ) : (
                  <span className="text-red-600 font-bold">✗ No</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

