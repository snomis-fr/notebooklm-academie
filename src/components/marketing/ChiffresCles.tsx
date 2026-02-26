"use client";

/**
 * Section "Chiffres clés" avec compteurs animés au scroll.
 * S'affiche entre les modules et la newsletter.
 *
 * @module components/marketing/ChiffresCles
 */

import { useEffect, useRef, useState } from "react";

interface ChiffreItem {
  value: number;
  suffix?: string;
  label: string;
}

const CHIFFRES: ChiffreItem[] = [
  { value: 1, suffix: "", label: "formation dédiée aux fédérations" },
  { value: 4, suffix: "", label: "modules progressifs" },
  { value: 12, suffix: "", label: "activités pratiques" },
  { value: 100, suffix: "%", label: "gratuit" },
];

/**
 * Compteur animé qui s'incrémente quand visible.
 */
function AnimatedCounter({
  end,
  suffix = "",
  duration = 1200,
  isVisible,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = performance.now();

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 2);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [end, duration, isVisible]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function ChiffresCles() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-zinc-950 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CHIFFRES.map((item) => (
            <div
              key={item.label}
              className="relative rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50"
            >
              <div className="font-display text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                <AnimatedCounter
                  end={item.value}
                  suffix={item.suffix}
                  isVisible={isVisible}
                  duration={1200}
                />
              </div>
              <p className="mt-3 font-body text-base font-medium text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
