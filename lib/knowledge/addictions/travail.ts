import type { KnowledgeModule } from "@/lib/ai/types"

export const travailKnowledge: KnowledgeModule = {
  id: "travail",
  category: "addiction",
  title: "Travail",
  version: "1.0.0",

  summary:
    "Module consacré aux situations de surinvestissement professionnel, difficulté à se déconnecter, hyperactivité de travail, recherche excessive de performance, épuisement et perte de contrôle autour du travail.",

  knowledge: [
    "Le travail peut devenir problématique lorsqu'il prend une place excessive et entraîne une perte de contrôle, une souffrance ou des conséquences importantes.",
    "Les situations peuvent concerner le surinvestissement, l'incapacité à se déconnecter, les horaires excessifs, le perfectionnisme envahissant ou le besoin permanent de performance.",
    "La question centrale n'est pas seulement le nombre d'heures travaillées, mais la difficulté à s'arrêter, la place prise par le travail et ses conséquences.",
    "Le surinvestissement professionnel peut être valorisé socialement, ce qui rend parfois la souffrance plus difficile à reconnaître.",
    "La culpabilité au repos, la peur de décevoir, le besoin de contrôle ou la recherche de reconnaissance peuvent entretenir le comportement.",
    "L'épuisement, les troubles du sommeil, l'irritabilité, l'isolement et les tensions familiales peuvent signaler une situation installée.",
  ],

  detection: [
    "Difficulté à arrêter de travailler ou à se déconnecter.",
    "Travail le soir, le week-end ou pendant les temps de repos de manière répétée.",
    "Culpabilité, agitation ou anxiété lorsqu'il n'y a pas de travail.",
    "Pensées professionnelles envahissantes même hors temps de travail.",
    "Horaires excessifs, fatigue persistante ou récupération insuffisante.",
    "Perfectionnisme, besoin de contrôle ou impossibilité de déléguer.",
    "Tensions familiales, isolement social ou abandon d'activités personnelles.",
    "Troubles du sommeil, irritabilité, douleurs, anxiété ou signes d'épuisement.",
    "Impression de ne jamais en faire assez malgré les efforts fournis.",
  ],

  reasoning: [
    "Ne jamais conclure à une addiction au travail uniquement à partir d'un récit.",
    "Distinguer engagement professionnel, période intense, contrainte organisationnelle, surinvestissement possible et épuisement.",
    "Repérer la place réelle du travail dans la vie quotidienne : temps, pensées, repos, famille, santé et relations.",
    "Identifier si le travail sert à éviter une émotion, une solitude, une peur de l'échec, un vide ou une souffrance.",
    "Être attentif aux signes d'épuisement, de burn-out, de détresse psychique ou de mise en danger.",
    "Tenir compte du contexte : salarié, indépendant, dirigeant, aidant, étudiant, professionnel en responsabilité ou personne précaire.",
    "Tenir compte de la personne qui parle : personne concernée, conjoint, proche, collègue, manager ou professionnel.",
  ],

  responseGuidance: [
    "Adopter un ton calme, respectueux et non culpabilisant.",
    "Éviter de présenter la situation comme un simple problème d'organisation ou de volonté.",
    "Aider à clarifier les faits : horaires, repos, sommeil, santé, relations, limites, responsabilités et conséquences.",
    "Reconnaître que le travail peut être important sans minimiser la souffrance ou l'épuisement.",
    "Proposer une première étape réaliste : identifier une limite concrète, un temps de récupération ou une personne ressource.",
    "Pour un proche, encourager une parole centrée sur les signes observables et l'inquiétude plutôt que sur le reproche.",
    "En cas d'épuisement installé, encourager un avis médical ou professionnel adapté.",
  ],

  orientation: [
    "Inviter à consulter un médecin traitant, un psychologue, un professionnel de santé au travail ou une personne ressource adaptée.",
    "En cas de signes d'épuisement, encourager à ne pas rester seul et à demander un avis médical.",
    "Pour les salariés, proposer de solliciter la médecine du travail, un représentant du personnel ou un service RH selon le contexte.",
    "Pour les indépendants ou dirigeants, encourager un appui extérieur pour poser des limites et réduire l'isolement.",
    "En cas de souffrance psychique importante, encourager un accompagnement médical ou psychologique.",
  ],

  emergency: [
    "Idées suicidaires, propos de désespoir ou menace de passage à l'acte liés au travail.",
    "Épuisement sévère, malaise, crise d'angoisse intense ou impossibilité de fonctionner.",
    "Privation importante de sommeil avec confusion, comportement incohérent ou mise en danger.",
    "Violence au travail, harcèlement, menace ou situation de danger immédiat.",
    "Risque médical aigu : douleur thoracique, malaise, difficulté respiratoire ou symptôme inquiétant.",
  ],

  misconceptions: [
    "Penser que travailler beaucoup est toujours un signe de réussite.",
    "Croire que l'épuisement se règle uniquement avec de la motivation.",
    "Réduire la situation à un problème d'organisation personnelle.",
    "Penser que le repos est une faiblesse ou une perte de temps.",
    "Ignorer les conséquences sur la santé, le sommeil, la famille ou les relations.",
    "Valoriser la souffrance comme preuve d'engagement.",
    "Croire qu'une personne très performante ne peut pas être en détresse.",
  ],

  keyQuestions: [
    "Combien de place le travail prend-il réellement dans la journée et la semaine ?",
    "La personne arrive-t-elle à se déconnecter lorsqu'elle l'avait prévu ?",
    "Que se passe-t-il lorsqu'elle ne travaille pas ?",
    "Y a-t-il des conséquences sur le sommeil, la santé, la famille, les relations ou les activités personnelles ?",
    "Le travail sert-il à éviter une émotion, une peur, une solitude ou un sentiment d'échec ?",
    "Existe-t-il des signes d'épuisement, d'anxiété ou de détresse psychique ?",
    "La situation est-elle liée à une contrainte professionnelle réelle ou à une impossibilité personnelle de ralentir ?",
    "Existe-t-il un risque immédiat : idées noires, malaise, harcèlement, violence ou épuisement sévère ?",
  ],

  references: [
    {
      label: "INRS",
    },
    {
      label: "Assurance Maladie",
    },
    {
      label: "Santé publique France",
    },
    {
      label: "Haute Autorité de Santé",
    },
  ],
}