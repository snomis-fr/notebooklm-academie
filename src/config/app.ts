/**
 * Configuration centralisée — NotebookLM Académie.
 *
 * Toutes les constantes et variables d'environnement validées ici.
 * Ne JAMAIS lire process.env directement ailleurs dans le code.
 *
 * @module config/app
 */

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variable d'environnement manquante : ${name}`);
  }
  return value;
}

export const config = {
  appName: "NotebookLM Académie",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  appDescription:
    "La plateforme de référence pour maîtriser Google NotebookLM — du débutant à l'expert.",

  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    get serviceRoleKey(): string {
      return getEnvVar("SUPABASE_SERVICE_ROLE_KEY");
    },
  },

  /** Liens sociaux et contact */
  links: {
    twitter: "https://twitter.com/notebooklm_academie",
    linkedin: "https://linkedin.com/company/notebooklm-academie",
    email: "contact@notebooklm-academie.com",
  },

  /** Navigation principale */
  navigation: {
    main: [
      { label: "Modules", href: "/modules" },
      { label: "Blog", href: "/blog" },
      { label: "À propos", href: "/a-propos" },
    ],
    cta: { label: "Commencer gratuitement", href: "/modules/architecte-donnees" },
  },

  /** SEO defaults */
  seo: {
    defaultTitle: "NotebookLM Académie — Maîtrisez l'IA appliquée à vos connaissances",
    titleTemplate: "%s | NotebookLM Académie",
    defaultDescription:
      "Apprenez à transformer vos documents en intelligence actionnable avec Google NotebookLM. 3 parcours progressifs, du débutant à l'expert.",
  },
} as const;
