"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Alert, AlertDescription } from "../ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";
import { checkRobotsBlocking } from "@/lib/rules/robots";
import { DEFAULT_PARAM_CONFIG } from "@/lib/rules/params";

interface TestResult {
  isBlocked: boolean;
  matchedRules: string[];
  warnings: string[];
  error?: string;
}

export function RobotsTester() {
  const [testUrl, setTestUrl] = useState("");
  const [result, setResult] = useState<TestResult | null>(null);

  const handleTest = (url: string) => {
    if (!url) {
      setResult(null);
      return;
    }

    try {
      const urlObj = new URL(url, "https://example.com");
      const testResult = checkRobotsBlocking(
        urlObj.pathname,
        urlObj.searchParams,
        DEFAULT_PARAM_CONFIG
      );
      setResult(testResult);
    } catch (error) {
      setResult({
        isBlocked: false,
        matchedRules: [],
        warnings: [],
        error: "Invalid URL format",
      });
    }
  };

  const exampleUrls = [
    { url: "/shop/t-shirts", expected: "Allowed", description: "Clean path - no query params" },
    {
      url: "/shop/t-shirts?utm_source=google",
      expected: "Blocked",
      description: "Tracking parameter",
    },
    { url: "/account/orders", expected: "Blocked", description: "Protected route" },
    {
      url: "/shop/t-shirts?color=black,blue",
      expected: "Blocked",
      description: "Multi-select (comma)",
    },
    { url: "/shop/t-shirts/for/women/", expected: "Allowed", description: "Gender clean path" },
    {
      url: "/shop?price_min=10&price_max=50",
      expected: "Blocked",
      description: "Numeric range filters",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>URL Tester</CardTitle>
        <CardDescription>
          Test any URL against the robots.txt rules to see if it would be blocked by crawlers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Input */}
          <div className="flex gap-2">
            <Input
              placeholder="Try any URL below, or type one in here"
              value={testUrl}
              onChange={(e) => setTestUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleTest(testUrl);
                }
              }}
            />
            <Button onClick={() => handleTest(testUrl)}>Test</Button>
          </div>

          {/* Result Display */}
          {result && !result.error && (
            <Alert
              className={
                result.isBlocked ? "border-red-300 bg-red-50" : "border-green-300 bg-green-50"
              }
            >
              <div className="flex items-center gap-2 mb-2">
                {result.isBlocked ? (
                  <XCircle className="h-5 w-5 text-red-600" />
                ) : (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                )}
                <span className="font-semibold text-lg">
                  {result.isBlocked ? "BLOCKED" : "ALLOWED"}
                </span>
              </div>
              {result.matchedRules.length > 0 && (
                <div className="space-y-1 mt-3">
                  <div className="font-medium">Matched Rules:</div>
                  {result.matchedRules.map((rule, idx) => (
                    <div key={idx} className="text-sm font-mono bg-white/50 p-2 rounded">
                      • {rule}
                    </div>
                  ))}
                </div>
              )}
              {!result.isBlocked && result.matchedRules.length === 0 && (
                <div className="text-sm text-green-700">
                  This URL is not blocked by any robots.txt rules and can be crawled.
                </div>
              )}
            </Alert>
          )}

          {/* Error Display */}
          {result && result.error && (
            <Alert className="border-amber-300 bg-amber-50">
              <AlertDescription>{result.error}</AlertDescription>
            </Alert>
          )}

          {/* Example URLs */}
          <div>
            <div className="text-sm font-medium mb-3">Try Example URLs:</div>
            <div className="grid grid-cols-1 gap-2">
              {exampleUrls.map((example, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setTestUrl(example.url);
                    handleTest(example.url);
                  }}
                  className="justify-start text-left h-auto py-2"
                >
                  <div className="flex-1">
                    <div className="font-mono text-xs">{example.url}</div>
                    <div className="text-xs text-slate-500 mt-1">{example.description}</div>
                  </div>
                  <div
                    className={`text-xs ml-2 ${
                      example.expected === "Blocked" ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {example.expected}
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
