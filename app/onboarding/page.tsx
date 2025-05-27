"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, MessageCircle } from "lucide-react"
import { OnboardingAgent } from "./components/onboarding-agent"
import { OnboardingFlow } from "./components/onboarding-flow"
import { CustomerSatisfactionSurvey } from "./components/customer-satisfaction-survey"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [onboardingComplete, setOnboardingComplete] = useState(false)

  const onboardingMetrics = [
    {
      metric: "Completion Rate",
      value: "94%",
      description: "Percentage of users completing onboarding",
    },
    {
      metric: "Time to Value",
      value: "< 10 min",
      description: "Average time to first successful dispute",
    },
    {
      metric: "Satisfaction Score",
      value: "4.8/5",
      description: "Average onboarding satisfaction rating",
    },
    {
      metric: "Support Tickets",
      value: "< 2%",
      description: "Onboarding-related support requests",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <UserPlus className="h-10 w-10 text-purple-600" />
            Client Onboarding Experience
          </h1>
          <p className="text-lg text-gray-600">
            Intelligent onboarding agent ensuring smooth client experience and satisfaction
          </p>
        </div>

        {/* Onboarding Metrics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Onboarding Performance Metrics
            </CardTitle>
            <CardDescription>Key metrics tracking onboarding success and client satisfaction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {onboardingMetrics.map((metric, index) => (
                <div key={index} className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-1">{metric.metric}</div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Onboarding Agent */}
        <OnboardingAgent />

        {/* Onboarding Flow */}
        <OnboardingFlow
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          onComplete={() => setOnboardingComplete(true)}
        />

        {/* Customer Satisfaction Survey */}
        {onboardingComplete && <CustomerSatisfactionSurvey />}
      </div>
    </div>
  )
}
