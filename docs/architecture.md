# Architecture

This document explains the system architecture of the SEO Best Practices Showcase application.

## System Overview

The application is built using a **layered architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────┐
│           Presentation Layer                │
│  (Next.js Pages + React Components)         │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│          Business Logic Layer               │
│    (SEO Rules Engine + Data Processing)     │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│             Data Layer                      │
│   (Static JSON + LocalStorage Config)       │
└─────────────────────────────────────────────┘
```

## Architecture Layers

### 1. Presentation Layer (`app/` and `components/`)

**Responsibility**: Render UI and handle user interactions

**Key Components**:
- **Pages** (`app/`): Next.js 13 App Router pages
  - Server-side rendering for catalog pages
  - Client-side interactivity for SEO receipt
  - Clean path routes for SEO-friendly URLs
- **UI Components** (`components/`): Reusable React components
  - `SeoReceipt.tsx`: Real-time SEO feedback panel with crawl trap risk
  - `DemoChips.tsx`: Interactive parameter demo buttons
  - `catalog/FilterSidebar.tsx`: Production-ready e-commerce filter interface
  - `catalog/FilterSummaryBar.tsx`: Sticky bar showing all active filters
  - `playground/PatternCard.tsx`: Individual pattern display with SEO impact (used in Pattern Gallery)
  - `playground/PatternFilter.tsx`: Pattern filtering and search (used in Pattern Gallery)
  - `playground/PatternCategory.tsx`: Collapsible category sections (used in Pattern Gallery)
  - `playground/RobotsPreview.tsx`: Live-generated robots.txt with section annotations (Best Practices)
  - `playground/RobotsTester.tsx`: Interactive URL testing for robots.txt patterns (Best Practices)
  - `ui/`: shadcn/ui component library

**Technologies**:
- Next.js 13 (App Router)
- React 18
- TypeScript
- Tailwind CSS

### 2. Business Logic Layer (`lib/`)

**Responsibility**: Core SEO decision-making logic

**Key Modules**:

#### SEO Rules Engine (`lib/rules/`)

The heart of the application, responsible for all SEO decisions:

- **`canonical.ts`**: Main decision engine
  - Computes canonical URLs
  - Detects multi-select parameters (exponential combinations)
  - Handles multi-filter logic (2+ stable parameters)
  - Determines robots directives
  - Decides sitemap inclusion
  - Returns complete decision trace with risk assessment

- **`params.ts`**: Parameter classification
  - Classifies parameters as stable/unstable/blocked/search
  - Evaluates parameter combinations
  - Provides parameter rules and mappings

- **`robots.ts`**: Robots.txt generation
  - Generates robots.txt content with best-practice patterns
  - Checks if URLs match blocking patterns
  - Detects multi-select patterns (comma-separated values)
  - Provides warnings for risky patterns

- **`sitemap.ts`**: Sitemap generation
  - Generates sitemap entries
  - Filters based on indexability
  - Outputs XML format

#### Configuration Provider (`lib/config/`)

- **`provider.tsx`**: React Context for configuration
  - Loads default config from `data/rules.json`
  - Merges with browser localStorage
  - Provides config to all components

#### Catalog Management (`lib/catalog/`)

- **`data.ts`**: Product data and filtering logic
  - Product filtering by color, size, gender, price range
  - Multi-select color support with comma-separated values
  - Filter count calculation for sidebar display
  - Product sorting and pagination
  - Gender-related helper functions:
    - `getAvailableGenders(categorySlug)` - Get all genders in category
    - `getGenderCounts(categorySlug)` - Count products per gender
  - Size configuration functions:
    - `getAvailableSizes(categorySlug)` - Get sizes with category-specific ordering
    - `getSizeGroups(categorySlug)` - Get size grouping config (e.g., Kids/Adult)
    - `getSizeGroupsForGender(categorySlug, gender)` - Filter groups by gender context

#### Utilities (`lib/utils/`)

- **`url-diff.ts`**: URL comparison and diff highlighting
- **`utils.ts`**: General utility functions

### 3. Data Layer (`data/`)

**Responsibility**: Store static configuration and demo data

**Files**:
- **`rules.json`**: Default SEO configuration
  - Parameter classification rules
  - Pagination policies
  - Robots.txt patterns

- **`catalog.json`**: Demo product data
  - Product listings with gender field
  - Category information
  - Facet values (colors, sizes, genders)
  - 160 products across 2 categories

- **`size-config.json`**: Category-specific size configuration
  - Size ordering per category
  - Optional size grouping (e.g., Kids vs Adult)
  - Used by filter components for display

- **`seo-patterns.json`**: SEO pattern gallery data
  - 17 production-ready SEO patterns
  - Organized by 6 categories (filtering, sorting, ranges, URL strategies, navigation, access control)
  - Each pattern includes: risk level, examples, usage guidance, SEO impact indicators

## Data Flow

### SEO Decision Flow

```
User visits URL
      ↓
