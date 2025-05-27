"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Shield, Crown } from "lucide-react"
import { CopyrightProtection } from "./components/copyright-protection"
import { PatentPortfolio } from "./components/patent-portfolio"
import { TrademarkProtection } from "./components/trademark-protection"
import { IPStrategy } from "./components/ip-strategy"
import { CompetitiveAnalysis } from "./components/competitive-analysis"
import { IndustryLeadership } from "./components/industry-leadership"

export default function IPProtectionPage() {
  const [protectionScore, setProtectionScore] = useState(94)

  const ipMetrics = [
    {
      category: "Copyright Protection",
      status: "active",
      coverage: 98,
      filings: 15,
      lastUpdate: "2024-01-15",
    },
    {
      category: "Patent Portfolio",
      status: "active",
      coverage: 92,
      filings: 8,
      lastUpdate: "2024-01-12",
    },
    {
      category: "Trademark Protection",
      status: "active",
      coverage: 100,
      filings: 5,
      lastUpdate: "2024-01-10",
    },
    {
      category: "Trade Secrets",
      status: "active",
      coverage: 96,
      filings: 12,
      lastUpdate: "2024-01-14",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Crown className="h-10 w-10 text-purple-600" />
            Intellectual Property Protection Suite
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive IP protection for William Craig Jefferson & Jeffco Technologies
          </p>
          <div className="mt-4 p-4 bg-purple-100 rounded-lg border border-purple-200">
            <p className="text-sm font-medium text-purple-800">
              <strong>Registered Owner:</strong> William Craig Jefferson & Jeffco Technologies
            </p>
            <p className="text-sm text-purple-700 mt-1">
              All intellectual property rights, patents, copyrights, and trademarks are owned and protected under this
              entity.
            </p>
          </div>
        </div>

        {/* IP Protection Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              IP Protection Status
            </CardTitle>
            <CardDescription>Comprehensive intellectual property protection coverage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              {ipMetrics.map((metric, index) => (
                <div key={index} className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{metric.coverage}%</div>
                  <div className="text-sm text-muted-foreground mb-2">{metric.category}</div>
                  <div className="text-xs text-muted-foreground">{metric.filings} Active Filings</div>
                  <Badge variant="default" className="mt-2">
                    {metric.status}
                  </Badge>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall IP Protection Score</span>
                <span className="text-purple-600 font-medium">{protectionScore}%</span>
              </div>
              <Progress value={protectionScore} className="h-3" />
              <p className="text-xs text-muted-foreground">
                Comprehensive protection across all intellectual property categories
              </p>
            </div>
          </CardContent>
        </Card>

        {/* IP Protection Tabs */}
        <Tabs defaultValue="copyright" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="copyright">Copyright</TabsTrigger>
            <TabsTrigger value="patents">Patents</TabsTrigger>
            <TabsTrigger value="trademarks">Trademarks</TabsTrigger>
            <TabsTrigger value="strategy">IP Strategy</TabsTrigger>
            <TabsTrigger value="competitive">Competitive</TabsTrigger>
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
          </TabsList>

          <TabsContent value="copyright">
            <CopyrightProtection />
          </TabsContent>

          <TabsContent value="patents">
            <PatentPortfolio />
          </TabsContent>

          <TabsContent value="trademarks">
            <TrademarkProtection />
          </TabsContent>

          <TabsContent value="strategy">
            <IPStrategy />
          </TabsContent>

          <TabsContent value="competitive">
            <CompetitiveAnalysis />
          </TabsContent>

          <TabsContent value="leadership">
            <IndustryLeadership />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
