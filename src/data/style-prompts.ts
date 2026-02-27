/**
 * 16 directives de style pour NotebookLM — fins de prompts à coller.
 *
 * @module data/style-prompts
 */

export interface StylePrompt {
  id: number;
  title: string;
  prompt: string;
}

export const STYLE_PROMPTS: StylePrompt[] = [
  {
    id: 1,
    title: "Équipe de France",
    prompt: `Style maillot bleu, fierté nationale pure : fond bleu roi (#0033A0) dominant, titres et encadrés en blanc pur (#FFFFFF), accents rouge vif (#EF1922) pour les chiffres clés, les alertes et les moments forts. Typographie bold, sans-serif, puissante — comme un numéro floqué dans le dos. Étoiles dorées discrètes en décoration de section. Pas de demi-mesure : chaque information doit avoir la clarté et l'impact d'une annonce de liste du sélectionneur. Le style qui fait lever les stades.`,
  },
  {
    id: 2,
    title: "Institutionnel Prestige",
    prompt: `Présente ce contenu dans un style rapport officiel français : fond blanc cassé, titres en bleu marine (#003189), accents en rouge vif (#ED2939), typographie sobre façon Légifrance. Hiérarchie claire, aucune fantaisie visuelle. L'autorité passe par la rigueur.`,
  },
  {
    id: 3,
    title: "Olympic Gold",
    prompt: `Style podium olympique : fond noir profond, texte blanc, accents or (#FFD700) pour les titres et encadrés clés. Touches de bleu roi pour les sous-sections. Énergie, performance, excellence. Chaque information doit sembler mériter une médaille.`,
  },
  {
    id: 4,
    title: "Tech Tricolore",
    prompt: `Esthétique startup française : fond gris anthracite (#1C1C1E), gradient bleu-blanc-rouge en filet horizontal sur les headers, typo sans-serif moderne. Badges colorés pour les catégories. L'image d'une French Tech qui gagne.`,
  },
  {
    id: 5,
    title: "Minimalisme Diplomatique",
    prompt: `Sobre et puissant : fond blanc pur, une seule couleur d'accent — bleu électrique (#0055A4). Beaucoup d'espace vide. Titres en majuscules espacées. Chiffres clés en très grande taille. Le style d'un mémo destiné à l'Élysée.`,
  },
  {
    id: 6,
    title: "Marine Nationale",
    prompt: `Palette navale : fond bleu nuit (#001F5B), texte blanc, lignes de séparation blanc cassé, accents rouge bordeaux (#8B0000). Pictos géométriques simples. Sérieux, stratégique, discret. Le style d'un briefing confidentiel.`,
  },
  {
    id: 7,
    title: "Warm Tricolore",
    prompt: `Tons chaleureux dérivés du tricolore : bleu pervenche (#4A6FA5), rouge terracotta (#C0392B), crème (#FDF6E3) en fond. Titres en bleu, données en rouge, corps en gris foncé. L'élégance d'un magazine haut de gamme français.`,
  },
  {
    id: 8,
    title: "Dashboard Décisionnel",
    prompt: `Format tableau de bord : fond gris clair (#F5F5F5), cartes blanches avec ombre légère, indicateurs en vert (#27AE60) / orange (#E67E22) / rouge (#C0392B) selon l'urgence. Bleu fédéral (#003189) pour les titres. Le style d'un comité exécutif.`,
  },
  {
    id: 9,
    title: "Éditorial Grand Récit",
    prompt: `Style magazine longform : fond blanc, grande photo ou illustration en header, titre en serif bleu nuit, chapeau en italique gris, citations encadrées en rouge. Comme un article du Monde ou de L'Équipe magazine.`,
  },
  {
    id: 10,
    title: "Nuit de Paris",
    prompt: `Luxe discret : fond noir (#0A0A0A), titres en or rosé (#C9A96E), texte en gris clair (#D0D0D0), ligne d'accent en blanc. Petites touches de bleu cobalt. L'esthétique d'un dossier remis lors d'un dîner institutionnel.`,
  },
  {
    id: 11,
    title: "Infographie Pédagogique",
    prompt: `Style formation & vulgarisation : fond blanc, blocs colorés en bleu (#0055A4), rouge (#ED2939) et gris clair (#EEEEEE). Icônes simples pour chaque section. Flèches de progression. Numéros en grands cercles colorés. Accessible et mémorisable.`,
  },
  {
    id: 12,
    title: "Corporate Atlantique",
    prompt: `Palette inspirée de l'Atlantique : bleu ciel (#5B9BD5), bleu profond (#1A3A6B), blanc glacé, touche de vert émeraude (#1ABC9C) pour les points positifs. Fond légèrement texturé. Carré, professionnel, international — le style d'un rapport BCG.`,
  },
  {
    id: 13,
    title: "Alerte Stratégique",
    prompt: `Quand le contenu est critique : fond blanc, header rouge frappant (#CC0000) avec texte blanc, corps sur fond jaune très pâle (#FFFDE7), accents orange vif. Encadrés d'alerte en rouge. Le style d'une note de risque envoyée en urgence.`,
  },
  {
    id: 14,
    title: "Bleu-Blanc-Or Républicain",
    prompt: `Fierté nationale sublimée : bleu tricolore profond (#002395), blanc pur, et remplacement du rouge par de l'or (#DAA520) pour une touche de prestige. Filets fins, coins carrés, numéros de section bien visibles. Comme une publication officielle de la République.`,
  },
  {
    id: 15,
    title: "Futur Franco-Tech",
    prompt: `Vision prospective : fond blanc avec gradient subtil bleu-violet en arrière-plan, titres en bleu électrique (#0055A4), données en violet (#8E44AD), indicateurs en rouge vif. Typo moderne, espacement généreux. Le style d'un rapport "France 2030".`,
  },
  {
    id: 16,
    title: "Terrain & Action",
    prompt: `Style opérationnel, terrain : fond blanc, blocs d'actions en rouge (#ED2939) bien visibles, statuts en vert/orange/rouge, titres en bleu marine. Pas de fioritures. Chaque ligne doit répondre à "qui fait quoi avant quand". Le format d'un debriefing d'après-compétition.`,
  },
];
