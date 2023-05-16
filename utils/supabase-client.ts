import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PRIVATE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or private key is missing');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
