import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://frexwexrsxfsysanpyge.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyZXh3ZXhyc3hmc3lzYW5weWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MTAzNDAsImV4cCI6MjAxNTE4NjM0MH0.u9yHpqeKpwz6eGss1TmkdclWdtgksxXZTAyUokrPLLY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
