"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Shield, Eye, CreditCard, DollarSign, Star } from "lucide-react"
import { MonitoringCapabilities } from "./monitoring-capabilities"
import { PricingStrategy } from "./pricing-strategy"

export function SubscriptionUpgrades() {
  const [selectedPlan, setSelectedPlan] = useState("basic")

  const plans = [
    {
      id: "basic",
      name: "Basic Dispute Resolution",
      price: 29.99,
      features: [
        "AI dispute identification",
        "Automated letter generation",
        "Basic credit bureau integration",
        "Email support",
        "Monthly credit score updates",
      ],
      limitations: ["Manual document upload only", "Basic dispute templates", "Standard processing time"],
    },
    {
      id: "premium",
      name: "Premium + Credit Monitoring",
      price: 59.99,
      originalPrice: 89.99,
      partner: "Credit Karma",
      commission: 20.0,
      popular: true,
      features: [
        "Everything in Basic",
        "24/7 credit monitoring (all 3 bureaus)",
        "Real-time credit score tracking",
        "Identity theft alerts",
        "Credit report analysis",
        "Priority support",
        "Advanced dispute templates",
      ],
      limitations: ["Manual bank statement upload", "Basic fraud detection"],
    },
    {
      id: "professional",
      name: "Professional + Bank Monitoring",
      price: 89.99,
      originalPrice: 129.99,
      partner: "Plaid + Yodlee",
      commission: 25.0,
      features: [
        "Everything in Premium",
        "Automated bank account monitoring",
        "Credit card statement analysis",
        "Real-time transaction monitoring",
        "Automated dispute detection",
        "Advanced fraud pattern recognition",
        "Account reconciliation services",
        "Financial health scoring",
        "Dedicated account manager",
      ],
      limitations: ["Up to 5 connected accounts", "Standard identity protection"],
    },
    {
      id: "enterprise",
      name: "Enterprise + Full Protection",
      price: 149.99,
      originalPrice: 199.99,
      partner: "LifeLock + Plaid",
      commission: 35.0,
      features: [
        "Everything in Professional",
        "Unlimited account connections",
        "Full identity theft protection",
        "Dark web monitoring",
        "Social Security number monitoring",
        "Investment account monitoring",
        "Business credit monitoring",
        "Identity restoration services",
        "Up to $1M identity theft insurance",
        "White-glove concierge service",
        "Custom dispute strategies",
        "Legal consultation access",
      ],
      limitations: [],
    },
    {
      id: "family",
      name: "Family Protection Suite",
      price: 199.99,
      originalPrice: 299.99,
      partner: "LifeLock + Plaid",
      commission: 40.0,
      features: [
        "Everything in Enterprise",
        "Up to 6 family members",
        "Child identity monitoring",
        "Elderly parent protection",
        "Family financial dashboard",
        "Shared dispute management",
        "Family credit education",
        "Minor credit monitoring",
        "Family identity theft insurance",
        "Dedicated family advisor",
      ],
      limitations: [],
    },
  ]

  const monitoringCapabilities = [
    {
      capability: "Credit Bureau Monitoring",
      basic: "Monthly updates",
      premium: "Real-time alerts",
      professional: "Real-time + analysis",
      enterprise: "Full monitoring + insights",
      family: "Multi-member monitoring",
    },
    {
      capability: "Bank Account Monitoring",
      basic: "Manual upload only",
      premium: "Manual upload only",
      professional: "Automated monitoring",
      enterprise: "Advanced analytics",
      family: "Family-wide monitoring",
    },
    {
      capability: "Credit Card Monitoring",
      basic: "Manual review",
      premium: "Manual review",
      professional: "Automated analysis",
      enterprise: "Predictive fraud detection",
      family: "Multi-card monitoring",
    },
    {
      capability: "Investment Account Monitoring",
      basic: "Not included",
      premium: "Not included",
      professional: "Not included",
      enterprise: "Full monitoring",
      family: "Family portfolio monitoring",
    },
    {
      capability: "Identity Protection",
      basic: "Basic alerts",
      premium: "Enhanced monitoring",
      professional: "Advanced protection",
      enterprise: "Full protection suite",
      family: "Family-wide protection",
    },
  ]

  const partnerServices = [
    {
      name: "Credit Karma",
      type: "Credit Monitoring",
      commission: "$20/month per referral",
      conversionRate: "28%",
      avgLifetime: "22 months",
      totalEarnings: "$6,400",
      integration: "Premium tier and above",
    },
    {
      name: "Plaid",
      type: "Bank Account Integration",
      commission: "$0.50 per connection + $2/month",
      conversionRate: "45%",
      avgLifetime: "36 months",
      totalEarnings: "$12,800",
      integration: "Professional tier and above",
    },
    {
      name: "Yodlee",
      type: "Financial Data Aggregation",
      commission: "$1.25 per connection + $3/month",
      conversionRate: "38%",
      avgLifetime: "30 months",
      totalEarnings: "$9,200",
      integration: "Professional tier and above",
    },
    {
      name: "LifeLock",
      type: "Identity Protection",
      commission: "$35/month per referral",
      conversionRate: "22%",
      avgLifetime: "28 months",
      totalEarnings: "$15,600",
      integration: "Enterprise and Family tiers",
    },
    {
      name: "Experian IdentityWorks",
      type: "Identity Monitoring",
      commission: "$25/month per referral",
      conversionRate: "18%",
      avgLifetime: "24 months",
      totalEarnings: "$7,200",
      integration: "All tiers",
    },
    {
      name: "MX Technologies",
      type: "Financial Insights",
      commission: "$1.50/month per user",
      conversionRate: "52%",
      avgLifetime: "42 months",
      totalEarnings: "$8,900",
      integration: "Professional tier and above",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Subscription Plans */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Subscription Plans & Upgrades
          </CardTitle>
          <CardDescription>Tiered pricing with partner service integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`border rounded-lg p-6 space-y-4 cursor-pointer transition-all ${
                  selectedPlan === plan.id ? "border-blue-500 bg-blue-50" : "hover:border-gray-300"
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{plan.name}</h3>
                    {plan.id === "premium" && <Badge variant="default">Popular</Badge>}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">${plan.originalPrice}</span>
                        <Badge variant="destructive" className="text-xs">
                          Save ${plan.originalPrice - plan.price}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {plan.partner && <div className="text-sm text-muted-foreground">Powered by {plan.partner}</div>}
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 bg-blue-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={selectedPlan === plan.id ? "default" : "outline"}>
                  {selectedPlan === plan.id ? "Current Plan" : "Upgrade"}
                </Button>

                {plan.commission && (
                  <div className="text-xs text-green-600 text-center">Partner commission: ${plan.commission}/month</div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Partner Revenue Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Partner Revenue Dashboard
          </CardTitle>
          <CardDescription>Third-party service partnerships and commission tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Revenue Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600">$28,750</div>
                <div className="text-sm text-muted-foreground">Total Monthly Revenue</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">485</div>
                <div className="text-sm text-muted-foreground">Active Subscribers</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-purple-600">23%</div>
                <div className="text-sm text-muted-foreground">Avg Conversion Rate</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-orange-600">26</div>
                <div className="text-sm text-muted-foreground">Avg Lifetime (months)</div>
              </div>
            </div>

            {/* Partner Services */}
            <div className="space-y-4">
              <h3 className="font-semibold">Partner Services Performance</h3>
              {partnerServices.map((service, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        {service.type === "Credit Monitoring" ? (
                          <Eye className="h-5 w-5 text-blue-600" />
                        ) : (
                          <Shield className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{service.name}</h4>
                        <p className="text-sm text-muted-foreground">{service.type}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{service.commission}</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Conversion Rate:</span>
                      <p className="font-medium">{service.conversionRate}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Avg Lifetime:</span>
                      <p className="font-medium">{service.avgLifetime}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Total Earnings:</span>
                      <p className="font-medium text-green-600">{service.totalEarnings}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Smart Upgrade Recommendations
          </CardTitle>
          <CardDescription>AI-powered upgrade suggestions based on user behavior</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Credit Monitoring Upsell</h4>
              <Badge variant="default">High Priority</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Users with 3+ disputes in the last month show 67% higher conversion to credit monitoring services.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm">Auto-suggest after 3rd dispute</span>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Identity Protection Upsell</h4>
              <Badge variant="secondary">Medium Priority</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Users who experienced unauthorized charges show 45% higher interest in identity protection.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm">Suggest after unauthorized charge dispute</span>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monitoring Capabilities Detail */}
      <MonitoringCapabilities />

      {/* Pricing Strategy Analysis */}
      <PricingStrategy />
    </div>
  )
}
