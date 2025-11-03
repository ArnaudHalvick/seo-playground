# Extending the Project

This guide explains how to add new features, modify existing behavior, and contribute to the project.

## Table of Contents

1. [Adding New Parameter Rules](#adding-new-parameter-rules)
2. [Adding New Robots.txt Patterns](#adding-new-robotstxt-patterns)
3. [Adding New Filter Types](#adding-new-filter-types)
4. [Adding Size Groups to Categories](#adding-size-groups-to-categories)
5. [Adding Gender Filter Options](#adding-gender-filter-options)
6. [Creating Clean Path Routes](#creating-clean-path-routes)
7. [Customizing Crawl Trap Detection](#customizing-crawl-trap-detection)
8. [Modifying SEO Logic](#modifying-seo-logic)
9. [Adding New Pages](#adding-new-pages)
10. [Adding New Components](#adding-new-components)
11. [Customizing UI](#customizing-ui)
12. [Adding Tests](#adding-tests)
13. [Contributing Guidelines](#contributing-guidelines)

## Adding New Parameter Rules

### Step 1: Define the Rule

Edit `data/rules.json` and add your rule:

```json
{
  "rules": [
    {
      "name": "brand",
      "policy": "stable",
      "description": "Brand filter creates unique product subsets that should be indexed."
    }
  ]
}
```

**Policy Options**:
- `stable` - Indexable, kept in canonical
- `unstable` - Noindex, dropped from canonical
- `blocked` - Robots blocked, dropped from canonical
- `search` - Noindex, kept in canonical
- `pagination` - Special pagination handling

### Step 2: Restart Dev Server

```bash
# Stop with Ctrl+C, then:
npm run dev
```

Configuration is loaded at startup from `data/rules.json`.

### Step 3: Test the Rule

1. Add parameter to URL: `/catalog/t-shirts?brand=nike`
2. Check SEO Receipt
3. Verify correct behavior:
   - Stable: index,follow, in sitemap
   - Unstable: noindex,follow, not in sitemap
   - Blocked: blocked by robots, not in sitemap

### Step 4: Add to Demo Chips (Optional)

Edit `components/DemoChips.tsx`:

```typescript
const groups: ChipGroup[] = [
  {
    title: 'Common Parameter Types',
    chips: [
      {
        label: '+ Brand (stable)',
        params: 'brand=nike',
        description: 'Brand filter → index,follow'
      },
      // ... other chips
    ]
  }
];
```

### Advanced: Custom Parameter Logic

If your parameter needs special handling, edit `lib/rules/params.ts`:

```typescript
export interface ParamRule {
  name: string;
  policy: ParamPolicy;
  description: string;
  mapToPath?: (ctx: { pathname: string; params: URLSearchParams }) => string | null;
}

// Example: Map brand to clean path
{
  name: 'brand',
  policy: 'stable',
  description: '...',
  mapToPath: ({ pathname, params }) => {
    const brand = params.get('brand');
    if (brand && pathname === '/catalog/') {
      return `/catalog/brand/${brand}/`;
    }
    return null;
  }
}
```

## Adding New Robots.txt Patterns

The app follows a **static best-practice model** where parameter policies determine robots.txt behavior automatically.

### Option 1: Parameter-Based Blocking

For URL parameters, add them to `data/rules.json` with `policy: "blocked"`:

```json
{
  "rules": [
    {
      "name": "author",
      "policy": "blocked",
      "description": "Blog author filter. Creates duplicate content, block via robots.txt."
    },
    {
      "name": "tag",
      "policy": "blocked",
      "description": "Tag filter parameter. Block to prevent crawl waste."
    }
  ]
}
```

The system will automatically:
- Generate `Disallow: /*?*author=*` rules in robots.txt
- Block these URLs from crawling
- Show appropriate messages in the SEO Receipt

### Option 2: Path-Based Blocking

For path-specific patterns, add logic to `lib/rules/robots.ts` → `checkRobotsBlocking()`:

```typescript
export function checkRobotsBlocking(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig
): RobotsMatchResult {
  // ... existing code ...

  // Add custom path-based blocking
  if (pathname.startsWith('/blog/archive/') && searchParams.has('date')) {
    matchedRules.push('Blog Archive: Disallow /blog/archive/*?*date=*');
    isBlocked = true;
  }

  return { isBlocked, matchedRules, warnings };
}
```

### Step 3: Add Warning if Risky

If your pattern might prevent discovery, add a warning:

```typescript
if (toggles.blogFilters?.enabled) {
  if (searchParams.has('author')) {
    matchedRules.push('...');
    isBlocked = true;
    warnings.push('Consider using noindex,follow instead of robots blocking for author pages.');
  }
}
```

### Step 4: Test

1. Restart dev server
2. Visit URL with pattern: `/blog/post?author=john`
3. Check if robots.txt blocks it
4. Verify warning shows in Receipt

## Adding New Filter Types

The filter system is designed to be extensible. Here's how to add a new filter type (e.g., "brand"):

### Step 1: Update Product Data Model

**File:** `lib/catalog/data.ts`

```typescript
export interface Product {
  // ... existing fields
  brand?: string;  // Add new field
}

export interface FilterOptions {
  // ... existing fields
  brand?: string;  // Add to filter options
}
```

Update sample products in `data/catalog.json`:
```json
{
  "id": "1",
  "name": "Classic White T-Shirt",
  "brand": "Nike",
  ...
}
```

### Step 2: Update Filter Function

**File:** `lib/catalog/data.ts`

```typescript
export function filterProducts(products: Product[], filters: FilterOptions): Product[] {
  let filtered = products;
  
  // ... existing filters (color, size, price)
  
  // Add brand filter
  if (filters.brand) {
    filtered = filtered.filter(p => p.brand === filters.brand);
  }
  
  return filtered;
}
```

### Step 3: Add to FilterCounts

```typescript
export interface FilterCounts {
  colors: Record<string, number>;
  sizes: Record<string, number>;
  priceRange: { min: number; max: number };
  brands: Record<string, number>;  // Add this
}

export function getFilterCounts(
  categorySlug: string,
  currentFilters: FilterOptions = {}
): FilterCounts {
  // ... existing code ...
  
  // Count brands
  const brandCounts: Record<string, number> = {};
  const filtersWithoutBrand = { ...currentFilters, brand: undefined };
  const productsForBrandCount = filterProducts(allProducts, filtersWithoutBrand);
  
  productsForBrandCount.forEach(product => {
    if (product.brand) {
      const brand = product.brand.toLowerCase();
      brandCounts[brand] = (brandCounts[brand] || 0) + 1;
    }
  });
  
  return {
    colors: colorCounts,
    sizes: sizeCounts,
    priceRange,
    brands: brandCounts,  // Add this
  };
}

// Add helper function
export function getAvailableBrands(categorySlug: string): string[] {
  const products = getProductsByCategory(categorySlug);
  const brands = new Set<string>();
  
  products.forEach(product => {
    if (product.brand) {
      brands.add(product.brand.toLowerCase());
    }
  });
  
  return Array.from(brands).sort();
}
```

### Step 4: Add to FilterSidebar UI

**File:** `components/catalog/FilterSidebar.tsx`

```typescript
interface FilterSidebarProps {
  // ... existing props
  availableBrands: string[];  // Add this
}

export function FilterSidebar({
  category,
  filterCounts,
  currentFilters,
  availableColors,
  availableSizes,
  availableBrands,  // Add this
}: FilterSidebarProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>(currentFilters.brand);
  
  const handleBrandChange = (brand: string) => {
    const newBrand = brand === selectedBrand ? undefined : brand;
    setSelectedBrand(newBrand);
    updateUrl({ 
      colors: selectedColors, 
      size: selectedSize, 
      brand: newBrand,  // Add this
      priceMin: priceRange[0], 
      priceMax: priceRange[1], 
      sort: sortBy 
    });
  };
  
  return (
    <div>
      {/* ... existing filters ... */}
      
      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span className="text-lg">🏷️</span> Brand
        </h3>
        <RadioGroup value={selectedBrand || ""} onValueChange={handleBrandChange}>
          <div className="grid grid-cols-1 gap-2">
            {availableBrands.map((brand) => {
              const count = filterCounts.brands[brand] || 0;
              const isDisabled = count === 0;
              
              return (
                <div
                  key={brand}
                  className={`flex items-center space-x-2 p-2 rounded border ${
                    selectedBrand === brand
                      ? "bg-primary text-primary-foreground"
                      : isDisabled
                      ? "bg-gray-50 text-gray-400"
                      : "hover:bg-gray-50 cursor-pointer"
                  }`}
                  onClick={() => !isDisabled && handleBrandChange(brand)}
                >
                  <RadioGroupItem value={brand} id={`brand-${brand}`} disabled={isDisabled} />
                  <Label htmlFor={`brand-${brand}`} className="flex-1 cursor-pointer capitalize">
                    {brand} ({count})
                  </Label>
                </div>
              );
            })}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
```

### Step 5: Update Category Page

**File:** `app/catalog/[category]/page.tsx`

```typescript
export default function CategoryPage({ params, searchParams }: PageProps) {
  // ... existing code ...
  
  const filters: FilterOptions = {
    colors: colorsArray,
    size: searchParams.size,
    brand: searchParams.brand,  // Add this
    priceMin: priceMin,
    priceMax: priceMax,
  };
  
  const availableBrands = getAvailableBrands(params.category);  // Add this
  
  return (
    <div>
      <FilterSidebar
        category={params.category}
        filterCounts={filterCounts}
        currentFilters={filters}
        availableColors={availableColors}
        availableSizes={availableSizes}
        availableBrands={availableBrands}  // Add this
      />
    </div>
  );
}
```

### Step 6: Update SEO Logic (Optional)

**File:** `data/rules.json`

Decide parameter policy:
```json
{
  "rules": [
    {
      "name": "brand",
      "policy": "stable",
      "description": "Brand filter creates unique product subsets that should be indexed."
    }
  ]
}
```

Or mark as unstable if you don't want brand combinations indexed:
```json
{
  "name": "brand",
  "policy": "unstable",
  "description": "Brand filter creates UI sorting, use noindex,follow."
}
```

### Step 7: Test

1. Restart dev server: `npm run dev`
2. Navigate to `/catalog/t-shirts`
3. Select a brand from the new filter
4. Verify URL updates: `?brand=nike`
5. Check SEO Receipt for correct indexability
6. Verify product counts update correctly

## Adding Size Groups to Categories

Size groups allow you to organize sizes visually in the filter UI. This is useful for categories with diverse size ranges (e.g., shoes with Kids and Adult sizes).

### Step 1: Define Size Configuration

**File:** `data/size-config.json`

Add or update your category configuration:

```json
{
  "your-category": {
    "sizeOrder": ["size1", "size2", "size3", ...],
    "groups": [
      {
        "label": "Group 1 Name",
        "sizes": ["size1", "size2"]
      },
      {
        "label": "Group 2 Name",
        "sizes": ["size3", "size4"]
      }
    ]
  }
}
```

**Example - Clothing with size groups:**
```json
{
  "pants": {
    "sizeOrder": ["26", "28", "30", "32", "34", "36", "38", "40"],
    "groups": [
      {
        "label": "Slim Fit",
        "sizes": ["26", "28", "30", "32"]
      },
      {
        "label": "Regular Fit",
        "sizes": ["34", "36", "38", "40"]
      }
    ]
  }
}
```

**Example - Simple ordering (no groups):**
```json
{
  "t-shirts": {
    "sizeOrder": ["XS", "S", "M", "L", "XL", "XXL"],
    "groups": null
  }
}
```

### Step 2: Understand the Schema

**Required Fields:**
- `sizeOrder`: Array of sizes in display order (overrides alphabetical sorting)
- `groups`: Array of size groups or `null` for no grouping

**Optional Group Fields:**
- `label`: Display name for the group (e.g., "Kids", "Adult")
- `sizes`: Array of sizes in this group (must be subset of `sizeOrder`)

### Step 3: Gender-Aware Groups (Optional)

For categories where size groups should filter by gender, add logic to `lib/catalog/data.ts`:

**Current implementation (shoes):**
```typescript
export function getSizeGroupsForGender(
  categorySlug: string,
  gender?: string
): SizeGroup[] | null {
  const allGroups = getSizeGroups(categorySlug);
  
  if (!allGroups || !gender) {
    return allGroups;
  }
  
  // Filter groups by gender
  if (categorySlug === 'shoes') {
    const isChild = gender === 'girls' || gender === 'boys';
    const isAdult = gender === 'women' || gender === 'men';
    
    if (isChild) {
      return allGroups.filter(group => group.label === 'Kids');
    } else if (isAdult) {
      return allGroups.filter(group => group.label === 'Adult');
    }
  }
  
  return allGroups;
}
```

**Add your category:**
```typescript
// Add after shoes logic
if (categorySlug === 'your-category') {
  const isChild = gender === 'girls' || gender === 'boys';
  
  if (isChild) {
    return allGroups.filter(group => group.label === 'Kids');
  } else {
    return allGroups.filter(group => group.label === 'Adults');
  }
}
```

### Step 4: Use in Components

Size groups are automatically used by `FilterSidebar` when provided:

```typescript
// In your category page
const sizeGroups = getSizeGroupsForGender(params.category, filters.gender);

<FilterSidebar
  category={params.category}
  filterCounts={filterCounts}
  currentFilters={filters}
  availableColors={availableColors}
  availableSizes={availableSizes}
  sizeGroups={sizeGroups}  // Pass size groups here
/>
```

### Step 5: Test

1. Restart dev server: `npm run dev`
2. Navigate to your category page
3. Verify sizes display in correct order
4. If groups exist, verify visual grouping with separators
5. Test gender filter integration (if applicable)

### Best Practices

**When to Use Size Groups:**
- Diverse size ranges (e.g., 1-13 for shoes)
- Logical groupings exist (Kids vs Adult, Small vs Large)
- Improves UX by reducing visual clutter

**When to Skip Groups:**
- Simple size progressions (XS-XXL)
- Small number of sizes (< 6)
- No logical grouping exists

**Size Ordering:**
- Always define `sizeOrder` even without groups
- Ensures logical size progression (not alphabetical)
- Example: ["S", "M", "L"] instead of ["L", "M", "S"]

## Adding Gender Filter Options

Gender filters create clean path URLs for stable product segmentation. Here's how to add or modify gender options.

### Step 1: Update Product Data

Ensure products in `data/catalog.json` have gender field:

```json
{
  "products": [
    {
      "id": "1",
      "title": "Classic T-Shirt",
      "gender": "women",
      ...
    }
  ]
}
```

**Standard gender values:**
- `women` - Adult women's products
- `men` - Adult men's products
- `girls` - Children's products (girls)
- `boys` - Children's products (boys)
- `unisex` - Gender-neutral products (optional)

### Step 2: Update Gender Filter Component (if adding new genders)

**File:** `components/catalog/GenderFilter.tsx`

```typescript
const genders = [
  { key: 'all', label: 'All', href: `/shop/${category}` },
  { key: 'women', label: 'Women', href: `/shop/${category}/for/women` },
  { key: 'men', label: 'Men', href: `/shop/${category}/for/men` },
  { key: 'girls', label: 'Girls', href: `/shop/${category}/for/girls` },
  { key: 'boys', label: 'Boys', href: `/shop/${category}/for/boys` },
  // Add new gender:
  { key: 'unisex', label: 'Unisex', href: `/shop/${category}/for/unisex` },
];
```

### Step 3: Update Static Generation

**File:** `app/shop/[category]/for/[gender]/page.tsx`

Add new gender to static params:

```typescript
export async function generateStaticParams() {
  const categories = getCategories();
  const genders = ['women', 'men', 'girls', 'boys', 'unisex'];  // Add here
  
  return categories.flatMap(cat => 
    genders.map(gender => ({
      category: cat.slug,
      gender: gender
    }))
  );
}
```

### Step 4: Update Gender-Aware Size Groups (if using)

**File:** `lib/catalog/data.ts`

Add logic for new gender in `getSizeGroupsForGender()`:

```typescript
if (categorySlug === 'shoes') {
  const isChild = gender === 'girls' || gender === 'boys';
  const isAdult = gender === 'women' || gender === 'men';
  const isUnisex = gender === 'unisex';
  
  if (isChild) {
    return allGroups.filter(group => group.label === 'Kids');
  } else if (isAdult) {
    return allGroups.filter(group => group.label === 'Adult');
  } else if (isUnisex) {
    return allGroups;  // Show all groups
  }
}
```

### Step 5: Test

1. Rebuild for static generation: `npm run build`
2. Navigate to `/shop/[category]/for/[new-gender]`
3. Verify page renders with correct products
4. Check SEO Receipt shows index,follow
5. Verify gender button shows active state
6. Test size groups filter appropriately (if applicable)

### Best Practices

**Gender Segmentation:**
- Use gender for meaningful product differentiation
- Creates valuable landing pages for SEO
- Examples: "Women's Running Shoes", "Boys' T-Shirts"

**URL Structure:**
- Clean paths: `/shop/shoes/for/women/`
- Semantic "for" prefix indicates targeting
- SEO-friendly and user-friendly

**When to Add Genders:**
- Product has genuine gender differentiation
- Significant product count per gender (10+ products)
- Users search by gender ("women's shoes")

**When NOT to Add Genders:**
- Truly unisex products (most accessories)
- Insufficient products per gender segment
- Gender not relevant to product type

### Advanced: Custom Gender Logic

For categories with unique gender requirements:

```typescript
// In lib/catalog/data.ts
export function getCategoryGenders(categorySlug: string): string[] {
  const genderConfig: Record<string, string[]> = {
    'shoes': ['women', 'men', 'girls', 'boys'],
    't-shirts': ['women', 'men', 'girls', 'boys'],
    'accessories': ['unisex'],  // Only unisex
    'watches': ['women', 'men'],  // No children's watches
  };
  
  return genderConfig[categorySlug] || ['women', 'men', 'girls', 'boys'];
}
```

Then use in `GenderFilter`:
```typescript
const categoryGenders = getCategoryGenders(category);
const genders = [
  { key: 'all', label: 'All', href: `/shop/${category}` },
  ...categoryGenders.map(gender => ({
    key: gender,
    label: gender.charAt(0).toUpperCase() + gender.slice(1),
    href: `/shop/${category}/for/${gender}`
  }))
];
```

## Creating Clean Path Routes

To add clean path routes for your new filter type:

### Option 1: Single-Level Clean Path

**File:** `app/catalog/[category]/by-brand/[brand]/page.tsx`

```typescript
import { notFound } from 'next/navigation';
import { getCategoryBySlug, filterProducts, getAvailableBrands } from '@/lib/catalog/data';

interface PageProps {
  params: {
    category: string;
    brand: string;
  };
}

export async function generateStaticParams({ params }: { params: { category: string } }) {
  const brands = getAvailableBrands(params.category);
  
  return brands.map(brand => ({
    brand: brand.toLowerCase(),
  }));
}

export default function BrandCleanPathPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.category);
  const availableBrands = getAvailableBrands(params.category);
  
  if (!category || !availableBrands.includes(params.brand)) {
    notFound();
  }
  
  const products = filterProducts(category.products, { brand: params.brand });
  
  return (
    <div>
      <h1>{params.brand} {category.name}</h1>
      {/* Product grid */}
    </div>
  );
}
```

**Route**: `/catalog/t-shirts/by-brand/nike/`

**Why `by-brand/` prefix?** Prevents routing conflicts with `[product]` routes, just like `by-color/`.

### Option 2: Two-Level Clean Path (Advanced)

**File:** `app/catalog/[category]/by-brand/[brand]/color/[color]/page.tsx`

```typescript
export async function generateStaticParams({ params }) {
  const brands = getAvailableBrands(params.category);
  const colors = getAvailableColors(params.category);
  
  const combinations: { brand: string; color: string }[] = [];
  
  for (const brand of brands) {
    for (const color of colors) {
      const products = filterProducts(
        getProductsByCategory(params.category),
        { brand, color }
      );
      
      // Only generate if products exist for this combination
      if (products.length > 0) {
        combinations.push({ brand, color });
      }
    }
  }
  
  return combinations;
}
```

**Route**: `/catalog/t-shirts/by-brand/nike/color/black/`

**SEO Note**: Two-level clean paths should still use `noindex,follow` for the same reasons as query param combinations (N×M bloat).

## Customizing Crawl Trap Detection

The crawl trap risk assessment logic is in `components/SeoReceipt.tsx` → `getCrawlTrapRisk()`.

### Adding Custom Risk Patterns

```typescript
function getCrawlTrapRisk(
  inputUrl: string,
  result: CanonicalResult,
  evaluated: EvaluatedParams
): CrawlTrapRisk | null {
  // ... existing multi-select detection ...
  
  // Add custom pattern: Date range detection
  const hasDateRange = 
    searchParams.has('start_date') && 
    searchParams.has('end_date');
  
  if (hasDateRange) {
    return {
      level: "high",
      icon: "🔴",
      message: "⚠️ High crawl trap risk — date ranges create infinite URL combinations",
      explanation: "Date parameters like ?start_date=2024-01-01&end_date=2024-12-31 can generate millions of URLs. Consider blocking via robots.txt or using a date picker that limits to specific presets.",
      robotsTxtSuggestion: `Disallow: /*?*start_date=*`
    };
  }
  
  // ... rest of function ...
}
```

### Adding Risk Levels

You can add new risk levels between medium and high:

```typescript
// Medium-High Risk: Single unstable + pagination
if (evaluated.unstableParams.size === 1 && evaluated.pagination.isPaginated) {
  return {
    level: "medium-high",  // Custom level
    icon: "🟠",
    message: "Medium-high crawl trap risk — unstable param with pagination",
    explanation: "Sorting with pagination creates N×P URLs. Example: 5 sorts × 10 pages = 50 URLs."
  };
}
```

Then update the color coding in the render section:

```tsx
const getRiskColor = (level: string) => {
  switch (level) {
    case "high": return "text-red-600 bg-red-50 border-red-200";
    case "medium-high": return "text-orange-600 bg-orange-50 border-orange-200";
    case "medium": return "text-yellow-600 bg-yellow-50 border-yellow-200";
    case "low": return "text-green-600 bg-green-50 border-green-200";
    default: return "text-gray-600 bg-gray-50 border-gray-200";
  }
};
```

## Modifying SEO Logic

The core SEO logic is in `lib/rules/canonical.ts` → `computeCanonical()`.

### Example: Add a New Decision Step

```typescript
export function computeCanonical(...): CanonicalResult {
  // ... existing steps 1-8 ...

  // Add Step 9: Custom Logic
  trace.push(`Step 9: Check custom condition`);
  if (pathname.startsWith('/special/')) {
    robots = 'noindex,follow';
    sitemapIncluded = false;
    trace.push(`  ✓ Special path detected → noindex,follow`);
  }
  trace.push('');

  // ... rest of function ...
}
```

### Modifying Existing Steps

Each step is clearly marked with comments:

```typescript
// Step 3: Detect pagination
if (evaluated.pagination.isPaginated && evaluated.pagination.pageNumber >= 2) {
  // Your modification here
}
```

### Testing Logic Changes

1. Make changes to `canonical.ts`
2. Save file (hot reload works)
3. Navigate to test URL
4. Check "Rule Trace" tab in Receipt
5. Verify new logic appears in trace

## Adding New Pages

### Static Page

Create a simple page:

```tsx
// app/my-page/page.tsx
export default function MyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">My Page</h1>
      <p>Content here...</p>
    </div>
  );
}
```

Access at: http://localhost:3000/my-page

### Dynamic Page

Create a page with dynamic segments:

```tsx
// app/blog/[slug]/page.tsx
interface Props {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: Props) {
  return (
    <div>
      <h1>Post: {params.slug}</h1>
    </div>
  );
}

// Generate static params at build time
export function generateStaticParams() {
  return [
    { slug: 'first-post' },
    { slug: 'second-post' },
  ];
}
```

### Adding to Sitemap

Edit `lib/rules/sitemap.ts` → `generateSitemapEntries()`:

```typescript
export function generateSitemapEntries(config: ParamConfig, baseUrl: string): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  // Add your new pages
  const myPages = [
    { path: '/my-page', priority: 0.8 },
    { path: '/blog/first-post', priority: 0.7 },
  ];

  for (const page of myPages) {
    const result = computeCanonical(page.path, new URLSearchParams(), config, baseUrl);
    entries.push({
      loc: result.canonical,
      priority: page.priority,
      included: result.sitemapIncluded,
      reason: result.sitemapIncluded ? 'Indexable page' : `Excluded: ${result.robots}`,
    });
  }

  // ... existing code ...

  return entries;
}
```

## Adding New Components

### Simple Component

```tsx
// components/MyFeature.tsx
interface MyFeatureProps {
  title: string;
  description: string;
}

export function MyFeature({ title, description }: MyFeatureProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}
```

### Client Component with Hooks

```tsx
// components/MyInteractive.tsx
'use client';

import { useState } from 'react';
import { useConfig } from '@/lib/config/provider';

export function MyInteractive() {
  const [count, setCount] = useState(0);
  const { config } = useConfig();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <p>Config has {config.rules.length} rules</p>
    </div>
  );
}
```

### Using shadcn/ui Components

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Feature</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
}
```

## Customizing UI

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        // Add custom colors
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... more shades
        },
      },
    },
  },
};
```

Use in components:
```tsx
<div className="bg-brand-100 text-brand-900">...</div>
```

### Changing Fonts

Edit `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

### Changing Layout

Edit `app/layout.tsx` to modify the overall layout structure.

### Responsive Breakpoints

Use Tailwind's responsive prefixes:

```tsx
<div className="
  p-4       // mobile
  md:p-6    // tablet
  lg:p-8    // desktop
">
  Content
</div>
```

## Adding Tests

### Unit Tests (Manual)

Create a test file:

```typescript
// lib/rules/__tests__/my-feature.test.ts
import { myFunction } from '../my-feature';

describe('myFunction', () => {
  test('returns expected result', () => {
    const result = myFunction('input');
    expect(result).toBe('expected');
  });
});
```

Run with a test runner like Jest (not included by default).

### Type Tests

TypeScript itself acts as a test:

```bash
npm run typecheck
```

### Integration Tests

Create acceptance test file:

```javascript
// test-my-feature.js
const { computeCanonical } = require('./lib/rules/canonical');
const { DEFAULT_PARAM_CONFIG } = require('./lib/rules/params');

const result = computeCanonical('/my-path', new URLSearchParams('my_param=value'), DEFAULT_PARAM_CONFIG);

console.log('Robots:', result.robots);
console.log('Canonical:', result.canonical);
console.log('Sitemap:', result.sitemapIncluded ? 'INCLUDED' : 'EXCLUDED');

// Verify expectations
if (result.robots !== 'index,follow') {
  console.error('FAIL: Expected index,follow');
  process.exit(1);
}

console.log('PASS');
```

Run with:
```bash
node test-my-feature.js
```

## Contributing Guidelines

### Code Style

Follow existing patterns:

1. **TypeScript**: Use explicit types
   ```typescript
   function myFunction(param: string): number {
     return param.length;
   }
   ```

2. **Component Structure**:
   ```typescript
   interface MyComponentProps {
     title: string;
   }

   export function MyComponent({ title }: MyComponentProps) {
     return <div>{title}</div>;
   }
   ```

3. **Naming**:
   - Components: PascalCase (`MyComponent`)
   - Functions: camelCase (`computeCanonical`)
   - Files: kebab-case (`my-component.tsx`) or PascalCase for components
   - Constants: UPPER_SNAKE_CASE (`DEFAULT_CONFIG`)

4. **Imports**:
   ```typescript
   // React/Next first
   import { useState } from 'react';
   import Link from 'next/link';

   // UI components
   import { Button } from '@/components/ui/button';

   // Local imports
   import { myFunction } from '@/lib/utils';
   ```

### Documentation

Add JSDoc comments for complex functions:

```typescript
/**
 * Computes the canonical URL and SEO directives for a given path.
 *
 * @param pathname - The URL pathname (e.g., "/catalog/t-shirts")
 * @param searchParams - URLSearchParams object with query parameters
 * @param config - The SEO configuration object
 * @param baseUrl - Base URL for absolute canonical (default: "https://example.com")
 * @returns CanonicalResult with canonical URL, robots directive, and trace
 */
export function computeCanonical(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig,
  baseUrl: string = 'https://example.com'
): CanonicalResult {
  // ...
}
```

### Git Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```

2. Make changes and commit:
   ```bash
   git add .
   git commit -m "Add: My feature description"
   ```

3. Push and create PR:
   ```bash
   git push origin feature/my-feature
   ```

### Commit Messages

Use conventional commits:

```
feat: Add brand parameter support
fix: Correct robots.txt blocking logic
docs: Update setup guide
refactor: Simplify canonical computation
style: Format code with prettier
test: Add tests for pagination logic
```

### Before Submitting

Checklist:
- [ ] Code compiles: `npm run build`
- [ ] Types are correct: `npm run typecheck`
- [ ] Code is formatted (use Prettier)
- [ ] Documentation updated if needed
- [ ] Tested manually in browser
- [ ] No console errors
- [ ] Responsive design works

## Advanced Extensions

### Adding a New SEO Feature

Example: Add structured data support

1. Create new module:
   ```typescript
   // lib/rules/structured-data.ts
   export interface StructuredData {
     type: string;
     data: Record<string, any>;
   }

   export function generateStructuredData(
     pathname: string,
     params: URLSearchParams
   ): StructuredData | null {
     if (pathname.startsWith('/catalog/')) {
       return {
         type: 'Product',
         data: {
           '@context': 'https://schema.org',
           '@type': 'Product',
           name: 'Product Name',
         },
       };
     }
     return null;
   }
   ```

2. Integrate with Receipt:
   ```tsx
   // In SeoReceipt.tsx
   const structuredData = generateStructuredData(pathname, params);

   // Display in Receipt
   {structuredData && (
     <div>
       <h3>Structured Data</h3>
       <pre>{JSON.stringify(structuredData, null, 2)}</pre>
     </div>
   )}
   ```

3. Add to page metadata:
   ```tsx
   // In page.tsx
   export async function generateMetadata() {
     const structuredData = generateStructuredData(pathname, params);

     return {
       other: {
         'structured-data': JSON.stringify(structuredData),
       },
     };
   }
   ```

### Adding a New Demo Section

Example: Add internationalization demo

1. Create new page:
   ```tsx
   // app/i18n-demo/page.tsx
   export default function I18nDemo() {
     return <div>Internationalization Demo</div>;
   }
   ```

2. Add to navigation:
   ```tsx
   // In Navigation component
   <Link href="/i18n-demo">
     <Button>I18n Demo</Button>
   </Link>
   ```

3. Add to homepage:
   ```tsx
   // In app/page.tsx
   <Card>
     <CardTitle>Internationalization</CardTitle>
     <Link href="/i18n-demo">
       <Button>View Demo</Button>
     </Link>
   </Card>
   ```

### Performance Optimization

Add memoization for expensive computations:

```typescript
import { useMemo } from 'react';

export function MyComponent() {
  const expensiveResult = useMemo(() => {
    return computeExpensiveThing();
  }, [dependency]);

  return <div>{expensiveResult}</div>;
}
```

### Error Handling

Add error boundaries:

```tsx
// components/ErrorBoundary.tsx
'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}
```

## Questions or Issues?

- Check [Architecture](./architecture.md) for system design
- Check [SEO Logic](./seo-logic.md) for decision algorithms
- Check [Components](./components.md) for UI details
- Check [Setup](./setup.md) for environment setup

The codebase is well-documented with TypeScript types and comments. When in doubt, look at existing code for patterns to follow.
