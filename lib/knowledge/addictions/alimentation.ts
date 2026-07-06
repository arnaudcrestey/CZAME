import type { KnowledgeModule } from "@/lib/ai/types"

export const alimentationKnowledge: KnowledgeModule = {
  id: "alimentation",
  category: "addiction",
  title: "Alimentation",
  version: "1.0.0",

  summary:
    "Module consacré aux situations de perte de contrôle alimentaire, compulsions, grignotage compulsif, hyperphagie, alimentation émotionnelle, restrictions répétées et rapport difficile au poids ou à l'image corporelle.",

  knowledge: [
    "L'alimentation peut devenir problématique lorsqu'elle entraîne une perte de contrôle, une souffrance ou des conséquences importantes.",
    "Les situations peuvent concerner les compulsions alimentaires, l'hyperphagie, le grignotage compulsif, les restrictions répétées ou l'alimentation émotionnelle.",
    "La question centrale n'est pas seulement la quantité mangée, mais la difficulté à contrôler, le contexte émotionnel et les conséquences.",
    "Les comportements alimentaires peuvent être liés au stress, à l'anxiété, à la solitude, à la tristesse, à l'ennui, à la honte ou à un besoin d'apaisement.",
    "La restriction excessive peut parfois renforcer les épisodes de perte de contrôle alimentaire.",
    "Le rapport au poids, à l'image corporelle, à la culpabilité et à l'estime de soi peut jouer un rôle important.",
  ],

  detection: [
    "Épisodes répétés où la personne mange plus que prévu avec un sentiment de perte de contrôle.",
    "Grignotage fréquent ou compulsif, parfois sans faim réelle.",
    "Alimentation utilisée pour calmer une émotion, une tension, un vide ou une souffrance.",
    "Culpabilité, honte, dégoût de soi ou tristesse après avoir mangé.",
    "Alternance entre restrictions strictes et épisodes de perte de contrôle.",
    "Dissimulation des prises alimentaires ou consommation en cachette.",
    "Préoccupation importante autour du poids, du corps, des calories ou du contrôle alimentaire.",
    "Conséquences sur la santé, le sommeil, l'énergie, les relations ou l'estime de soi.",
    "Vomissements provoqués, usage de laxatifs, jeûnes stricts ou comportements compensatoires évoqués dans le récit.",
  ],

  reasoning: [
    "Ne jamais conclure à un trouble alimentaire ou à une addiction uniquement à partir d'un récit.",
    "Distinguer alimentation émotionnelle ponctuelle, habitudes installées, perte de contrôle possible, souffrance et situation de danger.",
    "Repérer le cycle émotionnel : tension avant, soulagement pendant, culpabilité ou honte après.",
    "Évaluer les conséquences concrètes : santé, énergie, sommeil, isolement, estime de soi, relations et vie quotidienne.",
    "Être particulièrement vigilant lorsque le récit évoque vomissements, laxatifs, restriction sévère, perte de poids rapide, malaise ou idées noires.",
    "Identifier si les comportements alimentaires servent à gérer une anxiété, une solitude, un traumatisme, un vide ou une détresse psychique.",
    "Tenir compte de la personne qui parle : personne concernée, proche, parent, professionnel ou tiers inquiet.",
  ],

  responseGuidance: [
    "Adopter un ton respectueux, prudent, non culpabilisant et non centré sur le poids.",
    "Éviter les conseils simplistes du type manger moins, se contrôler ou faire preuve de volonté.",
    "Aider à clarifier les faits : fréquence, contexte, émotions, restriction, perte de contrôle, culpabilité, conséquences et signes de danger.",
    "Reconnaître la souffrance sans dramatiser ni poser de diagnostic.",
    "Proposer une première étape réaliste : observer les moments déclencheurs et demander un avis professionnel si la situation se répète.",
    "Pour un proche, encourager une parole centrée sur l'inquiétude et le bien-être plutôt que sur le poids ou l'apparence.",
    "En cas de comportements compensatoires ou de signes physiques inquiétants, encourager un avis médical rapidement.",
  ],

  orientation: [
    "Inviter à consulter un médecin, un psychologue, un diététicien formé ou un professionnel spécialisé lorsque la situation entraîne une souffrance ou une perte de contrôle.",
    "En cas de vomissements, laxatifs, restriction sévère, malaise ou perte de poids rapide, encourager un avis médical.",
    "En cas de souffrance psychique associée, encourager un appui psychologique adapté.",
    "Pour les proches, proposer de chercher conseil plutôt que de contrôler l'alimentation ou commenter le poids.",
    "En cas de suspicion de trouble alimentaire, proposer une orientation vers une prise en charge spécialisée.",
  ],

  emergency: [
    "Malaise, perte de connaissance, déshydratation, confusion ou symptôme physique inquiétant.",
    "Vomissements répétés, usage important de laxatifs, restriction sévère ou jeûne prolongé.",
    "Perte de poids rapide, épuisement sévère ou impossibilité de s'alimenter.",
    "Idées suicidaires, propos de mise en danger ou détresse psychique aiguë.",
    "Mineur ou personne vulnérable avec restriction importante, malaise, isolement ou mise en danger.",
  ],

  misconceptions: [
    "Penser qu'il suffit d'avoir de la volonté pour contrôler son alimentation.",
    "Réduire la situation à un problème de poids.",
    "Croire que la honte aide à changer.",
    "Donner des conseils alimentaires stricts sans comprendre le contexte émotionnel.",
    "Confondre alimentation plaisir, excès ponctuel et perte de contrôle répétée.",
    "Ignorer le rôle possible des restrictions dans les épisodes de compulsion.",
    "Commenter le corps ou le poids comme manière d'aider.",
  ],

  keyQuestions: [
    "Quels comportements alimentaires posent question ?",
    "La personne ressent-elle une perte de contrôle lorsqu'elle mange ?",
    "À quels moments les épisodes surviennent-ils le plus souvent ?",
    "Quelles émotions précèdent les prises alimentaires : stress, solitude, tristesse, colère, honte ou ennui ?",
    "Y a-t-il une alternance entre restriction et perte de contrôle ?",
    "La personne mange-t-elle en cachette ou ressent-elle de la honte après ?",
    "Y a-t-il des vomissements, laxatifs, jeûnes, restriction sévère ou comportements compensatoires ?",
    "Existe-t-il un risque immédiat : malaise, perte de poids rapide, déshydratation, idées noires ou mise en danger ?",
  ],

  references: [
    {
      label: "Assurance Maladie",
    },
    {
      label: "Santé publique France",
    },
    {
      label: "Fédération Française Anorexie Boulimie",
    },
    {
      label: "Haute Autorité de Santé",
    },
  ],
}