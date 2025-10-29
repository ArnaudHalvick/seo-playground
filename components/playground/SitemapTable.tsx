'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { CheckCircle2, XCircle } from 'lucide-react';
import { generateSitemapEntries } from '@/lib/rules/sitemap';
import type { ParamConfig } from '@/lib/rules/params';

interface SitemapTableProps {
  config: ParamConfig;
}

export function SitemapTable({ config }: SitemapTableProps) {
  const entries = generateSitemapEntries(config);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sitemap Inclusion</CardTitle>
        <CardDescription>
          Shows which URLs will be included in sitemap.xml
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Status</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entries.map((entry, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    {entry.included ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-gray-400" />
                    )}
                  </TableCell>
                  <TableCell className="font-mono text-sm">{entry.loc}</TableCell>
                  <TableCell>
                    <Badge variant={entry.included ? 'default' : 'outline'} className="text-xs">
                      {entry.reason}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
