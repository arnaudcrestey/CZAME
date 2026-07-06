import type { KnowledgeModule } from "@/lib/ai/types"

export const motivationKnowledge: KnowledgeModule = {
  id: "motivation",
  category: "transversal",
  title: "Motivation au changement",
  version: "1.0.0",

  summary:
    "Module transversal consacré à la motivation au changement, à l'ambivalence, aux tentatives déjà réalisées, aux rechutes, aux freins et aux ressources permettant d'accompagner une évolution réaliste.",

  knowledge: [
    "La motivation évolue dans le temps et n'est jamais totalement présente ou totalement absente.",
    "Une personne peut vouloir changer tout en craignant les conséquences du changement.",
    "Les rechutes ou reprises ne signifient pas forcément un échec mais peuvent faire partie du processus de changement.",
    "Le changement est généralement plus durable lorsqu'il repose sur des motivations personnelles que sur la contrainte.",
    "Identifier les ressources déjà présentes est souvent plus utile que souligner uniquement les difficultés.",
    "Le rôle de C·ZAME est d'aider à clarifier la situation, pas de convaincre ou de faire pression.",
  ],

  detection: [
    "Expression d'une envie de changer ou de réduire.",
    "Hésitations, contradictions ou ambivalence dans le récit.",
    "Tentatives précédentes d'arrêt ou de réduction.",
    "Reprise après une période d'amélioration.",
    "Découragement, perte d'espoir ou impression de ne jamais y arriver.",
    "Pression de l'entourage ou changement réalisé uniquement pour faire plaisir.",
    "Présence de projets, d'objectifs ou de raisons personnelles de changer.",
  ],

  reasoning: [
    "Identifier si la personne souhaite changer, hésite ou refuse actuellement.",
    "Repérer les motivations personnelles déjà présentes.",
    "Identifier les freins : peur, honte, solitude, habitudes, entourage, souffrance ou bénéfices perçus du comportement.",
    "Valoriser les tentatives passées sans les présenter comme des échecs.",
    "Ne jamais imposer un changement ni culpabiliser une personne qui n'est pas prête.",
    "Distinguer motivation personnelle et pression extérieure.",
    "Privilégier une progression réaliste plutôt qu'un changement idéalisé.",
  ],

  responseGuidance: [
    "Adopter un ton encourageant sans être injonctif.",
    "Reconnaître les difficultés tout en mettant en évidence les ressources déjà présentes.",
    "Valoriser chaque étape, même modeste.",
    "Éviter les formulations culpabilisantes ou les objectifs irréalistes.",
    "Proposer une prochaine étape concrète et accessible.",
    "Rappeler qu'une hésitation est fréquente et ne signifie pas une absence de volonté.",
    "Encourager la réflexion plutôt que la pression.",
  ],

  orientation: [
    "Inviter la personne à identifier ce qui lui donnerait envie de changer pour elle-même.",
    "Proposer un accompagnement professionnel lorsque la situation est installée ou source de souffrance.",
    "Encourager les proches à soutenir sans contrôler.",
    "Mettre en avant les ressources déjà existantes avant de chercher de nouvelles solutions.",
    "En cas de détresse importante, encourager un appui médical ou psychologique adapté.",
  ],

  emergency: [
    "Perte totale d'espoir accompagnée d'idées suicidaires.",
    "Sentiment d'impasse avec risque de passage à l'acte.",
    "Refus d'aide dans un contexte de danger immédiat.",
    "Détresse psychique majeure empêchant toute capacité de protection.",
  ],

  misconceptions: [
    "Penser qu'il suffit de vouloir pour changer.",
    "Croire qu'une rechute efface tous les progrès réalisés.",
    "Confondre motivation fluctuante et absence de volonté.",
    "Penser que faire pression augmente durablement la motivation.",
    "Croire qu'il existe un moment parfait pour commencer à changer.",
    "Réduire le changement à une question de caractère.",
    "Penser que les petits progrès ne comptent pas.",
  ],

  keyQuestions: [
    "La personne souhaite-t-elle changer aujourd'hui ?",
    "Quelles sont ses principales motivations ?",
    "Quels sont les freins qui rendent le changement difficile ?",
    "A-t-elle déjà essayé de changer auparavant ?",
    "Qu'est-ce qui avait aidé, même un peu ?",
    "Qu'est-ce qui avait conduit à la reprise ?",
    "Existe-t-il des ressources personnelles, familiales ou professionnelles mobilisables ?",
    "Quelle pourrait être la prochaine étape la plus réaliste ?",
  ],

  references: [
    {
      label: "Haute Autorité de Santé",
    },
    {
      label: "Santé publique France",
    },
    {
      label: "Drogues Info Service",
    },
    {
      label: "Assurance Maladie",
    },
  ],
}