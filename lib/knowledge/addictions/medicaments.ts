import type { KnowledgeModule } from "@/lib/ai/types"

export const medicamentsKnowledge: KnowledgeModule = {
  id: "medicaments",
  category: "addiction",
  title: "Médicaments",
  version: "1.0.0",

  summary:
    "Module consacré aux usages problématiques de médicaments, notamment anxiolytiques, somnifères, antalgiques, traitements détournés ou consommations devenues difficiles à contrôler.",

  knowledge: [
    "Certains médicaments peuvent entraîner une perte de contrôle lorsqu'ils sont utilisés en dehors du cadre prévu, à des doses croissantes ou sur une durée prolongée.",
    "Les situations concernent notamment les anxiolytiques, somnifères, antalgiques opioïdes, traitements stimulants ou médicaments pris pour gérer une souffrance psychique.",
    "Un usage problématique peut exister même lorsque le médicament a été prescrit au départ.",
    "La question centrale n'est pas seulement la prescription, mais la place prise par le médicament, la difficulté à réduire et les conséquences sur la vie quotidienne.",
    "L'arrêt brutal de certains médicaments peut être risqué et doit être abordé avec prudence.",
  ],

  detection: [
    "Augmentation progressive des doses ou prises plus fréquentes que prévu.",
    "Difficulté à réduire ou arrêter malgré l'envie de le faire.",
    "Prises cachées, anticipées ou justifiées par la peur de ne pas tenir.",
    "Utilisation pour dormir, se calmer, oublier, supporter une douleur ou une situation émotionnelle difficile.",
    "Multiplication des ordonnances, demandes répétées ou inquiétude autour du renouvellement.",
    "Somnolence, confusion, ralentissement, irritabilité ou changements de comportement.",
    "Association avec alcool, cannabis ou autres substances.",
  ],

  reasoning: [
    "Ne jamais conclure à une dépendance uniquement à partir d'un récit.",
    "Distinguer traitement prescrit, mésusage, automédication, perte de contrôle possible et situation à risque.",
    "Repérer si le médicament sert à gérer une souffrance, une anxiété, une douleur, un traumatisme ou un épuisement.",
    "Être particulièrement prudent avec les anxiolytiques, somnifères et antalgiques opioïdes.",
    "Ne jamais conseiller un arrêt brutal lorsque le récit évoque un usage régulier ou ancien.",
    "Tenir compte de la personne qui parle : personne concernée, proche, parent, professionnel ou tiers inquiet.",
  ],

  responseGuidance: [
    "Adopter un ton prudent, calme et non culpabilisant.",
    "Éviter de dire que la personne abuse forcément ou qu'elle doit arrêter seule.",
    "Aider à observer les faits : doses, fréquence, durée, contexte, effets, tentatives de réduction, conséquences.",
    "Encourager une discussion avec un médecin ou un pharmacien lorsque la situation semble installée.",
    "Pour un proche, proposer une approche centrée sur l'inquiétude observable plutôt que sur l'accusation.",
    "Rappeler que la réduction ou l'arrêt de certains médicaments doit être accompagné.",
  ],

  orientation: [
    "Inviter à contacter le médecin prescripteur, le médecin traitant ou un pharmacien pour faire le point.",
    "En cas de perte de contrôle, proposer une orientation vers un professionnel en addictologie ou une structure spécialisée.",
    "En cas de souffrance psychique importante, encourager un appui médical ou psychologique adapté.",
    "Pour les proches, proposer de chercher conseil auprès d'un professionnel plutôt que gérer seul une situation complexe.",
  ],

  emergency: [
    "Somnolence importante, confusion, malaise, respiration ralentie ou perte de connaissance.",
    "Association avec alcool ou autres substances entraînant un danger immédiat.",
    "Surdosage suspecté ou prise massive.",
    "Idées suicidaires, propos de mise en danger ou ingestion volontaire inquiétante.",
    "Sevrage brutal avec symptômes importants, agitation, malaise ou confusion.",
  ],

  misconceptions: [
    "Penser qu'un médicament prescrit ne peut pas poser problème.",
    "Penser qu'il suffit d'arrêter du jour au lendemain.",
    "Réduire la situation à un manque de volonté.",
    "Croire que la personne ment forcément si elle minimise les prises.",
    "Ignorer le rôle possible de la douleur, de l'anxiété, du sommeil ou d'une souffrance ancienne.",
  ],

  keyQuestions: [
    "Le médicament est-il prescrit, détourné ou pris en automédication ?",
    "Depuis combien de temps la personne en prend-elle ?",
    "Les doses ont-elles augmenté ?",
    "La personne a-t-elle déjà essayé de réduire ou d'arrêter ?",
    "Que se passe-t-il lorsqu'elle n'en prend pas ?",
    "Y a-t-il une association avec alcool ou autres substances ?",
    "Existe-t-il un risque immédiat de surdosage, de malaise ou de mise en danger ?",
  ],

  references: [
    {
      label: "Assurance Maladie",
    },
    {
      label: "Drogues Info Service",
    },
    {
      label: "ANSM",
    },
    {
      label: "Haute Autorité de Santé",
    },
  ],
}