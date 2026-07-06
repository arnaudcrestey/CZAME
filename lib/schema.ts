import { z } from "zod";

export const riskLevels = ["green", "amber", "red"] as const;

export const helperResourceSchema = z.object({
  title: z.string(),
  reason: z.string(),
  category: z.enum([
    "emergency",
    "care",
    "youth",
    "harm-reduction",
    "listening",
  ]),
  phone: z.string().optional(),
  url: z.string().url().optional(),
  isEmergency: z.boolean().optional(),
});

export const analysisSchema = z.object({
  riskLevel: z.enum(riskLevels),

  label: z.string(),

  summary: z.string(),

  whatSeemsAtStake: z.array(z.string()),

  pointsOfVigilance: z.array(z.string()),

  whatNotToConclude: z.array(z.string()),

  conversationPlan: z.array(z.string()),

  questionsToAsk: z.array(z.string()),

  nextActions: z.array(z.string()),

  phrasesToTry: z.array(z.string()),

  phrasesToAvoid: z.array(z.string()),

  nextStep: z.string(),

  helperCards: z.array(helperResourceSchema),

  disclaimer: z.string(),
});

export type RiskLevel = z.infer<typeof analysisSchema>["riskLevel"];

export type HelperResource = z.infer<typeof helperResourceSchema>;

export type DialogueAnalysis = z.infer<typeof analysisSchema>;