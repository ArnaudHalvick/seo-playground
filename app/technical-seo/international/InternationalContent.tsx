'use client';

import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Info, CheckCircle2 } from 'lucide-react';
import URLStrategiesTab from './URLStrategiesTab';
import HreflangTab from './HreflangTab';
import LocalizationTab from './LocalizationTab';
import ExamplesTab from './ExamplesTab';

export default function InternationalContent() {
  const [activeTab, setActiveTab] = useState("url-strategies");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['url-strategies', 'hreflang', 'localization', 'examples'].includes(hash)) {
      setActiveTab(hash);
      setTimeout(() => {
        tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.history.replaceState(null, '', `#${value}`);
    tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="bg-gradient-to-b from-blue-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-10 w-10 text-indigo-600" />
            <h1 className="text-4xl font-bold">International SEO</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Serve the right language and region version to each searcher while consolidating SEO equity across equivalent content
          </p>
          <Alert className="border-indigo-300 bg-indigo-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Goal:</strong> Reach global audiences by making your content discoverable and relevant in different languages and regions,
              while maintaining strong SEO signals through proper technical implementation.
            </AlertDescription>
          </Alert>
        </div>

        {/* Scroll anchor for tab navigation */}
        <div ref={tabsRef} className="scroll-mt-20" />

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="url-strategies">URL Strategies</TabsTrigger>
            <TabsTrigger value="hreflang">Hreflang & Canonicals</TabsTrigger>
            <TabsTrigger value="localization">Localization</TabsTrigger>
            <TabsTrigger value="examples">Live Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="url-strategies" className="space-y-6">
            <URLStrategiesTab />
          </TabsContent>

          <TabsContent value="hreflang" className="space-y-6">
            <HreflangTab />
          </TabsContent>

          <TabsContent value="localization" className="space-y-6">
            <LocalizationTab />
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <ExamplesTab />
          </TabsContent>
        </Tabs>

        {/* Summary Footer */}
        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 mt-8">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-600" />
              International SEO Checklist
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Choose URL structure: subfolder recommended for most sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Implement hreflang tags with full reciprocity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use self-referencing canonicals per locale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Include x-default for fallback language</span>
                </li>
              </ul>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Localize content, UX, and legal elements (not just translate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Adapt currency, dates, units, and formatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Keep internal links within each locale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Test with Google Search Console International Targeting</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
