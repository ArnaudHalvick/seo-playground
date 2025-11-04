# SEO Best Practices Showcase

An educational Next.js application demonstrating production-ready SEO implementations including parameter handling, canonical URLs, robots.txt patterns, pagination strategies, and sitemap generation.

## Overview

This project is an **educational showcase**, not a real e-commerce store. It demonstrates technical SEO best practices through a working demo catalog where you can see real-time SEO decisions for different URL patterns. Each parameter combination shows how professional sites handle indexability, canonical consolidation, crawl budget optimization, and sitemap inclusion.

### Key Features

- **Real-time SEO Receipt**: See instant feedback on how URL parameters affect SEO decisions
- **Interactive Filter Sidebar**: Production-ready e-commerce filtering with multi-select colors, size selection, price ranges, and sorting
- **Gender-Based Clean Paths**: Clean URL structures for gender filtering (`/shop/t-shirts/for/women/`) with SEO education banners
- **Color & Size Clean Path Routes**: SEO-friendly URL structures (`/shop/t-shirts/color/black/`, `/shop/t-shirts/size/M/`)
- **Size Configuration System**: Category-specific size ordering and grouping (e.g., Kids vs Adult sizes for shoes)
- **Gender-Aware Size Groups**: Automatically shows contextually relevant sizes based on gender selection
- **Manual Price Filter Application**: User-controlled price filter updates with explicit "Apply" button for better UX
- **Multi-Select Detection**: Identifies and blocks exponential URL combinations (2^N patterns) via robots.txt
- **Crawl Trap Risk Assessment**: Real-time calculation of URL explosion with color-coded warnings (low/medium/high)
- **Parameter Classification**: Demonstrates stable, unstable, and blocked parameter policies
- **Pagination Best Practices**: Shows proper handling of page 2+ with noindex,follow
- **Canonical URL Logic**: Intelligent canonical generation that drops noise while preserving meaningful facets
- **Robots.txt Patterns**: Production-ready robots.txt rules with explanations
- **Sitemap Generation**: Dynamic sitemap that only includes indexable pages
- **Step-by-step Decision Flow**: Transparent trace of every SEO decision made

## Tech Stack

### Core Framework

- **Next.js 13** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety

### UI Components

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library built on Radix UI
- **Lucide React** - Icon library

### State Management

- **React Context** - For configuration state
- **LocalStorage** - Persistent configuration (browser-side only for demo purposes)

## Quick Start

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd project

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the app in action.

### Build for Production

```bash
# Type check and build
npm run build

# Start production server
npm start
```

## Project Structure

```
project/
├── app/                          # Next.js App Router pages
│   ├── shop/                    # E-commerce demo pages
│   │   ├── [category]/          # Dynamic category pages with filters
│   │   │   ├── for/[gender]/   # Gender clean paths (/for/women/, /for/men/, etc.)
│   │   │   ├── color/[color]/  # Color clean paths (/color/black/, /color/blue/)
│   │   │   ├── size/[size]/    # Size clean paths (/size/M/, /size/L/)
│   │   │   └── [product]/      # Product detail pages
│   │   └── page.tsx            # Shop home / category list
│   ├── pattern-gallery/         # SEO Pattern Gallery - comprehensive pattern reference
│   ├── best-practices/          # SEO best practices docs
│   ├── api/                     # API routes (robots.txt, sitemap)
│   └── layout.tsx               # Root layout with providers
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── catalog/                 # E-commerce filter components
│   │   ├── FilterSidebar.tsx   # Multi-select filters with size grouping
│   │   ├── FilterSummaryBar.tsx # Sticky active filter bar
│   │   ├── GenderFilter.tsx    # Gender filter buttons with SEO banners
│   │   ├── PriceRangeFilter.tsx # Manual price filter with apply button
│   │   └── ActiveFilters.tsx   # Removable filter badges
│   ├── playground/              # Pattern gallery components
│   │   ├── PatternCard.tsx     # Individual pattern display
│   │   ├── PatternFilter.tsx   # Pattern filtering and search
│   │   └── PatternCategory.tsx # Collapsible category sections
│   ├── DemoChips.tsx            # Parameter demo buttons
│   ├── SeoReceipt.tsx           # Real-time SEO feedback panel
│   └── Navigation.tsx           # Site navigation
├── lib/                         # Core business logic
│   ├── rules/                   # SEO rule engines
│   │   ├── canonical.ts         # Canonical URL + multi-select detection
│   │   ├── params.ts            # Parameter classification
│   │   ├── robots.ts            # robots.txt generation
│   │   └── sitemap.ts           # Sitemap generation (includes gender paths)
│   ├── catalog/                 # Product data & filtering
│   │   └── data.ts             # Filter functions, gender helpers, size groups
│   ├── config/                  # Configuration provider
│   └── utils/                   # Utility functions
├── data/                        # Static data files
│   ├── rules.json              # Default SEO configuration
│   ├── catalog.json            # Demo product catalog (160 products with gender)
│   ├── size-config.json        # Category-specific size ordering & grouping
│   └── seo-patterns.json       # Pattern gallery data (17 SEO patterns)
├── docs/                        # Documentation
│   ├── architecture.md         # System architecture
│   ├── seo-logic.md           # SEO decision flow
│   ├── components.md          # Component documentation
│   ├── setup.md               # Setup and development guide
│   └── extending.md           # Extension and contribution guide
└── public/                     # Static assets
```

