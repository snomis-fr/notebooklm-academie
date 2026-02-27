/**
 * Page Comparatif des plans NotebookLM 2026.
 *
 * @module app/comparatif-plans/page
 */

import { ComparatifTable } from "./ComparatifTable";

export const metadata = {
  title: "Comparatif des plans 2026",
  description:
    "Comparatif des 4 plans NotebookLM : Free, Plus, Pro, Ultra. Capacité, limites quotidiennes, fonctionnalités, sécurité.",
};

export default function ComparatifPlansPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="page-hero page-hero-compact">
        <span className="eyebrow">
          ● NotebookLM · Tarification
        </span>
        <h1>
          Comparatif des plans
          <br />
          <span className="accent">2026</span>
        </h1>
        <p className="hero-sub">
          Mise à jour : Février 2026 · 4 niveaux disponibles
        </p>
      </section>

      <div className="comparatif-wrapper">
        <ComparatifTable />
      </div>

      <p className="comparatif-note">
        Certaines limites quotidiennes sont estimées d&apos;après les retours utilisateurs — Google ne les publie pas officiellement. Tarifs en USD convertis approximativement. · Sources : workspaceupdates.googleblog.com, xda-developers.com, elephas.app, youreverydayai.com
      </p>
    </div>
  );
}
