/**
 * Page 100 Prompts — prompts NotebookLM pour fédérations sportives.
 *
 * @module app/prompts/page
 */

import { PromptsContent } from "./PromptsContent";

export const metadata = {
  title: "100 Prompts",
  description:
    "100 prompts prêts à l'emploi pour NotebookLM : stratégie, gouvernance, performance, formation, communication, finance... pour les fédérations sportives.",
};

export default function PromptsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="page-hero">
        <span className="eyebrow">
          ● Formation NotebookLM · Fédérations Sportives
        </span>
        <h1>
          100 Prompts
          <br />
          <span className="accent">NotebookLM</span>
        </h1>
        <p className="hero-sub">
          Prompts prêts à copier, sources à charger : une bibliothèque complète
          pour exploiter NotebookLM dans tous les métiers de la fédération
        </p>
        <div className="hero-stats">
          <div className="stat">
            <strong>100</strong>
            <span>Prompts</span>
          </div>
          <div className="stat">
            <strong>13</strong>
            <span>Catégories</span>
          </div>
          <div className="stat">
            <strong>2-5</strong>
            <span>Sources / prompt</span>
          </div>
          <div className="stat">
            <strong>1 clic</strong>
            <span>Copier</span>
          </div>
        </div>
      </section>

      <PromptsContent />
    </div>
  );
}