Next.js Server Side Rendering
      ↓
computeCanonical() called
      ↓
┌──────────────────────────────┐
│  Step 1: Normalize path      │
│  Step 2: Classify params     │
│  Step 3: Detect pagination   │
│  Step 4: Check protected     │
│  Step 5: Apply param policy  │
│  Step 6: Check robots.txt    │
│  Step 7: Build canonical     │
│  Step 8: Decide sitemap      │
└──────────────────────────────┘
      ↓
CanonicalResult {
  canonical: string
  robots: RobotsDirective
  blockInRobots: boolean
  sitemapIncluded: boolean
  trace: string[]
  warnings: string[]
}
      ↓
SeoReceipt displays results
```

### Configuration Flow

```
data/rules.json (static defaults)
        ↓
ConfigProvider loads on mount
        ↓
localStorage (browser-side only)
        ↓
React Context API
        ↓
Components access via useConfig()
```

## Key Design Patterns

### 1. Single Responsibility Principle

Each module has one clear responsibility:
- `canonical.ts` decides SEO outcomes
- `params.ts` classifies parameters
- `robots.ts` handles robots.txt
- `sitemap.ts` generates sitemaps

### 2. Separation of Concerns

Business logic is **completely separated** from presentation:
- SEO logic in `lib/` has zero React dependencies
- Can be tested in isolation
- Can be reused in other frameworks

### 3. Immutable Data Flow

Configuration is treated as immutable:
- Config is loaded once at startup
- Updates create new config objects
- No direct mutations

### 4. Declarative Configuration

SEO rules are defined declaratively in JSON:
```json
{
  "name": "sort",
  "policy": "unstable",
  "description": "..."
}
```

## Component Interactions

### SeoReceipt Component

```
SeoReceipt (Client Component)
    ↓
usePathname() + useSearchParams()
    ↓
useConfig() → gets configuration
    ↓
computeCanonical(pathname, params, config)
    ↓
Displays: Canonical, Robots, Sitemap, Trace
```

### DemoChips Component

```
DemoChips (Client Component)
    ↓
useConfig() → gets configuration
    ↓
For each demo:
  checkRobotsBlocking(path, params, config)
    ↓
Render chips with "(Blocked)" suffix if matched
```

### Best Practices Page

```
BestPracticesPage (Client Component)
    ↓
useConfig() → gets configuration
    ↓
Display tabs:
  - ParamPolicyEditor (static display)
  - PaginationSettings (static display)
  - RobotsPreview (live-generated robots.txt with annotations)
  - RobotsTester (interactive URL pattern testing)
  - SitemapTable (static display)
```

### GenderFilter Component

```
GenderFilter (Client Component)
    ↓
Receives props:
  - category (slug)
  - currentGender (if on clean path)
  - genderCounts (products per gender)
  - totalCount
    ↓
Renders navigation buttons:
  - All → /shop/[category]
  - Women → /shop/[category]/for/women
  - Men → /shop/[category]/for/men
  - Girls → /shop/[category]/for/girls
  - Boys → /shop/[category]/for/boys
    ↓
If currentGender set:
  Show SEO education banner
  (clean path vs query param comparison)
```

### Category Page with Filters

```
CategoryPage (Server Component)
    ↓
Parse URL: category slug + search params
    ↓
Fetch data:
  - getCategory(slug)
  - getProductsByCategory(slug)
  - getAvailableColors(slug)
  - getAvailableSizes(slug)
  - getSizeGroups(slug)
  - getGenderCounts(slug)
    ↓
Filter products:
  - filterProducts(products, filters)
  - sortProducts(products, sort)
  - paginateProducts(products, page)
    ↓
