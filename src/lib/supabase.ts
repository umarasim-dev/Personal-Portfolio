import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Returns a server-side Supabase client for database insertion.
 * Uses a server-only service key when configured, otherwise the public publishable/anon key.
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  if (!supabaseUrl) {
    console.warn('[Supabase] NEXT_PUBLIC_SUPABASE_URL is not configured.');
    return null;
  }

  const keyToUse = supabaseServiceKey || supabasePublishableKey || supabaseAnonKey;
  if (!keyToUse) {
    console.warn('[Supabase] Configure SUPABASE_SERVICE_ROLE_KEY, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, or NEXT_PUBLIC_SUPABASE_ANON_KEY.');
    return null;
  }

  return createClient(supabaseUrl, keyToUse, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
