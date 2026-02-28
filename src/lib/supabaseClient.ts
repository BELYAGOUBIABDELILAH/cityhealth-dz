import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://qedotqjxndtmskcgrajt.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZG90cWp4bmR0bXNrY2dyYWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyOTYwOTksImV4cCI6MjA4Nzg3MjA5OX0.PlCld0g_4ccvxIUWqAO8FebK0myYGK2EZZySHUUMBGQ';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});

export { SUPABASE_URL };
