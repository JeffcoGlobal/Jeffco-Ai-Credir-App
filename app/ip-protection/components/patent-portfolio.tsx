"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lightbulb, Search, FileText, Clock } from "lucide-react"

export function PatentPortfolio() {
  const patentApplications = [
    {
      title: "Autonomous Financial Dispute Resolution System",
      type: "Utility Patent",
      applicationNumber: "US 18/123,456",
      filingDate: "2024-01-15",
      status: "pending",
      claims: 25,
      priority: "high",
      description: "AI-powered system for automated dispute identification, letter generation, and bureau submission",
      technicalField: "Financial Technology, Artificial Intelligence",
      inventors: ["William Craig Jefferson"],
    },
    {
      title: "Multi-Agent Compliance Monitoring Network",
      type: "Utility Patent",
      applicationNumber: "US 18/123,457",
      filingDate: "2024-01-12",
      status: "pending",
      claims: 18,
      priority: "high",
      description: "Distributed AI agent system for real-time regulatory compliance monitoring",
      technicalField: "Artificial Intelligence, Regulatory Technology",
      inventors: ["William Craig Jefferson"],
    },
    {
      title: "Predictive Risk Assessment for Financial Services",
      type: "Utility Patent",
      applicationNumber: "US 18/123,458",
      filingDate: "2024-01-10",
      status: "pending",
      claims: 22,
      priority: "medium",
      description: "Machine learning system for predictive risk assessment in financial dispute management",
      technicalField: "Machine Learning, Risk Management",
      inventors: ["William Craig Jefferson"],
    },
    {
      title: "Automated Client Advocacy Optimization System",
      type: "Utility Patent",
      applicationNumber: "US 18/123,459",
      filingDate: "2024-01-08",
      status: "pending",
      claims: 20,
      priority: "high",
      description: "AI system for optimizing client outcomes through automated advocacy decisions",
      technicalField: "Artificial Intelligence, Customer Service",
      inventors: ["William Craig Jefferson"],
    },
  ]

  const patentStrategy = [
    {
      category: "Core Technology Protection",
      patents: 4,
      coverage: "Fundamental AI algorithms and system architecture",
      status: "Filed",
      timeline: "18-24 months to grant",
    },
    {
      category: "Process Innovation",
      patents: 3,
      coverage: "Unique dispute resolution methodologies",
      status: "Preparing",
      timeline: "Filing Q2 2024",
    },
    {
      category: "Integration Methods",
      patents: 2,
      coverage: "Credit bureau integration and API methods",
      status: "Research",
      timeline: "Filing Q3 2024",
    },
    {
      category: "User Interface Innovation",
      patents: 1,
      coverage: "Novel user interaction and visualization methods",
      status: "Conceptual",
      timeline: "Filing Q4 2024",
    },
  ]

  const priorArtResearch = [
    {
      searchArea: "Automated Dispute Resolution",
      patents: 247,
      relevantPrior: 12,
      differentiators: "AI-powered multi-agent approach, real-time compliance",
      patentability: "Strong",
    },
    {
      searchArea: "Financial AI Agents",
      patents: 189,
      relevantPrior: 8,
      differentiators: "Specialized compliance focus, autonomous operation",
      patentability: "Strong",
    },
    {
      searchArea: "Credit Bureau Integration",
      patents: 156,
      relevantPrior: 15,
      differentiators: "Automated letter generation, multi-bureau coordination",
      patentability: "Moderate",
    },
    {
      searchArea: "Regulatory Compliance Automation",
      patents: 203,
      relevantPrior: 6,
      differentiators: "Predictive compliance, multi-regulation monitoring",
      patentability: "Very Strong",
    },
  ]

  const internationalStrategy = [
    {
      jurisdiction: "European Union",
      status: "PCT Filing Planned",
      timeline: "Q2 2024",
      priority: "High",
      rationale: "Large financial services market, strong IP protection",
    },
    {
      jurisdiction: "Canada",
      status: "Direct Filing Planned",
      timeline: "Q3 2024",
      priority: "Medium",
      rationale: "Similar regulatory environment, market expansion opportunity",
    },
    {
      jurisdiction: "United Kingdom",
      status: "Direct Filing Planned",
      timeline: "Q3 2024",
      priority: "Medium",
      rationale: "Post-Brexit IP strategy, financial services hub",
    },
    {
      jurisdiction: "Australia",
      status: "Evaluation Phase",
      timeline: "Q4 2024",
      priority: "Low",
      rationale: "Growing fintech market, English-speaking jurisdiction",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Patent Portfolio Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            Patent Portfolio Strategy
          </CardTitle>
          <CardDescription>
            Comprehensive utility patent protection for innovative dispute resolution technology
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Lightbulb className="h-4 w-4" />
            <AlertDescription>
              <strong>Patent Owner:</strong> William Craig Jefferson & Jeffco Technologies
              <br />
              All patent applications and granted patents are owned by this entity with comprehensive IP assignment
              agreements.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">8</div>
              <div className="text-sm text-muted-foreground">Patent Applications</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">85</div>
              <div className="text-sm text-muted-foreground">Total Claims</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-muted-foreground">Technology Areas</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">20</div>
              <div className="text-sm text-muted-foreground">Year Protection</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Patent Applications */}
      <Card>
        <CardHeader>
          <CardTitle>Active Patent Applications</CardTitle>
          <CardDescription>Current utility patent applications in prosecution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {patentApplications.map((patent, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={patent.priority === "high" ? "destructive" : "default"}>
                        {patent.priority.toUpperCase()}
                      </Badge>
                      <Badge variant="outline">{patent.type}</Badge>
                      <Badge variant="secondary">
                        <Clock className="h-3 w-3 mr-1" />
                        Pending
                      </Badge>
                    </div>
                    <h4 className="font-medium mb-2">{patent.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{patent.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Application #:</span>
                    <p className="font-medium font-mono">{patent.applicationNumber}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Filing Date:</span>
                    <p className="font-medium">{patent.filingDate}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Claims:</span>
                    <p className="font-medium">{patent.claims}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Technical Field:</span>
                    <p className="font-medium">{patent.technicalField}</p>
                  </div>
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground">Inventors:</span>
                  <span className="font-medium ml-2">{patent.inventors.join(", ")}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Patent Strategy Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Patent Filing Strategy</CardTitle>
          <CardDescription>Strategic patent filing timeline and coverage areas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {patentStrategy.map((strategy, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{strategy.category}</h4>
                  <Badge variant={strategy.status === "Filed" ? "default" : "secondary"}>{strategy.status}</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Patents:</span>
                    <p className="font-medium">{strategy.patents}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Coverage:</span>
                    <p className="font-medium">{strategy.coverage}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Timeline:</span>
                    <p className="font-medium">{strategy.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Prior Art Research */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Prior Art Research & Patentability Analysis
          </CardTitle>
          <CardDescription>Comprehensive prior art search and patentability assessment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {priorArtResearch.map((research, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{research.searchArea}</h4>
                  <Badge
                    variant={
                      research.patentability === "Very Strong"
                        ? "default"
                        : research.patentability === "Strong"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {research.patentability} Patentability
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Patents Reviewed:</span>
                    <p className="font-medium">{research.patents}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Relevant Prior Art:</span>
                    <p className="font-medium">{research.relevantPrior}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Key Differentiators:</span>
                    <p className="font-medium">{research.differentiators}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* International Patent Strategy */}
      <Card>
        <CardHeader>
          <CardTitle>International Patent Strategy</CardTitle>
          <CardDescription>Global patent protection strategy and filing timeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {internationalStrategy.map((jurisdiction, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{jurisdiction.jurisdiction}</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant={jurisdiction.priority === "High" ? "destructive" : "default"}>
                      {jurisdiction.priority} Priority
                    </Badge>
                    <Badge variant="outline">{jurisdiction.status}</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Timeline:</span>
                    <p className="font-medium">{jurisdiction.timeline}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Strategic Rationale:</span>
                    <p className="font-medium">{jurisdiction.rationale}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Patent Prosecution Status */}
      <Card>
        <CardHeader>
          <CardTitle>Patent Prosecution Management</CardTitle>
          <CardDescription>Active management of patent prosecution and examination process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <FileText className="h-4 w-4" />
            <AlertDescription>
              <strong>Patent Attorney:</strong> Specialized IP law firm engaged for prosecution management. All
              applications include comprehensive claim strategies and detailed technical specifications.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Prosecution Timeline</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Initial Filing</span>
                  <span className="text-green-600">✓ Complete</span>
                </div>
                <div className="flex justify-between">
                  <span>Publication (18 months)</span>
                  <span className="text-blue-600">In Progress</span>
                </div>
                <div className="flex justify-between">
                  <span>First Office Action</span>
                  <span className="text-gray-500">Pending</span>
                </div>
                <div className="flex justify-between">
                  <span>Patent Grant</span>
                  <span className="text-gray-500">18-24 months</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Claim Strategy</h4>
              <div className="space-y-2 text-sm">
                <div>• Independent claims covering core innovations</div>
                <div>• Dependent claims for specific implementations</div>
                <div>• Method and system claims for comprehensive coverage</div>
                <div>• Continuation applications for improvements</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
