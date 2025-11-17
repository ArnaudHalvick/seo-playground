import Link from "next/link";
import { ExternalLink, Code2, Lightbulb, FlaskConical } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Section - Attribution */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">
              Built by Arnaud Halvick
            </h3>
            <p className="text-sm font-medium text-slate-700">
              SEO Consultant | Strategic + Technical SEO Expert
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="bg-slate-200 px-2 py-1 rounded">12,000+ hours</span>
              <span className="bg-slate-200 px-2 py-1 rounded">100% Job Success</span>
              <span className="bg-slate-200 px-2 py-1 rounded">Top Rated</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mt-4">
              Full-Stack JavaScript Developer with 7+ years of SEO/SEM expertise. 
              I bridge the gap between strategic planning and technical implementation.
            </p>
          </div>

          {/* Center Section - Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Explore
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/technical-seo"
                className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Code2 className="h-4 w-4" />
                Technical SEO
              </Link>
              <Link
                href="/strategic-seo"
                className="flex items-center gap-2 text-sm text-slate-700 hover:text-purple-600 transition-colors"
              >
                <Lightbulb className="h-4 w-4" />
                Strategic SEO
              </Link>
              <Link
                href="/shop"
                className="flex items-center gap-2 text-sm text-slate-700 hover:text-indigo-600 transition-colors"
              >
                <FlaskConical className="h-4 w-4" />
                Interactive Demo
              </Link>
            </nav>
          </div>

          {/* Right Section - External Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://arnaudhalvick.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 transition-colors group"
              >
                <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                View Portfolio
              </a>
              <a
                href="https://www.upwork.com/freelancers/~017740c356da4ab81f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-700 hover:text-green-600 transition-colors group"
              >
                <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Hire on Upwork
              </a>
              <a
                href="https://github.com/ArnaudHalvick"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors group"
              >
                <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                View GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-8 pt-6 text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Arnaud Halvick. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            MIT License - Free to use for learning and reference.
          </p>
        </div>
      </div>
    </footer>
  );
}

