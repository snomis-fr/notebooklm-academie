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
    objectif: "Maîtriser le RAG et la curation pour centraliser règlements, rapports et documents fédéraux.",
    description:
      "Centralisez règlements, rapports de commissions et documents officiels dans un carnet unique. Montrez aux instances comment NotebookLM s'appuie sur vos sources — pas sur des hallucinations.",
    icon: "database",
    color: "module-1",
    isFree: true, // Formation gratuite pour tous
    duration: "1h",
    level: "Débutant",
    parts: [
      {
        id: "m1-p1",
        slug: "philosophie-source-grounding",
        order: 1,
        title: 'La Philosophie du "Source-Grounding" (Pourquoi NotebookLM n\'est pas ChatGPT)',
        description:
          "Un moteur de vérité basé sur vos données (RAG), pas une IA générative classique. Idéal pour les fédérations : l'IA ne répond qu'à partir de vos règlements et documents officiels.",
        videoUrl: "https://www.youtube.com/watch?v=fztkOgGeerU",
        activities: [
          {
            id: "m1-p1-a1",
            title: "Le test du mensonge",
            description:
              "Importer un extrait de règlement fédéral et poser une question hors-sujet : l'IA refuse de répondre. Preuve de fiabilité pour les instances — zéro hallucination.",
            type: "practice",
          },
        ],
        noteAfterActivities:
          "NotebookLM n'est pas magique — il est honnête. Il vous rend exactement ce que vous lui donnez, en mieux organisé. Donnez-lui du bruit, il produira du bruit. Donnez-lui de la substance, il produira de l'intelligence.",
      },
      {
        id: "m1-p2",
        slug: "art-curation",
        order: 2,
        title: "L'Art de la Curation (Gérer les formats et les limites)",
        description:
          "PDF, audio, vidéo YouTube — formats supportés. Intégrez règlements, comptes-rendus de réunions, vidéos de formation ou podcasts officiels dans un même carnet.",
        videoUrl: "https://www.youtube.com/watch?v=-c7OusxP06k",
        activities: [
          {
            id: "m1-p2-a1",
            title: "Le Mixeur de Médias",
            description:
              "Créer un carnet fédéral : 1 règlement (PDF), 1 vidéo de formation YouTube et 1 compte-rendu audio. NotebookLM interroge l'ensemble.",
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
          "Maîtriser l'interface complète. Montrez aux comités comment vérifier chaque réponse avec les citations vers les documents sources.",
        videoUrl: "https://www.youtube.com/watch?v=sICEx_PCWUM",
        activities: [
          {
            id: "m1-p3-a1",
            title: "Le Détective de Citations",
            description:
              "Poser une question réglementaire, obtenir la réponse, et cliquer sur les citations pour tracer la preuve dans le règlement. Argument clé pour convaincre les instances.",
            type: "practice",
          },
        ],
      },
    ],
    closingAudioUrl: "/audio/module1-closing.m4a",
    closingMessageTitle: "Maîtriser NotebookLM et éviter les hallucinations",
    closingMessageText:
      "Avant tout, retenez un principe fondamental qui conditionne 100% de vos résultats avec NotebookLM — et avec toute IA : Garbage In, Garbage Out. Si vous importez des sources de mauvaise qualité, incomplètes ou mal structurées, l'IA produira des analyses médiocres, peu importe sa puissance. La qualité de votre output dépend entièrement de la qualité de votre input. En clair : NotebookLM est un amplificateur — il amplifie le meilleur comme le pire de vos données.",
  },
  {
    id: "module-2",
    slug: "specialiste-synthese",
    order: 2,
    title: "Le Spécialiste de la Synthèse",
    subtitle: "L'Analyse",
    objectif: "Synthétiser rapports et règlements pour comités, arbitres et clubs.",
    description:
      "Générez des synthèses pour le comité directeur, des FAQ réglementaires pour les clubs, des guides pour les arbitres. NotebookLM structure le savoir fédéral.",
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
          "Formule pour des réponses précises. Ex : « Agis comme un formateur d'arbitres et résume les changements réglementaires. »",
        videoUrl: "https://www.youtube.com/watch?v=LFnctCNfjQ4",
        activities: [
          {
            id: "m2-p1-a1",
            title: "Le Jeu de Rôle",
            description:
              'Challenger un rapport de commission : "Agis comme un dirigeant sceptique et soulève les points faibles." Préparer les réunions de comité.',
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
          "Génération en un clic : FAQ réglementaire pour les clubs, chronologie des événements pour les rapports annuels.",
        videoUrl: "https://www.youtube.com/watch?v=xKjvcu1f2Bs",
        activities: [
          {
            id: "m2-p2-a1",
            title: "La Génération Instantanée",
            description:
              "Générer en un clic un guide d'étude à partir du règlement fédéral. Idéal pour former arbitres et délégués.",
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
          "Découvrir des liens entre règlements, rapports et projets. Visualiser les connexions pour les présentations en AG.",
        videoUrl: "https://www.youtube.com/watch?v=5U38uaGK-Qw",
        activities: [
          {
            id: "m2-p3-a1",
            title: "La Cartographie",
            description:
              "Créer une Mind Map à partir des rapports de commissions et du règlement. Identifier les thèmes transversaux pour une AG ou un plan stratégique.",
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
    objectif: "Produire podcasts, supports vidéo et visuels pour clubs et formations.",
    description:
      "Générez des podcasts à partir des rapports, des supports vidéo pour les formations des clubs, des visuels pour la communication fédérale.",
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
          "Générer un podcast à partir de vos documents. Idéal pour résumer les décisions de comité aux clubs ou diffuser les nouveautés réglementaires.",
        activities: [
          {
            id: "m3-p1-a1",
            title: "Le Directeur de Studio",
            description:
              "Générer un podcast à partir d'un compte-rendu de réunion. L'écouter et piloter la conversation pour approfondir un point — format parfait pour les clubs.",
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
          "Créer des vidéos et visuels pour formations, communication interne et supports clubs.",
        activities: [
          {
            id: "m3-p2-a1",
            title: "Le Producteur Visuel",
            description:
              "Générer une vidéo explicative à partir du règlement ou d'une circulaire. Réutilisable pour les formations de ligues et clubs.",
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
          "Exporter vers Docs, Slides, Drive. Intégrer NotebookLM au workflow Google Workspace des fédérations.",
        activities: [
          {
            id: "m3-p3-a1",
            title: "L'Intégrateur",
            description:
              "Exporter une synthèse vers Google Docs pour la diffuser aux ligues. Publier un support sur Drive pour les clubs.",
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
    objectif: "Déployer NotebookLM en fédération : veille, comités, routines et bonnes pratiques.",
    description:
      "Cas d'usage avancés pour fédérations : veille réglementaire, carnets par commission, routines de mise à jour, partage avec les instances.",
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
          "Veille réglementaire, carnets par commission, recherche multi-sources. Construire un carnet stratégique pour le comité directeur.",
        activities: [
          {
            id: "m4-p1-a1",
            title: "Le Projet Réel",
            description:
              "Construire un carnet fédéral complet : règlement, rapports annuels, décisions de comité. Démonstration pour convaincre les instances.",
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
          "Optimiser la qualité des réponses, gérer les limites. Éviter les erreurs courantes lors du déploiement en fédération.",
        activities: [
          {
            id: "m4-p2-a1",
            title: "L'Auditeur",
            description:
              "Auditer un carnet fédéral existant : structure des sources, curation, pertinence pour les instances. Proposer des améliorations.",
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
          "NotebookLM au quotidien en fédération : routines de mise à jour, partage avec les ligues, évolution des carnets par saison.",
        activities: [
          {
            id: "m4-p3-a1",
            title: "Le Routinier",
            description:
              "Mettre en place une routine : alimenter le carnet après chaque comité, mettre à jour le règlement à chaque AG. Pérenniser l'usage.",
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
