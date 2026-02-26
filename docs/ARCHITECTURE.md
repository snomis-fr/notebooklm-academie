# Architecture — NotebookLM Académie

## Vue d'ensemble

Plateforme e-learning construite en 3 phases, avec un socle technique pensé
dès le jour 1 pour supporter l'ensemble du parcours.

## Stack technique

| Couche | Technologie | Pourquoi |
|--------|-------------|----------|
| Framework | Next.js 14 (App Router) | SSR/SSG pour le SEO, routing avancé, Server Components |
| Langage | TypeScript (strict) | Sécurité du typage, DX, refactoring fiable |
| Base de données | Supabase (PostgreSQL) | Auth intégrée, RLS, temps réel, SDK simple |
| ORM | Prisma | Types auto-générés, migrations, requêtes sûres |
| Styling | Tailwind CSS | Utility-first, design system cohérent, pas de CSS orphelin |
| Animations | CSS @keyframes + Framer Motion | Micro-interactions premium |
| Fonts | Plus Jakarta Sans + DM Sans | Premium, lisible, distinctive |
| Icons | Lucide React | Cohérent, léger, bien maintenu |
| Email | Resend (Phase 2) | API moderne, templates React |
| Paiement | Stripe (Phase 2) | Standard industrie, webhooks fiables |
| Tests | Vitest + Playwright | Rapide (unit), fiable (E2E) |
| Déploiement | Vercel | Intégration native Next.js, preview deploys |
| Repo | GitHub | Standard industrie, Actions CI/CD |

## Architecture applicative

```
┌─────────────────────────────────────────────────────────────┐
│                    NEXT.JS APP ROUTER                        │
│                                                              │
│  (marketing)/*          │         (platform)/*               │
│  Pages publiques        │         Pages authentifiées         │
│  SSG/ISR pour SEO       │         SSR avec auth check         │
│                         │                                     │
├─────────────────────────┴─────────────────────────────────────┤
│                      COMPONENTS                               │
│   ui/        layout/       marketing/        course/          │
│   primitifs  structure     landing           e-learning       │
├───────────────────────────────────────────────────────────────┤
│                   HOOKS + SERVICES                            │
│   useAuth    useCourse     courseService     userService      │
├───────────────────────────────────────────────────────────────┤
│               SUPABASE (PostgreSQL + Auth + Storage)          │
└───────────────────────────────────────────────────────────────┘
```

## Modèle de données

### Phase 1
```
Newsletter_Subscribers
├── id (uuid, PK)
├── email (unique)
├── source (text) — d'où vient l'inscrit
├── created_at (timestamp)
└── confirmed (boolean)

Modules (contenu statique en Phase 1, BDD en Phase 2)
├── id (uuid, PK)
├── slug (unique)
├── title
├── description
├── order (int)
└── is_free (boolean)
```

### Phase 2 (prévu, pas implémenté)
```
Users ← Supabase Auth
├── Profile (fullName, avatar, role)
├── Subscriptions (Stripe)
└── Progress (module_id, part_id, completed_at)

Modules → Parts → Lessons → Activities
```

## Route Groups

**`(marketing)/`** — Pages publiques, optimisées SEO (SSG/ISR)
- `/` — Landing page
- `/modules` — Catalogue des 3 parcours
- `/modules/[slug]` — Détail d'un module
- `/blog` — Articles (SEO)
- `/a-propos` — Page à propos

**`(platform)/`** — Pages authentifiées (Phase 2)
- `/dashboard` — Tableau de bord utilisateur
- `/cours/[moduleSlug]/[partSlug]` — Player de cours

## Design System

Voir `.cursorrules` pour les directives complètes. Résumé :

- **Palette** : Navy + Coral/Amber + Off-white
- **Typographie** : Plus Jakarta Sans (titres) + DM Sans (corps)
- **Espacement** : Généreux (py-20 à py-32 entre sections)
- **Coins** : rounded-2xl partout
- **Ombres** : Subtiles, shadow-sm → shadow-md au hover
- **Animations** : Fade-in au scroll, hover lift sur les cartes

## Décisions architecturales (ADR)

### ADR-001 : Route Groups pour séparer marketing / platform
- **Date** : Jour 1
- **Décision** : Utiliser les Route Groups Next.js `(marketing)` et `(platform)`
- **Raison** : Layouts différents (marketing = footer complet, platform = sidebar),
  middlewares séparés (platform = auth required), et clarté du code

### ADR-002 : Contenu statique en Phase 1, BDD en Phase 2
- **Date** : Jour 1
- **Décision** : Les 3 modules sont définis dans `src/config/modules.ts` en Phase 1
- **Raison** : Pas besoin d'un CMS pour 3 modules. Migrer vers Supabase en Phase 2
  quand le contenu deviendra dynamique

### ADR-003 : Tailwind CSS + CSS variables pour le design system
- **Date** : Jour 1
- **Décision** : Couleurs et fonts dans `globals.css` via CSS variables, consommées par Tailwind
- **Raison** : Un seul endroit pour changer le thème, Tailwind consomme les variables

---

*Mettre à jour ce document à chaque décision structurante.*
