import type { KnowledgeModule } from "@/lib/ai/types"

export const drogueKnowledge: KnowledgeModule = {
  id: "drogue",
  category: "addiction",
  title: "Drogues",
  version: "1.0.0",

  summary:
    "Module consacré aux usages problématiques de substances psychoactives illicites ou détournées, notamment cocaïne, amphétamines, MDMA, hallucinogènes, opioïdes, protoxyde d'azote et autres drogues.",

  knowledge: [
    "Les drogues psychoactives peuvent modifier l'humeur, les perceptions, l'énergie, le sommeil, le comportement ou le rapport au risque.",
    "Les situations peuvent concerner des usages occasionnels, festifs, réguliers, compulsifs ou associés à une perte de contrôle.",
    "La fréquence seule ne suffit pas à évaluer la situation : il faut tenir compte du contexte, des conséquences, des prises de risque et de la difficulté à réduire.",
    "Certaines substances exposent à des risques aigus importants, notamment malaise, surdosage, troubles psychiques, accidents, violences ou conduites dangereuses.",
    "Les usages peuvent être liés à une recherche de performance, de fuite, de désinhibition, d'appartenance, d'apaisement ou d'oubli.",
    "Les mélanges entre substances, notamment avec alcool, médicaments ou autres drogues, augmentent fortement les risques.",
  ],

  detection: [
    "Consommations répétées malgré des conséquences physiques, psychiques, relationnelles, financières ou professionnelles.",
    "Difficulté à réduire, espacer ou arrêter les prises.",
    "Recherche insistante du produit, anticipation des consommations ou organisation de la vie autour des prises.",
    "Consommation cachée, minimisée ou justifiée par le contexte festif, la pression ou la fatigue.",
    "Changements de comportement : agitation, irritabilité, isolement, euphorie inhabituelle, suspicion, tristesse ou épuisement après les prises.",
    "Prises de risque : conduite, sexualité non protégée, violences, dépenses importantes, conflits ou mises en danger.",
    "Association avec alcool, médicaments, cannabis ou autres substances.",
    "Signes inquiétants après consommation : confusion, malaise, hallucinations, douleur thoracique, panique, perte de connaissance ou comportement incohérent.",
  ],

  reasoning: [
    "Ne jamais conclure à une dépendance uniquement à partir d'un récit.",
    "Distinguer usage ponctuel, usage festif, usage régulier, perte de contrôle possible et situation de danger immédiat.",
    "Identifier la substance évoquée lorsque c'est possible, sans inventer si elle n'est pas clairement nommée.",
    "Repérer les mélanges, les doses, le contexte, la fréquence, les conséquences et les tentatives de réduction.",
    "Être particulièrement prudent avec les opioïdes, la cocaïne, les stimulants, les produits inconnus et les mélanges.",
    "Tenir compte de la personne qui parle : personne concernée, proche, parent, professionnel ou tiers inquiet.",
    "Repérer si la consommation sert à gérer une souffrance psychique, un traumatisme, une anxiété, une solitude ou un épuisement.",
  ],

  responseGuidance: [
    "Adopter un ton calme, prudent, non moralisateur et non culpabilisant.",
    "Éviter les diagnostics, les certitudes ou les injonctions brutales.",
    "Aider à clarifier les faits : substance, fréquence, contexte, effets recherchés, conséquences, mélanges, pertes de contrôle et risques immédiats.",
    "Ne jamais banaliser une consommation sous prétexte qu'elle est festive ou occasionnelle.",
    "En cas de risque immédiat, orienter clairement vers les secours ou une aide médicale urgente.",
    "Pour un proche, proposer une formulation centrée sur les faits observables et l'inquiétude plutôt que sur l'accusation.",
    "Encourager un échange avec un professionnel spécialisé lorsque la consommation devient répétée, difficile à contrôler ou source de conséquences.",
  ],

  orientation: [
    "Proposer de contacter Drogues Info Service pour une écoute, une information ou une orientation.",
    "Inviter à consulter un médecin, un professionnel en addictologie ou une structure spécialisée lorsque l'usage devient difficile à contrôler.",
    "En cas de souffrance psychique associée, encourager un appui médical ou psychologique adapté.",
    "Pour les proches, proposer de chercher conseil auprès d'un professionnel plutôt que gérer seul une situation complexe.",
    "En cas de consommation de produits inconnus, de mélanges ou de symptômes inquiétants, recommander une vigilance médicale renforcée.",
  ],

  emergency: [
    "Perte de connaissance, malaise grave, convulsions ou respiration anormale.",
    "Douleur thoracique, difficulté à respirer, confusion importante ou agitation extrême.",
    "Surdosage suspecté, prise massive ou produit inconnu.",
    "Hallucinations inquiétantes, paranoïa intense, comportement incohérent ou mise en danger.",
    "Association avec alcool, médicaments ou plusieurs substances entraînant un danger immédiat.",
    "Idées suicidaires, propos de mise en danger ou comportement auto-agressif.",
    "Après consommation d'opioïdes : somnolence profonde, respiration ralentie, lèvres bleutées ou impossibilité de réveiller la personne.",
  ],

  misconceptions: [
    "Penser qu'une consommation festive ne peut pas devenir problématique.",
    "Croire qu'il faut consommer tous les jours pour avoir un problème.",
    "Réduire la situation à un manque de volonté.",
    "Penser qu'un produit est sans danger parce qu'il circule dans un groupe ou une soirée.",
    "Croire que les mélanges permettent de mieux gérer les effets.",
    "Ignorer les risques psychiques possibles : anxiété, panique, paranoïa, épisode délirant ou dépression après consommation.",
    "Penser qu'un proche doit gérer seul la situation.",
  ],

  keyQuestions: [
    "Quelle substance est concernée ?",
    "La consommation est-elle ponctuelle, régulière ou difficile à contrôler ?",
    "Dans quel contexte la personne consomme-t-elle ?",
    "Y a-t-il des mélanges avec alcool, médicaments ou autres substances ?",
    "La personne a-t-elle déjà essayé de réduire, d'espacer ou d'arrêter ?",
    "Quelles conséquences sont déjà visibles : santé, argent, travail, études, relations, sécurité ?",
    "La consommation sert-elle à faire la fête, tenir, oublier, dormir, se calmer ou éviter une souffrance ?",
    "Existe-t-il un risque immédiat de malaise, surdosage, confusion, violence ou mise en danger ?",
  ],

  references: [
    {
      label: "Drogues Info Service",
    },
    {
      label: "MILDECA",
    },
    {
      label: "Observatoire français des drogues et des tendances addictives",
    },
    {
      label: "Haute Autorité de Santé",
    },
  ],
}