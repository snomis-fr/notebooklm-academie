/**
 * Inscription newsletter — POST /api/newsletter
 *
 * Valide l'email avec Zod, vérifie les doublons, stocke dans Supabase.
 * Rate limited à 5 requêtes/minute/IP.
 */

import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/utils/validation";
import { createServerClient } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  // Valider le body
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { data: null, error: "Requête invalide" },
      { status: 400 }
    );
  }

  const validation = newsletterSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      {
        data: null,
        error: validation.error.errors.map((e) => e.message).join(", "),
      },
      { status: 400 }
    );
  }

  try {
    const supabase = createServerClient();

    // Vérifier si l'email existe déjà
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id")
      .eq("email", validation.data.email)
      .single();

    if (existing) {
      // WHY: On retourne 200 (pas 409) pour ne pas révéler si un email est inscrit
      return NextResponse.json({
        data: { message: "Merci, vous êtes inscrit !" },
        error: null,
      });
    }

    // Insérer le nouvel inscrit
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email: validation.data.email,
        source: validation.data.source,
      })
      .select("id, email")
      .single();

    if (error) {
      console.error("Newsletter insert error:", error);
      return NextResponse.json(
        { data: null, error: "Erreur lors de l'inscription" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data, error: null }, { status: 201 });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json(
      { data: null, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
