'use client';

import { useState, useEffect, useRef } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Info } from 'lucide-react';

import URLStructureTab from './URLStructureTab';
import VariantsTab from './VariantsTab';
import LifecycleTab from './LifecycleTab';
import DatabaseTab from './DatabaseTab';

export default function ProductUrlsPage() {
  const [activeTab, setActiveTab] = useState("url-structure");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['url-structure', 'variants', 'lifecycle', 'database'].includes(hash)) {
      setActiveTab(hash);
      // Scroll to tabs after a short delay to ensure content is rendered
      setTimeout(() => {
        tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.history.replaceState(null, '', `#${value}`);
    // Scroll to tabs
    tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="bg-gradient-to-b from-blue-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Package className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold">Product URLs & Database Architecture</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Build SEO-friendly product catalogs that scale from hundreds to millions of products
          </p>
          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>E-Commerce Foundation:</strong> Product pages are the money pages of any online store. 
              This guide covers URL structure, handling variants, managing product lifecycle, and database design 
              that supports SEO at scale.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6" ref={tabsRef}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="url-structure">URL Structure</TabsTrigger>
            <TabsTrigger value="variants">Product Variants</TabsTrigger>
            <TabsTrigger value="lifecycle">Out-of-Stock & Lifecycle</TabsTrigger>
            <TabsTrigger value="database">Database Design</TabsTrigger>
          </TabsList>

          {/* Tab 1: URL Structure & Slugs */}
          <TabsContent value="url-structure" className="space-y-6" id="url-structure">
            <URLStructureTab />
          </TabsContent>

          {/* Tab 2: Product Variants */}
          <TabsContent value="variants" className="space-y-6">
            <VariantsTab />
          </TabsContent>

          {/* Tab 3: Out-of-Stock & Lifecycle */}
          <TabsContent value="lifecycle" className="space-y-6">
            <LifecycleTab />
          </TabsContent>

          {/* Tab 4: Database Design */}
          <TabsContent value="database" className="space-y-6" id="database">
            <DatabaseTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

