"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowRight, ArrowLeft, CheckCircle, Shield } from "lucide-react"

interface OnboardingFlowProps {
  currentStep: number
  setCurrentStep: (step: number) => void
  onComplete: () => void
}

export function OnboardingFlow({ currentStep, setCurrentStep, onComplete }: OnboardingFlowProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedPlan: "premium",
    bankConnected: false,
    creditReportReviewed: false,
  })

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Welcome! Let's get started</h3>
            <p className="text-muted-foreground">First, let's set up your account with some basic information.</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Choose Your Plan</h3>
            <p className="text-muted-foreground">
              Select the plan that best fits your needs. You can upgrade or downgrade anytime.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  id: "basic",
                  name: "Basic",
                  price: "$29.99",
                  features: ["Basic dispute resolution", "Email support"],
                },
                {
                  id: "premium",
                  name: "Premium",
                  price: "$59.99",
                  features: ["Credit monitoring", "Priority support"],
                  popular: true,
                },
                {
                  id: "professional",
                  name: "Professional",
                  price: "$89.99",
                  features: ["Bank monitoring", "Dedicated manager"],
                },
              ].map((plan) => (
                <div
                  key={plan.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    formData.selectedPlan === plan.id ? "border-blue-500 bg-blue-50" : "hover:border-gray-300"
                  }`}
                  onClick={() => setFormData({ ...formData, selectedPlan: plan.id })}
                >
                  {plan.popular && (
                    <div className="text-center mb-2">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Most Popular</span>
                    </div>
                  )}
                  <h4 className="font-semibold">{plan.name}</h4>
                  <p className="text-2xl font-bold">{plan.price}</p>
                  <ul className="text-sm text-muted-foreground mt-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect Your Financial Accounts</h3>
            <p className="text-muted-foreground">
              Securely connect your bank accounts and credit cards for automated monitoring.
            </p>
            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                Your data is protected with bank-level 256-bit encryption. We never store your login credentials.
              </AlertDescription>
            </Alert>
            <div className="space-y-3">
              <Button
                className="w-full"
                variant="outline"
                onClick={() => setFormData({ ...formData, bankConnected: true })}
              >
                {formData.bankConnected ? <CheckCircle className="h-4 w-4 mr-2" /> : null}
                Connect Bank Account
              </Button>
              <Button className="w-full" variant="outline">
                Connect Credit Cards
              </Button>
              <Button className="w-full" variant="outline">
                Connect Investment Accounts
              </Button>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Review Your Credit Reports</h3>
            <p className="text-muted-foreground">
              Let's analyze your credit reports to identify potential disputes and opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Experian", "Equifax", "TransUnion"].map((bureau) => (
                <div key={bureau} className="border rounded-lg p-4">
                  <h4 className="font-semibold">{bureau}</h4>
                  <p className="text-sm text-muted-foreground">Credit Score: 720</p>
                  <Button size="sm" className="mt-2 w-full">
                    Review Report
                  </Button>
                </div>
              ))}
            </div>
            <Button className="w-full" onClick={() => setFormData({ ...formData, creditReportReviewed: true })}>
              {formData.creditReportReviewed ? <CheckCircle className="h-4 w-4 mr-2" /> : null}
              AI Analysis Complete
            </Button>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Set Up Your First Dispute</h3>
            <p className="text-muted-foreground">
              Our AI has identified potential disputes. Let's set up your first one.
            </p>
            <div className="space-y-3">
              {[
                { type: "Billing Error", merchant: "ABC Services", amount: "$89.99", confidence: "95%" },
                { type: "Duplicate Charge", merchant: "Netflix", amount: "$15.99", confidence: "88%" },
                { type: "Unauthorized Transaction", merchant: "Unknown", amount: "$156.00", confidence: "92%" },
              ].map((dispute, idx) => (
                <div key={idx} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{dispute.type}</h4>
                      <p className="text-sm text-muted-foreground">
                        {dispute.merchant} - {dispute.amount}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Confidence: {dispute.confidence}</p>
                      <Button size="sm" className="mt-1">
                        Start Dispute
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Platform Tour Complete!</h3>
            <p className="text-muted-foreground">
              Congratulations! You're all set up and ready to start resolving disputes automatically.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">What's Next?</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Monitor your dashboard for dispute progress</li>
                  <li>• Check your email for updates</li>
                  <li>• Explore advanced features</li>
                  <li>• Contact support if you need help</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">Quick Stats</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Average resolution time: 15-30 days</li>
                  <li>• Success rate: 89%</li>
                  <li>• Customer satisfaction: 4.8/5</li>
                  <li>• 24/7 AI monitoring active</li>
                </ul>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Step {currentStep} of {totalSteps}
        </CardTitle>
        <CardDescription>
          <Progress value={progress} className="mt-2" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        {renderStep()}

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button onClick={nextStep}>
            {currentStep === totalSteps ? "Complete Setup" : "Next"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
