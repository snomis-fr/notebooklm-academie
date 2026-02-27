/**
 * Page Prompts de style — 15 directives de style pour NotebookLM.
 *
 * @module app/prompts-style/page
 */

import { StylePromptsContent } from "./StylePromptsContent";

export const metadata = {
  title: "Prompts de style",
  description:
    "15 directives de style pour NotebookLM : identités visuelles distinctes — institutionnel, olympique, tech tricolore, minimalisme diplomatique...",
};

export default function PromptsStylePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="page-hero page-hero-compact">
        <span className="eyebrow">
          ● Formation NotebookLM · Studio
        </span>
        <h1>
          15 Directives de Style
          <br />
          <span className="accent">NotebookLM</span>
        </h1>
        <p className="hero-sub">
          Fins de prompts à coller après ta demande principale. Chacune définit
          une identité visuelle distincte pour tes exports Studio.
        </p>
      </section>

      <StylePromptsContent />
    </div>
  );
}
