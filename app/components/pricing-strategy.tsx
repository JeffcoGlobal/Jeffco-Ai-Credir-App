"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { DollarSign, TrendingUp, Target, Users } from "lucide-react"

export function PricingStrategy() {
  const pricingAnalysis = [
    {
      tier: "Basic ($29.99)",
      targetMarket: "Price-sensitive consumers",
      marketSize: "45% of market",
      conversionRate: "35%",
      churnRate: "12%",
      ltv: "$720",
      cac: "$45",
      profitMargin: "68%",
      features: "Core dispute resolution only",
    },
    {
      tier: "Premium ($59.99)",
      targetMarket: "Credit-conscious consumers",
      marketSize: "30% of market",
      conversionRate: "28%",
      churnRate: "8%",
      ltv: "$1,440",
      cac: "$85",
      profitMargin: "72%",
      features: "Credit monitoring included",
    },
    {
      tier: "Professional ($89.99)",
      targetMarket: "High-income individuals",
      marketSize: "15% of market",
      conversionRate: "22%",
      churnRate: "6%",
      ltv: "$2,340",
      cac: "$125",
      profitMargin: "75%",
      features: "Full financial monitoring",
    },
    {
      tier: "Enterprise ($149.99)",
      targetMarket: "Affluent consumers",
      marketSize: "8% of market",
      conversionRate: "18%",
      churnRate: "4%",
      ltv: "$4,200",
      cac: "$200",
      profitMargin: "78%",
      features: "Complete protection suite",
    },
    {
      tier: "Family ($199.99)",
      targetMarket: "Family households",
      marketSize: "2% of market",
      conversionRate: "15%",
      churnRate: "3%",
      ltv: "$6,000",
      cac: "$300",
      profitMargin: "80%",
      features: "Multi-member protection",
    },
  ]

  const competitorAnalysis = [
    {
      competitor: "Credit Repair Companies",
      avgPrice: "$79.99",
      features: "Basic dispute letters",
      ourAdvantage: "AI automation + monitoring",
      marketShare: "65%",
    },
    {
      competitor: "Credit Monitoring Services",
      avgPrice: "$24.99",
      features: "Credit monitoring only",
      ourAdvantage: "Dispute resolution included",
      marketShare: "25%",
    },
    {
      competitor: "Identity Protection",
      avgPrice: "$129.99",
      features: "Identity monitoring",
      ourAdvantage: "Financial dispute focus",
      marketShare: "8%",
    },
    {
      competitor: "DIY Solutions",
      avgPrice: "$0-19.99",
      features: "Templates and guides",
      ourAdvantage: "Full automation",
      marketShare: "2%",
    },
  ]

  const revenueProjections = [
    {
      tier: "Basic",
      currentSubs: 180,
      projectedGrowth: "25%",
      monthlyRevenue: "$5,398",
      yearlyProjection: "$80,970",
    },
    {
      tier: "Premium",
      currentSubs: 145,
      projectedGrowth: "35%",
      monthlyRevenue: "$8,699",
      yearlyProjection: "$141,435",
    },
    {
      tier: "Professional",
      currentSubs: 95,
      projectedGrowth: "45%",
      monthlyRevenue: "$8,549",
      yearlyProjection: "$148,455",
    },
    {
      tier: "Enterprise",
      currentSubs: 45,
      projectedGrowth: "55%",
      monthlyRevenue: "$6,750",
      yearlyProjection: "$125,325",
    },
    {
      tier: "Family",
      currentSubs: 20,
      projectedGrowth: "65%",
      monthlyRevenue: "$4,000",
      yearlyProjection: "$79,200",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Pricing Strategy Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            Strategic Pricing Analysis
          </CardTitle>
          <CardDescription>
            Comprehensive pricing strategy for maximizing revenue and market penetration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <TrendingUp className="h-4 w-4" />
            <AlertDescription>
              <strong>Pricing Strategy:</strong> Value-based pricing with clear feature differentiation to maximize
              customer lifetime value while maintaining competitive positioning.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">$575,385</div>
              <div className="text-sm text-muted-foreground">Annual Revenue Projection</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">485</div>
              <div className="text-sm text-muted-foreground">Total Subscribers</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">$1,186</div>
              <div className="text-sm text-muted-foreground">Average Revenue Per User</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">74%</div>
              <div className="text-sm text-muted-foreground">Average Profit Margin</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tier Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Pricing Tier Analysis</CardTitle>
          <CardDescription>
            Detailed analysis of each pricing tier's market positioning and profitability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pricingAnalysis.map((tier, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-lg">{tier.tier}</h4>
                  <Badge variant="default">{tier.profitMargin} Margin</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Target Market:</span>
                    <p className="font-medium">{tier.targetMarket}</p>
                    <p className="text-xs text-muted-foreground">{tier.marketSize}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Performance:</span>
                    <p className="font-medium">{tier.conversionRate} conversion</p>
                    <p className="text-xs text-muted-foreground">{tier.churnRate} churn rate</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Economics:</span>
                    <p className="font-medium">{tier.ltv} LTV</p>
                    <p className="text-xs text-muted-foreground">{tier.cac} CAC</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Features:</span>
                    <p className="font-medium">{tier.features}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitive Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Competitive Pricing Analysis</CardTitle>
          <CardDescription>How our pricing compares to market alternatives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitorAnalysis.map((comp, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{comp.competitor}</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{comp.avgPrice}</Badge>
                    <Badge variant="secondary">{comp.marketShare} share</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Their Features:</span>
                    <p className="font-medium">{comp.features}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Our Advantage:</span>
                    <p className="font-medium text-green-600">{comp.ourAdvantage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Revenue Projections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Revenue Projections by Tier
          </CardTitle>
          <CardDescription>Current performance and growth projections for each tier</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {revenueProjections.map((projection, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{projection.tier} Tier</h4>
                  <Badge variant="default">+{projection.projectedGrowth} growth</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Current Subscribers:</span>
                    <p className="font-medium">{projection.currentSubs}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Monthly Revenue:</span>
                    <p className="font-medium text-green-600">{projection.monthlyRevenue}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Yearly Projection:</span>
                    <p className="font-medium text-blue-600">{projection.yearlyProjection}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Growth Rate:</span>
                    <p className="font-medium">{projection.projectedGrowth}</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Revenue Target Progress</span>
                    <span>{Math.round((Number.parseInt(projection.currentSubs) / 200) * 100)}%</span>
                  </div>
                  <Progress value={(Number.parseInt(projection.currentSubs) / 200) * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pricing Optimization Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Pricing Optimization Recommendations
          </CardTitle>
          <CardDescription>Strategic recommendations for pricing optimization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <TrendingUp className="h-4 w-4" />
            <AlertDescription>
              <strong>Upsell Opportunity:</strong> 67% of Basic tier users show interest in bank monitoring features.
              Consider offering limited bank monitoring as an add-on for $19.99/month.
            </AlertDescription>
          </Alert>

          <Alert>
            <Target className="h-4 w-4" />
            <AlertDescription>
              <strong>Family Tier Expansion:</strong> High demand for family protection. Consider adding a "Couple" tier
              at $129.99 for 2 members to capture mid-market families.
            </AlertDescription>
          </Alert>

          <Alert>
            <DollarSign className="h-4 w-4" />
            <AlertDescription>
              <strong>Annual Discount Strategy:</strong> Offer 15% discount for annual payments to improve cash flow and
              reduce churn. Projected to increase LTV by 23%.
            </AlertDescription>
          </Alert>

          <Alert>
            <Users className="h-4 w-4" />
            <AlertDescription>
              <strong>Enterprise Add-ons:</strong> Business customers willing to pay premium for business credit
              monitoring and multi-entity management. Consider $299.99 business tier.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
