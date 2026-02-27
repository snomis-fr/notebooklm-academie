"use client";

/**
 * Barre de navigation fixe en bas de l'écran.
 *
 * @module components/layout/BottomBar
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { config } from "@/config/app";

export function BottomBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl"
      aria-label="Navigation principale"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-1 px-4 py-3 sm:gap-4">
        {config.navigationBottom.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                isActive
                  ? "bg-violet-500/20 text-violet-400"
                  : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
