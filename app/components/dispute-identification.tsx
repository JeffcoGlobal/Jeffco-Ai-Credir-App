"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, FileText } from "lucide-react"

export function DisputeIdentification() {
  const [scanProgress, setScanProgress] = useState(0)
  const [isScanning, setIsScanning] = useState(false)

  const potentialDisputes = [
    {
      id: 1,
      type: "Duplicate Charge",
      merchant: "Netflix",
      amount: 15.99,
      date: "2024-01-15",
      confidence: 95,
      status: "pending",
      description: "Duplicate subscription charge detected",
    },
    {
      id: 2,
      type: "Unauthorized Transaction",
      merchant: "Unknown Merchant",
      amount: 89.99,
      date: "2024-01-12",
      confidence: 88,
      status: "pending",
      description: "Transaction from unrecognized merchant",
    },
    {
      id: 3,
      type: "Billing Error",
      merchant: "Amazon",
      amount: 25.0,
      date: "2024-01-10",
      confidence: 92,
      status: "disputed",
      description: "Charged for cancelled order",
    },
  ]

  const startScan = () => {
    setIsScanning(true)
    setScanProgress(0)

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsScanning(false)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const generateDispute = (disputeId: number) => {
    // This would integrate with the dispute letter generation system
    console.log(`Generating dispute letter for dispute ${disputeId}`)
  }

  return (
    <div className="space-y-6">
      {/* AI Scanning Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            AI-Powered Transaction Analysis
          </CardTitle>
          <CardDescription>Autonomous scanning of financial accounts to identify potential disputes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Last scan: 2 hours ago</p>
              <p className="text-sm text-muted-foreground">Accounts monitored: 4</p>
            </div>
            <Button onClick={startScan} disabled={isScanning}>
              {isScanning ? "Scanning..." : "Start New Scan"}
            </Button>
          </div>

          {isScanning && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Analyzing transactions...</span>
                <span>{scanProgress}%</span>
              </div>
              <Progress value={scanProgress} />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Identified Disputes */}
      <Card>
        <CardHeader>
          <CardTitle>Identified Potential Disputes</CardTitle>
          <CardDescription>AI-identified transactions that may warrant disputes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {potentialDisputes.map((dispute) => (
              <div key={dispute.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant={dispute.status === "disputed" ? "default" : "secondary"}>{dispute.type}</Badge>
                    <span className="font-medium">{dispute.merchant}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">${dispute.amount}</span>
                    {dispute.status === "disputed" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Clock className="h-5 w-5 text-yellow-500" />
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{dispute.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm">Confidence: {dispute.confidence}%</span>
                    <span className="text-sm text-muted-foreground">{dispute.date}</span>
                  </div>

                  {dispute.status === "pending" && (
                    <Button size="sm" onClick={() => generateDispute(dispute.id)}>
                      Generate Dispute
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Automation Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Automation Settings</CardTitle>
          <CardDescription>Configure autonomous dispute generation thresholds</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Auto-dispute threshold</label>
              <div className="flex items-center gap-2">
                <span className="text-sm">Confidence ≥ 90%</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Minimum amount</label>
              <div className="flex items-center gap-2">
                <span className="text-sm">$10.00</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Review period</label>
              <div className="flex items-center gap-2">
                <span className="text-sm">24 hours</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
