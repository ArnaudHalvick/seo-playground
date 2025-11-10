import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  ShoppingCart, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Info,
  TrendingDown,
  Calendar,
  CircleDot
} from 'lucide-react';

export default function LifecycleTab() {
  return (
    <div className="space-y-6">
      {/* Temporarily Out of Stock */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-amber-600" />
            Temporarily Out-of-Stock Products
          </CardTitle>
          <CardDescription>
            How to handle products that will return to inventory
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-amber-300 bg-amber-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Critical Rule:</strong> Never 404 or remove a page for temporarily out-of-stock products. 
              You'll lose rankings and have to rebuild them when the product returns.
            </AlertDescription>
          </Alert>

          <div className="bg-green-50 border-2 border-green-300 p-4 rounded">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <h4 className="font-semibold">Recommended Strategy</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-green-800">1.</span>
                <div>
                  <strong>Keep page live</strong> with prominent "Out of Stock" message
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-green-800">2.</span>
                <div>
                  <strong>Maintain indexing:</strong> Use <code className="bg-white px-1 rounded text-xs">index,follow</code> (200 status)
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-green-800">3.</span>
                <div>
                  <strong>Update schema markup:</strong> Set <code className="bg-white px-1 rounded text-xs">availability: "OutOfStock"</code>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-green-800">4.</span>
                <div>
                  <strong>Show expected restock date</strong> if known (also in structured data)
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-green-800">5.</span>
                <div>
                  <strong>Offer alternatives:</strong> "Similar Products" section keeps users engaged
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-green-800">6.</span>
                <div>
                  <strong>Email notifications:</strong> Let users sign up for restock alerts
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
            <div className="text-blue-400">// Product schema for out-of-stock</div>
            <div>{'{'}</div>
            <div className="pl-4">"@type": "Product",</div>
            <div className="pl-4">"name": "Nike Air Max 90",</div>
            <div className="pl-4 text-amber-400">"offers": {'{'}</div>
            <div className="pl-8">"@type": "Offer",</div>
            <div className="pl-8">"price": "129.99",</div>
            <div className="pl-8 text-red-400">"availability": "https://schema.org/OutOfStock",</div>
            <div className="pl-8 text-green-400">"availabilityStarts": "2024-12-01"</div>
            <div className="pl-4">{'}'}</div>
            <div>{'}'}</div>
          </div>
        </CardContent>
      </Card>

      {/* Permanently Discontinued */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            Permanently Discontinued Products
          </CardTitle>
          <CardDescription>
            When products won't return, your strategy depends on the situation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">
            Use this decision tree to determine the right approach:
          </p>

          <div className="space-y-4">
            {/* Decision 1: Replacement exists */}
            <Card className="border-2 border-blue-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Has a Direct Replacement?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-green-800">If YES → 301 Redirect</strong>
                    <div className="text-slate-700 mt-1">
                      Example: Nike Air Max 90 discontinued, replaced by Air Max 91<br/>
                      Action: <code className="bg-slate-100 px-1 rounded">/air-max-90</code> → 301 → <code className="bg-slate-100 px-1 rounded">/air-max-91</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decision 2: Popular page with links */}
            <Card className="border-2 border-purple-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Has Traffic & Backlinks?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-purple-800">If YES → Keep Page Live</strong>
                    <div className="text-slate-700 mt-1">
                      Show "No Longer Available" message with similar products<br/>
                      Options:<br/>
                      • Return 410 status but keep content visible<br/>
                      • Or keep 200 status with noindex,follow<br/>
                      Preserves link equity and provides value to visitors
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decision 3: No value */}
            <Card className="border-2 border-red-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">No Traffic, No Links, No Value?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2 text-xs">
                  <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-800">If YES → 404 or 410</strong>
                    <div className="text-slate-700 mt-1">
                      <strong>404:</strong> "Not found" - might come back someday<br/>
                      <strong>410:</strong> "Gone permanently" - faster removal from index<br/>
                      Use 410 when you're certain it won't return
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Alert className="border-slate-300 bg-slate-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>410 vs 404 Explained:</strong><br/>
              • <strong>404 (Not Found):</strong> "We can't find this right now" - crawlers will keep checking<br/>
              • <strong>410 (Gone):</strong> "This is permanently gone" - crawlers remove faster and stop checking<br/>
              Use 410 for discontinued products to speed up index cleanup.
            </AlertDescription>
          </Alert>

          <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
            <div className="text-blue-400">// Setting 410 status in Next.js</div>
            <div>export default function ProductPage() {'{'}</div>
            <div className="pl-4">const product = await getProduct(slug);</div>
            <div className="pl-4 text-red-400">if (product.status === 'discontinued') {'{'}</div>
            <div className="pl-8">return notFound(); // Returns 404</div>
            <div className="pl-8 text-slate-400">// Or use Response with 410</div>
            <div className="pl-8 text-green-400">return new Response(null, {'{ status: 410 }'})</div>
            <div className="pl-4">{'}'}</div>
            <div>{'}'}</div>
          </div>
        </CardContent>
      </Card>

      {/* Seasonal Products */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            Seasonal Products
          </CardTitle>
          <CardDescription>
            Products that come and go with seasons or holidays
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded">
            <h4 className="font-semibold text-sm mb-2">Strategy: Keep Pages Live Year-Round</h4>
            <p className="text-xs text-slate-700 mb-3">
              Don't create/delete seasonal product pages each season. Keep them permanently and update availability.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Off-Season:</strong> Show "Available Fall 2024" or "Back in October"
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>In-Season:</strong> Normal product page with "Add to Cart"
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Schema:</strong> Use <code className="bg-white px-1 rounded">availabilityStarts</code> and <code className="bg-white px-1 rounded">availabilityEnds</code>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-green-300 bg-green-50">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Benefits:</strong> Prevents losing rankings during off-season. When the product returns, 
              it immediately benefits from accumulated authority instead of starting over as a new page.
            </AlertDescription>
          </Alert>

          <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
            <div className="text-blue-400">// Seasonal product schema example</div>
            <div>{'{'}</div>
            <div className="pl-4">"@type": "Product",</div>
            <div className="pl-4">"name": "Halloween Costume - Vampire",</div>
            <div className="pl-4">"offers": {'{'}</div>
            <div className="pl-8 text-green-400">"availabilityStarts": "2024-09-01",</div>
            <div className="pl-8 text-green-400">"availabilityEnds": "2024-11-01",</div>
            <div className="pl-8">"availability": "PreOrder" // or "InStock"</div>
            <div className="pl-4">{'}'}</div>
            <div>{'}'}</div>
          </div>
        </CardContent>
      </Card>

      {/* Price Changes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircleDot className="h-5 w-5 text-green-600" />
            Price Changes & Sales
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-green-300 bg-green-50">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Simple Rule:</strong> Never create new URLs for price changes or sales. 
              Update the price on the existing page and in structured data.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-green-300 bg-green-50 p-3 rounded">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-sm">Correct Approach</span>
              </div>
              <div className="text-xs space-y-1">
                <div>• Keep same URL</div>
                <div>• Update price in database</div>
                <div>• Update Product schema</div>
                <div>• Use priceValidUntil for sales</div>
                <div className="pt-2 font-mono text-green-700">
                  /product/air-max-90
                </div>
              </div>
            </div>

            <div className="border-2 border-red-300 bg-red-50 p-3 rounded">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <span className="font-semibold text-sm">Don't Do This</span>
              </div>
              <div className="text-xs space-y-1">
                <div>• Create sale-specific URLs</div>
                <div>• Use price in URL slugs</div>
                <div>• Duplicate pages for sales</div>
                <div>• Creates duplicate content!</div>
                <div className="pt-2 font-mono text-red-700">
                  /product/air-max-90-sale<br/>
                  /product/air-max-90-99
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
            <div className="text-blue-400">// Sale price in schema</div>
            <div>"offers": {'{'}</div>
            <div className="pl-4">"@type": "Offer",</div>
            <div className="pl-4 text-green-400">"price": "99.99", // Sale price</div>
            <div className="pl-4 text-green-400">"priceValidUntil": "2024-12-31",</div>
            <div className="pl-4">"priceCurrency": "USD"</div>
            <div>{'}'}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

