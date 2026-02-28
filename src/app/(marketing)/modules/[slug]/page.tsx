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
      {/* En-tête — compact sur mobile */}
      <section className="relative overflow-hidden border-b border-zinc-800 px-4 py-6 md:px-6 md:py-12">
        <div className="hero-gradient-overlay" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/modules"
            className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors hover:text-violet-400 md:mb-6 md:text-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
            Retour aux modules
          </Link>

          <h1 className="font-display text-lg font-extrabold leading-tight text-white md:text-3xl md:uppercase lg:text-4xl">
            <span className="text-zinc-500 md:text-white">Module {moduleData.order}</span>
            <span className="block text-violet-300 md:inline md:ml-2 md:text-white">
              {moduleData.title}
            </span>
          </h1>

          {moduleData.objectif && (
            <p className="mt-1.5 text-xs leading-snug text-zinc-500 md:mt-4 md:text-xs md:font-semibold md:uppercase md:tracking-widest">
              <span className="hidden md:inline">Objectif : </span>
              {moduleData.objectif}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-2 md:mt-6 md:gap-4">
            <span className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300 md:px-4 md:py-1.5 md:text-sm">
              {moduleData.duration}
            </span>
            <span className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300 md:px-4 md:py-1.5 md:text-sm">
              {moduleData.level}
            </span>
            {moduleData.isFree && (
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-400 md:px-4 md:py-1.5 md:text-sm">
                Gratuit
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Sidebar + Contenu (vidéo + activités par partie) */}
      <section className="px-4 py-6 md:px-6 md:py-12">
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
