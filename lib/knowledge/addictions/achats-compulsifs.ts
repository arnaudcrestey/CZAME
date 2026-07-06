import type { KnowledgeModule } from "@/lib/ai/types"

export const achatsCompulsifsKnowledge: KnowledgeModule = {
  id: "achats-compulsifs",
  category: "addiction",
  title: "Achats compulsifs",
  version: "1.0.0",

  summary:
    "Module consacré aux achats compulsifs, achats impulsifs, dépenses incontrôlées, achats en ligne, promotions, marketplaces, crédit à la consommation et situations de perte de contrôle liées à l'argent.",

  knowledge: [
    "Les achats peuvent devenir problématiques lorsqu'ils entraînent une perte de contrôle, une souffrance ou des conséquences importantes.",
    "Les situations peuvent concerner les achats en magasin, les achats en ligne, les marketplaces, les ventes privées, les promotions, les applications ou les réseaux sociaux.",
    "La question centrale n'est pas seulement le montant dépensé, mais la difficulté à résister, la répétition des achats et leurs conséquences.",
    "Les achats compulsifs peuvent être liés à une recherche d'apaisement, de récompense, de valorisation, d'oubli ou de soulagement émotionnel.",
    "La honte, le secret, la minimisation et les mensonges autour des dépenses sont fréquents.",
    "Les conséquences peuvent concerner les finances, le couple, la famille, le logement, le travail, l'estime de soi ou l'endettement.",
  ],

  detection: [
    "Achats répétés malgré l'envie de réduire ou d'arrêter.",
    "Dépenses plus importantes que prévu.",
    "Achats réalisés sous tension, tristesse, stress, ennui, colère ou solitude.",
    "Soulagement immédiat après l'achat puis culpabilité, honte ou regret.",
    "Dissimulation des achats, colis cachés, mensonges ou minimisation des dépenses.",
    "Accumulation d'objets peu utilisés ou non nécessaires.",
    "Difficultés financières, découvert, crédits, dettes ou impossibilité de payer certaines charges.",
    "Consultation répétée de sites, applications, promotions ou paniers d'achat.",
    "Conflits conjugaux, familiaux ou professionnels liés aux dépenses.",
  ],

  reasoning: [
    "Ne jamais conclure à une addiction uniquement à partir d'un récit.",
    "Distinguer achat plaisir, achat impulsif ponctuel, perte de contrôle possible, conséquences financières et situation d'endettement.",
    "Repérer le cycle émotionnel : tension avant l'achat, soulagement pendant, culpabilité ou honte après.",
    "Évaluer les conséquences concrètes : argent, dettes, couple, famille, logement, travail et estime de soi.",
    "Être attentif aux crédits, découverts, dettes cachées, mensonges et pertes de contrôle répétées.",
    "Identifier si les achats servent à gérer une souffrance, un vide, une anxiété, une solitude ou une baisse d'estime de soi.",
    "Tenir compte de la personne qui parle : personne concernée, conjoint, proche, parent, professionnel ou tiers inquiet.",
  ],

  responseGuidance: [
    "Adopter un ton calme, respectueux et non humiliant.",
    "Éviter de réduire la situation à une mauvaise gestion ou à un manque de volonté.",
    "Aider à clarifier les faits : fréquence, montants, déclencheurs, dettes, mensonges, conséquences et tentatives de réduction.",
    "Proposer une première étape concrète : faire le point sur les dépenses réelles et identifier les moments déclencheurs.",
    "Pour un proche, encourager une parole centrée sur les faits observables et l'inquiétude plutôt que sur le reproche.",
    "En cas de dettes ou de crédits, encourager à ne pas rester seul et à demander conseil rapidement.",
    "Valoriser toute démarche visant à reprendre progressivement le contrôle sans honte excessive.",
  ],

  orientation: [
    "Inviter à consulter un professionnel de santé, un psychologue ou un professionnel en addictologie si la situation entraîne une souffrance ou une perte de contrôle.",
    "En cas de difficultés financières, proposer de contacter un service social, un conseiller budgétaire ou une structure d'accompagnement au surendettement.",
    "En cas de conflit familial important, proposer de chercher conseil avant de multiplier les accusations ou les confrontations.",
    "En cas de souffrance psychique associée, encourager un appui médical ou psychologique adapté.",
    "Pour les proches, proposer de ne pas gérer seuls les dettes, les mensonges répétés ou les conflits importants.",
  ],

  emergency: [
    "Idées suicidaires, propos de désespoir ou menace de passage à l'acte liés aux dettes ou aux dépenses.",
    "Endettement massif, impossibilité de payer les charges essentielles ou risque de perte de logement.",
    "Pression financière immédiate, menaces, chantage ou exploitation.",
    "Violence familiale ou conflit grave autour de l'argent.",
    "Mineur ou personne vulnérable mis en danger par des dépenses incontrôlées ou une exploitation financière.",
  ],

  misconceptions: [
    "Penser qu'il s'agit seulement d'un problème de budget.",
    "Croire que la honte aide à reprendre le contrôle.",
    "Réduire la situation à un caprice ou à un manque de sérieux.",
    "Penser qu'une interdiction brutale règle durablement le problème.",
    "Ignorer le rôle possible du stress, de la solitude, de l'anxiété ou de l'estime de soi.",
    "Confondre achat plaisir occasionnel et perte de contrôle répétée.",
    "Minimiser les petits achats répétés parce qu'ils semblent peu importants isolément.",
  ],

  keyQuestions: [
    "Quels types d'achats posent problème ?",
    "Les achats sont-ils prévus ou impulsifs ?",
    "La personne arrive-t-elle à s'arrêter lorsqu'elle l'avait décidé ?",
    "Quels sont les montants réels dépensés sur une semaine ou un mois ?",
    "Y a-t-il des dettes, crédits, découverts ou charges impayées ?",
    "Les achats sont-ils cachés ou minimisés ?",
    "Quelles émotions précèdent les achats : stress, solitude, tristesse, colère, ennui ou vide ?",
    "Existe-t-il un risque immédiat : dette urgente, logement menacé, violence, idées noires ou mise en danger ?",
  ],

  references: [
    {
      label: "Drogues Info Service",
    },
    {
      label: "Haute Autorité de Santé",
    },
    {
      label: "Banque de France",
    },
    {
      label: "Service-public.fr",
    },
  ],
}