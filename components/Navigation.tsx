"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Settings, ShoppingBag, Home, Beaker } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <nav className="border-b bg-white sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg hover:text-blue-600 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span className="hidden sm:inline">SEO Playground</span>
          </Link>

          <div className="flex items-center gap-1">
            <Link href="/">
              <Button variant={isActive("/") && pathname === "/" ? "default" : "ghost"} size="sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>

            {/* Shop Link */}
            <Link href="/shop">
              <Button variant={isActive("/shop") ? "default" : "ghost"} size="sm">
                <ShoppingBag className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Shop</span>
              </Button>
            </Link>

            {/* Pattern Gallery */}
            <Link href="/pattern-gallery">
              <Button variant={isActive("/pattern-gallery") ? "default" : "ghost"} size="sm">
                <Beaker className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Pattern Gallery</span>
              </Button>
            </Link>

            <Link href="/best-practices">
              <Button variant={isActive("/best-practices") ? "default" : "ghost"} size="sm">
                <Settings className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Best Practices</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
