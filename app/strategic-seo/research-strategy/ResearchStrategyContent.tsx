"use client";

import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Target, Info } from "lucide-react";
import UnderstandingTab from "./UnderstandingTab";
import DiscoveryTab from "./DiscoveryTab";
import AnalysisTab from "./AnalysisTab";
import ExecutionTab from "./ExecutionTab";

export default function ResearchStrategyContent() {
  const [activeTab, setActiveTab] = useState("understanding");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['understanding', 'discovery', 'analysis', 'execution'].includes(hash)) {
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
    <div className="bg-gradient-to-b from-purple-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Research & Strategy</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Build an evidence-based plan that aligns business goals with searcher demand. Convert
            raw market and keyword signals into intent-led clusters, a content roadmap, and
            prioritized bets with measurable outcomes.
          </p>
          <Alert className="border-purple-300 bg-purple-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Foundation of SEO Success:</strong> Strategic research transforms guesswork
              into data-driven decisions. This phase determines what content to create, how to
              structure it, and which opportunities to pursue first.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6" ref={tabsRef}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="understanding">Understanding</TabsTrigger>
            <TabsTrigger value="discovery">Discovery Phase</TabsTrigger>
            <TabsTrigger value="analysis">Analysis Phase</TabsTrigger>
            <TabsTrigger value="execution">Execution Phase</TabsTrigger>
          </TabsList>

          <TabsContent value="understanding" className="space-y-6">
            <UnderstandingTab />
          </TabsContent>

          <TabsContent value="discovery" className="space-y-6">
            <DiscoveryTab />
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <AnalysisTab />
          </TabsContent>

          <TabsContent value="execution" className="space-y-6">
            <ExecutionTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
