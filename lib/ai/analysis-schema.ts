export type VigilanceLevel = "faible" | "modere" | "eleve" | "urgent"

export type CzameAnalysis = {
  detectedSubject: string
  title: string
  summary: string
  vigilanceLevel: VigilanceLevel
  whatAppears: string[]
  vigilancePoints: string[]
  whatToAvoid: string[]
  firstStep: string
  conversationPhrases: string[]
  orientation: string
  safetyMessage: string
}

export const fallbackAnalysis: CzameAnalysis = {
  detectedSubject: "Non identifié",
  title: "Analyse indisponible",
  summary:
    "L'analyse n'a pas pu être générée correctement. Vous pouvez reformuler votre récit ou réessayer dans quelques instants.",
  vigilanceLevel: "modere",
  whatAppears: [
    "Le récit mérite d'être repris avec prudence.",
    "Les éléments transmis ne permettent pas de produire une analyse fiable.",
  ],
  vigilancePoints: [
    "Ne pas prendre de décision importante uniquement à partir de cette réponse.",
  ],
  whatToAvoid: [
    "Ne pas rester seul si la situation vous inquiète fortement.",
    "Ne pas considérer cette analyse comme un avis médical.",
  ],
  firstStep:
    "Reformuler la situation avec quelques éléments concrets : depuis quand, avec quelles conséquences, et ce qui vous inquiète le plus.",
  conversationPhrases: [
    "J'aimerais qu'on puisse parler de ce qui se passe sans se juger.",
    "Je ne cherche pas à t'accuser, mais certains éléments m'inquiètent.",
    "J'ai besoin de comprendre ce que cette situation provoque pour chacun.",
  ],
  orientation:
    "En cas de doute important, il peut être utile d'en parler à un professionnel de santé ou à une structure spécialisée.",
  safetyMessage:
    "Si la situation présente un danger immédiat, contactez les services d'urgence.",
}

export function isCzameAnalysis(value: unknown): value is CzameAnalysis {
  if (!value || typeof value !== "object") return false

  const analysis = value as Partial<CzameAnalysis>

  return (
    typeof analysis.detectedSubject === "string" &&
    typeof analysis.title === "string" &&
    typeof analysis.summary === "string" &&
    isVigilanceLevel(analysis.vigilanceLevel) &&
    isStringArray(analysis.whatAppears) &&
    isStringArray(analysis.vigilancePoints) &&
    isStringArray(analysis.whatToAvoid) &&
    typeof analysis.firstStep === "string" &&
    isStringArray(analysis.conversationPhrases) &&
    typeof analysis.orientation === "string" &&
    typeof analysis.safetyMessage === "string"
  )
}

function isVigilanceLevel(value: unknown): value is VigilanceLevel {
  return (
    value === "faible" ||
    value === "modere" ||
    value === "eleve" ||
    value === "urgent"
  )
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string")
}
