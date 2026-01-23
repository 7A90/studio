
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.yddbgayalsebkjutjnif.supabase.co
const supabaseAnonKey = process.env.sb_publishable_6-h13sv05blBguTlbWAdxQ_N195vEMl

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
