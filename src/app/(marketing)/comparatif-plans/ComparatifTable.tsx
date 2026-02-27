"use client";

/**
 * Tableau comparatif des plans NotebookLM 2026.
 *
 * @module app/comparatif-plans/ComparatifTable
 */

export function ComparatifTable() {
  return (
    <div className="comparatif-table-wrapper">
      <table className="comparatif-table">
        <thead>
          <tr>
            <th className="comparatif-first-col comparatif-col-free" />
            <th className="comparatif-plan-header comparatif-col-free">
              <span className="comparatif-plan-name">Free</span>
              <span className="comparatif-plan-price">0 €<span>/mois</span></span>
              <span className="comparatif-plan-badge comparatif-badge-free">Compte Google</span>
            </th>
            <th className="comparatif-plan-header comparatif-col-plus">
              <span className="comparatif-plan-name">Plus</span>
              <span className="comparatif-plan-price">~14 €<span>/user/mois</span></span>
              <span className="comparatif-plan-badge comparatif-badge-plus">Workspace Standard</span>
            </th>
            <th className="comparatif-plan-header comparatif-col-pro">
              <span className="comparatif-plan-name">Pro</span>
              <span className="comparatif-plan-price">~20 €<span>/mois</span></span>
              <span className="comparatif-plan-badge comparatif-badge-pro">Google AI Pro</span>
            </th>
            <th className="comparatif-plan-header comparatif-col-ultra">
              <span className="comparatif-plan-name">Ultra</span>
              <span className="comparatif-plan-price">~250 €<span>/mois</span></span>
              <span className="comparatif-plan-badge comparatif-badge-ultra">Google AI Ultra</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* CAPACITÉ */}
          <tr className="comparatif-category-row">
            <td colSpan={5}>📦 Capacité</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Notebooks</td>
            <td className="comparatif-center comparatif-col-free">100</td>
            <td className="comparatif-center comparatif-col-plus">200</td>
            <td className="comparatif-center comparatif-col-pro">500</td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight">500</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Sources / notebook</td>
            <td className="comparatif-center comparatif-col-free">50</td>
            <td className="comparatif-center comparatif-col-plus">100</td>
            <td className="comparatif-center comparatif-col-pro">300</td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight">600</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Taille max / source</td>
            <td className="comparatif-center comparatif-col-free" colSpan={4} style={{ color: "var(--color-text-muted)" }}>
              500 000 mots ou 200 MB (identique sur tous les plans)
            </td>
          </tr>

          {/* LIMITES QUOTIDIENNES */}
          <tr className="comparatif-category-row">
            <td colSpan={5}>⏱️ Limites quotidiennes</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Chat / jour</td>
            <td className="comparatif-center comparatif-col-free">50</td>
            <td className="comparatif-center comparatif-col-plus">~500</td>
            <td className="comparatif-center comparatif-col-pro">~1 000</td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight">5 000</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Audio Overviews / jour</td>
            <td className="comparatif-center comparatif-col-free">3</td>
            <td className="comparatif-center comparatif-col-plus">20</td>
            <td className="comparatif-center comparatif-col-pro">50</td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight">200</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Video Overviews / jour</td>
            <td className="comparatif-center comparatif-col-free">10</td>
            <td className="comparatif-center comparatif-col-plus">~20</td>
            <td className="comparatif-center comparatif-col-pro">~50</td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight">200</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Deep Research / jour</td>
            <td className="comparatif-center comparatif-col-free">10 <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>/mois</span></td>
            <td className="comparatif-center comparatif-col-plus">~20</td>
            <td className="comparatif-center comparatif-col-pro">~50</td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight">200</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Rapports / Flashcards / Quiz / jour</td>
            <td className="comparatif-center comparatif-col-free">10</td>
            <td className="comparatif-center comparatif-col-plus">~50</td>
            <td className="comparatif-center comparatif-col-pro">~200</td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight">1 000</td>
          </tr>

          {/* FONCTIONNALITÉS CORE */}
          <tr className="comparatif-category-row">
            <td colSpan={5}>🔧 Fonctionnalités core</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">RAG sur documents perso</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Audio Overview (podcast IA)</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Video Overviews</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Slide Decks (présentations IA)</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-partial">Limité + watermark</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-partial">Limité + watermark</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight-green">✓ Sans watermark</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Infographies</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-partial">Watermark</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-partial">Watermark</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight-green">✓ Sans watermark</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Mind Maps</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Flashcards & Quiz</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Deep Research (web auto)</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Data Tables (export Google Sheets)</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>

          {/* PERSONNALISATION & COLLABORATION */}
          <tr className="comparatif-category-row">
            <td colSpan={5}>⚙️ Personnalisation & Collaboration</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Personnalisation ton / longueur réponses</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-cross">✗</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Notebooks partagés (équipe)</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-cross">✗</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Analytics d&apos;usage</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-cross">✗</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Accès anticipé nouvelles fonctions</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-cross">✗</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight">✓ Prioritaire</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Modèle Gemini utilisé</td>
            <td className="comparatif-center comparatif-col-free" style={{ color: "var(--color-text-muted)" }}>Gemini standard</td>
            <td className="comparatif-center comparatif-col-plus" style={{ color: "#93c5fd" }}>Gemini avancé</td>
            <td className="comparatif-center comparatif-col-pro" style={{ color: "#38bdf8" }}>Gemini Pro</td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight">Gemini 3 (meilleur)</td>
          </tr>

          {/* SÉCURITÉ ENTREPRISE */}
          <tr className="comparatif-category-row">
            <td colSpan={5}>🔐 Sécurité & Entreprise</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Contrôles confidentialité avancés</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-cross">✗</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">VPC-SC & IAM (sécurité enterprise)</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-cross">✗</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-cross">✗</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-partial">Partiel</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Données non utilisées pour entraînement</td>
            <td className="comparatif-center comparatif-col-free" colSpan={4} style={{ color: "var(--color-success)", textAlign: "center" }}>
              ✓ Sur tous les plans
            </td>
          </tr>

          {/* INCLUS */}
          <tr className="comparatif-category-row">
            <td colSpan={5}>🎁 Inclus dans l&apos;abonnement</td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Gemini Advanced (assistant IA)</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-cross">✗</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Gemini dans Gmail / Docs</td>
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-cross">✗</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-check">✓</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-check">✓</span></td>
          </tr>
          <tr>
            <td className="comparatif-feature-col comparatif-col-free">Stockage Google Drive</td>
            <td className="comparatif-center comparatif-col-free" style={{ color: "var(--color-text-muted)" }}>15 GB</td>
            <td className="comparatif-center comparatif-col-plus" style={{ color: "#93c5fd" }}>Variable Workspace</td>
            <td className="comparatif-center comparatif-col-pro" style={{ color: "#38bdf8" }}>2 TB</td>
            <td className="comparatif-center comparatif-col-ultra comparatif-highlight">2 TB+</td>
          </tr>

          {/* CTA */}
          <tr className="comparatif-cta-row">
            <td className="comparatif-col-free" />
            <td className="comparatif-center comparatif-col-free"><span className="comparatif-btn comparatif-btn-free">Gratuit</span></td>
            <td className="comparatif-center comparatif-col-plus"><span className="comparatif-btn comparatif-btn-plus">À partir de 14 €/mois</span></td>
            <td className="comparatif-center comparatif-col-pro"><span className="comparatif-btn comparatif-btn-pro">~20 €/mois</span></td>
            <td className="comparatif-center comparatif-col-ultra"><span className="comparatif-btn comparatif-btn-ultra">~250 €/mois</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
