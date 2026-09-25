import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Returns a server-side Supabase client for database insertion.
 * Prioritizes SUPABASE_SERVICE_ROLE_KEY for server operations, falling back to ANON_KEY.
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  if (!supabaseUrl) {
    console.warn('[Supabase] NEXT_PUBLIC_SUPABASE_URL is not configured.');
    return null;
  }

  const keyToUse = supabaseServiceKey || supabaseAnonKey;
  if (!keyToUse) {
    console.warn('[Supabase] Neither SUPABASE_SERVICE_ROLE_KEY nor NEXT_PUBLIC_SUPABASE_ANON_KEY is configured.');
    return null;
  }

  return createClient(supabaseUrl, keyToUse, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
