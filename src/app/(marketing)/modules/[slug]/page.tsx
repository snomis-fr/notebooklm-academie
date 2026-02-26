/**
 * Détail d'un module — Page /modules/[slug].
 *
 * Layout : OBJECTIF → Titre → Vidéo → STRUCTURE (3 parties) → Cartes activités.
 *
 * @module app/modules/[slug]/page
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { getModuleBySlug, MODULES } from "@/config/modules";
import { ArrowLeft, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const MODULE_BADGE_STYLES: Record<string, { badge: string; icon: string }> = {
  "module-1": { badge: "bg-module-1/10", icon: "text-module-1" },
  "module-2": { badge: "bg-module-2/10", icon: "text-module-2" },
  "module-3": { badge: "bg-module-3/10", icon: "text-module-3" },
  "module-4": { badge: "bg-module-4/10", icon: "text-module-4" },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Génère les slugs statiquement pour le build. */
export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const moduleData = getModuleBySlug(slug);
  if (!moduleData) return { title: "Module introuvable" };
  return {
    title: moduleData.title,
    description: moduleData.description,
  };
}

export default async function ModuleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const moduleData = getModuleBySlug(slug);

  if (!moduleData) {
    notFound();
  }

  const styles = MODULE_BADGE_STYLES[moduleData.color] ?? {
    badge: "bg-module-1/10",
    icon: "text-module-1",
  };

  const firstPartWithVideo = moduleData.parts.find((p) => p.videoUrl);
  const allActivities = moduleData.parts.flatMap((p) => p.activities);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* En-tête */}
      <section className="relative overflow-hidden border-b border-zinc-800 px-6 py-12 md:py-16">
        <div className="hero-gradient-overlay" aria-hidden />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            href="/modules"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-violet-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux modules
          </Link>

          {moduleData.objectif && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Objectif : {moduleData.objectif}
            </p>
          )}

          <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl">
            Module {moduleData.order} : {moduleData.title} ({moduleData.subtitle})
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm font-medium text-zinc-300">
              {moduleData.duration}
            </span>
            <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm font-medium text-zinc-300">
              {moduleData.level}
            </span>
            {moduleData.isFree && (
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-semibold text-emerald-400">
                Gratuit
              </span>
            )}
          </div>
          {moduleData.isFree && (
            <div className="mt-6">
              <Link href={`/cours/${moduleData.slug}`}>
                <Button variant="accent" size="lg">
                  Commencer le module
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Vidéo (première partie qui en a une) */}
      {firstPartWithVideo?.videoUrl && (
        <section className="border-b border-zinc-800 px-6 py-8 md:py-12">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                <iframe
                  src={`https://www.youtube.com/embed/${firstPartWithVideo.videoUrl.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&?]+)/)?.[1] ?? ""}`}
                  title={`Vidéo : ${firstPartWithVideo.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* STRUCTURE — 3 parties en cartes */}
      <section className="border-b border-zinc-800 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Structure
            </h2>
          </ScrollReveal>
          <div className="mt-6 space-y-4">
            {moduleData.parts.map((part, index) => (
              <ScrollReveal key={part.id} delay={80 * index}>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-4 transition-colors hover:border-violet-500/30">
                  <div className="flex items-start gap-4">
                    <span className="font-display text-2xl font-bold text-white">
                      {part.order}
                    </span>
                    <p className="flex-1 pt-0.5 font-body text-base leading-relaxed text-white">
                      {part.title}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LES 3 ACTIVITÉS PRATIQUES — cartes carrées */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Les 3 activités pratiques
            </h2>
          </ScrollReveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allActivities.map((activity, index) => (
              <ScrollReveal key={activity.id} delay={100 * index}>
                <div className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-violet-500/30">
                  <div
                    className={`mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.badge}`}
                  >
                    <FlaskConical className={`h-6 w-6 ${styles.icon}`} />
                  </div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                    {activity.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {activity.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
