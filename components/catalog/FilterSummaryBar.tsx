"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { FilterOptions } from "@/lib/catalog/data";

interface FilterSummaryBarProps {
  category: string;
  filters: FilterOptions;
  sort?: string;
  page?: number;
  priceRange: { min: number; max: number };
}

export function FilterSummaryBar({ 
  category,
  filters, 
  sort, 
  page, 
  priceRange,
}: FilterSummaryBarProps) {
  const router = useRouter();
  
  const handleClearAll = () => {
    router.push(`/shop/${category}`);
  };
  // Check if any filters are active
  const hasColorFilters = filters.colors && filters.colors.length > 0;
  const hasSizeFilter = !!filters.size;
  const hasPriceFilter = 
    (filters.priceMin !== undefined && filters.priceMin > priceRange.min) ||
    (filters.priceMax !== undefined && filters.priceMax < priceRange.max);
  const hasSort = sort && sort !== "popularity";
  const hasPagination = page && page > 1;

  const hasAnyFilters = hasColorFilters || hasSizeFilter || hasPriceFilter || hasSort || hasPagination;

  const getSortLabel = (sortValue: string) => {
    const sortLabels: Record<string, string> = {
      price_asc: "Price: Low to High",
      price_desc: "Price: High to Low",
      name_asc: "Name: A-Z",
      name_desc: "Name: Z-A",
      popularity: "Most Popular",
    };
    return sortLabels[sortValue] || sortValue;
  };

  return (
    <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
            <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
              Active Filters:
            </span>
            
            {!hasAnyFilters && (
              <span className="text-sm text-slate-500 italic">None</span>
            )}
            
            {/* Color filters */}
            {hasColorFilters && filters.colors!.map((color) => (
              <Badge key={color} variant="secondary" className="capitalize">
                {color}
              </Badge>
            ))}
            
            {/* Size filter */}
            {hasSizeFilter && (
              <Badge variant="secondary">
                Size: {filters.size}
              </Badge>
            )}
            
            {/* Price range filter */}
            {hasPriceFilter && (
              <Badge variant="secondary">
                ${filters.priceMin ?? priceRange.min} - ${filters.priceMax ?? priceRange.max}
              </Badge>
            )}
            
            {/* Sort */}
            {hasSort && (
              <Badge variant="secondary">
                {getSortLabel(sort!)}
              </Badge>
            )}
            
            {/* Pagination */}
            {hasPagination && (
              <Badge variant="outline">
                Page {page}
              </Badge>
            )}
          </div>
          
          {/* Clear All Button */}
          <Button 
            onClick={handleClearAll} 
            variant="outline" 
            size="sm"
            className="whitespace-nowrap"
            disabled={!hasAnyFilters}
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}

