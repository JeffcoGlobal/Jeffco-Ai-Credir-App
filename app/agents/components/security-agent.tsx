"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Lock, Eye, CheckCircle, Zap } from "lucide-react"

export function SecurityAgent() {
  const [threatLevel, setThreatLevel] = useState("low")

  const securityMetrics = [
    {
      metric: "Security Score",
      value: 98,
      status: "excellent",
      description: "Overall security posture assessment",
    },
    {
      metric: "Threat Detection",
      value: 99.7,
      status: "excellent",
      description: "Percentage of threats detected and blocked",
    },
    {
      metric: "Response Time",
      value: 0.3,
      status: "excellent",
      description: "Average seconds to threat response",
    },
    {
      metric: "Compliance Score",
      value: 100,
      status: "excellent",
      description: "Security compliance with regulations",
    },
  ]

  const securityLayers = [
    {
      layer: "Network Security",
      status: "active",
      components: ["DDoS Protection", "WAF", "VPN", "Network Segmentation"],
      effectiveness: 99,
      lastUpdate: "2 minutes ago",
    },
    {
      layer: "Application Security",
      status: "active",
      components: ["Code Scanning", "Dependency Checks", "Runtime Protection", "API Security"],
      effectiveness: 97,
      lastUpdate: "5 minutes ago",
    },
    {
      layer: "Data Security",
      status: "active",
      components: ["AES-256 Encryption", "Key Management", "Data Loss Prevention", "Backup Encryption"],
      effectiveness: 100,
      lastUpdate: "1 minute ago",
    },
    {
      layer: "Identity & Access",
      status: "active",
      components: ["Multi-Factor Auth", "Zero Trust", "Privileged Access", "Session Management"],
      effectiveness: 98,
      lastUpdate: "3 minutes ago",
    },
  ]

  const recentThreats = [
    {
      timestamp: "2024-01-15 14:45",
      type: "Brute Force Attack",
      source: "185.220.101.42",
      status: "blocked",
      severity: "medium",
      action: "IP blocked, rate limiting applied",
    },
    {
      timestamp: "2024-01-15 13:22",
      type: "SQL Injection Attempt",
      source: "192.168.1.100",
      status: "blocked",
      severity: "high",
      action: "Request blocked, security team notified",
    },
    {
      timestamp: "2024-01-15 12:15",
      type: "Suspicious API Access",
      source: "10.0.0.25",
      status: "monitored",
      severity: "low",
      action: "Enhanced monitoring activated",
    },
  ]

  const complianceChecks = [
    {
      standard: "SOC 2 Type II",
      status: "compliant",
      lastAudit: "2024-01-01",
      nextAudit: "2024-07-01",
      score: 100,
    },
    {
      standard: "PCI DSS Level 1",
      status: "compliant",
      lastAudit: "2023-12-15",
      nextAudit: "2024-06-15",
      score: 98,
    },
    {
      standard: "ISO 27001",
      status: "compliant",
      lastAudit: "2023-11-30",
      nextAudit: "2024-05-30",
      score: 97,
    },
    {
      standard: "GDPR",
      status: "compliant",
      lastAudit: "2024-01-10",
      nextAudit: "2024-04-10",
      score: 99,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Security Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-600" />
            Security Monitoring Agent
          </CardTitle>
          <CardDescription>
            24/7 autonomous security monitoring with real-time threat detection and automated response
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {securityMetrics.map((metric, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {metric.metric.includes("Time") ? `${metric.value}s` : `${metric.value}%`}
                </div>
                <div className="text-sm text-muted-foreground mb-1">{metric.metric}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </div>
            ))}
          </div>

          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              <strong>Security Status:</strong> All systems secure. Threat level: {threatLevel.toUpperCase()}. Zero
              active security incidents. Last security scan completed 15 minutes ago.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Security Layers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Multi-Layer Security Architecture
          </CardTitle>
          <CardDescription>Comprehensive security layers with real-time monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityLayers.map((layer, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{layer.layer}</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                    <Badge variant="outline">{layer.effectiveness}% Effective</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Effectiveness</span>
                    <span className="font-medium">{layer.effectiveness}%</span>
                  </div>
                  <Progress value={layer.effectiveness} className="h-2" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {layer.components.map((component, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs justify-center">
                      {component}
                    </Badge>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground">Last updated: {layer.lastUpdate}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Threat Detection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Real-time Threat Detection
          </CardTitle>
          <CardDescription>Recent security events and automated responses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentThreats.map((threat, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        threat.severity === "high"
                          ? "destructive"
                          : threat.severity === "medium"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {threat.severity.toUpperCase()}
                    </Badge>
                    <span className="font-medium">{threat.type}</span>
                  </div>
                  <Badge variant={threat.status === "blocked" ? "default" : "outline"}>
                    {threat.status === "blocked" ? "Blocked" : "Monitored"}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Source:</span>
                    <p className="font-mono">{threat.source}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Time:</span>
                    <p className="font-medium">{threat.timestamp}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Action Taken:</span>
                    <p className="font-medium">{threat.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Compliance Status */}
      <Card>
        <CardHeader>
          <CardTitle>Security Compliance Status</CardTitle>
          <CardDescription>Current compliance status with security standards and regulations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {complianceChecks.map((check, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{check.standard}</h4>
                  <Badge variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Compliant
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Compliance Score</span>
                    <span className="font-medium">{check.score}%</span>
                  </div>
                  <Progress value={check.score} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Last Audit:</span>
                    <p className="font-medium">{check.lastAudit}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Next Audit:</span>
                    <p className="font-medium">{check.nextAudit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Automated Security Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Automated Security Actions
          </CardTitle>
          <CardDescription>Recent automated security responses and preventive measures</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="border rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Threat Intelligence Update</span>
              <Badge variant="default">Completed</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Updated threat signatures and blocked 47 new malicious IP addresses
            </p>
            <p className="text-xs text-muted-foreground mt-1">Completed: 2024-01-15 14:30</p>
          </div>

          <div className="border rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Security Patch Deployment</span>
              <Badge variant="default">Completed</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Applied critical security patches to all systems with zero downtime
            </p>
            <p className="text-xs text-muted-foreground mt-1">Completed: 2024-01-15 02:15</p>
          </div>

          <div className="border rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Access Review Automation</span>
              <Badge variant="secondary">Scheduled</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Automated review of user access permissions and privilege escalation
            </p>
            <p className="text-xs text-muted-foreground mt-1">Scheduled: 2024-01-16 03:00</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
