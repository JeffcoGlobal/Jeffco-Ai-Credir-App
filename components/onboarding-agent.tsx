"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, Users, Brain, Shield, Star, MessageCircle } from "lucide-react"

export function OnboardingAgent() {
  const [currentStep, setCurrentStep] = useState(0)
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    creditGoals: "",
    currentScore: "",
  })
  const [satisfaction, setSatisfaction] = useState(0)

  const onboardingSteps = [
    {
      title: "Welcome & Introduction",
      description: "Personalized welcome and service overview",
      completed: true,
    },
    {
      title: "Account Setup",
      description: "Secure account creation and verification",
      completed: true,
    },
    {
      title: "Credit Goals Assessment",
      description: "Understanding your credit improvement objectives",
      completed: currentStep > 2,
    },
    {
      title: "Plan Selection",
      description: "Choosing the perfect subscription plan",
      completed: currentStep > 3,
    },
    {
      title: "Credit Connection",
      description: "Secure credit report integration",
      completed: currentStep > 4,
    },
    {
      title: "AI Setup Complete",
      description: "Autonomous credit repair activation",
      completed: currentStep > 5,
    },
  ]

  const satisfactionSurvey = [
    { question: "How easy was the signup process?", rating: 5 },
    { question: "How clear were the plan options?", rating: 4 },
    { question: "How satisfied are you with the onboarding?", rating: 5 },
    { question: "How likely are you to recommend us?", rating: 5 },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-6 h-6 mr-2 text-blue-600" />
            Customer Onboarding Agent
          </CardTitle>
          <CardDescription>AI-powered customer acquisition and satisfaction optimization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">94%</div>
              <div className="text-sm text-gray-600">Satisfaction Score</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">87%</div>
              <div className="text-sm text-gray-600">Completion Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">92%</div>
              <div className="text-sm text-gray-600">Retention Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Onboarding Progress Tracking</CardTitle>
          <CardDescription>Real-time monitoring of customer onboarding journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {onboardingSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed ? "bg-green-100" : "bg-gray-100"
                  }`}
                >
                  {step.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <span className="text-sm text-gray-600">{index + 1}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium ${step.completed ? "text-gray-900" : "text-gray-600"}`}>{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                {step.completed && <Badge className="bg-green-100 text-green-800 border-green-200">Complete</Badge>}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-gray-600">
                {onboardingSteps.filter((s) => s.completed).length}/{onboardingSteps.length}
              </span>
            </div>
            <Progress value={(onboardingSteps.filter((s) => s.completed).length / onboardingSteps.length) * 100} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-600" />
            Customer Satisfaction Survey
          </CardTitle>
          <CardDescription>Automated satisfaction tracking and feedback collection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {satisfactionSurvey.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.question}</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= item.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <Progress value={item.rating * 20} className="h-2" />
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-900">Customer Feedback</span>
            </div>
            <p className="text-sm text-blue-800 mt-2">
              "The onboarding process was incredibly smooth and the AI explanations made everything clear. I'm excited
              to see my credit improve!"
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Optimization Recommendations</CardTitle>
          <CardDescription>Machine learning insights for onboarding improvement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Reduce form fields by 23% to increase completion rate</span>
              </div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-medium">Add security badges to increase trust by 15%</span>
              </div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                <ArrowRight className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Implement progress indicators to reduce abandonment by 31%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
