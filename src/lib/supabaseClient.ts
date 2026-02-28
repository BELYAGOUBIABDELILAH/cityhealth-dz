import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://vcdcywovuwksnrenmssq.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjZGN5d292dXdrc25yZW5tc3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyODc4ODksImV4cCI6MjA4Nzg2Mzg4OX0.bO5g3PvS-NqFhCrIcUnUIlWXgbD3IkaHxJGIr1se1DY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export { SUPABASE_URL };
