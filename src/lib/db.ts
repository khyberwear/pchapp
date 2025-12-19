import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Supabase Admin client (Service Role) - use ONLY in server-side API routes
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';
export const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : supabase; // Fallback to anon client (will fail for protected RLS)

// Deprecated: Helper function to execute queries - keeping for type compatibility during migration if needed, 
// but calls should be replaced.
// For now, we will NOT export executeQuery, getAll, or getOne.
// The calling code MUST be updated to use 'supabase' client directly.

// No-op for initializeDatabase as Supabase tables should be created via dashboard/migrations
export async function initializeDatabase() {
  console.log('Using Supabase - make sure "orders" table exists in your project.');
  return Promise.resolve();
}

