# SEO Logic

This document provides a deep dive into the SEO decision-making algorithms used in this application.

## Overview

All SEO decisions flow through the `computeCanonical()` function in `lib/rules/canonical.ts`. This function implements a deterministic, step-by-step decision process that mirrors real-world SEO best practices.

## The Decision Flow

Every URL goes through exactly 10 steps in order:

```
1. Normalize Path
2. Classify Parameters
3. Detect Pagination
4. Check Protected Routes
5. Check robots.txt Blocking
6. Detect Multi-Select Parameters
7. Apply Multi-Filter Logic
8. Apply Parameter Policies
9. Build Canonical URL
10. Determine Sitemap Inclusion
```

### Step 1: Normalize Path

**Purpose**: Ensure consistent URL formatting

**Logic**:
```typescript
function normalizePath(path: string): string {
  let normalized = path.toLowerCase();
  if (!normalized.endsWith('/') && !normalized.includes('?') && normalized !== '/') {
    normalized += '/';
  }
  return normalized;
}
```

**Examples**:
- `/Catalog` → `/catalog/`
- `/CATALOG/T-SHIRTS` → `/catalog/t-shirts/`
- `/catalog` → `/catalog/`

**Why**: Consistency prevents duplicate content from case variations and trailing slash differences.

### Step 2: Classify Parameters

**Purpose**: Categorize each URL parameter

**Classification Types**:

| Type | Behavior | Examples |
|------|----------|----------|
| **Stable** | Indexable, kept in canonical | `color`, `size` |
| **Unstable** | Noindex, dropped from canonical | `sort`, `view`, `per_page` |
| **Blocked** | robots.txt blocked, dropped from canonical | `utm_source`, `gclid` |
| **Search** | Noindex, kept in canonical | `q` |
| **Pagination** | Special handling | `page` |

**Logic**:
```typescript
const evaluated = evaluateParams(path, searchParams, config);
// Returns:
// - stableParams: Map<string, string>
// - unstableParams: Map<string, string>
// - blockedParams: Map<string, string>
// - searchParams: Map<string, string>
// - pagination: { isPaginated: boolean, pageNumber: number }
```

**Example**:
```
Input: /catalog/t-shirts?color=black&sort=price_desc&page=2

Classification:
- Stable: color=black
- Unstable: sort=price_desc
- Pagination: page=2
```

### Step 3: Detect Pagination

**Purpose**: Handle page 2+ with noindex,follow

**Logic**:
```typescript
if (evaluated.pagination.isPaginated && evaluated.pagination.pageNumber >= 2) {
  robots = config.pagination.pageTwoPlus; // "noindex,follow"
  sitemapIncluded = false;
}
```

**Rules**:
- Page 1: Indexable (index,follow)
- Page 2+: noindex,follow
- Page 2+ excluded from sitemap
- Self-canonical strategy (page 2 points to page 2)

**Why**: Page 2+ creates duplicate content. noindex prevents indexing while follow allows link equity flow and content discovery.

### Step 4: Check Protected Routes

**Purpose**: Handle special paths like /account/ and /search

**Logic**:
```typescript
if (pathname.startsWith('/account/')) {
  robots = 'noindex,nofollow';
  blockInRobots = true;
  sitemapIncluded = false;
}
else if (pathname.startsWith('/search')) {
  robots = 'noindex,follow';
  sitemapIncluded = false;
}
```

**Rules**:
- `/account/*`: noindex,nofollow + robots block (private data)
- `/search*`: noindex,follow (thin content, allow discovery)

### Step 5: Apply Parameter Policies

**Purpose**: Enforce unstable parameter behavior

**Logic**:
```typescript
if (evaluated.unstableParams.size > 0) {
  robots = 'noindex,follow';
  sitemapIncluded = false;
}
```

**Rules**:
- Any unstable param → noindex,follow
- Unstable params excluded from sitemap
- Allows crawling for link discovery
- Consolidates signals to canonical

**Examples**:
```
/catalog/t-shirts?sort=price_desc
→ noindex,follow
→ Excluded from sitemap
→ Canonical: /catalog/t-shirts/ (sort dropped)

/catalog/t-shirts?view=grid
→ noindex,follow
→ Excluded from sitemap
→ Canonical: /catalog/t-shirts/ (view dropped)
```

