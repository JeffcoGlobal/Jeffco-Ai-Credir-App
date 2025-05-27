"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lightbulb, TrendingUp, Target, Zap, CheckCircle } from "lucide-react"

export function RecommendationAgent() {
  const [implementingRecommendation, setImplementingRecommendation] = useState<string | null>(null)

  const recommendations = [
    {
      id: "rec-001",
      category: "Process Optimization",
      title: "Implement Predictive Dispute Scoring",
      priority: "high",
      impact: "Revenue increase of $45K/month",
      confidence: 94,
      description: "Use ML to predict dispute success probability and prioritize high-value cases",
      implementation: "2-3 weeks",
      resources: "Development team + Data scientist",
      status: "pending",
      dataPoints: ["Historical dispute outcomes", "Client satisfaction scores", "Processing times"],
    },
    {
      id: "rec-002",
      category: "Client Experience",
      title: "Automated Client Communication Enhancement",
      priority: "high",
      impact: "25% improvement in client satisfaction",
      confidence: 89,
      description: "Implement personalized, proactive communication based on dispute status",
      implementation: "1-2 weeks",
      resources: "Marketing automation platform",
      status: "in_progress",
      dataPoints: ["Client communication preferences", "Response rates", "Satisfaction surveys"],
    },
    {
      id: "rec-003",
      category: "Compliance",
      title: "Enhanced Audit Trail System",
      priority: "medium",
      impact: "100% compliance audit readiness",
      confidence: 97,
      description: "Implement comprehensive audit trail for all AI decisions and actions",
      implementation: "3-4 weeks",
      resources: "Compliance team + Engineering",
      status: "pending",
      dataPoints: ["Regulatory requirements", "Audit feedback", "Decision logs"],
    },
    {
      id: "rec-004",
      category: "Revenue Optimization",
      title: "Dynamic Pricing Model",
      priority: "medium",
      impact: "15% revenue increase",
      confidence: 82,
      description: "Implement value-based pricing based on dispute complexity and success probability",
      implementation: "4-6 weeks",
      resources: "Product team + Analytics",
      status: "pending",
      dataPoints: ["Dispute complexity metrics", "Success rates", "Market analysis"],
    },
  ]

  const performanceMetrics = [
    {
      metric: "Recommendation Accuracy",
      value: 94,
      trend: "up",
      description: "Percentage of recommendations that achieved predicted outcomes",
    },
    {
      metric: "Implementation Rate",
      value: 78,
      trend: "up",
      description: "Percentage of recommendations that were implemented",
    },
    {
      metric: "ROI from Recommendations",
      value: 340,
      trend: "up",
      description: "Return on investment from implemented recommendations (%)",
    },
    {
      metric: "Time to Value",
      value: 12,
      trend: "down",
      description: "Average days from recommendation to measurable impact",
    },
  ]

  const implementedRecommendations = [
    {
      title: "Automated Dispute Letter Generation",
      implementedDate: "2024-01-10",
      predictedImpact: "30% time reduction",
      actualImpact: "35% time reduction",
      status: "exceeded",
    },
    {
      title: "Real-time Compliance Monitoring",
      implementedDate: "2024-01-05",
      predictedImpact: "Zero compliance violations",
      actualImpact: "Zero violations + 15% efficiency gain",
      status: "exceeded",
    },
    {
      title: "Client Portal Enhancement",
      implementedDate: "2023-12-28",
      predictedImpact: "20% satisfaction increase",
      actualImpact: "18% satisfaction increase",
      status: "met",
    },
  ]

  const implementRecommendation = (id: string) => {
    setImplementingRecommendation(id)
    setTimeout(() => setImplementingRecommendation(null), 3000)
  }

  return (
    <div className="space-y-6">
      {/* Agent Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            Recommendation Engine Agent
          </CardTitle>
          <CardDescription>
            AI-powered recommendations for optimization, compliance, and growth based on real-time data analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-2xl font-bold text-blue-600">
                    {metric.value}
                    {metric.metric.includes("ROI") ? "%" : metric.metric.includes("Time") ? "d" : "%"}
                  </div>
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingUp className="h-4 w-4 text-green-500 rotate-180" />
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{metric.metric}</div>
                <div className="text-xs text-muted-foreground mt-1">{metric.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Active Recommendations
          </CardTitle>
          <CardDescription>AI-generated recommendations based on current data and performance analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((rec) => (
              <div key={rec.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={rec.priority === "high" ? "destructive" : "default"}>
                        {rec.priority.toUpperCase()}
                      </Badge>
                      <Badge variant="outline">{rec.category}</Badge>
                      <Badge variant={rec.status === "in_progress" ? "default" : "secondary"}>
                        {rec.status === "in_progress" ? "In Progress" : "Pending"}
                      </Badge>
                    </div>
                    <h4 className="font-medium mb-2">{rec.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground font-medium">Expected Impact:</span>
                    <p className="font-medium text-green-600">{rec.impact}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-medium">Implementation Time:</span>
                    <p className="font-medium">{rec.implementation}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-medium">Resources Needed:</span>
                    <p className="font-medium">{rec.resources}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Confidence Level</span>
                    <span className="font-medium">{rec.confidence}%</span>
                  </div>
                  <Progress value={rec.confidence} className="h-2" />
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground font-medium">Based on:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {rec.dataPoints.map((point, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {point}
                      </Badge>
                    ))}
                  </div>
                </div>

                {rec.status === "pending" && (
                  <Button
                    onClick={() => implementRecommendation(rec.id)}
                    disabled={implementingRecommendation === rec.id}
                    className="w-full"
                  >
                    {implementingRecommendation === rec.id ? "Implementing..." : "Implement Recommendation"}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Implementation History
          </CardTitle>
          <CardDescription>Track record of implemented recommendations and their outcomes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {implementedRecommendations.map((impl, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{impl.title}</h4>
                  <Badge variant={impl.status === "exceeded" ? "default" : "secondary"}>
                    {impl.status === "exceeded" ? "Exceeded Expectations" : "Met Expectations"}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Implemented:</span>
                    <p className="font-medium">{impl.implementedDate}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Predicted Impact:</span>
                    <p className="font-medium">{impl.predictedImpact}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Actual Impact:</span>
                    <p className="font-medium text-green-600">{impl.actualImpact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            AI-Powered Insights
          </CardTitle>
          <CardDescription>Deep analysis and strategic insights from data patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertDescription>
              <strong>Optimization Opportunity:</strong> Clients with disputes resolved in under 15 days show 67% higher
              likelihood of upgrading to premium services. Consider prioritizing quick-resolution cases.
            </AlertDescription>
          </Alert>

          <Alert>
            <TrendingUp className="h-4 w-4" />
            <AlertDescription>
              <strong>Growth Pattern Detected:</strong> 23% increase in complex dispute cases suggests opportunity for
              specialized high-value service tier with premium pricing.
            </AlertDescription>
          </Alert>

          <Alert>
            <Target className="h-4 w-4" />
            <AlertDescription>
              <strong>Efficiency Insight:</strong> Automated pre-screening could eliminate 34% of invalid disputes,
              reducing processing costs by $12K/month while improving success rates.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
