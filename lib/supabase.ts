import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Basic runtime check to verify env variables are wired correctly.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase env vars missing:", {
    hasUrl: !!supabaseUrl,
    hasAnonKey: !!supabaseAnonKey,
  });
} else {
  console.log("Supabase env vars loaded:", {
    url: supabaseUrl,
    anonKeyPreview: `${supabaseAnonKey.slice(0, 6)}...`,
  });
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
