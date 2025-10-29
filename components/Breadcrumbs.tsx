'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-slate-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="flex items-center text-slate-600 hover:text-slate-900 transition-colors">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-slate-400" />
              {index === items.length - 1 ? (
                <span className="font-medium text-slate-900">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
