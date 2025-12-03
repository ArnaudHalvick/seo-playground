import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Link2, Database, Code2, ArrowRight } from 'lucide-react';

interface ProductEducationCardsProps {
  productSlug: string;
}

export function ProductEducationCards({ productSlug }: ProductEducationCardsProps) {
  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Card 1 - URL Structure */}
        <Card className="hover:shadow-md transition-shadow border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="pt-6 pb-5 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Link2 className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-base">Clean URL Structure</h3>
            </div>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed flex-1">
              This URL uses clean paths (<code className="bg-white px-1.5 py-0.5 rounded text-xs border">/for/women/</code>) instead of parameters. 
              Gender and category are in the path for better SEO. <strong>Simple now, but critical at scale.</strong>
            </p>
            <Link 
              href="/technical-seo/product-urls#url-structure"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group"
            >
              Learn more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </CardContent>
        </Card>

        {/* Card 2 - Database Management */}
        <Card className="hover:shadow-md transition-shadow border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white">
          <CardContent className="pt-6 pb-5 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Database className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-base">Database Management</h3>
            </div>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed flex-1">
              Product slug <code className="bg-white px-1.5 py-0.5 rounded text-xs border font-mono">{productSlug}</code> stored 
              with unique constraint. Old slugs auto-redirect via slug_history table. <strong>Managing thousands of products over years requires this structure.</strong>
            </p>
            <Link 
              href="/technical-seo/product-urls#database"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors group"
            >
              Learn more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </CardContent>
        </Card>

        {/* Card 3 - Schema.org Markup */}
        <Card className="hover:shadow-md transition-shadow border-2 border-indigo-100 bg-gradient-to-br from-indigo-50 to-white">
          <CardContent className="pt-6 pb-5 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Code2 className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-base">Schema.org Markup</h3>
            </div>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed flex-1">
              Product schema includes price, availability, and images. 
              Enables rich snippets in Google search results. <strong>Essential for e-commerce visibility.</strong>
            </p>
            <Link 
              href="/technical-seo/structured-data"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors group"
            >
              Learn more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

