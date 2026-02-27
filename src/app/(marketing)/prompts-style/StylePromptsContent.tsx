"use client";

/**
 * Contenu 2 colonnes : 15 prompts de style + zone photo/vidéo.
 *
 * @module app/prompts-style/StylePromptsContent
 */

import { StylePromptCard } from "@/components/prompts-style/StylePromptCard";
import { STYLE_PROMPTS } from "@/data/style-prompts";
import { Video } from "lucide-react";

export function StylePromptsContent() {
  return (
    <div className="style-prompts-layout">
      {/* Colonne gauche : 15 prompts */}
      <div className="style-prompts-column">
        <div className="style-prompts-list">
          {STYLE_PROMPTS.map((prompt) => (
            <StylePromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </div>

      {/* Colonne droite : zone photo / vidéo */}
      <aside className="style-prompts-media">
        <div className="style-prompts-media-placeholder">
          <Video className="style-prompts-media-icon" size={48} strokeWidth={1.5} />
          <p className="style-prompts-media-text">
            Bientôt : vidéo
            <br />
            <span>« Changer un style dans le Studio »</span>
          </p>
          <p className="style-prompts-media-hint">
            Tu pourras ajouter ta photo ou vidéo ici
          </p>
        </div>
      </aside>
    </div>
  );
}
