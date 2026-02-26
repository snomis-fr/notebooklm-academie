/**
 * Catalogue des 3 parcours — Page /modules.
 *
 * @module app/modules/page
 */

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ModuleCard } from "@/components/course/ModuleCard";
import { MODULES } from "@/config/modules";

export const metadata = {
  title: "Modules",
  description:
    "Formation NotebookLM pour fédérations sportives — 4 modules de la curation à la production de supports.",
};

export default function ModulesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-bg)] px-6 py-20 md:py-28">
        <div className="hero-gradient-overlay" aria-hidden />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-6xl">
            NotebookLM pour les fédérations
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Règlements, rapports, comités — centralisez et diffusez le savoir.
            Convainquez les instances des bienfaits de l&apos;IA ancrée dans vos données.
          </p>
        </div>
      </section>

      {/* Grille des modules */}
      <section className="bg-[var(--color-bg-alt)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((mod, index) => (
              <ScrollReveal key={mod.id} delay={100 * index}>
                <ModuleCard module={mod} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
