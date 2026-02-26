"use client";

/**
 * Barre de filtres par domaine — cas d'usage.
 *
 * @module components/cas-usage/FilterBar
 */

const FILTERS: { id: string; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "president", label: "Présidence" },
  { id: "equipe", label: "Équipes" },
  { id: "communication", label: "Communication" },
  { id: "performance", label: "Performance" },
  { id: "gouvernance", label: "Gouvernance" },
];

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

/**
 * Barre de filtres sticky pour la page cas d'usage.
 */
export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      {FILTERS.map((filter) => (
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
