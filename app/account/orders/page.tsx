import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Lock, Shield } from 'lucide-react';

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Alert className="mb-6 border-red-300 bg-red-50">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            <strong>Protected Route:</strong> This page uses defense-in-depth for SEO. It's{' '}
            <strong>noindex,nofollow</strong> via meta robots AND blocked in robots.txt. Check the SEO Receipt to see both protections active.
          </AlertDescription>
        </Alert>

        <div className="flex items-center gap-3 mb-6">
          <Lock className="h-8 w-8 text-red-600" />
          <h1 className="text-4xl font-bold">My Orders</h1>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order #12345</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Date:</span>
                  <span className="font-medium">Dec 15, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Status:</span>
                  <span className="font-medium text-green-600">Delivered</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Total:</span>
                  <span className="font-medium">$127.96</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order #12344</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Date:</span>
                  <span className="font-medium">Dec 8, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Status:</span>
                  <span className="font-medium text-blue-600">In Transit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Total:</span>
                  <span className="font-medium">$89.99</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Why is this page protected?</h3>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Contains sensitive user information</li>
              <li>• No value for search engines</li>
              <li>• Could expose private data if indexed</li>
              <li>• Uses defense-in-depth: noindex + robots disallow</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex gap-4 mt-6">
          <Link href="/account/billing">
            <Button variant="outline">View Billing</Button>
          </Link>
          <Link href="/catalog">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
