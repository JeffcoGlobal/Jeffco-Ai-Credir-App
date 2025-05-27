"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileText, TrendingUp, Globe, Calendar, Bell } from "lucide-react"

export function RegulatoryAgent() {
  const [isScanning, setIsScanning] = useState(false)

  const regulatoryUpdates = [
    {
      source: "CFPB",
      title: "Updated Guidance on Automated Decision-Making in Credit Disputes",
      date: "2024-01-15",
      impact: "High",
      status: "analyzing",
      summary: "New requirements for transparency in AI-driven dispute decisions",
      actionRequired: true,
      deadline: "2024-02-15",
    },
    {
      source: "FTC",
      title: "Enhanced Data Security Requirements for Financial Services",
      date: "2024-01-12",
      impact: "Medium",
      status: "implemented",
      summary: "Additional encryption standards for consumer financial data",
      actionRequired: false,
      deadline: null,
    },
    {
      source: "State of California",
      title: "CCPA Amendment - Consumer Financial Rights",
      date: "2024-01-10",
      impact: "Medium",
      status: "monitoring",
      summary: "Extended privacy rights for financial service consumers",
      actionRequired: true,
      deadline: "2024-03-01",
    },
  ]

  const monitoredSources = [
    { name: "CFPB", status: "active", lastUpdate: "5 minutes ago", newItems: 2 },
    { name: "FTC", status: "active", lastUpdate: "10 minutes ago", newItems: 0 },
    { name: "Federal Register", status: "active", lastUpdate: "15 minutes ago", newItems: 1 },
    { name: "State Regulators", status: "active", lastUpdate: "20 minutes ago", newItems: 3 },
    { name: "Industry Publications", status: "active", lastUpdate: "30 minutes ago", newItems: 5 },
    { name: "Court Decisions", status: "active", lastUpdate: "1 hour ago", newItems: 1 },
  ]

  const predictiveInsights = [
    {
      prediction: "CFPB likely to issue new AI transparency rules within 60 days",
      confidence: 87,
      basis: "Pattern analysis of recent statements and regulatory timeline",
      recommendation: "Begin preparing enhanced AI decision documentation",
    },
    {
      prediction: "State-level credit repair licensing requirements may expand",
      confidence: 73,
      basis: "Legislative activity in 12 states shows similar patterns",
      recommendation: "Monitor state legislative calendars and prepare compliance framework",
    },
    {
      prediction: "Enhanced consumer consent requirements for automated services",
      confidence: 91,
      basis: "Regulatory focus on consumer protection in automated financial services",
      recommendation: "Review and enhance consent mechanisms and documentation",
    },
  ]

  const scanRegulatorySources = () => {
    setIsScanning(true)
    setTimeout(() => setIsScanning(false), 4000)
  }

  return (
    <div className="space-y-6">
      {/* Agent Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-green-600" />
            Regulatory Intelligence Agent
          </CardTitle>
          <CardDescription>
            Real-time monitoring of regulatory changes with predictive analysis and automated compliance updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">847</div>
              <div className="text-sm text-muted-foreground">Sources Monitored</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-sm text-muted-foreground">Updates Today</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-sm text-muted-foreground">High Priority Items</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">89%</div>
              <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
            </div>
          </div>

          <Button onClick={scanRegulatorySources} disabled={isScanning} className="w-full">
            {isScanning ? "Scanning 847 Regulatory Sources..." : "Force Comprehensive Regulatory Scan"}
          </Button>
        </CardContent>
      </Card>

      {/* Recent Regulatory Updates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Recent Regulatory Updates
          </CardTitle>
          <CardDescription>Latest regulatory changes affecting dispute management operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regulatoryUpdates.map((update, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{update.source}</Badge>
                      <Badge variant={update.impact === "High" ? "destructive" : "default"}>
                        {update.impact} Impact
                      </Badge>
                      <Badge variant={update.status === "implemented" ? "default" : "secondary"}>{update.status}</Badge>
                    </div>
                    <h4 className="font-medium mb-2">{update.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{update.summary}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Published: {update.date}</span>
                  {update.actionRequired && update.deadline && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span className="text-orange-600 font-medium">Action required by {update.deadline}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monitored Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Regulatory Source Monitoring</CardTitle>
          <CardDescription>Real-time monitoring of key regulatory information sources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {monitoredSources.map((source, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{source.name}</h4>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Update:</span>
                    <span>{source.lastUpdate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">New Items:</span>
                    <span className={source.newItems > 0 ? "text-orange-600 font-medium" : ""}>{source.newItems}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Predictive Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Predictive Regulatory Analysis
          </CardTitle>
          <CardDescription>AI-powered predictions of upcoming regulatory changes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {predictiveInsights.map((insight, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <h4 className="font-medium flex-1">{insight.prediction}</h4>
                <Badge variant="outline">{insight.confidence}% Confidence</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{insight.basis}</p>
              <Alert>
                <FileText className="h-4 w-4" />
                <AlertDescription>
                  <strong>Recommended Action:</strong> {insight.recommendation}
                </AlertDescription>
              </Alert>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Automated Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Automated Regulatory Response</CardTitle>
          <CardDescription>Actions automatically taken in response to regulatory changes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="border rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Policy Update Triggered</span>
              <Badge variant="default">Completed</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Automatically updated dispute letter templates to comply with new CFPB transparency requirements
            </p>
            <p className="text-xs text-muted-foreground mt-1">Completed: 2024-01-15 14:30</p>
          </div>

          <div className="border rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Compliance Review Scheduled</span>
              <Badge variant="secondary">Pending</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Scheduled comprehensive review of AI decision-making processes for upcoming CFPB guidance
            </p>
            <p className="text-xs text-muted-foreground mt-1">Scheduled: 2024-01-20 09:00</p>
          </div>

          <div className="border rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Staff Training Updated</span>
              <Badge variant="default">Completed</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Updated training materials to reflect new state privacy requirements
            </p>
            <p className="text-xs text-muted-foreground mt-1">Completed: 2024-01-14 16:45</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
