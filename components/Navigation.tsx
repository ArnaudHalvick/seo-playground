'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ShoppingBag, Search, Home, BookOpen, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  const isDocsActive = isActive('/docs') || isActive('/concepts') || isActive('/about') || isActive('/how-it-works');

  return (
    <nav className="border-b bg-white sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:text-blue-600 transition-colors">
            <Home className="h-5 w-5" />
            <span className="hidden sm:inline">SEO Best Practices</span>
          </Link>

          <div className="flex items-center gap-1">
            <Link href="/">
              <Button variant={isActive('/') && pathname === '/' ? 'default' : 'ghost'} size="sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>

            <Link href="/catalog">
              <Button variant={isActive('/catalog') ? 'default' : 'ghost'} size="sm">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Catalog
              </Button>
            </Link>

            <Link href="/search">
              <Button variant={isActive('/search') ? 'default' : 'ghost'} size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
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
