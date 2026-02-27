"use client";

/**
 * Contenu client : prérequis + liste en colonne des cas d'usage (style prompts).
 *
 * @module app/cas-usage/CasUsageContent
 */

import Link from "next/link";
import { ArrowRight, FileCheck } from "lucide-react";
import { UseCaseCard } from "@/components/cas-usage/UseCaseCard";
import { USE_CASES } from "@/data/usecases";

const SOURCES_OFFICIELLES = ["AMA", "WADA", "CNOSF", "IJF", "FFJ", "AFLD"] as const;

export function CasUsageContent() {
  return (
    <div className="cas-usage-layout">
      {/* Prérequis — Carnet propre */}
      <section className="cas-usage-prerequis">
        <div className="prerequis-header">
          <FileCheck className="prerequis-icon" aria-hidden />
          <h2 className="prerequis-title">Prérequis : un carnet propre</h2>
        </div>
        <p className="prerequis-intro">
          Avant d&apos;utiliser les cas ci-dessous, préparez un carnet
          NotebookLM contenant <strong>uniquement des documents officiels</strong>.
          Zéro document non officiel.
        </p>
        <div className="prerequis-sources">
          <span className="prerequis-label">Sources autorisées :</span>
          <ul className="prerequis-list">
            {SOURCES_OFFICIELLES.map((source) => (
              <li key={source}>
                <kbd className="prerequis-kbd">{source}</kbd>
              </li>
            ))}
          </ul>
        </div>
        <p className="prerequis-types">
          Rapports, codes, plans, règlements, procédures — tous les documents
          de référence antidopage issus de ces organismes.
        </p>
      </section>

      {/* Liste des cas en colonne (comme prompts de style) */}
      <div className="cas-usage-list">
        {USE_CASES.map((useCase) => (
          <UseCaseCard key={useCase.id} useCase={useCase} />
        ))}
      </div>

      <section className="cas-usage-cta">
        <div className="cas-usage-cta-inner">
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 bg-transparent px-8 py-4 font-semibold text-white transition-all hover:border-violet-500/50 hover:text-violet-400"
          >
            Voir les modules de formation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
