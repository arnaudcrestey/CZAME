import type { KnowledgeModule } from "@/lib/ai/types"

export const sportKnowledge: KnowledgeModule = {
  id: "sport",
  category: "addiction",
  title: "Sport",
  version: "1.0.0",

  summary:
    "Module consacré aux situations de pratique sportive excessive, entraînement compulsif, difficulté à se reposer, recherche de performance, contrôle du corps et perte de contrôle autour du sport.",

  knowledge: [
    "Le sport peut devenir problématique lorsqu'il prend une place excessive et entraîne une perte de contrôle, une souffrance ou des conséquences importantes.",
    "Les situations peuvent concerner l'entraînement compulsif, la recherche permanente de performance, l'impossibilité de se reposer ou la pratique malgré la douleur.",
    "La question centrale n'est pas seulement la quantité de sport, mais la difficulté à s'arrêter, les conséquences et la place prise dans la vie quotidienne.",
    "La pratique excessive peut être liée à l'anxiété, au contrôle du corps, à l'image de soi, à la culpabilité, au besoin de performance ou à une souffrance psychique.",
    "Le sport est souvent socialement valorisé, ce qui peut rendre plus difficile la reconnaissance d'une situation problématique.",
    "Les blessures, l'épuisement, l'isolement, les troubles alimentaires ou la détresse psychique doivent être repérés avec prudence.",
  ],

  detection: [
    "Difficulté à réduire ou interrompre l'entraînement malgré l'envie ou le besoin de repos.",
    "Pratique sportive malgré blessure, douleur, fatigue importante ou avis médical contraire.",
    "Culpabilité, anxiété ou irritabilité lorsqu'une séance est annulée.",
    "Augmentation progressive de la durée, de l'intensité ou de la fréquence des séances.",
    "Priorité donnée au sport au détriment du sommeil, des relations, du travail, des études ou de la récupération.",
    "Recherche permanente de performance, de contrôle du poids, du corps ou de l'apparence.",
    "Isolement, rigidité des routines ou impossibilité d'adapter la pratique.",
    "Association possible avec restriction alimentaire, vomissements, prise de produits, dopage ou compléments utilisés de façon risquée.",
  ],

  reasoning: [
    "Ne jamais conclure à une addiction au sport uniquement à partir d'un récit.",
    "Distinguer pratique régulière, engagement sportif intense, préparation encadrée, perte de contrôle possible et situation de mise en danger.",
    "Repérer la place réelle du sport : temps, intensité, récupération, blessures, sommeil, relations, travail et santé.",
    "Identifier si la pratique sert à gérer l'anxiété, la culpabilité, l'image corporelle, une souffrance ou un besoin de contrôle.",
    "Être attentif aux blessures répétées, à l'épuisement, aux troubles alimentaires, au dopage ou à la détresse psychique.",
    "Tenir compte du contexte : sportif amateur, compétiteur, professionnel, adolescent, personne en reprise d'activité ou personne vulnérable.",
    "Tenir compte de la personne qui parle : personne concernée, proche, parent, entraîneur, professionnel ou tiers inquiet.",
  ],

  responseGuidance: [
    "Adopter un ton respectueux, prudent et non culpabilisant.",
    "Éviter de diaboliser le sport ou de nier ses bénéfices.",
    "Aider à clarifier les faits : fréquence, intensité, douleurs, repos, sommeil, alimentation, émotions et conséquences.",
    "Distinguer discipline sportive et impossibilité de s'arrêter.",
    "Proposer une première étape réaliste : observer la place du repos, les douleurs, les obligations sacrifiées et les émotions lorsque la séance est impossible.",
    "Pour un proche, encourager une parole centrée sur les faits observables et l'inquiétude plutôt que sur la critique du sport.",
    "En cas de blessure, épuisement ou trouble alimentaire possible, encourager un avis médical ou professionnel adapté.",
  ],

  orientation: [
    "Inviter à consulter un médecin, un kinésithérapeute, un professionnel du sport ou un professionnel de santé lorsque la pratique provoque douleurs, blessures ou épuisement.",
    "En cas de souffrance psychique, d'anxiété importante ou de rapport difficile au corps, encourager un appui psychologique adapté.",
    "En cas de suspicion de trouble alimentaire, proposer une orientation médicale ou spécialisée.",
    "Pour les adolescents ou sportifs encadrés, proposer d'associer un adulte ressource, un médecin ou un encadrant de confiance.",
    "Pour les proches, proposer de chercher conseil plutôt que d'entrer dans une opposition frontale autour de la pratique sportive.",
  ],

  emergency: [
    "Douleur thoracique, malaise, difficulté respiratoire, perte de connaissance ou symptôme médical aigu pendant ou après l'effort.",
    "Blessure grave, douleur intense ou poursuite de l'effort malgré un risque évident.",
    "Épuisement sévère, déshydratation, confusion ou comportement incohérent.",
    "Idées suicidaires, propos de mise en danger ou détresse psychique aiguë.",
    "Restriction alimentaire sévère, vomissements répétés, malaise ou signes physiques inquiétants associés à la pratique sportive.",
    "Usage de produits dopants ou substances dangereuses avec symptômes inquiétants.",
  ],

  misconceptions: [
    "Penser que le sport ne peut pas poser problème parce qu'il est bon pour la santé.",
    "Confondre discipline sportive et perte de contrôle.",
    "Croire que la douleur est toujours normale ou nécessaire pour progresser.",
    "Valoriser l'épuisement comme preuve de motivation.",
    "Réduire la situation à une simple passion.",
    "Ignorer les liens possibles avec l'image corporelle, l'anxiété ou les troubles alimentaires.",
    "Penser qu'un proche doit simplement interdire le sport pour régler la situation.",
  ],

  keyQuestions: [
    "Quelle place le sport prend-il dans la journée ou la semaine ?",
    "La personne arrive-t-elle à se reposer lorsqu'elle en a besoin ?",
    "Continue-t-elle malgré la douleur, la blessure ou la fatigue ?",
    "Que se passe-t-il lorsqu'une séance est annulée ?",
    "Y a-t-il des conséquences sur le sommeil, le travail, les études, les relations ou la santé ?",
    "La pratique est-elle liée au contrôle du poids, du corps, de l'apparence ou de la performance ?",
    "Existe-t-il une restriction alimentaire, une prise de produits ou un comportement de compensation ?",
    "Existe-t-il un risque immédiat : malaise, douleur thoracique, blessure grave, épuisement, trouble alimentaire ou idées noires ?",
  ],

  references: [
    {
      label: "Assurance Maladie",
    },
    {
      label: "INSEP",
    },
    {
      label: "Santé publique France",
    },
    {
      label: "Haute Autorité de Santé",
    },
  ],
}