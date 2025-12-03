"use client";

import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileText, Info } from "lucide-react";
import UnderstandingTab from "./UnderstandingTab";
import ArchitectureTab from "./ArchitectureTab";
import OptimizationTab from "./OptimizationTab";
import MaintenanceTab from "./MaintenanceTab";

export default function ContentArchitectureContent() {
  const [activeTab, setActiveTab] = useState("understanding");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['understanding', 'architecture', 'optimization', 'maintenance'].includes(hash)) {
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
            <FileText className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Content Architecture & On-Page Optimization</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Translate research into a semantic, navigable content system that satisfies search
            intent quickly, signals topical authority, and converts—without touching code.
          </p>
          <Alert className="border-purple-300 bg-purple-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Structure Matters:</strong> Good content architecture makes it easy for users
              to find what they need and for Google to understand your topical coverage. Hub-spoke
              clusters signal comprehensive expertise.
            </AlertDescription>
          </Alert>
        </div>

        {/* Scroll anchor for tab navigation */}
        <div ref={tabsRef} className="scroll-mt-20" />

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="understanding">Understanding</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          <TabsContent value="understanding" className="space-y-6">
            <UnderstandingTab />
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <ArchitectureTab />
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <OptimizationTab />
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-6">
            <MaintenanceTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

