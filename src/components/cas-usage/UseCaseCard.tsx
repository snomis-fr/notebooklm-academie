/**
 * Carte cas d'usage — titre, description, prompt type, impact.
 *
 * @module components/cas-usage/UseCaseCard
 */

import type { UseCase, UseCaseCategory } from "@/data/usecases";

const CATEGORY_COLORS: Record<UseCaseCategory, string> = {
  president: "#3b82f6",
  equipe: "#f87171",
  communication: "#f59e0b",
  performance: "#34d399",
  gouvernance: "#8b5cf6",
};

const CATEGORY_LABELS: Record<UseCaseCategory, string> = {
  president: "Présidence",
  equipe: "Équipes",
  communication: "Communication",
  performance: "Performance",
  gouvernance: "Gouvernance",
};

interface UseCaseCardProps {
  useCase: UseCase;
}

/**
 * Carte affichant un cas d'usage avec tags, prompt type et impact.
 */
export function UseCaseCard({ useCase }: UseCaseCardProps) {
  const { id, categories, title, description, promptExample, impact, impactLabel } =
    useCase;

  return (
    <article className="usecase-card">
      <div className="card-header">
        <span className="card-number">{String(id).padStart(2, "0")}</span>
        <div className="card-meta">
          <div className="card-tags">
            {categories.map((cat) => (
              <span
                key={cat}
                className="tag"
                style={{
                  color: CATEGORY_COLORS[cat],
                  borderColor: `${CATEGORY_COLORS[cat]}40`,
                  background: `${CATEGORY_COLORS[cat]}15`,
                }}
              >
                {CATEGORY_LABELS[cat]}
              </span>
            ))}
          </div>
          <h3 className="card-title">{title}</h3>
        </div>
      </div>

      <p className="card-description">{description}</p>

      <div className="card-prompt">
        <span className="prompt-label">Prompt type</span>
        <q className="prompt-text">{promptExample}</q>
      </div>

      <div className="card-impact">
        <span className="impact-dot" data-impact={impact} />
        <span className="impact-text">{impactLabel}</span>
      </div>
    </article>
  );
}
