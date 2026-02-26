/**
 * Client Supabase côté navigateur (clé publique uniquement).
 * Sécurisé par les Row Level Security (RLS) de Supabase.
 * @module lib/supabase-browser
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "@/config/app";

export const supabase = createClient(config.supabase.url, config.supabase.anonKey);