Render:
  - GenderFilter (navigation)
  - FilterSummaryBar (sticky, shows active filters)
  - FilterSidebar (color, size, price, sort)
  - Product grid
```

### Gender Clean Path Page

```
GenderFilterPage (Server Component)
    ↓
Parse URL: category slug + gender + search params
    ↓
Validate gender exists in category
    ↓
Fetch data with gender context:
  - getSizeGroupsForGender(category, gender)
    (returns gender-appropriate size groups)
    ↓
Filter products including gender:
  - filters = { gender, colors, size, priceMin, priceMax }
  - filterProducts(products, filters)
    ↓
Render:
  - GenderFilter (shows SEO banner)
  - FilterSummaryBar
  - FilterSidebar (with filtered size groups)
  - Product grid
```

## API Routes

### `/api/robots`

**Type**: Dynamic Route (Server-side)

**Purpose**: Generate robots.txt

**Flow**:
```
GET /api/robots
    ↓
Load DEFAULT_PARAM_CONFIG
    ↓
generateRobotsTxt(config)
    ↓
Return text/plain response
```

### `/api/sitemap`

**Type**: Dynamic Route (Server-side)

**Purpose**: Generate XML sitemap

**Flow**:
```
GET /api/sitemap
    ↓
Load DEFAULT_PARAM_CONFIG
    ↓
generateSitemapEntries(config)
    ↓
generateSitemapXml(entries)
    ↓
Return application/xml response
```

## State Management

### Global State (Configuration)

Managed via **React Context**:
- Single source of truth
- Available to all components
- Persisted to localStorage (demo only)

### Component State

Managed via **useState**:
- UI interactions (tabs, tooltips, etc.)
- Temporary state (clipboard copy status)
- No shared state between components

### URL State

Managed via **Next.js Router**:
- URL parameters drive SEO decisions
- No client-side routing needed
- Server-side rendering for SEO

## Build and Runtime

### Build Time

```
npm run build
    ↓
Next.js compiles TypeScript
    ↓
Generates static pages for:
  - / (homepage)
  - /catalog
  - /catalog/[category] (SSG)
  - /catalog/[category]/[product] (SSG)
    ↓
Generates API routes
```

### Runtime

```
User Request
    ↓
Next.js Server
    ↓
- Static pages served from build
- API routes execute server-side
- Client components hydrate
    ↓
React hydration completes
    ↓
