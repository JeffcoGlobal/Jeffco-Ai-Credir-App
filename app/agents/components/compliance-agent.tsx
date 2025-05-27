"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, AlertTriangle, CheckCircle, FileText, Clock } from "lucide-react"

export function ComplianceAgent() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const complianceChecks = [
    {
      regulation: "FCRA Section 611",
      status: "compliant",
      lastCheck: "2 minutes ago",
      confidence: 98,
      details: "Dispute process verification procedures fully compliant",
      nextCheck: "In 4 hours",
    },
    {
      regulation: "FDCPA Section 809",
      status: "compliant",
      lastCheck: "5 minutes ago",
      confidence: 96,
      details: "Debt validation notice requirements met",
      nextCheck: "In 6 hours",
    },
    {
      regulation: "CFPB Circular 2023-03",
      status: "review_needed",
      lastCheck: "1 hour ago",
      confidence: 85,
      details: "New automated decision-making guidelines require review",
      nextCheck: "In 2 hours",
    },
    {
      regulation: "State Licensing Requirements",
      status: "compliant",
      lastCheck: "30 minutes ago",
      confidence: 99,
      details: "All 50 state licenses current and valid",
      nextCheck: "In 24 hours",
    },
  ]

  const recentActions = [
    {
      timestamp: "2024-01-15 14:30",
      action: "Updated dispute letter templates for CFPB compliance",
      impact: "High",
      status: "completed",
    },
    {
      timestamp: "2024-01-15 13:45",
      action: "Reviewed new California privacy regulations",
      impact: "Medium",
      status: "completed",
    },
    {
      timestamp: "2024-01-15 12:15",
      action: "Automated compliance report generated",
      impact: "Low",
      status: "completed",
    },
  ]

  const runComplianceAnalysis = () => {
    setIsAnalyzing(true)
    setTimeout(() => setIsAnalyzing(false), 3000)
  }

  return (
    <div className="space-y-6">
      {/* Agent Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Compliance Monitoring Agent
          </CardTitle>
          <CardDescription>
            Autonomous compliance monitoring with real-time regulatory analysis and proactive risk mitigation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm text-muted-foreground">Compliance Score</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">247</div>
              <div className="text-sm text-muted-foreground">Regulations Monitored</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-muted-foreground">Issues Resolved Today</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">0</div>
              <div className="text-sm text-muted-foreground">Critical Violations</div>
            </div>
          </div>

          <Button onClick={runComplianceAnalysis} disabled={isAnalyzing} className="w-full">
            {isAnalyzing ? "Running Deep Analysis..." : "Run Comprehensive Compliance Analysis"}
          </Button>

          {isAnalyzing && (
            <div className="mt-4">
              <Progress value={66} />
              <p className="text-sm text-muted-foreground mt-2">Analyzing 247 regulatory requirements...</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Real-time Compliance Checks */}
      <Card>
        <CardHeader>
          <CardTitle>Real-time Compliance Monitoring</CardTitle>
          <CardDescription>Continuous monitoring of key regulatory requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceChecks.map((check, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{check.regulation}</h4>
                  <Badge variant={check.status === "compliant" ? "default" : "destructive"}>
                    {check.status === "compliant" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertTriangle className="h-3 w-3 mr-1" />
                    )}
                    {check.status === "compliant" ? "Compliant" : "Review Needed"}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground">{check.details}</p>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Confidence:</span>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={check.confidence} className="flex-1 h-2" />
                      <span className="font-medium">{check.confidence}%</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Last Check:</span>
                    <p className="font-medium">{check.lastCheck}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Next Check:</span>
                    <p className="font-medium">{check.nextCheck}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Autonomous Actions
          </CardTitle>
          <CardDescription>Actions taken by the compliance agent in the last 24 hours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActions.map((action, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{action.action}</p>
                  <p className="text-xs text-muted-foreground">{action.timestamp}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      action.impact === "High" ? "destructive" : action.impact === "Medium" ? "default" : "secondary"
                    }
                  >
                    {action.impact} Impact
                  </Badge>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Compliance Insights</CardTitle>
          <CardDescription>Predictive analysis and recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Predictive Alert:</strong> New CFPB guidance on AI decision-making expected within 30 days.
              Preemptive compliance review scheduled for next week.
            </AlertDescription>
          </Alert>

          <Alert>
            <FileText className="h-4 w-4" />
            <AlertDescription>
              <strong>Optimization Opportunity:</strong> Dispute resolution time can be reduced by 15% while maintaining
              full FCRA compliance by implementing suggested workflow changes.
            </AlertDescription>
          </Alert>

          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Success Metric:</strong> Zero compliance violations for 180 consecutive days. Current practices
              exceed industry standards by 23%.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
