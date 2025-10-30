# SEO Logic

This document provides a deep dive into the SEO decision-making algorithms used in this application.

## Overview

All SEO decisions flow through the `computeCanonical()` function in `lib/rules/canonical.ts`. This function implements a deterministic, step-by-step decision process that mirrors real-world SEO best practices.

## The Decision Flow

Every URL goes through exactly 8 steps in order:

```
1. Normalize Path
2. Classify Parameters
3. Detect Pagination
4. Check Protected Routes
5. Apply Parameter Policies
6. Check robots.txt Blocking
7. Build Canonical URL
8. Determine Sitemap Inclusion
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

### Step 6: Check robots.txt Blocking

**Purpose**: Apply robots.txt disallow patterns

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
2. **Tracking params**: `?utm_source=*`, `?gclid=*`, etc.
3. **UI prefs**: `?view=*`, `?per_page=*`
4. **Optional patterns** (discouraged):
   - Sort blocking: `?sort=*` (risky)
   - Stacked blocking: `?sort=*&color=*` (risky)

**Warning System**:
When risky patterns are enabled, warnings are added:
```
"Discovery risk: Blocking sort can prevent finding deeper
paginated content. Use noindex,follow instead."
```

### Step 7: Build Canonical URL

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

### Step 8: Determine Sitemap Inclusion

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

3. **Unstable Parameters**
   - Any unstable → noindex,follow

4. **Search Pages**
   - `/search` → noindex,follow

5. **robots.txt Blocking** (lowest)
   - Applied last, doesn't change robots directive

**Example**:
```
URL: /catalog/t-shirts?sort=price_desc (with sort blocking enabled)

Step 3: Not pagination
Step 4: Not protected route
Step 5: Unstable param → noindex,follow ✓
Step 6: robots.txt blocks sort → blockInRobots = true ✓

Result:
- Robots: noindex,follow (from Step 5)
- Blocked: YES (from Step 6)
- Both states shown in receipt
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
