import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_API
const supabaseAnonKey: string = import.meta.env.VITE_SUPABASE_ANON

export const supabaseValkyrieDatabase: string = import.meta.env.VITE_SUPABASE_VALKYRIE_DATABASE
export const supabaseFlamechaserDatabase: string = import.meta.env.VITE_SUPABASE_FLAMECHASER_DATABASE
export const supabaseExclusiveDatabase: string = import.meta.env.VITE_SUPABASE_EXCLUSIVE_DATABASE
export const supabaseReviewDatabase: string = import.meta.env.VITE_SUPABASE_REVIEW_DATABASE
export const supabase = createClient(supabaseUrl, supabaseAnonKey)