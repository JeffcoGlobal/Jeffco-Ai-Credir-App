"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  FileText,
  Users,
  Brain,
  TrendingUp,
  CheckCircle,
  Settings,
  UserCheck,
  Scale,
  Copyright,
  Lightbulb,
  Target,
  DollarSign,
  Award,
  Lock,
  Handshake,
} from "lucide-react"

export function BusinessAutomationSuite() {
  const [activeAgent, setActiveAgent] = useState("onboarding")
  const [complianceStatus, setComplianceStatus] = useState("monitoring")

  const agents = [
    {
      id: "onboarding",
      name: "Customer Onboarding Agent",
      status: "active",
      description: "Ensures seamless customer acquisition and satisfaction",
      metrics: { satisfaction: 94, completion: 87, retention: 92 },
      icon: Users,
      color: "blue",
    },
    {
      id: "compliance",
      name: "Compliance Monitoring Agent",
      status: "active",
      description: "Continuous legal and regulatory compliance monitoring",
      metrics: { compliance: 100, alerts: 3, resolved: 15 },
      icon: Shield,
      color: "green",
    },
    {
      id: "affiliate",
      name: "Affiliate Management Agent",
      status: "active",
      description: "Manages partner relationships and affiliate programs",
      metrics: { partners: 47, revenue: 23400, growth: 18 },
      icon: UserCheck,
      color: "purple",
    },
    {
      id: "innovation",
      name: "Innovation & Growth Agent",
      status: "active",
      description: "AI-powered business intelligence and opportunity identification",
      metrics: { opportunities: 12, implemented: 8, roi: 340 },
      icon: Lightbulb,
      color: "orange",
    },
    {
      id: "ip-protection",
      name: "IP Protection Agent",
      status: "active",
      description: "Intellectual property monitoring and protection",
      metrics: { patents: 5, trademarks: 3, monitoring: 100 },
      icon: Copyright,
      color: "red",
    },
  ]

  const legalDocuments = [
    {
      category: "User Agreements",
      documents: [
        { name: "Terms of Service", status: "active", lastUpdated: "2024-12-15" },
        { name: "Privacy Policy", status: "active", lastUpdated: "2024-12-15" },
        { name: "Credit Repair Agreement", status: "active", lastUpdated: "2024-12-10" },
        { name: "Subscription Terms", status: "active", lastUpdated: "2024-12-12" },
        { name: "Data Processing Agreement", status: "active", lastUpdated: "2024-12-08" },
      ],
    },
    {
      category: "Business Agreements",
      documents: [
        { name: "Affiliate Partner Agreement", status: "active", lastUpdated: "2024-12-14" },
        { name: "Credit Bureau API Agreement", status: "active", lastUpdated: "2024-12-01" },
        { name: "Payment Processor Agreement", status: "active", lastUpdated: "2024-11-28" },
        { name: "Business Associate Agreement", status: "active", lastUpdated: "2024-12-05" },
        { name: "Vendor Service Agreement", status: "active", lastUpdated: "2024-12-03" },
      ],
    },
    {
      category: "Compliance Documents",
      documents: [
        { name: "FCRA Compliance Manual", status: "active", lastUpdated: "2024-12-15" },
        { name: "GDPR Compliance Guide", status: "active", lastUpdated: "2024-12-10" },
        { name: "SOC 2 Documentation", status: "active", lastUpdated: "2024-12-12" },
        { name: "PCI DSS Compliance", status: "active", lastUpdated: "2024-12-08" },
        { name: "State Licensing Documentation", status: "active", lastUpdated: "2024-12-14" },
      ],
    },
  ]

  const intellectualProperty = [
    {
      type: "Utility Patents",
      items: [
        {
          title: "Autonomous AI Credit Repair System",
          status: "Filed",
          number: "US17/123,456",
          description: "AI-powered autonomous credit dispute generation and management system",
        },
        {
          title: "Machine Learning Credit Score Optimization",
          status: "Pending",
          number: "US17/234,567",
          description: "ML algorithms for predictive credit score improvement strategies",
        },
        {
          title: "Real-time Credit Monitoring Network",
          status: "Filed",
          number: "US17/345,678",
          description: "Distributed system for continuous credit report monitoring and analysis",
        },
      ],
    },
    {
      type: "Provisional Patents",
      items: [
        {
          title: "AI-Powered Financial Health Assessment",
          status: "Filed",
          number: "US63/456,789",
          description: "Comprehensive financial health analysis using machine learning",
        },
        {
          title: "Blockchain Credit Verification System",
          status: "Pending",
          number: "US63/567,890",
          description: "Decentralized credit verification and dispute resolution platform",
        },
      ],
    },
    {
      type: "Trademarks",
      items: [
        {
          title: "JeffTech AI",
          status: "Registered",
          number: "TM-2024-001",
          description: "Primary brand trademark for AI credit services",
        },
        {
          title: "Autonomous Credit Repair",
          status: "Pending",
          number: "TM-2024-002",
          description: "Service mark for autonomous credit repair technology",
        },
        {
          title: "CreditAI Pro",
          status: "Filed",
          number: "TM-2024-003",
          description: "Product trademark for professional credit repair suite",
        },
      ],
    },
    {
      type: "Copyrights",
      items: [
        {
          title: "JeffTech AI Software Platform",
          status: "Registered",
          number: "CR-2024-001",
          description: "Complete software platform and user interface",
        },
        {
          title: "AI Training Datasets",
          status: "Registered",
          number: "CR-2024-002",
          description: "Proprietary credit analysis training data and algorithms",
        },
      ],
    },
  ]

  const partnershipOpportunities = [
    {
      category: "Financial Institutions",
      partners: [
        { name: "Regional Credit Unions", potential: "High", status: "Negotiating" },
        { name: "Community Banks", potential: "Medium", status: "Exploring" },
        { name: "Fintech Startups", potential: "High", status: "Active" },
      ],
    },
    {
      category: "Technology Partners",
      partners: [
        { name: "Cloud Infrastructure Providers", potential: "High", status: "Active" },
        { name: "AI/ML Platform Vendors", potential: "Medium", status: "Evaluating" },
        { name: "Cybersecurity Companies", potential: "High", status: "Negotiating" },
      ],
    },
    {
      category: "Distribution Channels",
      partners: [
        { name: "Financial Advisors Network", potential: "High", status: "Pilot" },
        { name: "Real Estate Professionals", potential: "Medium", status: "Exploring" },
        { name: "Insurance Agencies", potential: "Medium", status: "Planning" },
      ],
    },
  ]

  const revenueStreams = [
    {
      current: "Subscription Revenue",
      monthly: 450000,
      growth: 23,
      description: "Core subscription plans (Basic, Pro, Family, Business, Enterprise)",
    },
    {
      current: "Affiliate Commissions",
      monthly: 85000,
      growth: 45,
      description: "Partner referral commissions and revenue sharing",
    },
    {
      current: "Enterprise Licensing",
      monthly: 120000,
      growth: 67,
      description: "White-label licensing to financial institutions",
    },
    {
      current: "API Access Fees",
      monthly: 35000,
      growth: 89,
      description: "Third-party API access and integration fees",
    },
  ]

  const aiRecommendations = [
    {
      category: "Product Enhancement",
      priority: "High",
      recommendations: [
        "Add cryptocurrency credit monitoring",
        "Implement voice-activated credit assistance",
        "Develop mobile-first credit education platform",
        "Create AI-powered financial planning tools",
      ],
    },
    {
      category: "Market Expansion",
      priority: "Medium",
      recommendations: [
        "Launch in Canadian market",
        "Develop Spanish-language platform",
        "Create small business credit solutions",
        "Partner with mortgage brokers",
      ],
    },
    {
      category: "Revenue Optimization",
      priority: "High",
      recommendations: [
        "Introduce premium add-on services",
        "Develop corporate training programs",
        "Create affiliate marketing platform",
        "Launch credit coaching certification",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">JeffTech AI - Business Automation Suite</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800 border-green-200">All Systems Operational</Badge>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Admin Panel
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="agents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="agents">AI Agents</TabsTrigger>
            <TabsTrigger value="legal">Legal Docs</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="ip">IP Protection</TabsTrigger>
            <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => {
                const IconComponent = agent.icon
                return (
                  <Card
                    key={agent.id}
                    className={`cursor-pointer transition-all ${
                      activeAgent === agent.id ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-md"
                    }`}
                    onClick={() => setActiveAgent(agent.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <IconComponent
                          className={`w-8 h-8 ${
                            agent.color === "blue"
                              ? "text-blue-600"
                              : agent.color === "green"
                                ? "text-green-600"
                                : agent.color === "purple"
                                  ? "text-purple-600"
                                  : agent.color === "orange"
                                    ? "text-orange-600"
                                    : "text-red-600"
                          }`}
                        />
                        <Badge className="bg-green-100 text-green-800 border-green-200">{agent.status}</Badge>
                      </div>
                      <CardTitle className="text-lg">{agent.name}</CardTitle>
                      <CardDescription>{agent.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {Object.entries(agent.metrics).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 capitalize">{key}:</span>
                            <span className="font-semibold">
                              {typeof value === "number" && value > 100 ? `$${value.toLocaleString()}` : `${value}%`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Agent Details */}
            <Card>
              <CardHeader>
                <CardTitle>Agent Performance Dashboard</CardTitle>
                <CardDescription>Real-time monitoring and control of autonomous business agents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Customer Satisfaction</h4>
                    <div className="text-3xl font-bold text-green-600">94%</div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Compliance Score</h4>
                    <div className="text-3xl font-bold text-blue-600">100%</div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Revenue Growth</h4>
                    <div className="text-3xl font-bold text-purple-600">+23%</div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Innovation Index</h4>
                    <div className="text-3xl font-bold text-orange-600">8.7/10</div>
                    <Progress value={87} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legal" className="space-y-6">
            {legalDocuments.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-600" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <div>
                            <h4 className="font-medium text-gray-900">{doc.name}</h4>
                            <p className="text-sm text-gray-600">Last updated: {doc.lastUpdated}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-green-100 text-green-800 border-green-200">{doc.status}</Badge>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    FCRA Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dispute Procedures</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Consumer Rights</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Data Accuracy</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Adverse Action Notices</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-blue-600" />
                    Data Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">GDPR Compliance</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">CCPA Compliance</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">SOC 2 Type II</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">PCI DSS Level 1</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="w-5 h-5 mr-2 text-purple-600" />
                    State Licensing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">All 50 States</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Renewal Tracking</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Compliance Monitoring</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Regulatory Updates</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Compliance Monitoring Dashboard</CardTitle>
                <CardDescription>Real-time compliance status and automated monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">Compliance Score</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">0</div>
                    <div className="text-sm text-gray-600">Active Violations</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">3</div>
                    <div className="text-sm text-gray-600">Pending Reviews</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">15</div>
                    <div className="text-sm text-gray-600">Updates This Month</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ip" className="space-y-6">
            {intellectualProperty.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Copyright className="w-5 h-5 mr-2 text-red-600" />
                    {category.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <Badge
                            className={
                              item.status === "Registered" || item.status === "Filed"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-yellow-100 text-yellow-800 border-yellow-200"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <p className="text-xs text-gray-500">Application #: {item.number}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="partnerships" className="space-y-6">
            {partnershipOpportunities.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Handshake className="w-5 h-5 mr-2 text-purple-600" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{partner.name}</h4>
                          <p className="text-sm text-gray-600">Potential: {partner.potential}</p>
                        </div>
                        <Badge
                          className={
                            partner.status === "Active"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : partner.status === "Negotiating"
                                ? "bg-blue-100 text-blue-800 border-blue-200"
                                : "bg-gray-100 text-gray-800 border-gray-200"
                          }
                        >
                          {partner.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {revenueStreams.map((stream, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{stream.current}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-green-600">${stream.monthly.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Monthly Revenue</div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600">+{stream.growth}% growth</span>
                      </div>
                      <p className="text-xs text-gray-500">{stream.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics & Projections</CardTitle>
                <CardDescription>AI-powered revenue forecasting and optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-green-600">$690K</div>
                    <div className="text-sm text-gray-600">Total Monthly Revenue</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600">+34%</div>
                    <div className="text-sm text-gray-600">YoY Growth Rate</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-purple-600">$1.2M</div>
                    <div className="text-sm text-gray-600">12-Month Projection</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-insights" className="space-y-6">
            {aiRecommendations.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-blue-600" />
                      {category.category}
                    </div>
                    <Badge
                      className={
                        category.priority === "High"
                          ? "bg-red-100 text-red-800 border-red-200"
                          : "bg-yellow-100 text-yellow-800 border-yellow-200"
                      }
                    >
                      {category.priority} Priority
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.recommendations.map((rec, recIndex) => (
                      <div key={recIndex} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Lightbulb className="w-5 h-5 text-yellow-600" />
                          <span className="text-gray-900">{rec}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Implement
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card>
              <CardHeader>
                <CardTitle>AI Business Intelligence Dashboard</CardTitle>
                <CardDescription>Machine learning insights for strategic decision making</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-blue-600">12</div>
                    <div className="text-sm text-gray-600">Active Opportunities</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-green-600">340%</div>
                    <div className="text-sm text-gray-600">Projected ROI</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-purple-600">8</div>
                    <div className="text-sm text-gray-600">Implemented Ideas</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-orange-600">9.2/10</div>
                    <div className="text-sm text-gray-600">Innovation Score</div>
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
