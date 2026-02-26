# 🎓 NotebookLM Académie

> La plateforme de référence pour maîtriser Google NotebookLM — du débutant à l'expert.

## Table des matières

- [À propos](#à-propos)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Lancement](#lancement)
- [Structure du projet](#structure-du-projet)
- [Scripts disponibles](#scripts-disponibles)
- [Variables d'environnement](#variables-denvironnement)
- [Déploiement](#déploiement)
- [Contribution](#contribution)

## À propos

NotebookLM Académie est une plateforme e-learning qui enseigne la maîtrise de Google NotebookLM à travers 3 parcours progressifs :

1. **L'Architecte de Données** — Maîtriser l'environnement RAG et la curation de sources
2. **Le Spécialiste de la Synthèse** — Transformer la lecture passive en dialogue actif
3. **Le Créateur Multimédia** — Produire des livrables Audio, Vidéo et Visuels

**Cibles** : Dirigeants, équipes métier, développeurs, étudiants.

## Prérequis

- **Node.js** >= 18.x
- **npm** >= 9.x (ou pnpm >= 8.x)
- **Git**
- Un compte [Supabase](https://supabase.com)
- Un compte [Vercel](https://vercel.com) (déploiement)

## Installation

```bash
# 1. Cloner le repository
git clone https://github.com/VOTRE-ORG/notebooklm-academie.git
cd notebooklm-academie

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos vraies valeurs

# 4. Initialiser la base de données
npx prisma db push
npx prisma generate

# 5. Lancer en développement
npm run dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
src/
├── app/                   → Routes Next.js (App Router)
│   ├── (marketing)/       → Pages publiques (landing, modules, blog)
│   ├── (platform)/        → Pages authentifiées (dashboard, cours)
│   └── api/               → Routes API
├── components/
│   ├── ui/                → Composants primitifs (Button, Input, Card...)
│   ├── layout/            → Structure (Header, Footer, Container)
│   ├── marketing/         → Sections marketing (Hero, Features, CTA)
│   └── course/            → Composants cours (ModuleCard, Progress...)
├── services/              → Accès données et APIs externes
├── hooks/                 → Hooks React personnalisés
├── utils/                 → Fonctions utilitaires pures
├── types/                 → Définitions TypeScript
├── config/                → Configuration centralisée
├── lib/                   → Wrappers librairies tierces
└── styles/                → Fichiers de styles additionnels
```

Voir [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) pour les choix d'architecture détaillés.

## Scripts disponibles

```bash
npm run dev          # Développement avec hot reload
npm run build        # Build de production
npm run start        # Lancer la version de production
npm run lint         # Vérifier la qualité du code
npm run test         # Lancer les tests unitaires
npm run test:e2e     # Lancer les tests end-to-end
npm run type-check   # Vérification TypeScript
npm run format       # Formater le code (Prettier)
npm run check-all    # Lint + types + tests (avant chaque PR)
npm run db:push      # Pousser le schéma vers Supabase
npm run db:studio    # Ouvrir Prisma Studio (GUI base de données)
```

## Variables d'environnement

Voir [.env.example](.env.example) pour la liste complète.

| Variable | Description | Obligatoire |
|----------|-------------|:-----------:|
| `NEXT_PUBLIC_SUPABASE_URL` | URL projet Supabase | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clé publique Supabase | ✅ |
| `SUPABASE_SERVICE_ROLE_KEY` | Clé serveur Supabase | ✅ |
| `NEXT_PUBLIC_APP_URL` | URL de l'application | ✅ |
| `RESEND_API_KEY` | Clé API Resend (emails) | Phase 2 |
| `STRIPE_SECRET_KEY` | Clé secrète Stripe | Phase 2 |
| `STRIPE_WEBHOOK_SECRET` | Secret webhook Stripe | Phase 2 |

## Déploiement

Déploiement automatique via **Vercel** connecté à GitHub :

- Push sur `main` → déploiement production
- Push sur une branche → déploiement preview

```bash
# Vérifier le build avant de pousser
npm run check-all
npm run build
```

## Contribution

1. Créer une branche : `git checkout -b feature/ma-fonctionnalite`
2. Coder en respectant le `.cursorrules`
3. Tester : `npm run check-all`
4. Commits conventionnels : `feat:`, `fix:`, `docs:`, `refactor:`, `test:`
5. Pull Request avec description claire

## Roadmap

- [x] Phase 1 : Site vitrine + capture emails + module démo
- [ ] Phase 2 : Authentification + paiement + contenus protégés
- [ ] Phase 3 : Dashboard avancé + parcours personnalisés + communauté

---

Développé avec ❤️ pour démocratiser la maîtrise de l'IA appliquée à la connaissance.
