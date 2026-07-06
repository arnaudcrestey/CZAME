import type { KnowledgeModule } from "@/lib/ai/types"

export const violenceKnowledge: KnowledgeModule = {
  id: "violence",
  category: "transversal",
  title: "Violence",
  version: "1.0.0",

  summary:
    "Module transversal consacré à l'identification des violences physiques, psychologiques, verbales, sexuelles, économiques, numériques ou des situations d'emprise pouvant nécessiter une protection particulière.",

  knowledge: [
    "La violence peut être physique, psychologique, verbale, sexuelle, économique, administrative ou numérique.",
    "Elle peut être ponctuelle ou s'installer progressivement dans une relation.",
    "Les violences concernent tous les genres, tous les âges et tous les contextes relationnels.",
    "La peur, l'emprise, la honte ou la culpabilité peuvent rendre la situation difficile à reconnaître.",
    "Les violences peuvent être associées à des consommations sans que celles-ci en soient la cause unique.",
    "La protection des personnes exposées reste prioritaire.",
  ],

  detection: [
    "Menaces, insultes, humiliations ou dénigrement répétés.",
    "Coups, violences physiques ou intimidations.",
    "Contrôle des déplacements, de l'argent, du téléphone ou des relations.",
    "Isolement imposé ou surveillance permanente.",
    "Violences sexuelles, contraintes ou absence de consentement.",
    "Peur exprimée, sentiment d'insécurité ou de domination.",
    "Présence d'enfants exposés aux violences.",
  ],

  reasoning: [
    "Identifier les faits décrits plutôt que les interprétations.",
    "Repérer les situations d'emprise ou de contrôle.",
    "Ne jamais banaliser des violences répétées.",
    "Prendre en compte le niveau de danger immédiat.",
    "Être particulièrement attentif à la présence d'enfants ou de personnes vulnérables.",
    "Éviter toute formulation pouvant laisser penser que la victime est responsable des violences.",
    "Prioriser la protection avant toute tentative de médiation.",
  ],

  responseGuidance: [
    "Adopter un ton protecteur, calme et non culpabilisant.",
    "Reconnaître les faits décrits sans dramatiser ni minimiser.",
    "Éviter toute remise en question de la parole lorsqu'aucun élément ne permet de le faire.",
    "Proposer des formulations centrées sur la sécurité.",
    "Encourager la recherche d'une aide adaptée lorsque cela paraît nécessaire.",
    "Ne jamais encourager une confrontation directe lorsqu'elle peut augmenter le danger.",
  ],

  orientation: [
    "En cas de danger, encourager la recherche d'une aide immédiate.",
    "Orienter vers les professionnels ou structures spécialisées lorsque la situation semble installée.",
    "Rappeler que les proches peuvent eux aussi demander conseil.",
    "En présence d'enfants, rappeler que leur protection est prioritaire.",
    "En cas de violence grave, rappeler les dispositifs d'urgence adaptés.",
  ],

  emergency: [
    "Violence physique en cours.",
    "Menace de mort ou arme.",
    "Violence sexuelle.",
    "Séquestration ou impossibilité de quitter les lieux.",
    "Enfant ou personne vulnérable exposé à un danger immédiat.",
    "Escalade rapide des violences ou menaces graves.",
  ],

  misconceptions: [
    "Penser que seules les violences physiques comptent.",
    "Croire qu'une victime peut partir facilement.",
    "Minimiser les violences psychologiques.",
    "Penser que la consommation explique à elle seule les violences.",
    "Croire que le silence protège durablement.",
    "Confondre conflit et violence.",
  ],

  keyQuestions: [
    "La personne se sent-elle en sécurité aujourd'hui ?",
    "Existe-t-il des violences physiques, psychologiques, sexuelles, économiques ou numériques ?",
    "Y a-t-il des menaces ou une emprise ?",
    "Des enfants ou des personnes vulnérables sont-ils concernés ?",
    "Le danger est-il immédiat ?",
    "Une aide extérieure est-elle déjà mobilisée ?",
    "Quelle est aujourd'hui la priorité pour protéger la personne ?",
  ],

  references: [
    {
      label: "3919",
    },
    {
      label: "Service Public",
    },
    {
      label: "Ministère de l'Intérieur",
    },
    {
      label: "France Victimes",
    },
  ],
}