### Step 5: Check robots.txt Blocking

**Purpose**: Apply robots.txt disallow patterns for tracking parameters

**Logic**:
```typescript
const robotsCheck = checkRobotsBlocking(pathname, searchParams, config);
if (robotsCheck.isBlocked) {
  blockInRobots = true;
  sitemapIncluded = false;
  warnings.push(...robotsCheck.warnings);
}
```

**Blocking Patterns**:
1. **Protected paths**: `/account/`, `/api/`
2. **Tracking params**: `?utm_source=*`, `?gclid=*`, `?fbclid=*`
3. **UI preferences**: `?view=*`, `?per_page=*`
4. **Price range params**: `?price_min=*`, `?price_max=*` (infinite combinations)

### Step 6: Detect Multi-Select Parameters

**Purpose**: Detect exponential URL combinations from comma-separated values

**Logic**:
```typescript
const multiSelectDetected = Array.from(searchParams.entries())
  .some(([key, value]) => value.includes(','));

if (multiSelectDetected) {
  robots = undefined;  // No meta tag needed (blocked by robots.txt)
  blockInRobots = true;
  sitemapIncluded = false;
  trace.push(`✓ Multi-select detected (exponential combinations) → blocked by robots.txt`);
  trace.push(`  Pattern: Disallow: /*?*color=*,*`);
  trace.push(`  Prevents 2^N URL combinations`);
}
```

**Detection Examples**:
```
?color=black,blue → DETECTED (2^2 = 4 combinations)
?color=black,blue,red → DETECTED (2^3 = 8 combinations)
?color=black → NOT detected (single value)
```

**Why Block via robots.txt?**
- Multi-select creates 2^N exponential growth
- Example: 10 colors = 2^10 = 1,024 URLs
- noindex,follow insufficient (crawlers still access all combinations)
- robots.txt blocking is the ONLY scalable solution

**robots.txt Pattern**:
```
Disallow: /*?*color=*,*
Disallow: /*?*size=*,*
```

This blocks ANY URL with a comma in the parameter value, preventing exponential crawl waste.

### Step 7: Apply Multi-Filter Logic

**Purpose**: Handle N×M combinations from 2+ stable parameters

**Logic**:
```typescript
const stableParamCount = Array.from(evaluated.stableParams).length;

if (stableParamCount >= 2) {
  robots = 'noindex,follow';
  sitemapIncluded = false;
  trace.push(`✓ Multiple stable filters (${stableParamCount}) → noindex,follow`);
  trace.push(`  Creates N×M combinations, risk of index bloat`);
  trace.push(`  Example: 5 colors × 4 sizes = 20 URL variations`);
}
```

**Examples**:
```
?color=black&size=m → 2 stable params → noindex,follow
5 colors × 4 sizes = 20 URLs → Risk of index bloat

?color=black → 1 stable param → index,follow
Linear growth, manageable
```

**Why noindex,follow (not robots block)?**
- Unlike multi-select, combinations are finite
- Users may want to access specific combinations
- noindex prevents index bloat
- follow allows link discovery
- Canonical consolidates signals to base URL

### Step 8: Apply Parameter Policies

**Purpose**: Enforce unstable parameter behavior

**Logic**:
```typescript
if (evaluated.unstableParams.size > 0 && robots !== 'noindex,follow') {
  robots = 'noindex,follow';
  sitemapIncluded = false;
}
```

**Note**: This step only applies if multi-filter logic hasn't already set noindex.

### Step 9: Build Canonical URL

**Purpose**: Construct the clean, canonical version

**Logic**:
```typescript
for (const [key, value] of evaluated.stableParams.entries()) {
  canonicalParams.set(key, value); // Keep stable params
}

if (evaluated.unstableParams.size > 0) {
  // Drop all unstable params
}

if (evaluated.blockedParams.size > 0) {
  // Drop all blocked params
}

if (evaluated.pagination.isPaginated) {
  if (config.pagination.canonicalStrategy === 'self') {
    canonicalParams.set('page', pageNumber); // Keep pagination
  }
}
```

**Canonical Rules**:
1. **Keep**: Stable parameters
2. **Drop**: Unstable parameters
3. **Drop**: Blocked parameters
4. **Keep**: Search parameters (special case)
5. **Keep**: Pagination (if self-canonical strategy)

**Examples**:
```
Input: /catalog/t-shirts?sort=price_desc&color=black&utm_source=fb
Canonical: https://example.com/catalog/t-shirts/?color=black
Explanation:
  - Kept: color (stable)
  - Dropped: sort (unstable)
  - Dropped: utm_source (blocked)
```

```
Input: /catalog/t-shirts?color=black&size=m
Canonical: https://example.com/catalog/t-shirts/?color=black&size=m
Explanation:
  - Kept: color (stable)
  - Kept: size (stable)
```

```
Input: /catalog/t-shirts?color=black&page=2
Canonical: https://example.com/catalog/t-shirts/?color=black&page=2
Explanation:
  - Kept: color (stable)
  - Kept: page=2 (self-canonical strategy)
```

### Step 10: Determine Sitemap Inclusion

**Purpose**: Decide if URL should be in sitemap

**Logic**:
```typescript
// URL is included in sitemap if ALL conditions are true:
sitemapIncluded =
  robots === 'index,follow' &&  // Must be indexable
  !blockInRobots;                // Not blocked by robots.txt
```

**Inclusion Rules**:

| Scenario | Indexability | Robots Blocked | Sitemap |
|----------|--------------|----------------|---------|
| Base page | index,follow | No | ✅ INCLUDED |
| Stable facet | index,follow | No | ✅ INCLUDED |
| Unstable param | noindex,follow | No | ❌ EXCLUDED |
| Page 2+ | noindex,follow | No | ❌ EXCLUDED |
| Search page | noindex,follow | No | ❌ EXCLUDED |
| Protected route | noindex,nofollow | Yes | ❌ EXCLUDED |
| Tracking param | noindex,follow | Yes | ❌ EXCLUDED |

**Critical Rule**:
```
IF noindex (any variant) → EXCLUDED from sitemap
```

## Parameter Policy Deep Dive

### Stable Parameters

**Purpose**: Meaningful facets that create unique, valuable pages

**Characteristics**:
- Represent real user intent
- Create distinct content
- Should be indexed
- Kept in canonical URL

**Examples**:
- `color=black` - Different products
- `size=large` - Different inventory
- `brand=nike` - Different supplier
- `category=shirts` - Different product type

**SEO Treatment**:
```
URL: /catalog/t-shirts?color=black
Robots: index,follow
Canonical: /catalog/t-shirts/?color=black (self)
Sitemap: INCLUDED
```

### Unstable Parameters

**Purpose**: Parameters that create duplicate or low-value content

**Characteristics**:
- Create duplicate content (sort orders)
- UI preferences (view modes)
- Temporary filters (price ranges)
- Should NOT be indexed
- Dropped from canonical URL

**Examples**:
- `sort=price_desc` - Same products, different order
- `view=grid` - Same content, different layout
- `per_page=50` - Same products, different pagination
- `price_min=20&price_max=50` - Dynamic filter

**SEO Treatment**:
```
URL: /catalog/t-shirts?sort=price_desc
Robots: noindex,follow
Canonical: /catalog/t-shirts/ (sort dropped)
Sitemap: EXCLUDED
```

**Why noindex,follow?**
- noindex: Prevents indexing duplicate content
- follow: Allows crawlers to discover links to products
- Canonical: Consolidates signals to clean URL

### Blocked Parameters

**Purpose**: Tracking parameters that waste crawl budget

**Characteristics**:
- Create massive duplication
- No SEO value
- Should be blocked in robots.txt
- Always dropped from canonical

**Examples**:
- `utm_source=facebook` - Marketing tracking
- `utm_campaign=summer2024` - Campaign tracking
- `gclid=...` - Google Click ID
- `fbclid=...` - Facebook Click ID

**SEO Treatment**:
```
URL: /catalog/t-shirts?utm_source=facebook
Robots: noindex,follow (or blocked)
robots.txt: Disallow: /*?*utm_source=*
Canonical: /catalog/t-shirts/ (utm_source dropped)
Sitemap: EXCLUDED
```

### Search Parameters

**Purpose**: Search query terms

**Characteristics**:
- Internal search results
- Usually thin content
- Should NOT be indexed
- KEPT in canonical (exception!)

**Example**:
```
URL: /search?q=red+shoes
Robots: noindex,follow
Canonical: /search/?q=red+shoes (q kept!)
Sitemap: EXCLUDED
```

**Why keep in canonical?**
Search results pages are already noindex, so keeping the query doesn't cause duplication issues. It preserves the specific search context.

## Stacked Parameters

### Stable + Stable

**Result**: Indexable

```
URL: /catalog/t-shirts?color=black&size=large
Robots: index,follow
Canonical: /catalog/t-shirts/?color=black&size=large
Sitemap: INCLUDED
```

Both parameters are meaningful, so the combination is indexable.

### Unstable + Stable

**Result**: Noindex, canonical keeps only stable

```
URL: /catalog/t-shirts?sort=price_desc&color=black
Robots: noindex,follow
Canonical: /catalog/t-shirts/?color=black
Sitemap: EXCLUDED
```

The unstable parameter taints the whole URL. Canonical drops the unstable param but keeps the stable one.

### Unstable + Pagination

**Result**: Noindex, canonical drops unstable, keeps page

```
URL: /catalog/t-shirts?sort=price_desc&page=2
Robots: noindex,follow
Canonical: /catalog/t-shirts/?page=2
Sitemap: EXCLUDED
```

Both are noindex triggers. Canonical keeps pagination (self-canonical strategy) but drops unstable param.

### Stable + Pagination

**Result**: Noindex (due to pagination), keeps both

```
URL: /catalog/t-shirts?color=black&page=2
Robots: noindex,follow
Canonical: /catalog/t-shirts/?color=black&page=2
Sitemap: EXCLUDED
```

Pagination causes noindex. Both parameters are kept in canonical.

### Unstable + Tracking

**Result**: Noindex, both dropped from canonical

```
URL: /catalog/t-shirts?sort=price_desc&utm_source=fb
Robots: noindex,follow
robots.txt: Blocked (due to utm_source)
Canonical: /catalog/t-shirts/
Sitemap: EXCLUDED
```

Both parameters are problematic and dropped. URL may also be blocked by robots.txt.

## Multi-Select Parameters (Deep Dive)

### What is Multi-Select?

Multi-select occurs when users select multiple values for a single filter type. In URLs, this typically appears as comma-separated values:

```
?color=black,blue       # 2 colors selected
?color=black,blue,red   # 3 colors selected
?size=s,m,l             # 3 sizes selected
```

### Why is This Problematic?

Multi-select creates **exponential URL combinations** (2^N):

```
User selects: [black, blue]

Possible URLs:
1. /catalog/t-shirts                   (neither selected)
2. /catalog/t-shirts?color=black       (just black)
3. /catalog/t-shirts?color=blue        (just blue)
4. /catalog/t-shirts?color=black,blue  (both selected)

Total: 2^2 = 4 URLs
```

```
User selects: [black, blue, red]

Possible URLs:
1. /catalog/t-shirts                         (none)
2. /catalog/t-shirts?color=black             (just black)
3. /catalog/t-shirts?color=blue              (just blue)
4. /catalog/t-shirts?color=red               (just red)
5. /catalog/t-shirts?color=black,blue        (black+blue)
6. /catalog/t-shirts?color=black,red         (black+red)
7. /catalog/t-shirts?color=blue,red          (blue+red)
8. /catalog/t-shirts?color=black,blue,red    (all three)

Total: 2^3 = 8 URLs
```

**Real-World Impact**:
- 5 colors: 2^5 = 32 URLs
- 10 colors: 2^10 = 1,024 URLs
- 15 colors: 2^15 = 32,768 URLs

### SEO Strategy for Multi-Select

**Use robots.txt blocking** (NOT noindex,follow):

```
Disallow: /*?*color=*,*
Disallow: /*?*size=*,*
```

**Why robots.txt?**
- ✅ Prevents crawlers from discovering exponential combinations
- ✅ Saves massive crawl budget
- ✅ Scales to any number of options
- ❌ noindex,follow would still allow crawling (wasteful)

**Implementation**:
1. Detect comma in parameter value: `value.includes(',')`
2. Set `blockInRobots = true`
3. Set `robots = undefined` (no meta tag needed)
4. Set `sitemapIncluded = false`
5. Add blocking pattern to robots.txt

### Multi-Select vs Single-Select

| Aspect | Single-Select | Multi-Select |
|--------|---------------|--------------|
| URL | `?color=black` | `?color=black,blue` |
| Combinations | N (linear) | 2^N (exponential) |
| SEO Strategy | index,follow | robots.txt block |
| User Value | High | Medium (niche use case) |
| Crawl Cost | Low | Catastrophic |

## Multiple Stable Parameters (Deep Dive)

### What are Multiple Stable Parameters?

When users apply 2+ stable filters simultaneously:

```
?color=black&size=m          # 2 stable parameters
?color=black&size=m&brand=nike  # 3 stable parameters
```

### Why is This Problematic?

Multiple stable parameters create **N×M combinations**:

```
5 colors × 4 sizes = 20 URLs
10 colors × 6 sizes = 60 URLs
5 colors × 4 sizes × 3 brands = 60 URLs
```

While not exponential like multi-select, this still creates significant **index bloat**.

### SEO Strategy for Multiple Stable Parameters

**Use noindex,follow** (NOT robots.txt blocking):

```
URL: /catalog/t-shirts?color=black&size=m
Robots: noindex,follow
Canonical: /catalog/t-shirts/ (drops both params)
Sitemap: EXCLUDED
```

**Why noindex,follow (not robots block)?**
- ✅ Combinations are finite and predictable
- ✅ Users may genuinely want to access specific combinations
- ✅ Follow allows link discovery
- ✅ Canonical consolidates signals to base URL
- ❌ robots.txt would prevent legitimate access

### Single vs Multiple Stable Parameters

| Aspect | Single Stable | Multiple Stable |
|--------|---------------|-----------------|
| URL | `?color=black` | `?color=black&size=m` |
| Combinations | N (5 colors = 5 URLs) | N×M (5×4 = 20 URLs) |
| SEO Strategy | index,follow | noindex,follow |
| Index Value | High | Low (thin slicing) |
| User Value | High | Medium-High |

### Clean Path Alternative

For high-value combinations, consider clean paths:

```
Query params (noindex):
?color=black&size=m

Clean path (index):
/catalog/t-shirts/by-color/black/size-m/

Benefits:
✅ More semantic URL
✅ Can be selectively indexed
✅ Better keyword targeting
```

**Trade-off**: Requires manual curation of valuable combinations.

## Canonical vs Robots.txt

### Canonical URL Strategy

**Purpose**: Consolidate signals to the preferred version

**Method**: `<link rel="canonical" href="...">`

**Advantages**:
- Google can still crawl the URL
- Links are discovered
- Signals consolidate to canonical
- Flexible and safe

**Use For**:
- Unstable parameters (sort, view, etc.)
- Pagination (page 2+)
- Search results
- Stacked parameter combinations

### robots.txt Blocking

**Purpose**: Prevent crawling entirely

**Method**: `Disallow: /pattern`

**Advantages**:
- Saves crawl budget
- Prevents parameter explosion
- Blocks unwanted discovery

**Disadvantages**:
- ⚠️ Can prevent link discovery
- ⚠️ May hide indexable stable facets
- ⚠️ Reduces crawl flexibility

**Use For**:
- Protected routes (/account/)
- Tracking parameters (utm_*, gclid, etc.)
- UI preferences (view, per_page)
- Calendar date explosions

**DO NOT Use For**:
- ❌ Sort parameters (prevents deep pagination discovery)
- ❌ Stacked stable+unstable (hides stable facets)
- ❌ Pagination (prevents page 2+ discovery)

## Decision Precedence

When multiple rules apply, precedence is:

1. **Protected Routes** (highest)
   - `/account/` → noindex,nofollow + robots block

2. **Pagination**
   - Page 2+ → noindex,follow

3. **Multi-Select Parameters** (NEW!)
   - Comma-separated values → robots.txt block (no meta tag)
   - Takes precedence over everything except protected routes

4. **Multi-Filter Logic** (NEW!)
   - 2+ stable parameters → noindex,follow
   - Overrides individual parameter policies

5. **Unstable Parameters**
   - Any unstable → noindex,follow (if not already noindex from multi-filter)

6. **Search Pages**
   - `/search` → noindex,follow

7. **robots.txt Blocking for Tracking Params**
   - Applied to tracking params (utm_, gclid, etc.)
   - Doesn't change robots directive

**Example 1: Multi-Select**:
```
URL: /catalog/t-shirts?color=black,blue

Step 3: Not pagination
Step 4: Not protected route
Step 6: Multi-select detected → robots.txt block ✓

Result:
- Robots: undefined (no meta tag needed)
- Blocked: YES (robots.txt)
- Sitemap: EXCLUDED
- Short circuit: Other steps skipped
```

**Example 2: Multiple Stable Filters**:
```
URL: /catalog/t-shirts?color=black&size=m

Step 3: Not pagination
Step 4: Not protected route
Step 6: No multi-select
Step 7: 2 stable params → noindex,follow ✓

Result:
- Robots: noindex,follow
- Blocked: NO
- Sitemap: EXCLUDED
- Canonical: /catalog/t-shirts/ (drops both params)
```

**Example 3: Single Stable Filter**:
```
URL: /catalog/t-shirts?color=black

Step 3: Not pagination
Step 4: Not protected route
Step 6: No multi-select
Step 7: Only 1 stable param → no action
Step 8: No unstable params

Result:
- Robots: index,follow
- Blocked: NO
- Sitemap: INCLUDED
- Canonical: /catalog/t-shirts/?color=black (self)
```

## Best Practices Demonstrated

### 1. Use noindex,follow for Duplicate Content

**Good**:
```
URL: /catalog/t-shirts?sort=price_desc
Robots: noindex,follow
Canonical: /catalog/t-shirts/
```

**Why**: Allows discovery, prevents indexing, consolidates signals.

### 2. Block Tracking Params in robots.txt

**Good**:
```
robots.txt: Disallow: /*?*utm_source=*
URL: /catalog/t-shirts?utm_source=fb
Robots: noindex,follow
Blocked: YES
```

**Why**: Saves crawl budget, prevents parameter explosion.

### 3. Self-Canonical for Pagination

**Good**:
```
URL: /catalog/t-shirts?page=2
Canonical: /catalog/t-shirts/?page=2 (self)
Robots: noindex,follow
```

**Why**: Each page maintains its identity while consolidating signals.

### 4. Don't Block Sort in robots.txt

**Bad**:
```
robots.txt: Disallow: /*?*sort=*
```

**Why**: Can prevent discovery of products only on page 2+ of sorted views. Use noindex,follow instead.

### 5. Include Only Indexable Pages in Sitemap

**Rule**:
```
Sitemap Inclusion = index,follow AND NOT blocked
```

**Why**: Sitemaps should only contain pages you want indexed.

## Debugging SEO Decisions

The Receipt's "Rule Trace" tab shows the complete decision flow:

```
═══ SEO DECISION FLOW ═══
Input URL: /catalog/t-shirts/?sort=price_desc

Step 1: Normalize path → /catalog/t-shirts/
Step 2: Classify parameters
  Stable: none
  Unstable: sort
  Blocked: none
  Search: none
  Pagination: no

Step 3: Detect pagination
  Page 1 or no pagination

Step 4: Check protected routes
  Not a protected/special route

Step 5: Apply parameter policies
  ✓ Unstable params present → noindex,follow
  ✓ Excluded from sitemap

Step 6: Check robots.txt blocking
  Not blocked by robots.txt

Step 7: Build canonical URL
  Dropped unstable params: sort
  Final canonical: https://example.com/catalog/t-shirts/

Step 8: Determine sitemap inclusion
  ✗ Excluded from sitemap (noindex)

═══ FINAL RESULTS ═══
Canonical URL: https://example.com/catalog/t-shirts/
Robots: noindex,follow
Blocked by robots.txt: NO
Sitemap inclusion: EXCLUDED
```

This trace makes the decision process completely transparent and debuggable.
