/**
 * Détail d'un module — Page /modules/[slug].
 *
 * Layout : en-tête → sidebar (3 parties) + contenu (vidéo + activités de la partie sélectionnée).
 *
 * @module app/modules/[slug]/page
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { getModuleBySlug, MODULES } from "@/config/modules";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ModuleDetailView } from "@/components/course/ModuleDetailView";

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

  const basePath = `/modules/${slug}`;

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* En-tête */}
      <section className="relative overflow-hidden border-b border-zinc-800 px-6 py-12 md:py-16">
        <div className="hero-gradient-overlay" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl">
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

      {/* Sidebar + Contenu (vidéo + activités par partie) */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Suspense
            fallback={
              <div className="flex gap-12">
                <div className="h-64 w-72 animate-pulse rounded-xl bg-zinc-900" />
                <div className="flex-1 animate-pulse rounded-xl bg-zinc-900" />
              </div>
            }
          >
            <ModuleDetailView module={moduleData} basePath={basePath} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
