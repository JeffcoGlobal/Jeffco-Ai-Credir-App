"use server"

import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const surveyData = await request.json()

    // Process survey data and store in database
    const processedSurvey = {
      id: `survey_${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...surveyData,
      processed: true,
    }

    // Calculate satisfaction metrics
    const satisfactionScore = calculateSatisfactionScore(surveyData)

    // Trigger follow-up actions based on feedback
    if (satisfactionScore < 3) {
      // Low satisfaction - trigger immediate follow-up
      await triggerCustomerSuccessOutreach(processedSurvey)
    }

    return NextResponse.json({
      success: true,
      surveyId: processedSurvey.id,
      satisfactionScore,
      message: "Thank you for your feedback! Your input helps us improve our platform.",
      followUpActions: satisfactionScore < 3 ? ["Customer success team will contact you within 24 hours"] : [],
    })
  } catch (error) {
    console.error("Survey submission error:", error)
    return NextResponse.json({ error: "Failed to submit survey" }, { status: 500 })
  }
}

function calculateSatisfactionScore(surveyData: any): number {
  const scores = {
    "Very Satisfied": 5,
    Satisfied: 4,
    Neutral: 3,
    Dissatisfied: 2,
    "Very Dissatisfied": 1,
    "Very Easy": 5,
    Easy: 4,
    Difficult: 2,
    "Very Difficult": 1,
    "Extremely Helpful": 5,
    "Very Helpful": 4,
    "Somewhat Helpful": 3,
    "Not Very Helpful": 2,
    "Not Helpful at All": 1,
  }

  const relevantFields = [surveyData.overallSatisfaction, surveyData.easeOfUse, surveyData.agentHelpfulness].filter(
    Boolean,
  )

  if (relevantFields.length === 0) return 3

  const totalScore = relevantFields.reduce((sum, field) => sum + (scores[field] || 3), 0)
  return Math.round((totalScore / relevantFields.length) * 10) / 10
}

async function triggerCustomerSuccessOutreach(survey: any) {
  // In a real implementation, this would trigger customer success workflows
  console.log("Triggering customer success outreach for survey:", survey.id)

  // Could integrate with:
  // - Customer success platforms (Gainsight, ChurnZero)
  // - Email automation (SendGrid, Mailchimp)
  // - CRM systems (Salesforce, HubSpot)
  // - Slack notifications for immediate team alerts
}
