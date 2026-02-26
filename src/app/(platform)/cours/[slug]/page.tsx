/**
 * Player de cours — Phase 2.
 * Placeholder pour l'instant.
 *
 * @module app/cours/[slug]/page
 */

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CoursPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24">
      <div className="max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
          <BookOpen className="h-8 w-8 text-accent" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-bold text-primary">
          Le player de cours arrive bientôt
        </h1>
        <p className="mt-3 text-[var(--color-text-secondary)]">
          Nous préparons une expérience d&apos;apprentissage complète pour
          &quot;{slug.replace(/-/g, " ")}&quot;. En attendant, explorez le contenu.
        </p>
        <Link href="/modules" className="mt-8 inline-block">
          <Button variant="accent" size="lg">
            Voir les modules
          </Button>
        </Link>
      </div>
    </div>
  );
}
