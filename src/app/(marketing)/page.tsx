/**
 * Page d'accueil — Landing page NotebookLM Académie.
 *
 * Structure :
 * 1. Hero — Accroche principale + CTA (gradient animé)
 * 2. Modules — Les 3 parcours (fade-in au scroll, hover lift)
 * 3. Chiffres clés — Compteurs animés
 * 4. Newsletter CTA — Capture d'email
 *
 * @module app/page
 */

import Link from "next/link";
import { ArrowRight, Database, Brain, PlayCircle, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChiffresCles } from "@/components/marketing/ChiffresCles";
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
            Formation 100% gratuite — Commencez maintenant
          </span>

          <h1 className="mt-8 font-display text-6xl font-black italic uppercase leading-none tracking-tighter md:text-8xl">
            <span className="text-white">Construisez</span>
            <br />
            <span className="text-white">Votre</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">Savoir Ancré</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Apprenez à maîtriser le RAG et la curation intelligente.
            Ne lancez pas un logiciel, construisez votre propre cerveau externe avec NotebookLM.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/modules/architecte-donnees">
              <Button variant="accent" size="lg">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/modules">
              <Button variant="outline" size="lg">
                Voir les modules
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── MODULES ───────────────────────────── */}
      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-display text-4xl font-black italic uppercase leading-none tracking-tighter md:text-6xl">
                <span className="text-white">Construisez</span>
                <br />
                <span className="text-white">Votre</span>
                <br />
                <span className="inline-block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">Savoir Ancré</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-zinc-400">
                Du fondamental au créatif, chaque module vous rapproche
                de la maîtrise complète de NotebookLM.
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

      {/* ── CHIFFRES CLÉS ─────────────────────── */}
      <ScrollReveal>
        <ChiffresCles />
      </ScrollReveal>

      {/* ── NEWSLETTER CTA ────────────────────── */}
      <section className="bg-zinc-950 px-6 py-24">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900 p-12 text-center text-white transition-all duration-300 hover:border-violet-500/50">
            <h2 className="font-display text-3xl font-bold">
              Restez informé
            </h2>
            <p className="mt-4 text-zinc-400">
              Recevez les nouveaux modules, astuces et mises à jour directement
              dans votre boîte mail.
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
