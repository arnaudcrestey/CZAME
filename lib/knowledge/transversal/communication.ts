import type { KnowledgeModule } from "@/lib/ai/types"

export const communicationKnowledge: KnowledgeModule = {
  id: "communication",
  category: "transversal",
  title: "Communication",
  version: "1.0.0",

  summary:
    "Module transversal consacré à la manière d'aborder une situation difficile, de formuler une inquiétude, d'éviter les accusations et de soutenir un dialogue prudent avec une personne concernée ou un proche.",

  knowledge: [
    "La qualité de la communication peut influencer la possibilité d'un dialogue, surtout lorsqu'il existe honte, peur, colère, déni ou culpabilité.",
    "Une parole trop accusatrice, humiliante ou brutale peut renforcer la fermeture, la défense ou l'évitement.",
    "Une parole trop floue ou trop minimisante peut laisser la situation s'installer sans repère clair.",
    "Une communication utile s'appuie sur des faits observables, une inquiétude formulée calmement et une prochaine étape réaliste.",
    "L'objectif n'est pas de convaincre à tout prix, mais d'ouvrir un espace de parole plus sécurisé.",
    "Le bon message dépend de la personne qui parle : personne concernée, proche, parent, conjoint, professionnel ou tiers inquiet.",
  ],

  detection: [
    "Récit évoquant une difficulté à parler du sujet.",
    "Peur de braquer, blesser, accuser ou provoquer une réaction forte.",
    "Conflits répétés autour d'une consommation ou d'un comportement.",
    "Silence, évitement, mensonges, minimisation ou déni apparent.",
    "Besoin de trouver les bons mots pour relancer, cadrer, apaiser ou alerter.",
    "Situation où un proche cherche à aider sans savoir comment s'y prendre.",
    "Dialogue bloqué par la honte, la culpabilité, la colère ou la peur.",
  ],

  reasoning: [
    "Identifier qui parle et à qui le message s'adresse.",
    "Distinguer informer, demander, relancer, cadrer, apaiser, alerter ou protéger.",
    "Évaluer si le dialogue est possible ou si la priorité est d'abord la sécurité.",
    "Privilégier les faits observables plutôt que les interprétations ou les étiquettes.",
    "Éviter les formulations qui humilient, accusent, diagnostiquent ou enferment la personne.",
    "Adapter le niveau de fermeté au niveau de risque.",
    "Ne pas promettre qu'une conversation suffira à résoudre la situation.",
  ],

  responseGuidance: [
    "Proposer des formulations courtes, humaines et réalistes.",
    "Utiliser le je ou le nous lorsque c'est pertinent pour éviter l'accusation directe.",
    "Préférer : je m'inquiète de ce que j'observe, plutôt que : tu as un problème.",
    "Encourager une parole située : ce que j'ai vu, ce que je ressens, ce que je propose maintenant.",
    "Éviter les menaces, la honte, les ultimatums précipités ou les diagnostics.",
    "Prévoir une porte de sortie si la personne n'est pas prête à parler immédiatement.",
    "En cas de danger, recommander de chercher de l'aide plutôt que de gérer seul par la discussion.",
  ],

  orientation: [
    "Proposer de préparer une phrase simple avant d'engager la conversation.",
    "Encourager à choisir un moment calme, hors crise, hors intoxication ou hors conflit immédiat.",
    "Pour un proche, proposer de demander conseil à un professionnel si la situation est répétée ou sensible.",
    "En contexte familial, encourager une approche qui protège les enfants et les personnes vulnérables.",
    "Si la communication devient violente, menaçante ou dangereuse, prioriser la sécurité et l'aide extérieure.",
  ],

  emergency: [
    "Conversation impossible car la personne est violente, menaçante ou hors de contrôle.",
    "Risque suicidaire, menace de passage à l'acte ou propos de désespoir.",
    "Enfant, conjoint, proche ou personne vulnérable exposé à un danger immédiat.",
    "Intoxication, overdose, malaise ou confusion rendant le dialogue inadapté.",
    "Situation de chantage, contrainte, violence ou pression grave.",
  ],

  misconceptions: [
    "Penser qu'il faut trouver la phrase parfaite pour régler la situation.",
    "Croire qu'accuser directement permet forcément de faire réagir.",
    "Penser qu'il faut attendre d'être certain pour exprimer une inquiétude.",
    "Confondre parler clairement et parler brutalement.",
    "Croire qu'une seule conversation suffit toujours.",
    "Penser que minimiser protège la relation.",
    "Oublier qu'un proche peut aussi avoir besoin d'aide pour tenir sa place.",
  ],

  keyQuestions: [
    "Qui parle : personne concernée, proche, parent, conjoint, professionnel ou tiers inquiet ?",
    "À qui faut-il parler ?",
    "Quel est l'objectif du message : informer, demander, relancer, cadrer, apaiser, alerter ou protéger ?",
    "Quels faits concrets peuvent être évoqués sans accusation ?",
    "La conversation peut-elle avoir lieu dans un moment calme ?",
    "Existe-t-il un risque que la discussion aggrave la situation ?",
    "Quelle phrase simple pourrait ouvrir le dialogue ?",
    "Quelle aide extérieure serait utile si la conversation ne suffit pas ?",
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