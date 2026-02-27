/**
 * Page Cas d'Usage — Carnet Antidopage NotebookLM.
 *
 * @module app/cas-usage/page
 */

import { CasUsageContent } from "./CasUsageContent";

export const metadata = {
  title: "Cas d'usage — Carnet Antidopage",
  description:
    "11 cas d'usage concrets de NotebookLM pour le Carnet Antidopage : formation présidents, athlètes, procédures, conformité WADA/AFLD, communication de crise.",
};

export default function CasUsagePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* PageHero */}
      <section className="page-hero">
        <span className="eyebrow">
          ● Carnet Antidopage · France Judo
        </span>
        <h1>
          Cas d&apos;usage
          <br />
          <span className="accent">NotebookLM</span>
        </h1>
        <p className="hero-sub">
          11 cas concrets pour exploiter le Carnet Antidopage : formation,
          procédures, conformité, communication
        </p>
        <div className="hero-stats">
          <div className="stat">
            <strong>11</strong>
            <span>Cas d&apos;usage</span>
          </div>
          <div className="stat">
            <strong>3</strong>
            <span>Publics cibles</span>
          </div>
          <div className="stat">
            <strong>WADA</strong>
            <span>+ AFLD</span>
          </div>
        </div>
      </section>

      <CasUsageContent />
    </div>
  );
}
