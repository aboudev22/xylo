import { createClient } from "@supabase/supabase-js";

// On récupère les variables d'environnement
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// On initialise le client unique
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
