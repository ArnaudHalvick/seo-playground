'use client';

import React, { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { FileCode, CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { generateRobotsTxt } from '@/lib/rules/robots';
import { DEFAULT_PARAM_CONFIG } from '@/lib/rules/params';

interface RobotsSection {
  title: string;
  lines: string[];
  explanation: string;
  icon: React.ReactNode;
  type: 'educational' | 'critical' | 'recommended';
}

export function RobotsPreview() {
  // Generate live robots.txt
  const robotsTxtContent = useMemo(() => {
    return generateRobotsTxt(DEFAULT_PARAM_CONFIG);
  }, []);

  // Parse into sections
  const sections = useMemo(() => {
    const parsed: RobotsSection[] = [];
    const lines = robotsTxtContent.split('\n');
    let currentSection: { title: string; lines: string[] } | null = null;

    for (const line of lines) {
      // Check if this is a section header (comment that's not a sub-comment)
      if (line.startsWith('# ') && !line.startsWith('# -') && !line.startsWith('# Block') && !line.startsWith('# Prevent') && !line.startsWith('# This')) {
        // Save previous section if exists
        if (currentSection) {
          const sectionInfo = getSectionInfo(currentSection.title);
          if (sectionInfo) {
            parsed.push({
              title: currentSection.title,
              lines: currentSection.lines,
              ...sectionInfo
            });
          }
        }
        // Start new section
        currentSection = {
          title: line.replace('#', '').trim(),
          lines: [line]
        };
      } else if (currentSection) {
        currentSection.lines.push(line);
      } else if (line.trim()) {
        // Lines before first section (User-agent)
        if (!currentSection) {
          currentSection = {
            title: 'User Agent Declaration',
            lines: [line]
          };
        }
      }
    }

    // Don't forget the last section
    if (currentSection) {
      const sectionInfo = getSectionInfo(currentSection.title);
      if (sectionInfo) {
        parsed.push({
          title: currentSection.title,
          lines: currentSection.lines,
          ...sectionInfo
        });
      }
    }

    return parsed;
  }, [robotsTxtContent]);

  // Helper function to get section metadata
  function getSectionInfo(title: string): Omit<RobotsSection, 'title' | 'lines'> | null {
    const mappings: Record<string, Omit<RobotsSection, 'title' | 'lines'>> = {
      'User Agent Declaration': {
        icon: <Info className="h-5 w-5 text-blue-600" />,
        explanation: 'Specifies which crawlers these rules apply to. "*" means all crawlers.',
        type: 'educational'
      },
      'Clean Path Architecture': {
        icon: <Info className="h-5 w-5 text-blue-600" />,
        explanation: 'Educational comments documenting this site\'s URL structure using path-based routes for gender filters, color filters, and product pages.',
        type: 'educational'
      },
      'Protected & System Paths': {
        icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
        explanation: 'Private user data and system APIs should never be crawled. Explicit Allow rules for public endpoints (robots/sitemap) come before broader Disallow patterns.',
        type: 'critical'
      },
      'Tracking & UI Parameters': {
        icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
        explanation: 'Marketing tracking parameters (UTM, GCLID, FBCLID) create massive duplicate content. Blocking them saves crawl budget while canonical tags handle any leaked URLs.',
        type: 'recommended'
      },
      'Multi-Select Parameters (Exponential Crawl Trap)': {
        icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
        explanation: 'Comma-separated values create exponential combinations (2^N URLs). Blocking multi-select patterns prevents massive crawl waste from filter combinations.',
        type: 'critical'
      },
      'Calendar Date Patterns': {
        icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
        explanation: 'Date pickers can create millions of URL combinations. Block them to prevent crawl budget waste on low-value calendar pages.',
        type: 'recommended'
      }
    };

    return mappings[title] || null;
  }

  const antiPatterns = [
    {
      title: 'Blocking Pagination Parameters',
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
      rule: 'Disallow: /*?*page=*',
      reason: 'This prevents crawlers from discovering products or content on page 2+. Use noindex,follow meta tags instead to allow discovery while controlling indexing.',
    },
    {
      title: 'Blocking Sort Parameters',
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
      rule: 'Disallow: /*?*sort=*',
      reason: 'While sort creates duplicate content, blocking it can prevent discovery of deeper paginated content. Use noindex,follow in meta robots instead.',
    },
    {
      title: 'Blocking Search Pages',
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
      rule: 'Disallow: /search',
      reason: 'Blocking search entirely prevents discovering useful content. Better to use noindex,follow on search result pages to allow link discovery.',
    },
  ];

  return (
    <div className="space-y-6">
      <Alert className="border-blue-300 bg-blue-50">
        <Info className="h-4 w-4" />
        <AlertDescription>
          This page shows the <strong>actual robots.txt</strong> generated by this application (same as <code className="text-xs">/api/robots</code>). The rules below are live-generated from the code, not hardcoded examples.
        </AlertDescription>
      </Alert>

      {/* Live Output with Annotations */}
      <Card>
        <CardHeader>
          <CardTitle>Live robots.txt Output</CardTitle>
          <CardDescription>
            Generated dynamically with explanations for each section
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="border rounded-lg p-5 bg-white">
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-0.5">{section.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{section.title}</h3>
                  <Badge className={
                    section.type === 'critical' ? 'bg-green-600 text-white' :
                    section.type === 'recommended' ? 'bg-green-100 text-green-800 border-green-300' :
                    'bg-blue-100 text-blue-800 border-blue-300'
                  }>
                    {section.type === 'critical' ? 'Critical' : 
                     section.type === 'recommended' ? 'Recommended' : 'Info'}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-slate-700 leading-relaxed">{section.explanation}</p>
                <div className="bg-slate-900 text-green-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                  {section.lines.map((line, idx) => (
                    <div key={idx} className={line.trim() === '' ? 'h-2' : ''}>
                      {line || '\u00A0'}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Complete Output */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5" />
            Complete robots.txt File
          </CardTitle>
          <CardDescription>
            View the full generated file as search engines would see it
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-96 overflow-y-auto whitespace-pre">
            {robotsTxtContent}
          </pre>
          <div className="mt-3 text-xs text-slate-500">
            💡 This is the exact content served at <code>/api/robots</code>
          </div>
        </CardContent>
      </Card>

      {/* Anti-Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-900">
            <AlertTriangle className="h-5 w-5" />
            Common Anti-Patterns to Avoid
          </CardTitle>
          <CardDescription>
            These patterns can harm crawlability and content discovery
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {antiPatterns.map((pattern, index) => (
            <div key={index} className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
              <div className="flex items-center gap-2 mb-2">
                {pattern.icon}
                <h3 className="font-semibold text-red-900">{pattern.title}</h3>
              </div>
              <div className="space-y-2 pl-7">
                <div className="bg-white p-2 rounded text-xs font-mono border border-red-200">
                  <span className="text-red-600"># BAD: </span>
                  <span className="line-through">{pattern.rule}</span>
                </div>
                <p className="text-sm text-slate-700">{pattern.reason}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Alert className="border-green-300 bg-green-50">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-sm">
          <strong>Key Principle:</strong> Use robots.txt to block patterns that create crawl waste (tracking params, UI prefs, multi-select filters) but use meta robots tags (noindex,follow) for content discovery scenarios like pagination and sorting.
        </AlertDescription>
      </Alert>
    </div>
  );
}
