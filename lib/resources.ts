import type { HelperResource } from "./schema";

export const emergencyResources: HelperResource[] = [
  {
    title: "15 - SAMU",
    reason: "Urgence vitale, malaise grave, intoxication inquiétante ou risque immédiat.",
    category: "emergency",
    phone: "15",
    isEmergency: true
  },
  {
    title: "3114",
    reason: "Souffrance psychique intense, idées suicidaires ou inquiétude immédiate pour une personne.",
    category: "emergency",
    phone: "3114",
    url: "https://3114.fr",
    isEmergency: true
  },
  {
    title: "119 - Enfance en danger",
    reason: "Situation impliquant un mineur exposé à une mise en danger.",
    category: "emergency",
    phone: "119",
    isEmergency: true
  }
];

export const guidanceResources: HelperResource[] = [
  {
    title: "Drogues Info Service",
    reason: "Écoute, information et orientation pour parler d'alcool, drogues, jeux ou usages problématiques.",
    category: "listening",
    phone: "0 800 23 13 13",
    url: "https://www.drogues-info-service.fr"
  },
  {
    title: "Alcool Info Service",
    reason: "Repères et aide au dialogue lorsque l'alcool prend trop de place.",
    category: "listening",
    phone: "0 980 980 930",
    url: "https://www.alcool-info-service.fr"
  },
  {
    title: "Joueurs Info Service",
    reason: "Information et accompagnement autour des jeux d'argent et pratiques compulsives.",
    category: "listening",
    phone: "09 74 75 13 13",
    url: "https://www.joueurs-info-service.fr"
  },
  {
    title: "Fil Santé Jeunes",
    reason: "Écoute adaptée pour les 12-25 ans et leurs proches.",
    category: "youth",
    phone: "0 800 235 236",
    url: "https://www.filsantejeunes.com"
  },
  {
    title: "Annuaire Santé.fr",
    reason: "Trouver un médecin, un CSAPA ou une structure d'accompagnement près de chez soi.",
    category: "care",
    url: "https://www.sante.fr"
  }
];
