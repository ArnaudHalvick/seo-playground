"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BarChart3, Info } from "lucide-react";
import UnderstandingTab from "./UnderstandingTab";
import FoundationsTab from "./FoundationsTab";
import DiagnosticsTab from "./DiagnosticsTab";
import ExperimentationTab from "./ExperimentationTab";

export default function MeasurementOptimizationContent() {
  const [activeTab, setActiveTab] = useState("understanding");

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['understanding', 'foundations', 'diagnostics', 'experimentation'].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.history.replaceState(null, '', `#${value}`);
  };
  return (
    <div className="bg-gradient-to-b from-purple-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Measurement, Iteration & Optimization</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Turn your strategy into a closed-loop system. Measure the right signals at the cluster
            level, diagnose issues early, run clean tests, and iterate content and internal linking
            to compound gains—without touching code.
          </p>
          <Alert className="border-purple-300 bg-purple-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Closed-Loop Optimization:</strong> Good measurement isn&apos;t about
              tracking everything—it&apos;s about measuring what drives decisions. Focus on cluster
              health, diagnose the &quot;why,&quot; and iterate systematically.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="understanding">Understanding</TabsTrigger>
            <TabsTrigger value="foundations">Foundations</TabsTrigger>
            <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
            <TabsTrigger value="experimentation">Experimentation</TabsTrigger>
          </TabsList>

          <TabsContent value="understanding" className="space-y-6">
            <UnderstandingTab />
          </TabsContent>

          <TabsContent value="foundations" className="space-y-6">
            <FoundationsTab />
          </TabsContent>

          <TabsContent value="diagnostics" className="space-y-6">
            <DiagnosticsTab />
          </TabsContent>

          <TabsContent value="experimentation" className="space-y-6">
            <ExperimentationTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

