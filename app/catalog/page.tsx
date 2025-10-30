import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowRight, Info } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Catalog', href: '/catalog' }]} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Demo Product Catalog</h1>
          <p className="text-lg text-slate-600 mb-4">
            Browse this demo catalog to see SEO best practices in action. This is an educational showcase, not a real store.
          </p>

          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>How to use:</strong> Click the demo chips below to see how different URL parameters affect indexability, canonical URLs, robots.txt decisions, and sitemap inclusion. Watch the SEO Receipt update in real-time!
            </AlertDescription>
          </Alert>
        </div>

        <Card className="hover:shadow-lg transition-shadow border-2">
          <CardHeader>
            <CardTitle className="text-2xl">T-Shirts Collection</CardTitle>
            <CardDescription>Explore how parameters affect SEO with this demo category</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/catalog/t-shirts">
              <Button className="w-full" size="lg">
                Browse T-Shirts Collection
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
