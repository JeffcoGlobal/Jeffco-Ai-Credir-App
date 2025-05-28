"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, AlertTriangle, Globe, CreditCard, ExternalLink, Copy, Eye, EyeOff } from "lucide-react"

export function DeploymentChecklist() {
  const [completedItems, setCompletedItems] = useState<string[]>([])
  const [showSecrets, setShowSecrets] = useState(false)

  const toggleItem = (itemId: string) => {
    setCompletedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const deploymentSteps = [
    {
      category: "Domain & Hosting",
      items: [
        {
          id: "domain-setup",
          title: "Connect Custom Domain",
          description: "Point jeffcptechnologies.com to Vercel",
          status: "required",
          details: "Add CNAME record: www.jeffcptechnologies.com → cname.vercel-dns.com",
          action: "Configure DNS",
        },
        {
          id: "ssl-cert",
          title: "SSL Certificate",
          description: "Automatic SSL via Vercel",
          status: "auto",
          details: "Vercel will automatically provision SSL certificate",
          action: "Automatic",
        },
        {
          id: "subdomain",
          title: "App Subdomain Setup",
          description: "Create app.jeffcptechnologies.com",
          status: "recommended",
          details: "CNAME: app.jeffcptechnologies.com → cname.vercel-dns.com",
          action: "Configure DNS",
        },
      ],
    },
    {
      category: "PayPal Integration",
      items: [
        {
          id: "paypal-business",
          title: "PayPal Business Account",
          description: "Upgrade to PayPal Business Account",
          status: "required",
          details: "Required for subscription billing and webhooks",
          action: "Upgrade Account",
        },
        {
          id: "paypal-app",
          title: "PayPal Developer App",
          description: "Create production PayPal app",
          status: "required",
          details: "Create app at developer.paypal.com for production",
          action: "Create App",
        },
        {
          id: "paypal-webhooks",
          title: "PayPal Webhooks",
          description: "Configure webhook endpoints",
          status: "required",
          details: "Webhook URL: https://jeffcptechnologies.com/api/webhooks/paypal",
          action: "Configure",
        },
        {
          id: "paypal-plans",
          title: "PayPal Subscription Plans",
          description: "Create billing plans in PayPal",
          status: "required",
          details: "Create plans for Basic ($29.99), Pro ($59.99), Family ($89.99), Business ($149.99)",
          action: "Create Plans",
        },
      ],
    },
    {
      category: "Environment Variables",
      items: [
        {
          id: "paypal-client-id",
          title: "NEXT_PUBLIC_PAYPAL_CLIENT_ID",
          description: "PayPal production client ID",
          status: "required",
          details: "Get from PayPal Developer Dashboard",
          action: "Add to Vercel",
        },
        {
          id: "paypal-secret",
          title: "PAYPAL_CLIENT_SECRET",
          description: "PayPal production secret",
          status: "required",
          details: "Get from PayPal Developer Dashboard",
          action: "Add to Vercel",
        },
        {
          id: "paypal-webhook-id",
          title: "PAYPAL_WEBHOOK_ID",
          description: "PayPal webhook ID",
          status: "required",
          details: "Get after creating webhook endpoint",
          action: "Add to Vercel",
        },
        {
          id: "database-url",
          title: "DATABASE_URL",
          description: "Production database connection",
          status: "configured",
          details: "Already configured via Neon integration",
          action: "Verified",
        },
      ],
    },
    {
      category: "Legal & Compliance",
      items: [
        {
          id: "privacy-policy",
          title: "Privacy Policy",
          description: "CCPA/GDPR compliant privacy policy",
          status: "required",
          details: "Required for credit data processing",
          action: "Create & Deploy",
        },
        {
          id: "terms-service",
          title: "Terms of Service",
          description: "Legal terms and conditions",
          status: "required",
          details: "Required for subscription service",
          action: "Create & Deploy",
        },
        {
          id: "credit-disclosures",
          title: "Credit Repair Disclosures",
          description: "CROA compliance disclosures",
          status: "required",
          details: "Required by Credit Repair Organizations Act",
          action: "Create & Deploy",
        },
      ],
    },
    {
      category: "Third-Party APIs",
      items: [
        {
          id: "credit-bureau-apis",
          title: "Credit Bureau API Keys",
          description: "Production API access",
          status: "required",
          details: "Experian, Equifax, TransUnion API keys",
          action: "Obtain Keys",
        },
        {
          id: "openai-api",
          title: "OpenAI API Key",
          description: "AI processing for disputes",
          status: "required",
          details: "Production-grade OpenAI API access",
          action: "Configure",
        },
        {
          id: "email-service",
          title: "Email Service Provider",
          description: "Transactional email service",
          status: "required",
          details: "SendGrid, Mailgun, or similar service",
          action: "Setup Service",
        },
      ],
    },
  ]

  const paypalSetupSteps = [
    {
      step: 1,
      title: "Upgrade to PayPal Business",
      description: "Visit paypal.com and upgrade your account to Business",
      url: "https://www.paypal.com/us/business",
    },
    {
      step: 2,
      title: "Access Developer Dashboard",
      description: "Go to PayPal Developer portal",
      url: "https://developer.paypal.com/",
    },
    {
      step: 3,
      title: "Create Production App",
      description: "Create new app for production environment",
      details: [
        "App Name: JeffTech AI Credit Repair",
        "Merchant ID: Your business PayPal account",
        "Features: Subscriptions, Payments",
      ],
    },
    {
      step: 4,
      title: "Get API Credentials",
      description: "Copy Client ID and Secret from app dashboard",
      details: ["Client ID (public) → NEXT_PUBLIC_PAYPAL_CLIENT_ID", "Client Secret (private) → PAYPAL_CLIENT_SECRET"],
    },
    {
      step: 5,
      title: "Create Subscription Plans",
      description: "Set up billing plans in PayPal",
      details: [
        "Basic Plan: $29.99/month",
        "Pro Plan: $59.99/month",
        "Family Plan: $89.99/month",
        "Business Plan: $149.99/month",
      ],
    },
    {
      step: 6,
      title: "Configure Webhooks",
      description: "Set up webhook endpoint for subscription events",
      details: [
        "Webhook URL: https://jeffcptechnologies.com/api/webhooks/paypal",
        "Events: BILLING.SUBSCRIPTION.*, PAYMENT.SALE.*",
      ],
    },
  ]

  const domainSetupSteps = [
    {
      step: 1,
      title: "Access GoDaddy DNS Management",
      description: "Log into your GoDaddy account and go to DNS Management",
      url: "https://dcc.godaddy.com/manage/dns",
    },
    {
      step: 2,
      title: "Add CNAME Record for Main Domain",
      description: "Point your domain to Vercel",
      details: ["Type: CNAME", "Name: www", "Value: cname.vercel-dns.com", "TTL: 1 Hour"],
    },
    {
      step: 3,
      title: "Add CNAME for App Subdomain",
      description: "Create subdomain for the application",
      details: ["Type: CNAME", "Name: app", "Value: cname.vercel-dns.com", "TTL: 1 Hour"],
    },
    {
      step: 4,
      title: "Configure Domain in Vercel",
      description: "Add domain to your Vercel project",
      details: [
        "Go to Vercel Dashboard → Project Settings → Domains",
        "Add: jeffcptechnologies.com",
        "Add: www.jeffcptechnologies.com",
        "Add: app.jeffcptechnologies.com",
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "configured":
      case "auto":
        return "green"
      case "required":
        return "red"
      case "recommended":
        return "yellow"
      default:
        return "gray"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "configured":
      case "auto":
        return CheckCircle
      case "required":
        return AlertTriangle
      default:
        return AlertTriangle
    }
  }

  const completionPercentage =
    (completedItems.length / deploymentSteps.reduce((acc, cat) => acc + cat.items.length, 0)) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Deployment Checklist</h1>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                {Math.round(completionPercentage)}% Complete
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Progress value={completionPercentage} className="w-32" />
              <Button className="bg-green-600 hover:bg-green-700">Deploy to Production</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="checklist" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="checklist">Deployment Checklist</TabsTrigger>
            <TabsTrigger value="paypal">PayPal Setup</TabsTrigger>
            <TabsTrigger value="domain">Domain Setup</TabsTrigger>
            <TabsTrigger value="go-live">Go Live Steps</TabsTrigger>
          </TabsList>

          <TabsContent value="checklist" className="space-y-6">
            {deploymentSteps.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                  <CardDescription>
                    {category.items.filter((item) => completedItems.includes(item.id)).length} of{" "}
                    {category.items.length} completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item) => {
                      const StatusIcon = getStatusIcon(item.status)
                      const isCompleted = completedItems.includes(item.id)

                      return (
                        <div key={item.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                          <Checkbox
                            checked={isCompleted}
                            onCheckedChange={() => toggleItem(item.id)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4
                                className={`font-medium ${isCompleted ? "line-through text-gray-500" : "text-gray-900"}`}
                              >
                                {item.title}
                              </h4>
                              <div className="flex items-center space-x-2">
                                <Badge
                                  className={`bg-${getStatusColor(item.status)}-100 text-${getStatusColor(item.status)}-800 border-${getStatusColor(item.status)}-200`}
                                >
                                  {item.status}
                                </Badge>
                                <StatusIcon className={`w-4 h-4 text-${getStatusColor(item.status)}-600`} />
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            <p className="text-xs text-gray-500 mt-1">{item.details}</p>
                            <Button variant="outline" size="sm" className="mt-2">
                              {item.action}
                            </Button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="paypal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                  PayPal Integration Setup Guide
                </CardTitle>
                <CardDescription>Complete step-by-step guide to set up PayPal for production</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {paypalSetupSteps.map((step, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{step.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                        {step.url && (
                          <Button variant="outline" size="sm" className="mt-2" asChild>
                            <a href={step.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Open Link
                            </a>
                          </Button>
                        )}
                        {step.details && (
                          <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                            <ul className="text-sm text-gray-700 space-y-1">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-center">
                                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PayPal Environment Variables</CardTitle>
                <CardDescription>Add these to your Vercel project settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Show Sensitive Values</span>
                    <Button variant="outline" size="sm" onClick={() => setShowSecrets(!showSecrets)}>
                      {showSecrets ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                  {[
                    { key: "NEXT_PUBLIC_PAYPAL_CLIENT_ID", value: "AYour_PayPal_Client_ID_Here", public: true },
                    { key: "PAYPAL_CLIENT_SECRET", value: "EYour_PayPal_Client_Secret_Here", public: false },
                    { key: "PAYPAL_WEBHOOK_ID", value: "WH-Your_Webhook_ID_Here", public: false },
                  ].map((env, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">{env.key}</span>
                        <div className="flex items-center space-x-2">
                          {env.public && (
                            <Badge variant="outline" className="text-xs">
                              Public
                            </Badge>
                          )}
                          <Button variant="outline" size="sm">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-2 p-2 bg-gray-50 rounded font-mono text-sm">
                        {showSecrets ? env.value : "••••••••••••••••"}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="domain" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-green-600" />
                  Domain Configuration for jeffcptechnologies.com
                </CardTitle>
                <CardDescription>Configure your GoDaddy domain to work with Vercel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {domainSetupSteps.map((step, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{step.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                        {step.url && (
                          <Button variant="outline" size="sm" className="mt-2" asChild>
                            <a href={step.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Open GoDaddy DNS
                            </a>
                          </Button>
                        )}
                        {step.details && (
                          <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                            <ul className="text-sm text-gray-700 space-y-1">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-center">
                                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="go-live" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>🚀 Go Live Sequence</CardTitle>
                <CardDescription>Final steps to launch your platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Complete all checklist items above",
                    "Deploy to Vercel production environment",
                    "Verify domain DNS propagation (24-48 hours)",
                    "Test PayPal integration with real transactions",
                    "Verify all environment variables are set",
                    "Run final end-to-end testing",
                    "Launch marketing campaign",
                    "Monitor system performance",
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-gray-900">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">🎉 Ready for Launch!</CardTitle>
                <CardDescription className="text-green-700">
                  Your JeffTech AI Credit Repair platform is ready to go live
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-green-800 mb-4">
                    Once you complete the checklist above, your platform will be live at:
                  </p>
                  <div className="space-y-2">
                    <div className="font-mono text-lg font-bold text-green-900">https://jeffcptechnologies.com</div>
                    <div className="font-mono text-lg font-bold text-green-900">https://app.jeffcptechnologies.com</div>
                  </div>
                  <p className="text-sm text-green-700 mt-4">© 2024 William Craig Jefferson | Jeffco Technologies</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
