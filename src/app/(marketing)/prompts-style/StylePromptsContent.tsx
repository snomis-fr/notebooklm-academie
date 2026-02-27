"use client";

/**
 * Vidéo en haut, puis 16 prompts de style avec image résultat.
 *
 * @module app/prompts-style/StylePromptsContent
 */

import { StylePromptCard } from "@/components/prompts-style/StylePromptCard";
import { STYLE_PROMPTS } from "@/data/style-prompts";

const YOUTUBE_VIDEO_ID = "1IZN1dg0UP0";

export function StylePromptsContent() {
  return (
    <div className="style-prompts-layout style-prompts-layout-stacked">
      {/* Vidéo en haut */}
      <section className="style-prompts-video-section">
        <div className="style-prompts-video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
            title="Changer un style dans le Studio — NotebookLM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="style-prompts-video-iframe"
          />
          <p className="style-prompts-video-caption">
            Changer un style dans le Studio
          </p>
        </div>
      </section>

      {/* Liste des prompts avec images résultat */}
      <div className="style-prompts-list">
        {STYLE_PROMPTS.map((prompt) => (
          <StylePromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  );
}
