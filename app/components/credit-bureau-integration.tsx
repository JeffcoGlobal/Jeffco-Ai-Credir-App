"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Building2, CheckCircle, AlertCircle, RefreshCw } from "lucide-react"

export function CreditBureauIntegration() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const bureauConnections = [
    {
      name: "Experian",
      status: "connected",
      lastSync: "2024-01-15 10:30 AM",
      apiHealth: 98,
      disputesSubmitted: 15,
      disputesResolved: 12,
    },
    {
      name: "Equifax",
      status: "connected",
      lastSync: "2024-01-15 10:28 AM",
      apiHealth: 95,
      disputesSubmitted: 18,
      disputesResolved: 14,
    },
    {
      name: "TransUnion",
      status: "connected",
      lastSync: "2024-01-15 10:32 AM",
      apiHealth: 97,
      disputesSubmitted: 12,
      disputesResolved: 10,
    },
  ]

  const pendingDisputes = [
    {
      id: "EXP-2024-001",
      bureau: "Experian",
      type: "Billing Error",
      amount: 89.99,
      merchant: "ABC Services",
      status: "pending_review",
      submittedDate: "2024-01-10",
      expectedResolution: "2024-02-10",
    },
    {
      id: "EQF-2024-003",
      bureau: "Equifax",
      type: "Unauthorized Charge",
      amount: 156.0,
      merchant: "XYZ Corp",
      status: "under_investigation",
      submittedDate: "2024-01-08",
      expectedResolution: "2024-02-08",
    },
  ]

  const submitDispute = async (disputeId: string) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  return (
    <div className="space-y-6">
      {/* Bureau Connection Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Credit Bureau Connections
          </CardTitle>
          <CardDescription>Real-time integration status with major credit bureaus</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bureauConnections.map((bureau, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{bureau.name}</h3>
                  <Badge variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Connected
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>API Health</span>
                    <span>{bureau.apiHealth}%</span>
                  </div>
                  <Progress value={bureau.apiHealth} />
                </div>

                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Last sync: {bureau.lastSync}</p>
                  <p>Disputes submitted: {bureau.disputesSubmitted}</p>
                  <p>Disputes resolved: {bureau.disputesResolved}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Automated Dispute Submission */}
      <Card>
        <CardHeader>
          <CardTitle>Automated Dispute Submission</CardTitle>
          <CardDescription>Direct API integration for seamless dispute filing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              All disputes are automatically formatted according to each bureau's specific requirements and submitted
              via secure API connections.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">45</div>
              <div className="text-sm text-muted-foreground">Disputes This Month</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">38</div>
              <div className="text-sm text-muted-foreground">Successfully Resolved</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">7</div>
              <div className="text-sm text-muted-foreground">Under Review</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pending Disputes */}
      <Card>
        <CardHeader>
          <CardTitle>Active Disputes</CardTitle>
          <CardDescription>Currently pending disputes across all bureaus</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingDisputes.map((dispute, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{dispute.id}</Badge>
                    <span className="font-medium">{dispute.bureau}</span>
                  </div>
                  <Badge variant={dispute.status === "under_investigation" ? "default" : "secondary"}>
                    {dispute.status.replace("_", " ")}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <p className="font-medium">{dispute.type}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Amount:</span>
                    <p className="font-medium">${dispute.amount}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Merchant:</span>
                    <p className="font-medium">{dispute.merchant}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Expected Resolution:</span>
                    <p className="font-medium">{dispute.expectedResolution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>API Configuration</CardTitle>
          <CardDescription>Bureau-specific API settings and authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              API credentials are securely stored and encrypted. All communications use TLS 1.3 encryption.
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <h4 className="font-medium">Experian API</h4>
                <p className="text-sm text-muted-foreground">Production environment</p>
              </div>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Token
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <h4 className="font-medium">Equifax API</h4>
                <p className="text-sm text-muted-foreground">Production environment</p>
              </div>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Token
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <h4 className="font-medium">TransUnion API</h4>
                <p className="text-sm text-muted-foreground">Production environment</p>
              </div>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Token
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
