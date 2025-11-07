import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import { getCategories } from '@/lib/catalog/data';

export const metadata: Metadata = {
  title: "Interactive Demo - SEO Workshop",
  description: "Live SEO demonstration with real-time feedback. Apply filters and see canonical URLs, indexability, and crawl trap warnings.",
};

export default function CatalogPage() {
  const categories = getCategories();
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Shop Our Collection</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Browse our product categories and experience professional e-commerce filtering with real-time SEO analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <Card key={cat.id} className="hover:shadow-xl transition-all hover:scale-[1.02]">
          <CardHeader>
                <CardTitle className="text-3xl">{cat.name}</CardTitle>
                <CardDescription className="text-base">{cat.description}</CardDescription>
          </CardHeader>
          <CardContent>
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">
                    {cat.slug === 't-shirts' ? '👕' : '👟'}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/shop/${cat.slug}`} className="w-full">
              <Button className="w-full" size="lg">
                    Browse {cat.name}
                    <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
              </CardFooter>
        </Card>
          ))}
        </div>
      </div>
  );
}
