import type { KnowledgeModule } from "@/lib/ai/types"

export const ambivalenceKnowledge: KnowledgeModule = {
  id: "ambivalence",
  category: "transversal",
  title: "Ambivalence",
  version: "1.0.0",

  summary:
    "Module transversal consacré aux hésitations, contradictions, fluctuations de motivation et conflits internes fréquemment rencontrés dans les situations de changement ou de perte de contrôle.",

  knowledge: [
    "L'ambivalence est fréquente lorsqu'une personne envisage un changement important.",
    "Il est possible de vouloir changer tout en souhaitant conserver certains bénéfices du comportement actuel.",
    "Les hésitations ne traduisent pas nécessairement un manque de volonté.",
    "Les allers-retours entre décision, doute, reprise et nouvel engagement sont fréquents.",
    "Explorer les motivations et les freins permet souvent d'avancer plus utilement que chercher à convaincre.",
    "Reconnaître l'ambivalence aide à maintenir un dialogue ouvert sans jugement.",
  ],

  detection: [
    "Discours contradictoire ou changeant.",
    "Expression simultanée d'envie de changer et de peur de changer.",
    "Promesses répétées suivies de reprises.",
    "Alternance entre confiance et découragement.",
    "Difficulté à prendre une décision durable.",
    "Hésitations face à une aide ou un accompagnement.",
    "Recherche de raisons pour continuer et pour arrêter.",
  ],

  reasoning: [
    "Reconnaître l'ambivalence comme une étape possible du changement.",
    "Ne pas interpréter automatiquement les hésitations comme un refus.",
    "Identifier les bénéfices perçus et les conséquences négatives du comportement.",
    "Explorer les ressources déjà présentes.",
    "Valoriser les réflexions et les prises de conscience.",
    "Ne jamais pousser une personne à choisir trop rapidement sous la pression.",
    "Adapter les propositions au niveau réel de motivation.",
  ],

  responseGuidance: [
    "Adopter un ton ouvert, curieux et non jugeant.",
    "Reformuler les contradictions sans les utiliser contre la personne.",
    "Encourager l'exploration plutôt que la confrontation.",
    "Mettre en évidence les ressources et les motivations déjà exprimées.",
    "Éviter les formulations binaires : soit vous changez, soit vous échouez.",
    "Proposer une prochaine étape simple plutôt qu'un objectif trop ambitieux.",
  ],

  orientation: [
    "Inviter la personne à identifier ce qui compte le plus pour elle aujourd'hui.",
    "Encourager un accompagnement lorsque les hésitations se répètent et entraînent une souffrance.",
    "Pour les proches, rappeler que la pression renforce souvent les résistances.",
    "Valoriser les petits changements réalistes.",
    "En cas de détresse importante, proposer un appui professionnel adapté.",
  ],

  emergency: [
    "L'ambivalence ne constitue pas en elle-même une urgence.",
    "En revanche, si elle s'accompagne d'idées suicidaires, de violence ou d'une mise en danger immédiate, la sécurité devient prioritaire.",
  ],

  misconceptions: [
    "Penser qu'hésiter signifie ne pas vouloir changer.",
    "Croire qu'il faut supprimer tous les doutes avant d'agir.",
    "Confondre ambivalence et manipulation.",
    "Penser qu'une rechute annule toute motivation.",
    "Croire que la pression accélère durablement le changement.",
    "Réduire les hésitations à un manque de caractère.",
  ],

  keyQuestions: [
    "Qu'est-ce qui donne envie de changer ?",
    "Qu'est-ce qui rend ce changement difficile ?",
    "Quels bénéfices la personne associe-t-elle encore au comportement actuel ?",
    "Quelles conséquences négatives reconnaît-elle déjà ?",
    "Qu'est-ce qui a déjà fonctionné dans le passé ?",
    "Quelle serait aujourd'hui la plus petite étape réaliste ?",
    "Quelles ressources pourraient soutenir cette évolution ?",
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