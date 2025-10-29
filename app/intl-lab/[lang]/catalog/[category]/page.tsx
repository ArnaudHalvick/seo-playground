import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Globe, Info } from 'lucide-react';
import { getCategory, getProductsByCategory, getCategories } from '@/lib/catalog/data';
import { generateHreflangLinks } from '@/lib/rules/hreflang';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    lang: string;
    category: string;
  };
}

export function generateStaticParams() {
  const categories = getCategories();
  const langs = ['en', 'fr'];
  const params = [];

  for (const lang of langs) {
    for (const category of categories) {
      params.push({
        lang,
        category: category.slug,
      });
    }
  }

  return params;
}

const translations: Record<string, Record<string, string>> = {
  en: {
    title: 'International SEO Lab',
    backHome: 'Back to Home',
    hreflangTitle: 'Hreflang Links',
    hreflangDesc: 'These hreflang links tell search engines about language variants of this page',
    productsTitle: 'Products',
    currentLang: 'Current Language',
    alternates: 'Language Alternates',
  },
  fr: {
    title: 'Laboratoire SEO International',
    backHome: 'Retour à l\'accueil',
    hreflangTitle: 'Liens Hreflang',
    hreflangDesc: 'Ces liens hreflang indiquent aux moteurs de recherche les variantes linguistiques de cette page',
    productsTitle: 'Produits',
    currentLang: 'Langue actuelle',
    alternates: 'Variantes linguistiques',
  },
};

export default function IntlCategoryPage({ params }: PageProps) {
  if (!['en', 'fr'].includes(params.lang)) {
    notFound();
  }

  const category = getCategory(params.category);
  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(params.category);
  const t = translations[params.lang];
  const pathname = `/intl-lab/${params.lang}/catalog/${params.category}`;
  const { alternates } = generateHreflangLinks(pathname, params.lang);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.backHome}
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Alert className="mb-6 border-blue-300 bg-blue-50">
          <Info className="h-4 w-4" />
          <AlertDescription>
            This page demonstrates international SEO with hreflang implementation. Check the SEO Receipt to see language alternates. View source to see hreflang links in the HTML.
          </AlertDescription>
        </Alert>

        <div className="flex items-center gap-3 mb-6">
          <Globe className="h-8 w-8 text-indigo-600" />
          <div>
            <h1 className="text-4xl font-bold">{t.title}</h1>
            <p className="text-lg text-slate-600">{category.name}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{t.productsTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {products.slice(0, 4).map((product) => (
                    <div key={product.id} className="border rounded-lg p-4">
                      <div className="aspect-square bg-slate-200 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-3xl">
                          {product.color === 'white'
                            ? '⚪'
                            : product.color === 'black'
                            ? '⚫'
                            : product.color === 'blue'
                            ? '🔵'
                            : product.color === 'red'
                            ? '🔴'
                            : product.color === 'green'
                            ? '🟢'
                            : '🟤'}
                        </span>
                      </div>
                      <h3 className="font-semibold mb-1">{product.title}</h3>
                      <p className="text-sm text-slate-600">${product.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.currentLang}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="text-lg" variant="default">
                  {params.lang.toUpperCase()}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.alternates}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href={`/intl-lab/en/catalog/${params.category}`}>
                  <Button
                    variant={params.lang === 'en' ? 'default' : 'outline'}
                    className="w-full justify-start"
                  >
                    🇺🇸 English
                  </Button>
                </Link>
                <Link href={`/intl-lab/fr/catalog/${params.category}`}>
                  <Button
                    variant={params.lang === 'fr' ? 'default' : 'outline'}
                    className="w-full justify-start"
                  >
                    🇫🇷 Français
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.hreflangTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">{t.hreflangDesc}</p>
                <div className="space-y-2 text-xs font-mono bg-slate-900 text-green-400 p-3 rounded-lg">
                  {alternates.map((alt, idx) => (
                    <div key={idx} className="break-all">
                      {alt.hreflang}: {alt.href}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Hreflang Best Practices</h3>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• All language variants must reference each other (reciprocity)</li>
              <li>• Include self-referential hreflang link</li>
              <li>• Add x-default for fallback language</li>
              <li>• Use consistent URLs across all variants</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
