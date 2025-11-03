"use client";

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';

interface PatternFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedRisk: string | null;
  onRiskChange: (risk: string | null) => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  activeFilterCount: number;
  onClearAll: () => void;
}

const risks = [
  { value: 'low', label: '🟢 Low', color: 'bg-green-100 hover:bg-green-200 text-green-800' },
  { value: 'medium', label: '🟡 Medium', color: 'bg-orange-100 hover:bg-orange-200 text-orange-800' },
  { value: 'high', label: '🔴 High', color: 'bg-red-100 hover:bg-red-200 text-red-800' },
  { value: 'varies', label: '🟣 Varies', color: 'bg-purple-100 hover:bg-purple-200 text-purple-800' },
];

const categories = [
  { value: 'filtering', label: 'Filtering' },
  { value: 'sorting', label: 'Sorting' },
  { value: 'ranges', label: 'Ranges' },
  { value: 'url-strategies', label: 'URL Strategies' },
  { value: 'navigation', label: 'Navigation' },
  { value: 'access-control', label: 'Access Control' },
];

export function PatternFilter({
  searchQuery,
  onSearchChange,
  selectedRisk,
  onRiskChange,
  selectedCategory,
  onCategoryChange,
  activeFilterCount,
  onClearAll,
}: PatternFilterProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          type="text"
          placeholder="Search patterns..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Risk Level Filter */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-slate-700">Risk Level</h3>
          {selectedRisk && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRiskChange(null)}
              className="h-auto py-1 px-2 text-xs"
            >
              Clear
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedRisk === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => onRiskChange(null)}
            className="h-auto py-2"
          >
            All
          </Button>
          {risks.map((risk) => (
            <Button
              key={risk.value}
              variant="outline"
              size="sm"
              onClick={() => onRiskChange(risk.value)}
              className={`h-auto py-2 ${
                selectedRisk === risk.value
                  ? risk.color
                  : 'hover:bg-slate-100'
              }`}
            >
              {risk.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-slate-700">Category</h3>
          {selectedCategory && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCategoryChange(null)}
              className="h-auto py-1 px-2 text-xs"
            >
              Clear
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(null)}
            className="h-auto py-2"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant="outline"
              size="sm"
              onClick={() => onCategoryChange(category.value)}
              className={`h-auto py-2 ${
                selectedCategory === category.value
                  ? 'bg-blue-100 hover:bg-blue-200 text-blue-800'
                  : 'hover:bg-slate-100'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Active Filter Summary */}
      {activeFilterCount > 0 && (
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Active Filters:</span>
            <Badge variant="secondary">{activeFilterCount}</Badge>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onClearAll}
            className="h-auto py-2"
          >
            <X className="w-3 h-3 mr-1" />
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
}

