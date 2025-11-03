"use client";

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { PatternCard, type SeoPattern } from './PatternCard';
import { Badge } from '@/components/ui/badge';

interface PatternCategoryProps {
  title: string;
  description: string;
  icon: string;
  patterns: SeoPattern[];
  defaultExpanded?: boolean;
}

export function PatternCategory({
  title,
  description,
  icon,
  patterns,
  defaultExpanded = true,
}: PatternCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  if (patterns.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      {/* Category Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group mb-4"
      >
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {title}
              </h2>
              <p className="text-sm text-slate-600 mt-1">{description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-sm">
              {patterns.length} {patterns.length === 1 ? 'pattern' : 'patterns'}
            </Badge>
            {isExpanded ? (
              <ChevronDown className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
            ) : (
              <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
            )}
          </div>
        </div>
      </button>

      {/* Pattern Grid */}
      {isExpanded && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
          {patterns.map((pattern) => (
            <PatternCard key={pattern.id} pattern={pattern} />
          ))}
        </div>
      )}
    </div>
  );
}

