/**
 * Page d'accueil — Landing page NotebookLM Académie.
 *
 * Structure :
 * 1. Hero — Accroche + CTA
 * 2. Fondateur — À propos de Stéphane Nomis
 * 3. Témoignage — Placeholder
 * 4. Modules — 4 parcours
 * 5. Blocs réassurance — 3 problèmes / solutions
 * 6. Newsletter CTA
 *
 * @module app/page
 */

import Link from "next/link";
import { ArrowRight, Database, Brain, PlayCircle, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BlocsReassurance } from "@/components/marketing/BlocsReassurance";
import { FondateurSection } from "@/components/marketing/FondateurSection";
import { TemoignageBloc } from "@/components/marketing/TemoignageBloc";
import { NewsletterForm } from "@/components/marketing/NewsletterForm";
import { MODULES } from "@/config/modules";

/** Mapping des icônes par nom */
const ICONS = {
  database: Database,
  brain: Brain,
  "play-circle": PlayCircle,
  "graduation-cap": GraduationCap,
} as const;

/** Styles des badges par module (Tailwind nécessite des classes complètes) */
const MODULE_BADGE_STYLES: Record<string, { badge: string; icon: string }> = {
  "module-1": { badge: "bg-module-1/10", icon: "text-module-1" },
  "module-2": { badge: "bg-module-2/10", icon: "text-module-2" },
  "module-3": { badge: "bg-module-3/10", icon: "text-module-3" },
  "module-4": { badge: "bg-module-4/10", icon: "text-module-4" },
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 px-6 py-24 md:py-32">
        {/* Glow subtil */}
        <div className="hero-glow" aria-hidden />
        <div
          className="absolute inset-0 bg-violet-600/10 blur-[130px] pointer-events-none"
          aria-hidden
        />
        <div className="hero-gradient-overlay" aria-hidden />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="inline-block rounded border border-violet-500/30 bg-violet-500/5 px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-violet-400">
            Formation gratuite pour les fédérations sportives
          </span>

          <h1 className="mt-8 font-display text-5xl font-black leading-tight tracking-tighter text-white md:text-7xl">
            Votre fédération perd sa mémoire tous les 4 ans.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Changement d&apos;élus, départ d&apos;un DG, turnover des équipes — les
            décisions passées, les règlements interprétés, les engagements pris
            disparaissent avec eux. NotebookLM est le cerveau collectif de votre
            fédération. Gratuit, fiable, sans hallucination.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/modules/architecte-donnees"
              className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white shadow-violet transition-all duration-200 hover:bg-violet-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Voir comment ça marche
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:border-violet-500/50 hover:text-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Voir les modules
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA CAS D'USAGE ───────────────────── */}
      <section className="cta-cas-usage">
        <div className="cta-inner">
          <p className="cta-eyebrow">Cas d&apos;usage</p>
          <h2>
            20 façons concrètes d&apos;utiliser
            <br />
            NotebookLM dans votre fédération
          </h2>
          <p className="cta-desc">
            Présidence, DTN, communication, gouvernance — des cas d&apos;usage
            opérationnels avec prompts prêts à l&apos;emploi.
          </p>
          <Link href="/cas-usage" className="btn-accent">
            Voir les 20 cas d&apos;usage →
          </Link>
        </div>
      </section>

      {/* ── FONDATEUR ─────────────────────────── */}
      <FondateurSection />

      {/* ── TÉMOIGNAGE ────────────────────────── */}
      <TemoignageBloc />

      {/* ── MODULES ───────────────────────────── */}
      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-display text-4xl font-black italic uppercase leading-none tracking-tighter md:text-6xl">
                <span className="text-white">4 modules</span>
                <br />
                <span className="text-white">pour les</span>
                <br />
                <span className="inline-block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">fédérations</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-zinc-400">
                De la curation des règlements à la production de supports,
                maîtrisez NotebookLM pour transformer votre gouvernance.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((mod, index) => {
              const Icon = ICONS[mod.icon as keyof typeof ICONS] ?? Database;
              const styles = MODULE_BADGE_STYLES[mod.color] ?? {
                badge: "bg-module-1/10",
                icon: "text-module-1",
              };

              return (
                <ScrollReveal key={mod.id} delay={100 * index}>
                  <Link
                    href={`/modules/${mod.slug}`}
                    className="group relative block rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50"
                  >
                    {/* Badge module */}
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${styles.badge}`}
                    >
                      <Icon className={`h-6 w-6 ${styles.icon}`} />
                    </div>

                    {/* Contenu */}
                    <div className="mt-6">
                      <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                        Module {mod.order} · {mod.level}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-bold text-white">
                        {mod.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {mod.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm text-zinc-500">
                        {mod.duration} · {mod.parts.length} parties
                      </span>
                      {mod.isFree && (
                        <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                          Gratuit
                        </span>
                      )}
                    </div>

                    {/* Hover arrow */}
                    <ArrowRight className="absolute right-6 top-8 h-5 w-5 text-zinc-500 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-violet-400" />
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BLOCS RÉASSURANCE ─────────────────── */}
      <BlocsReassurance />

      {/* ── NEWSLETTER CTA ────────────────────── */}
      <section className="bg-zinc-950 px-6 py-24">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900 p-12 text-center text-white transition-all duration-300 hover:border-violet-500/50">
            <h2 className="font-display text-3xl font-bold">
              Restez informé
            </h2>
            <p className="mt-4 text-zinc-400">
              Recevez les nouveautés pour les fédérations sportives :
              modules, cas d&apos;usage et retours d&apos;expérience.
            </p>

            <div className="mt-8">
              <NewsletterForm source="homepage" />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
