import type { KnowledgeModule } from "@/lib/ai/types"
import { knowledgeModules } from "@/lib/knowledge/index"

type BuildAnalysisPromptParams = {
  narrative: string
  modules?: KnowledgeModule[]
}

const moduleKeywords: Record<string, string[]> = {
  alcool: [
    "alcool",
    "boire",
    "boit",
    "buvait",
    "bouteille",
    "ivresse",
    "ivre",
    "vin",
    "bière",
    "whisky",
    "vodka",
    "apéritif",
    "soirée",
  ],

  cannabis: [
    "cannabis",
    "shit",
    "joint",
    "joints",
    "beuh",
    "weed",
    "haschich",
    "résine",
    "fumer",
    "fumette",
    "défoncé",
    "planer",
  ],

  medicaments: [
    "médicament",
    "médicaments",
    "cachet",
    "cachets",
    "comprimé",
    "comprimés",
    "anxiolytique",
    "anxiolytiques",
    "somnifère",
    "somnifères",
    "benzodiazépine",
    "benzodiazépines",
    "xanax",
    "lexomil",
    "stilnox",
    "valium",
    "tramadol",
    "morphine",
    "codéine",
    "ordonnance",
    "prescription",
  ],

    drogue: [
    "drogue",
    "drogues",
    "cocaïne",
    "cocaine",
    "coke",
    "crack",
    "amphétamine",
    "amphétamines",
    "amphetamine",
    "amphetamines",
    "speed",
    "mdma",
    "ecstasy",
    "taz",
    "lsd",
    "hallucinogène",
    "hallucinogènes",
    "champignon",
    "champignons",
    "kétamine",
    "ketamine",
    "opioïde",
    "opioïdes",
    "opiacé",
    "opiacés",
    "héroïne",
    "heroine",
    "protoxyde",
    "proto",
    "ballon",
    "ballons",
    "poppers",
    "sniffer",
    "snif",
    "rail",
    "triper",
    "bad trip",
    "overdose",
    "surdose",
  ],
    "tabac-nicotine": [
    "tabac",
    "cigarette",
    "cigarettes",
    "fumer",
    "fumée",
    "clope",
    "clopes",
    "nicotine",
    "vapoter",
    "vape",
    "vapote",
    "vapoteuse",
    "cigarette électronique",
    "cigarette electronique",
    "e-cigarette",
    "ecigarette",
    "puff",
    "puffs",
    "chicha",
    "narguilé",
    "narguile",
    "snus",
    "sachet nicotinique",
    "sachets nicotiniques",
    "patch nicotine",
    "patch nicotinique",
    "gomme nicotine",
    "substitut nicotinique",
    "substituts nicotiniques",
    "sevrage tabagique",
  ],
    jeux: [
    "jeu",
    "jeux",
    "jouer",
    "joue",
    "gaming",
    "gamer",
    "jeu vidéo",
    "jeux vidéo",
    "jeu video",
    "jeux video",
    "console",
    "ordinateur",
    "steam",
    "xbox",
    "playstation",
    "ps5",
    "switch",
    "fortnite",
    "fifa",
    "ea fc",
    "minecraft",
    "call of duty",
    "league of legends",
    "valorant",
    "casino",
    "poker",
    "blackjack",
    "roulette",
    "machine à sous",
    "machines à sous",
    "pari",
    "paris",
    "pari sportif",
    "paris sportifs",
    "pmu",
    "loto",
    "euromillions",
    "grattage",
    "fdj",
    "betclic",
    "winamax",
    "unibet",
    "loot box",
    "loot boxes",
    "microtransaction",
    "microtransactions",
    "achat intégré",
    "achats intégrés",
  ],
    sexualite: [
    "sexualité",
    "sexualite",
    "sexe",
    "sexuel",
    "sexuelle",
    "sexuels",
    "sexuelles",
    "porno",
    "pornographie",
    "pornographique",
    "masturbation",
    "masturber",
    "masturbe",
    "application de rencontre",
    "applications de rencontre",
    "site de rencontre",
    "sites de rencontre",
    "tinder",
    "grindr",
    "meetic",
    "onlyfans",
    "contenu intime",
    "contenus intimes",
    "image intime",
    "images intimes",
    "sexting",
    "sextorsion",
    "chantage sexuel",
    "rencontre sexuelle",
    "rencontres sexuelles",
    "rapport sexuel",
    "rapports sexuels",
    "compulsion sexuelle",
    "compulsions sexuelles",
    "addiction sexuelle",
    "dépendance sexuelle",
    "dependance sexuelle",
  ],
    "achats-compulsifs": [
    "achat",
    "achats",
    "acheter",
    "j'achète",
    "j'achete",
    "achète",
    "achete",
    "shopping",
    "dépense",
    "dépenses",
    "depense",
    "depenses",
    "dépenser",
    "depenser",
    "compulsif",
    "compulsive",
    "compulsifs",
    "compulsives",
    "achat compulsif",
    "achats compulsifs",
    "achat impulsif",
    "achats impulsifs",
    "commande",
    "commandes",
    "colis",
    "panier",
    "marketplace",
    "amazon",
    "vinted",
    "zalando",
    "vente privée",
    "ventes privées",
    "promo",
    "promos",
    "promotion",
    "promotions",
    "carte bancaire",
    "crédit",
    "credit",
    "découvert",
    "decouvert",
    "dette",
    "dettes",
    "surendettement",
  ],
    travail: [
    "travail",
    "travailler",
    "boulot",
    "job",
    "taf",
    "burn out",
    "burn-out",
    "burnout",
    "épuisement professionnel",
    "epuisement professionnel",
    "surmenage",
    "surcharge",
    "heures sup",
    "heures supplémentaires",
    "heures supplementaires",
    "déconnecter",
    "deconnecter",
    "performance",
    "performant",
    "perfectionnisme",
    "perfectionniste",
    "productivité",
    "productivite",
    "mail professionnel",
    "mails professionnels",
    "réunion",
    "réunions",
    "reunion",
    "reunions",
    "dossier urgent",
    "objectifs",
    "manager",
    "collègue",
    "collegue",
    "patron",
    "entreprise",
    "horaires",
  ],
}

