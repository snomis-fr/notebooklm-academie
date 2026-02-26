/**
 * Page Cas d'Usage — 20 cas NotebookLM pour fédérations sportives.
 *
 * @module app/cas-usage/page
 */

import { CasUsageContent } from "./CasUsageContent";

export const metadata = {
  title: "Cas d'usage",
  description:
    "20 cas d'usage concrets de NotebookLM pour les fédérations sportives : présidence, équipes, communication, performance, gouvernance.",
};

export default function CasUsagePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* PageHero */}
      <section className="page-hero">
        <span className="eyebrow">
          ● Formation NotebookLM · Fédérations Sportives
        </span>
        <h1>
          20 Cas d&apos;Usage
          <br />
          <span className="accent">NotebookLM</span>
        </h1>
        <p className="hero-sub">
          Intelligence augmentée pour le Président, les Directions et les
          Équipes d&apos;une Fédération Olympique
        </p>
        <div className="hero-stats">
          <div className="stat">
            <strong>20</strong>
            <span>Cas d&apos;usage</span>
          </div>
          <div className="stat">
            <strong>5</strong>
            <span>Domaines</span>
          </div>
          <div className="stat">
            <strong>600k</strong>
            <span>Membres concernés</span>
          </div>
          <div className="stat">
            <strong>0€</strong>
            <span>Coût marginal</span>
          </div>
        </div>
      </section>

      <CasUsageContent />
    </div>
  );
}