## Core Concepts

### Interactive E-Commerce Filtering

The catalog features a production-ready filter system:

- **Multi-select color filtering** - Select multiple colors simultaneously (with crawl trap warnings)
- **Size radio buttons** - Single selection with visual feedback and product counts
- **Size grouping** - Category-specific grouping (e.g., Kids vs Adult sizes for shoes)
- **Gender-aware sizes** - Contextually relevant size options based on gender selection
- **Manual price filter** - User-controlled with explicit "Apply" button (no auto-updates)
- **Sort options** - Price (high/low), name (A-Z/Z-A), popularity
- **Active filter display** - Removable badges showing all applied filters
- **Sticky filter summary** - Persistent bar showing all active parameters with single "Clear All" button
- **Mobile responsive** - Drawer interface for small screens

All filter state lives in the URL, making filters shareable, SEO-analyzable, and browser-history compatible.

### Clean Path Routes

Demonstrates SEO-friendly URL structures as an alternative to query parameters:

- **Gender clean paths**: `/shop/t-shirts/for/women/` instead of `?gender=women`
  - Large button navigation with active state
  - SEO education banner on clean path pages
  - Gender-aware size group filtering
- **Color clean paths**: `/shop/t-shirts/color/black/` instead of `?color=black`
- **Size clean paths**: `/shop/t-shirts/size/M/` instead of `?size=M`
- Side-by-side comparison with educational banners explaining benefits
- Static generation with `generateStaticParams` for optimal performance
- 44+ pre-generated clean path pages (8 gender + 16 color + 20 size pages)

Clean paths are ideal for **stable filters** that represent real user intent and create meaningful landing pages. Gender filters are a perfect example: they create distinct product segments worth indexing.

### Multi-Select & Crawl Trap Detection

Advanced parameter analysis with real-time risk assessment:

- **Exponential detection** - Identifies comma-separated values creating 2^N combination patterns
- **Multi-filter logic** - Handles N×M combinations when 2+ stable parameters are present
- **Real-time math** - Shows URL explosion calculations (e.g., "2^3 = 8 URLs")
- **Risk assessment** - Color-coded warnings:
  - 🟢 **Low Risk** - Single stable filter, safe to index
  - 🟡 **Medium Risk** - Multiple stable filters or sorting, use noindex,follow
  - 🔴 **High Risk** - Multi-select or infinite ranges, block via robots.txt

### Parameter Policies

This app classifies URL parameters into three categories:

1. **Stable** - Meaningful facets that should be indexed (e.g., `color=black`, `size=m`)
2. **Unstable** - Create duplicate content, use noindex,follow (e.g., `sort=price_desc`)
3. **Blocked** - Tracking params that should be blocked in robots.txt (e.g., `utm_source`, `price_min`)

### SEO Decision Flow

