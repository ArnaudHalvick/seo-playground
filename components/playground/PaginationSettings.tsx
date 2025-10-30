'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Switch } from '../ui/switch';
import { Alert, AlertDescription } from '../ui/alert';
import { AlertTriangle } from 'lucide-react';
import type { ParamConfig, RobotsDirective } from '@/lib/rules/params';

interface PaginationSettingsProps {
  config: ParamConfig;
  onUpdate: (config: ParamConfig) => void;
}

export function PaginationSettings({ config, onUpdate }: PaginationSettingsProps) {
  const handlePageTwoPlusChange = (value: RobotsDirective) => {
    onUpdate({
      ...config,
      pagination: { ...config.pagination, pageTwoPlus: value },
    });
  };

  const handleStrategyChange = (value: 'self' | 'base') => {
    onUpdate({
      ...config,
      pagination: { ...config.pagination, canonicalStrategy: value },
    });
  };

  const handleBlockInRobotsChange = (checked: boolean) => {
    onUpdate({
      ...config,
      demos: { ...config.demos, blockPaginationInRobots: checked },
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pagination Policy</CardTitle>
        <CardDescription>
          Configure how pagination affects indexability and canonicalization
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label>Page 2+ Robots Directive</Label>
          <RadioGroup value={config.pagination.pageTwoPlus} onValueChange={handlePageTwoPlusChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="index,follow" id="page-index-follow" />
              <Label htmlFor="page-index-follow" className="cursor-pointer">
                index,follow
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="noindex,follow" id="page-noindex-follow" />
              <Label htmlFor="page-noindex-follow" className="cursor-pointer">
                noindex,follow (recommended)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="noindex,nofollow" id="page-noindex-nofollow" />
              <Label htmlFor="page-noindex-nofollow" className="cursor-pointer">
                noindex,nofollow
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Canonical Strategy</Label>
          <RadioGroup
            value={config.pagination.canonicalStrategy}
            onValueChange={handleStrategyChange}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="self" id="canon-self" />
              <Label htmlFor="canon-self" className="cursor-pointer">
                Self-canonical (page 2 → page 2)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="base" id="canon-base" />
              <Label htmlFor="canon-base" className="cursor-pointer">
                Canonical to base (page 2 → page 1)
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3 pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="block-pagination">Block pagination in robots.txt</Label>
              <p className="text-sm text-muted-foreground">
                Demonstrates a bad practice
              </p>
            </div>
            <Switch
              id="block-pagination"
              checked={config.demos.blockPaginationInRobots}
              onCheckedChange={handleBlockInRobotsChange}
            />
          </div>
          {config.demos.blockPaginationInRobots && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Blocking pagination in robots.txt prevents crawlers from discovering links on page 2+. This is generally a bad idea!
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
