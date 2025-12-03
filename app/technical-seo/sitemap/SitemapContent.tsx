'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Map, Info } from 'lucide-react';
import UnderstandingTab from './UnderstandingTab';
import InclusionTab from './InclusionTab';
import ImplementationTab from './ImplementationTab';

export default function SitemapContent() {
  const [activeTab, setActiveTab] = useState("understanding");

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['understanding', 'inclusion', 'implementation'].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.history.replaceState(null, '', `#${value}`);
  };
  return (
    <div className="bg-gradient-to-b from-blue-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Map className="h-10 w-10 text-green-600" />
            <h1 className="text-4xl font-bold">XML Sitemaps</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Master strategic sitemap creation to guide search engines to your most valuable content
          </p>
          <Alert className="border-green-300 bg-green-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Strategic Principle:</strong> A sitemap is NOT a dump of every URL on your site. It&apos;s a 
              curated list of indexable, valuable pages that helps search engines discover and prioritize your best 
              content. Quality over quantity—exclude pagination, filters, duplicates, and low-value pages to maximize 
              crawl efficiency and indexation rates.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="understanding">Understanding</TabsTrigger>
            <TabsTrigger value="inclusion">Strategic Curation</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>

          <TabsContent value="understanding" className="space-y-6">
            <UnderstandingTab />
          </TabsContent>

          <TabsContent value="inclusion" className="space-y-6">
            <InclusionTab />
          </TabsContent>

          <TabsContent value="implementation" className="space-y-6">
            <ImplementationTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

