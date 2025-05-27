"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, Users, Shield, Gavel } from "lucide-react"

export default function DocumentationPage() {
  const documentCategories = [
    {
      category: "Product Documentation",
      icon: FileText,
      documents: [
        {
          title: "User Manual - Complete Platform Guide",
          description: "Comprehensive guide covering all platform features and functionality",
          pages: 156,
          lastUpdated: "2024-01-15",
          version: "v2.1",
          type: "PDF",
        },
        {
          title: "Quick Start Guide",
          description: "Essential steps to get started with dispute resolution",
          pages: 24,
          lastUpdated: "2024-01-15",
          version: "v2.1",
          type: "PDF",
        },
        {
          title: "API Documentation",
          description: "Technical documentation for developers and integrations",
          pages: 89,
          lastUpdated: "2024-01-14",
          version: "v1.8",
          type: "PDF",
        },
        {
          title: "Feature Comparison Guide",
          description: "Detailed comparison of subscription tiers and features",
          pages: 18,
          lastUpdated: "2024-01-13",
          version: "v1.5",
          type: "PDF",
        },
      ],
    },
    {
      category: "Customer Reference Materials",
      icon: Users,
      documents: [
        {
          title: "Dispute Resolution Best Practices",
          description: "Guide to maximizing success rates and outcomes",
          pages: 45,
          lastUpdated: "2024-01-12",
          version: "v1.3",
          type: "PDF",
        },
        {
          title: "Credit Monitoring Guide",
          description: "Understanding credit reports and monitoring features",
          pages: 32,
          lastUpdated: "2024-01-11",
          version: "v1.2",
          type: "PDF",
        },
        {
          title: "Financial Account Security",
          description: "Best practices for protecting your financial information",
          pages: 28,
          lastUpdated: "2024-01-10",
          version: "v1.4",
          type: "PDF",
        },
        {
          title: "Troubleshooting Guide",
          description: "Common issues and solutions for platform users",
          pages: 36,
          lastUpdated: "2024-01-09",
          version: "v1.1",
          type: "PDF",
        },
      ],
    },
    {
      category: "Legal & Compliance",
      icon: Gavel,
      documents: [
        {
          title: "Terms of Service",
          description: "Complete terms and conditions for platform usage",
          pages: 42,
          lastUpdated: "2024-01-15",
          version: "v3.2",
          type: "PDF",
        },
        {
          title: "Privacy Policy",
          description: "Comprehensive privacy policy and data protection practices",
          pages: 28,
          lastUpdated: "2024-01-15",
          version: "v2.8",
          type: "PDF",
        },
        {
          title: "FCRA Compliance Documentation",
          description: "Fair Credit Reporting Act compliance procedures",
          pages: 67,
          lastUpdated: "2024-01-14",
          version: "v1.9",
          type: "PDF",
        },
        {
          title: "FDCPA Compliance Guide",
          description: "Fair Debt Collection Practices Act compliance framework",
          pages: 54,
          lastUpdated: "2024-01-13",
          version: "v1.7",
          type: "PDF",
        },
        {
          title: "Data Processing Agreement",
          description: "GDPR-compliant data processing terms and procedures",
          pages: 38,
          lastUpdated: "2024-01-12",
          version: "v2.1",
          type: "PDF",
        },
      ],
    },
    {
      category: "Partner Agreements",
      icon: Shield,
      documents: [
        {
          title: "Credit Bureau Partnership Agreement - Experian",
          description: "Comprehensive partnership terms with Experian",
          pages: 89,
          lastUpdated: "2024-01-15",
          version: "v1.0",
          type: "PDF",
          confidential: true,
        },
        {
          title: "Credit Bureau Partnership Agreement - Equifax",
          description: "Comprehensive partnership terms with Equifax",
          pages: 92,
          lastUpdated: "2024-01-15",
          version: "v1.0",
          type: "PDF",
          confidential: true,
        },
        {
          title: "Credit Bureau Partnership Agreement - TransUnion",
          description: "Comprehensive partnership terms with TransUnion",
          pages: 87,
          lastUpdated: "2024-01-15",
          version: "v1.0",
          type: "PDF",
          confidential: true,
        },
        {
          title: "Financial Data Provider Agreement - Plaid",
          description: "Bank account integration and data access agreement",
          pages: 76,
          lastUpdated: "2024-01-14",
          version: "v2.3",
          type: "PDF",
          confidential: true,
        },
        {
          title: "Financial Data Provider Agreement - Yodlee",
          description: "Financial data aggregation and analysis agreement",
          pages: 82,
          lastUpdated: "2024-01-14",
          version: "v1.8",
          type: "PDF",
          confidential: true,
        },
        {
          title: "Identity Protection Partnership - LifeLock",
          description: "Identity theft protection service integration agreement",
          pages: 64,
          lastUpdated: "2024-01-13",
          version: "v1.2",
          type: "PDF",
          confidential: true,
        },
        {
          title: "Credit Monitoring Partnership - Credit Karma",
          description: "Credit monitoring service integration and revenue sharing",
          pages: 58,
          lastUpdated: "2024-01-12",
          version: "v1.5",
          type: "PDF",
          confidential: true,
        },
        {
          title: "Technology Partnership Agreement - MX Technologies",
          description: "Financial insights and analytics platform integration",
          pages: 71,
          lastUpdated: "2024-01-11",
          version: "v1.1",
          type: "PDF",
          confidential: true,
        },
      ],
    },
  ]

  const clientContracts = [
    {
      title: "Standard Client Service Agreement",
      description: "Standard terms for individual consumer clients",
      pages: 34,
      lastUpdated: "2024-01-15",
      version: "v2.4",
      type: "PDF",
    },
    {
      title: "Premium Client Service Agreement",
      description: "Enhanced terms for premium tier subscribers",
      pages: 42,
      lastUpdated: "2024-01-15",
      version: "v2.4",
      type: "PDF",
    },
    {
      title: "Enterprise Client Service Agreement",
      description: "Comprehensive terms for enterprise-level clients",
      pages: 67,
      lastUpdated: "2024-01-15",
      version: "v2.4",
      type: "PDF",
    },
    {
      title: "Family Plan Service Agreement",
      description: "Multi-member family protection service terms",
      pages: 48,
      lastUpdated: "2024-01-15",
      version: "v2.4",
      type: "PDF",
    },
    {
      title: "Business Client Service Agreement",
      description: "Specialized terms for business credit monitoring",
      pages: 78,
      lastUpdated: "2024-01-14",
      version: "v1.8",
      type: "PDF",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <FileText className="h-10 w-10 text-blue-600" />
            Documentation & Legal Agreements
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive documentation, manuals, and legal agreements for Jeffco Technologies
          </p>
        </div>

        {/* Document Categories */}
        {documentCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <category.icon className="h-5 w-5 text-blue-600" />
                {category.category}
              </CardTitle>
              <CardDescription>{category.documents.length} documents in this category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.documents.map((doc, docIndex) => (
                  <div key={docIndex} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{doc.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                      </div>
                      {doc.confidential && (
                        <Badge variant="destructive" className="ml-2">
                          Confidential
                        </Badge>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Pages:</span>
                        <p className="font-medium">{doc.pages}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Version:</span>
                        <p className="font-medium">{doc.version}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Updated:</span>
                        <p className="font-medium">{doc.lastUpdated}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Format:</span>
                        <p className="font-medium">{doc.type}</p>
                      </div>
                    </div>

                    <Button size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download {doc.type}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Client Contracts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              Client Service Agreements
            </CardTitle>
            <CardDescription>Standardized client contracts for all service tiers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {clientContracts.map((contract, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div>
                    <h4 className="font-medium">{contract.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{contract.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Pages:</span>
                      <p className="font-medium">{contract.pages}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Version:</span>
                      <p className="font-medium">{contract.version}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Updated:</span>
                      <p className="font-medium">{contract.lastUpdated}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Format:</span>
                      <p className="font-medium">{contract.type}</p>
                    </div>
                  </div>

                  <Button size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Contract
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Recommendations */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Additional Recommended Documentation</CardTitle>
            <CardDescription>
              Additional legal and operational documents recommended for comprehensive coverage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Operational Documents</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Employee Handbook & Training Materials</li>
                  <li>• Standard Operating Procedures (SOPs)</li>
                  <li>• Incident Response Plan</li>
                  <li>• Business Continuity Plan</li>
                  <li>• Vendor Management Procedures</li>
                  <li>• Quality Assurance Guidelines</li>
                  <li>• Customer Service Protocols</li>
                  <li>• Data Backup & Recovery Procedures</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Legal & Risk Management</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Professional Liability Insurance Policy</li>
                  <li>• Cyber Security Insurance Coverage</li>
                  <li>• Errors & Omissions Insurance</li>
                  <li>• Director & Officer Insurance</li>
                  <li>• Employment Law Compliance Guide</li>
                  <li>• Intellectual Property Protection Plan</li>
                  <li>• Regulatory Compliance Checklist</li>
                  <li>• Legal Risk Assessment Framework</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Financial & Accounting</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Revenue Recognition Policies</li>
                  <li>• Subscription Billing Procedures</li>
                  <li>• Refund & Cancellation Policies</li>
                  <li>• Financial Reporting Standards</li>
                  <li>• Tax Compliance Documentation</li>
                  <li>• Audit Preparation Guidelines</li>
                  <li>• Budget Planning & Forecasting</li>
                  <li>• Cost Allocation Methodologies</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Technology & Security</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Information Security Policy</li>
                  <li>• Data Classification Standards</li>
                  <li>• Access Control Procedures</li>
                  <li>• Software Development Lifecycle</li>
                  <li>• Third-Party Integration Guidelines</li>
                  <li>• Disaster Recovery Plan</li>
                  <li>• Penetration Testing Reports</li>
                  <li>• Security Awareness Training</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
