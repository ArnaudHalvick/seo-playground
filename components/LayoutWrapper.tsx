'use client';

import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import { SeoReceipt } from '@/components/SeoReceipt';
import { Breadcrumbs, BreadcrumbItem } from '@/components/Breadcrumbs';

// Generate breadcrumbs based on pathname
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] | null {
  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null;
  
  const breadcrumbs: BreadcrumbItem[] = [];
  
  // Technical SEO pages
  if (pathname.startsWith('/technical-seo')) {
    breadcrumbs.push({ label: 'Technical SEO', href: '/technical-seo' });
    
    if (pathname !== '/technical-seo') {
      const subPath = pathname.replace('/technical-seo/', '');
      const pathSegments = subPath.split('/').filter(Boolean);
      
      // Map routes to readable names
      const routeNames: Record<string, string> = {
        'robots': 'Robots.txt',
        'sitemap': 'Sitemap',
        'parameters': 'Parameters',
        'duplicate-content': 'Duplicate Content',
        'pagination': 'Pagination',
        'site-search': 'Site Search',
        'site-architecture': 'Site Architecture',
        'core-web-vitals': 'Core Web Vitals',
        'protected-routes': 'Protected Routes',
        'international': 'International SEO',
        'product-urls': 'Product URLs & Database',
        'pattern-gallery': 'Pattern Gallery',
        'structured-data': 'Structured Data',
        'seo-dev-tools': 'SEO Dev Tools',
      };
      
      pathSegments.forEach((segment, index) => {
        const label = routeNames[segment] || segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const href = `/technical-seo/${pathSegments.slice(0, index + 1).join('/')}`;
        breadcrumbs.push({ label, href });
      });
    }
  }
  
  // Strategic SEO pages
  else if (pathname.startsWith('/strategic-seo')) {
    breadcrumbs.push({ label: 'Strategic SEO', href: '/strategic-seo' });
    
    if (pathname !== '/strategic-seo') {
      const subPath = pathname.replace('/strategic-seo/', '');
      const pathSegments = subPath.split('/').filter(Boolean);
      
      const routeNames: Record<string, string> = {
        'research-strategy': 'Research & Strategy',
        'content-architecture': 'Content Architecture',
        'content-production': 'Content Production',
        'measurement-optimization': 'Measurement & Optimization',
        'authority-building': 'Authority Building',
        'tools': 'Tools & Resources',
      };
      
      pathSegments.forEach((segment, index) => {
        const label = routeNames[segment] || segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const href = `/strategic-seo/${pathSegments.slice(0, index + 1).join('/')}`;
        breadcrumbs.push({ label, href });
      });
    }
  }
  
  // Shop pages (part of Technical SEO demo)
  else if (pathname.startsWith('/shop')) {
    breadcrumbs.push({ label: 'Technical SEO', href: '/technical-seo' });
    breadcrumbs.push({ label: 'Shop', href: '/shop' });
    
    if (pathname !== '/shop') {
      const subPath = pathname.replace('/shop/', '');
      const pathSegments = subPath.split('/').filter(Boolean);
      
      pathSegments.forEach((segment, index) => {
        // Skip query parameters
        if (segment.includes('?')) return;
        
        // Skip Next.js routing segments (for, color, size)
        if (['for', 'color', 'size'].includes(segment.toLowerCase())) return;
        
        // Format segment (capitalize, handle dashes)
        const label = segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const href = `/shop/${pathSegments.slice(0, index + 1).join('/')}`;
        breadcrumbs.push({ label, href });
      });
    }
  }
  
  return breadcrumbs.length > 0 ? breadcrumbs : null;
}

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Show SEO Receipt only on technical pages (not on strategic or homepage)
  const showSeoReceipt = !pathname.startsWith('/strategic-seo') && pathname !== '/';
  
  // Generate breadcrumbs based on pathname
  const breadcrumbs = generateBreadcrumbs(pathname);
  
  return (
    <>
      <div className="pt-16">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className={`page-content min-h-screen bg-slate-50 ${showSeoReceipt ? 'lg:pr-96' : ''}`}>
          {children}
        </div>
      </div>
      {showSeoReceipt && (
        <Suspense fallback={null}>
          <SeoReceipt />
        </Suspense>
      )}
    </>
  );
}

