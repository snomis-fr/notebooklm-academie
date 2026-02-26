"use client";

/**
 * Contenu client : filtres + grille de cas d'usage.
 *
 * @module app/cas-usage/CasUsageContent
 */

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FilterBar } from "@/components/cas-usage/FilterBar";
import { UseCaseCard } from "@/components/cas-usage/UseCaseCard";
import { USE_CASES } from "@/data/usecases";
import type { UseCaseCategory } from "@/data/usecases";

export function CasUsageContent() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCases =
    activeFilter === "all"
      ? USE_CASES
      : USE_CASES.filter((uc) =>
          uc.categories.includes(activeFilter as UseCaseCategory)
        );

  return (
    <>
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div className="usecases-grid">
        {filteredCases.map((useCase) => (
          <UseCaseCard key={useCase.id} useCase={useCase} />
        ))}
      </div>

      <section className="border-t border-zinc-800 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 bg-transparent px-8 py-4 font-semibold text-white transition-all hover:border-violet-500/50 hover:text-violet-400"
          >
            Voir les modules de formation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
