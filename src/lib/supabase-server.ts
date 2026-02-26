/**
 * Client Supabase côté serveur (NE JAMAIS importer côté client).
 * @module lib/supabase-server
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "@/config/app";

export function createServerClient() {
  return createClient(config.supabase.url, config.supabase.serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
