import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ConfigProvider } from '@/lib/config/provider';
import { Navigation } from '@/components/Navigation';
import { LayoutWrapper } from '@/components/LayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Complete SEO Mastery - SEO Workshop',
  description: 'Master both programming and strategic sides of SEO. Interactive demos, production-ready code, and comprehensive strategic frameworks for client acquisition.',
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
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ConfigProvider>
      </body>
    </html>
  );
}
