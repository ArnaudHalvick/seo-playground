"use client";

import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Users, Info } from "lucide-react";
import UnderstandingTab from "./UnderstandingTab";
import PlanningTab from "./PlanningTab";
import OperationsTab from "./OperationsTab";
import QualityTab from "./QualityTab";

export default function ContentProductionContent() {
  const [activeTab, setActiveTab] = useState("understanding");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['understanding', 'planning', 'operations', 'quality'].includes(hash)) {
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
            <Users className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Content Production & Governance</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Build a reliable, repeatable editorial machine that turns research and strategy into
            high-quality pages—on time, on brief, and aligned with business outcomes.
          </p>
          <Alert className="border-purple-300 bg-purple-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Scale Without Chaos:</strong> Good production systems combine clear ownership
              (DRI), defined workflows (RACI), and quality standards (style guide, QA checklists) to
              ship consistently without sacrificing quality.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6" ref={tabsRef}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="understanding">Understanding</TabsTrigger>
            <TabsTrigger value="planning">Planning & Governance</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="quality">Quality & Measurement</TabsTrigger>
          </TabsList>

          <TabsContent value="understanding" className="space-y-6">
            <UnderstandingTab />
          </TabsContent>

          <TabsContent value="planning" className="space-y-6">
            <PlanningTab />
          </TabsContent>

          <TabsContent value="operations" className="space-y-6">
            <OperationsTab />
          </TabsContent>

          <TabsContent value="quality" className="space-y-6">
            <QualityTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

