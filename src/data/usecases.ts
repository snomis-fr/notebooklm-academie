/**
 * Données des 20 cas d'usage NotebookLM pour fédérations sportives.
 *
 * @module data/usecases
 */

export type UseCaseCategory =
  | "president"
  | "equipe"
  | "communication"
  | "performance"
  | "gouvernance";

export interface UseCase {
  id: number;
  categories: UseCaseCategory[];
  title: string;
  description: string;
  promptExample: string;
  impact: "high" | "medium" | "low";
  impactLabel: string;
}

export const USE_CASES: UseCase[] = [
  {
    id: 1,
    categories: ["president", "gouvernance"],
    title: "Veille réglementaire IJF & WADA consolidée",
    description:
      "Charger tous les textes réglementaires IJF, WADA, CNOSF et Ministère des Sports. NotebookLM répond instantanément aux questions de conformité sans relire 400 pages.",
    promptExample:
      "Quelles obligations s'appliquent à la France pour le dopage en compétition internationale selon nos règlements ?",
    impact: "high",
    impactLabel: "Impact critique — Risque réputationnel & juridique",
  },
  {
    id: 2,
    categories: ["president", "gouvernance"],
    title: "Brief décisionnel avant Comité Exécutif IJF",
    description:
      "Importer l'ordre du jour, les PV précédents et les positions des fédérations partenaires. Générer un brief de 2 pages avec enjeux, rapports de force et angles d'intervention.",
    promptExample:
      "Synthétise les positions divergentes sur le règlement arbitrage et anticipe les points de blocage.",
    impact: "high",
    impactLabel: "Impact critique — Influence internationale",
  },
  {
    id: 3,
    categories: ["president", "gouvernance"],
    title: "Analyse comparative des rapports d'activité fédéraux",
    description:
      "Charger 3-5 ans de rapports d'activité France Judo + rapports de fédérations étrangères. Identifier les tendances structurelles, indicateurs en déclin et benchmarks inspirants.",
    promptExample:
      "Quels indicateurs de développement montrent une divergence significative entre 2021 et 2024 ?",
    impact: "high",
    impactLabel: "Impact élevé — Décisions structurelles",
  },
  {
    id: 4,
    categories: ["president", "communication"],
    title: "Préparation des auditions parlementaires & ministérielles",
    description:
      "Charger questions écrites précédentes, lois sport récentes, rapports ANS et positions du ministère. Simuler les questions hostiles et préparer des réponses en mode contradicteur.",
    promptExample:
      "Agis comme un rapporteur sceptique et challenge nos arguments sur la réforme du financement des clubs.",
    impact: "high",
    impactLabel: "Impact critique — Crédibilité institutionnelle",
  },
  {
    id: 5,
    categories: ["equipe", "gouvernance"],
    title: "Onboarding accéléré des nouveaux salariés et élus",
    description:
      "Créer un carnet avec statuts, règlements intérieurs, organigrammes et procédures RH. Un salarié arrivant répond lui-même à 80% de ses questions sans solliciter la DG.",
    promptExample:
      "Quelles sont les règles de validation budgétaire pour un responsable de commission régionale ?",
    impact: "medium",
    impactLabel: "Impact opérationnel — Gain de temps DG",
  },
  {
    id: 6,
    categories: ["equipe"],
    title: "Débrief automatisé des réunions de direction",
    description:
      "Importer le transcript audio ou le PV brut d'une réunion CODIR. Générer automatiquement le compte-rendu structuré, les décisions et les actions avec responsables.",
    promptExample:
      "Extrait toutes les décisions prises et les points d'action avec leur responsable et leur deadline.",
    impact: "medium",
    impactLabel: "Impact opérationnel — 2h économisées/réunion",
  },
  {
    id: 7,
    categories: ["equipe", "performance"],
    title: "Base de connaissances pour les DTN et entraîneurs",
    description:
      "Centraliser études scientifiques, règlements techniques IJF et analyses vidéo transcrites. Permettre aux coachs de questionner la littérature scientifique sans la lire intégralement.",
    promptExample:
      "Quelles données sur la récupération post-compétition sont validées pour les judokas de -66kg ?",
    impact: "high",
    impactLabel: "Impact élevé — Performance sportive",
  },
  {
    id: 8,
    categories: ["equipe", "gouvernance"],
    title: "FAQ vivante pour les 5 000 clubs affiliés",
    description:
      "Charger règlements d'affiliation, licences, assurances et procédures disciplinaires. Les ligues régionales disposent d'un assistant qui répond aux clubs 24h/24.",
    promptExample:
      "Un club peut-il organiser un stage interclubs payant sans déclaration préalable à la ligue ?",
    impact: "medium",
    impactLabel: "Impact opérationnel — Désengorgement juridique",
  },
  {
    id: 9,
    categories: ["communication", "president"],
    title: "Génération du rapport annuel fédéral (Audio + Doc)",
    description:
      "Charger tous les bilans de direction. Générer un Audio Overview de 12 minutes pour diffuser auprès des élus régionaux, et un résumé exécutif structuré.",
    promptExample:
      "Génère un podcast de synthèse à destination des présidents de ligues qui n'ont pas lu le rapport complet.",
    impact: "medium",
    impactLabel: "Impact communication — Rayonnement interne",
  },
  {
    id: 10,
    categories: ["communication"],
    title: "Veille médiatique et analyse de la couverture presse",
    description:
      "Importer revues de presse hebdomadaires et articles sur le judo. Identifier les narratifs dominants, sujets sensibles et angles d'amélioration de l'image fédérale.",
    promptExample:
      "Quels thèmes négatifs reviennent le plus dans la couverture du judo français depuis 6 mois ?",
    impact: "high",
    impactLabel: "Impact élevé — Gestion réputationnelle",
  },
  {
    id: 11,
    categories: ["communication", "equipe"],
    title: "Production de contenus pédagogiques pour la formation",
    description:
      "Charger les référentiels de formation fédérale (JUDO1, JUDO2, DAN). Générer fiches de révision, quiz et mind maps pour les candidats aux brevets fédéraux.",
    promptExample:
      "Crée un quiz de 15 questions sur la biomécanique du tai-otoshi à partir du référentiel technique.",
    impact: "medium",
    impactLabel: "Impact formation — Scalabilité pédagogique",
  },
  {
    id: 12,
    categories: ["communication", "president"],
    title: "Préparation des discours et prises de position publiques",
    description:
      "Charger l'ensemble des discours passés et engagements publics. Garantir la cohérence du message dans le temps et générer des drafts en accord avec la ligne fédérale.",
    promptExample:
      "Rédige une prise de position sur la réforme du sport scolaire en cohérence avec mes interventions des 3 dernières années.",
    impact: "high",
    impactLabel: "Impact critique — Cohérence & image",
  },
  {
    id: 13,
    categories: ["performance", "equipe"],
    title: "Scouting technique des adversaires olympiques",
    description:
      "Importer rapports d'analyse vidéo, transcriptions de conférences techniques et statistiques de compétition. Créer des fiches adversaires interrogeables avant chaque Grand Slam.",
    promptExample:
      "Quelles sont les tendances de judo au sol de Daria Bilodid selon nos analyses des 12 derniers mois ?",
    impact: "high",
    impactLabel: "Impact critique — Résultats olympiques",
  },
  {
    id: 14,
    categories: ["performance"],
    title: "Suivi médical et scientifique des athlètes de haut niveau",
    description:
      "Centraliser protocoles médicaux, études sur la prévention des blessures et bilans de préparation physique. Permettre au staff médical d'interroger la littérature ciblée.",
    promptExample:
      "Quelles interventions préventives sont documentées pour les lésions des ligaments croisés en judo féminin ?",
    impact: "high",
    impactLabel: "Impact critique — Santé athlètes",
  },
  {
    id: 15,
    categories: ["performance", "equipe"],
    title: "Analyse des cycles olympiques et planification quadriennale",
    description:
      "Charger bilans Tokyo 2020 et Paris 2024, objectifs Los Angeles 2028 et plans de développement des catégories. Générer une carte mentale des priorités et des risques identifiés.",
    promptExample:
      "Quelles catégories présentent le plus grand écart entre notre niveau actuel et les médaillables de Los Angeles ?",
    impact: "high",
    impactLabel: "Impact stratégique — Cycle 2028",
  },
  {
    id: 16,
    categories: ["gouvernance"],
    title: "Audit des procédures disciplinaires et jurisprudence interne",
    description:
      "Charger l'ensemble des décisions de la commission de discipline des 5 dernières années. Identifier jurisprudences, incohérences de traitement et risques d'appel devant le CNOSF.",
    promptExample:
      "Y a-t-il des décisions contradictoires sur des faits similaires entre 2020 et 2024 ?",
    impact: "high",
    impactLabel: "Impact critique — Risque juridique",
  },
  {
    id: 17,
    categories: ["gouvernance", "equipe"],
    title: "Montage et suivi des dossiers de subvention ANS/Ministère",
    description:
      "Importer cahiers des charges des appels à projets, dossiers déposés et bilans d'exécution. Accélérer la rédaction de nouveaux dossiers en cohérence avec les engagements passés.",
    promptExample:
      "Rédige le chapitre 'cohérence avec les priorités ministérielles' en t'appuyant sur nos bilans 2022-2024.",
    impact: "medium",
    impactLabel: "Impact financier — Ressources fédérales",
  },
  {
    id: 18,
    categories: ["gouvernance", "performance"],
    title: "Intelligence compétitive sur les fédérations rivales (IJF)",
    description:
      "Charger rapports publics, discours et positions des fédérations japonaise, coréenne et géorgienne. Cartographier leurs stratégies d'influence à l'IJF et anticiper leurs mouvements.",
    promptExample:
      "Quelles positions la fédération coréenne a-t-elle défendues sur le règlement golden score depuis 2022 ?",
    impact: "high",
    impactLabel: "Impact stratégique — Influence IJF",
  },
  {
    id: 19,
    categories: ["gouvernance", "communication"],
    title: "Synthèse des enquêtes de satisfaction licenciés & clubs",
    description:
      "Importer verbatims, résultats d'enquêtes et remontées terrain des ligues. Générer une analyse thématique des irritants majeurs et attentes prioritaires pour le plan stratégique.",
    promptExample:
      "Quels sont les 5 principaux motifs d'insatisfaction mentionnés par les clubs de moins de 50 membres ?",
    impact: "medium",
    impactLabel: "Impact développement — Rétention membres",
  },
  {
    id: 20,
    categories: ["president", "gouvernance", "performance"],
    title: "Cerveau externe du Président — carnet de bord stratégique",
    description:
      "Carnet unique et confidentiel : engagements publics, décisions de bureau, notes stratégiques, bilans d'entretiens clés. Garantit cohérence et mémoire institutionnelle sur 4 ans de mandat.",
    promptExample:
      "Qu'ai-je dit sur la question de l'arbitrage vidéo lors du Congrès 2023 et quelles décisions ont suivi ?",
    impact: "high",
    impactLabel: "Impact existentiel — Cohérence du mandat",
  },
];
