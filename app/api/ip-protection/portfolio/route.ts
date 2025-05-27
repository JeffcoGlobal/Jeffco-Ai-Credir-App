"use server"

import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Comprehensive IP portfolio data for William Craig Jefferson & Jeffco Technologies
    const ipPortfolio = {
      owner: "William Craig Jefferson & Jeffco Technologies",
      portfolioValue: "$2.5M",
      totalAssets: 47,

      copyrights: {
        registered: 15,
        pending: 3,
        totalValue: "$800K",
        coverage: "98%",
        assets: [
          {
            title: "Autonomous Dispute Management System",
            registrationNumber: "TX 9-123-456",
            type: "Software Code",
            status: "registered",
            filingDate: "2024-01-15",
          },
          {
            title: "AI Agent Network Architecture",
            registrationNumber: "TX 9-123-457",
            type: "Software Code",
            status: "registered",
            filingDate: "2024-01-12",
          },
        ],
      },

      patents: {
        applications: 8,
        granted: 0,
        totalValue: "$1.2M",
        claims: 85,
        applications: [
          {
            title: "Autonomous Financial Dispute Resolution System",
            applicationNumber: "US 18/123,456",
            type: "Utility Patent",
            status: "pending",
            filingDate: "2024-01-15",
            inventors: ["William Craig Jefferson"],
          },
          {
            title: "Multi-Agent Compliance Monitoring Network",
            applicationNumber: "US 18/123,457",
            type: "Utility Patent",
            status: "pending",
            filingDate: "2024-01-12",
            inventors: ["William Craig Jefferson"],
          },
        ],
      },

      trademarks: {
        registered: 5,
        pending: 2,
        totalValue: "$300K",
        classes: 8,
        marks: [
          {
            mark: "JEFFCO TECHNOLOGIES",
            registrationNumber: "US 7,123,456",
            status: "registered",
            classes: ["Class 42: Computer Services", "Class 36: Financial Services"],
          },
          {
            mark: "AUTONOMOUS DISPUTE RESOLUTION",
            registrationNumber: "US 7,123,457",
            status: "registered",
            classes: ["Class 42: Computer Services", "Class 36: Financial Services"],
          },
        ],
      },

      tradeSecrets: {
        protected: 12,
        totalValue: "$200K",
        categories: ["Algorithms", "Processes", "Client Data", "Business Methods"],
      },
    }

    return NextResponse.json(ipPortfolio)
  } catch (error) {
    console.error("IP portfolio error:", error)
    return NextResponse.json({ error: "Failed to retrieve IP portfolio" }, { status: 500 })
  }
}
