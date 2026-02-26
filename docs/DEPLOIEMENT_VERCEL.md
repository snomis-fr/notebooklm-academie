# Déploiement sur GitHub et Vercel

## 1. Créer le repository sur GitHub

1. Va sur [github.com/new](https://github.com/new)
2. Remplis :
   - **Repository name** : `notebooklm-academie`
   - **Description** : Plateforme e-learning pour maîtriser Google NotebookLM
   - **Visibility** : Public ou Private
   - Ne coche **pas** « Add a README » (le projet en a déjà un)
3. Clique sur « Create repository »

## 2. Pousser le code sur GitHub

Dans ton terminal, depuis le dossier du projet :

```bash
cd /Users/stephanenomis/Documents/GitHub/notebooklm-academie

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "feat: initial release - NotebookLM Académie"

# Branche main
git branch -M main

# Connecter à ton repo GitHub (remplace TON-USERNAME par ton pseudo GitHub)
git remote add origin https://github.com/TON-USERNAME/notebooklm-academie.git

# Pousser
git push -u origin main
```

## 3. Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com) et connecte-toi (ou crée un compte avec GitHub)
2. Clique sur **Add New** → **Project**
3. Importe le repo `notebooklm-academie`
4. Avant de déployer, configure les **Environment Variables** :

| Variable | Valeur | Où la trouver |
|----------|--------|---------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxx.supabase.co` | Supabase → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJ...` | Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJ...` | Supabase → Settings → API (secret) |
| `NEXT_PUBLIC_APP_URL` | `https://ton-site.vercel.app` | Après le 1er déploiement, remplace par l'URL finale |

5. Clique sur **Deploy**

Chaque push sur `main` déclenchera un nouveau déploiement.

## 4. Domaine personnalisé (optionnel)

1. Vercel → ton projet → **Settings** → **Domains**
2. Ajoute ton domaine (ex. `notebooklm-academie.com`)
3. Suis les instructions DNS (CNAME vers `cname.vercel-dns.com`)

## 5. Variables d'environnement locales vs production

- **En local** : utilise `.env.local` (jamais commitée)
- **Sur Vercel** : ajoute les variables dans le dashboard (Settings → Environment Variables)
