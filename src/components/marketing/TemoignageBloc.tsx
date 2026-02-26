/**
 * Bloc témoignage fictif (placeholder) — homepage.
 *
 * @module components/marketing/TemoignageBloc
 */

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Quote } from "lucide-react";

/**
 * Carte témoignage avec bordure gauche colorée.
 */
export function TemoignageBloc() {
  return (
    <section className="bg-zinc-100 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="flex">
              <div className="w-1 shrink-0 bg-violet-500" aria-hidden />
              <div className="flex-1 p-8">
                <Quote className="h-8 w-8 text-violet-200" aria-hidden />
                <p className="mt-4 font-display text-lg leading-relaxed text-zinc-800">
                  On a chargé 5 ans de PV de CA. Maintenant n&apos;importe quel
                  élu retrouve n&apos;importe quelle décision en 30 secondes.
                </p>
                <p className="mt-4 text-sm font-medium text-zinc-600">
                  Président d&apos;une fédération olympique française
                </p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center italic text-sm text-zinc-500">
            (Témoignage à compléter avec vos retours pilotes)
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
