import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Lock, Shield, CreditCard } from 'lucide-react';

export default function BillingPage() {
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
            <strong>Protected Route:</strong> This billing page is protected with noindex,nofollow + robots.txt disallow to prevent any payment information from appearing in search engines.
          </AlertDescription>
        </Alert>

        <div className="flex items-center gap-3 mb-6">
          <Lock className="h-8 w-8 text-red-600" />
          <h1 className="text-4xl font-bold">Billing</h1>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Visa ending in 4242</div>
                      <div className="text-sm text-slate-600">Expires 12/2025</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  + Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  { date: 'Dec 15, 2024', amount: '$127.96', status: 'Paid' },
                  { date: 'Dec 8, 2024', amount: '$89.99', status: 'Paid' },
                  { date: 'Nov 22, 2024', amount: '$54.99', status: 'Paid' },
                ].map((invoice, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{invoice.date}</div>
                      <div className="text-sm text-slate-600">{invoice.status}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{invoice.amount}</div>
                      <Button variant="link" size="sm" className="h-auto p-0">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 mt-6">
          <Link href="/account/orders">
            <Button variant="outline">View Orders</Button>
          </Link>
          <Link href="/catalog">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
