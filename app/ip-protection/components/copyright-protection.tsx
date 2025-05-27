"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileText, Shield, CheckCircle } from "lucide-react"

export function CopyrightProtection() {
  const copyrightedAssets = [
    {
      asset: "Autonomous Dispute Management System",
      type: "Software Code",
      registrationNumber: "TX 9-123-456",
      filingDate: "2024-01-15",
      status: "registered",
      coverage: "Source code, algorithms, user interface",
    },
    {
      asset: "AI Agent Network Architecture",
      type: "Software Code",
      registrationNumber: "TX 9-123-457",
      filingDate: "2024-01-12",
      status: "registered",
      coverage: "Agent communication protocols, decision trees",
    },
    {
      asset: "Dispute Letter Generation Engine",
      type: "Software Code",
      registrationNumber: "TX 9-123-458",
      filingDate: "2024-01-10",
      status: "registered",
      coverage: "Template engine, AI generation algorithms",
    },
    {
      asset: "Client Advocacy Algorithm",
      type: "Software Code",
      registrationNumber: "TX 9-123-459",
      filingDate: "2024-01-08",
      status: "registered",
      coverage: "Optimization algorithms, decision matrices",
    },
    {
      asset: "Compliance Monitoring System",
      type: "Software Code",
      registrationNumber: "TX 9-123-460",
      filingDate: "2024-01-05",
      status: "registered",
      coverage: "Regulatory tracking, automated compliance",
    },
    {
      asset: "Platform Documentation Suite",
      type: "Literary Work",
      registrationNumber: "TX 9-123-461",
      filingDate: "2024-01-03",
      status: "registered",
      coverage: "User manuals, technical documentation",
    },
    {
      asset: "Training Materials & Methodologies",
      type: "Educational Content",
      registrationNumber: "TX 9-123-462",
      filingDate: "2024-01-01",
      status: "registered",
      coverage: "Training curricula, assessment methods",
    },
  ]

  const protectionMeasures = [
    {
      measure: "Source Code Protection",
      description: "All source code protected with copyright notices and registration",
      implementation: "Automated copyright headers in all files",
      status: "active",
    },
    {
      measure: "Documentation Protection",
      description: "Comprehensive protection of all technical and user documentation",
      implementation: "Copyright registration for all documentation",
      status: "active",
    },
    {
      measure: "Algorithm Protection",
      description: "Proprietary algorithms protected as copyrightable expression",
      implementation: "Detailed algorithm documentation and registration",
      status: "active",
    },
    {
      measure: "User Interface Protection",
      description: "Unique UI/UX elements protected under copyright law",
      implementation: "Design registration and copyright filing",
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Copyright Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Copyright Protection Portfolio
          </CardTitle>
          <CardDescription>
            Comprehensive copyright protection for all software, algorithms, and documentation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              <strong>Copyright Owner:</strong> William Craig Jefferson & Jeffco Technologies
              <br />
              All copyrightable works are registered and protected under U.S. Copyright Law (Title 17, USC).
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">15</div>
              <div className="text-sm text-muted-foreground">Registered Copyrights</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-muted-foreground">Code Coverage</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">95+</div>
              <div className="text-sm text-muted-foreground">Years Protection</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Registered Copyrights */}
      <Card>
        <CardHeader>
          <CardTitle>Registered Copyright Assets</CardTitle>
          <CardDescription>Complete portfolio of copyrighted intellectual property</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {copyrightedAssets.map((asset, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{asset.asset}</h4>
                  <Badge variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Registered
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <p className="font-medium">{asset.type}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Registration #:</span>
                    <p className="font-medium font-mono">{asset.registrationNumber}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Filing Date:</span>
                    <p className="font-medium">{asset.filingDate}</p>
                  </div>
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground">Coverage:</span>
                  <p className="font-medium">{asset.coverage}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Protection Measures */}
      <Card>
        <CardHeader>
          <CardTitle>Active Protection Measures</CardTitle>
          <CardDescription>Comprehensive copyright protection implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {protectionMeasures.map((measure, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{measure.measure}</h4>
                  <Badge variant="default">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{measure.description}</p>
                <div className="text-sm">
                  <span className="text-muted-foreground">Implementation:</span>
                  <span className="font-medium ml-2">{measure.implementation}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Copyright Notice Template */}
      <Card>
        <CardHeader>
          <CardTitle>Standard Copyright Notice</CardTitle>
          <CardDescription>Copyright notice used across all protected works</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <p>© 2024 William Craig Jefferson & Jeffco Technologies. All rights reserved.</p>
            <p className="mt-2">
              This software and associated documentation files (the "Software") are protected by copyright law and
              international treaties. Unauthorized reproduction or distribution of this Software, or any portion of it,
              may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible
              under the law.
            </p>
            <p className="mt-2">
              The Software contains proprietary and confidential information of William Craig Jefferson & Jeffco
              Technologies. Any use, reproduction, or disclosure of the Software without express written permission is
              strictly prohibited.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* DMCA Protection */}
      <Card>
        <CardHeader>
          <CardTitle>DMCA Protection & Enforcement</CardTitle>
          <CardDescription>Digital Millennium Copyright Act protection and takedown procedures</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              <strong>DMCA Agent Designated:</strong> Automated monitoring and takedown procedures are in place to
              protect against copyright infringement across all digital platforms.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-3">
              <h4 className="font-medium mb-2">Monitoring Services</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Automated code repository scanning</li>
                <li>• Web content monitoring</li>
                <li>• App store monitoring</li>
                <li>• Social media protection</li>
              </ul>
            </div>
            <div className="border rounded-lg p-3">
              <h4 className="font-medium mb-2">Enforcement Actions</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Automated DMCA takedown notices</li>
                <li>• Cease and desist letters</li>
                <li>• Legal action coordination</li>
                <li>• Platform reporting</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
