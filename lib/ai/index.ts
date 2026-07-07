import { fallbackAnalysis, isCzameAnalysis } from "./analysis-schema"

export { buildAnalysisPrompt } from "./prompt-builder"

export type { KnowledgeModule, ReferenceSource } from "./types"

export type { CzameAnalysis, VigilanceLevel } from "./analysis-schema"
export {
  fallbackAnalysis,
  isCzameAnalysis,
} from "./analysis-schema"

export async function requestDialogueAnalysis(narrative: string) {
  try {
    const response = await fetch("/api/analyse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ narrative }),
    })

    if (!response.ok) {
      return fallbackAnalysis
    }

    const data = await response.json()

    if (!isCzameAnalysis(data)) {
      return fallbackAnalysis
    }

    return data
  } catch {
    return fallbackAnalysis
  }
}
