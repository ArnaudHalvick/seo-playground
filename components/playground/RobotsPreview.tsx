'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { FileCode, AlertTriangle } from 'lucide-react';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { generateRobotsTxt } from '@/lib/rules/robots';
import type { ParamConfig } from '@/lib/rules/params';

interface RobotsPreviewProps {
  config: ParamConfig;
  onUpdate?: (config: ParamConfig) => void;
}

export function RobotsPreview({ config, onUpdate }: RobotsPreviewProps) {
  const robotsTxt = generateRobotsTxt(config);
  const toggles = config.robotsToggles || {};

  const handleToggleChange = (toggleKey: string, enabled: boolean) => {
    if (!onUpdate) return;

    const updated = {
      ...config,
      robotsToggles: {
        ...toggles,
        [toggleKey]: {
          ...toggles[toggleKey],
          enabled,
        },
      },
    };
    onUpdate(updated);
  };

  const toggleConfigs = [
    { key: 'protectedPaths', ...toggles.protectedPaths, warning: false },
    { key: 'trackingParams', ...toggles.trackingParams, warning: false },
    { key: 'searchPages', ...toggles.searchPages, warning: false },
    { key: 'uiPrefs', ...toggles.uiPrefs, warning: false },
    { key: 'calendarPattern', ...toggles.calendarPattern, warning: false },
    { key: 'sortBlocking', ...toggles.sortBlocking, warning: true },
    { key: 'stackedUnstableStable', ...toggles.stackedUnstableStable, warning: true },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Robots.txt Rule Toggles</CardTitle>
          <CardDescription>
            Enable or disable rules to see their immediate effect on the Receipt and robots.txt output
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {toggleConfigs.map((toggle) => (
            <div
              key={toggle.key}
              className={`p-4 border rounded-lg ${
                toggle.warning ? 'border-amber-300 bg-amber-50' : 'border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Label htmlFor={toggle.key} className="font-semibold cursor-pointer">
                      {toggle.label}
                    </Label>
                    {toggle.warning && <AlertTriangle className="h-4 w-4 text-amber-600" />}
                  </div>
                  <p className="text-sm text-slate-600">{toggle.description}</p>
                </div>
                <Switch
                  id={toggle.key}
                  checked={toggle.enabled || false}
                  onCheckedChange={(checked) => handleToggleChange(toggle.key, checked)}
                />
              </div>
              {toggle.enabled && toggle.rules && (
                <div className="mt-2 p-2 bg-slate-100 rounded text-xs font-mono space-y-1">
                  {toggle.rules.map((rule: string, idx: number) => (
                    <div key={idx}>{rule}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5" />
            Generated robots.txt
          </CardTitle>
          <CardDescription>
            Live preview based on enabled toggles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-96 overflow-y-auto">
            {robotsTxt}
          </pre>
        </CardContent>
      </Card>

      <Alert className="border-blue-300 bg-blue-50">
        <AlertDescription className="text-sm">
          <strong>Tip:</strong> Toggle rules on and off, then visit catalog pages to see how the SEO Receipt
          immediately reflects blocking status. Watch for "(Blocked)" suffixes on demo chips when rules apply.
        </AlertDescription>
      </Alert>
    </div>
  );
}
