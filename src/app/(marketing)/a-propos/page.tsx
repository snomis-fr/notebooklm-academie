/**
 * Page À propos — Présentation professionnelle.
 *
 * @module app/a-propos/page
 */

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Target,
  Sparkles,
  BookOpen,
  GraduationCap,
  Mail,
  Linkedin,
} from "lucide-react";
import { config } from "@/config/app";

export const metadata = {
  title: "À propos",
  description:
    "NotebookLM Académie — La plateforme de référence pour maîtriser Google NotebookLM.",
};

const VALUES = [
  {
    icon: Target,
    title: "Pédagogie actionnable",
    description:
      "Chaque leçon se termine par une mise en pratique immédiate. Pas de théorie sans exercice.",
  },
  {
    icon: Sparkles,
    title: "Contenu à jour",
    description:
      "NotebookLM évolue. Nos parcours sont régulièrement mis à jour pour suivre les nouveautés.",
  },
  {
    icon: BookOpen,
    title: "Progression structurée",
    description:
      "Du débutant au créateur multimédia, une courbe d'apprentissage pensée pour la maîtrise.",
  },
];

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-bg)] px-6 py-20 md:py-28">
        <div className="hero-gradient-overlay" aria-hidden />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-primary md:text-6xl">
              À propos de{" "}
              <span className="text-gradient">NotebookLM Académie</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {config.appDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[var(--color-bg-alt)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
                  Notre mission
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                  Rendre l&apos;IA de Google accessible à tous. Que vous soyez
                  dirigeant, manager, chercheur ou étudiant, NotebookLM peut
                  transformer votre manière de travailler avec vos documents.
                  Nous vous guidons pas à pas pour en tirer le meilleur.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
              Nos valeurs
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--color-text-secondary)]">
              Ce qui guide chaque parcours que nous créons.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {VALUES.map((item, index) => (
              <ScrollReveal key={item.title} delay={100 * index}>
                <div className="rounded-2xl bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[var(--color-bg-alt)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
              Nous contacter
            </h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Une question ? Envie de collaborer ?
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href={`mailto:${config.links.email}`}
                className="flex items-center gap-3 rounded-xl bg-surface px-6 py-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-medium text-primary">
                  {config.links.email}
                </span>
              </a>
              <a
                href={config.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-surface px-6 py-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <span className="font-medium text-primary">LinkedIn</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
