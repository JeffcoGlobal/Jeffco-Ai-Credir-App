"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Shield, FileText, DollarSign } from "lucide-react"
import { DisputeIdentification } from "./components/dispute-identification"
import { ComplianceCenter } from "./components/compliance-center"
import { SubscriptionUpgrades } from "./components/subscription-upgrades"
import { CreditBureauIntegration } from "./components/credit-bureau-integration"

export default function DisputePlatform() {
  const [activeDisputes, setActiveDisputes] = useState(12)
  const [resolvedDisputes, setResolvedDisputes] = useState(45)
  const [potentialSavings, setPotentialSavings] = useState(2847)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Autonomous Dispute Platform</h1>
          <p className="text-lg text-gray-600">
            AI-powered dispute identification and resolution with full regulatory compliance
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Disputes</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeDisputes}</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{resolvedDisputes}</div>
              <p className="text-xs text-muted-foreground">89% success rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${potentialSavings}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <Progress value={98} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="disputes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="disputes">Dispute Management</TabsTrigger>
            <TabsTrigger value="compliance">Compliance Center</TabsTrigger>
            <TabsTrigger value="integrations">Credit Bureaus</TabsTrigger>
            <TabsTrigger value="upgrades">Subscription Upgrades</TabsTrigger>
          </TabsList>

          <TabsContent value="disputes">
            <DisputeIdentification />
          </TabsContent>

          <TabsContent value="compliance">
            <ComplianceCenter />
          </TabsContent>

          <TabsContent value="integrations">
            <CreditBureauIntegration />
          </TabsContent>

          <TabsContent value="upgrades">
            <SubscriptionUpgrades />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
