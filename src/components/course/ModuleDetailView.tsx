"use client";

/**
 * Vue détail d'un module — sidebar parties + contenu (vidéo + activités).
 *
 * Layout : gauche = navigation des 3 parties, droite = vidéo + activités de la partie sélectionnée.
 *
 * @module components/course/ModuleDetailView
 */

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FlaskConical } from "lucide-react";
import type { Module, ModulePart } from "@/types";

const MODULE_BADGE_STYLES: Record<string, { badge: string; icon: string }> = {
  "module-1": { badge: "bg-module-1/10", icon: "text-module-1" },
  "module-2": { badge: "bg-module-2/10", icon: "text-module-2" },
  "module-3": { badge: "bg-module-3/10", icon: "text-module-3" },
  "module-4": { badge: "bg-module-4/10", icon: "text-module-4" },
};

function getYouTubeEmbedId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&?]+)/);
  return match?.[1] ?? "";
}

interface ModuleDetailViewProps {
  module: Module;
  basePath: string;
}

/** Partie sélectionnée : vidéo + activités. */
function PartContent({
  part,
  styles,
}: {
  part: ModulePart;
  styles: { badge: string; icon: string };
}) {
  const embedId = part.videoUrl ? getYouTubeEmbedId(part.videoUrl) : "";

  return (
    <div className="space-y-8">
      {/* Vidéo */}
      {embedId && (
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${embedId}`}
              title={`Vidéo : ${part.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <div className="border-t border-zinc-800 px-6 py-4">
            <h3 className="font-display text-lg font-bold text-white">
              {part.order}. {part.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">{part.description}</p>
          </div>
        </div>
      )}

      {/* Pas de vidéo pour cette partie */}
      {!embedId && (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-6 py-8">
          <h3 className="font-display text-lg font-bold text-white">
            {part.order}. {part.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-400">{part.description}</p>
        </div>
      )}

      {/* Activités pratiques */}
      {part.activities.length > 0 && (
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Activités pratiques
          </h4>
          <div className="grid gap-4 sm:grid-cols-2">
            {part.activities.map((activity) => (
              <div
                key={activity.id}
                className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-violet-500/30"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${styles.badge}`}
                >
                  <FlaskConical className={`h-5 w-5 ${styles.icon}`} />
                </div>
                <div>
                  <h5 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                    {activity.title}
                  </h5>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Affiche le module avec sidebar (parties) et contenu dynamique.
 */
export function ModuleDetailView({ module: mod, basePath }: ModuleDetailViewProps) {
  const searchParams = useSearchParams();
  const partSlug = searchParams.get("part");
  const styles = MODULE_BADGE_STYLES[mod.color] ?? {
    badge: "bg-module-1/10",
    icon: "text-module-1",
  };

  const selectedPart =
    mod.parts.find((p) => p.slug === partSlug) ?? mod.parts[0] ?? null;

  if (!selectedPart) return null;

  return (
    <div className="flex flex-col lg:flex-row lg:gap-12">
      {/* Sidebar gauche — les 3 parties */}
      <aside className="shrink-0 lg:w-72">
        <nav className="sticky top-24 space-y-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Parties
          </p>
          {mod.parts.map((part) => {
            const isActive = part.id === selectedPart.id;
            return (
              <Link
                key={part.id}
                href={`${basePath}?part=${part.slug}`}
                className={`block rounded-xl px-4 py-3 text-left transition-colors ${
                  isActive
                    ? "border border-violet-500/50 bg-violet-500/10 text-white"
                    : "border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                <span className="font-display text-sm font-bold">{part.order}</span>
                <span className="ml-2 text-sm">{part.title}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Contenu droit — vidéo + activités */}
      <main className="min-w-0 flex-1 py-6 lg:py-0">
        <PartContent part={selectedPart} styles={styles} />
      </main>
    </div>
  );
}
