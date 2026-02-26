/**
 * Configuration des modules de formation — NotebookLM Académie.
 *
 * En Phase 1, le contenu est statique ici.
 * En Phase 2, il migrera vers Supabase pour être dynamique.
 *
 * @module config/modules
 */

import type { Module } from "@/types";

/**
 * 1 formation — 4 modules — 12 parties — 12 activités pratiques.
 * Structure alignée sur le PDF "Formation NotebookLM".
 */
export const MODULES: Module[] = [
  {
    id: "module-1",
    slug: "architecte-donnees",
    order: 1,
    title: "L'Architecte de Données",
    subtitle: "Les Fondations",
    objectif: "Maîtriser l'environnement RAG et la curation de sources.",
    description:
      "Maîtrisez l'environnement RAG et la curation de sources. Apprenez pourquoi NotebookLM n'est pas ChatGPT et comment construire un socle de connaissances inébranlable.",
    icon: "database",
    color: "module-1",
    isFree: true, // Formation gratuite pour tous
    duration: "2h30",
    level: "Débutant",
    parts: [
      {
        id: "m1-p1",
        slug: "philosophie-source-grounding",
        order: 1,
        title: 'La Philosophie du "Source-Grounding" (Pourquoi NotebookLM n\'est pas ChatGPT)',
        description:
          "Un moteur de vérité basé sur vos données (RAG), pas une IA générative classique.",
        videoUrl: "https://www.youtube.com/watch?v=fztkOgGeerU",
        activities: [
          {
            id: "m1-p1-a1",
            title: "Le test du mensonge",
            description:
              "Importer un document technique et poser une question dont la réponse n'est pas dans le texte pour voir l'IA refuser de répondre (preuve du Grounding).",
            type: "practice",
          },
        ],
      },
      {
        id: "m1-p2",
        slug: "art-curation",
        order: 2,
        title: "L'Art de la Curation (Gérer les formats et les limites)",
        description:
          "PDF, audio, vidéo YouTube — formats supportés et limites.",
        activities: [
          {
            id: "m1-p2-a1",
            title: "Le Mixeur de Médias",
            description:
              "Créer un carnet contenant obligatoirement : 1 PDF, 1 lien YouTube et 1 fichier Audio MP3.",
            type: "practice",
          },
        ],
      },
      {
        id: "m1-p3",
        slug: "interface-tactique",
        order: 3,
        title: "L'Interface Tactique (Sources, Chat, Notes)",
        description:
          "Maîtriser l'interface complète de NotebookLM.",
        activities: [
          {
            id: "m1-p3-a1",
            title: "Le Détective de Citations",
            description:
              "Poser une question complexe, obtenir la réponse, et cliquer sur 3 citations (les numéros gris) pour surligner la preuve dans le texte original.",
            type: "practice",
          },
        ],
      },
    ],
  },
  {
    id: "module-2",
    slug: "specialiste-synthese",
    order: 2,
    title: "Le Spécialiste de la Synthèse",
    subtitle: "L'Analyse",
    objectif: "Transformer la lecture passive en dialogue actif et structuré.",
    description:
      "Transformez la lecture passive en dialogue actif et structuré. Maîtrisez le prompting avancé, les outils automatiques et la visualisation.",
    icon: "brain",
    color: "module-2",
    isFree: true,
    duration: "3h00",
    level: "Intermédiaire",
    parts: [
      {
        id: "m2-p1",
        slug: "super-prompting",
        order: 1,
        title: 'Le "Super Prompting" (Rôle + Tâche + Contexte)',
        description:
          "La formule pour des résultats précis.",
        activities: [
          {
            id: "m2-p1-a1",
            title: "Le Jeu de Rôle",
            description:
              'Utiliser le prompt "Agis comme un contradicteur sceptique" pour challenger les arguments d\'un document importé.',
            type: "practice",
          },
        ],
      },
      {
        id: "m2-p2",
        slug: "outils-automatiques",
        order: 2,
        title: "Les Outils Automatiques (Résumé, FAQ, Chronologie)",
        description:
          "Génération en un clic.",
        activities: [
          {
            id: "m2-p2-a1",
            title: "La Génération Instantanée",
            description:
              "Générer en un clic un Guide d'étude (Study Guide) et un Quiz pour s'auto-évaluer sur ses propres notes.",
            type: "practice",
          },
        ],
      },
      {
        id: "m2-p3",
        slug: "visualisation-connexions",
        order: 3,
        title: "Visualisation et Connexions (Mind Maps)",
        description:
          "Identifier des thèmes transversaux inattendus.",
        activities: [
          {
            id: "m2-p3-a1",
            title: "La Cartographie",
            description:
              "Ouvrir le mode Mind Map (carte mentale) sur un corpus de 5 documents pour identifier un thème transversal inattendu.",
            type: "practice",
          },
        ],
      },
    ],
  },
  {
    id: "module-3",
    slug: "createur-multimedia",
    order: 3,
    title: "Le Créateur Multimédia",
    subtitle: "La Production",
    objectif: "Produire des livrables (Audio, Vidéo, Visuels) à partir du savoir brut.",
    description:
      "Produire des livrables (Audio, Vidéo, Visuels) à partir du savoir brut.",
    icon: "play-circle",
    color: "module-3",
    isFree: true,
    duration: "3h30",
    level: "Avancé",
    parts: [
      {
        id: "m3-p1",
        slug: "audio-overview-interactif",
        order: 1,
        title: "L'Audio Overview Interactif (Le Podcast IA)",
        description:
          "Générer et piloter avec le mode Conversation.",
        activities: [
          {
            id: "m3-p1-a1",
            title: "Le Directeur de Studio",
            description:
              "Générer un Audio Overview, l'écouter, puis utiliser le mode Conversation pour interrompre les IA et leur demander de changer de sujet ou de focus.",
            type: "practice",
          },
        ],
      },
      {
        id: "m3-p2",
        slug: "production-video-visuelle",
        order: 2,
        title: "La Production Vidéo et Visuelle",
        description:
          "Créer des vidéos et visuels à partir de vos données.",
        activities: [
          {
            id: "m3-p2-a1",
            title: "Le Producteur Visuel",
            description:
              "Générer des contenus vidéo et visuels depuis NotebookLM.",
            type: "practice",
          },
        ],
      },
      {
        id: "m3-p3",
        slug: "export-integration",
        order: 3,
        title: "L'Export et l'Intégration (Vers l'écosystème Google)",
        description:
          "Docs, Slides, Drive — intégration complète.",
        activities: [
          {
            id: "m3-p3-a1",
            title: "L'Intégrateur",
            description:
              "Connecter NotebookLM à votre workflow Google Workspace.",
            type: "practice",
          },
        ],
      },
    ],
  },
  {
    id: "module-4",
    slug: "maitre-notebooklm",
    order: 4,
    title: "Le Maître NotebookLM",
    subtitle: "L'Expertise",
    objectif: "Consolider votre maîtrise avec des cas d'usage avancés et des bonnes pratiques.",
    description:
      "Consolidez votre maîtrise : cas d'usage avancés, bonnes pratiques et intégration dans vos workflows professionnels.",
    icon: "graduation-cap",
    color: "module-4",
    isFree: true,
    duration: "2h00",
    level: "Expert",
    parts: [
      {
        id: "m4-p1",
        slug: "cas-usage-avances",
        order: 1,
        title: "Cas d'Usage Avancés",
        description:
          "Résolution de problèmes complexes, recherche multi-sources et workflows récurrents.",
        activities: [
          {
            id: "m4-p1-a1",
            title: "Le Projet Réel",
            description:
              "Construire un carnet complet pour un cas d'usage professionnel (rapport, décision, veille).",
            type: "practice",
          },
        ],
      },
      {
        id: "m4-p2",
        slug: "bonnes-pratiques",
        order: 2,
        title: "Bonnes Pratiques et Pièges",
        description:
          "Optimiser la qualité des réponses, gérer les limites et éviter les erreurs courantes.",
        activities: [
          {
            id: "m4-p2-a1",
            title: "L'Auditeur",
            description:
              "Analyser un carnet existant et proposer des améliorations de structure et de curation.",
            type: "practice",
          },
        ],
      },
      {
        id: "m4-p3",
        slug: "integration-workflow",
        order: 3,
        title: "Intégration dans le Workflow",
        description:
          "NotebookLM au quotidien : routines, export, partage et évolution des carnets.",
        activities: [
          {
            id: "m4-p3-a1",
            title: "Le Routinier",
            description:
              "Mettre en place une routine hebdomadaire d'alimentation et de mise à jour d'un carnet clé.",
            type: "practice",
          },
        ],
      },
    ],
  },
];

/**
 * Récupère un module par son slug.
 *
 * @param slug - Le slug URL du module
 * @returns Le module ou undefined
 */
export function getModuleBySlug(slug: string): Module | undefined {
  return MODULES.find((m) => m.slug === slug);
}

/**
 * Récupère tous les modules gratuits.
 */
export function getFreeModules(): Module[] {
  return MODULES.filter((m) => m.isFree);
}
