"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Bot, MessageCircle, Heart, CheckCircle, Lightbulb, Users } from "lucide-react"

export function OnboardingAgent() {
  const [chatMessages, setChatMessages] = useState([
    {
      type: "agent",
      message:
        "Welcome to Jeffco Technologies! I'm Alex, your personal onboarding assistant. I'm here to help you get the most out of our autonomous dispute resolution platform.",
      timestamp: "Just now",
    },
    {
      type: "agent",
      message:
        "I'll guide you through setting up your account, connecting your financial accounts, and starting your first dispute. Ready to begin?",
      timestamp: "Just now",
    },
  ])

  const agentCapabilities = [
    {
      capability: "Personalized Guidance",
      description: "Tailored onboarding experience based on your specific needs and goals",
      icon: Users,
    },
    {
      capability: "Real-time Support",
      description: "Instant answers to questions and proactive assistance throughout onboarding",
      icon: MessageCircle,
    },
    {
      capability: "Progress Tracking",
      description: "Monitor your onboarding progress and ensure all steps are completed",
      icon: CheckCircle,
    },
    {
      capability: "Smart Recommendations",
      description: "AI-powered suggestions for optimal platform configuration and usage",
      icon: Lightbulb,
    },
    {
      capability: "Satisfaction Monitoring",
      description: "Continuous monitoring of your experience to ensure satisfaction",
      icon: Heart,
    },
  ]

  const onboardingSteps = [
    {
      step: 1,
      title: "Account Setup",
      description: "Create your secure account and verify your identity",
      status: "completed",
      duration: "2-3 minutes",
    },
    {
      step: 2,
      title: "Plan Selection",
      description: "Choose the subscription plan that best fits your needs",
      status: "current",
      duration: "3-5 minutes",
    },
    {
      step: 3,
      title: "Financial Account Connection",
      description: "Securely connect your bank accounts and credit cards",
      status: "pending",
      duration: "5-7 minutes",
    },
    {
      step: 4,
      title: "Credit Report Review",
      description: "Review your credit reports and identify potential disputes",
      status: "pending",
      duration: "10-15 minutes",
    },
    {
      step: 5,
      title: "First Dispute Setup",
      description: "Set up your first dispute with AI assistance",
      status: "pending",
      duration: "5-10 minutes",
    },
    {
      step: 6,
      title: "Platform Tour",
      description: "Explore key features and learn how to maximize your results",
      status: "pending",
      duration: "10-15 minutes",
    },
  ]

  const addMessage = (message: string, type: "user" | "agent") => {
    setChatMessages((prev) => [
      ...prev,
      {
        type,
        message,
        timestamp: "Just now",
      },
    ])
  }

  return (
    <div className="space-y-6">
      {/* Agent Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-600" />
            AI Onboarding Agent - Alex
          </CardTitle>
          <CardDescription>
            Your personal AI assistant for a smooth and successful onboarding experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Heart className="h-4 w-4" />
            <AlertDescription>
              <strong>Personalized Experience:</strong> Alex adapts to your specific needs, learning style, and pace to
              ensure you get maximum value from our platform.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Agent Capabilities</h4>
              {agentCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                  <capability.icon className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-sm">{capability.capability}</h5>
                    <p className="text-xs text-muted-foreground">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Live Chat with Alex</h4>
              <div className="border rounded-lg p-4 h-64 overflow-y-auto bg-gray-50">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`mb-3 ${msg.type === "agent" ? "text-left" : "text-right"}`}>
                    <div
                      className={`inline-block p-2 rounded-lg max-w-xs ${
                        msg.type === "agent" ? "bg-blue-100 text-blue-900" : "bg-purple-100 text-purple-900"
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => addMessage("I'm ready to start!", "user")}>
                  I'm ready to start!
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => addMessage("I have questions about the process", "user")}
                >
                  I have questions
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Onboarding Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Your Onboarding Journey</CardTitle>
          <CardDescription>Step-by-step guidance to get you started successfully</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {onboardingSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : step.status === "current"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {step.status === "completed" ? <CheckCircle className="h-4 w-4" /> : step.step}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{step.title}</h4>
                    <Badge
                      variant={
                        step.status === "completed" ? "default" : step.status === "current" ? "default" : "secondary"
                      }
                    >
                      {step.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">Estimated time: {step.duration}</p>
                </div>

                {step.status === "current" && <Button size="sm">Continue</Button>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
