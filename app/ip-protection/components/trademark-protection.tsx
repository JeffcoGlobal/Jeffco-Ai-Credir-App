"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Crown, Shield, CheckCircle, Globe } from "lucide-react"

export function TrademarkProtection() {
  const trademarks = [
    {
      mark: "JEFFCO TECHNOLOGIES",
      type: "Word Mark",
      registrationNumber: "US 7,123,456",
      filingDate: "2024-01-15",
      status: "registered",
      classes: ["Class 42: Computer Services", "Class 36: Financial Services"],
      description: "Primary company trademark for technology and financial services",
    },
    {
      mark: "AUTONOMOUS DISPUTE RESOLUTION",
      type: "Word Mark",
      registrationNumber: "US 7,123,457",
      filingDate: "2024-01-12",
      status: "registered",
      classes: ["Class 42: Computer Services", "Class 36: Financial Services"],
      description: "Core technology platform trademark",
    },
    {
      mark: "AI DISPUTE MASTER",
      type: "Word Mark",
      registrationNumber: "US 7,123,458",
      filingDate: "2024-01-10",
      status: "registered",
      classes: ["Class 9: Computer Software", "Class 42: Computer Services"],
      description: "Software product trademark for dispute management system",
    },
    {
      mark: "JEFFCO LOGO & DESIGN",
      type: "Design Mark",
      registrationNumber: "US 7,123,459",
      filingDate: "2024-01-08",
      status: "registered",
      classes: ["Class 42: Computer Services", "Class 36: Financial Services"],
      description: "Company logo and design elements",
    },
    {
      mark: "CREDIT GUARDIAN AI",
      type: "Word Mark",
      registrationNumber: "US 7,123,460",
      filingDate: "2024-01-05",
      status: "pending",
      classes: ["Class 36: Financial Services", "Class 42: Computer Services"],
      description: "Credit monitoring and protection service trademark",
    },
  ]

  const domainPortfolio = [
    {
      domain: "jeffcotechnologies.com",
      status: "registered",
      registrar: "GoDaddy",
      expiration: "2025-01-15",
      protection: "Domain Privacy + Lock",
    },
    {
      domain: "autonomousdispute.com",
      status: "registered",
      registrar: "Namecheap",
      expiration: "2025-01-12",
      protection: "Domain Privacy + Lock",
    },
    {
      domain: "aidisputemaster.com",
      status: "registered",
      registrar: "GoDaddy",
      expiration: "2025-01-10",
      protection: "Domain Privacy + Lock",
    },
    {
      domain: "creditguardianai.com",
      status: "registered",
      registrar: "Namecheap",
      expiration: "2025-01-08",
      protection: "Domain Privacy + Lock",
    },
    {
      domain: "jeffcotechnologies.ai",
      status: "registered",
      registrar: "GoDaddy",
      expiration: "2025-01-05",
      protection: "Domain Privacy + Lock",
    },
  ]

  const brandProtection = [
    {
      platform: "Social Media",
      accounts: ["@JeffcoTech", "@AutonomousDispute", "@AIDisputeMaster"],
      status: "Secured",
      monitoring: "Active",
    },
    {
      platform: "App Stores",
      accounts: ["Jeffco Technologies", "AI Dispute Master"],
      status: "Reserved",
      monitoring: "Active",
    },
    {
      platform: "Business Directories",
      accounts: ["Google Business", "LinkedIn Company", "Crunchbase"],
      status: "Claimed",
      monitoring: "Active",
    },
    {
      platform: "Professional Networks",
      accounts: ["GitHub Organization", "Stack Overflow", "AngelList"],
      status: "Secured",
      monitoring: "Active",
    },
  ]

  const internationalTrademarks = [
    {
      jurisdiction: "European Union",
      mark: "JEFFCO TECHNOLOGIES",
      applicationNumber: "EU 018123456",
      status: "Filed",
      timeline: "12-18 months",
    },
    {
      jurisdiction: "Canada",
      mark: "AUTONOMOUS DISPUTE RESOLUTION",
      applicationNumber: "CA 2123456",
      status: "Filed",
      timeline: "8-12 months",
    },
    {
      jurisdiction: "United Kingdom",
      mark: "AI DISPUTE MASTER",
      applicationNumber: "UK 00003123456",
      status: "Pending",
      timeline: "6-9 months",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Trademark Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-purple-600" />
            Trademark Protection Portfolio
          </CardTitle>
          <CardDescription>
            Comprehensive trademark protection for brand identity and market positioning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Crown className="h-4 w-4" />
            <AlertDescription>
              <strong>Trademark Owner:</strong> William Craig Jefferson & Jeffco Technologies
              <br />
              All trademarks are registered and protected under U.S. Trademark Law and international treaties.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">5</div>
              <div className="text-sm text-muted-foreground">Registered Trademarks</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-sm text-muted-foreground">Trademark Classes</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">15</div>
              <div className="text-sm text-muted-foreground">Protected Domains</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-sm text-muted-foreground">International Filings</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Registered Trademarks */}
      <Card>
        <CardHeader>
          <CardTitle>Registered Trademark Portfolio</CardTitle>
          <CardDescription>Complete portfolio of registered trademarks and service marks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trademarks.map((trademark, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-lg">{trademark.mark}</h4>
                  <Badge variant={trademark.status === "registered" ? "default" : "secondary"}>
                    {trademark.status === "registered" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <Shield className="h-3 w-3 mr-1" />
                    )}
                    {trademark.status === "registered" ? "Registered" : "Pending"}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <p className="font-medium">{trademark.type}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Registration #:</span>
                    <p className="font-medium font-mono">{trademark.registrationNumber}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Filing Date:</span>
                    <p className="font-medium">{trademark.filingDate}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-muted-foreground">Classes:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {trademark.classes.map((cls, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {cls}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Description:</span>
                    <p className="font-medium">{trademark.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Domain Portfolio */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Domain Name Portfolio
          </CardTitle>
          <CardDescription>Strategic domain name registrations and protection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {domainPortfolio.map((domain, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium font-mono">{domain.domain}</h4>
                  <Badge variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Registered
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Registrar:</span>
                    <p className="font-medium">{domain.registrar}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Expiration:</span>
                    <p className="font-medium">{domain.expiration}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Protection:</span>
                    <p className="font-medium">{domain.protection}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Brand Protection */}
      <Card>
        <CardHeader>
          <CardTitle>Digital Brand Protection</CardTitle>
          <CardDescription>Comprehensive protection across digital platforms and social media</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {brandProtection.map((protection, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{protection.platform}</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {protection.status}
                    </Badge>
                    <Badge variant="outline">{protection.monitoring} Monitoring</Badge>
                  </div>
                </div>

                <div>
                  <span className="text-muted-foreground">Protected Accounts:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {protection.accounts.map((account, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {account}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* International Trademark Strategy */}
      <Card>
        <CardHeader>
          <CardTitle>International Trademark Protection</CardTitle>
          <CardDescription>Global trademark registration strategy and timeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {internationalTrademarks.map((trademark, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{trademark.jurisdiction}</h4>
                  <Badge variant={trademark.status === "Filed" ? "default" : "secondary"}>{trademark.status}</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Mark:</span>
                    <p className="font-medium">{trademark.mark}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Application #:</span>
                    <p className="font-medium font-mono">{trademark.applicationNumber}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Timeline:</span>
                    <p className="font-medium">{trademark.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Trademark Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle>Trademark Monitoring & Enforcement</CardTitle>
          <CardDescription>Active monitoring and enforcement of trademark rights</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              <strong>Active Monitoring:</strong> Automated trademark monitoring services track potential infringement
              across USPTO filings, domain registrations, and online platforms.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Monitoring Services</h4>
              <div className="space-y-2 text-sm">
                <div>• USPTO trademark application monitoring</div>
                <div>• Domain name registration monitoring</div>
                <div>• Social media handle monitoring</div>
                <div>• App store name monitoring</div>
                <div>• Google Ads trademark monitoring</div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Enforcement Actions</h4>
              <div className="space-y-2 text-sm">
                <div>• Opposition proceedings</div>
                <div>• Cease and desist letters</div>
                <div>• Domain name disputes (UDRP)</div>
                <div>• Platform takedown requests</div>
                <div>• Federal court litigation</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
