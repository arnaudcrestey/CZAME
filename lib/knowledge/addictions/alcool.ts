import type { KnowledgeModule } from "@/lib/ai/types"

export const alcoolKnowledge: KnowledgeModule = {
  id: "alcool",
  category: "addiction",
  title: "Alcool",
  version: "1.0.0",

  summary:
    "Module consacré aux usages d'alcool, aux situations de perte de contrôle, aux proches concernés, aux risques associés et aux orientations prudentes.",

  knowledge: [
    "L'alcool est une substance psychoactive dont l'usage peut être occasionnel, régulier, problématique ou associé à une dépendance.",
    "La fréquence seule ne suffit pas à comprendre la situation : il faut aussi considérer la perte de contrôle, les conséquences, la souffrance exprimée et le contexte.",
    "L'arrêt brutal de l'alcool peut être dangereux lorsqu'il existe une dépendance physique importante."
  ],

  detection: [
    "Promesses répétées d'arrêter ou de réduire suivies de reprises.",
    "Consommation cachée ou minimisée.",
    "Conflits répétés autour de l'alcool.",
    "Conséquences sur le couple, la famille, le travail, la santé ou la sécurité.",
    "Besoin de boire pour dormir, se calmer ou affronter une situation."
  ],

  reasoning: [
    "Ne jamais conclure à une addiction à partir d'un seul récit.",
    "Ne jamais employer le terme alcoolique pour qualifier la personne.",
    "Distinguer la personne, sa consommation et les conséquences observées.",
    "Si le récit vient d'un proche, reconnaître aussi son épuisement, sa peur ou sa confusion.",
    "Si le récit évoque une perte de contrôle ou des conséquences répétées, augmenter le niveau de vigilance."
  ],

  responseGuidance: [
    "Employer un ton prudent, humain et non jugeant.",
    "Utiliser des formulations comme : votre récit laisse apparaître, certains éléments méritent attention, cela peut être utile d'en parler.",
    "Éviter les accusations directes.",
    "Proposer des phrases concrètes pour ouvrir une discussion dans un moment calme.",
    "Ne jamais promettre que la conversation suffira à changer la situation."
  ],

  orientation: [
    "Orienter vers un médecin traitant, un addictologue ou une structure spécialisée si la consommation semble difficile à contrôler.",
    "Encourager un proche à chercher du soutien pour lui-même s'il se sent épuisé ou isolé.",
    "Recommander un avis médical avant tout arrêt brutal en cas de consommation importante ou quotidienne."
  ],

  emergency: [
    "Risque suicidaire exprimé.",
    "Violence ou menace immédiate.",
    "Enfant exposé à un danger.",
    "Conduite en état d'alcoolisation.",
    "Malaise, confusion, perte de connaissance ou convulsions.",
    "Signes possibles de sevrage sévère : tremblements importants, hallucinations, agitation, confusion."
  ],

  misconceptions: [
    "Boire seulement le week-end exclut tout problème.",
    "Il faut avoir tout perdu pour avoir besoin d'aide.",
    "La volonté suffit toujours à arrêter.",
    "Le proche peut contrôler la consommation à la place de la personne."
  ],

  keyQuestions: [
    "Depuis quand cette situation existe-t-elle ?",
    "La personne arrive-t-elle à réduire lorsqu'elle le souhaite ?",
    "Quelles conséquences sont déjà visibles ?",
    "Le sujet crée-t-il de la peur, de la tension ou de l'épuisement ?",
    "Existe-t-il un risque immédiat pour la personne ou son entourage ?"
  ],

  references: [
    {
      label: "MILDECA — Conduites addictives"
    },
    {
      label: "HAS — Repérage précoce et intervention brève alcool, cannabis, tabac"
    },
    {
      label: "OFDT — Données et tendances sur les usages"
    }
  ]
}