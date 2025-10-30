import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Info, Settings } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Docs', href: '/docs' }]} />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-lg text-slate-600">
            Learn about technical SEO concepts and how this playground works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/about">
            <Card className="hover:shadow-lg transition-shadow border-2 h-full cursor-pointer">
              <CardHeader>
                <Info className="h-8 w-8 mb-2 text-blue-600" />
                <CardTitle>About This Project</CardTitle>
                <CardDescription>
                  Learn about the purpose, features, and tech stack of this SEO playground
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Discover what&apos;s included, what&apos;s intentionally out of scope, and the technologies used to build this interactive learning tool.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/how-it-works">
            <Card className="hover:shadow-lg transition-shadow border-2 h-full cursor-pointer">
              <CardHeader>
                <Settings className="h-8 w-8 mb-2 text-green-600" />
                <CardTitle>How It Works</CardTitle>
                <CardDescription>
                  Understand the architecture and implementation details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Explore how rule configuration, SEO computation, and real-time feedback work together to create an interactive learning experience.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/concepts">
            <Card className="hover:shadow-lg transition-shadow border-2 h-full cursor-pointer md:col-span-2">
              <CardHeader>
                <BookOpen className="h-8 w-8 mb-2 text-purple-600" />
                <CardTitle>SEO Concepts</CardTitle>
                <CardDescription>
                  Deep dive into technical SEO fundamentals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Comprehensive explanations of robots.txt, meta robots, canonical URLs, parameter handling, duplicate content, and more. Essential knowledge for mastering technical SEO.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
