"use client"

import { useState, useEffect } from "react"
import { LandingPage } from "@/components/landing-page"
import { CreditDashboard } from "@/components/credit-dashboard"
import { SubscriptionPlans } from "@/components/subscription-plans"
import { UserDocumentation } from "@/components/user-documentation"
import { Button } from "@/components/ui/button"
import { Book } from "lucide-react"

export default function HomePage() {
  const [user, setUser] = useState<any>(null)
  const [currentView, setCurrentView] = useState<"landing" | "plans" | "dashboard" | "docs">("landing")

  // Simulate user authentication state
  useEffect(() => {
    const savedUser = localStorage.getItem("jefftech-user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      setCurrentView("dashboard")
    }
  }, [])

  const handleLogin = (userData: any) => {
    setUser(userData)
    localStorage.setItem("jefftech-user", JSON.stringify(userData))
    if (userData.subscription?.status === "active") {
      setCurrentView("dashboard")
    } else {
      setCurrentView("plans")
    }
  }

  const handleSubscribe = (plan: any) => {
    const updatedUser = {
      ...user,
      subscription: {
        plan: plan.name,
        status: "active",
        nextBilling: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      },
    }
    setUser(updatedUser)
    localStorage.setItem("jefftech-user", JSON.stringify(updatedUser))
    setCurrentView("dashboard")
  }

  // Documentation button for all views
  const DocsButton = () => (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={() => setCurrentView(currentView === "docs" ? "landing" : "docs")}
        className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
        size="lg"
      >
        <Book className="w-5 h-5 mr-2" />
        {currentView === "docs" ? "Back to App" : "User Guide"}
      </Button>
    </div>
  )

  // Add new navigation buttons in the DocsButton component area
  const AgentNavigation = () => (
    <div className="fixed bottom-4 left-4 z-50 space-y-2">
      <Button
        onClick={() => window.open("/paypal-setup", "_blank")}
        className="bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg block w-full animate-pulse"
        size="sm"
      >
        🚀 PayPal Setup Wizard
      </Button>
      <Button
        onClick={() => window.open("/systems", "_blank")}
        className="bg-green-600 hover:bg-green-700 text-white shadow-lg block w-full"
        size="sm"
      >
        Systems Agent
      </Button>
      <Button
        onClick={() => window.open("/enhanced", "_blank")}
        className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg block w-full"
        size="sm"
      >
        Enhanced Suite
      </Button>
      <Button
        onClick={() => window.open("/paypal", "_blank")}
        className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg block w-full"
        size="sm"
      >
        PayPal Agent
      </Button>
      <Button
        onClick={() => window.open("/deploy", "_blank")}
        className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg block w-full"
        size="sm"
      >
        Deploy Strategy
      </Button>
    </div>
  )

  if (currentView === "docs") {
    return (
      <>
        <UserDocumentation />
        <DocsButton />
        <AgentNavigation />
      </>
    )
  }

  if (currentView === "landing") {
    return (
      <>
        <LandingPage onLogin={handleLogin} onGetStarted={() => setCurrentView("plans")} />
        <DocsButton />
        <AgentNavigation />
      </>
    )
  }

  if (currentView === "plans") {
    return (
      <>
        <SubscriptionPlans user={user} onSubscribe={handleSubscribe} onBack={() => setCurrentView("landing")} />
        <DocsButton />
        <AgentNavigation />
      </>
    )
  }

  return (
    <>
      <CreditDashboard
        user={user}
        onLogout={() => {
          setUser(null)
          localStorage.removeItem("jefftech-user")
          setCurrentView("landing")
        }}
      />
      <DocsButton />
      <AgentNavigation />
    </>
  )
}
