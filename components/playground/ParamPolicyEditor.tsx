'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Badge } from '../ui/badge';
import type { ParamConfig, ParamPolicy } from '@/lib/rules/params';

interface ParamPolicyEditorProps {
  config: ParamConfig;
  onUpdate: (config: ParamConfig) => void;
}

export function ParamPolicyEditor({ config, onUpdate }: ParamPolicyEditorProps) {
  const handlePolicyChange = (paramName: string, newPolicy: ParamPolicy) => {
    const updatedRules = config.rules.map((rule) =>
      rule.name === paramName ? { ...rule, policy: newPolicy } : rule
    );
    onUpdate({ ...config, rules: updatedRules });
  };

  const getPolicyColor = (policy: ParamPolicy) => {
    switch (policy) {
      case 'stable':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'unstable':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'blocked':
        return 'bg-red-100 text-red-800 border-red-300';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Parameter Policies</CardTitle>
        <CardDescription>
          Define how URL parameters affect indexability and canonicalization
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {config.rules.map((rule) => (
          <div key={rule.name} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <code className="font-mono font-semibold text-sm bg-muted px-2 py-1 rounded">
                  {rule.name}
                </code>
                <Badge className={getPolicyColor(rule.policy)}>{rule.policy}</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{rule.description}</p>
            <RadioGroup
              value={rule.policy}
              onValueChange={(value) => handlePolicyChange(rule.name, value as ParamPolicy)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="stable" id={`${rule.name}-stable`} />
                <Label htmlFor={`${rule.name}-stable`} className="text-sm cursor-pointer">
                  Stable
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unstable" id={`${rule.name}-unstable`} />
                <Label htmlFor={`${rule.name}-unstable`} className="text-sm cursor-pointer">
                  Unstable
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="blocked" id={`${rule.name}-blocked`} />
                <Label htmlFor={`${rule.name}-blocked`} className="text-sm cursor-pointer">
                  Blocked
                </Label>
              </div>
            </RadioGroup>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
