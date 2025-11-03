"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface PriceRangeFilterProps {
  initialMin?: number;
  initialMax?: number;
  priceRange: { min: number; max: number };
  onApply: (min?: number, max?: number) => void;
  onClear?: () => void;
}

export function PriceRangeFilter({
  initialMin,
  initialMax,
  priceRange,
  onApply,
  onClear,
}: PriceRangeFilterProps) {
  // Internal state for price inputs
  const [priceMin, setPriceMin] = useState<string>(
    initialMin?.toString() ?? ""
  );
  const [priceMax, setPriceMax] = useState<string>(
    initialMax?.toString() ?? ""
  );

  // Update internal state when initial values change (e.g., when filters are cleared externally)
  useEffect(() => {
    setPriceMin(initialMin?.toString() ?? "");
    setPriceMax(initialMax?.toString() ?? "");
  }, [initialMin, initialMax]);

  // Parse price input to number, handling edge cases
  const parsePrice = (value: string): number | undefined => {
    if (!value || value.trim() === "") return undefined;
    
    // Remove everything except digits and decimal point
    const cleaned = value.replace(/[^0-9.]/g, '');
    
    // If empty after cleaning, return undefined
    if (!cleaned) return undefined;
    
    // Parse to float
    const parsed = parseFloat(cleaned);
    
    // Return undefined if NaN or negative
    return isNaN(parsed) || parsed < 0 ? undefined : parsed;
  };

  // Handle price input changes (just update local state, no parent notification)
  const handlePriceInputChange = (field: 'min' | 'max', value: string) => {
    if (field === 'min') {
      setPriceMin(value);
    } else {
      setPriceMax(value);
    }
  };

  // Apply price filter when user clicks the button
  const applyPriceFilter = () => {
    const minPrice = parsePrice(priceMin);
    const maxPrice = parsePrice(priceMax);
    onApply(minPrice, maxPrice);
  };

  // Handle Enter key press to apply filter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      applyPriceFilter();
    }
  };

  // Check if there are any price values entered
  const hasPriceValues = (priceMin && priceMin.trim() !== "") || (priceMax && priceMax.trim() !== "");

  return (
    <div>
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <span className="text-lg">💰</span> Price Range
      </h3>
      <div className="space-y-3">
        <div>
          <Label htmlFor="price-min" className="text-sm text-gray-600 mb-1 block">
            Min Price
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <Input
              id="price-min"
              type="text"
              inputMode="decimal"
              placeholder="Min"
              value={priceMin}
              onChange={(e) => handlePriceInputChange('min', e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-7"
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="price-max" className="text-sm text-gray-600 mb-1 block">
            Max Price
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <Input
              id="price-max"
              type="text"
              inputMode="decimal"
              placeholder="Max"
              value={priceMax}
              onChange={(e) => handlePriceInputChange('max', e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-7"
            />
          </div>
        </div>
        
        <Button 
          onClick={applyPriceFilter} 
          variant="outline" 
          className="w-full"
          size="sm"
        >
          Apply Price Filter
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          Products range: ${priceRange.min.toFixed(0)} - ${priceRange.max.toFixed(0)}
        </p>
      </div>
    </div>
  );
}
