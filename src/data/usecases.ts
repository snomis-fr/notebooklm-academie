/**
 * Données des 11 cas d'usage NotebookLM — Carnet Antidopage.
 *
 * @module data/usecases
 */

export interface UseCase {
  id: number;
  title: string;
  objectif: string;
  formatStudios: string;
  sousFormat: string;
  prompt: string;
  diffusion: string;
  /** Chemin vers l'exemple audio (ex: /audio/xxx.m4a) */
  example?: string;
  /** Chemin vers l'exemple PDF (ex: /documents/xxx.pdf) */
  examplePdf?: string;
}

export const USE_CASES: UseCase[] = [
  {
    id: 1,
    title: "Ce que tout président de club doit savoir",
    objectif:
      "Former les 5 000 présidents de clubs sur leurs obligations antidopage en langage accessible, sans jargon juridique.",
    formatStudios: "Résumé audio",
    sousFormat: "Débat",
    prompt: `Génère un script de podcast de 12 minutes entre deux intervenants (un expert réglementaire et un président de club novice) sur les obligations antidopage d'un club de judo affilié à France Judo. Couvre : les obligations de signalement, la responsabilité du président, les sanctions possibles, et les bonnes pratiques. Utilise un langage accessible, sans jargon juridique. Base-toi uniquement sur les documents du carnet.`,
    diffusion: "Newsletter fédérale, canal présidents de clubs",
    example: "/audio/01_Le_fardeau_antidopage_des_benevoles_du_judo.m4a",
  },
  {
    id: 2,
    title: "Athlète de haut niveau : tes droits et tes obligations",
    objectif:
      "Sensibiliser les judokas de haut niveau sur les whereabouts, les contrôles hors compétition et les médicaments autorisés.",
    formatStudios: "Résumé audio",
    sousFormat: "Débat",
    prompt: `Génère un script de podcast de 10 minutes entre deux voix — un athlète de haut niveau en judo et un médecin fédéral — sur les obligations de localisation (whereabouts), les contrôles hors compétition, les médicaments autorisés et interdits, et les droits de l'athlète en cas de contrôle. Ton concret, direct, sans langue de bois. Sources : documents AMA/WADA et AFLD du carnet.`,
    diffusion: "Pôles France, DTN, entraîneurs nationaux",
    example: "/audio/02_Surveillance_athletes_et_donnees_personnelles.m4a",
  },
  {
    id: 3,
    title: "Que faire en cas de contrôle positif ?",
    objectif:
      "Fournir une procédure de crise claire et sourcée aux DTN, médecins fédéraux et entraîneurs dès la notification d'un résultat anormal.",
    formatStudios: "Rapport",
    sousFormat: "Créer le vôtre",
    prompt: `Rédige un guide opérationnel étape par étape destiné aux DTN, médecins fédéraux et entraîneurs de France Judo, expliquant la procédure complète à suivre dès la notification d'un résultat d'analyse anormal (RAA) jusqu'à la décision disciplinaire finale. Inclure : délais réglementaires, acteurs impliqués, droits de l'athlète, obligations de la fédération, risques de procédure en cas d'erreur. Format : checklist + texte explicatif. Sources : règlement AMA, procédures AFLD, code WADA.`,
    diffusion:
      "Document interne confidentiel — DTN, médecins, direction technique",
  },
  {
    id: 4,
    title: "Matrice de conformité France Judo / WADA / AFLD",
    objectif:
      "Identifier les écarts de conformité entre les obligations WADA, le dispositif AFLD et les pratiques actuelles de France Judo.",
    formatStudios: "Tableau de données + Carte mentale",
    sousFormat: "—",
    prompt: `Crée un tableau comparatif structuré avec 3 colonnes : (1) Obligation réglementaire, (2) Standard WADA/AMA requis, (3) Dispositif AFLD / France Judo correspondant. Identifie pour chaque ligne si la conformité est totale, partielle ou si un écart existe. Ajoute une colonne "Niveau de risque" (faible / moyen / élevé). Couvre les thèmes : contrôles, localisation, TUE, sanctions, formation, gestion des données. Destination : présentation CODIR.`,
    diffusion: "CODIR France Judo, Conseil d'Administration",
    examplePdf: "/documents/04_Standards_Internationaux_Violations_Code_Mondial_Antidopage.pdf",
  },
  {
    id: 5,
    title: "Briefing IJF — Position française sur l'antidopage",
    objectif:
      "Disposer d'un document de positionnement institutionnel en anglais pour les interventions au Comité Exécutif de l'IJF.",
    formatStudios: "Rapport + Présentation",
    sousFormat: "Rapport d'Expertise Juridique",
    prompt: `Rédige un document de positionnement de 2 pages en anglais, destiné à une intervention au Comité Exécutif de l'IJF, synthétisant la position de la France sur la politique antidopage dans le judo. Structure : (1) Cadre national français (AFLD, CNOSF, France Judo), (2) Points de convergence avec le Code WADA, (3) Points de vigilance ou de divergence, (4) Propositions ou recommandations pour le judo international. Ton : institutionnel, factuel, orienté influence. Sources : tous les documents du carnet.`,
    diffusion: "Comité Exécutif IJF, délégations internationales",
    examplePdf: "/documents/05_Rapport_Expertise_Juridique_Positionnement_France_Antidopage_Judo_International.pdf",
  },
  {
    id: 6,
    title: "FAQ antidopage pour les entraîneurs",
    objectif:
      "Donner aux entraîneurs un outil de référence rapide sur les questions terrain les plus fréquentes.",
    formatStudios: "Infographie + Résumé audio + Quiz",
    sousFormat: "Débat pour le résumé audio",
    prompt: `Génère une FAQ de 20 questions-réponses fréquentes que se posent les entraîneurs de judo sur l'antidopage. Couvre : médicaments courants (ibuprofène, corticoïdes, bêtabloquants), suppléments alimentaires à risque, conduite à tenir avant un contrôle, que faire si un athlète oublie une localisation, différence entre compétition et hors compétition, rôle de l'entraîneur dans le dispositif. Format : Question en gras / Réponse courte et sourcée. Niveau de langage : praticien terrain.`,
    diffusion: "Diffusion large clubs, formations de cadres, site France Judo",
    examplePdf: "/documents/FAQ_Guide_Antidopage_pour_les_Entraineurs_de_Judo.pdf",
  },
  {
    id: 7,
    title: "Module de formation e-learning antidopage",
    objectif:
      "Créer un module de formation complet intégrable dans la plateforme e-learning fédérale.",
    formatStudios: "Rapport + Quiz + Fiches d'apprentissage",
    sousFormat: "Guide d'étude",
    prompt: `Rédige un script de formation structuré en 5 modules destiné à être intégré dans une plateforme e-learning fédérale. Module 1 : Comprendre l'antidopage (définitions, acteurs, enjeux). Module 2 : Les substances et méthodes interdites. Module 3 : Les obligations de l'athlète (localisation, TUE, contrôles). Module 4 : Le rôle de la fédération et des clubs. Module 5 : Procédures et sanctions. Pour chaque module : objectifs pédagogiques, contenu, quiz de 3 questions. Durée estimée : 20 minutes au total. Sources : documents AMA, AFLD, CNOSF du carnet.`,
    diffusion: "Plateforme e-learning France Judo, formation obligatoire cadres",
  },
  {
    id: 8,
    title: "Rapport de risque réputationnel",
    objectif:
      "Cartographier les 8 scénarios de crise antidopage susceptibles d'impacter France Judo sur le plan réputationnel.",
    formatStudios: "Rapport",
    sousFormat: "Créer le vôtre",
    prompt: `Analyse les documents du carnet et identifie les 8 scénarios de risque réputationnel majeurs pour une fédération sportive comme France Judo. Pour chaque scénario, précise : (1) Description du scénario, (2) Probabilité (faible/moyenne/élevée), (3) Impact réputationnel (national / international), (4) Base réglementaire concernée (source exacte dans le carnet), (5) Mesures préventives recommandées. Exemples de scénarios : contrôle positif d'un médaillé olympique, manquement répété de localisation, défaillance de procédure fédérale, fuite de données médicales. Destination : Conseil d'Administration France Judo.`,
    diffusion: "Conseil d'Administration, direction générale — document confidentiel",
    examplePdf: "/documents/08_Integrite_au_Coeur_du_Tatami_Risques_Reputationnels_France_Judo.pdf",
  },
  {
    id: 9,
    title: "Comparatif international — Judo vs autres sports",
    objectif:
      "Benchmarker les pratiques antidopage du judo par rapport aux standards WADA et aux autres fédérations olympiques.",
    formatStudios: "Rapport",
    sousFormat: "Guide de Synthèse",
    prompt: `À partir des documents disponibles dans le carnet, réalise un benchmark des pratiques antidopage en comparant : le cadre imposé par le Code WADA universel, les spécificités du judo (IJF), et les pratiques d'autres sports de combat ou sports olympiques si les données sont présentes. Identifie : où le judo est en avance, où il peut progresser, quelles innovations d'autres fédérations méritent d'être adoptées. Format : synthèse narrative de 2 pages + tableau comparatif. Destination : réflexion stratégique IJF.`,
    diffusion: "Comité Exécutif IJF, CNOSF, direction technique nationale",
  },
  {
    id: 10,
    title: "Kit de communication de crise médias",
    objectif:
      "Préparer le service presse de France Judo à répondre rapidement et efficacement en cas de sujet antidopage sensible.",
    formatStudios: "Rapport",
    sousFormat: "Créer le vôtre",
    prompt: `Rédige un kit de communication de crise antidopage destiné au service presse de France Judo. Il doit contenir : (1) Un communiqué de presse type en cas de résultat positif d'un athlète français, (2) Une fiche de 10 questions-réponses pour un porte-parole face aux journalistes, (3) Un rappel des procédures officielles que la fédération est tenue de respecter (pour démontrer sa conformité), (4) Les formulations à éviter absolument. Ton : transparent, factuel, protecteur de l'institution. Sources : règlements AFLD, WADA, CNOSF du carnet.`,
    diffusion: "Service presse, direction générale, cellule communication — document confidentiel",
    examplePdf: "/documents/10_Anti-Doping_Crisis_Kit.pdf",
  },
  {
    id: 11,
    title: "Antidopage et Intelligence Artificielle",
    objectif:
      "Produire un contenu visionnaire positionnant France Judo et Ippon à l'intersection du sport et de l'IA, diffusable en externe.",
    formatStudios: "Résumé audio",
    sousFormat: "Débat",
    prompt: `Génère un script de podcast prospectif de 15 minutes entre un dirigeant de fédération sportive et un expert en intelligence artificielle, sur le thème : "Comment l'IA va transformer l'antidopage dans les 5 prochaines années ?" Couvre : analyse prédictive des profils biologiques, automatisation de la gestion des whereabouts, IA et détection de nouvelles substances, enjeux éthiques et protection des données, opportunités pour les fédérations pionnières. Ancre le propos dans les standards actuels WADA/AFLD présents dans le carnet, puis projette vers l'avenir. Ton : visionnaire mais rigoureux.`,
    diffusion: "Conférences sport-tech, IJF, CNOSF, LinkedIn, médias spécialisés",
  },
];
