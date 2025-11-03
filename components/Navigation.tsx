'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Settings, ShoppingBag, Home, BookOpen, ChevronDown, Beaker } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { getCategories } from '@/lib/catalog/data';

export function Navigation() {
  const pathname = usePathname();
  const categories = getCategories();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  const isDocsActive = isActive('/docs') || isActive('/concepts') || isActive('/about') || isActive('/how-it-works');

  return (
    <nav className="border-b bg-white sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:text-blue-600 transition-colors">
            <Home className="h-5 w-5" />
            <span className="hidden sm:inline">SEO Playground</span>
          </Link>

          <div className="flex items-center gap-1">
            <Link href="/">
              <Button variant={isActive('/') && pathname === '/' ? 'default' : 'ghost'} size="sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>

            {/* Shop Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Button variant={isActive('/shop') ? 'default' : 'ghost'} size="sm">
                <ShoppingBag className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Shop</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="z-50">
                <DropdownMenuItem asChild>
                  <Link href="/shop" className="w-full cursor-pointer">
                    All Categories
                  </Link>
                </DropdownMenuItem>
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat.id} asChild>
                    <Link href={`/shop/${cat.slug}`} className="w-full cursor-pointer">
                      {cat.name}
            </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* SEO Lab */}
            <Link href="/playground">
              <Button variant={isActive('/playground') ? 'default' : 'ghost'} size="sm">
                <Beaker className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">SEO Lab</span>
              </Button>
            </Link>

            <Link href="/best-practices">
              <Button variant={isActive('/best-practices') ? 'default' : 'ghost'} size="sm">
                <Settings className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Best Practices</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={isDocsActive ? 'default' : 'ghost'} size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Docs</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="z-50">
                <DropdownMenuItem asChild>
                  <Link href="/docs" className="w-full cursor-pointer">
                    Documentation Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about" className="w-full cursor-pointer">
                    About This Project
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/how-it-works" className="w-full cursor-pointer">
                    How It Works
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/concepts" className="w-full cursor-pointer">
                    SEO Concepts
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
