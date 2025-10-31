# SEO Best Practices Showcase

An educational Next.js application demonstrating production-ready SEO implementations including parameter handling, canonical URLs, robots.txt patterns, pagination strategies, and sitemap generation.

## Overview

This project is an **educational showcase**, not a real e-commerce store. It demonstrates technical SEO best practices through a working demo catalog where you can see real-time SEO decisions for different URL patterns. Each parameter combination shows how professional sites handle indexability, canonical consolidation, crawl budget optimization, and sitemap inclusion.

### Key Features

- **Real-time SEO Receipt**: See instant feedback on how URL parameters affect SEO decisions
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
│   ├── catalog/                  # Demo catalog pages
│   │   └── [category]/          # Dynamic category pages
│   ├── playground/              # SEO configuration showcase
│   ├── api/                     # API routes (robots.txt, sitemap)
│   └── layout.tsx               # Root layout with providers
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── DemoChips.tsx            # Parameter demo buttons
│   ├── SeoReceipt.tsx           # Real-time SEO feedback panel
│   └── Navigation.tsx           # Site navigation
├── lib/                         # Core business logic
│   ├── rules/                   # SEO rule engines
│   │   ├── canonical.ts         # Canonical URL computation
│   │   ├── params.ts            # Parameter classification
│   │   ├── robots.ts            # robots.txt generation
│   │   └── sitemap.ts           # Sitemap generation
│   ├── catalog/                 # Demo product data
│   ├── config/                  # Configuration provider
│   └── utils/                   # Utility functions
├── data/                        # Static data files
│   ├── rules.json              # Default SEO configuration
│   └── catalog.json            # Demo product catalog
├── docs/                        # Documentation
│   ├── architecture.md         # System architecture
│   ├── seo-logic.md           # SEO decision flow
│   ├── components.md          # Component documentation
│   ├── setup.md               # Setup and development guide
│   └── extending.md           # Extension and contribution guide
└── public/                     # Static assets
```

## Core Concepts

### Parameter Policies

This app classifies URL parameters into three categories:

1. **Stable** - Meaningful facets that should be indexed (e.g., `color=black`, `size=m`)
2. **Unstable** - Create duplicate content, use noindex,follow (e.g., `sort=price_desc`)
3. **Blocked** - Tracking params that should be blocked in robots.txt (e.g., `utm_source`)

### SEO Decision Flow

Every URL goes through this decision process:

1. **Normalize path** - Lowercase and add trailing slash
2. **Classify parameters** - Determine stable/unstable/blocked/search
3. **Detect pagination** - Page 2+ gets noindex,follow
4. **Check protected routes** - /account/ gets noindex,nofollow
5. **Apply parameter policies** - Unstable params trigger noindex,follow
6. **Check robots.txt** - Apply blocking rules if configured
7. **Build canonical** - Keep stable params, drop unstable/blocked
8. **Determine sitemap** - Include only if indexable AND not blocked

### The SEO Receipt

The SEO Receipt is a real-time panel that shows:
- Input URL vs Canonical URL (with diff highlighting)
- Indexability status (index,follow / noindex,follow / noindex,nofollow)
- Robots.txt blocking status
- Sitemap inclusion decision
- Complete decision trace with step-by-step reasoning

## Key Pages

- **`/`** - Homepage with links to all demo sections
- **`/catalog`** - Main catalog landing page
- **`/catalog/t-shirts`** - Demo category with parameter chips
- **`/best-practices`** - SEO best practices documentation
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
