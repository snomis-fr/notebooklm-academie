"use client";

/**
 * Carte cas d'usage — style colonne avec exemple audio optionnel.
 *
 * @module components/cas-usage/UseCaseCard
 */

import { useState, useCallback } from "react";
import Link from "next/link";
import { Copy, Headphones, FileText, Video } from "lucide-react";
import type { UseCase } from "@/data/usecases";

interface UseCaseCardProps {
  useCase: UseCase;
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Carte affichant un cas d'usage antidopage (style colonne, comme prompts de style).
 * Affiche un lecteur audio lorsqu'un exemple est fourni.
 */
export function UseCaseCard({ useCase }: UseCaseCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const {
    id,
    title,
    objectif,
    formatStudios,
    sousFormat,
    prompt,
    diffusion,
    example,
    examplePdf,
    exampleVideo,
  } = useCase;

  const hasExample = example || examplePdf || exampleVideo;

  const handleCopyPrompt = useCallback(async () => {
    const ok = await copyToClipboard(prompt);
    if (ok) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  }, [prompt]);

  return (
    <article className="usecase-card-column">
      <div className="usecase-card-column-body">
        <div className="usecase-card-column-content">
          <div className="usecase-card-column-header">
            <span className="usecase-card-column-number">#{id}</span>
            <h3 className="usecase-card-column-title">{title}</h3>
            <div className="usecase-card-column-meta">
              <span className="usecase-tag">{formatStudios}</span>
              {sousFormat !== "—" && (
                <span className="usecase-tag usecase-tag-sous">{sousFormat}</span>
              )}
            </div>
          </div>

          <p className="usecase-card-objectif">
            <strong>Objectif :</strong> {objectif}
          </p>

          <div className="usecase-card-prompt-block">
            <div className="usecase-card-prompt-header">
              <span className="usecase-prompt-label">Prompt à utiliser</span>
              <button
                type="button"
                onClick={handleCopyPrompt}
                className="usecase-prompt-copy"
                title="Copier le prompt"
              >
                {isCopied ? (
                  <span className="text-green-400">Copié</span>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copier</span>
                  </>
                )}
              </button>
            </div>
            <pre className="usecase-prompt-text">{prompt}</pre>
          </div>

          <div className="usecase-card-diffusion">
            <span className="usecase-diffusion-label">Diffusion recommandée :</span>
            <span className="usecase-diffusion-text">{diffusion}</span>
          </div>
        </div>

        {hasExample && (
          <div className="usecase-card-example">
            <span className="usecase-example-label">
              {exampleVideo ? <Video className="h-4 w-4" /> : example ? <Headphones className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
              Exemple Judo
            </span>
            {exampleVideo && (
              <div className="usecase-video-wrapper">
                <video
                  controls
                  preload="metadata"
                  className="usecase-video-player"
                >
                  <source src={exampleVideo} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>
            )}
            {example && (
              <div className="usecase-audio-wrapper">
                <audio
                  controls
                  preload="metadata"
                  className="usecase-audio-player"
                >
                  <source src={example} type="audio/mp4" />
                  <source src={example} type="audio/m4a" />
                  Votre navigateur ne supporte pas l&apos;élément audio.
                </audio>
              </div>
            )}
            {examplePdf && (
              <Link
                href={examplePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="usecase-pdf-link"
              >
                <FileText className="h-4 w-4" />
                Voir le PDF
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
