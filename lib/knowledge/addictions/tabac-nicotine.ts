import type { KnowledgeModule } from "@/lib/ai/types"

export const tabacNicotineKnowledge: KnowledgeModule = {
  id: "tabac-nicotine",
  category: "addiction",
  title: "Tabac et nicotine",
  version: "1.0.0",

  summary:
    "Module consacré aux usages problématiques de tabac, nicotine, cigarette, cigarette électronique, puffs, chicha, snus, sachets de nicotine et situations de sevrage ou de dépendance nicotinique.",

  knowledge: [
    "La nicotine est une substance psychoactive pouvant entraîner une dépendance importante, avec une difficulté à réduire ou arrêter malgré l'envie de le faire.",
    "Les usages concernés peuvent inclure cigarettes, tabac à rouler, cigarette électronique, puffs, chicha, snus, sachets de nicotine ou autres produits nicotinés.",
    "La dépendance à la nicotine peut être physique, comportementale, émotionnelle et sociale.",
    "La fréquence, les automatismes, les moments de consommation et la difficulté à s'en passer sont des éléments importants à repérer.",
    "L'arrêt ou la réduction peut provoquer irritabilité, anxiété, troubles du sommeil, envies fortes, difficultés de concentration ou reprise des consommations.",
    "La cigarette électronique ou les substituts nicotiniques peuvent être évoqués dans une démarche de réduction, mais peuvent aussi devenir difficiles à contrôler selon les usages.",
  ],

  detection: [
    "Consommation dès le réveil ou difficulté à attendre avant la première prise.",
    "Envies fortes, automatismes ou impression de ne pas pouvoir fonctionner sans nicotine.",
    "Augmentation de la consommation ou difficulté à réduire malgré des tentatives.",
    "Usage pour gérer le stress, l'ennui, l'anxiété, la colère, la fatigue ou une émotion difficile.",
    "Consommation cachée, minimisée ou reprise après une période d'arrêt.",
    "Utilisation fréquente de cigarette électronique, puff ou nicotine en continu au cours de la journée.",
    "Irritabilité, tension, nervosité ou troubles de concentration en cas de manque.",
    "Inquiétude d'un proche concernant la santé, la fréquence ou l'exposition d'un enfant à la fumée.",
  ],

  reasoning: [
    "Ne jamais conclure à une dépendance uniquement à partir d'un récit.",
    "Distinguer usage occasionnel, usage régulier, dépendance possible, tentative de réduction et situation de sevrage.",
    "Repérer la place de la nicotine dans la journée : réveil, pauses, stress, repas, soirée, solitude ou travail.",
    "Tenir compte des tentatives précédentes d'arrêt ou de réduction, sans culpabiliser les reprises.",
    "Évaluer si la consommation est liée à une souffrance, un stress chronique, une anxiété ou un contexte social.",
    "Être prudent lorsque le récit concerne une grossesse, une maladie respiratoire, une maladie cardiovasculaire ou l'exposition d'enfants.",
    "Tenir compte de la personne qui parle : personne concernée, proche, parent, professionnel ou tiers inquiet.",
  ],

  responseGuidance: [
    "Adopter un ton calme, réaliste et non culpabilisant.",
    "Éviter de présenter l'arrêt comme une simple question de volonté.",
    "Aider à observer les habitudes : moments, déclencheurs, quantité, émotions, tentatives, reprises et effets ressentis.",
    "Valoriser toute tentative de réduction ou d'arrêt comme une information utile, même si elle n'a pas duré.",
    "Proposer une première étape simple : faire le point sur les moments les plus automatiques ou demander conseil à un professionnel.",
    "Pour un proche, encourager une parole centrée sur l'inquiétude et les faits observables plutôt que sur le reproche.",
    "Rappeler qu'un accompagnement peut augmenter les chances de réussite en cas d'arrêt ou de réduction.",
  ],

  orientation: [
    "Inviter à consulter un médecin, un pharmacien ou un professionnel formé au sevrage tabagique.",
    "Proposer Tabac Info Service comme ressource d'information, d'accompagnement et d'orientation.",
    "En cas de grossesse, maladie respiratoire, maladie cardiovasculaire ou inquiétude médicale, encourager un avis médical adapté.",
    "En cas de souffrance psychique associée, proposer un appui médical ou psychologique complémentaire.",
    "Pour les proches, proposer de chercher conseil auprès d'un professionnel plutôt que d'entrer dans un rapport de pression ou de conflit.",
  ],

  emergency: [
    "Douleur thoracique, malaise, essoufflement important ou symptôme cardiovasculaire inquiétant.",
    "Difficulté respiratoire importante, crise d'asthme sévère ou aggravation brutale de l'état respiratoire.",
    "Ingestion accidentelle de nicotine, de liquide de cigarette électronique ou de sachets nicotinés, notamment par un enfant.",
    "Surdosage nicotinique possible : nausées importantes, vomissements, vertiges, palpitations, confusion ou malaise.",
    "Idées suicidaires, propos de mise en danger ou souffrance psychique aiguë associée à l'arrêt ou à la consommation.",
  ],

  misconceptions: [
    "Penser qu'il suffit d'avoir de la volonté pour arrêter.",
    "Croire qu'une reprise annule tous les efforts précédents.",
    "Penser que la cigarette électronique ou les puffs sont toujours sans risque.",
    "Minimiser la dépendance parce que la nicotine est légale.",
    "Confondre réduction, substitution, arrêt progressif et échec.",
    "Culpabiliser une personne qui n'arrive pas à arrêter seule.",
    "Penser qu'un proche peut forcer durablement l'arrêt par la pression ou la honte.",
  ],

  keyQuestions: [
    "Quel produit est concerné : cigarette, tabac, vape, puff, chicha, snus ou autre produit nicotiné ?",
    "À quels moments la consommation est-elle la plus automatique ?",
    "La personne consomme-t-elle dès le réveil ?",
    "A-t-elle déjà essayé de réduire ou d'arrêter ?",
    "Que se passe-t-il lorsqu'elle essaie de ne pas consommer ?",
    "La nicotine sert-elle à gérer le stress, l'anxiété, l'ennui, la colère ou la fatigue ?",
    "Y a-t-il une grossesse, une maladie respiratoire, une maladie cardiovasculaire ou un enfant exposé ?",
    "Existe-t-il un signe médical inquiétant ou un risque immédiat ?",
  ],

  references: [
    {
      label: "Tabac Info Service",
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