"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, AlertTriangle, CheckCircle, FileText, Scale } from "lucide-react"

export function ComplianceCenter() {
  const complianceItems = [
    {
      regulation: "Fair Credit Reporting Act (FCRA)",
      status: "compliant",
      lastAudit: "2024-01-01",
      description: "Consumer credit reporting compliance",
    },
    {
      regulation: "Fair Debt Collection Practices Act (FDCPA)",
      status: "compliant",
      lastAudit: "2024-01-01",
      description: "Debt collection practices compliance",
    },
    {
      regulation: "Gramm-Leach-Bliley Act (GLBA)",
      status: "compliant",
      lastAudit: "2023-12-15",
      description: "Financial privacy and data protection",
    },
    {
      regulation: "PCI DSS",
      status: "review_needed",
      lastAudit: "2023-11-30",
      description: "Payment card industry data security",
    },
    {
      regulation: "SOX Compliance",
      status: "compliant",
      lastAudit: "2024-01-10",
      description: "Financial reporting and internal controls",
    },
  ]

  const dataProtection = [
    {
      item: "Data Encryption",
      status: "active",
      description: "AES-256 encryption for all sensitive data",
    },
    {
      item: "Access Controls",
      status: "active",
      description: "Role-based access with MFA",
    },
    {
      item: "Audit Logging",
      status: "active",
      description: "Comprehensive activity logging",
    },
    {
      item: "Data Retention",
      status: "active",
      description: "Automated data lifecycle management",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Compliance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5" />
            Regulatory Compliance Overview
          </CardTitle>
          <CardDescription>Comprehensive compliance monitoring for financial services regulations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Compliance Score</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Overall Compliance</span>
                  <span>98%</span>
                </div>
                <Progress value={98} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Next Audit</h3>
              <p className="text-sm text-muted-foreground">Scheduled for February 15, 2024</p>
              <p className="text-sm text-muted-foreground">External compliance audit by certified firm</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Regulatory Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Regulatory Requirements</CardTitle>
          <CardDescription>Status of key financial services regulations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceItems.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{item.regulation}</h4>
                  <Badge variant={item.status === "compliant" ? "default" : "destructive"}>
                    {item.status === "compliant" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertTriangle className="h-3 w-3 mr-1" />
                    )}
                    {item.status === "compliant" ? "Compliant" : "Review Needed"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <p className="text-xs text-muted-foreground">Last audit: {item.lastAudit}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Protection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Data Protection & Security
          </CardTitle>
          <CardDescription>Security measures and data protection protocols</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataProtection.map((item, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-sm">{item.item}</h4>
                  <Badge variant="default" className="text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Compliance Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Compliance Alerts</CardTitle>
          <CardDescription>Important compliance notifications and updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              PCI DSS compliance review scheduled for next week. Ensure all payment processing systems are up to date.
            </AlertDescription>
          </Alert>

          <Alert>
            <FileText className="h-4 w-4" />
            <AlertDescription>
              New CFPB guidelines for automated dispute processing effective March 1, 2024. Review implementation
              requirements.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Legal Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Legal Recommendations</CardTitle>
          <CardDescription>Essential legal considerations for autonomous dispute platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium">Legal Counsel</h4>
              <p className="text-sm text-muted-foreground">
                Engage specialized fintech attorneys for ongoing compliance review
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium">State Licensing</h4>
              <p className="text-sm text-muted-foreground">
                Verify state-specific licensing requirements for credit services
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-medium">Consumer Disclosures</h4>
              <p className="text-sm text-muted-foreground">
                Implement comprehensive disclosure statements for all services
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-medium">Dispute Process Documentation</h4>
              <p className="text-sm text-muted-foreground">
                Maintain detailed records of all automated dispute decisions
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
