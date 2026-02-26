/**
 * Section "À propos du fondateur" — Stéphane Nomis.
 *
 * @module components/marketing/FondateurSection
 */

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Section fondateur : bio + citation stylisée.
 */
export function FondateurSection() {
  return (
    <section className="bg-zinc-100 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <div className="relative mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full">
            <Image
              src="/images/stephene-nomis.png"
              alt="Stéphane Nomis"
              width={112}
              height={112}
              className="object-cover"
              priority
            />
          </div>

          <h2 className="font-display text-2xl font-bold text-zinc-900 md:text-3xl">
            Stéphane Nomis
          </h2>

          <p className="mt-6 text-left text-base leading-relaxed text-zinc-700">
            Cette formation a été créée par Stéphane Nomis, président de France
            Judo, membre du Comité Exécutif de la Fédération Internationale de
            Judo (IJF) et membre du Conseil d&apos;Administration du CNOSF.
          </p>

          <p className="mt-4 text-left text-base leading-relaxed text-zinc-700">
            France Judo a été la première fédération française à déployer
            NotebookLM à l&apos;échelle de ses instances. Cette plateforme
            partage ce qui marche — gratuitement, pour toutes les fédérations.
          </p>

          <blockquote className="mt-8 border-l-4 border-violet-500 bg-white py-4 pl-6 pr-4 text-left italic leading-relaxed text-zinc-800 shadow-sm">
            &quot;Le judo est le 1er sport pourvoyeur de médailles olympiques
            pour la France. Notre organisation interne doit être à la hauteur de
            nos ambitions sportives.&quot;
            <footer className="mt-2 not-italic text-sm text-zinc-600">
              — Stéphane Nomis
            </footer>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
