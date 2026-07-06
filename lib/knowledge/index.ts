import type { KnowledgeModule } from "@/lib/ai/types"

import { alcoolKnowledge } from "./addictions/alcool"
import { cannabisKnowledge } from "./addictions/cannabis"
import { medicamentsKnowledge } from "./addictions/medicaments"
import { drogueKnowledge } from "./addictions/drogue"
import { tabacNicotineKnowledge } from "./addictions/tabac-nicotine"
import { jeuxKnowledge } from "./addictions/jeux"
import { reseauxSociauxKnowledge } from "./addictions/reseaux-sociaux"
import { sexualiteKnowledge } from "./addictions/sexualite"
import { achatsCompulsifsKnowledge } from "./addictions/achats-compulsifs"
import { travailKnowledge } from "./addictions/travail"
import { sportKnowledge } from "./addictions/sport"
import { alimentationKnowledge } from "./addictions/alimentation"
import { communicationKnowledge } from "./transversal/communication"
import { motivationKnowledge } from "./transversal/motivation"
import { prochesKnowledge } from "./transversal/proches"
import { urgenceKnowledge } from "./transversal/urgence"
import { violenceKnowledge } from "./transversal/violence"
import { ambivalenceKnowledge } from "./transversal/ambivalence"

export const knowledgeModules: KnowledgeModule[] = [
  alcoolKnowledge,
  cannabisKnowledge,
  medicamentsKnowledge,
  drogueKnowledge,
  tabacNicotineKnowledge,
  jeuxKnowledge,
  reseauxSociauxKnowledge,
  sexualiteKnowledge,
  achatsCompulsifsKnowledge,
  travailKnowledge,
  sportKnowledge,
  alimentationKnowledge,
  communicationKnowledge,
  motivationKnowledge,
  prochesKnowledge,
  urgenceKnowledge,
  violenceKnowledge,
  ambivalenceKnowledge,
]