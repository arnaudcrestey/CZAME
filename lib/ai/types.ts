export type KnowledgeCategory = "addiction" | "transversal"

export type ReferenceSource = {
  label: string
  url?: string
}

export type KnowledgeModule = {
  id: string
  category: KnowledgeCategory
  title: string
  version: string
  summary: string

  knowledge: string[]
  detection: string[]
  reasoning: string[]
  responseGuidance: string[]
  orientation: string[]
  emergency: string[]
  misconceptions: string[]
  keyQuestions: string[]

  references: ReferenceSource[]
}