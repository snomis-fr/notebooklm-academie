/**
 * Footer principal — fond sombre, 3 colonnes, liens utiles.
 * @module components/layout/Footer
 */

import Link from "next/link";
import { config } from "@/config/app";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 pb-20 text-white md:pb-6">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-xl font-bold">
              NotebookLM<span className="text-violet-400">.</span>Académie
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              La plateforme de référence pour maîtriser Google NotebookLM —
              du débutant à l&apos;expert dans le monde du sport.
            </p>
          </div>

          {/* Modules */}
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Modules
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/modules/architecte-donnees" className="text-sm text-zinc-400 transition-colors hover:text-violet-400">
                  L&apos;Architecte de Données
                </Link>
              </li>
              <li>
                <Link href="/modules/specialiste-synthese" className="text-sm text-zinc-400 transition-colors hover:text-violet-400">
                  Le Spécialiste de la Synthèse
                </Link>
              </li>
              <li>
                <Link href="/modules/createur-multimedia" className="text-sm text-zinc-400 transition-colors hover:text-violet-400">
                  Le Créateur Multimédia
                </Link>
              </li>
              <li>
                <Link href="/modules/maitre-notebooklm" className="text-sm text-zinc-400 transition-colors hover:text-violet-400">
                  Le Maître NotebookLM
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens */}
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Liens
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/cas-usage" className="text-sm text-zinc-400 transition-colors hover:text-violet-400">
                  Cas d&apos;usage
                </Link>
              </li>
              <li>
                <Link href="/prompts" className="text-sm text-zinc-400 transition-colors hover:text-violet-400">
                  100 Prompts
                </Link>
              </li>
              <li>
                <Link href="/prompts-style" className="text-sm text-zinc-400 transition-colors hover:text-violet-400">
                  Prompts de style
                </Link>
              </li>
              <li>
                <Link href="/comparatif-plans" className="text-sm text-zinc-400 transition-colors hover:text-violet-400">
                  Comparatif plans
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-sm text-zinc-400 transition-colors hover:text-violet-400">
                  À propos
                </Link>
              </li>
              <li>
                <a href={`mailto:${config.links.email}`} className="text-sm text-zinc-400 transition-colors hover:text-violet-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} NotebookLM Académie. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
