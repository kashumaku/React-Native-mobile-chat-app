import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rykztcyrcwdyjaokvucw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5a3p0Y3lyY3dkeWphb2t2dWN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5MTg4NDksImV4cCI6MjAyNjQ5NDg0OX0.5z_V2A2_bSwyTTSyRdnwni_0xdAyA5xiHMoTqQlJjgA";
export const supabase = createClient(supabaseUrl, supabaseKey);
