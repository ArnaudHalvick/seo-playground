"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { 
  ShoppingBag, 
  Home, 
  ChevronDown, 
  Menu,
  Bot,
  Map,
  Settings,
  Copy,
  List,
  Search,
  Layers,
  Lock,
  Globe,
  Beaker,
  Code2
} from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  // Category navigation structure
  const categories = [
    {
      name: "Core Fundamentals",
      items: [
        { name: "Robots.txt", path: "/robots", icon: Bot },
        { name: "Sitemap", path: "/sitemap", icon: Map },
        { name: "Parameters", path: "/parameters", icon: Settings },
        { name: "Duplicate Content", path: "/duplicate-content", icon: Copy },
      ],
    },
    {
      name: "Content Patterns",
      items: [
        { name: "Pagination", path: "/pagination", icon: List },
        { name: "Site Search", path: "/site-search", icon: Search },
        { name: "Site Architecture", path: "/site-architecture", icon: Layers },
      ],
    },
    {
      name: "Advanced Topics",
      items: [
        { name: "Protected Routes", path: "/protected-routes", icon: Lock },
        { name: "International SEO", path: "/international", icon: Globe },
      ],
    },
    {
      name: "Tools & Resources",
      items: [
        { name: "Pattern Gallery", path: "/pattern-gallery", icon: Beaker },
        { name: "Structured Data", path: "/structured-data", icon: Code2 },
      ],
    },
  ];

  const isCategoryActive = (category: typeof categories[0]) => {
    return category.items.some(item => isActive(item.path));
  };

  return (
    <nav className="border-b bg-white sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg hover:text-blue-600 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span className="hidden sm:inline">SEO Workshop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Home Button */}
            <Link href="/">
              <Button variant={isActive("/") && pathname === "/" ? "default" : "ghost"} size="sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>

            {/* Shop Button */}
            <Link href="/shop">
              <Button variant={isActive("/shop") ? "default" : "ghost"} size="sm">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Shop
              </Button>
            </Link>

            {/* Category Dropdowns */}
            {categories.map((category) => (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant={isCategoryActive(category) ? "default" : "ghost"} 
                    size="sm"
                    className="gap-1"
                  >
                    {category.name}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {category.items.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link 
                        href={item.path}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <div className="flex flex-col gap-4 mt-8">
                  {/* Home Link */}
                  <Link 
                    href="/" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-md"
                  >
                    <Home className="h-5 w-5" />
                    <span className="font-semibold">Home</span>
                  </Link>

                  {/* Shop Link */}
                  <Link 
                    href="/shop" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-md"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span className="font-semibold">Shop</span>
                  </Link>

                  {/* Categories */}
                  {categories.map((category) => (
                    <div key={category.name} className="border-t pt-4">
                      <h3 className="px-4 text-sm font-semibold text-slate-900 mb-2">
                        {category.name}
                      </h3>
                      <div className="flex flex-col">
                        {category.items.map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-2 hover:bg-slate-100 rounded-md ${
                              isActive(item.path) ? 'bg-slate-100 font-medium' : ''
                            }`}
                          >
                            <item.icon className="h-4 w-4" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
