# Documentation API — NotebookLM Académie

## Convention de réponse

```json
{ "data": { ... }, "error": null }       // Succès
{ "data": null, "error": "Message" }      // Erreur
```

## Codes HTTP

| Code | Usage |
|------|-------|
| 200 | Requête réussie |
| 201 | Ressource créée |
| 400 | Données invalides |
| 401 | Non authentifié |
| 403 | Non autorisé |
| 404 | Ressource inexistante |
| 429 | Trop de requêtes (rate limit) |
| 500 | Erreur serveur |

## Endpoints Phase 1

### `GET /api/health`
Health check.
**Réponse** : `{ data: { status: "ok", timestamp: "..." }, error: null }`

### `POST /api/newsletter`
Inscription à la newsletter / liste d'attente.
**Body** : `{ "email": "user@example.com", "source": "homepage" }`
**Réponse 201** : `{ data: { id: "uuid", email: "..." }, error: null }`
**Réponse 400** : `{ data: null, error: "Email invalide" }`
**Rate limit** : 5 requêtes / minute / IP

### `GET /api/courses`
Liste des modules disponibles.
**Réponse** : `{ data: { modules: [...] }, error: null }`

### `GET /api/courses/[slug]`
Détail d'un module.
**Réponse** : `{ data: { module: {...}, parts: [...] }, error: null }`

## Endpoints Phase 2 (prévu)

### `POST /api/auth/register`
### `POST /api/auth/login`
### `POST /api/auth/logout`
### `GET /api/users/me`
### `PATCH /api/users/me`
### `POST /api/checkout`
### `POST /api/webhooks/stripe`
### `GET /api/progress`
### `POST /api/progress`

---

*Ajouter chaque nouvel endpoint au fur et à mesure.*
