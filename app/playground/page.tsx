'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import { useConfig } from '@/lib/config/provider';
import { ParamPolicyEditor } from '@/components/playground/ParamPolicyEditor';
import { RobotsPreview } from '@/components/playground/RobotsPreview';
import { SitemapTable } from '@/components/playground/SitemapTable';
import { PaginationSettings } from '@/components/playground/PaginationSettings';

export default function PlaygroundPage() {
  const { config } = useConfig();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">SEO Best Practices</h1>
              <p className="text-sm text-slate-600">
                Production-ready strategies for crawling, indexation, and URL management
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 p-5 bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-lg">
          <h2 className="font-semibold text-lg mb-2">About This Configuration</h2>
          <p className="text-sm text-slate-700 mb-3">
            These are battle-tested SEO strategies used in production environments. Each recommendation is based on industry best practices and balances crawl efficiency, indexation control, and user experience.
          </p>
          <p className="text-sm text-slate-600">
            Explore each tab to understand how to handle URL parameters, pagination, robots.txt rules, and sitemap generation for optimal search engine visibility.
          </p>
        </div>

        <Tabs defaultValue="params" className="space-y-6">
          <TabsList>
            <TabsTrigger value="params">Parameters</TabsTrigger>
            <TabsTrigger value="pagination">Pagination</TabsTrigger>
            <TabsTrigger value="robots">robots.txt</TabsTrigger>
            <TabsTrigger value="sitemap">Sitemap</TabsTrigger>
          </TabsList>

          <TabsContent value="params">
            <ParamPolicyEditor config={config} />
          </TabsContent>

          <TabsContent value="pagination">
            <PaginationSettings />
          </TabsContent>

          <TabsContent value="robots">
            <RobotsPreview />
          </TabsContent>

          <TabsContent value="sitemap">
            <SitemapTable config={config} />
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-5 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">See It In Action</h3>
          <p className="text-sm text-slate-700 mb-4">
            Visit these demo pages to see how these SEO best practices are implemented. The SEO Receipt shows real-time details about canonical URLs, meta robots, and more.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/catalog/t-shirts?sort=price_desc">
              <Button variant="outline" size="sm">
                Catalog with Sort
              </Button>
            </Link>
            <Link href="/catalog/t-shirts?page=2">
              <Button variant="outline" size="sm">
                Page 2
              </Button>
            </Link>
            <Link href="/catalog/t-shirts?color=blue">
              <Button variant="outline" size="sm">
                Color Filter
              </Button>
            </Link>
            <Link href="/search?q=shoes">
              <Button variant="outline" size="sm">
                Search Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
