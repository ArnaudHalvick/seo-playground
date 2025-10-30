import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SeoReceipt } from '@/components/SeoReceipt';
import { Navigation } from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SEO Best Practices Demo',
  description: 'A demonstration of technical SEO best practices including robots.txt, meta robots, canonical URLs, and parameter handling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="page-content">
          {children}
        </div>
        <SeoReceipt />
      </body>
    </html>
  );
}
