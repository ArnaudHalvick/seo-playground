# Documentation Index

Welcome to the SEO Best Practices Showcase documentation. This folder contains comprehensive guides for understanding, developing, and extending the project.

## Documentation Structure

### 📚 Getting Started

1. **[Main README](../README.md)** - Start here
   - Project overview
   - Quick start guide
   - Tech stack summary
   - Key features

2. **[Setup Guide](./setup.md)** - Development environment
   - Installation instructions
   - Development workflow
   - Common tasks
   - Troubleshooting

### 🏗️ Architecture & Design

3. **[Architecture](./architecture.md)** - System design
   - Layered architecture overview
   - Data flow diagrams
   - Component interactions
   - Design patterns used

4. **[SEO Logic](./seo-logic.md)** - Decision algorithms
   - 8-step decision flow
   - Parameter classification
   - Canonical URL logic
   - Sitemap inclusion rules
   - Best practices explained

### 🎨 Implementation Details

5. **[Components](./components.md)** - UI components
   - Component hierarchy
   - Core components explained
   - Props and state management
   - UI patterns

6. **[Extending](./extending.md)** - Adding features
   - Adding parameter rules
   - Adding robots.txt patterns
   - Modifying SEO logic
   - Creating new components
   - Contributing guidelines

## Quick Navigation

### For Developers

**First time here?**
1. Read [Main README](../README.md)
2. Follow [Setup Guide](./setup.md)
3. Review [Architecture](./architecture.md)
4. Start coding!

**Adding a feature?**
1. Check [Extending Guide](./extending.md)
2. Review [SEO Logic](./seo-logic.md) if modifying rules
3. Check [Components](./components.md) for UI patterns

**Debugging SEO decisions?**
1. Read [SEO Logic](./seo-logic.md)
2. Use the SEO Receipt's "Rule Trace" tab
3. Check step-by-step decision flow

### For AI/LLMs

**Understanding the codebase:**
- [Architecture](./architecture.md) - System structure and patterns
- [SEO Logic](./seo-logic.md) - Core algorithm documentation
- [Components](./components.md) - UI component details

**Making changes:**
- [Extending](./extending.md) - How to add features
- [Setup](./setup.md) - Environment and tooling

**Key files to understand:**
- `lib/rules/canonical.ts` - Core SEO decision engine
- `lib/rules/params.ts` - Parameter classification
- `components/SeoReceipt.tsx` - Real-time feedback UI
- `data/rules.json` - Configuration

## Documentation Standards

All documentation follows these principles:

1. **Clear Structure**: Organized with headers and sections
2. **Code Examples**: Practical examples for all concepts
3. **Visual Aids**: Diagrams and tables where helpful
4. **Links**: Cross-references between documents
5. **Up-to-date**: Maintained alongside code changes

## Contributing to Documentation

When adding features:
1. Update relevant documentation files
2. Add code examples
3. Update the main README if needed
4. Keep documentation in sync with code

When writing documentation:
- Use clear, simple language
- Include practical examples
- Add diagrams for complex flows
- Link to related documentation
- Test all code examples

## File Sizes

| File | Size | Content |
|------|------|---------|
| README.md (main) | 7.5 KB | Project overview |
| architecture.md | 9.9 KB | System architecture |
| seo-logic.md | 15 KB | SEO algorithms |
| components.md | 14 KB | Component docs |
| setup.md | 12 KB | Development guide |
| extending.md | 16 KB | Extension guide |

**Total: ~74 KB of documentation**

## Questions?

- Check the [Setup Guide](./setup.md) for environment issues
- Check [Architecture](./architecture.md) for system design questions
- Check [SEO Logic](./seo-logic.md) for algorithm questions
- Check [Components](./components.md) for UI questions
- Check [Extending](./extending.md) for contribution questions

## External Resources

### Next.js Documentation
- [Next.js 13 Docs](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

### React Documentation
- [React Docs](https://react.dev/)
- [Hooks Reference](https://react.dev/reference/react)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Utility Classes](https://tailwindcss.com/docs/utility-first)

### shadcn/ui
- [Component Library](https://ui.shadcn.com/)
- [Installation Guide](https://ui.shadcn.com/docs/installation)

## Feedback

Documentation improvements are always welcome! If you find:
- Unclear explanations
- Missing information
- Errors or typos
- Outdated content

Please contribute updates or open an issue.

---

**Last Updated**: 2025-10-30
