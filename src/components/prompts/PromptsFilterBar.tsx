"use client";

/**
 * Barre de recherche + filtres par catégorie — 100 Prompts.
 *
 * @module components/prompts/PromptsFilterBar
 */

import { Search } from "lucide-react";

const CATEGORIES: { id: string; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "Stratégie", label: "Stratégie" },
  { id: "Gouvernance", label: "Gouvernance" },
  { id: "Performance", label: "Performance" },
  { id: "Formation", label: "Formation" },
  { id: "Communication", label: "Communication" },
  { id: "Finance", label: "Finance" },
  { id: "Développement", label: "Développement" },
  { id: "International", label: "International" },
  { id: "Médical", label: "Médical" },
  { id: "Événements", label: "Événements" },
  { id: "Innovation", label: "Innovation" },
  { id: "RH", label: "RH" },
  { id: "Technique NotebookLM", label: "Technique NotebookLM" },
];

interface PromptsFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  resultsCount?: number;
}

/**
 * Barre de recherche et filtres sticky pour la page 100 Prompts.
 */
export function PromptsFilterBar({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  resultsCount,
}: PromptsFilterBarProps) {
  return (
    <div className="prompts-filter-section">
      <div className="prompts-search-bar">
        <Search size={18} className="prompts-search-icon" aria-hidden />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Rechercher par titre, catégorie, usage, mot-clé..."
          className="prompts-search-input"
          aria-label="Rechercher dans les prompts"
        />
        {resultsCount !== undefined && (
          <span className="prompts-search-count">
            {resultsCount} résultat{resultsCount !== 1 ? "s" : ""}
          </span>
        )}
      </div>
      <div className="filter-bar prompts-filter-bar">
        {CATEGORIES.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
