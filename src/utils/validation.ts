/**
 * Schémas de validation Zod — NotebookLM Académie.
 *
 * @module utils/validation
 */

import { z } from "zod";

/** Inscription newsletter */
export const newsletterSchema = z.object({
  email: z.string().email("Adresse email invalide"),
  source: z.string().max(50).default("homepage"),
});

/** Connexion (Phase 2) */
export const loginSchema = z.object({
  email: z.string().email("Adresse email invalide"),
  password: z.string().min(1, "Mot de passe requis"),
});

/** Inscription (Phase 2) */
export const registerSchema = z.object({
  email: z.string().email("Adresse email invalide"),
  password: z
    .string()
    .min(8, "Au moins 8 caractères")
    .regex(/[A-Z]/, "Au moins une majuscule")
    .regex(/[0-9]/, "Au moins un chiffre"),
  fullName: z.string().min(2, "Au moins 2 caractères").max(100),
});

/** Types inférés */
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
