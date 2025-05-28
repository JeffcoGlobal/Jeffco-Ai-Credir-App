"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  TrendingDown,
  CheckCircle,
  CreditCard,
  DollarSign,
  Brain,
  Shield,
  Bell,
  RefreshCw,
  Settings,
  LogOut,
  Zap,
  Clock,
  FileText,
  Target,
  Crown,
} from "lucide-react"

interface CreditDashboardProps {
  user: any
  onLogout: () => void
}

export function CreditDashboard({ user, onLogout }: CreditDashboardProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  const creditScore = 742
  const scoreChange = 12
  const lastUpdated = "December 15, 2024"
  const subscription = user?.subscription

  const getScoreColor = (score: number) => {
    if (score >= 750) return "text-green-600"
    if (score >= 700) return "text-blue-600"
    if (score >= 650) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 750) return "Excellent"
    if (score >= 700) return "Good"
    if (score >= 650) return "Fair"
    return "Poor"
  }

  const getPlanIcon = (plan: string) => {
    switch (plan?.toLowerCase()) {
      case "basic":
        return Shield
      case "pro":
        return Brain
      case "enterprise":
        return Crown
      default:
        return Shield
    }
  }

  const getPlanColor = (plan: string) => {
    switch (plan?.toLowerCase()) {
      case "basic":
        return "blue"
      case "pro":
        return "purple"
      case "enterprise":
        return "yellow"
      default:
        return "gray"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">JeffTech AI Credit</h1>
              {subscription && (
                <Badge
                  className={`${
                    getPlanColor(subscription.plan) === "blue"
                      ? "bg-blue-100 text-blue-800 border-blue-200"
                      : getPlanColor(subscription.plan) === "purple"
                        ? "bg-purple-100 text-purple-800 border-purple-200"
                        : "bg-yellow-100 text-yellow-800 border-yellow-200"
                  }`}
                >
                  {subscription.plan} Plan
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Alerts
              </Button>
              <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Subscription Status */}
        {subscription && (
          <Card className="mb-6 border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{subscription.plan} Plan Active</h3>
                    <p className="text-sm text-gray-600">
                      Next billing: {new Date(subscription.nextBilling).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-900">AI Repair Active</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Credit Score Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Credit Score Overview
                <Badge variant="secondary">Updated {lastUpdated}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className={`text-6xl font-bold ${getScoreColor(creditScore)}`}>{creditScore}</div>
                  <div className="text-lg text-gray-600 mt-1">{getScoreLabel(creditScore)} Credit</div>
                  <div className="flex items-center mt-2">
                    {scoreChange > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                    )}
                    <span className={scoreChange > 0 ? "text-green-600" : "text-red-600"}>
                      {scoreChange > 0 ? "+" : ""}
                      {scoreChange} points this month
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-32 h-32 relative">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke={creditScore >= 750 ? "#10b981" : creditScore >= 700 ? "#3b82f6" : "#f59e0b"}
                        strokeWidth="8"
                        strokeDasharray={`${(creditScore / 850) * 314} 314`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-gray-600">850 max</span>
                    </div>
                  </div>
                </div>
              </div>
              <Progress value={(creditScore / 850) * 100} className="h-2" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>300</span>
                <span>850</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                AI Repair Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Disputes</span>
                <Badge className="bg-blue-100 text-blue-800">7</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Items Removed</span>
                <Badge className="bg-green-100 text-green-800">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Next Action</span>
                <span className="text-sm text-gray-900">Tomorrow</span>
              </div>
              <div className="pt-2">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-900">AI Working...</span>
                </div>
                <Progress value={65} className="h-2" />
                <p className="text-xs text-gray-600 mt-1">Repair progress: 65% complete</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="ai-repair" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="ai-repair">AI Repair</TabsTrigger>
            <TabsTrigger value="disputes">Disputes</TabsTrigger>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>

          <TabsContent value="ai-repair" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-600" />
                    Autonomous Repair Progress
                  </CardTitle>
                  <CardDescription>AI is actively working on your credit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900">Processing Disputes</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          AI generated 3 new disputes for negative items found on your Experian report.
                        </p>
                        <p className="text-xs text-blue-600 mt-2">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-900">Item Removed</h4>
                        <p className="text-sm text-green-700 mt-1">
                          Successfully removed late payment from Capital One account.
                        </p>
                        <p className="text-xs text-green-600 mt-2">Yesterday</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-start space-x-3">
                      <Target className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-900">Strategy Update</h4>
                        <p className="text-sm text-yellow-700 mt-1">
                          AI identified new approach for collection account dispute.
                        </p>
                        <p className="text-xs text-yellow-600 mt-2">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Repair Timeline</CardTitle>
                  <CardDescription>Projected completion dates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Current Disputes</span>
                      <span className="text-sm text-blue-600">30-45 days</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Score Improvement</span>
                      <span className="text-sm text-green-600">60-90 days</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Target Score (750+)</span>
                      <span className="text-sm text-purple-600">4-6 months</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">+127</div>
                      <div className="text-sm text-gray-600">Projected Score Increase</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="disputes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Active Disputes
                </CardTitle>
                <CardDescription>AI-generated disputes currently in progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      item: "Late Payment - Chase Credit Card",
                      bureau: "Experian",
                      status: "In Progress",
                      submitted: "Dec 10, 2024",
                      expected: "Jan 15, 2025",
                      strategy: "Payment history verification",
                    },
                    {
                      id: 2,
                      item: "Collection Account - Medical",
                      bureau: "Equifax",
                      status: "Under Review",
                      submitted: "Dec 8, 2024",
                      expected: "Jan 12, 2025",
                      strategy: "HIPAA violation claim",
                    },
                    {
                      id: 3,
                      item: "Charge-off - Store Card",
                      bureau: "TransUnion",
                      status: "Pending Response",
                      submitted: "Dec 5, 2024",
                      expected: "Jan 10, 2025",
                      strategy: "Account validation request",
                    },
                  ].map((dispute) => (
                    <div key={dispute.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900">{dispute.item}</h4>
                          <p className="text-sm text-gray-600">{dispute.bureau}</p>
                        </div>
                        <Badge
                          className={
                            dispute.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : dispute.status === "Under Review"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }
                        >
                          {dispute.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Submitted:</span>
                          <span className="ml-2 text-gray-900">{dispute.submitted}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Expected:</span>
                          <span className="ml-2 text-gray-900">{dispute.expected}</span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="text-gray-600">AI Strategy:</span>
                        <span className="ml-2 text-gray-900">{dispute.strategy}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accounts" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Credit Cards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Chase Freedom Unlimited</h4>
                      <p className="text-sm text-gray-600">••••1234</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$2,450 / $15,000</p>
                      <p className="text-sm text-gray-600">16% utilization</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Capital One Venture</h4>
                      <p className="text-sm text-gray-600">••••5678</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$890 / $8,000</p>
                      <p className="text-sm text-gray-600">11% utilization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Loans & Mortgages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Home Mortgage</h4>
                      <p className="text-sm text-gray-600">Wells Fargo</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$285,000</p>
                      <p className="text-sm text-green-600">Current</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Auto Loan</h4>
                      <p className="text-sm text-gray-600">Toyota Financial</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$18,500</p>
                      <p className="text-sm text-green-600">Current</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-600" />
                    AI Credit Analysis
                  </CardTitle>
                  <CardDescription>Powered by advanced machine learning</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-900">Strong Payment History</h4>
                        <p className="text-sm text-green-700 mt-1">
                          Your consistent on-time payments are positively impacting your score.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900">Credit Utilization Improving</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          Your credit utilization has decreased by 8% this quarter.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Credit Factors Impact</CardTitle>
                  <CardDescription>How different factors affect your score</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Payment History</span>
                      <span className="text-sm text-green-600">Excellent</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Credit Utilization</span>
                      <span className="text-sm text-blue-600">Good</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Credit Age</span>
                      <span className="text-sm text-yellow-600">Fair</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="subscription" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {subscription &&
                      React.createElement(getPlanIcon(subscription.plan), {
                        className: `w-5 h-5 mr-2 ${
                          getPlanColor(subscription.plan) === "blue"
                            ? "text-blue-600"
                            : getPlanColor(subscription.plan) === "purple"
                              ? "text-purple-600"
                              : "text-yellow-600"
                        }`,
                      })}
                    Current Plan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {subscription ? (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Plan Type</span>
                        <Badge
                          className={`${
                            getPlanColor(subscription.plan) === "blue"
                              ? "bg-blue-100 text-blue-800 border-blue-200"
                              : getPlanColor(subscription.plan) === "purple"
                                ? "bg-purple-100 text-purple-800 border-purple-200"
                                : "bg-yellow-100 text-yellow-800 border-yellow-200"
                          }`}
                        >
                          {subscription.plan}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Status</span>
                        <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Billing Cycle</span>
                        <span className="text-sm text-gray-900">
                          {subscription.billing === "annual" ? "Annual" : "Monthly"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Next Billing</span>
                        <span className="text-sm text-gray-900">
                          {new Date(subscription.nextBilling).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="pt-4 border-t">
                        <Button variant="outline" className="w-full">
                          Manage Subscription
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600 mb-4">No active subscription</p>
                      <Button>Choose a Plan</Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage & Features</CardTitle>
                  <CardDescription>Your plan benefits and usage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Disputes This Month</span>
                      <span className="text-sm text-gray-900">7 / Unlimited</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">AI Analysis</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">24/7 Monitoring</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Expert Support</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  {subscription?.plan === "Enterprise" && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Dedicated Specialist</span>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Payment History */}
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>Your subscription payment history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "Dec 15, 2024",
                      amount: "$59.99",
                      status: "Paid",
                      method: "PayPal",
                    },
                    {
                      date: "Nov 15, 2024",
                      amount: "$59.99",
                      status: "Paid",
                      method: "PayPal",
                    },
                    {
                      date: "Oct 15, 2024",
                      amount: "$59.99",
                      status: "Paid",
                      method: "PayPal",
                    },
                  ].map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{payment.amount}</p>
                          <p className="text-sm text-gray-600">{payment.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800 border-green-200">{payment.status}</Badge>
                        <p className="text-sm text-gray-600 mt-1">{payment.method}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
