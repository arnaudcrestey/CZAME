import { BookOpen, BriefcaseBusiness, HeartHandshake, LockKeyhole, Scale, ShieldAlert } from "lucide-react";

export const audienceCards = [
  {
    title: "Pour les proches",
    href: "/proches",
    text: "Préparer une première conversation, poser des limites sans rompre le lien, savoir quand demander de l'aide."
  },
  {
    title: "Pour les professionnels",
    href: "/professionnels",
    text: "Disposer d'un cadre prudent pour accueillir un récit, repérer les signaux d'alerte et orienter sans surinterpréter."
  },
  {
    title: "En cas d'urgence",
    href: "/urgence",
    text: "Identifier les situations où la conversation doit attendre parce que la sécurité immédiate devient prioritaire."
  }
];

export const resourceGroups = [
  {
    title: "Écouter et parler",
    icon: HeartHandshake,
    items: [
      "Partir de ce que l'on observe plutôt que de ce que l'on croit savoir.",
      "Parler à la première personne : inquiétude, fatigue, peur, besoin de comprendre.",
      "Préférer une conversation courte, située, ré-ouvrable, à une grande confrontation."
    ]
  },
  {
    title: "Comprendre sans diagnostiquer",
    icon: BookOpen,
    items: [
      "Un usage problématique ne se réduit pas à une substance ou un comportement.",
      "Le contexte, l'isolement, la santé mentale et les contraintes sociales comptent.",
      "La prudence consiste à formuler des hypothèses, pas des conclusions."
    ]
  },
  {
    title: "Orienter avec justesse",
    icon: ShieldAlert,
    items: [
      "En danger immédiat : appeler les secours ou une ligne de crise.",
      "Hors urgence : proposer une ressource fiable, sans imposer un parcours.",
      "Pour un mineur ou une personne vulnérable : ne pas rester seul avec l'inquiétude."
    ]
  }
];

export const professionalUseCases = [
  {
    title: "Manager ou RH",
    text: "Préparer un entretien centré sur les faits observables, l'impact professionnel et les ressources disponibles, sans accusation ni intrusion médicale."
  },
  {
    title: "Éducateur ou travailleur social",
    text: "Mettre en forme une inquiétude, repérer les éléments de vulnérabilité et décider si l'on peut ouvrir un échange ou s'il faut mobiliser un relais."
  },
  {
    title: "Soignant non spécialisé",
    text: "Structurer une parole d'accueil : écouter, reformuler, ne pas conclure, puis orienter vers un dispositif adapté."
  }
];

export const closeOnesGuides = [
  {
    title: "Avant de parler",
    items: [
      "Choisir un moment calme, hors conflit et hors intoxication.",
      "Préparer deux faits observables, une émotion personnelle et une demande simple.",
      "Accepter que la première conversation serve surtout à garder le lien."
    ]
  },
  {
    title: "Pendant l'échange",
    items: [
      "Éviter les étiquettes et les menaces.",
      "Laisser des silences, ne pas transformer l'échange en interrogatoire.",
      "Nommer clairement les limites si la situation vous met en difficulté."
    ]
  },
  {
    title: "Après",
    items: [
      "Noter ce qui a été entendu, refusé, accepté ou repoussé.",
      "Chercher un relais si la situation se répète ou s'aggrave.",
      "Se protéger aussi : aider ne signifie pas tout porter seul."
    ]
  }
];

export const trustPages = [
  {
    title: "Confidentialité",
    href: "/confidentialite",
    icon: LockKeyhole,
    text: "Clarifier les données nécessaires, les limites du prototype et les engagements attendus pour une future version connectée."
  },
  {
    title: "Mentions légales",
    href: "/mentions-legales",
    icon: Scale,
    text: "Présenter l'éditeur, la responsabilité, les limites du service et les conditions d'utilisation."
  },
  {
    title: "Professionnels",
    href: "/professionnels",
    icon: BriefcaseBusiness,
    text: "Décrire les cas d'usage pour les professionnels non spécialisés et les limites de posture."
  }
];
