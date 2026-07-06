import type { KnowledgeModule } from "@/lib/ai/types"

export const sexualiteKnowledge: KnowledgeModule = {
  id: "sexualite",
  category: "addiction",
  title: "Sexualité",
  version: "1.0.0",

  summary:
    "Module consacré aux usages problématiques liés à la sexualité, à la pornographie, aux applications de rencontre, aux comportements sexuels compulsifs et aux situations de perte de contrôle ou de mise en danger.",

  knowledge: [
    "La sexualité peut devenir problématique lorsqu'elle entraîne une perte de contrôle, une souffrance, des conséquences importantes ou des mises en danger.",
    "Les situations peuvent concerner la pornographie, la masturbation compulsive, les applications de rencontre, les rencontres répétées, les achats de contenus sexuels ou les comportements sexuels difficiles à maîtriser.",
    "La question centrale n'est pas la fréquence seule, mais la place prise par ces comportements, la difficulté à les contrôler et leurs conséquences.",
    "Certains comportements peuvent être liés à l'anxiété, la solitude, l'ennui, une souffrance psychique, un traumatisme ou une recherche d'apaisement.",
    "La honte, le secret, la culpabilité et la minimisation sont fréquents dans les récits liés à la sexualité.",
    "Toute situation impliquant contrainte, mineur, violence, chantage, exploitation ou absence de consentement doit être traitée avec une vigilance particulière.",
  ],

  detection: [
    "Difficulté à réduire ou arrêter malgré l'envie de le faire.",
    "Temps important consacré à la pornographie, aux applications, aux échanges ou aux rencontres.",
    "Comportements cachés, mensonges ou double vie.",
    "Conséquences sur le couple, la vie familiale, le travail, les études, l'argent ou l'estime de soi.",
    "Utilisation de la sexualité pour calmer une tension, fuir une émotion, oublier ou supporter une souffrance.",
    "Recherche répétée de stimulation plus forte ou plus fréquente.",
    "Prises de risque : rencontres non protégées, situations dangereuses, dépenses importantes, exposition ou chantage.",
    "Culpabilité, honte, isolement ou détresse après les comportements.",
  ],

  reasoning: [
    "Ne jamais conclure à une addiction sexuelle uniquement à partir d'un récit.",
    "Distinguer sexualité librement choisie, usage intensif, souffrance, perte de contrôle possible et situation de danger.",
    "Repérer si la personne décrit une difficulté à contrôler, une détresse ou des conséquences concrètes.",
    "Être particulièrement vigilant lorsque le récit évoque contrainte, mineur, violence, chantage, exploitation ou absence de consentement.",
    "Identifier si le comportement sert à gérer une anxiété, une solitude, un traumatisme, une colère ou un mal-être.",
    "Éviter tout jugement moral sur les pratiques sexuelles entre adultes consentants.",
    "Tenir compte de la personne qui parle : personne concernée, partenaire, parent, professionnel ou tiers inquiet.",
  ],

  responseGuidance: [
    "Adopter un ton respectueux, pudique, non jugeant et non humiliant.",
    "Éviter les formulations moralisatrices ou culpabilisantes.",
    "Aider à distinguer ce qui relève du choix, de la souffrance, de la contrainte, de la perte de contrôle ou du risque.",
    "Clarifier les faits : fréquence, contexte, conséquences, consentement, sécurité, émotions avant et après.",
    "Pour un partenaire ou un proche, proposer une parole centrée sur l'impact ressenti et les faits observables.",
    "En cas de danger, de contrainte ou de violence, prioriser la protection et l'aide adaptée.",
    "Encourager une aide professionnelle lorsque la personne se sent dépassée, honteuse ou en perte de contrôle.",
  ],

  orientation: [
    "Inviter à consulter un professionnel de santé, un psychologue, un sexologue ou un professionnel en addictologie si la situation entraîne une souffrance.",
    "En cas de violence, contrainte, chantage ou exploitation, orienter vers une aide spécialisée et une protection adaptée.",
    "En cas de risque sexuel, encourager un avis médical, un dépistage ou une consultation adaptée.",
    "Pour les proches ou partenaires, proposer de chercher conseil plutôt que gérer seuls une situation sensible.",
    "En cas de souffrance psychique importante, encourager un appui médical ou psychologique.",
  ],

  emergency: [
    "Violence sexuelle, contrainte, menace, chantage ou exploitation.",
    "Situation impliquant un mineur ou suspicion de mise en danger d'un mineur.",
    "Absence de consentement, pression ou impossibilité de se protéger.",
    "Idées suicidaires, propos de mise en danger ou détresse aiguë liée à la sexualité.",
    "Exposition à un risque médical immédiat ou agression récente.",
    "Menaces de diffusion d'images intimes, sextorsion ou chantage numérique.",
  ],

  misconceptions: [
    "Penser que la fréquence suffit à définir un problème.",
    "Confondre pratiques sexuelles consenties et comportement problématique.",
    "Réduire la situation à une faute morale.",
    "Croire que la honte aide à reprendre le contrôle.",
    "Penser qu'un partenaire peut régler seul la situation par la surveillance ou l'interdiction.",
    "Ignorer les risques de chantage, d'exploitation ou de violence en ligne.",
    "Minimiser une détresse parce que le sujet concerne la sexualité.",
  ],

  keyQuestions: [
    "Quel comportement pose question : pornographie, applications, rencontres, masturbation, achats de contenus ou autre ?",
    "La personne se sent-elle libre de ses choix ou dépassée par ses comportements ?",
    "Y a-t-il une difficulté à réduire ou arrêter ?",
    "Quelles conséquences observe-t-on sur la vie personnelle, le couple, le travail, l'argent ou l'estime de soi ?",
    "Les comportements surviennent-ils surtout en période de stress, solitude, anxiété ou mal-être ?",
    "Y a-t-il consentement clair entre adultes ?",
    "Existe-t-il un risque de chantage, violence, exploitation ou mise en danger ?",
    "Un mineur est-il concerné directement ou indirectement ?",
  ],

  references: [
    {
      label: "Santé publique France",
    },
    {
      label: "Drogues Info Service",
    },
    {
      label: "e-Enfance / 3018",
    },
    {
      label: "Haute Autorité de Santé",
    },
  ],
}