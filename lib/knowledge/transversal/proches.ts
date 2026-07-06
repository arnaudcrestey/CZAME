import type { KnowledgeModule } from "@/lib/ai/types"

export const prochesKnowledge: KnowledgeModule = {
  id: "proches",
  category: "transversal",
  title: "Proches",
  version: "1.0.0",

  summary:
    "Module transversal consacré aux proches confrontés à une situation préoccupante, à leur place dans l'accompagnement, à leurs limites et aux manières de soutenir sans s'épuiser ni aggraver la situation.",

  knowledge: [
    "Les proches sont souvent parmi les premiers à observer des changements de comportement ou une perte de contrôle.",
    "Ils peuvent ressentir de l'inquiétude, de la colère, de la culpabilité, de l'impuissance ou de l'épuisement.",
    "Vouloir aider ne signifie pas pouvoir tout résoudre seul.",
    "Les tentatives répétées de contrôle, de surveillance ou de confrontation peuvent parfois aggraver les tensions.",
    "Les proches ont eux aussi besoin d'être soutenus et accompagnés lorsque la situation devient lourde.",
    "Protéger une relation ne signifie pas accepter toutes les situations sans limite.",
  ],

  detection: [
    "Le récit est formulé par un conjoint, un parent, un enfant, un ami, un collègue ou un autre proche.",
    "Expression d'une inquiétude persistante.",
    "Sentiment d'impuissance ou d'épuisement.",
    "Conflits répétés autour du comportement préoccupant.",
    "Surveillance, contrôle ou tentatives répétées de convaincre.",
    "Isolement progressif du proche aidant.",
    "Impact sur la santé, le sommeil, la vie familiale ou professionnelle du proche.",
  ],

  reasoning: [
    "Identifier clairement que la personne qui parle est un proche et non la personne directement concernée.",
    "Distinguer soutien, protection, contrôle et responsabilité.",
    "Reconnaître les émotions du proche sans les minimiser.",
    "Repérer si le proche se met lui-même en danger ou s'épuise dans la situation.",
    "Évaluer si la priorité est le dialogue, la protection ou une aide extérieure.",
    "Rappeler qu'un proche ne peut pas décider à la place d'une autre personne.",
    "Tenir compte de la présence éventuelle d'enfants ou de personnes vulnérables.",
  ],

  responseGuidance: [
    "Adopter un ton soutenant et non culpabilisant.",
    "Reconnaître les difficultés vécues par le proche.",
    "Encourager une communication fondée sur les faits observables.",
    "Inviter le proche à préserver aussi sa propre santé et ses limites.",
    "Éviter d'encourager la surveillance permanente ou les ultimatums précipités.",
    "Valoriser les démarches de recherche d'aide ou de conseil.",
    "Rappeler qu'il est possible d'aider sans porter seul toute la situation.",
  ],

  orientation: [
    "Proposer au proche de demander conseil à un professionnel lorsque la situation devient difficile à gérer.",
    "Encourager la recherche de soutien auprès de structures spécialisées ou d'associations.",
    "En présence d'enfants, rappeler l'importance de leur protection.",
    "En cas d'épuisement du proche, encourager également une prise en charge de ses propres besoins.",
    "Lorsque la sécurité est menacée, rappeler que la protection reste prioritaire.",
  ],

  emergency: [
    "Violence physique, psychologique ou sexuelle envers un proche.",
    "Enfant ou personne vulnérable exposé à un danger immédiat.",
    "Menaces, intimidation ou mise en danger grave.",
    "Idées suicidaires ou comportement auto-agressif de la personne concernée ou du proche.",
    "Situation où le proche n'est plus en capacité d'assurer sa propre sécurité.",
  ],

  misconceptions: [
    "Penser qu'un proche peut sauver seul une personne.",
    "Croire que contrôler ou surveiller règle durablement la situation.",
    "Se sentir responsable de tous les comportements de l'autre.",
    "Penser qu'il faut tout accepter pour préserver la relation.",
    "Croire qu'un proche ne doit jamais demander de l'aide.",
    "S'oublier totalement au profit de la personne concernée.",
    "Confondre soutien et sacrifice permanent.",
  ],

  keyQuestions: [
    "Qui est la personne qui parle ?",
    "Quel lien a-t-elle avec la personne concernée ?",
    "Depuis quand la situation dure-t-elle ?",
    "Quelles conséquences cette situation a-t-elle sur le proche ?",
    "Le proche se sent-il en sécurité ?",
    "Y a-t-il des enfants ou des personnes vulnérables concernés ?",
    "Quelles aides ont déjà été recherchées ?",
    "Quelle serait aujourd'hui la prochaine étape la plus réaliste pour le proche ?",
  ],

  references: [
    {
      label: "Drogues Info Service",
    },
    {
      label: "Joueurs Info Service",
    },
    {
      label: "Santé publique France",
    },
    {
      label: "Haute Autorité de Santé",
    },
  ],
}