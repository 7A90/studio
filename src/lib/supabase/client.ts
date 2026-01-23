import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.https://supabase.com/dashboard/project/yddbgayalsebkjutjnif;
const supabaseAnonKey = process.env.yddbgayalsebkjutjnif;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
