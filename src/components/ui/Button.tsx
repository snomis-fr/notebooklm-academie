/**
 * Bouton premium réutilisable.
 *
 * @module components/ui/Button
 *
 * @example
 * <Button variant="primary" size="lg">Commencer</Button>
 * <Button variant="ghost" size="sm">En savoir plus</Button>
 */

import React from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

const VARIANTS = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-500 focus:ring-violet-500/30 shadow-violet",
  secondary:
    "bg-zinc-800 text-white hover:bg-zinc-700 focus:ring-zinc-600/50",
  accent:
    "bg-violet-600 text-white hover:bg-violet-500 focus:ring-violet-500/30 font-semibold shadow-violet",
  ghost:
    "bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white focus:ring-zinc-600/50",
  outline:
    "bg-transparent border border-zinc-600 text-white hover:border-violet-500/50 hover:text-violet-400 focus:ring-violet-500/30",
} as const;

const SIZES = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
} as const;

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold",
        "transition-all duration-200 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "active:scale-95 transition-transform",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12" cy="12" r="10"
            stroke="currentColor" strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
