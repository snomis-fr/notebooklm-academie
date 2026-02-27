"use client";

/**
 * Carte directive de style avec bouton copier.
 *
 * @module components/prompts-style/StylePromptCard
 */

import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";
import type { StylePrompt } from "@/data/style-prompts";

interface StylePromptCardProps {
  prompt: StylePrompt;
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function StylePromptCard({ prompt }: StylePromptCardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const ok = await copyToClipboard(prompt.prompt);
    if (ok) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  }, [prompt.prompt]);

  return (
    <article className="style-prompt-card">
      <div className="style-prompt-card-body">
        <div className="style-prompt-card-content">
          <div className="style-prompt-card-header">
            <span className="style-prompt-card-number">#{prompt.id}</span>
            <h3 className="style-prompt-card-title">{prompt.title}</h3>
            <button
              type="button"
              onClick={handleCopy}
              className="style-prompt-card-copy"
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
          <p className="style-prompt-card-text">{prompt.prompt}</p>
        </div>
        {(prompt.imageStandard || prompt.imageDetailed || prompt.image) && (
          <div className="style-prompt-card-results">
            {prompt.imageStandard && (
              <div className="style-prompt-card-result">
                <span className="style-prompt-card-result-label">Standard</span>
                <img
                  src={prompt.imageStandard}
                  alt={`Résultat standard du style ${prompt.title}`}
                  className="style-prompt-card-image"
                />
              </div>
            )}
            {prompt.imageDetailed && (
              <div className="style-prompt-card-result">
                <span className="style-prompt-card-result-label">Détaillé</span>
                <img
                  src={prompt.imageDetailed}
                  alt={`Résultat détaillé du style ${prompt.title}`}
                  className="style-prompt-card-image"
                />
              </div>
            )}
            {prompt.image && !prompt.imageStandard && !prompt.imageDetailed && (
              <div className="style-prompt-card-result">
                <img
                  src={prompt.image}
                  alt={`Résultat du style ${prompt.title}`}
                  className="style-prompt-card-image"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
