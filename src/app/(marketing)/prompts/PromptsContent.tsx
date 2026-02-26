"use client";

/**
 * Contenu client : filtres + grille de prompts.
 *
 * @module app/prompts/PromptsContent
 */

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PromptsFilterBar } from "@/components/prompts/PromptsFilterBar";
import { PromptCard } from "@/components/prompts/PromptCard";
import { PROMPTS } from "@/data/prompts";
import type { PromptCategory } from "@/data/prompts";

export function PromptsContent() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredPrompts =
    activeFilter === "all"
      ? PROMPTS
      : PROMPTS.filter((p) => p.category === (activeFilter as PromptCategory));

  return (
    <>
      <PromptsFilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="prompts-grid">
        {filteredPrompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
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
