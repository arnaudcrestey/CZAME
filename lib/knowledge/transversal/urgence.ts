import type { KnowledgeModule } from "@/lib/ai/types"

export const urgenceKnowledge: KnowledgeModule = {
  id: "urgence",
  category: "transversal",
  title: "Urgence",
  version: "1.0.0",

  summary:
    "Module transversal consacré à l'identification des situations nécessitant une attention immédiate, une protection rapide ou une orientation urgente, quel que soit le comportement ou la conduite évoqués.",

  knowledge: [
    "Certaines situations nécessitent de prioriser immédiatement la sécurité avant toute réflexion sur le changement ou l'accompagnement.",
    "Une urgence peut être médicale, psychologique, psychiatrique, sociale ou liée à une mise en danger d'un tiers.",
    "Plusieurs signaux modérés peuvent, lorsqu'ils sont associés, constituer une situation urgente.",
    "Le rôle de C·ZAME est d'aider à reconnaître ces situations sans poser de diagnostic.",
    "En présence d'une urgence, la priorité est toujours la protection de la personne concernée et des éventuels tiers exposés.",
    "L'absence de certitude ne doit pas conduire à banaliser un risque potentiellement grave.",
  ],

  detection: [
    "Perte de connaissance, malaise ou détresse médicale.",
    "Respiration anormale, douleur thoracique ou convulsions.",
    "Surdosage suspecté ou consommation massive.",
    "Idées suicidaires, menace de passage à l'acte ou propos de désespoir.",
    "Violence en cours ou menace immédiate.",
    "Présence d'un enfant ou d'une personne vulnérable en danger.",
    "Confusion importante, désorientation ou comportement incohérent.",
    "Mise en danger immédiate de soi-même ou d'autrui.",
  ],

  reasoning: [
    "Rechercher systématiquement les indices de danger immédiat.",
    "Prioriser la sécurité avant toute analyse approfondie.",
    "Ne jamais minimiser plusieurs signaux inquiétants présents simultanément.",
    "Ne jamais attendre un diagnostic certain pour recommander une protection lorsque le risque paraît élevé.",
    "Adapter les recommandations au niveau de gravité décrit dans le récit.",
    "Distinguer une inquiétude importante d'une urgence nécessitant une action immédiate.",
    "Prendre en compte la présence éventuelle d'enfants ou de personnes vulnérables.",
  ],

  responseGuidance: [
    "Adopter un ton calme, clair et direct.",
    "Prioriser les messages de sécurité.",
    "Éviter toute formulation pouvant retarder une prise en charge urgente.",
    "Inviter la personne à solliciter rapidement les secours ou un professionnel lorsque le récit décrit un danger immédiat.",
    "Ne jamais laisser penser qu'un échange avec C·ZAME suffit dans une situation urgente.",
    "Rappeler que protéger une personne reste prioritaire sur toute autre considération.",
  ],

  orientation: [
    "En cas de danger immédiat, recommander de contacter les services d'urgence adaptés.",
    "Encourager à ne pas rester seul face à une situation grave.",
    "Inviter un proche présent à rechercher une aide immédiate si nécessaire.",
    "En présence d'un enfant ou d'une personne vulnérable, rappeler que leur protection est prioritaire.",
    "Une fois l'urgence traitée, encourager un accompagnement adapté pour la suite.",
  ],

  emergency: [
    "Toute situation décrivant un danger immédiat doit être considérée comme prioritaire.",
    "Toute perte de connaissance, détresse respiratoire, surdosage, violence grave ou menace suicidaire nécessite une réponse urgente.",
    "Toute situation mettant directement en danger un enfant ou une personne vulnérable est prioritaire.",
    "Toute impossibilité de garantir la sécurité immédiate doit conduire à recommander une aide urgente.",
  ],

  misconceptions: [
    "Penser qu'il faut être certain avant d'agir.",
    "Croire qu'une personne exprimant des idées suicidaires cherche uniquement à attirer l'attention.",
    "Attendre que la situation s'aggrave avant de demander de l'aide.",
    "Penser qu'un proche doit gérer seul une urgence.",
    "Confondre urgence et panique.",
    "Minimiser un risque parce que la personne paraît calme.",
  ],

  keyQuestions: [
    "Existe-t-il un danger immédiat ?",
    "La personne est-elle consciente et en sécurité ?",
    "Y a-t-il un risque pour un enfant ou une personne vulnérable ?",
    "La personne est-elle seule ?",
    "Existe-t-il une menace de passage à l'acte ?",
    "Une aide immédiate est-elle déjà présente ?",
    "Le récit évoque-t-il une urgence médicale, psychiatrique ou une violence en cours ?",
    "Quelle est la priorité absolue pour protéger la personne ?",
  ],

  references: [
    {
      label: "SAMU - Centre 15",
    },
    {
      label: "112",
    },
    {
      label: "3114",
    },
    {
      label: "Service Public",
    },
  ],
}