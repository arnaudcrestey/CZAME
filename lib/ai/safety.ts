export type SafetyFlag = {
  id: string
  label: string
  keywords: string[]
}

export const safetyFlags: SafetyFlag[] = [
  {
    id: "suicide",
    label: "Risque suicidaire ou idée de passage à l'acte",
    keywords: [
      "me suicider",
      "suicide",
      "envie de mourir",
      "je veux mourir",
      "je ne veux plus vivre",
      "mettre fin à mes jours",
      "passer à l'acte"
    ]
  },
  {
    id: "violence",
    label: "Violence ou menace immédiate",
    keywords: [
      "il me frappe",
      "elle me frappe",
      "violence",
      "menace",
      "coup",
      "j'ai peur qu'il me tue",
      "j'ai peur qu'elle me tue"
    ]
  },
  {
    id: "child-danger",
    label: "Enfant exposé à un danger",
    keywords: [
      "mon enfant est en danger",
      "enfant en danger",
      "il frappe les enfants",
      "elle frappe les enfants",
      "les enfants ont peur"
    ]
  },
  {
    id: "medical-emergency",
    label: "Urgence médicale possible",
    keywords: [
      "malaise",
      "perte de connaissance",
      "convulsion",
      "overdose",
      "respire mal",
      "ne répond plus",
      "confusion totale"
    ]
  },
  {
    id: "dangerous-withdrawal",
    label: "Sevrage potentiellement dangereux",
    keywords: [
      "tremblements",
      "hallucinations",
      "sevrage",
      "arrêt brutal",
      "je bois tous les jours",
      "il boit tous les jours",
      "elle boit tous les jours"
    ]
  }
]

export function detectSafetyFlags(narrative: string) {
  const normalizedNarrative = narrative.toLowerCase()

  return safetyFlags.filter((flag) =>
    flag.keywords.some((keyword) =>
      normalizedNarrative.includes(keyword.toLowerCase())
    )
  )
}

export function hasEmergencySignal(narrative: string) {
  return detectSafetyFlags(narrative).length > 0
}