"use client";

import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileCode, Info } from "lucide-react";
import UnderstandingTab from "./UnderstandingTab";
import SyntaxTab from "./SyntaxTab";
import BestPracticesTab from "./BestPracticesTab";

export default function RobotsContent() {
  const [activeTab, setActiveTab] = useState("understanding");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['understanding', 'syntax', 'best-practices'].includes(hash)) {
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
            <FileCode className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold">robots.txt Best Practices</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Master crawl control to optimize search engine access and protect your crawl budget
          </p>
          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Core Principle:</strong> robots.txt tells search engines which pages NOT to
              crawl. It&apos;s your first line of defense against crawl budget waste, but it does
              NOT prevent indexing (use noindex meta tags for that). Strategic use can improve crawl
              efficiency by 70-90% on large sites.
            </AlertDescription>
          </Alert>
        </div>

        {/* Scroll anchor for tab navigation */}
        <div ref={tabsRef} className="scroll-mt-20" />

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="understanding">Understanding</TabsTrigger>
            <TabsTrigger value="syntax">Syntax & Directives</TabsTrigger>
            <TabsTrigger value="best-practices">Implementation</TabsTrigger>
          </TabsList>

          <TabsContent value="understanding" className="space-y-6">
            <UnderstandingTab />
          </TabsContent>

          <TabsContent value="syntax" className="space-y-6">
            <SyntaxTab />
          </TabsContent>

          <TabsContent value="best-practices" className="space-y-6">
            <BestPracticesTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
