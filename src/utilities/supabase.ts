import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_API
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON

export const supabaseStorage = import.meta.env.VITE_SUPABASE_STORAGE
export const supabaseValkyrieDatabase = import.meta.env.VITE_SUPABASE_VALKYRIE_DATABASE
export const supabaseFlamechaserDatabase = import.meta.env.VITE_SUPABASE_FLAMECHASER_DATABASE
export const supabaseExclusiveDatabase = import.meta.env.VITE_SUPABASE_EXCLUSIVE_DATABASE
export const supabaseReviewDatabase = import.meta.env.VITE_SUPABASE_REVIEW_DATABASE
export const supabase = createClient(supabaseUrl, supabaseAnonKey)