Client-side interactions enabled
```

## Performance Considerations

### Static Generation

Most pages are **statically generated** at build time:
- Catalog pages (all categories and products)
- Documentation pages
- Homepage

### Client-Side Rendering

Only interactive components run client-side:
- SeoReceipt (needs URL access)
- DemoChips (needs interactivity)
- Configuration display (minimal logic)

### Code Splitting

Next.js automatically code-splits:
- Each page is a separate bundle
- Shared code in common chunks
- UI components loaded on demand

## Extensibility Points

### Adding New Parameter Types

1. Add rule to `data/rules.json`
2. Optionally add logic in `lib/rules/params.ts`
3. No UI changes needed (automatically picked up)

### Adding New Robots.txt Patterns

The app uses a static best-practice model. To add new robots.txt patterns:

1. Add parameter to `data/rules.json` with `policy: "blocked"` for parameters that should be blocked
2. Or add custom logic in `lib/rules/robots.ts` → `checkRobotsBlocking()` for path-based patterns
3. Pattern will appear in robots.txt and SEO Receipt automatically

### Adding New Pages

1. Create page in `app/[route]/page.tsx`
2. SEO logic automatically applies
3. Add to sitemap in `lib/rules/sitemap.ts` if needed

## Error Handling

### TypeScript Type Safety

All functions have explicit types:
- Input validation at compile time
- No runtime type errors
- Clear interfaces for data structures

### Graceful Degradation

If configuration fails to load:
- Falls back to `DEFAULT_PARAM_CONFIG`
- App continues to function
- Warning logged to console

### URL Parsing

Malformed URLs are handled safely:
- URLSearchParams handles all edge cases
- Empty params treated as absent
- No crashes on invalid input

## Testing Strategy

### Type Checking

```bash
npm run typecheck
```

TypeScript ensures:
- All interfaces match
- No type errors
- Correct function signatures

### Build Test

```bash
npm run build
```

Build verifies:
- All imports resolve
- No syntax errors
- All pages generate successfully

### Manual Testing

Use the demo chips to verify:
- Each parameter combination
- Robots.txt patterns
- Sitemap inclusion logic

## Size Configuration System

### Purpose

The size configuration system allows each category to define custom size ordering and optional grouping for better UX.

### Configuration File Structure

**File**: `data/size-config.json`

```json
{
  "t-shirts": {
    "sizeOrder": ["XS", "S", "M", "L", "XL"],
    "groups": null
  },
  "shoes": {
    "sizeOrder": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
    "groups": [
      {
        "label": "Kids",
        "sizes": ["1", "2", "3", "4", "5", "6"]
      },
      {
        "label": "Adult",
        "sizes": ["7", "8", "9", "10", "11", "12", "13"]
      }
    ]
  }
}
```

### Key Concepts

**Size Ordering**:
- Defines the display order for size filters
- Overrides default alphabetical sorting
- Example: `["XS", "S", "M", "L", "XL"]` ensures correct size progression

**Size Grouping** (optional):
- Groups related sizes together visually
- Adds separators and labels in UI
- Example: Kids (1-6) vs Adult (7-13) for shoes
- Can be `null` if no grouping needed

### Gender-Aware Size Groups

For categories with size groups, the system can filter groups by gender:

```typescript
getSizeGroupsForGender('shoes', 'girls')  // Returns only Kids group
getSizeGroupsForGender('shoes', 'women')  // Returns only Adult group
getSizeGroupsForGender('shoes', undefined) // Returns all groups
```

**Logic**:
- Children genders (girls, boys) → Kids sizes only
- Adult genders (women, men) → Adult sizes only
- No gender filter → All size groups shown

**Benefits**:
- Contextually relevant size options
- Reduces clutter in filter UI
- Better UX for gender-specific product pages

## Filter System Architecture

### Component Hierarchy

```
FilterSidebar (client component)
├── Color Checkboxes (multi-select)
│   ├── Checkbox per color
│   └── Product count per color
├── Size Radio Buttons (single-select)
│   ├── RadioGroupItem per size
│   ├── Product count per size
│   ├── Optional: Size group labels
│   └── Optional: Size group separators
├── Price Range Filter (manual apply)
│   ├── PriceRangeFilter component
│   ├── Min/Max text inputs
│   └── "Apply" button
├── Sort Dropdown (single-select)
│   └── Select component with options
└── Clear All Button
    └── Resets to base category URL
```

### State Management Flow

1. **User interacts** with filter UI (checkbox, slider, dropdown)
2. **Local state updates** immediately (optimistic UI, instant feedback)
3. **Debounce timer** starts (for price slider only, 500ms delay)
4. **URL updates** via `router.push()` with new search params
5. **Next.js re-renders** page with new searchParams prop
6. **Server component** fetches filtered products from data layer
7. **Product grid updates** with new results
8. **Filter counts recalculate** based on new product set

### URL Synchronization

All filter state lives in the URL as search parameters:

- `?color=black,blue` - Multi-select colors (comma-separated)
- `?size=M` - Single size selection
- `?price_min=20&price_max=50` - Numeric range filters
- `?sort=price_asc` - Sort option
- `?page=2` - Pagination state

**Benefits**:
- ✅ Shareable URLs - Users can share filtered views
- ✅ Browser back/forward works - Navigation history preserved
- ✅ SEO-analyzable - Crawlers see real URLs
- ✅ No client state to sync - URL is single source of truth
- ✅ Deep linking - Direct access to any filtered state

### Filter Count Calculation

`getFilterCounts()` function computes available options dynamically:

```typescript
// Exclude current color filter to show all color options
const filtersWithoutColors = { ...currentFilters, colors: undefined };
const productsForColorCount = filterProducts(allProducts, filtersWithoutColors);

