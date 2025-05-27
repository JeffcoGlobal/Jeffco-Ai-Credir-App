"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, CreditCard, Building2, Shield, TrendingUp, DollarSign } from "lucide-react"

export function MonitoringCapabilities() {
  const monitoringFeatures = [
    {
      category: "Bank Account Monitoring",
      icon: Building2,
      description: "Comprehensive monitoring of checking, savings, and business accounts",
      capabilities: [
        {
          feature: "Real-time Transaction Monitoring",
          tiers: ["Professional", "Enterprise", "Family"],
          description: "Monitor all transactions in real-time for suspicious activity",
        },
        {
          feature: "Automated Dispute Detection",
          tiers: ["Professional", "Enterprise", "Family"],
          description: "AI identifies potential disputes from transaction patterns",
        },
        {
          feature: "Account Reconciliation",
          tiers: ["Professional", "Enterprise", "Family"],
          description: "Automated reconciliation with statements and receipts",
        },
        {
          feature: "Overdraft Protection Alerts",
          tiers: ["Professional", "Enterprise", "Family"],
          description: "Proactive alerts for potential overdraft situations",
        },
        {
          feature: "Unusual Activity Detection",
          tiers: ["Professional", "Enterprise", "Family"],
          description: "Machine learning detects unusual spending patterns",
        },
      ],
    },
    {
      category: "Credit Card Monitoring",
      icon: CreditCard,
      description: "Advanced monitoring of all credit card accounts and transactions",
      capabilities: [
        {
          feature: "Real-time Fraud Detection",
          tiers: ["Professional", "Enterprise", "Family"],
          description: "Instant alerts for potentially fraudulent transactions",
        },
        {
          feature: "Merchant Dispute Identification",
          tiers: ["Professional", "Enterprise", "Family"],
          description: "Identify billing errors and unauthorized charges",
        },
        {
          feature: "Credit Utilization Optimization",
          tiers: ["Professional", "Enterprise", "Family"],
          description: "Optimize credit utilization for better credit scores",
        },
        {
          feature: "Cashback and Rewards Tracking",
          tiers: ["Professional", "Enterprise", "Family"],
          description: "Track and optimize credit card rewards and cashback",
        },
        {
          feature: "Interest Rate Monitoring",
          tiers: ["Enterprise", "Family"],
          description: "Monitor interest rates and identify better offers",
        },
      ],
    },
    {
      category: "Investment Account Monitoring",
      icon: TrendingUp,
      description: "Monitor investment accounts for unauthorized activity and performance",
      capabilities: [
        {
          feature: "Portfolio Monitoring",
          tiers: ["Enterprise", "Family"],
          description: "Monitor investment portfolios for unauthorized changes",
        },
        {
          feature: "Fee Analysis",
          tiers: ["Enterprise", "Family"],
          description: "Analyze investment fees and identify overcharges",
        },
        {
          feature: "Performance Tracking",
          tiers: ["Enterprise", "Family"],
          description: "Track investment performance and benchmark against indices",
        },
        {
          feature: "Tax Optimization Alerts",
          tiers: ["Enterprise", "Family"],
          description: "Identify tax-loss harvesting and optimization opportunities",
        },
      ],
    },
    {
      category: "Identity & Security Monitoring",
      icon: Shield,
      description: "Comprehensive identity theft protection and monitoring",
      capabilities: [
        {
          feature: "Social Security Number Monitoring",
          tiers: ["Premium", "Professional", "Enterprise", "Family"],
          description: "Monitor SSN usage across credit applications and services",
        },
        {
          feature: "Dark Web Monitoring",
          tiers: ["Enterprise", "Family"],
          description: "Scan dark web for compromised personal information",
        },
        {
          feature: "Public Records Monitoring",
          tiers: ["Professional", "Enterprise", "Family"],
          description: "Monitor public records for identity theft indicators",
        },
        {
          feature: "Address Change Monitoring",
          tiers: ["Premium", "Professional", "Enterprise", "Family"],
          description: "Alert for unauthorized address changes with creditors",
        },
      ],
    },
  ]

  const integrationPartners = [
    {
      name: "Plaid",
      type: "Bank Integration",
      accounts: "12,000+ institutions",
      coverage: "99.9% of US banks",
      security: "Bank-level encryption",
      cost: "$0.50 per connection",
    },
    {
      name: "Yodlee",
      type: "Financial Data",
      accounts: "17,000+ institutions",
      coverage: "Global coverage",
      security: "SOC 2 Type II",
      cost: "$1.25 per connection",
    },
    {
      name: "MX Technologies",
      type: "Financial Insights",
      accounts: "13,000+ institutions",
      coverage: "US & Canada",
      security: "256-bit encryption",
      cost: "$1.50 per user/month",
    },
    {
      name: "Finicity",
      type: "Open Banking",
      accounts: "15,000+ institutions",
      coverage: "North America",
      security: "OAuth 2.0",
      cost: "$0.75 per connection",
    },
  ]

  const monitoringMetrics = [
    {
      metric: "Accounts Monitored",
      value: "2.3M+",
      description: "Total financial accounts under monitoring",
    },
    {
      metric: "Fraud Detection Rate",
      value: "99.7%",
      description: "Percentage of fraudulent activity detected",
    },
    {
      metric: "False Positive Rate",
      value: "0.8%",
      description: "Percentage of legitimate transactions flagged",
    },
    {
      metric: "Average Detection Time",
      value: "< 2 min",
      description: "Time to detect suspicious activity",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Monitoring Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-600" />
            Comprehensive Financial Monitoring
          </CardTitle>
          <CardDescription>
            Advanced monitoring capabilities across all financial accounts and identity protection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {monitoringMetrics.map((metric, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground mb-1">{metric.metric}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </div>
            ))}
          </div>

          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              <strong>Bank-Level Security:</strong> All financial data is encrypted with 256-bit encryption and stored
              with bank-level security protocols. We never store login credentials.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Monitoring Categories */}
      {monitoringFeatures.map((category, categoryIndex) => (
        <Card key={categoryIndex}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <category.icon className="h-5 w-5 text-green-600" />
              {category.category}
            </CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {category.capabilities.map((capability, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{capability.feature}</h4>
                    <div className="flex gap-1">
                      {capability.tiers.map((tier, tierIndex) => (
                        <Badge key={tierIndex} variant="outline" className="text-xs">
                          {tier}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Integration Partners */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Data Integration Partners</CardTitle>
          <CardDescription>Trusted partners providing secure access to financial institutions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {integrationPartners.map((partner, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{partner.name}</h4>
                  <Badge variant="default">{partner.type}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Institutions:</span>
                    <p className="font-medium">{partner.accounts}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Coverage:</span>
                    <p className="font-medium">{partner.coverage}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Security:</span>
                    <p className="font-medium">{partner.security}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Cost:</span>
                    <p className="font-medium text-green-600">{partner.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pricing Impact */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Monitoring Capabilities by Tier
          </CardTitle>
          <CardDescription>How monitoring capabilities scale across subscription tiers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="font-medium">Capability</div>
              <div className="font-medium text-center">Basic ($29.99)</div>
              <div className="font-medium text-center">Premium ($59.99)</div>
              <div className="font-medium text-center">Professional ($89.99)</div>
              <div className="font-medium text-center">Enterprise ($149.99)</div>
            </div>

            {[
              {
                capability: "Credit Monitoring",
                basic: "Monthly",
                premium: "Real-time",
                professional: "Real-time + Analysis",
                enterprise: "Full Suite",
              },
              {
                capability: "Bank Monitoring",
                basic: "Manual Only",
                premium: "Manual Only",
                professional: "Automated",
                enterprise: "Advanced AI",
              },
              {
                capability: "Credit Card Monitoring",
                basic: "Basic Review",
                premium: "Basic Review",
                professional: "Automated Analysis",
                enterprise: "Predictive Fraud",
              },
              {
                capability: "Investment Monitoring",
                basic: "Not Included",
                premium: "Not Included",
                professional: "Not Included",
                enterprise: "Full Monitoring",
              },
              {
                capability: "Identity Protection",
                basic: "Basic Alerts",
                premium: "Enhanced",
                professional: "Advanced",
                enterprise: "Complete Suite",
              },
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 py-2 border-t">
                <div className="font-medium">{row.capability}</div>
                <div className="text-center text-sm">{row.basic}</div>
                <div className="text-center text-sm">{row.premium}</div>
                <div className="text-center text-sm">{row.professional}</div>
                <div className="text-center text-sm">{row.enterprise}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
