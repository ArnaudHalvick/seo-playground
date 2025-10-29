import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getCategories } from '@/lib/catalog/data';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function CatalogPage() {
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Catalog', href: '/catalog' }]} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Product Catalog</h1>
          <p className="text-lg text-slate-600">
            Browse our demo catalog. Try adding URL parameters like ?sort=price_desc or ?color=blue to see how SEO rules apply.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow border-2">
              <CardHeader>
                <CardTitle className="text-2xl">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href={`/catalog/${category.slug}`}>
                    <Button className="w-full">
                      Browse {category.name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                  <div className="flex gap-2 flex-wrap">
                    <Link href={`/catalog/${category.slug}?sort=price_asc`}>
                      <Button variant="outline" size="sm">
                        + Sort
                      </Button>
                    </Link>
                    <Link href={`/catalog/${category.slug}?color=blue`}>
                      <Button variant="outline" size="sm">
                        + Color
                      </Button>
                    </Link>
                    <Link href={`/catalog/${category.slug}?sort=price_desc&color=black`}>
                      <Button variant="destructive" size="sm">
                        + Multi-Param (Blocked)
                      </Button>
                    </Link>
                    <Link href={`/catalog/${category.slug}?page=2`}>
                      <Button variant="outline" size="sm">
                        + Page 2
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
