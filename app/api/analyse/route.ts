import OpenAI from "openai"
import { NextResponse } from "next/server"

import { buildAnalysisPrompt } from "@/lib/ai/prompt-builder"

import {
  fallbackAnalysis,
  isCzameAnalysis,
} from "@/lib/ai/analysis-schema"

import { hasEmergencySignal } from "@/lib/ai/safety"

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is missing")
  }

  return new OpenAI({
    apiKey,
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const narrative = String(body?.narrative ?? "").trim()

    if (!narrative) {
      return NextResponse.json(
        { error: "Le récit est obligatoire." },
        { status: 400 }
      )
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(fallbackAnalysis, { status: 200 })
    }

        const prompt = buildAnalysisPrompt({ narrative })
    const emergencyDetected = hasEmergencySignal(narrative)

    const openai = getOpenAIClient()

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "Tu réponds uniquement en JSON valide. Tu es un moteur d'analyse prudent, non médical, spécialisé dans la clarification des conduites addictives.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    })

    const content = completion.choices[0]?.message?.content

    if (!content) {
      return NextResponse.json(fallbackAnalysis, { status: 200 })
    }

    const parsed = JSON.parse(content)

    if (!isCzameAnalysis(parsed)) {
      return NextResponse.json(fallbackAnalysis, { status: 200 })
    }

    const analysis = emergencyDetected
      ? {
          ...parsed,
          vigilanceLevel: "urgent" as const,
          safetyMessage:
            parsed.safetyMessage ||
            "Certains éléments peuvent évoquer un risque immédiat. Si une personne est en danger, contactez les services d'urgence sans attendre.",
        }
      : parsed

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("Erreur API analyse C·ZAME :", error)

    return NextResponse.json(fallbackAnalysis, { status: 200 })
  }
}