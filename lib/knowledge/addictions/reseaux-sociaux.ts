import type { KnowledgeModule } from "@/lib/ai/types"

export const reseauxSociauxKnowledge: KnowledgeModule = {
  id: "reseaux-sociaux",
  category: "addiction",
  title: "Réseaux sociaux",
  version: "1.0.0",

  summary:
    "Module consacré aux usages problématiques des réseaux sociaux, plateformes numériques, applications de partage de contenus, messageries et situations de perte de contrôle liées au temps d'écran.",

  knowledge: [
    "Les réseaux sociaux occupent aujourd'hui une place importante dans la vie personnelle, sociale et professionnelle.",
    "Un usage devient préoccupant lorsqu'il entraîne une perte de contrôle, une souffrance ou des conséquences importantes dans la vie quotidienne.",
    "Les situations peuvent concerner Instagram, TikTok, Snapchat, Facebook, X, YouTube, Discord, Twitch ou toute autre plateforme similaire.",
    "Le problème ne se limite pas au temps passé mais concerne aussi l'impact sur le sommeil, les relations, les études, le travail, l'estime de soi ou la santé mentale.",
    "Les notifications, le défilement infini, la recherche de validation sociale et la peur de manquer une information peuvent renforcer les usages.",
    "Les usages problématiques peuvent concerner les adolescents comme les adultes.",
  ],

  detection: [
    "Consultation très fréquente ou automatique du téléphone.",
    "Difficulté à arrêter de faire défiler les contenus.",
    "Temps d'écran supérieur à ce qui était prévu.",
    "Consultation dès le réveil ou avant de dormir.",
    "Interruption d'activités importantes pour consulter les réseaux.",
    "Besoin de vérifier les notifications de manière répétée.",
    "Irritabilité ou anxiété lorsque l'accès est limité.",
    "Sommeil perturbé, fatigue ou difficultés de concentration.",
    "Comparaison permanente avec les autres ou recherche excessive de validation.",
    "Isolement progressif ou diminution des activités hors écran.",
  ],

  reasoning: [
    "Ne jamais conclure à une addiction uniquement à partir d'un récit.",
    "Distinguer usage quotidien, usage intensif, perte de contrôle possible et conséquences installées.",
    "Évaluer la place réelle des réseaux sociaux dans la journée.",
    "Repérer les conséquences sur le sommeil, les relations, le travail, les études et le bien-être.",
    "Identifier si les réseaux servent à fuir une souffrance, l'ennui, l'anxiété, la solitude ou un mal-être.",
    "Être particulièrement attentif lorsqu'un adolescent est concerné.",
    "Tenir compte de la personne qui parle : personne concernée, parent, proche, professionnel ou tiers inquiet.",
  ],

  responseGuidance: [
    "Adopter un ton calme, bienveillant et non culpabilisant.",
    "Éviter de diaboliser les réseaux sociaux.",
    "Aider à observer les habitudes plutôt qu'à juger les comportements.",
    "Proposer d'identifier les moments où l'utilisation devient automatique.",
    "Encourager une réflexion sur les conséquences concrètes plutôt que sur le nombre d'heures uniquement.",
    "Pour les proches, privilégier le dialogue plutôt que les interdictions brutales.",
    "Valoriser toute démarche visant à reprendre progressivement le contrôle.",
  ],

  orientation: [
    "Inviter à échanger avec un professionnel lorsque l'usage entraîne une souffrance importante.",
    "En cas d'impact sur la santé mentale, proposer un avis médical ou psychologique.",
    "Pour les parents, encourager un accompagnement éducatif fondé sur le dialogue.",
    "En cas de cyberharcèlement, rappeler l'importance de demander rapidement de l'aide.",
    "Pour les proches, proposer de chercher conseil plutôt que gérer seuls une situation devenue complexe.",
  ],

  emergency: [
    "Cyberharcèlement avec détresse importante.",
    "Idées suicidaires ou propos de mise en danger liés aux réseaux sociaux.",
    "Diffusion de contenus mettant directement une personne en danger.",
    "Menaces, chantage ou exploitation en ligne.",
    "Isolement extrême associé à une souffrance psychique importante.",
  ],

  misconceptions: [
    "Penser que seul le nombre d'heures compte.",
    "Croire que tous les utilisateurs intensifs sont forcément dépendants.",
    "Penser qu'il suffit de supprimer une application pour résoudre durablement la situation.",
    "Réduire le problème à un manque de volonté.",
    "Confondre usage professionnel, usage personnel et perte de contrôle.",
    "Humilier ou culpabiliser une personne au sujet de son temps d'écran.",
    "Penser que les adolescents réagissent tous de la même manière aux réseaux sociaux.",
  ],

  keyQuestions: [
    "Quels réseaux sociaux sont principalement utilisés ?",
    "À quels moments de la journée les consultations sont-elles les plus fréquentes ?",
    "La personne arrive-t-elle à arrêter lorsqu'elle l'avait prévu ?",
    "Quelles conséquences observe-t-elle sur le sommeil, le travail, les études ou les relations ?",
    "Les réseaux servent-ils à éviter une émotion difficile, le stress ou la solitude ?",
    "Existe-t-il un cyberharcèlement, une pression sociale ou une recherche excessive de validation ?",
    "La personne a-t-elle déjà essayé de réduire son utilisation ?",
    "Existe-t-il un risque immédiat pour sa sécurité ou sa santé mentale ?",
  ],

  references: [
    {
      label: "Santé publique France",
    },
    {
      label: "e-Enfance / 3018",
    },
    {
      label: "Haute Autorité de Santé",
    },
    {
      label: "Ministère de la Santé",
    },
  ],
}