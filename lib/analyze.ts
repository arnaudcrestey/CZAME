import { guidanceResources, emergencyResources } from "./resources"
import type { DialogueAnalysis, RiskLevel } from "./schema"

type Cue = {
  pattern: RegExp
  weight: number
}

const redCues: Cue[] = [
  { pattern: /\b(suicide|suicidaire|mourir|se tuer|3114)\b/i, weight: 4 },
  {
    pattern: /\b(overdose|intoxication|malaise|inconscient|respire mal|coma)\b/i,
    weight: 4,
  },
  { pattern: /\b(violence|menace|frappe|danger immédiat|arme)\b/i, weight: 3 },
  { pattern: /\b(enfant|mineur|ado|adolescent|17 ans|16 ans|15 ans)\b/i, weight: 2 },
  { pattern: /\b(hallucination|délire|parano|confus)\b/i, weight: 3 },
]

const amberCues: Cue[] = [
  {
    pattern: /\b(alcool|cannabis|cocaïne|opiacé|benzodiazépine|médicament|jeu|porno|écran)\b/i,
    weight: 2,
  },
  {
    pattern: /\b(tous les jours|quotidien|chaque soir|week-end|cache|mensonge|dette)\b/i,
    weight: 2,
  },
  {
    pattern: /\b(isolement|se ferme|agressif|nerveux|colère|travail|absent)\b/i,
    weight: 1,
  },
  {
    pattern: /\b(je ne sais pas|comment réagir|quoi faire|j'ai peur|inquiet)\b/i,
    weight: 1,
  },
]

function scoreNarrative(text: string) {
  const red = redCues.reduce(
    (score, cue) => score + (cue.pattern.test(text) ? cue.weight : 0),
    0
  )

  const amber = amberCues.reduce(
    (score, cue) => score + (cue.pattern.test(text) ? cue.weight : 0),
    0
  )

  return { red, amber }
}

function resolveRiskLevel(text: string): RiskLevel {
  const score = scoreNarrative(text)

  if (score.red >= 4) return "red"
  if (score.red >= 2 || score.amber >= 3) return "amber"

  return "green"
}

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.toLocaleLowerCase("fr-FR").includes(term))
}

export function analyzeNarrative(text: string): DialogueAnalysis {
  const riskLevel = resolveRiskLevel(text)
  const lower = text.toLocaleLowerCase("fr-FR")

  const isYouth = includesAny(lower, [
    "ado",
    "adolescent",
    "mineur",
    "17 ans",
    "16 ans",
    "15 ans",
  ])

  const isAlcohol = includesAny(lower, [
    "alcool",
    "boit",
    "buvait",
    "verre",
    "soirées",
  ])

  const isGame = includesAny(lower, ["jeu", "paris", "casino", "dette"])

  const resources = [
    ...(riskLevel === "red" ? emergencyResources : []),
    ...guidanceResources.filter((resource) => {
      if (resource.category === "youth") return isYouth
      if (resource.title.includes("Alcool")) return isAlcohol
      if (resource.title.includes("Joueurs")) return isGame
      return ["listening", "care"].includes(resource.category)
    }),
  ].slice(0, riskLevel === "red" ? 5 : 4)

  return {
    riskLevel,

    label:
      riskLevel === "red"
        ? "Priorité sécurité"
        : riskLevel === "amber"
          ? "Dialogue à préparer"
          : "Points observés",

    summary:
      riskLevel === "red"
        ? "Le récit contient des signaux qui peuvent dépasser le cadre d'une conversation de proche. La première priorité est la sécurité immédiate, avant toute tentative de dialogue approfondi."
        : "Le récit laisse surtout apparaître une inquiétude relationnelle : il faut ouvrir une conversation sans accusation, partir de faits observables et préserver la possibilité que l'autre ne soit pas prêt à parler tout de suite.",

    whatSeemsAtStake: [
      "Votre inquiétude concerne autant la consommation que le lien : réactions fermées, tension, perte de confiance ou sentiment de ne plus savoir comment aborder le sujet.",
      "La conversation a plus de chances d'aboutir si elle part de votre ressenti et de faits concrets plutôt que d'une étiquette ou d'un diagnostic.",
      isYouth
        ? "La présence d'un mineur invite à ne pas rester seul avec l'inquiétude et à rechercher rapidement un adulte ou professionnel fiable."
        : "Votre rôle peut être de rendre l'échange possible et d'orienter, pas de convaincre à tout prix.",
    ],

    pointsOfVigilance: [
      "Éviter les moments de crise, de fatigue, d'ivresse ou de conflit déjà lancé.",
      "Ne pas promettre le secret absolu si une situation de danger apparaît.",
      riskLevel === "red"
        ? "Si la personne est confuse, en danger, violente, suicidaire ou très intoxiquée, contacter immédiatement une aide d'urgence."
        : "Si la personne refuse de parler, garder une phrase courte de disponibilité plutôt que relancer plusieurs fois.",
    ],

    whatNotToConclude: [
      "Ce retour ne pose pas de diagnostic et ne permet pas d'affirmer une addiction.",
      "Un changement de comportement peut avoir plusieurs causes : consommation, santé mentale, fatigue, contexte social ou difficulté personnelle.",
      "Le silence ou l'agacement ne signifie pas forcément indifférence : cela peut aussi traduire honte, peur ou besoin de reprendre du contrôle.",
    ],

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

    phrasesToTry: [
      "Je ne veux pas te faire la morale. Je voudrais juste te dire ce que j'observe et ce que ça me fait.",
      "J'ai l'impression que quelque chose est devenu plus lourd ces derniers temps. Est-ce qu'on peut en parler cinq minutes ?",
      "Si ce n'est pas le bon moment, je peux l'entendre. Je préfère qu'on garde un lien plutôt que de forcer.",
    ],

    phrasesToAvoid: [
      "Tu es addict, il faut que tu arrêtes.",
      "Si tu continues, ne compte plus sur moi.",
      "Tout le monde voit bien que tu mens.",
    ],

    nextStep:
      riskLevel === "red"
        ? "Mettez de côté la discussion de fond. Évaluez la sécurité immédiate, ne restez pas seul si vous êtes inquiet et contactez une aide d'urgence si le risque est actuel."
        : "Choisissez un moment neutre, préparez deux faits observables, une émotion personnelle et une demande simple. L'objectif de la première discussion est d'ouvrir, pas de résoudre.",

    helperCards: resources,

    disclaimer:
      "CᐧZAME aide à clarifier une situation et à préparer une conversation. Ce n'est ni un outil médical, ni un diagnostic, ni un service d'urgence.",
  }
}