"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TrendingUp, Info } from "lucide-react";
import UnderstandingTab from "./UnderstandingTab";
import FoundationsTab from "./FoundationsTab";
import AcquisitionTab from "./AcquisitionTab";
import MeasurementTab from "./MeasurementTab";

export default function AuthorityBuildingContent() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Authority Building & Off-Page SEO</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Strengthen your reputation, trust, and relevance beyond your own site. Earn high-quality
            mentions and links, activate local signals, manage reviews and user-generated content,
            and use media to win visibility and clicks—while reinforcing E-E-A-T.
          </p>
          <Alert className="border-purple-300 bg-purple-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Beyond Your Domain:</strong> Off-page SEO is about building reputation and
              trust signals that Google can verify externally. Quality always beats quantity when it
              comes to links, mentions, and third-party validation.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="understanding" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="understanding">Understanding</TabsTrigger>
            <TabsTrigger value="foundations">Foundations</TabsTrigger>
            <TabsTrigger value="acquisition">Acquisition</TabsTrigger>
            <TabsTrigger value="measurement">Measurement</TabsTrigger>
          </TabsList>

          <TabsContent value="understanding" className="space-y-6">
            <UnderstandingTab />
          </TabsContent>

          <TabsContent value="foundations" className="space-y-6">
            <FoundationsTab />
          </TabsContent>

          <TabsContent value="acquisition" className="space-y-6">
            <AcquisitionTab />
          </TabsContent>

          <TabsContent value="measurement" className="space-y-6">
            <MeasurementTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

