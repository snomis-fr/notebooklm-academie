"use client";

/**
 * Formulaire newsletter avec feedback visuel (loading, succès, erreur).
 *
 * @module components/marketing/NewsletterForm
 */

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error";

interface NewsletterFormProps {
  /** Source pour analytics (défaut: homepage) */
  source?: string;
  /** Classes additionnelles pour le conteneur */
  className?: string;
}

/**
 * Formulaire d'inscription newsletter avec états visuels.
 *
 * @param source - Identifiant de la page source
 * @param className - Classes CSS pour le wrapper
 */
export function NewsletterForm({ source = "homepage", className = "" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Une erreur est survenue.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Impossible de contacter le serveur. Réessayez plus tard.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`flex flex-col items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-6 ${className}`}
      >
        <CheckCircle className="h-12 w-12 text-emerald-400" />
        <p className="text-center font-medium text-white">
          Merci ! Vous êtes inscrit.
        </p>
        <p className="text-center text-sm text-zinc-400">
          Vous recevrez nos prochaines mises à jour.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-3 sm:flex-row ${className}`}
    >
      <div className="flex flex-1 flex-col gap-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          required
          disabled={status === "loading"}
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800/50 px-5 py-3 text-white placeholder-zinc-500 outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 disabled:opacity-70"
        />
        {status === "error" && errorMessage && (
          <p className="flex items-center gap-2 text-sm text-red-300">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errorMessage}
          </p>
        )}
      </div>
      <Button
        variant="accent"
        size="md"
        type="submit"
        disabled={status === "loading"}
        className="sm:self-start"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Inscription…
          </>
        ) : (
          "S'inscrire"
        )}
      </Button>
    </form>
  );
}
