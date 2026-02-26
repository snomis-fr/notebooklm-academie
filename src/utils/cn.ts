/**
 * Utilitaire pour fusionner les classes Tailwind CSS sans conflit.
 *
 * Combine clsx (conditions) et tailwind-merge (résolution de conflits).
 *
 * @module utils/cn
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-primary text-white", className)
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne des classes Tailwind en résolvant les conflits.
 *
 * @param inputs - Classes CSS, conditions, ou tableaux
 * @returns Chaîne de classes CSS nettoyée
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
