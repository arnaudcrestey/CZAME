import OpenAI from "openai"
import nodemailer from "nodemailer"
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

function getMailTransporter() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? 465)
  const secure = process.env.SMTP_SECURE !== "false"
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  })
}

async function sendQuestionnaireNotification({
  vigilanceLevel,
  emergencyDetected,
}: {
  vigilanceLevel: string
  emergencyDetected: boolean
}) {
  const transporter = getMailTransporter()
  const from = process.env.MAIL_FROM
  const to = process.env.MAIL_TO

  if (!transporter || !from || !to) {
    return
  }
    const completedAt = new Date()

  const subject = "C·ZAME — Nouveau questionnaire complété"

  const text = [
    "Nouveau questionnaire C·ZAME complété.",
    "",
    `Date : ${completedAt.toLocaleString("fr-FR", {
      timeZone: "Europe/Paris",
    })}`,
    `Niveau de vigilance : ${vigilanceLevel}`,
    `Signal d'urgence détecté : ${emergencyDetected ? "oui" : "non"}`,
    "",
    "Aucun récit utilisateur n'est transmis dans cette notification.",
  ].join("\n")

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
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

    // Notification par e-mail (non bloquante)
    sendQuestionnaireNotification({
      vigilanceLevel: analysis.vigilanceLevel,
      emergencyDetected,
    }).catch((error) => {
      console.error("Erreur envoi e-mail :", error)
    })

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("Erreur API analyse C·ZAME :", error)

    return NextResponse.json(fallbackAnalysis, { status: 200 })
  }
}
