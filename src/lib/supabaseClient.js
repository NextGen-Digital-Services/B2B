import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Fallback warning for development setup
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase credentials are missing. Forms will operate in fallback mode, submitting direct API triggers and logging submissions.'
  );
}

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export default supabase;
