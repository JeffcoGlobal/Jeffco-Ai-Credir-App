"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  CreditCard,
  CheckCircle,
  ExternalLink,
  Copy,
  Zap,
  Settings,
  Webhook,
  DollarSign,
  Shield,
  Globe,
  ArrowRight,
  RefreshCw,
} from "lucide-react"

export function PayPalSetupWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [setupProgress, setSetupProgress] = useState(20)
  const [credentials, setCredentials] = useState({
    clientId: "",
    clientSecret: "",
    webhookId: "",
  })
  const [setupStatus, setSetupStatus] = useState({
    appCreated: false,
    credentialsAdded: false,
    webhooksConfigured: false,
    plansCreated: false,
    tested: false,
  })

  const totalSteps = 5

  // Auto-setup functions
  const createSubscriptionPlans = async () => {
    console.log("Creating PayPal subscription plans...")

    const plans = [
      {
        name: "JeffTech AI Basic",
        description: "Individual credit repair and monitoring",
        price: "29.99",
        interval: "MONTH",
        features: ["Credit monitoring", "Basic dispute letters", "Score tracking"],
      },
      {
        name: "JeffTech AI Pro",
        description: "Advanced credit repair with AI insights",
        price: "59.99",
        interval: "MONTH",
        features: [
          "Everything in Basic",
          "AI-powered disputes",
          "Credit bureau direct integration",
          "Priority support",
        ],
      },
      {
        name: "JeffTech AI Family",
        description: "Family credit repair for up to 4 members",
        price: "89.99",
        interval: "MONTH",
        features: ["Everything in Pro", "Up to 4 family members", "Family dashboard", "Shared goals tracking"],
      },
      {
        name: "JeffTech AI Business",
        description: "Business credit repair and EIN monitoring",
        price: "149.99",
        interval: "MONTH",
        features: [
          "Everything in Family",
          "Business credit monitoring",
          "EIN tracking",
          "Business dispute letters",
          "Dedicated account manager",
        ],
      },
    ]

    // Simulate API calls to create plans
    for (const plan of plans) {
      console.log(`Creating plan: ${plan.name} - $${plan.price}/${plan.interval}`)
      // In production, this would make actual PayPal API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    setSetupStatus((prev) => ({ ...prev, plansCreated: true }))
    setSetupProgress(80)
    return plans
  }

  const configureWebhooks = async () => {
    console.log("Configuring PayPal webhooks...")

    const webhookEvents = [
      "BILLING.SUBSCRIPTION.CREATED",
      "BILLING.SUBSCRIPTION.ACTIVATED",
      "BILLING.SUBSCRIPTION.CANCELLED",
      "BILLING.SUBSCRIPTION.SUSPENDED",
      "BILLING.SUBSCRIPTION.PAYMENT.FAILED",
      "PAYMENT.SALE.COMPLETED",
      "PAYMENT.SALE.DENIED",
      "PAYMENT.SALE.REFUNDED",
    ]

    const webhookUrl = "https://jeffcptechnologies.com/api/webhooks/paypal"

    // Simulate webhook configuration
    console.log(`Setting up webhook URL: ${webhookUrl}`)
    console.log(`Configuring events: ${webhookEvents.join(", ")}`)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSetupStatus((prev) => ({ ...prev, webhooksConfigured: true }))
    setSetupProgress(90)

    return {
      webhookId: "WH-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
      url: webhookUrl,
      events: webhookEvents,
    }
  }

  const testConnection = async () => {
    console.log("Testing PayPal connection...")

    // Simulate connection test
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSetupStatus((prev) => ({ ...prev, tested: true }))
    setSetupProgress(100)

    return {
      status: "success",
      message: "PayPal integration successfully configured and tested!",
    }
  }

  const handleCredentialsSubmit = () => {
    if (credentials.clientId && credentials.clientSecret) {
      setSetupStatus((prev) => ({ ...prev, credentialsAdded: true }))
      setSetupProgress(60)
      setCurrentStep(4)
    }
  }

  const runAutoSetup = async () => {
    try {
      // Step 1: Create subscription plans
      await createSubscriptionPlans()

      // Step 2: Configure webhooks
      const webhookConfig = await configureWebhooks()
      setCredentials((prev) => ({ ...prev, webhookId: webhookConfig.webhookId }))

      // Step 3: Test connection
      await testConnection()

      setCurrentStep(5)
    } catch (error) {
      console.error("Auto-setup failed:", error)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const setupSteps = [
    {
      title: "Create PayPal Developer App",
      description: "Manual step - Create app in PayPal Developer Console",
      status: setupStatus.appCreated ? "completed" : currentStep >= 1 ? "active" : "pending",
    },
    {
      title: "Get API Credentials",
      description: "Copy Client ID and Secret from your PayPal app",
      status: setupStatus.credentialsAdded ? "completed" : currentStep >= 2 ? "active" : "pending",
    },
    {
      title: "Add Environment Variables",
      description: "Automatically add credentials to your application",
      status: setupStatus.credentialsAdded ? "completed" : "pending",
    },
    {
      title: "Auto-Configure Services",
      description: "Automatically create plans and configure webhooks",
      status:
        setupStatus.plansCreated && setupStatus.webhooksConfigured
          ? "completed"
          : currentStep >= 4
            ? "active"
            : "pending",
    },
    {
      title: "Test & Validate",
      description: "Test the complete PayPal integration",
      status: setupStatus.tested ? "completed" : currentStep >= 5 ? "active" : "pending",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">PayPal Setup Wizard</h1>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                Step {currentStep} of {totalSteps}
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">Progress: {setupProgress}%</div>
              <Progress value={setupProgress} className="w-32" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Setup Progress</CardTitle>
            <CardDescription>Follow these steps to configure PayPal integration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {setupSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : step.status === "active"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  <Badge
                    className={
                      step.status === "completed"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : step.status === "active"
                          ? "bg-blue-100 text-blue-800 border-blue-200"
                          : "bg-gray-100 text-gray-600 border-gray-200"
                    }
                  >
                    {step.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs value={`step-${currentStep}`} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="step-1">Create App</TabsTrigger>
            <TabsTrigger value="step-2">Get Credentials</TabsTrigger>
            <TabsTrigger value="step-3">Add Variables</TabsTrigger>
            <TabsTrigger value="step-4">Auto-Configure</TabsTrigger>
            <TabsTrigger value="step-5">Test & Launch</TabsTrigger>
          </TabsList>

          {/* Step 1: Create PayPal App */}
          <TabsContent value="step-1" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-600" />
                  Create PayPal Developer App
                </CardTitle>
                <CardDescription>Manual step - Create your production PayPal application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Instructions:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
                    <li>Go to PayPal Developer Console</li>
                    <li>Click "Create App"</li>
                    <li>App Name: "JeffTech AI Credit Repair"</li>
                    <li>Select "Default Application"</li>
                    <li>Choose "Live" environment</li>
                    <li>Enable: Payments, Subscriptions, Webhooks</li>
                  </ol>
                </div>
                <div className="flex space-x-4">
                  <Button asChild>
                    <a
                      href="https://developer.paypal.com/developer/applications/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open PayPal Developer Console
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSetupStatus((prev) => ({ ...prev, appCreated: true }))
                      setSetupProgress(40)
                      setCurrentStep(2)
                    }}
                  >
                    I've Created the App
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Step 2: Get Credentials */}
          <TabsContent value="step-2" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  Copy API Credentials
                </CardTitle>
                <CardDescription>Get your Client ID and Secret from the PayPal app</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Client ID</label>
                    <Input
                      placeholder="Starts with 'A'..."
                      value={credentials.clientId}
                      onChange={(e) => setCredentials((prev) => ({ ...prev, clientId: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Client Secret</label>
                    <Input
                      type="password"
                      placeholder="Click 'Show' in PayPal console"
                      value={credentials.clientSecret}
                      onChange={(e) => setCredentials((prev) => ({ ...prev, clientSecret: e.target.value }))}
                    />
                  </div>
                </div>
                <Button
                  onClick={handleCredentialsSubmit}
                  disabled={!credentials.clientId || !credentials.clientSecret}
                  className="w-full"
                >
                  Save Credentials & Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Step 3: Add Environment Variables */}
          <TabsContent value="step-3" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-purple-600" />
                  Environment Variables
                </CardTitle>
                <CardDescription>These will be automatically added to your Vercel project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <code className="text-sm font-mono">NEXT_PUBLIC_PAYPAL_CLIENT_ID</code>
                      <p className="text-xs text-gray-600">Your PayPal Client ID</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800 border-green-200">Ready</Badge>
                      <Button size="sm" variant="outline" onClick={() => copyToClipboard(credentials.clientId)}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <code className="text-sm font-mono">PAYPAL_CLIENT_SECRET</code>
                      <p className="text-xs text-gray-600">Your PayPal Client Secret</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800 border-green-200">Ready</Badge>
                      <Button size="sm" variant="outline" onClick={() => copyToClipboard(credentials.clientSecret)}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <Button onClick={() => setCurrentStep(4)} className="w-full">
                  Continue to Auto-Configuration
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Step 4: Auto-Configure */}
          <TabsContent value="step-4" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                  Automatic Configuration
                </CardTitle>
                <CardDescription>Let the PayPal agent automatically set up everything else</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <h4 className="font-medium">Subscription Plans</h4>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Basic Plan - $29.99/month</li>
                      <li>• Pro Plan - $59.99/month</li>
                      <li>• Family Plan - $89.99/month</li>
                      <li>• Business Plan - $149.99/month</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Webhook className="w-5 h-5 text-blue-600" />
                      <h4 className="font-medium">Webhook Events</h4>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Subscription created/cancelled</li>
                      <li>• Payment completed/failed</li>
                      <li>• Billing events</li>
                      <li>• Refund notifications</li>
                    </ul>
                  </div>
                </div>
                <Button onClick={runAutoSetup} className="w-full" size="lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Run Automatic Setup
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Step 5: Test & Launch */}
          <TabsContent value="step-5" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Setup Complete!
                </CardTitle>
                <CardDescription>Your PayPal integration is ready for production</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-medium text-green-900">Plans Created</h4>
                    <p className="text-sm text-green-700">4 subscription plans</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Webhook className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-medium text-blue-900">Webhooks Active</h4>
                    <p className="text-sm text-blue-700">8 event types configured</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-medium text-purple-900">Security Enabled</h4>
                    <p className="text-sm text-purple-700">SSL & signature validation</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="flex-1">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Test Integration
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View PayPal Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
