import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ConfigProvider } from '@/lib/config/provider';
import { SeoReceipt } from '@/components/SeoReceipt';
import { Navigation } from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SEO Robots & Parameters Playground',
  description: 'Learn technical SEO through interactive demonstrations of robots.txt, meta robots, canonical URLs, and parameter handling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider>
          <Navigation />
          <div className="page-content">
            {children}
          </div>
          <SeoReceipt />
        </ConfigProvider>
      </body>
    </html>
  );
}
