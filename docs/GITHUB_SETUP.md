# Guide GitHub — Mise en place du repository

## Étape 1 : Créer le repository sur GitHub

1. Aller sur [github.com/new](https://github.com/new)
2. Remplir :
   - **Repository name** : `notebooklm-academie`
   - **Description** : "Plateforme e-learning pour maîtriser Google NotebookLM"
   - **Visibility** : Private (recommandé pour le moment)
   - **NE PAS** cocher "Add a README" (on a le nôtre)
   - **NE PAS** ajouter de .gitignore (on a le nôtre)
   - **NE PAS** ajouter de licence pour l'instant
3. Cliquer "Create repository"

## Étape 2 : Initialiser le projet local

```bash
# Se placer dans le dossier du projet
cd notebooklm-academie

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "chore: initial project setup with full architecture"

# Connecter au repository GitHub
git remote add origin https://github.com/VOTRE-USER/notebooklm-academie.git

# Renommer la branche en main
git branch -M main

# Pousser
git push -u origin main
```

## Étape 3 : Protéger la branche main

1. Sur GitHub → Settings → Branches → Add branch protection rule
2. Branch name pattern : `main`
3. Cocher :
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
4. Sauvegarder

## Étape 4 : Connecter Vercel

1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Importer le repository GitHub `notebooklm-academie`
3. Configurer les variables d'environnement (copier depuis .env.local)
4. Déployer

Résultat : chaque push sur `main` → déploiement production automatique.

## Étape 5 : Configurer les secrets GitHub (pour CI/CD)

1. Sur GitHub → Settings → Secrets and variables → Actions
2. Ajouter :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

## Workflow quotidien

```bash
# 1. Créer une branche pour la fonctionnalité
git checkout -b feature/hero-section

# 2. Coder...

# 3. Commiter avec convention
git add .
git commit -m "feat: add hero section with animated entrance"

# 4. Pousser la branche
git push -u origin feature/hero-section

# 5. Créer une Pull Request sur GitHub
# 6. Review + Merge dans main
# 7. Vercel déploie automatiquement
```
