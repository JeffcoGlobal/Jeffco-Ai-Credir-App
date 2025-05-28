"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { CheckCircle, ArrowLeft, Brain, Crown, Shield, CreditCard, Lock, Users, Building } from "lucide-react"

interface SubscriptionPlansProps {
  user: any
  onSubscribe: (plan: any) => void
  onBack: () => void
}

export function SubscriptionPlans({ user, onSubscribe, onBack }: SubscriptionPlansProps) {
  const [isAnnual, setIsAnnual] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [showPayment, setShowPayment] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentData, setPaymentData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
  })

  const plans = [
    {
      id: "basic",
      name: "Basic",
      description: "Essential credit repair for individuals",
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      icon: Shield,
      color: "blue",
      features: [
        "AI Credit Analysis",
        "Basic Dispute Generation",
        "Monthly Credit Reports",
        "Email Support",
        "Score Tracking",
        "Educational Resources",
      ],
      limitations: ["Up to 5 disputes per month", "Basic AI recommendations", "Standard processing time"],
    },
    {
      id: "pro",
      name: "Pro",
      description: "Advanced AI-powered credit repair",
      monthlyPrice: 59.99,
      annualPrice: 599.99,
      icon: Brain,
      color: "purple",
      popular: true,
      features: [
        "Advanced AI Credit Repair",
        "Unlimited Dispute Generation",
        "Real-time Credit Monitoring",
        "Automated Follow-ups",
        "Priority Support",
        "Score Optimization",
        "Identity Monitoring",
        "Goodwill Letter Generation",
        "Credit Builder Recommendations",
      ],
      limitations: ["Unlimited disputes", "Advanced AI strategies", "Faster processing"],
    },
    {
      id: "family",
      name: "Family",
      description: "Credit repair for the whole family",
      monthlyPrice: 89.99,
      annualPrice: 899.99,
      icon: Users,
      color: "green",
      features: [
        "Everything in Pro Plan",
        "Up to 4 Family Members",
        "Individual Credit Dashboards",
        "Family Credit Goals",
        "Parental Controls & Monitoring",
        "Teen Credit Education",
        "Shared Family Reports",
        "Multi-User Support",
        "Family Financial Planning",
      ],
      limitations: ["4 family members included", "Shared family dashboard", "Individual progress tracking"],
    },
    {
      id: "business",
      name: "Business",
      description: "Business credit repair and monitoring",
      monthlyPrice: 149.99,
      annualPrice: 1499.99,
      icon: Building,
      color: "orange",
      features: [
        "Business Credit Repair",
        "Personal & Business Reports",
        "Vendor Credit Building",
        "Business Credit Monitoring",
        "Trade Line Management",
        "Business Credit Education",
        "Dedicated Business Specialist",
        "Legal Document Preparation",
        "Credit Line Optimization",
        "Business Loan Preparation",
      ],
      limitations: ["Business and personal credit", "Dedicated business support", "Advanced business strategies"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Complete autonomous credit repair suite",
      monthlyPrice: 199.99,
      annualPrice: 1999.99,
      icon: Crown,
      color: "gold",
      features: [
        "Everything in All Plans",
        "Unlimited Family Members",
        "Business Credit Included",
        "White-glove Service",
        "Dedicated Credit Specialist",
        "Legal Team Access",
        "Court Document Preparation",
        "Creditor Negotiations",
        "Custom Dispute Strategies",
        "24/7 Phone Support",
        "Guaranteed Results",
        "Priority Processing",
      ],
      limitations: ["Unlimited everything", "Human expert oversight", "Fastest results guaranteed"],
    },
  ]

  const getPrice = (plan: any) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice
  }

  const getSavings = (plan: any) => {
    const monthlyCost = plan.monthlyPrice * 12
    const annualCost = plan.annualPrice
    return monthlyCost - annualCost
  }

  const handlePaymentSubmit = async (plan: any) => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate successful payment
    onSubscribe({
      ...plan,
      subscriptionId: `sub_${Math.random().toString(36).substr(2, 9)}`,
      status: "active",
      billing: isAnnual ? "annual" : "monthly",
      paymentMethod: "Mock PayPal",
    })

    setIsProcessing(false)
  }

  const MockPaymentForm = ({ plan }: { plan: any }) => (
    <div className="space-y-4 p-6 bg-gray-50 rounded-lg border">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Lock className="w-5 h-5 text-green-600" />
        <span className="text-sm text-gray-600">Secure Mock Payment (Demo Mode)</span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input
            type="email"
            placeholder="your@email.com"
            value={paymentData.email}
            onChange={(e) => setPaymentData({ ...paymentData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
          <Input
            type="text"
            placeholder="4111 1111 1111 1111"
            value={paymentData.cardNumber}
            onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
            <Input
              type="text"
              placeholder="MM/YY"
              value={paymentData.expiryDate}
              onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
            <Input
              type="text"
              placeholder="123"
              value={paymentData.cvv}
              onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
          <Input
            type="text"
            placeholder="John Doe"
            value={paymentData.name}
            onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
          />
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-bold">
            ${getPrice(plan)}/{isAnnual ? "year" : "month"}
          </span>
        </div>

        <div className="space-y-2">
          <Button className="w-full" onClick={() => handlePaymentSubmit(plan)} disabled={isProcessing}>
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="w-4 h-4 mr-2" />
                Complete Subscription
              </>
            )}
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setSelectedPlan(null)
              setShowPayment(false)
            }}
            disabled={isProcessing}
          >
            Cancel
          </Button>
        </div>
      </div>

      <div className="text-xs text-gray-500 text-center">
        This is a demo payment form. No real charges will be made.
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">JeffTech AI Credit</h1>
            </div>
            {user && <div className="text-sm text-gray-600">Welcome back, {user.name}</div>}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Credit Repair Plan</h1>
          <p className="text-xl text-gray-600 mb-8">Select the perfect plan for your credit repair journey</p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!isAnnual ? "font-semibold" : "text-gray-600"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm ${isAnnual ? "font-semibold" : "text-gray-600"}`}>Annual</span>
            {isAnnual && <Badge className="bg-green-100 text-green-800 border-green-200">Save up to $200</Badge>}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {plans.map((plan) => {
            const IconComponent = plan.icon
            const price = getPrice(plan)
            const savings = getSavings(plan)

            return (
              <Card
                key={plan.id}
                className={`relative ${
                  plan.popular
                    ? "border-2 border-purple-500 shadow-lg scale-105"
                    : "border-2 border-gray-200 hover:border-gray-300"
                } transition-all duration-200`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plan.color === "blue"
                        ? "bg-blue-100"
                        : plan.color === "purple"
                          ? "bg-purple-100"
                          : "bg-yellow-100"
                    }`}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${
                        plan.color === "blue"
                          ? "text-blue-600"
                          : plan.color === "purple"
                            ? "text-purple-600"
                            : "text-yellow-600"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-gray-900">
                      ${price}
                      <span className="text-lg font-normal text-gray-600">/{isAnnual ? "year" : "month"}</span>
                    </div>
                    {isAnnual && savings > 0 && (
                      <div className="text-sm text-green-600 mt-1">Save ${savings.toFixed(2)} per year</div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    {selectedPlan === plan.id ? (
                      <MockPaymentForm plan={plan} />
                    ) : (
                      <Button
                        className={`w-full ${plan.popular ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        Choose {plan.name}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Features Comparison */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center">Feature Comparison</CardTitle>
            <CardDescription className="text-center">See what's included in each plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-2 text-sm">Features</th>
                    <th className="text-center py-4 px-2 text-sm">Basic</th>
                    <th className="text-center py-4 px-2 text-sm">Pro</th>
                    <th className="text-center py-4 px-2 text-sm">Family</th>
                    <th className="text-center py-4 px-2 text-sm">Business</th>
                    <th className="text-center py-4 px-2 text-sm">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-3 px-2 text-xs">AI Credit Analysis</td>
                    <td className="text-center py-3 px-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2 text-xs">Family Members</td>
                    <td className="text-center py-3 px-2 text-xs">1</td>
                    <td className="text-center py-3 px-2 text-xs">1</td>
                    <td className="text-center py-3 px-2 text-xs">4</td>
                    <td className="text-center py-3 px-2 text-xs">1</td>
                    <td className="text-center py-3 px-2 text-xs">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2 text-xs">Business Credit</td>
                    <td className="text-center py-3 px-2 text-xs">-</td>
                    <td className="text-center py-3 px-2 text-xs">-</td>
                    <td className="text-center py-3 px-2 text-xs">-</td>
                    <td className="text-center py-3 px-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2 text-xs">Dedicated Specialist</td>
                    <td className="text-center py-3 px-2 text-xs">-</td>
                    <td className="text-center py-3 px-2 text-xs">-</td>
                    <td className="text-center py-3 px-2 text-xs">-</td>
                    <td className="text-center py-3 px-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2 text-xs">Guaranteed Results</td>
                    <td className="text-center py-3 px-2 text-xs">-</td>
                    <td className="text-center py-3 px-2 text-xs">-</td>
                    <td className="text-center py-3 px-2 text-xs">-</td>
                    <td className="text-center py-3 px-2 text-xs">-</td>
                    <td className="text-center py-3 px-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Money Back Guarantee */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">30-Day Money-Back Guarantee</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're confident in our AI-powered credit repair service. If you're not satisfied with your results within
            the first 30 days, we'll refund your money completely.
          </p>
        </div>
      </div>
    </div>
  )
}
