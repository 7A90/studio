import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yddbgayalsebkjutjnif.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkZGJnYXlhbHNlYmtqdXRqbmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0OTI4ODcsImV4cCI6MjAzMjA2ODg4N30.6-h13sv05blBguTlbWAdxQ_N195vEMl-M9fprJ9_MAQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
