'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';
import { Info } from 'lucide-react';
import type { ParamConfig, ParamPolicy } from '@/lib/rules/params';

interface ParamPolicyEditorProps {
  config: ParamConfig;
}

export function ParamPolicyEditor({ config }: ParamPolicyEditorProps) {
  const getPolicyColor = (policy: ParamPolicy) => {
    switch (policy) {
      case 'stable':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'unstable':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'blocked':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  const getPolicyExplanation = (policy: ParamPolicy) => {
    switch (policy) {
      case 'stable':
        return 'These parameters create meaningful variations that should be indexed. They can appear in canonical URLs.';
      case 'unstable':
        return 'These parameters create duplicate or low-value pages. Use noindex,follow to allow crawling but prevent indexing. Strip from canonical URLs.';
      case 'blocked':
        return 'These parameters should be completely blocked from crawling via robots.txt and always stripped from canonical URLs to prevent crawl waste.';
      default:
        return '';
    }
  };

  const groupedRules = {
    stable: config.rules.filter((r) => r.policy === 'stable'),
    unstable: config.rules.filter((r) => r.policy === 'unstable'),
    blocked: config.rules.filter((r) => r.policy === 'blocked'),
    other: config.rules.filter((r) => !['stable', 'unstable', 'blocked'].includes(r.policy)),
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Parameter Policies - Best Practices</CardTitle>
          <CardDescription>
            Recommended parameter handling strategies for optimal SEO performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="border-blue-300 bg-blue-50 mb-6">
            <Info className="h-4 w-4" />
            <AlertDescription>
              These are production-ready policies based on SEO best practices. Each parameter type requires different handling to balance crawl budget, indexability, and user experience.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            {(['stable', 'unstable', 'blocked'] as const).map((policyType) => {
              const rules = groupedRules[policyType];
              if (rules.length === 0) return null;

              return (
                <div key={policyType} className="space-y-3">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={getPolicyColor(policyType)}>
                      {policyType}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {getPolicyExplanation(policyType)}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {rules.map((rule) => (
                      <div key={rule.name} className="border rounded-lg p-4 bg-white">
                        <div className="flex items-center gap-3 mb-2">
                          <code className="font-mono font-semibold text-sm bg-muted px-2 py-1 rounded">
                            {rule.name}
                          </code>
                          <Badge className={getPolicyColor(rule.policy)} variant="outline">
                            {rule.policy}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-700">{rule.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {groupedRules.other.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm">Other Parameters</h3>
                <div className="space-y-3">
                  {groupedRules.other.map((rule) => (
                    <div key={rule.name} className="border rounded-lg p-4 bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <code className="font-mono font-semibold text-sm bg-muted px-2 py-1 rounded">
                          {rule.name}
                        </code>
                        <Badge className={getPolicyColor(rule.policy)} variant="outline">
                          {rule.policy}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-700">{rule.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