// Count products per color
productsForColorCount.forEach(product => {
  colorCounts[product.color] = (colorCounts[product.color] || 0) + 1;
});
```

This ensures filter options show accurate product counts based on other active filters.

### Price Filter Strategy

Price filter uses manual application instead of auto-debouncing:

```typescript
const handlePriceApply = (minPrice?: number, maxPrice?: number) => {
  updateUrl({
    colors: selectedColors,
    size: selectedSize,
    priceMin: minPrice,
    priceMax: maxPrice,
    sort: sortBy,
  });
};
```

**Why Manual Apply**:
- User controls when filter updates
- No excessive URL updates while typing
- Fewer browser history entries (better for SEO)
- More predictable UX (explicit action required)
- Can review values before applying

## Clean Path Routing Strategy

### File Structure

```
app/shop/[category]/
├── page.tsx                     # Category page with filters
├── [product]/page.tsx           # Legacy route (redirects to gender path)
├── for/[gender]/
│   ├── page.tsx                 # Gender clean path
│   └── [product]/page.tsx       # Product pages with gender context
├── color/[color]/page.tsx       # Color clean path
└── size/[size]/page.tsx         # Size clean path
```

**Important**: Prefixes (`/for/`, `/color/`, `/size/`) are required to avoid routing conflicts. Product pages are nested under gender paths (`/shop/t-shirts/for/men/product-slug`) to provide clear hierarchical structure and gender context for SEO.

### Static Generation

Clean path pages use `generateStaticParams` for pre-rendering:

#### Gender Pages
```typescript
export async function generateStaticParams() {
  const categories = getCategories();
  const genders = ['women', 'men', 'girls', 'boys'];
  
  return categories.flatMap(cat => 
    genders.map(gender => ({
      category: cat.slug,
      gender: gender
    }))
  );
}
```

**Result**: 8 gender pages (2 categories × 4 genders)

#### Color Pages
```typescript
export async function generateStaticParams({ params }) {
  const colors = getAvailableColors(params.category);
  
  return colors.map(color => ({
    color: color.toLowerCase(),
  }));
}
```

**Result**: 16+ color pages (2 categories × 8+ colors)

#### Size Pages
```typescript
export async function generateStaticParams({ params }) {
  const sizes = getAvailableSizes(params.category);
  
  return sizes.map(size => ({
    size: size,
  }));
}
```

**Result**: 20+ size pages (2 categories × 10+ sizes)

#### Product Pages

Product pages are nested under gender paths for hierarchical structure:

```typescript
export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    category: product.category,
    gender: product.gender,
    product: product.slug,
  }));
}
```

**Result**: 160 product pages (one per product) at `/shop/{category}/for/{gender}/{product-slug}`

**URL Examples**:
- `/shop/t-shirts/for/men/men-gray-crew-neck-5`
- `/shop/shoes/for/women/women-black-running-sneakers-0`

**SEO Benefits**:
- Gender context in URL path provides topical relevance
- Clear hierarchical structure (Shop > Category > Gender > Product)
- Breadcrumb navigation matches URL structure
- Consistent with gender filter pages (`/for/women/`)

**Legacy Redirect**: The old flat route at `/shop/[category]/[product]/` automatically redirects to the new structure for backwards compatibility.

**Total Static Pages**: 200+ pages (44+ filter pages + 160 product pages) generated at build time

### Path Parameter Validation

Clean paths validate parameters against available options:

#### Gender Validation
```typescript
const availableGenders = getAvailableGenders(params.category);
if (!availableGenders.includes(params.gender.toLowerCase())) {
  notFound();  // 404 if gender doesn't exist in category
}
```

#### Color Validation
```typescript
const availableColors = getAvailableColors(params.category);
if (!availableColors.includes(params.color)) {
  notFound();  // 404 if color doesn't exist
}
```

#### Size Validation
```typescript
const availableSizes = getAvailableSizes(params.category);
if (!availableSizes.includes(params.size)) {
  notFound();  // 404 if size doesn't exist
}
```

#### Product Gender Validation
```typescript
const product = getProduct(params.product);
if (product.gender.toLowerCase() !== params.gender.toLowerCase()) {
  notFound();  // 404 if gender in URL doesn't match product's gender
}
```

This ensures URLs always have the correct gender for the product, preventing duplicate content issues.

### Query Params vs Clean Paths

| Aspect | Query Params | Clean Paths |
|--------|-------------|-------------|
| URL | `/shop/t-shirts?gender=women` | `/shop/t-shirts/for/women/` |
| SEO | Good (if single stable filter) | Better (more semantic) |
| UX | Less readable | More readable |
| Flexibility | High (any combination) | Low (pre-defined only) |
| Generation | Dynamic | Static (build time) |
| Indexing | Requires careful canonicals | index,follow by default |
| **Use Case** | Multi-filter, sorting, ranges | Single high-value stable filters |

**Examples of Good Clean Path Candidates**:
- Gender (women, men, girls, boys) - stable, meaningful segments
- Primary color filters - high search volume
- Core size categories - clear user intent

**Keep as Query Params**:
- Multi-select filters (e.g., `?color=black,blue`)
- Sorting and pagination
- Price ranges (infinite combinations)
- Temporary UI state

## Multi-Select Detection Logic

### Detection Method

Comma-separated values in URL parameters indicate multi-select:

```typescript
const multiSelectDetected = Array.from(searchParams.entries())
  .some(([key, value]) => value.includes(','));

