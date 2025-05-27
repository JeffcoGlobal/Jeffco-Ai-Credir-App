"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, TrendingUp, Users, Star, MessageCircle, Target } from "lucide-react"

export function ClientAdvocacyAgent() {
  const [advocacyScore, setAdvocacyScore] = useState(96)

  const clientMetrics = [
    {
      metric: "Client Satisfaction",
      value: 94,
      trend: "up",
      description: "Overall client satisfaction score",
    },
    {
      metric: "Success Rate",
      value: 89,
      trend: "up",
      description: "Dispute resolution success rate",
    },
    {
      metric: "Response Time",
      value: 2.3,
      trend: "down",
      description: "Average hours to client response",
    },
    {
      metric: "Retention Rate",
      value: 92,
      trend: "up",
      description: "Client retention percentage",
    },
  ]

  const advocacyActions = [
    {
      client: "Client #4521",
      action: "Proactive Dispute Escalation",
      reason: "High-value case with 85% success probability",
      impact: "Potential $2,400 recovery",
      status: "in_progress",
      timestamp: "2024-01-15 14:20",
    },
    {
      client: "Client #3892",
      action: "Personalized Communication",
      reason: "Client expressed frustration with timeline",
      impact: "Improved satisfaction score",
      status: "completed",
      timestamp: "2024-01-15 13:45",
    },
    {
      client: "Client #5634",
      action: "Fee Waiver Recommendation",
      reason: "Exceptional circumstances detected",
      impact: "Enhanced client loyalty",
      status: "completed",
      timestamp: "2024-01-15 12:30",
    },
  ]

  const clientInsights = [
    {
      insight: "High-Value Client Identification",
      description: "Identified 23 clients with potential for premium service upgrades",
      action: "Personalized outreach campaign initiated",
      impact: "Estimated $45K additional revenue",
    },
    {
      insight: "At-Risk Client Detection",
      description: "5 clients showing signs of potential churn",
      action: "Proactive retention measures activated",
      impact: "Prevented estimated $12K revenue loss",
    },
    {
      insight: "Success Pattern Analysis",
      description: "Clients with specific dispute types show 23% higher satisfaction",
      action: "Specialized handling protocols implemented",
      impact: "Improved overall success rates",
    },
  ]

  const satisfactionTrends = [
    { period: "This Week", score: 94, change: "+2%" },
    { period: "This Month", score: 92, change: "+5%" },
    { period: "This Quarter", score: 89, change: "+8%" },
    { period: "This Year", score: 87, change: "+12%" },
  ]

  return (
    <div className="space-y-6">
      {/* Client Advocacy Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-600" />
            Client Advocacy Agent
          </CardTitle>
          <CardDescription>
            Autonomous client advocacy ensuring optimal outcomes and satisfaction through AI-powered analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {clientMetrics.map((metric, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-2xl font-bold text-blue-600">
                    {metric.metric.includes("Time") ? `${metric.value}h` : `${metric.value}%`}
                  </div>
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingUp className="h-4 w-4 text-green-500 rotate-180" />
                  )}
                </div>
                <div className="text-sm text-muted-foreground mb-1">{metric.metric}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Client Advocacy Score</span>
              <span className="text-green-600 font-medium">{advocacyScore}%</span>
            </div>
            <Progress value={advocacyScore} className="h-3" />
            <p className="text-xs text-muted-foreground">Based on satisfaction, success rates, and proactive actions</p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Advocacy Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Recent Advocacy Actions
          </CardTitle>
          <CardDescription>Proactive actions taken on behalf of clients</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {advocacyActions.map((action, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{action.client}</Badge>
                    <span className="font-medium">{action.action}</span>
                  </div>
                  <Badge variant={action.status === "completed" ? "default" : "secondary"}>
                    {action.status === "completed" ? "Completed" : "In Progress"}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground">{action.reason}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Expected Impact:</span>
                    <p className="font-medium text-green-600">{action.impact}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Timestamp:</span>
                    <p className="font-medium">{action.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Client Satisfaction Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Client Satisfaction Trends
          </CardTitle>
          <CardDescription>Satisfaction score trends and improvements over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {satisfactionTrends.map((trend, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">{trend.score}%</div>
                <div className="text-sm text-muted-foreground mb-1">{trend.period}</div>
                <div className="text-xs text-green-600 font-medium">{trend.change}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI-Powered Client Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            AI-Powered Client Insights
          </CardTitle>
          <CardDescription>Deep analysis of client behavior and needs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {clientInsights.map((insight, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <h4 className="font-medium">{insight.insight}</h4>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground font-medium">Action Taken:</span>
                  <p className="font-medium">{insight.action}</p>
                </div>
                <div>
                  <span className="text-muted-foreground font-medium">Expected Impact:</span>
                  <p className="font-medium text-green-600">{insight.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Client Communication Excellence */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Communication Excellence
          </CardTitle>
          <CardDescription>Automated client communication optimization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Heart className="h-4 w-4" />
            <AlertDescription>
              <strong>Personalization Success:</strong> Personalized communication strategies have increased client
              satisfaction by 18% and reduced response time by 35%.
            </AlertDescription>
          </Alert>

          <Alert>
            <TrendingUp className="h-4 w-4" />
            <AlertDescription>
              <strong>Proactive Outreach:</strong> AI-identified 12 clients who would benefit from status updates,
              resulting in 94% positive feedback on proactive communication.
            </AlertDescription>
          </Alert>

          <Alert>
            <Target className="h-4 w-4" />
            <AlertDescription>
              <strong>Outcome Optimization:</strong> Advocacy actions have resulted in $127K additional client
              recoveries this month, exceeding expectations by 23%.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Client Success Stories */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Client Success Stories</CardTitle>
          <CardDescription>Exceptional outcomes achieved through AI-powered advocacy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Complex Multi-Bureau Dispute</span>
              <Badge variant="default">$3,200 Recovered</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              AI identified optimal dispute strategy across all three bureaus, resulting in full recovery within 18 days
              instead of typical 45-day timeline.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Proactive Identity Theft Detection</span>
              <Badge variant="default">Crisis Prevented</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Early detection algorithms identified suspicious patterns, preventing potential $15K in fraudulent charges
              and protecting client's credit score.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Automated Fee Waiver</span>
              <Badge variant="default">Client Loyalty Secured</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              AI detected exceptional circumstances and automatically applied fee waiver, resulting in client upgrading
              to premium service and 5-star review.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
