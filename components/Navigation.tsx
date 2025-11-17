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
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
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
  Briefcase,
  ExternalLink,
} from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  // Determine current section
  const isStrategicSection = pathname.startsWith("/strategic-seo");
  const isTechnicalSection =
    pathname.startsWith("/technical-seo") ||
    (!pathname.startsWith("/strategic-seo") && pathname !== "/");
  const isHomePage = pathname === "/";

  // Determine if on section homepage
  const isTechnicalHomepage = pathname === "/technical-seo";
  const isStrategicHomepage = pathname === "/strategic-seo";
  const isOnSubPage =
    (isTechnicalSection && !isTechnicalHomepage) || (isStrategicSection && !isStrategicHomepage);

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
        {
          name: "Content Architecture",
          path: "/strategic-seo/content-architecture",
          icon: FileText,
        },
      ],
    },
    {
      name: "Production & Growth",
      items: [
        { name: "Content Production", path: "/strategic-seo/content-production", icon: Users },
        {
          name: "Measurement & Optimization",
          path: "/strategic-seo/measurement-optimization",
          icon: BarChart3,
        },
        { name: "Authority Building", path: "/strategic-seo/authority-building", icon: TrendingUp },
      ],
    },
    {
      name: "Tools & Resources",
      items: [
        { name: "Strategic Tools", path: "/strategic-seo/strategic-tools", icon: Search },
        { name: "Resources", path: "/strategic-seo/resources", icon: FileText },
      ],
    },
  ];

  const categories = isStrategicSection ? strategicCategories : technicalCategories;

  const isCategoryActive = (category: (typeof categories)[0]) => {
    return category.items.some((item) => isActive(item.path));
  };

  return (
    <nav className="border-b bg-white fixed top-0 left-0 right-0 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Section Switcher */}
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg hover:text-blue-600 transition-colors"
            >
              <Home className="h-5 w-5" />
              <span className="hidden sm:inline">SEO Workshop</span>
            </Link>

            {/* Section Switcher Button - only show when not on homepage */}
            {!isHomePage && (
              <>
                {isStrategicSection ? (
                  <Link href="/technical-seo">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Switch to Technical SEO
                    </Button>
                  </Link>
                ) : (
                  <Link href="/strategic-seo">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      Switch to Strategic SEO
                    </Button>
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {/* Homepage Navigation - show main section links */}
            {isHomePage && (
              <>
                <Link href="/technical-seo">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Technical SEO
                  </Button>
                </Link>
                <Link href="/strategic-seo">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                    Strategic SEO
                  </Button>
                </Link>
              </>
            )}

            {/* Section Home Button - show when on sub-pages */}
            {isOnSubPage && (
              <Link href={isStrategicSection ? "/strategic-seo" : "/technical-seo"}>
                <Button variant="outline" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Section Home
                </Button>
              </Link>
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
            {!isHomePage &&
              categories.map((category) => (
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
                        <Link href={item.path} className="flex items-center gap-2 cursor-pointer">
                          <item.icon className="h-4 w-4" />
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}

            {/* Hire Me CTA */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white gap-1"
                >
                  <Briefcase className="h-4 w-4" />
                  Hire Me
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <div className="px-3 py-2 border-b">
                  <p className="font-semibold text-sm text-slate-900">Arnaud Halvick</p>
                  <p className="text-xs text-slate-600">Strategic + Technical SEO Expert</p>
                </div>
                <div className="px-3 py-2 border-b">
                  <p className="text-xs text-slate-600">
                    12,000+ hrs | 100% Job Success | Top Rated
                  </p>
                </div>
                <DropdownMenuItem asChild>
                  <a
                    href="https://arnaudhalvick.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Portfolio
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.upwork.com/freelancers/~017740c356da4ab81f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Hire on Upwork
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://github.com/ArnaudHalvick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View GitHub
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                  {/* Homepage Navigation - show main section links */}
                  {isHomePage && (
                    <div className="border-b pb-4">
                      <h3 className="px-4 text-xs font-semibold text-slate-500 mb-2 uppercase">
                        Choose Your Path
                      </h3>
                      <div className="px-4 space-y-2">
                        <Link href="/technical-seo" onClick={() => setMobileMenuOpen(false)}>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Technical SEO
                          </Button>
                        </Link>
                        <Link href="/strategic-seo" onClick={() => setMobileMenuOpen(false)}>
                          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                            Strategic SEO
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Section Home Button - show when on sub-pages */}
                  {isOnSubPage && (
                    <Link
                      href={isStrategicSection ? "/strategic-seo" : "/technical-seo"}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-md border-b pb-4"
                    >
                      <Home className="h-5 w-5" />
                      <span className="font-semibold">Section Home</span>
                    </Link>
                  )}

                  {/* Section Switcher - only show when not on homepage */}
                  {!isHomePage && (
                    <div className="border-b pb-4">
                      <h3 className="px-4 text-xs font-semibold text-slate-500 mb-2 uppercase">
                        Switch Section
                      </h3>
                      <div className="px-4">
                        {isStrategicSection ? (
                          <Link href="/technical-seo" onClick={() => setMobileMenuOpen(false)}>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                              Switch to Technical SEO
                            </Button>
                          </Link>
                        ) : (
                          <Link href="/strategic-seo" onClick={() => setMobileMenuOpen(false)}>
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                              Switch to Strategic SEO
                            </Button>
                          </Link>
                        )}
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
                  {!isHomePage &&
                    categories.map((category) => (
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
                                isActive(item.path) ? "bg-slate-100 font-medium" : ""
                              }`}
                            >
                              <item.icon className="h-4 w-4" />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                  {/* Hire Me Section - Mobile */}
                  <div className="border-t pt-4 mt-4">
                    <h3 className="px-4 text-sm font-semibold text-slate-900 mb-2">Hire Me</h3>
                    <div className="px-4 mb-3">
                      <p className="text-sm font-medium text-slate-900">Arnaud Halvick</p>
                      <p className="text-xs text-slate-600">Strategic + Technical SEO Expert</p>
                      <p className="text-xs text-slate-500 mt-1">
                        12,000+ hrs | 100% Job Success | Top Rated
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 px-4">
                      <a
                        href="https://arnaudhalvick.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Portfolio
                      </a>
                      <a
                        href="https://www.upwork.com/freelancers/~017740c356da4ab81f"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-md text-sm font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Hire on Upwork
                      </a>
                      <a
                        href="https://github.com/ArnaudHalvick"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
