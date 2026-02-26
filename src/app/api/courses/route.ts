/**
 * Liste des modules — GET /api/courses
 *
 * En Phase 1 : retourne les données statiques de config/modules.ts
 * En Phase 2 : lira depuis Supabase
 */

import { NextResponse } from "next/server";
import { MODULES } from "@/config/modules";

export async function GET() {
  // WHY: En Phase 1, pas de BDD — on sert le contenu statique
  const modules = MODULES.map(({ parts: _parts, ...mod }) => mod);

  return NextResponse.json({
    data: { modules },
    error: null,
  });
}
