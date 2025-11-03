"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { X, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { FilterCounts, FilterOptions } from "@/lib/catalog/data";

interface FilterSidebarProps {
  category: string;
  filterCounts: FilterCounts;
  currentFilters: FilterOptions;
  availableColors: string[];
  availableSizes: string[];
}

export function FilterSidebar({
  category,
  filterCounts,
  currentFilters,
  availableColors,
  availableSizes,
}: FilterSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Local state for filters
  const [selectedColors, setSelectedColors] = useState<string[]>(currentFilters.colors || []);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(currentFilters.size);
  const [priceMin, setPriceMin] = useState<string>(
    currentFilters.priceMin?.toString() ?? ""
  );
  const [priceMax, setPriceMax] = useState<string>(
    currentFilters.priceMax?.toString() ?? ""
  );
  const [sortBy, setSortBy] = useState<string>(searchParams.get("sort") || "popularity");

  // Update URL with current filters
  const updateUrl = useCallback(
    (filters: {
      colors?: string[];
      size?: string;
      priceMin?: number;
      priceMax?: number;
      sort?: string;
      page?: string;
    }) => {
      const params = new URLSearchParams(searchParams.toString());

      // Handle colors (multi-select)
      if (filters.colors && filters.colors.length > 0) {
        params.set("color", filters.colors.join(","));
      } else {
        params.delete("color");
      }

      // Handle size
      if (filters.size) {
        params.set("size", filters.size);
      } else {
        params.delete("size");
      }

      // Handle price range - allow ANY user-specified price
      // Only skip if price is 0 or undefined (meaningless filter)
      if (filters.priceMin !== undefined && filters.priceMin > 0) {
        params.set("price_min", filters.priceMin.toString());
      } else {
        params.delete("price_min");
      }

      if (filters.priceMax !== undefined) {
        params.set("price_max", filters.priceMax.toString());
      } else {
        params.delete("price_max");
      }

      // Handle sort
      if (filters.sort && filters.sort !== "popularity") {
        params.set("sort", filters.sort);
      } else {
        params.delete("sort");
      }

      // Reset to page 1 when filters change
      if (filters.page !== undefined) {
        if (filters.page !== "1") {
          params.set("page", filters.page);
        } else {
          params.delete("page");
        }
      } else {
        params.delete("page");
      }

      const queryString = params.toString();
      router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
    },
    [searchParams, pathname, router, filterCounts.priceRange]
  );

  // Handle color toggle
  const toggleColor = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];

    setSelectedColors(newColors);
    
    const minPrice = parsePrice(priceMin);
    const maxPrice = parsePrice(priceMax);
    updateUrl({ colors: newColors, size: selectedSize, priceMin: minPrice, priceMax: maxPrice, sort: sortBy });
  };

  // Handle size change
  const handleSizeChange = (size: string) => {
    const newSize = size === selectedSize ? undefined : size;
    setSelectedSize(newSize);
    
    const minPrice = parsePrice(priceMin);
    const maxPrice = parsePrice(priceMax);
    updateUrl({ colors: selectedColors, size: newSize, priceMin: minPrice, priceMax: maxPrice, sort: sortBy });
  };

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

  // Handle price input changes (just update local state, no URL update)
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
    
    updateUrl({ 
      colors: selectedColors, 
      size: selectedSize, 
      priceMin: minPrice, 
      priceMax: maxPrice, 
      sort: sortBy 
    });
  };

  // Handle sort change
  const handleSortChange = (value: string) => {
    setSortBy(value);
    
    const minPrice = parsePrice(priceMin);
    const maxPrice = parsePrice(priceMax);
    updateUrl({ colors: selectedColors, size: selectedSize, priceMin: minPrice, priceMax: maxPrice, sort: value });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedColors([]);
    setSelectedSize(undefined);
    setPriceMin("");
    setPriceMax("");
    setSortBy("popularity");
    router.push(pathname);
  };

  // Sync local state with URL changes (when filters are cleared externally)
  useEffect(() => {
    setSelectedColors(currentFilters.colors || []);
    setSelectedSize(currentFilters.size);
    setSortBy(searchParams.get("sort") || "popularity");
  }, [currentFilters, searchParams]);

  // Separate effect for price inputs - only sync when NOT actively being edited
  useEffect(() => {
    const urlPriceMin = currentFilters.priceMin?.toString() ?? "";
    const urlPriceMax = currentFilters.priceMax?.toString() ?? "";
    
    // Only update if different AND user is not currently typing in these fields
    if (document.activeElement?.id !== 'price-min' && 
        document.activeElement?.id !== 'price-max') {
      if (urlPriceMin !== priceMin) setPriceMin(urlPriceMin);
      if (urlPriceMax !== priceMax) setPriceMax(urlPriceMax);
    }
  }, [currentFilters.priceMin, currentFilters.priceMax]);

  // Count active filters
  const hasPriceFilter = (priceMin && priceMin.trim() !== "") || (priceMax && priceMax.trim() !== "");
  const activeFilterCount =
    selectedColors.length +
    (selectedSize ? 1 : 0) +
    (hasPriceFilter ? 1 : 0) +
    (sortBy !== "popularity" ? 1 : 0);

  // Filter content component
  const FilterContent = () => (
    <div className="space-y-6">
      {/* Color Filter */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span className="text-lg">🎨</span> Color
        </h3>
        <div className="space-y-2">
          {availableColors.map((color) => {
            const count = filterCounts.colors[color] || 0;
            const isDisabled = count === 0;

            return (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={`color-${color}`}
                  checked={selectedColors.includes(color)}
                  onCheckedChange={() => toggleColor(color)}
                  disabled={isDisabled}
                />
                <Label
                  htmlFor={`color-${color}`}
                  className={`flex-1 capitalize cursor-pointer ${isDisabled ? "text-gray-400" : ""}`}
                >
                  {color} ({count})
                </Label>
              </div>
            );
          })}
        </div>
      </div>

      <Separator />

      {/* Size Filter */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span className="text-lg">📏</span> Size
        </h3>
        <RadioGroup value={selectedSize || ""} onValueChange={handleSizeChange}>
          <div className="grid grid-cols-2 gap-2">
            {availableSizes.map((size) => {
              const count = filterCounts.sizes[size] || 0;
              const isDisabled = count === 0;

              return (
                <div
                  key={size}
                  className={`flex items-center space-x-2 p-2 rounded border ${
                    selectedSize === size
                      ? "bg-primary text-primary-foreground border-primary"
                      : isDisabled
                      ? "bg-gray-50 text-gray-400 border-gray-200"
                      : "border-gray-200 hover:bg-gray-50 cursor-pointer"
                  }`}
                  onClick={() => !isDisabled && handleSizeChange(size)}
                >
                  <RadioGroupItem value={size} id={`size-${size}`} disabled={isDisabled} />
                  <Label htmlFor={`size-${size}`} className="flex-1 cursor-pointer">
                    {size} ({count})
                  </Label>
                </div>
              );
            })}
          </div>
        </RadioGroup>
      </div>

      <Separator />

      {/* Price Range Filter */}
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    applyPriceFilter();
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    applyPriceFilter();
                  }
                }}
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
            Products range: ${filterCounts.priceRange.min.toFixed(0)} - ${filterCounts.priceRange.max.toFixed(0)}
          </p>
        </div>
      </div>

      <Separator />

      {/* Sort Filter */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span className="text-lg">🔄</span> Sort By
        </h3>
        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popularity">Most Popular</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
            <SelectItem value="name_asc">Name: A-Z</SelectItem>
            <SelectItem value="name_desc">Name: Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters Button */}
      <Separator />
      <Button 
        variant="outline" 
        onClick={clearAllFilters} 
        className="w-full"
        disabled={activeFilterCount === 0}
      >
        <X className="w-4 h-4 mr-2" />
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="w-4 h-4 mr-2" />
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filter Sidebar */}
      <aside className="hidden lg:block">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              Filters
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-auto">
                  {activeFilterCount}
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FilterContent />
          </CardContent>
        </Card>
      </aside>
    </>
  );
}

