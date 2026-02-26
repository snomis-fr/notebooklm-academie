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
    "La formation de référence pour les fédérations sportives. Maîtrisez NotebookLM pour structurer vos règlements, diffuser le savoir et convaincre les instances des bienfaits de l'IA.",

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
      { label: "Cas d'usage", href: "/cas-usage" },
      { label: "Blog", href: "/blog" },
      { label: "À propos", href: "/a-propos" },
    ],
    cta: { label: "Commencer gratuitement", href: "/modules/architecte-donnees" },
  },

  /** SEO defaults */
  seo: {
    defaultTitle: "NotebookLM Académie — L'IA au service des fédérations sportives",
    titleTemplate: "%s | NotebookLM Académie",
    defaultDescription:
      "Formation NotebookLM pour les fédérations sportives : règlements, rapports, veille. Convainquez les instances des bienfaits de l'IA ancrée dans vos données.",
  },
} as const;
