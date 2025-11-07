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
  SheetHeader,
  SheetTitle,
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
  Code2,
  Package,
  Zap,
  FlaskConical,
  Wrench,
  Target,
  FileText,
  Users,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");
  
  // Determine current section
  const isStrategicSection = pathname.startsWith("/strategic-seo");
  const isTechnicalSection = pathname.startsWith("/technical-seo") || 
    (!pathname.startsWith("/strategic-seo") && pathname !== "/");
  const isHomePage = pathname === "/";

  // Technical SEO categories
  const technicalCategories = [
    {
      name: "Core Fundamentals",
      items: [
        { name: "Robots.txt", path: "/technical-seo/robots", icon: Bot },
        { name: "Sitemap", path: "/technical-seo/sitemap", icon: Map },
        { name: "Parameters", path: "/technical-seo/parameters", icon: Settings },
        { name: "Duplicate Content", path: "/technical-seo/duplicate-content", icon: Copy },
      ],
    },
    {
      name: "Content Patterns",
      items: [
        { name: "Pagination", path: "/technical-seo/pagination", icon: List },
        { name: "Site Search", path: "/technical-seo/site-search", icon: Search },
        { name: "Site Architecture", path: "/technical-seo/site-architecture", icon: Layers },
      ],
    },
    {
      name: "Advanced Topics",
      items: [
        { name: "Core Web Vitals", path: "/technical-seo/core-web-vitals", icon: Zap },
        { name: "Protected Routes", path: "/technical-seo/protected-routes", icon: Lock },
        { name: "International SEO", path: "/technical-seo/international", icon: Globe },
        { name: "Product URLs & Database", path: "/technical-seo/product-urls", icon: Package },
      ],
    },
    {
      name: "Tools & Resources",
      items: [
        { name: "Pattern Gallery", path: "/technical-seo/pattern-gallery", icon: Beaker },
        { name: "Structured Data", path: "/technical-seo/structured-data", icon: Code2 },
        { name: "SEO Dev Tools", path: "/technical-seo/seo-dev-tools", icon: Wrench },
      ],
    },
  ];

  // Strategic SEO categories
  const strategicCategories = [
    {
      name: "Strategy & Planning",
      items: [
        { name: "Research & Strategy", path: "/strategic-seo/research-strategy", icon: Target },
        { name: "Content Architecture", path: "/strategic-seo/content-architecture", icon: FileText },
      ],
    },
    {
      name: "Production & Growth",
      items: [
        { name: "Content Production", path: "/strategic-seo/content-production", icon: Users },
        { name: "Measurement & Optimization", path: "/strategic-seo/measurement-optimization", icon: BarChart3 },
        { name: "Authority Building", path: "/strategic-seo/authority-building", icon: TrendingUp },
        { name: "Tools & Resources", path: "/strategic-seo/tools", icon: Wrench },
      ],
    },
  ];

  const categories = isStrategicSection ? strategicCategories : technicalCategories;

  const isCategoryActive = (category: typeof categories[0]) => {
    return category.items.some(item => isActive(item.path));
  };

  return (
    <nav className="border-b bg-white fixed top-0 left-0 right-0 z-40 shadow-sm">
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
            {/* Section Switcher - only show when not on homepage */}
            {!isHomePage && (
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1 border-purple-300">
                    <span className="font-semibold">
                      {isStrategicSection ? "Strategic SEO" : "Technical SEO"}
                    </span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/technical-seo" className="flex items-center gap-2 cursor-pointer">
                      <Code2 className="h-4 w-4" />
                      Technical SEO
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/strategic-seo" className="flex items-center gap-2 cursor-pointer">
                      <Target className="h-4 w-4" />
                      Strategic SEO
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Interactive Demo Button - only show in technical section */}
            {isTechnicalSection && !isHomePage && (
              <Link href="/shop">
                <Button variant={isActive("/shop") ? "default" : "ghost"} size="sm">
                  <FlaskConical className="h-4 w-4 mr-2" />
                  Interactive Demo
                </Button>
              </Link>
            )}

            {/* Category Dropdowns */}
            {!isHomePage && categories.map((category) => (
              <DropdownMenu key={category.name} modal={false}>
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
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {/* Section Switcher - only show when not on homepage */}
                  {!isHomePage && (
                    <div className="border-b pb-4">
                      <h3 className="px-4 text-xs font-semibold text-slate-500 mb-2 uppercase">
                        Current Section
                      </h3>
                      <div className="flex flex-col gap-2">
                        <Link 
                          href="/technical-seo" 
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                            isTechnicalSection ? 'bg-blue-100 font-semibold text-blue-900' : 'hover:bg-slate-100'
                          }`}
                        >
                          <Code2 className="h-5 w-5" />
                          <span>Technical SEO</span>
                        </Link>
                        <Link 
                          href="/strategic-seo" 
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                            isStrategicSection ? 'bg-purple-100 font-semibold text-purple-900' : 'hover:bg-slate-100'
                          }`}
                        >
                          <Target className="h-5 w-5" />
                          <span>Strategic SEO</span>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Interactive Demo Link - only show in technical section */}
                  {isTechnicalSection && !isHomePage && (
                    <Link 
                      href="/shop" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-md border-b pb-4"
                    >
                      <FlaskConical className="h-5 w-5" />
                      <span className="font-semibold">Interactive Demo</span>
                    </Link>
                  )}

                  {/* Categories */}
                  {!isHomePage && categories.map((category) => (
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
