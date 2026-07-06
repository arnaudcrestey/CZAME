import type { KnowledgeModule } from "@/lib/ai/types"

export const jeuxKnowledge: KnowledgeModule = {
  id: "jeux",
  category: "addiction",
  title: "Jeux",
  version: "1.0.0",

  summary:
    "Module consacré aux usages problématiques liés aux jeux d'argent, paris sportifs, casino, poker, jeux vidéo, jeux mobiles, loot boxes, achats intégrés et situations de perte de contrôle autour du jeu.",

  knowledge: [
    "Le jeu peut devenir problématique lorsqu'il prend une place excessive, entraîne une perte de contrôle ou provoque des conséquences importantes dans la vie quotidienne.",
    "Les situations concernent aussi bien les jeux d'argent que les jeux vidéo, les jeux mobiles, les paris en ligne, les loot boxes ou les achats intégrés.",
    "La question centrale n'est pas seulement le temps passé ou l'argent dépensé, mais la difficulté à s'arrêter, les conséquences et la place prise par le jeu.",
    "Les jeux d'argent peuvent entraîner des pertes financières, de l'endettement, des mensonges, de l'isolement et une recherche de récupération des pertes.",
    "Les jeux vidéo peuvent devenir préoccupants lorsqu'ils perturbent le sommeil, les études, le travail, les relations, l'hygiène de vie ou les responsabilités.",
    "La honte, la minimisation et les tentatives répétées de reprendre le contrôle sont fréquentes dans les situations problématiques.",
  ],

  detection: [
    "Difficulté à arrêter une partie, une session, un pari ou une série de mises.",
    "Temps ou argent consacré au jeu plus important que prévu.",
    "Mensonges, dissimulation ou minimisation autour du jeu.",
    "Reprise rapide après une tentative d'arrêt ou de réduction.",
    "Recherche de récupération des pertes après des paris ou jeux d'argent.",
    "Dépenses répétées dans des jeux, achats intégrés, loot boxes ou paris.",
    "Sommeil perturbé, fatigue, isolement, conflits familiaux ou baisse des résultats scolaires ou professionnels.",
    "Irritabilité, agitation ou tension lorsqu'il faut arrêter ou lorsque l'accès au jeu est limité.",
    "Priorité donnée au jeu au détriment des obligations, relations ou activités importantes.",
  ],

  reasoning: [
    "Ne jamais conclure à une addiction uniquement à partir d'un récit.",
    "Distinguer loisir, usage intensif, perte de contrôle possible, conséquences installées et situation de danger financier ou psychique.",
    "Repérer s'il s'agit de jeux d'argent, de jeux vidéo, de jeux mobiles, de paris, de casino, de poker, de loot boxes ou d'achats intégrés.",
    "Évaluer la place prise par le jeu : temps, argent, sommeil, travail, études, relations, santé et responsabilités.",
    "Être particulièrement attentif aux dettes, mensonges, isolement, recherche de récupération des pertes et idées noires.",
    "Repérer si le jeu sert à fuir une souffrance, l'ennui, le stress, la solitude, la colère ou un sentiment d'échec.",
    "Tenir compte de la personne qui parle : personne concernée, proche, parent, professionnel ou tiers inquiet.",
  ],

  responseGuidance: [
    "Adopter un ton calme, non moralisateur et non humiliant.",
    "Éviter de réduire la situation à un manque de volonté ou à une simple mauvaise habitude.",
    "Aider à clarifier les faits : fréquence, durée, argent dépensé, pertes, dettes, sommeil, conflits, tentatives de réduction et conséquences.",
    "Pour les jeux d'argent, inviter à regarder les pertes réelles plutôt que les gains ponctuels.",
    "Pour les jeux vidéo, distinguer passion, investissement important et perte de contrôle avec conséquences.",
    "Pour un proche ou un parent, proposer une approche centrée sur les faits observables plutôt que sur l'interdiction brutale ou l'accusation.",
    "Encourager une première action réaliste : faire le point, poser une limite concrète, demander conseil ou sécuriser l'accès à l'argent si nécessaire.",
  ],

  orientation: [
    "Proposer de contacter Joueurs Info Service pour une information, une écoute ou une orientation.",
    "En cas de pertes financières, dettes ou perte de contrôle, encourager un contact avec un professionnel en addictologie ou une structure spécialisée.",
    "En cas de situation familiale tendue, proposer de chercher conseil avant de multiplier les interdictions ou les confrontations.",
    "En cas de souffrance psychique, d'isolement ou d'idées noires, encourager un appui médical ou psychologique adapté.",
    "Pour les proches, proposer de ne pas gérer seuls les dettes, les mensonges répétés ou les conflits importants.",
  ],

  emergency: [
    "Idées suicidaires, propos de désespoir ou menace de passage à l'acte après des pertes ou un conflit lié au jeu.",
    "Endettement massif, pression financière immédiate, menaces, extorsion ou risque de mise en danger.",
    "Violence familiale, menace ou conflit grave autour du jeu.",
    "Mineur en danger, exploitation financière ou dépenses incontrôlées avec conséquences importantes.",
    "Épuisement sévère, privation de sommeil importante ou comportement incohérent lié au jeu.",
  ],

  misconceptions: [
    "Penser qu'un joueur peut toujours s'arrêter simplement s'il le veut.",
    "Croire qu'un gros gain règle le problème.",
    "Penser qu'il suffit de récupérer les pertes pour repartir à zéro.",
    "Réduire les jeux vidéo à une simple passion sans regarder les conséquences.",
    "Confondre temps passé et problème : le critère central est aussi la perte de contrôle et l'impact sur la vie.",
    "Humilier, menacer ou confisquer brutalement sans comprendre la situation.",
    "Ignorer les achats intégrés, loot boxes ou microtransactions parce qu'ils semblent moins visibles qu'un casino ou un pari.",
  ],

  keyQuestions: [
    "De quel type de jeu s'agit-il : argent, paris, casino, poker, jeux vidéo, jeux mobiles ou achats intégrés ?",
    "Combien de temps ou d'argent le jeu prend-il réellement ?",
    "La personne arrive-t-elle à s'arrêter lorsqu'elle l'avait prévu ?",
    "Y a-t-il des mensonges, dettes, pertes, conflits ou conséquences scolaires, professionnelles ou familiales ?",
    "La personne essaie-t-elle de récupérer ses pertes ?",
    "Que se passe-t-il lorsqu'elle ne peut pas jouer ?",
    "Le jeu sert-il à fuir le stress, la solitude, l'ennui, la colère ou une souffrance ?",
    "Existe-t-il un risque immédiat : idées noires, dette urgente, violence, mineur en danger ou épuisement sévère ?",
  ],

  references: [
    {
      label: "Joueurs Info Service",
    },
    {
      label: "Drogues Info Service",
    },
    {
      label: "MILDECA",
    },
    {
      label: "Haute Autorité de Santé",
    },
  ],
}