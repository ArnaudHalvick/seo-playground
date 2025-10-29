'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { useConfig } from '@/lib/config/provider';
import { ParamPolicyEditor } from '@/components/playground/ParamPolicyEditor';
import { RobotsPreview } from '@/components/playground/RobotsPreview';
import { SitemapTable } from '@/components/playground/SitemapTable';
import { PaginationSettings } from '@/components/playground/PaginationSettings';

export default function PlaygroundPage() {
  const { config, updateConfig, resetConfig } = useConfig();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Rule Playground</h1>
          </div>
          <Button variant="outline" size="sm" onClick={resetConfig}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset to Defaults
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <p className="text-lg text-slate-600 mb-8">
          Configure parameter policies, robots.txt rules, and canonical strategies. Changes are saved automatically and affect all demo pages.
        </p>

        <Tabs defaultValue="params" className="space-y-6">
          <TabsList>
            <TabsTrigger value="params">Parameters</TabsTrigger>
            <TabsTrigger value="pagination">Pagination</TabsTrigger>
            <TabsTrigger value="robots">robots.txt</TabsTrigger>
            <TabsTrigger value="sitemap">Sitemap</TabsTrigger>
          </TabsList>

          <TabsContent value="params">
            <ParamPolicyEditor config={config} onUpdate={updateConfig} />
          </TabsContent>

          <TabsContent value="pagination">
            <PaginationSettings config={config} onUpdate={updateConfig} />
          </TabsContent>

          <TabsContent value="robots">
            <RobotsPreview config={config} />
          </TabsContent>

          <TabsContent value="sitemap">
            <SitemapTable config={config} />
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold mb-2">Try It Out</h3>
          <p className="text-sm text-slate-700 mb-3">
            Visit these pages to see your configuration in action. Watch the SEO Receipt update in real-time!
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
