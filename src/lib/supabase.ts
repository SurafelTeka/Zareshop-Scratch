import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://bpvqefrgwgbbqurogava.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwdnFlZnJnd2diYnF1cm9nYXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzEwOTAsImV4cCI6MjA2NTgwNzA5MH0.tGWSMKho9ygE4GB9NZdm4abwlGd7Fcw2h_Q6RpO02gE';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };