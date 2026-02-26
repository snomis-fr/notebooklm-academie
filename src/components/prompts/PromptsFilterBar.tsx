"use client";

/**
 * Barre de filtres par catégorie — 100 Prompts.
 *
 * @module components/prompts/PromptsFilterBar
 */

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
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

/**
 * Barre de filtres sticky pour la page 100 Prompts.
 */
export function PromptsFilterBar({
  activeFilter,
  onFilterChange,
}: PromptsFilterBarProps) {
  return (
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
  );
}
