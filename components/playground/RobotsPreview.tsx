'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { FileCode } from 'lucide-react';
import { generateRobotsTxt } from '@/lib/rules/robots';
import type { ParamConfig } from '@/lib/rules/params';

interface RobotsPreviewProps {
  config: ParamConfig;
}

export function RobotsPreview({ config }: RobotsPreviewProps) {
  const robotsTxt = generateRobotsTxt(config);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileCode className="h-5 w-5" />
          robots.txt Preview
        </CardTitle>
        <CardDescription>
          Generated robots.txt based on current configuration
        </CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono">
          {robotsTxt}
        </pre>
      </CardContent>
    </Card>
  );
}
