'use client';

import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Zap, Info } from 'lucide-react';
import UnderstandingTab from './UnderstandingTab';
import QuickWinsTab from './QuickWinsTab';
import AdvancedTab from './AdvancedTab';
import MeasuringTab from './MeasuringTab';

export default function CoreWebVitalsContent() {
  const [activeTab, setActiveTab] = useState("understanding");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['understanding', 'quick-wins', 'advanced', 'measuring'].includes(hash)) {
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
            <Zap className="h-10 w-10 text-yellow-600" />
            <h1 className="text-4xl font-bold">Core Web Vitals & Performance</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Make your site fast enough to rank and convert visitors
          </p>
          <Alert className="border-yellow-300 bg-yellow-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Reality Check:</strong> Performance is a lightweight ranking factor. Focus on content quality first,
              then optimize performance to avoid penalties and improve user experience. You don&apos;t need a perfect 100 score to rank well.
            </AlertDescription>
          </Alert>
        </div>

        {/* Scroll anchor for tab navigation */}
        <div ref={tabsRef} className="scroll-mt-20" />

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="understanding">Understanding</TabsTrigger>
            <TabsTrigger value="quick-wins">Quick Wins</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="measuring">Measuring</TabsTrigger>
          </TabsList>

          <TabsContent value="understanding" className="space-y-6">
            <UnderstandingTab />
          </TabsContent>

          <TabsContent value="quick-wins" className="space-y-6">
            <QuickWinsTab />
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <AdvancedTab />
          </TabsContent>

          <TabsContent value="measuring" className="space-y-6">
            <MeasuringTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
