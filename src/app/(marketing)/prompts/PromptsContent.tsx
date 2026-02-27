"use client";

/**
 * Contenu client : recherche + filtres + grille de prompts.
 *
 * @module app/prompts/PromptsContent
 */

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PromptsFilterBar } from "@/components/prompts/PromptsFilterBar";
import { PromptCard } from "@/components/prompts/PromptCard";
import { PROMPTS } from "@/data/prompts";
import type { PromptCategory } from "@/data/prompts";

/**
 * Recherche textuelle dans titre, prompt, usage, catégorie, sport, sources.
 */
function matchesSearch(prompt: (typeof PROMPTS)[0], query: string): boolean {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  const searchable = [
    prompt.title,
    prompt.prompt,
    prompt.usage,
    prompt.category,
    prompt.sportName,
    ...prompt.sources.map((s) => s.label),
  ].join(" ");
  return searchable.toLowerCase().includes(q);
}

export function PromptsContent() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPrompts = useMemo(() => {
    const list =
      activeFilter === "all"
        ? PROMPTS
        : PROMPTS.filter((p) => p.category === (activeFilter as PromptCategory));
    return list.filter((p) => matchesSearch(p, searchQuery));
  }, [activeFilter, searchQuery]);

  return (
    <>
      <PromptsFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        resultsCount={filteredPrompts.length}
      />

      <div className="prompts-grid">
        {filteredPrompts.length > 0 ? (
          filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))
        ) : (
          <div className="prompts-empty">
            <p>Aucun prompt ne correspond à votre recherche.</p>
            <p className="prompts-empty-hint">
              Essayez d&apos;autres mots-clés ou changez de catégorie.
            </p>
          </div>
        )}
      </div>

      <section className="border-t border-zinc-800 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Link
            href="/cas-usage"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 bg-transparent px-8 py-4 font-semibold text-white transition-all hover:border-violet-500/50 hover:text-violet-400"
          >
            Découvrir les 20 cas d&apos;usage
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
