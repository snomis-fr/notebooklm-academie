/**
 * Navigation principale — sticky avec backdrop blur.
 * @module components/layout/Header
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { config } from "@/config/app";
import { cn } from "@/utils/cn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-black uppercase tracking-tight"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-violet-400 to-cyan-300">
            <BookOpen className="h-5 w-5 text-white" strokeWidth={2} />
          </div>
          <span className="text-white">NotebookLM</span>
          <span className="italic text-violet-400">Académie</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {config.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-violet-400"
            >
              {item.label}
            </Link>
          ))}
          <Link href={config.navigation.cta.href}>
            <Button variant="accent" size="sm">
              {config.navigation.cta.label}
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav */}
      <div
        className={cn(
          "overflow-hidden border-t border-zinc-800/50 bg-zinc-950/95 transition-all duration-300 md:hidden",
          isOpen ? "max-h-64 py-4" : "max-h-0 py-0"
        )}
      >
        <div className="flex flex-col gap-4 px-6">
          {config.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-zinc-400 hover:text-violet-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href={config.navigation.cta.href} onClick={() => setIsOpen(false)}>
            <Button variant="accent" size="md" className="w-full">
              {config.navigation.cta.label}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
