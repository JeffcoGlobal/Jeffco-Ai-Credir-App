"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, CheckCircle, Brain } from "lucide-react"
import { ComplianceAgent } from "./components/compliance-agent"
import { RegulatoryAgent } from "./components/regulatory-agent"
import { RiskAssessmentAgent } from "./components/risk-assessment-agent"
import { RecommendationAgent } from "./components/recommendation-agent"
import { SecurityAgent } from "./components/security-agent"
import { ClientAdvocacyAgent } from "./components/client-advocacy-agent"

export default function AIAgentsPage() {
  const [agentStatus, setAgentStatus] = useState({
    compliance: { status: "active", confidence: 98, lastUpdate: "2 minutes ago" },
    regulatory: { status: "active", confidence: 95, lastUpdate: "5 minutes ago" },
    risk: { status: "active", confidence: 97, lastUpdate: "1 minute ago" },
    recommendation: { status: "active", confidence: 94, lastUpdate: "3 minutes ago" },
    security: { status: "active", confidence: 99, lastUpdate: "30 seconds ago" },
    advocacy: { status: "active", confidence: 96, lastUpdate: "4 minutes ago" },
  })

  const [systemHealth, setSystemHealth] = useState(97)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Brain className="h-10 w-10 text-blue-600" />
            Autonomous AI Agent Network
          </h1>
          <p className="text-lg text-gray-600">
            Intelligent agents ensuring compliance, security, and client advocacy 24/7
          </p>
        </div>

        {/* System Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Agent Network Status
            </CardTitle>
            <CardDescription>Real-time monitoring of all AI agents and system health</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{systemHealth}%</div>
                <div className="text-sm text-muted-foreground">System Health</div>
                <Progress value={systemHealth} className="mt-2" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6/6</div>
                <div className="text-sm text-muted-foreground">Agents Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Autonomous Operation</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(agentStatus).map(([agent, status]) => (
                <div key={agent} className="border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium capitalize">{agent} Agent</h4>
                    <Badge variant="default">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Confidence</span>
                      <span>{status.confidence}%</span>
                    </div>
                    <Progress value={status.confidence} className="h-2" />
                    <p className="text-xs text-muted-foreground">Last update: {status.lastUpdate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Agent Tabs */}
        <Tabs defaultValue="compliance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
            <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
            <TabsTrigger value="recommendation">Recommendations</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="advocacy">Client Advocacy</TabsTrigger>
          </TabsList>

          <TabsContent value="compliance">
            <ComplianceAgent />
          </TabsContent>

          <TabsContent value="regulatory">
            <RegulatoryAgent />
          </TabsContent>

          <TabsContent value="risk">
            <RiskAssessmentAgent />
          </TabsContent>

          <TabsContent value="recommendation">
            <RecommendationAgent />
          </TabsContent>

          <TabsContent value="security">
            <SecurityAgent />
          </TabsContent>

          <TabsContent value="advocacy">
            <ClientAdvocacyAgent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
