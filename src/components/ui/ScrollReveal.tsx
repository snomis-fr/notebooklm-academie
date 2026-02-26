"use client";

/**
 * Composant qui déclenche une animation fade-in quand la section entre dans le viewport.
 * Utilise Intersection Observer pour des animations au scroll performantes.
 *
 * @module components/ui/ScrollReveal
 *
 * @param children - Contenu à révéler
 * @param delay - Délai d'animation en ms (stagger)
 * @param className - Classes CSS additionnelles
 *
 * @example
 * <ScrollReveal delay={100}>
 *   <h2>Section visible au scroll</h2>
 * </ScrollReveal>
 */
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

interface ScrollRevealProps {
  children: React.ReactNode;
  /** Délai en ms avant l'animation (pour stagger) */
  delay?: number;
  /** Seuil de visibilité (0-1) pour déclencher l'animation */
  threshold?: number;
  /** Décalage en px avant le trigger (rootMargin) */
  rootMargin?: string;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0",
        className
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
