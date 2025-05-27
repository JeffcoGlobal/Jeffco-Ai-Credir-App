"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Star, Heart, ThumbsUp } from "lucide-react"

export function CustomerSatisfactionSurvey() {
  const [surveyData, setSurveyData] = useState({
    overallSatisfaction: "",
    easeOfUse: "",
    agentHelpfulness: "",
    timeToComplete: "",
    likelihood: "",
    feedback: "",
    improvements: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    // Submit survey data
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Thank You!
          </CardTitle>
          <CardDescription>Your feedback helps us improve our onboarding experience</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <ThumbsUp className="h-4 w-4" />
            <AlertDescription>
              <strong>Survey Submitted Successfully!</strong> Your feedback is valuable to us and will help us continue
              to improve our platform and onboarding experience.
            </AlertDescription>
          </Alert>
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800">What happens next?</h4>
            <ul className="text-sm text-green-700 mt-2 space-y-1">
              <li>• Your feedback will be reviewed by our product team</li>
              <li>• If you provided contact information, we may reach out for follow-up</li>
              <li>• You'll receive updates on improvements based on your suggestions</li>
              <li>• Continue exploring your dashboard and start your first dispute</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          How was your onboarding experience?
        </CardTitle>
        <CardDescription>
          Your feedback helps us improve our platform and ensure every client has a great experience
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Satisfaction */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Overall, how satisfied are you with the onboarding process?</Label>
          <RadioGroup
            value={surveyData.overallSatisfaction}
            onValueChange={(value) => setSurveyData({ ...surveyData, overallSatisfaction: value })}
          >
            {["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`overall-${option}`} />
                <Label htmlFor={`overall-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Ease of Use */}
        <div className="space-y-3">
          <Label className="text-base font-medium">How easy was it to complete the onboarding process?</Label>
          <RadioGroup
            value={surveyData.easeOfUse}
            onValueChange={(value) => setSurveyData({ ...surveyData, easeOfUse: value })}
          >
            {["Very Easy", "Easy", "Neutral", "Difficult", "Very Difficult"].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`ease-${option}`} />
                <Label htmlFor={`ease-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Agent Helpfulness */}
        <div className="space-y-3">
          <Label className="text-base font-medium">How helpful was Alex, your onboarding agent?</Label>
          <RadioGroup
            value={surveyData.agentHelpfulness}
            onValueChange={(value) => setSurveyData({ ...surveyData, agentHelpfulness: value })}
          >
            {["Extremely Helpful", "Very Helpful", "Somewhat Helpful", "Not Very Helpful", "Not Helpful at All"].map(
              (option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`agent-${option}`} />
                  <Label htmlFor={`agent-${option}`}>{option}</Label>
                </div>
              ),
            )}
          </RadioGroup>
        </div>

        {/* Time to Complete */}
        <div className="space-y-3">
          <Label className="text-base font-medium">How was the time it took to complete onboarding?</Label>
          <RadioGroup
            value={surveyData.timeToComplete}
            onValueChange={(value) => setSurveyData({ ...surveyData, timeToComplete: value })}
          >
            {[
              "Much faster than expected",
              "Faster than expected",
              "About what I expected",
              "Slower than expected",
              "Much slower than expected",
            ].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`time-${option}`} />
                <Label htmlFor={`time-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Likelihood to Recommend */}
        <div className="space-y-3">
          <Label className="text-base font-medium">How likely are you to recommend our platform to others?</Label>
          <RadioGroup
            value={surveyData.likelihood}
            onValueChange={(value) => setSurveyData({ ...surveyData, likelihood: value })}
          >
            {["Extremely Likely", "Very Likely", "Somewhat Likely", "Not Very Likely", "Not Likely at All"].map(
              (option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`likelihood-${option}`} />
                  <Label htmlFor={`likelihood-${option}`}>{option}</Label>
                </div>
              ),
            )}
          </RadioGroup>
        </div>

        {/* Open Feedback */}
        <div className="space-y-3">
          <Label htmlFor="feedback" className="text-base font-medium">
            What did you like most about the onboarding process?
          </Label>
          <Textarea
            id="feedback"
            placeholder="Share what worked well for you..."
            value={surveyData.feedback}
            onChange={(e) => setSurveyData({ ...surveyData, feedback: e.target.value })}
          />
        </div>

        {/* Improvements */}
        <div className="space-y-3">
          <Label htmlFor="improvements" className="text-base font-medium">
            What could we improve about the onboarding process?
          </Label>
          <Textarea
            id="improvements"
            placeholder="Share any suggestions for improvement..."
            value={surveyData.improvements}
            onChange={(e) => setSurveyData({ ...surveyData, improvements: e.target.value })}
          />
        </div>

        <Button onClick={handleSubmit} className="w-full">
          Submit Feedback
        </Button>
      </CardContent>
    </Card>
  )
}
