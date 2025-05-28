"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Book,
  Play,
  CheckCircle,
  ArrowRight,
  Users,
  Shield,
  Brain,
  FileText,
  Settings,
  HelpCircle,
  Star,
  Target,
  TrendingUp,
} from "lucide-react"

export function UserDocumentation() {
  const [activeStep, setActiveStep] = useState(0)

  const gettingStartedSteps = [
    {
      title: "Sign Up & Choose Plan",
      description: "Create your account and select the perfect subscription plan",
      icon: Users,
      details: [
        "Visit the JeffTech AI Credit homepage",
        "Click 'Get Started' to view subscription plans",
        "Choose between Basic, Pro, Family, Business, or Enterprise",
        "Complete the secure payment process",
        "Receive confirmation email with account details",
      ],
    },
    {
      title: "Connect Your Credit",
      description: "Securely link your credit reports from all three bureaus",
      icon: Shield,
      details: [
        "Navigate to the dashboard after login",
        "Click 'Connect Credit Reports' button",
        "Provide verification information (SSN, address, etc.)",
        "Authorize access to Experian, Equifax, and TransUnion",
        "Wait for initial credit analysis (usually 2-5 minutes)",
      ],
    },
    {
      title: "AI Analysis Begins",
      description: "Our AI immediately starts analyzing your credit profile",
      icon: Brain,
      details: [
        "AI scans all three credit reports for negative items",
        "Identifies inaccurate, outdated, or unverifiable information",
        "Creates personalized dispute strategy",
        "Generates initial dispute letters automatically",
        "Sets up 24/7 monitoring for future changes",
      ],
    },
    {
      title: "Track Your Progress",
      description: "Monitor your credit repair journey in real-time",
      icon: Target,
      details: [
        "View your credit score and trends on the dashboard",
        "Check active disputes and their status",
        "Receive notifications when items are removed",
        "Track score improvements over time",
        "Access detailed progress reports",
      ],
    },
  ]

  const features = [
    {
      category: "AI Credit Repair",
      icon: Brain,
      items: [
        {
          name: "Autonomous Dispute Generation",
          description: "AI creates personalized dispute letters based on your unique credit profile",
        },
        {
          name: "Smart Follow-ups",
          description: "Automatic tracking and follow-up on all disputes with credit bureaus",
        },
        {
          name: "Strategy Optimization",
          description: "AI learns from results and adapts strategies for better outcomes",
        },
      ],
    },
    {
      category: "Credit Monitoring",
      icon: Shield,
      items: [
        {
          name: "24/7 Credit Monitoring",
          description: "Continuous monitoring of all three credit bureaus for changes",
        },
        {
          name: "Real-time Alerts",
          description: "Instant notifications for score changes, new accounts, or inquiries",
        },
        {
          name: "Identity Protection",
          description: "Dark web monitoring and identity theft protection",
        },
      ],
    },
    {
      category: "Score Optimization",
      icon: TrendingUp,
      items: [
        {
          name: "Utilization Management",
          description: "AI recommendations for optimal credit card utilization",
        },
        {
          name: "Payment Timing",
          description: "Strategic payment timing to maximize score improvements",
        },
        {
          name: "Credit Mix Optimization",
          description: "Guidance on improving your credit account mix",
        },
      ],
    },
  ]

  const planFeatures = {
    basic: [
      "AI Credit Analysis",
      "Basic Dispute Generation (5/month)",
      "Monthly Credit Reports",
      "Email Support",
      "Score Tracking",
    ],
    pro: [
      "Advanced AI Credit Repair",
      "Unlimited Dispute Generation",
      "Real-time Credit Monitoring",
      "Priority Support",
      "Score Optimization",
    ],
    family: [
      "Everything in Pro",
      "Up to 4 Family Members",
      "Individual Dashboards",
      "Parental Controls",
      "Family Financial Planning",
    ],
    business: [
      "Business Credit Repair",
      "Personal & Business Reports",
      "Dedicated Business Specialist",
      "Trade Line Management",
      "Business Loan Preparation",
    ],
    enterprise: [
      "Everything Included",
      "Unlimited Family Members",
      "White-glove Service",
      "Legal Team Access",
      "Guaranteed Results",
    ],
  }

  const faqs = [
    {
      question: "How long does credit repair take?",
      answer:
        "Most customers see initial results within 30-45 days, with significant improvements typically occurring within 3-6 months. The timeline depends on the complexity of your credit issues and how credit bureaus respond to disputes.",
    },
    {
      question: "Is the AI really autonomous?",
      answer:
        "Yes! Our AI handles dispute generation, submission, follow-ups, and strategy adjustments automatically. You don't need to do anything except monitor your progress. For complex cases, human experts may provide additional oversight.",
    },
    {
      question: "What's included in the Family plan?",
      answer:
        "The Family plan covers up to 4 family members, each with their own credit monitoring and repair. Parents get controls to monitor teen credit building, and the family shares educational resources and financial planning tools.",
    },
    {
      question: "How does Business credit repair work?",
      answer:
        "Business plans include both personal and business credit repair. We help establish business credit, build vendor relationships, optimize trade lines, and prepare your business for loans and credit lines.",
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, we'll provide a full refund. Enterprise customers also get guaranteed results.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use bank-level encryption, secure data centers, and comply with all financial privacy regulations. Your credit information is never shared with third parties without your explicit consent.",
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
                <Book className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">JeffTech AI Credit - User Guide</h1>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">Documentation v1.0</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="getting-started" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="plans">Plans</TabsTrigger>
            <TabsTrigger value="testing">Testing Guide</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="w-6 h-6 mr-2 text-blue-600" />
                  Getting Started with JeffTech AI Credit
                </CardTitle>
                <CardDescription>
                  Follow these simple steps to begin your autonomous credit repair journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {gettingStartedSteps.map((step, index) => {
                    const IconComponent = step.icon
                    return (
                      <div
                        key={index}
                        className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                          activeStep === index ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setActiveStep(index)}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">
                                Step {index + 1}: {step.title}
                              </h3>
                              {activeStep === index && <ArrowRight className="w-5 h-5 text-blue-600" />}
                            </div>
                            <p className="text-gray-600 mb-4">{step.description}</p>
                            {activeStep === index && (
                              <ul className="space-y-2">
                                {step.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <IconComponent className="w-6 h-6 mr-2 text-blue-600" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border-l-4 border-blue-200 pl-4">
                          <h4 className="font-medium text-gray-900 mb-1">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="plans" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plans Comparison</CardTitle>
                <CardDescription>Choose the plan that best fits your credit repair needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {Object.entries(planFeatures).map(([planName, features]) => (
                    <div key={planName} className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold capitalize text-gray-900">{planName}</h3>
                        <div className="text-2xl font-bold text-blue-600 mt-2">
                          $
                          {planName === "basic"
                            ? "29.99"
                            : planName === "pro"
                              ? "59.99"
                              : planName === "family"
                                ? "89.99"
                                : planName === "business"
                                  ? "149.99"
                                  : "199.99"}
                          <span className="text-sm text-gray-600">/month</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-6 h-6 mr-2 text-purple-600" />
                  Testing Guide & Demo Scenarios
                </CardTitle>
                <CardDescription>How to test the JeffTech AI Credit application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Demo Mode Notice</h4>
                  <p className="text-yellow-800 text-sm">
                    This application is running in demo mode with mock data and simulated payment processing. No real
                    charges will be made.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Test Scenarios</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">1. Landing Page Flow</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Click "Get Started" to view plans</li>
                        <li>• Toggle between monthly/annual billing</li>
                        <li>• Select different plans to see features</li>
                        <li>• Test the demo login functionality</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">2. Subscription Process</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Choose any subscription plan</li>
                        <li>• Fill out the mock payment form</li>
                        <li>• Test the processing simulation</li>
                        <li>• Verify dashboard access after subscription</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">3. Dashboard Features</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Navigate through all dashboard tabs</li>
                        <li>• Test the refresh functionality</li>
                        <li>• View AI repair progress</li>
                        <li>• Check subscription management</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">4. User Experience</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Test responsive design on mobile</li>
                        <li>• Verify all buttons and links work</li>
                        <li>• Check loading states and animations</li>
                        <li>• Test logout and re-login flow</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Demo Credentials</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Demo User:</strong>
                        <br />
                        Name: John Doe
                        <br />
                        Email: john@example.com
                      </div>
                      <div>
                        <strong>Test Payment:</strong>
                        <br />
                        Card: 4111 1111 1111 1111
                        <br />
                        Any future expiry date and CVV
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-6 h-6 mr-2 text-green-600" />
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>Common questions about JeffTech AI Credit Repair</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need More Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Documentation</h4>
                    <p className="text-sm text-gray-600">Comprehensive guides and tutorials</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Support Team</h4>
                    <p className="text-sm text-gray-600">24/7 customer support available</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Success Stories</h4>
                    <p className="text-sm text-gray-600">Learn from other customers</p>
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
