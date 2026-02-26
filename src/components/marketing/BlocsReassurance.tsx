/**
 * 3 blocs de réassurance — problèmes fédérations et solutions NotebookLM.
 *
 * @module components/marketing/BlocsReassurance
 */

import { Archive, UserCheck, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const BLOCS = [
  {
    icon: Archive,
    iconBg: "bg-red-500/15",
    iconColor: "text-red-400",
    borderColor: "border-red-500/30",
    title: "Un DG qui part emporte 10 ans de mémoire institutionnelle",
    text: "Avec NotebookLM, elle reste dans le carnet — accessible à tous les élus.",
  },
  {
    icon: UserCheck,
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    title: "Un élu sur deux arrive à son premier CA sans avoir lu les statuts",
    text: "En 10 minutes d'Audio Overview, il est briefé. Avant même d'entrer dans la salle.",
  },
  {
    icon: MessageCircle,
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/30",
    title: "Vos clubs reçoivent des circulaires qu'ils ne lisent pas",
    text: "Avec NotebookLM, ils posent des questions en langage naturel — et obtiennent des réponses ancrées dans vos textes officiels.",
  },
] as const;

/**
 * Section des 3 blocs de réassurance pour la homepage.
 */
export function BlocsReassurance() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {BLOCS.map((bloc, index) => {
            const Icon = bloc.icon;
            return (
              <ScrollReveal key={index} delay={100 * index}>
                <div
                  className={`flex gap-4 rounded-2xl border ${bloc.borderColor} bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-opacity-60`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bloc.iconBg}`}
                  >
                    <Icon className={`h-6 w-6 ${bloc.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold leading-snug text-white">
                      {bloc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {bloc.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