// Examples:
// ?color=black,blue → multiSelectDetected = true
// ?color=black      → multiSelectDetected = false
```

### Exponential Combination Math

Multi-select creates 2^N URL combinations:

```
2 colors: black, blue
Combinations: [], [black], [blue], [black,blue]
Total: 2^2 = 4 URLs

3 colors: black, blue, red
Combinations: [], [black], [blue], [red], [black,blue], [black,red], [blue,red], [black,blue,red]
Total: 2^3 = 8 URLs

5 colors selected: 2^5 = 32 URLs
10 colors selected: 2^10 = 1,024 URLs
```

### SEO Treatment

When multi-select is detected:

```typescript
robots = undefined;  // No meta robots tag (crawlers blocked anyway)
blockInRobots = true;  // Block via robots.txt
sitemapIncluded = false;  // Exclude from sitemap

// robots.txt pattern
Disallow: /*?*color=*,*  // Blocks any URL with comma in color param
```

**Rationale**: Exponential combinations waste massive crawl budget. robots.txt blocking is the only scalable solution.

### Integration with canonical.ts

Multi-select detection happens early in the decision flow (Step 6):

```typescript
// Step 6: Check robots.txt blocking (includes multi-select detection)
const multiSelectDetected = Array.from(searchParams.entries())
  .some(([key, value]) => value.includes(','));

if (multiSelectDetected) {
  robots = undefined;
  blockInRobots = true;
  sitemapIncluded = false;
  trace.push(`✓ Multi-select detected → blocked by robots.txt`);
  trace.push(`  Pattern: Disallow: /*?*${param}=*,*`);
}
```

## Crawl Trap Risk Assessment

### Risk Level Determination

The `getCrawlTrapRisk()` function in `SeoReceipt.tsx` analyzes URL patterns:

**🔴 High Risk**:
- Multi-select parameters: `2^N` combinations
- Blocked parameters with examples: `N×M×...` potential combinations
- Infinite ranges: Calendar dates, arbitrary numbers

**🟡 Medium Risk**:
- 2+ stable parameters: `N×M` combinations (e.g., 5 colors × 4 sizes = 20 URLs)
- 3+ parameters (any type): Exponential growth risk
- Single unstable parameter: Creates duplicate content

**🟢 Low Risk**:
- Single stable parameter: Linear growth, manageable
- No parameters: Base page, safe

### Risk Calculation Examples

```typescript
// High risk: Multi-select with math
{
  level: "high",
  message: "⚠️ High crawl trap risk — multi-select creates exponential combinations",
  explanation: `Multi-select creates 2^N combinations. With 3 options: 2^3 = 8 URLs.`,
  robotsTxtSuggestion: `Disallow: /*?*color=*,*`
}

// Medium risk: Multiple stable filters
{
  level: "medium",
  message: "⚠️ Medium crawl trap risk — multiple filters create N×M combinations",
  explanation: `5 colors × 4 sizes = 20 URL variations. Risk of index bloat.`
}
```

### Integration with SEO Receipt

Risk assessment displays prominently in the receipt:

```
Crawl Trap Risk
────────────────
🔴 High Risk
⚠️ Multi-select creates exponential combinations
Explanation: 2^3 = 8 possible URLs
robots.txt: Disallow: /*?*color=*,*
```

## Deployment

The app can be deployed to any Next.js-compatible platform:

- **Vercel** (recommended): Zero-config deployment
- **Netlify**: Next.js support via plugin
- **Self-hosted**: Node.js server required
- **Static export**: Limited (no API routes)

No database or external services required - fully self-contained.
