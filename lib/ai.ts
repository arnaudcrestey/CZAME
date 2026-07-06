import { analysisSchema, type DialogueAnalysis } from "./schema"

type ApiAnalysis = {
  title: string
  summary: string
  vigilanceLevel: "faible" | "modere" | "eleve" | "urgent"
  whatAppears: string[]
  vigilancePoints: string[]
  whatToAvoid: string[]
  firstStep: string
  conversationPhrases: string[]
  orientation: string
  safetyMessage: string
}

function mapVigilanceToRisk(
  level: ApiAnalysis["vigilanceLevel"]
): DialogueAnalysis["riskLevel"] {
  if (level === "urgent") return "red"
  if (level === "eleve" || level === "modere") return "amber"
  return "green"
}

export async function requestDialogueAnalysis(
  narrative: string
): Promise<DialogueAnalysis> {
  const response = await fetch("/api/analyse", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ narrative }),
  })

  if (!response.ok) {
    throw new Error("Erreur lors de l'analyse.")
  }

  const data = (await response.json()) as ApiAnalysis

  const mappedAnalysis: DialogueAnalysis = {
    riskLevel: mapVigilanceToRisk(data.vigilanceLevel),

    label:
      data.vigilanceLevel === "urgent"
        ? "Priorité sécurité"
        : data.vigilanceLevel === "eleve"
          ? "Vigilance élevée"
          : data.vigilanceLevel === "modere"
            ? "Dialogue à préparer"
            : "Points observés",

    summary: data.summary,

    whatSeemsAtStake: data.whatAppears,

    pointsOfVigilance: data.vigilancePoints,

    whatNotToConclude: [
      "Ce retour ne pose pas de diagnostic.",
      "Les éléments décrits doivent être compris comme des repères de clarification, pas comme une conclusion médicale.",
      data.orientation,
    ].filter(Boolean),

    conversationPlan: [
      "Choisir un moment calme et disponible.",
      "Partir d’un fait observable plutôt que d’une accusation.",
      "Exprimer votre inquiétude avec des mots simples.",
      "Poser une question ouverte.",
      "Laisser une porte ouverte si la personne refuse de parler.",
    ],

    questionsToAsk: [
      "Comment tu te sens en ce moment ?",
      "Est-ce que tu as remarqué que quelque chose a changé ces derniers temps ?",
      "Qu’est-ce qui pourrait t’aider à en parler sans te sentir jugé ?",
    ],

    nextActions: [
      "Noter deux ou trois faits précis avant d’en parler.",
      "Éviter d’aborder le sujet pendant une crise ou une dispute.",
      "Identifier une personne ressource si la situation devient trop lourde.",
    ],

    phrasesToTry: data.conversationPhrases,

    phrasesToAvoid: data.whatToAvoid,

    nextStep: data.firstStep,

    helperCards: [],

    disclaimer:
      data.safetyMessage ||
      "C·ZAME aide à clarifier une situation et à préparer une conversation. Ce n'est ni un outil médical, ni un diagnostic, ni un service d'urgence.",
  }

  return analysisSchema.parse(mappedAnalysis)
}