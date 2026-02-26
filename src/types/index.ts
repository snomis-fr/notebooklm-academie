/**
 * Types partagés — NotebookLM Académie.
 *
 * Convention :
 * - Types métier ici (Module, User, etc.)
 * - Types spécifiques à un composant → dans le dossier du composant
 *
 * @module types
 */

/* ============================================================
   MODULES & COURS
   ============================================================ */

/** Activité pratique dans une partie de module */
export interface Activity {
  id: string;
  title: string;
  description: string;
  type: "practice" | "quiz" | "video" | "reading";
}

/** Partie d'un module (chaque module a 3 parties) */
export interface ModulePart {
  id: string;
  slug: string;
  order: number;
  title: string;
  description: string;
  /** URL de la vidéo YouTube de la leçon (optionnel) */
  videoUrl?: string;
  activities: Activity[];
}

/** Module de formation complet */
export interface Module {
  id: string;
  slug: string;
  order: number;
  title: string;
  subtitle: string;
  /** Objectif pédagogique du module (ex: "Maîtriser l'environnement RAG...") */
  objectif?: string;
  description: string;
  icon: string;
  color: string;
  isFree: boolean;
  duration: string;
  level: "Débutant" | "Intermédiaire" | "Avancé" | "Expert";
  parts: ModulePart[];
}

/* ============================================================
   UTILISATEURS (Phase 2)
   ============================================================ */

export interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = "admin" | "student" | "free";

/* ============================================================
   NEWSLETTER
   ============================================================ */

export interface NewsletterSubscriber {
  id: string;
  email: string;
  source: string;
  createdAt: string;
  confirmed: boolean;
}

/* ============================================================
   API
   ============================================================ */

/** Format standard de réponse API */
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

/** Progression utilisateur (Phase 2) */
export interface Progress {
  moduleId: string;
  partId: string;
  completedAt: string;
}
