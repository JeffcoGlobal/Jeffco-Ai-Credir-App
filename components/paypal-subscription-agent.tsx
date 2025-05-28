"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  Users,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Settings,
  Webhook,
  Activity,
  Shield,
  Zap,
  Globe,
  Lock,
} from "lucide-react"

export function PayPalSubscriptionAgent() {
  const [connectionStatus, setConnectionStatus] = useState("connected")
  const [lastSync, setLastSync] = useState(new Date())
  const [webhookStatus, setWebhookStatus] = useState("active")

  // PayPal Integration Status
  const paypalMetrics = [
    {
      name: "Active Subscriptions",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: Users,
    },
    {
      name: "Monthly Revenue",
      value: "$450,230",
      change: "+23%",
      trend: "up",
      icon: DollarSign,
    },
    {
      name: "Success Rate",
      value: "99.7%",
      change: "+0.2%",
      trend: "up",
      icon: CheckCircle,
    },
    {
      name: "Failed Payments",
      value: "8",
      change: "-45%",
      trend: "down",
      icon: AlertTriangle,
    },
  ]

  // Subscription Plans Performance
  const planPerformance = [
    {
      plan: "Basic",
      subscribers: 1247,
      revenue: 37410,
      churnRate: 2.3,
      growth: 15,
    },
    {
      plan: "Pro",
      subscribers: 892,
      revenue: 53508,
      churnRate: 1.8,
      growth: 28,
    },
    {
      plan: "Family",
      subscribers: 456,
      revenue: 41044,
      churnRate: 1.2,
      growth: 34,
    },
    {
      plan: "Business",
      subscribers: 189,
      revenue: 28350,
      churnRate: 0.9,
      growth: 45,
    },
    {
      plan: "Enterprise",
      subscribers: 63,
      revenue: 12597,
      churnRate: 0.5,
      growth: 67,
    },
  ]

  // Webhook Events
  const webhookEvents = [
    {
      event: "BILLING.SUBSCRIPTION.CREATED",
      count: 156,
      status: "processed",
      lastReceived: "2024-12-15 10:30:15",
    },
    {
      event: "BILLING.SUBSCRIPTION.ACTIVATED",
      count: 142,
      status: "processed",
      lastReceived: "2024-12-15 10:28:45",
    },
    {
      event: "PAYMENT.SALE.COMPLETED",
      count: 2847,
      status: "processed",
      lastReceived: "2024-12-15 10:29:30",
    },
    {
      event: "BILLING.SUBSCRIPTION.CANCELLED",
      count: 23,
      status: "processed",
      lastReceived: "2024-12-15 09:45:12",
    },
    {
      event: "PAYMENT.SALE.DENIED",
      count: 8,
      status: "processed",
      lastReceived: "2024-12-15 08:15:30",
    },
  ]

  // API Health Monitoring
  const apiEndpoints = [
    {
      endpoint: "/v1/billing/subscriptions",
      status: "healthy",
      responseTime: "245ms",
      uptime: "99.98%",
      lastCheck: "2024-12-15 10:30:00",
    },
    {
      endpoint: "/v1/payments/payment",
      status: "healthy",
      responseTime: "189ms",
      uptime: "99.97%",
      lastCheck: "2024-12-15 10:30:00",
    },
    {
      endpoint: "/v1/notifications/webhooks",
      status: "healthy",
      responseTime: "156ms",
      uptime: "99.99%",
      lastCheck: "2024-12-15 10:30:00",
    },
    {
      endpoint: "/v1/billing/plans",
      status: "healthy",
      responseTime: "134ms",
      uptime: "99.96%",
      lastCheck: "2024-12-15 10:30:00",
    },
  ]

  // Automated Actions
  const automatedActions = [
    {
      action: "Failed Payment Retry",
      description: "Automatically retry failed payments after 24 hours",
      status: "active",
      lastTriggered: "2024-12-15 08:30:00",
      successRate: "78%",
    },
    {
      action: "Subscription Renewal",
      description: "Process automatic subscription renewals",
      status: "active",
      lastTriggered: "2024-12-15 10:15:00",
      successRate: "99.7%",
    },
    {
      action: "Dunning Management",
      description: "Handle failed payment recovery sequences",
      status: "active",
      lastTriggered: "2024-12-15 09:45:00",
      successRate: "65%",
    },
    {
      action: "Churn Prevention",
      description: "Identify and prevent subscription cancellations",
      status: "active",
      lastTriggered: "2024-12-15 07:20:00",
      successRate: "42%",
    },
  ]

  const handleSync = () => {
    setLastSync(new Date())
    console.log("Syncing PayPal data...")
  }

  const handleWebhookTest = () => {
    console.log("Testing webhook endpoints...")
  }

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
              <h1 className="text-xl font-bold text-gray-900">PayPal Subscription Agent</h1>
              <Badge className="bg-green-100 text-green-800 border-green-200">Connected</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleSync}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Sync Now
              </Button>
              <Button variant="outline" size="sm" onClick={handleWebhookTest}>
                <Webhook className="w-4 h-4 mr-2" />
                Test Webhooks
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configure
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {paypalMetrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                      <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                      <div className="flex items-center mt-1">
                        <TrendingUp
                          className={`w-4 h-4 mr-1 ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}
                        />
                        <span className={`text-sm ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Tabs defaultValue="subscriptions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="api-health">API Health</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="subscriptions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plans Performance</CardTitle>
                <CardDescription>Real-time metrics for all subscription plans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {planPerformance.map((plan, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{plan.plan} Plan</h4>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                          {plan.subscribers} subscribers
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Revenue:</span>
                          <div className="font-medium">${plan.revenue.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Churn Rate:</span>
                          <div className="font-medium">{plan.churnRate}%</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Growth:</span>
                          <div className="font-medium text-green-600">+{plan.growth}%</div>
                        </div>
                        <div>
                          <span className="text-gray-600">ARPU:</span>
                          <div className="font-medium">${(plan.revenue / plan.subscribers).toFixed(2)}</div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Progress value={plan.growth} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Webhook className="w-5 h-5 mr-2 text-purple-600" />
                  Webhook Event Monitoring
                </CardTitle>
                <CardDescription>Real-time webhook event processing and status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {webhookEvents.map((webhook, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Activity className="w-5 h-5 text-blue-600" />
                        <div>
                          <h4 className="font-medium text-gray-900">{webhook.event}</h4>
                          <p className="text-sm text-gray-600">Last received: {webhook.lastReceived}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-medium">{webhook.count}</div>
                          <div className="text-sm text-gray-600">events</div>
                        </div>
                        <Badge className="bg-green-100 text-green-800 border-green-200">{webhook.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Webhook Configuration</CardTitle>
                <CardDescription>Manage webhook endpoints and security</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-900">Webhook Endpoint Active</span>
                    </div>
                    <p className="text-sm text-green-700 mt-1">https://jefftech-ai.vercel.app/api/webhooks/paypal</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Security Verification</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">SSL/TLS encryption enabled</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Lock className="w-5 h-5 text-purple-600" />
                        <span className="font-medium">Signature Validation</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">All webhooks verified with PayPal signature</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api-health" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-green-600" />
                  PayPal API Health Monitoring
                </CardTitle>
                <CardDescription>Real-time monitoring of PayPal API endpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <div>
                          <h4 className="font-medium text-gray-900">{endpoint.endpoint}</h4>
                          <p className="text-sm text-gray-600">Last check: {endpoint.lastCheck}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right text-sm">
                          <div className="font-medium">{endpoint.responseTime}</div>
                          <div className="text-gray-600">response time</div>
                        </div>
                        <div className="text-right text-sm">
                          <div className="font-medium">{endpoint.uptime}</div>
                          <div className="text-gray-600">uptime</div>
                        </div>
                        <Badge className="bg-green-100 text-green-800 border-green-200">{endpoint.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                  Automated Payment Management
                </CardTitle>
                <CardDescription>AI-powered subscription and payment automation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {automatedActions.map((action, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{action.action}</h4>
                        <Badge className="bg-green-100 text-green-800 border-green-200">{action.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Last Triggered:</span>
                          <div className="font-medium">{action.lastTriggered}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Success Rate:</span>
                          <div className="font-medium text-green-600">{action.successRate}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>Comprehensive subscription revenue analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-green-600">$450K</div>
                    <div className="text-sm text-gray-600">Monthly Recurring Revenue</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600">2,847</div>
                    <div className="text-sm text-gray-600">Active Subscribers</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-purple-600">1.6%</div>
                    <div className="text-sm text-gray-600">Average Churn Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>PayPal Integration Settings</CardTitle>
                <CardDescription>Configure PayPal API and webhook settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">API Configuration</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Client ID:</span>
                          <Badge className="bg-green-100 text-green-800 border-green-200">Configured</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Client Secret:</span>
                          <Badge className="bg-green-100 text-green-800 border-green-200">Configured</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Environment:</span>
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">Production</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">Webhook Configuration</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Webhook ID:</span>
                          <Badge className="bg-green-100 text-green-800 border-green-200">Configured</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">SSL Verification:</span>
                          <Badge className="bg-green-100 text-green-800 border-green-200">Enabled</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Event Types:</span>
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">12 Active</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t">
                    <div className="flex space-x-4">
                      <Button>Update Configuration</Button>
                      <Button variant="outline">Test Connection</Button>
                      <Button variant="outline">View Logs</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
