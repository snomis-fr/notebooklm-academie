/**
 * Carte de module pour le catalogue — hover lift + shadow.
 *
 * @module components/course/ModuleCard
 */

import Link from "next/link";
import { ArrowRight, Database, Brain, PlayCircle, GraduationCap } from "lucide-react";
import type { Module } from "@/types";

const ICONS = {
  database: Database,
  brain: Brain,
  "play-circle": PlayCircle,
  "graduation-cap": GraduationCap,
} as const;

const MODULE_BADGE_STYLES: Record<string, { badge: string; icon: string }> = {
  "module-1": { badge: "bg-module-1/10", icon: "text-module-1" },
  "module-2": { badge: "bg-module-2/10", icon: "text-module-2" },
  "module-3": { badge: "bg-module-3/10", icon: "text-module-3" },
  "module-4": { badge: "bg-module-4/10", icon: "text-module-4" },
};

interface ModuleCardProps {
  module: Module;
}

/**
 * Carte de module avec animation au survol.
 *
 * @param module - Le module à afficher
 */
export function ModuleCard({ module: mod }: ModuleCardProps) {
  const Icon = ICONS[mod.icon as keyof typeof ICONS] ?? Database;
  const styles = MODULE_BADGE_STYLES[mod.color] ?? {
    badge: "bg-module-1/10",
    icon: "text-module-1",
  };

  return (
    <Link
      href={`/modules/${mod.slug}`}
      className="group relative block rounded-2xl bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
    >
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${styles.badge}`}
      >
        <Icon className={`h-6 w-6 ${styles.icon}`} />
      </div>

      <div className="mt-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
          Module {mod.order} · {mod.level}
        </span>
        <h3 className="mt-2 font-display text-xl font-bold text-primary">
          {mod.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {mod.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-[var(--color-text-muted)]">
          {mod.duration} · {mod.parts.length} parties
        </span>
        {mod.isFree && (
          <span className="rounded-full bg-success-light px-3 py-1 text-xs font-semibold text-success">
            Gratuit
          </span>
        )}
      </div>

      <ArrowRight className="absolute right-6 top-8 h-5 w-5 text-[var(--color-text-muted)] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
    </Link>
  );
}