Every URL goes through this decision process:

1. **Normalize path** - Lowercase and add trailing slash
2. **Classify parameters** - Determine stable/unstable/blocked/search/pagination
3. **Detect pagination** - Page 2+ gets noindex,follow
4. **Check protected routes** - /account/ gets noindex,nofollow
5. **Check robots.txt blocking** - Priority check for blocked parameters
6. **Detect multi-select** - Comma-separated values trigger robots.txt blocking (2^N risk)
7. **Apply parameter policies** - Multi-filter (N×M) or unstable params trigger noindex,follow
8. **Build canonical** - Keep stable params, drop unstable/blocked
9. **Determine sitemap** - Include only if indexable AND not blocked
10. **Calculate crawl trap risk** - Assess low/medium/high risk with math explanations

### The SEO Receipt

The SEO Receipt is a real-time panel that shows:

- Input URL vs Canonical URL (with diff highlighting)
- Indexability status (index,follow / noindex,follow / noindex,nofollow)
- Robots.txt blocking status
- Sitemap inclusion decision
- Complete decision trace with step-by-step reasoning

## Key Pages

### E-Commerce Demo (Shop)

- **`/shop`** - Shop home / category list
- **`/shop/t-shirts`** - T-Shirts category with interactive filters and gender navigation
- **`/shop/shoes`** - Shoes category with grouped sizes (Kids vs Adult)
- **`/shop/t-shirts/for/women`** - Gender clean path (indexable, with SEO banner)
- **`/shop/shoes/for/girls`** - Gender clean path showing only Kids sizes
- **`/shop/t-shirts/color/black`** - Color clean path example (indexable)
- **`/shop/t-shirts/size/M`** - Size clean path example (indexable)
- **`/shop/t-shirts/[product]`** - Individual product pages

### SEO Learning Tool

- **`/pattern-gallery`** - SEO Pattern Gallery: 17 production-ready patterns organized by category with filtering, search, and live examples
- **`/best-practices`** - SEO best practices documentation with implementation details
- **`/best-practices/parameters`** - Parameter handling guide
- **`/best-practices/robots`** - robots.txt best practices
- **`/best-practices/sitemap`** - Sitemap generation guide

### Technical Endpoints

- **`/api/robots`** - Dynamic robots.txt generation
- **`/api/sitemap`** - Dynamic XML sitemap

## Configuration

The default SEO configuration is in `data/rules.json` and includes:

- Parameter classification rules
- Pagination policies
- Robots.txt toggle configurations
- Demo feature flags

The configuration is loaded into React Context and can be inspected in the browser's localStorage under the key `seo-playground-config`.

## Documentation

Detailed documentation is available in the `/docs` folder:

- **[Architecture](./docs/architecture.md)** - System design and component interactions
- **[SEO Logic](./docs/seo-logic.md)** - Deep dive into SEO decision algorithms
- **[Components](./docs/components.md)** - UI component documentation
- **[Setup Guide](./docs/setup.md)** - Development environment setup
- **[Extension Guide](./docs/extending.md)** - How to add new features

## Development

### Running Tests

```bash
# Type check
npm run typecheck

# Build (includes type checking)
npm run build
```

### Code Organization

- **Pages** are in `app/` following Next.js 13 App Router conventions
- **Business logic** is in `lib/` and is framework-agnostic
- **UI components** are in `components/` and use TypeScript + Tailwind
- **Static data** is in `data/` as JSON files

### Key Files

- `lib/rules/canonical.ts` - Core SEO decision engine
- `components/SeoReceipt.tsx` - Real-time SEO feedback
- `data/rules.json` - Default configuration
- `app/api/robots/route.ts` - Dynamic robots.txt endpoint
- `app/api/sitemap/route.ts` - Dynamic XML sitemap endpoint

## Contributing

This is an educational project. Contributions that improve clarity, add documentation, or demonstrate additional SEO best practices are welcome.

See [docs/extending.md](./docs/extending.md) for guidelines on adding new features.

## License

MIT License - feel free to use this project for learning and reference.

## Acknowledgments

Built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.

Created as an educational resource for understanding technical SEO implementation
