# Parameter Policy Deep Dive

## Stable Parameters

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

## Unstable Parameters

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

## Blocked Parameters

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

## Search Parameters

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

## Multiple Stable Parameters

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