export function buildAnalysisPrompt({
  narrative,
  modules,
}: BuildAnalysisPromptParams) {
  const selectedModules = modules ?? selectKnowledgeModules(narrative)

  const knowledgeContext = selectedModules
    .map((module) => formatKnowledgeModule(module))
    .join("\n\n---\n\n")

  return `
Tu es le moteur d'analyse de C·ZAME.

C·ZAME aide une personne à clarifier un récit lié à une conduite addictive, une inquiétude, une perte de contrôle possible ou une situation difficile avec un proche.

Tu ne poses jamais de diagnostic.
Tu ne remplaces jamais un médecin, un addictologue, un psychologue, un service social ou un service d'urgence.
Tu ne dis jamais qu'une personne est addict, alcoolique, toxicomane ou malade.
Tu analyses uniquement ce que le récit permet raisonnablement de comprendre.

POSTURE ATTENDUE :
- prudente ;
- humaine ;
- claire ;
- non jugeante ;
- professionnelle ;
- concrète ;
- orientée vers une prochaine étape réaliste.

CONNAISSANCES DISPONIBLES :
${knowledgeContext}

RÉCIT À ANALYSER :
"""
${narrative}
"""

TA MISSION :

Analyse le récit en t'appuyant exclusivement sur les connaissances fournies.

Ton objectif n'est pas seulement d'expliquer la situation mais d'aider concrètement la personne à préparer une conversation.

Pour cela :

- identifie ce que le récit permet raisonnablement de comprendre ;
- distingue les faits des hypothèses ;
- adapte tes conseils au contexte décrit ;
- utilise les connaissances des modules sélectionnés ;
- propose des pistes concrètes, progressives et réalistes ;
- reste toujours prudent, nuancé et non jugeant.

Les conseils doivent être différents selon la situation.

Une situation liée à l'alcool, au cannabis, aux jeux, au travail, à un adolescent ou à un proche ne doit jamais produire exactement les mêmes recommandations.
FORMAT DE SORTIE OBLIGATOIRE :
Tu dois répondre uniquement en JSON valide, sans texte avant ni après.

{
  "detectedSubject": "Sujet principal détecté (exemple : Alcool, Cannabis, Jeux vidéo, Jeux d'argent, Cocaïne, Tabac, Travail, Sexualité, Achats compulsifs, Médicaments...)",
  "title": "Titre court et humain de l'analyse",
  "summary": "Synthèse claire en 3 à 5 phrases.",
  "vigilanceLevel": "faible | modere | eleve | urgent",
  "whatAppears": ["Point observé 1", "Point observé 2", "Point observé 3"],
  "conversationPlan": ["Étape personnalisée 1", "Étape personnalisée 2", "Étape personnalisée 3", "Étape personnalisée 4"],
  "questionsToAsk": ["Question ouverte personnalisée 1", "Question ouverte personnalisée 2", "Question ouverte personnalisée 3"],
  "nextActions": ["Action concrète personnalisée 1", "Action concrète personnalisée 2", "Action concrète personnalisée 3"],
  "vigilancePoints": ["Point de vigilance 1", "Point de vigilance 2"],
  "whatToAvoid": ["Erreur à éviter 1", "Erreur à éviter 2"],
  "firstStep": "Première action simple, réaliste et prudente.",
  "conversationPhrases": ["Phrase possible 1", "Phrase possible 2", "Phrase possible 3"],
  "orientation": "Orientation prudente si utile.",
  "safetyMessage": "Message de sécurité adapté au niveau de risque."
}

IMPORTANT :

Le plan de conversation, les questions ouvertes et les actions concrètes constituent la partie la plus importante de la réponse.

Ils doivent être entièrement personnalisés.

Ils doivent être construits en s'appuyant sur :

- les connaissances des modules sélectionnés ;
- les éléments réellement présents dans le récit ;
- le niveau de vigilance retenu ;
- la relation entre les personnes (parent, conjoint, enfant, ami, collègue, etc.) ;
- les difficultés de communication décrites.

N'utilise jamais des conseils génériques.

Chaque conseil doit donner l'impression d'avoir été écrit uniquement pour cette situation.

Le plan de conversation doit expliquer comment préparer l'échange.

Les questions ouvertes doivent être directement liées à ce que vit la personne concernée.

Les actions concrètes doivent être réalistes, progressives et immédiatement applicables.

Évite les formulations vagues comme :

- "Choisir un moment calme"
- "Poser une question ouverte"
- "Exprimer son inquiétude"

Préfère des conseils contextualisés.

Exemple :

Au lieu de :

"Choisir un moment calme."

Écrire :

"Choisissez un soir où votre père n'a pas encore commencé à boire afin qu'il soit plus disponible pour échanger."

Au lieu de :

"Exprimer son inquiétude."

Écrire :

"Dites que vous avez remarqué qu'il s'isole davantage depuis quelques semaines et que cela vous inquiète."

Les formulations proposées doivent elles aussi reprendre des éléments précis du récit plutôt que des phrases passe-partout.

RÈGLES :
- Si le récit évoque un risque suicidaire, une violence immédiate, un enfant en danger, une urgence médicale, une overdose ou un sevrage sévère possible, le niveau doit être "urgent".
- Si le niveau est urgent, l'analyse doit prioriser la sécurité immédiate.
- Si les informations sont insuffisantes, dis-le clairement.
- Ne donne jamais d'ordre.
- Ne culpabilise jamais.
- Ne promets jamais qu'une conversation suffira.
- Propose toujours une prochaine étape concrète.
Le champ "detectedSubject" doit contenir uniquement le sujet principal traité dans le récit.

Exemples possibles :

- Alcool
- Cannabis
- Cocaïne
- Drogues
- Médicaments
- Tabac
- Jeux vidéo
- Jeux d'argent
- Sexualité
- Achats compulsifs
- Travail

Si plusieurs conduites apparaissent, ne conserver que la plus importante.
`.trim()
}

export function selectKnowledgeModules(narrative: string): KnowledgeModule[] {
  const normalizedNarrative = narrative.toLowerCase()

  return knowledgeModules.filter((module) => {
    const keywords = moduleKeywords[module.id] ?? []

    return keywords.some((keyword) =>
      normalizedNarrative.includes(keyword.toLowerCase())
    )
  })
}

function formatKnowledgeModule(module: KnowledgeModule) {
  return `
MODULE : ${module.title}
Résumé : ${module.summary}

Connaissances :
${formatList(module.knowledge)}

Signaux à repérer :
${formatList(module.detection)}

Règles de raisonnement :
${formatList(module.reasoning)}

Guidage de réponse :
${formatList(module.responseGuidance)}

Orientation :
${formatList(module.orientation)}

Urgence :
${formatList(module.emergency)}

Idées reçues à éviter :
${formatList(module.misconceptions)}

Questions utiles :
${formatList(module.keyQuestions)}
`.trim()
}

function formatList(items: string[]) {
  return items.map((item) => `- ${item}`).join("\n")
}
