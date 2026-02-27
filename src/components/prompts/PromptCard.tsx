"use client";

/**
 * Carte prompt avec section sources et badges indispensable / optionnel.
 *
 * @module components/prompts/PromptCard
 */

import { useState, useCallback } from "react";
import { Check, Copy, FolderOpen } from "lucide-react";
import type { Prompt } from "@/data/prompts";

interface PromptCardProps {
  prompt: Prompt;
}

/**
 * Copie le texte dans le presse-papier et gère le feedback visuel.
 */
async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Carte affichant un prompt avec ses sources et badges indispensable/optionnel.
 */
export function PromptCard({ prompt }: PromptCardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const ok = await copyToClipboard(prompt.prompt);
    if (ok) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  }, [prompt.prompt]);

  return (
    <article className="prompt-card group">
      {/* Zone haute : prompt */}
      <div className="prompt-card-top">
        <div className="prompt-card-main">
          <div className="prompt-card-header">
            <span className="prompt-card-emoji">{prompt.sportEmoji}</span>
            <span className="prompt-card-sport">{prompt.sportName}</span>
            <span className="prompt-card-category">{prompt.category}</span>
            <span className="prompt-card-id">#{prompt.id}</span>
          </div>
          <h3 className="prompt-card-title">{prompt.title}</h3>
          <div className="prompt-card-preview-wrapper">
            <p className="prompt-card-preview line-clamp-3" aria-describedby={`prompt-full-${prompt.id}`}>
              {prompt.prompt}
            </p>
            <div
              id={`prompt-full-${prompt.id}`}
              role="tooltip"
              className="prompt-card-tooltip"
            >
              {prompt.prompt}
            </div>
          </div>
          <div className="prompt-card-usage">
            <span className="prompt-card-arrow">→</span>
            <span>{prompt.usage}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="prompt-card-copy"
          aria-label="Copier le prompt"
        >
          {isCopied ? (
            <>
              <Check size={14} className="text-green-400" />
              <span className="text-green-400">Copié</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copier</span>
            </>
          )}
        </button>
      </div>

      {/* Séparateur */}
      <div className="prompt-card-divider" />

      {/* Zone basse : sources */}
      <div className="prompt-card-sources">
        <div className="prompt-card-sources-label">
          <FolderOpen size={13} className="text-amber-500" />
          <span>Sources à charger dans NotebookLM</span>
        </div>
        <ul className="prompt-card-sources-list">
          {prompt.sources.map((source, i) => (
            <li key={i} className="prompt-card-source-item">
              <span className="prompt-card-source-bullet">▸</span>
              <span className="prompt-card-source-label">{source.label}</span>
              {source.required ? (
                <span className="prompt-card-badge prompt-card-badge-required">
                  indispensable
                </span>
              ) : (
                <span className="prompt-card-badge prompt-card-badge-optional">
                  optionnel
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
