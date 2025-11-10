import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Database, 
  CheckCircle2, 
  Info, 
  AlertTriangle,
  Link2,
  CircleDot,
  Box
} from 'lucide-react';

export default function DatabaseTab() {
  return (
    <div className="space-y-6">
      {/* Core Tables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-indigo-600" />
            Core Database Schema for SEO
          </CardTitle>
          <CardDescription>
            Table structure that supports SEO-friendly product management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">
            A well-designed database makes SEO management easy. Here's the essential schema:
          </p>

          <div className="space-y-4">
            {/* Products Table */}
            <div className="border border-slate-300 rounded overflow-hidden">
              <div className="bg-indigo-100 px-4 py-2 font-semibold text-sm">
                products
              </div>
              <div className="p-4 bg-white">
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <div className="font-semibold text-slate-600">Column</div>
                  <div className="font-semibold text-slate-600">Type</div>
                  <div className="font-semibold text-slate-600">Purpose</div>
                  
                  <div>id</div>
                  <div className="text-blue-600">INT</div>
                  <div>Primary key</div>
                  
                  <div>name</div>
                  <div className="text-blue-600">VARCHAR(255)</div>
                  <div>Display name</div>
                  
                  <div className="text-green-600">slug</div>
                  <div className="text-blue-600">VARCHAR(255)</div>
                  <div>URL slug (unique)</div>
                  
                  <div>description</div>
                  <div className="text-blue-600">TEXT</div>
                  <div>Product description</div>
                  
                  <div className="text-green-600">status</div>
                  <div className="text-blue-600">ENUM</div>
                  <div>active/out_of_stock/discontinued</div>
                  
                  <div>created_at</div>
                  <div className="text-blue-600">TIMESTAMP</div>
                  <div>Creation date</div>
                </div>
              </div>
            </div>

            {/* Product Slug History */}
            <div className="border border-slate-300 rounded overflow-hidden">
              <div className="bg-purple-100 px-4 py-2 font-semibold text-sm">
                product_slug_history
              </div>
              <div className="p-4 bg-white">
                <div className="grid grid-cols-3 gap-2 text-xs font-mono mb-3">
                  <div className="font-semibold text-slate-600">Column</div>
                  <div className="font-semibold text-slate-600">Type</div>
                  <div className="font-semibold text-slate-600">Purpose</div>
                  
                  <div>id</div>
                  <div className="text-blue-600">INT</div>
                  <div>Primary key</div>
                  
                  <div className="text-green-600">product_id</div>
                  <div className="text-blue-600">INT</div>
                  <div>Foreign key to products</div>
                  
                  <div className="text-green-600">slug</div>
                  <div className="text-blue-600">VARCHAR(255)</div>
                  <div>Old slug value</div>
                  
                  <div>is_primary</div>
                  <div className="text-blue-600">BOOLEAN</div>
                  <div>Current active slug?</div>
                  
                  <div>created_at</div>
                  <div className="text-blue-600">TIMESTAMP</div>
                  <div>When slug was created</div>
                </div>
                <Alert className="border-purple-300 bg-purple-50 text-xs">
                  <Info className="h-3 w-3" />
                  <AlertDescription>
                    <strong>Why this table?</strong> Tracks slug history so you can create automatic 
                    redirects when product names change. Never break old URLs!
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            {/* Categories Table */}
            <div className="border border-slate-300 rounded overflow-hidden">
              <div className="bg-blue-100 px-4 py-2 font-semibold text-sm">
                categories
              </div>
              <div className="p-4 bg-white">
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <div className="font-semibold text-slate-600">Column</div>
                  <div className="font-semibold text-slate-600">Type</div>
                  <div className="font-semibold text-slate-600">Purpose</div>
                  
                  <div>id</div>
                  <div className="text-blue-600">INT</div>
                  <div>Primary key</div>
                  
                  <div>name</div>
                  <div className="text-blue-600">VARCHAR(255)</div>
                  <div>Category name</div>
                  
                  <div className="text-green-600">slug</div>
                  <div className="text-blue-600">VARCHAR(255)</div>
                  <div>URL slug</div>
                  
                  <div className="text-green-600">parent_id</div>
                  <div className="text-blue-600">INT</div>
                  <div>Parent category (NULL for root)</div>
                  
                  <div className="text-green-600">full_path</div>
                  <div className="text-blue-600">VARCHAR(500)</div>
                  <div>Denormalized path for breadcrumbs</div>
                </div>
              </div>
            </div>

            {/* Redirects Table */}
            <div className="border border-slate-300 rounded overflow-hidden">
              <div className="bg-green-100 px-4 py-2 font-semibold text-sm">
                redirects
              </div>
              <div className="p-4 bg-white">
                <div className="grid grid-cols-3 gap-2 text-xs font-mono mb-3">
                  <div className="font-semibold text-slate-600">Column</div>
                  <div className="font-semibold text-slate-600">Type</div>
                  <div className="font-semibold text-slate-600">Purpose</div>
                  
                  <div>id</div>
                  <div className="text-blue-600">INT</div>
                  <div>Primary key</div>
                  
                  <div className="text-green-600">old_path</div>
                  <div className="text-blue-600">VARCHAR(500)</div>
                  <div>Original URL path</div>
                  
                  <div className="text-green-600">new_path</div>
                  <div className="text-blue-600">VARCHAR(500)</div>
                  <div>Redirect destination</div>
                  
                  <div className="text-green-600">status_code</div>
                  <div className="text-blue-600">INT</div>
                  <div>301, 302, or 410</div>
                  
                  <div>created_at</div>
                  <div className="text-blue-600">TIMESTAMP</div>
                  <div>When redirect was created</div>
                </div>
                <Alert className="border-green-300 bg-green-50 text-xs">
                  <CheckCircle2 className="h-3 w-3" />
                  <AlertDescription>
                    <strong>Automatic redirects:</strong> When product slugs change, automatically insert 
                    a redirect from old slug to new slug. Preserves link equity and prevents 404s.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Slug Management Strategy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5 text-blue-600" />
            Slug Management Strategy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-2">
            <div className="text-blue-400">// Pseudocode: Slug update workflow</div>
            <div>function updateProductName(productId, newName) {'{'}</div>
            <div className="pl-4 text-slate-400">// 1. Generate new slug</div>
            <div className="pl-4">newSlug = generateSlug(newName)</div>
            <div className="pl-4 text-slate-400">// 2. Get current slug</div>
            <div className="pl-4">oldSlug = getProductSlug(productId)</div>
            <div className="pl-4 text-slate-400">// 3. Update product</div>
            <div className="pl-4">updateProduct(productId, {'{ name: newName, slug: newSlug }'})</div>
            <div className="pl-4 text-slate-400">// 4. Save old slug to history</div>
            <div className="pl-4">insertSlugHistory(productId, oldSlug, is_primary: false)</div>
            <div className="pl-4 text-slate-400">// 5. Create automatic redirect</div>
            <div className="pl-4 text-green-400">createRedirect(oldSlug, newSlug, status: 301)</div>
            <div>{'}'}</div>
          </div>

          <Alert className="border-amber-300 bg-amber-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Never break URLs:</strong> This workflow ensures that if someone bookmarked your old URL 
              or Google has it indexed, they'll automatically be redirected to the new URL with a 301.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Canonical URL Resolution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircleDot className="h-5 w-5 text-purple-600" />
            Canonical URL Resolution Algorithm
          </CardTitle>
          <CardDescription>
            How to programmatically determine the canonical URL for any product page
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
            <div className="text-blue-400">// Canonical resolution decision flow</div>
            <div>function getCanonicalUrl(product, params) {'{'}</div>
            <div className="pl-4 text-slate-400">// Step 1: Check product status</div>
            <div className="pl-4">if (product.status === 'discontinued') {'{'}</div>
            <div className="pl-8 text-red-400">return null // Don't set canonical, let it 404/410</div>
            <div className="pl-4">{'}'}</div>
            <div className="pl-4 text-slate-400">// Step 2: Check if variant URL</div>
            <div className="pl-4">if (params.size || params.quantity) {'{'}</div>
            <div className="pl-8 text-green-400">return baseProductUrl // Canonical to base</div>
            <div className="pl-4">{'}'}</div>
            <div className="pl-4 text-slate-400">// Step 3: Check if color variant with separate URL</div>
            <div className="pl-4">if (params.color && product.useColorUrls) {'{'}</div>
            <div className="pl-8 text-green-400">return currentUrl // Self-canonical</div>
            <div className="pl-4">{'}'}</div>
            <div className="pl-4 text-slate-400">// Step 4: Default to current URL</div>
            <div className="pl-4 text-green-400">return currentUrl</div>
            <div>{'}'}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border border-blue-200 bg-blue-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Self-Canonical Examples</CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1 font-mono">
                <div>/products/air-max-90</div>
                <div>/products/air-max-90-red</div>
                <div>/shop/t-shirts/for/women/</div>
                <div className="text-blue-700 pt-2">→ Each points to itself</div>
              </CardContent>
            </Card>

            <Card className="border border-purple-200 bg-purple-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Canonical to Base</CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1 font-mono">
                <div>/air-max-90?size=M</div>
                <div>/air-max-90?size=L</div>
                <div className="text-purple-700 pt-2">→ Both canonical to</div>
                <div className="text-purple-700">/air-max-90</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Performance Considerations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="h-5 w-5 text-green-600" />
            Performance & Indexing Considerations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
              <h4 className="font-semibold text-sm mb-2">Database Indexes</h4>
              <div className="text-xs text-slate-700 space-y-1">
                <div>• <strong>UNIQUE index on products.slug</strong> - Enforces uniqueness, speeds up lookups</div>
                <div>• <strong>Index on products.status</strong> - Filter out discontinued products quickly</div>
                <div>• <strong>Index on redirects.old_path</strong> - Fast redirect lookups</div>
                <div>• <strong>Composite index on (category_id, status)</strong> - Category page queries</div>
              </div>
            </div>

            <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
              <h4 className="font-semibold text-sm mb-2">Caching Strategy</h4>
              <div className="text-xs text-slate-700 space-y-1">
                <div>• <strong>Cache slug → product_id mappings</strong> - Avoid DB lookup on every request</div>
                <div>• <strong>Cache product data</strong> - Reduce database load for popular products</div>
                <div>• <strong>Cache category hierarchies</strong> - Breadcrumb generation is expensive</div>
                <div>• <strong>Invalidate on updates</strong> - Clear cache when product data changes</div>
              </div>
            </div>

            <div className="border-l-4 border-l-purple-500 bg-purple-50 p-4">
              <h4 className="font-semibold text-sm mb-2">Denormalization for Speed</h4>
              <div className="text-xs text-slate-700 space-y-1">
                <div>• <strong>Store full category path</strong> - Avoid recursive queries for breadcrumbs</div>
                <div>• <strong>Cache product URLs</strong> - Pre-compute canonical URLs and store them</div>
                <div>• <strong>Materialized views</strong> - For complex product listing queries</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
            <div className="text-blue-400">// Example: Full path denormalization</div>
            <div>categories:</div>
            <div>id | name     | parent_id | full_path</div>
            <div>1  | Shoes    | NULL      | /shoes</div>
            <div>2  | Running  | 1         | /shoes/running</div>
            <div>3  | Nike     | 2         | /shoes/running/nike</div>
            <div className="text-green-400 mt-2">// full_path pre-computed = instant breadcrumbs!</div>
          </div>
        </CardContent>
      </Card>

      {/* Handling URL Conflicts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Handling Slug Conflicts
          </CardTitle>
          <CardDescription>
            What to do when two products want the same slug
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">
            Slug conflicts happen when two products have similar names. You need a conflict resolution strategy:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-2 text-left border-r border-slate-200">Product Name</th>
                  <th className="p-2 text-left border-r border-slate-200">Generated Slug</th>
                  <th className="p-2 text-left border-r border-slate-200">Conflict?</th>
                  <th className="p-2 text-left">Resolution</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <td className="p-2 border-r border-slate-200">Nike Air Max 90</td>
                  <td className="p-2 border-r border-slate-200 font-mono">nike-air-max-90</td>
                  <td className="p-2 border-r border-slate-200 text-green-600">No</td>
                  <td className="p-2 font-mono">nike-air-max-90</td>
                </tr>
                <tr className="border-t border-slate-200 bg-amber-50">
                  <td className="p-2 border-r border-slate-200">Nike Air Max 90 (Red)</td>
                  <td className="p-2 border-r border-slate-200 font-mono">nike-air-max-90</td>
                  <td className="p-2 border-r border-slate-200 text-red-600">Yes!</td>
                  <td className="p-2 font-mono">nike-air-max-90-red</td>
                </tr>
                <tr className="border-t border-slate-200 bg-amber-50">
                  <td className="p-2 border-r border-slate-200">Nike Air Max 90 (2024)</td>
                  <td className="p-2 border-r border-slate-200 font-mono">nike-air-max-90</td>
                  <td className="p-2 border-r border-slate-200 text-red-600">Yes!</td>
                  <td className="p-2 font-mono">nike-air-max-90-2024</td>
                </tr>
                <tr className="border-t border-slate-200 bg-amber-50">
                  <td className="p-2 border-r border-slate-200">Nike Air Max 90 (Kids)</td>
                  <td className="p-2 border-r border-slate-200 font-mono">nike-air-max-90</td>
                  <td className="p-2 border-r border-slate-200 text-red-600">Yes!</td>
                  <td className="p-2 font-mono">nike-air-max-90-kids</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-2">
            <div className="text-blue-400">// Conflict resolution algorithm</div>
            <div>function ensureUniqueSlug(baseSlug, productId) {'{'}</div>
            <div className="pl-4">slug = baseSlug</div>
            <div className="pl-4">counter = 2</div>
            <div className="pl-4">while (slugExists(slug) && slug.product_id !== productId) {'{'}</div>
            <div className="pl-8 text-amber-400">// Try appending number</div>
            <div className="pl-8">slug = baseSlug + '-' + counter</div>
            <div className="pl-8">counter++</div>
            <div className="pl-4">{'}'}</div>
            <div className="pl-4 text-green-400">return slug</div>
            <div>{'}'}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

