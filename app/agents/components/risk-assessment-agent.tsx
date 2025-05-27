"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, TrendingDown, Shield, Target } from "lucide-react"

export function RiskAssessmentAgent() {
  const [riskScore, setRiskScore] = useState(23) // Lower is better

  const riskCategories = [
    {
      category: "Regulatory Compliance",
      score: 15,
      trend: "improving",
      factors: ["CFPB guidance adherence", "State licensing compliance", "Data protection standards"],
      mitigation: "Automated compliance monitoring active",
    },
    {
      category: "Operational Risk",
      score: 28,
      trend: "stable",
      factors: ["System uptime", "Processing accuracy", "Response times"],
      mitigation: "Redundant systems and automated failover",
    },
    {
      category: "Financial Risk",
      score: 12,
      trend: "improving",
      factors: ["Revenue concentration", "Partner dependencies", "Market volatility"],
      mitigation: "Diversified revenue streams and partner network",
    },
    {
      category: "Reputational Risk",
      score: 8,
      trend: "stable",
      factors: ["Customer satisfaction", "Media coverage", "Industry standing"],
      mitigation: "Proactive customer advocacy and transparency",
    },
  ]

  const riskAlerts = [
    {
      level: "medium",
      title: "Increased Dispute Volume Detected",
      description: "15% increase in dispute submissions over last 7 days",
      impact: "Potential processing delays",
      recommendation: "Scale processing capacity and monitor quality metrics",
      timeframe: "Next 48 hours",
    },
    {
      level: "low",
      title: "New Competitor Analysis",
      description: "New market entrant with similar service offering",
      impact: "Potential market share impact",
      recommendation: "Enhance unique value propositions and client retention",
      timeframe: "Next 30 days",
    },
    {
      level: "high",
      title: "Regulatory Change Impact",
      description: "Upcoming CFPB guidance may require process modifications",
      impact: "Compliance risk if not addressed",
      recommendation: "Immediate review and preparation for implementation",
      timeframe: "Next 14 days",
    },
  ]

  const mitigationStrategies = [
    {
      risk: "Regulatory Non-Compliance",
      strategy: "Automated Compliance Monitoring",
      effectiveness: 94,
      status: "active",
      description: "Real-time monitoring of all regulatory requirements with automated alerts",
    },
    {
      risk: "System Downtime",
      strategy: "Multi-Region Redundancy",
      effectiveness: 99,
      status: "active",
      description: "Distributed infrastructure with automatic failover capabilities",
    },
    {
      risk: "Data Breach",
      strategy: "Zero-Trust Security Model",
      effectiveness: 97,
      status: "active",
      description: "End-to-end encryption with continuous security monitoring",
    },
    {
      risk: "Client Dissatisfaction",
      strategy: "Proactive Client Advocacy",
      effectiveness: 91,
      status: "active",
      description: "AI-powered client outcome optimization and satisfaction monitoring",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Risk Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            Risk Assessment Agent
          </CardTitle>
          <CardDescription>
            Continuous risk monitoring and predictive analysis with automated mitigation strategies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-3xl font-bold text-green-600">{riskScore}</div>
              <div className="text-sm text-muted-foreground">Overall Risk Score</div>
              <div className="text-xs text-green-600 mt-1">↓ Low Risk</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">156</div>
              <div className="text-sm text-muted-foreground">Risk Factors Monitored</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-muted-foreground">Active Mitigations</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-sm text-muted-foreground">Current Alerts</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Risk Level</span>
              <span className="text-green-600 font-medium">Low ({riskScore}/100)</span>
            </div>
            <Progress value={riskScore} className="h-3" />
            <p className="text-xs text-muted-foreground">Risk score updated every 15 minutes</p>
          </div>
        </CardContent>
      </Card>

      {/* Risk Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Category Analysis</CardTitle>
          <CardDescription>Detailed breakdown of risk factors across key business areas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskCategories.map((category, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{category.category}</h4>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={category.score < 20 ? "default" : category.score < 40 ? "secondary" : "destructive"}
                    >
                      {category.score < 20 ? "Low" : category.score < 40 ? "Medium" : "High"} Risk
                    </Badge>
                    <Badge variant="outline">
                      {category.trend === "improving" ? (
                        <TrendingDown className="h-3 w-3 mr-1 text-green-500" />
                      ) : (
                        <Target className="h-3 w-3 mr-1" />
                      )}
                      {category.trend}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Risk Score</span>
                    <span>{category.score}/100</span>
                  </div>
                  <Progress value={category.score} className="h-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground font-medium">Key Factors:</span>
                    <ul className="mt-1 space-y-1">
                      {category.factors.map((factor, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          • {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-medium">Mitigation:</span>
                    <p className="mt-1 text-muted-foreground">{category.mitigation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Active Risk Alerts</CardTitle>
          <CardDescription>Current risk alerts requiring attention or monitoring</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {riskAlerts.map((alert, index) => (
            <Alert
              key={index}
              className={
                alert.level === "high"
                  ? "border-red-200 bg-red-50"
                  : alert.level === "medium"
                    ? "border-yellow-200 bg-yellow-50"
                    : "border-blue-200 bg-blue-50"
              }
            >
              <AlertTriangle
                className={`h-4 w-4 ${alert.level === "high" ? "text-red-600" : alert.level === "medium" ? "text-yellow-600" : "text-blue-600"}`}
              />
              <AlertDescription>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <strong>{alert.title}</strong>
                    <Badge
                      variant={
                        alert.level === "high" ? "destructive" : alert.level === "medium" ? "default" : "secondary"
                      }
                    >
                      {alert.level.toUpperCase()}
                    </Badge>
                  </div>
                  <p>{alert.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium">Impact:</span> {alert.impact}
                    </div>
                    <div>
                      <span className="font-medium">Timeframe:</span> {alert.timeframe}
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Recommendation:</span> {alert.recommendation}
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          ))}
        </CardContent>
      </Card>

      {/* Mitigation Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Active Risk Mitigation Strategies
          </CardTitle>
          <CardDescription>Automated and proactive risk mitigation measures</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mitigationStrategies.map((strategy, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{strategy.strategy}</h4>
                  <Badge variant="default">Active</Badge>
                </div>

                <p className="text-sm text-muted-foreground">{strategy.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Effectiveness</span>
                    <span className="font-medium">{strategy.effectiveness}%</span>
                  </div>
                  <Progress value={strategy.effectiveness} className="h-2" />
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground">Mitigates:</span>
                  <span className="font-medium ml-2">{strategy.risk}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
