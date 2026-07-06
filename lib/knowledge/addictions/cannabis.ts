import type { KnowledgeModule } from "@/lib/ai/types"

export const cannabisKnowledge: KnowledgeModule = {
  id: "cannabis",
  category: "addiction",
  title: "Cannabis",
  version: "1.0.0",

  summary:
    "Module consacré aux usages de cannabis, aux pertes de contrôle possibles, aux effets sur la vie quotidienne, aux proches concernés et aux orientations prudentes.",

  knowledge: [
    "Le cannabis est une substance psychoactive dont les effets varient selon les personnes, les quantités, la fréquence, le contexte et le mode de consommation.",
    "Un usage peut devenir problématique lorsqu'il prend une place importante dans la vie quotidienne, lorsqu'il devient difficile de réduire ou lorsqu'il entraîne des conséquences personnelles, familiales, scolaires, professionnelles ou sociales.",
    "La fréquence seule ne suffit pas à évaluer la situation : il faut aussi observer la perte de contrôle, la souffrance, les conséquences et le contexte émotionnel.",
    "Certaines personnes utilisent le cannabis pour se détendre, dormir, gérer l'anxiété, l'ennui, la colère ou des difficultés personnelles.",
    "Chez certaines personnes, le cannabis peut majorer l'anxiété, l'isolement, la perte de motivation, les troubles du sommeil ou certaines fragilités psychiques.",
  ],

  detection: [
    "Consommation quotidienne ou très régulière.",
    "Difficulté à réduire malgré l'envie d'arrêter ou de diminuer.",
    "Usage pour dormir, se calmer, oublier ou tenir émotionnellement.",
    "Consommation cachée, minimisée ou source de tensions avec l'entourage.",
    "Baisse de motivation, retrait social, négligence des responsabilités ou conflits répétés.",
    "Augmentation progressive des quantités ou besoin de consommer plus souvent.",
    "Irritabilité, agitation, troubles du sommeil ou mal-être lors des tentatives d'arrêt.",
  ],

  reasoning: [
    "Ne jamais conclure à une dépendance uniquement à partir d'un récit court.",
    "Distinguer usage occasionnel, usage régulier, usage problématique et perte de contrôle possible.",
    "Évaluer la place prise par le cannabis dans la vie de la personne plutôt que juger la substance seule.",
    "Repérer si la consommation semble répondre à une souffrance, une anxiété, un isolement ou une difficulté à faire face.",
    "Prendre en compte la position de la personne qui parle : personne concernée, proche, parent, professionnel ou tiers inquiet.",
    "Rester prudent si le récit évoque un mineur, des troubles psychiques, une violence, une conduite sous effet ou une situation de danger.",
  ],

  responseGuidance: [
    "Adopter un ton calme, non moralisateur et non accusateur.",
    "Éviter les formulations comme 'il est drogué', 'il faut arrêter immédiatement' ou 'c'est forcément grave'.",
    "Aider à observer les faits concrets : fréquence, moments de consommation, conséquences, tensions, tentatives de réduction.",
    "Favoriser une première étape réaliste plutôt qu'une injonction d'arrêt.",
    "Pour un proche, conseiller d'ouvrir le dialogue sans confrontation frontale.",
    "Valoriser la possibilité de demander un avis professionnel si la situation se répète, s'aggrave ou devient difficile à gérer seul.",
  ],

  orientation: [
    "Inviter à en parler à un médecin généraliste, un professionnel en addictologie, une maison des adolescents ou une structure spécialisée selon l'âge et la situation.",
    "Pour les jeunes, orienter prudemment vers un adulte de confiance, un professionnel de santé ou une consultation jeunes consommateurs.",
    "Pour les proches, proposer de chercher un appui pour comprendre comment parler sans aggraver la tension.",
    "En cas de souffrance psychique importante, encourager une aide professionnelle adaptée.",
  ],

  emergency: [
    "Idées suicidaires, propos inquiétants ou mise en danger immédiate.",
    "Violence, menace ou situation où quelqu'un n'est pas en sécurité.",
    "Troubles psychiques aigus, confusion importante, crise d'angoisse intense ou comportement dangereux.",
    "Conduite sous effet ou situation exposant la personne ou autrui à un danger immédiat.",
    "Mineur en danger ou absence de protection adaptée.",
  ],

  misconceptions: [
    "Penser qu'un usage régulier signifie automatiquement dépendance.",
    "Penser qu'il suffit de faire peur à la personne pour qu'elle arrête.",
    "Minimiser toute consommation parce que le cannabis serait forcément banal.",
    "Croire qu'une seule conversation suffit à régler une situation installée.",
    "Réduire la personne à sa consommation.",
  ],

  keyQuestions: [
    "À quelle fréquence la personne consomme-t-elle ?",
    "Dans quels moments ou émotions la consommation apparaît-elle le plus ?",
    "La personne a-t-elle déjà essayé de réduire ou d'arrêter ?",
    "Y a-t-il des conséquences visibles sur le sommeil, les relations, le travail, les études ou la motivation ?",
    "La consommation est-elle cachée, conflictuelle ou source d'inquiétude pour l'entourage ?",
    "Existe-t-il un risque immédiat pour la personne ou pour quelqu'un d'autre ?",
  ],

  references: [
  {
    label: "MILDECA",
  },
  {
    label: "Drogues Info Service",
  },
  {
    label: "Consultations Jeunes Consommateurs",
  },
  {
    label: "Haute Autorité de Santé",
  },
],
}