'use client';

import { usePathname } from 'next/navigation';
import { SeoReceipt } from '@/components/SeoReceipt';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Show SEO Receipt only on technical pages (not on strategic or homepage)
  const showSeoReceipt = !pathname.startsWith('/strategic-seo') && pathname !== '/';
  
  return (
    <>
      <div className={`page-content pt-16 ${showSeoReceipt ? 'lg:pr-96' : ''}`}>
        {children}
      </div>
      {showSeoReceipt && <SeoReceipt />}
    </>
  );
}

