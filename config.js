const SUPABASE_URL = 'https://khscktqunxezfeibzotr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtoc2NrdHF1bnhlemZlaWJ6b3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3MzQ3NjgsImV4cCI6MjEwNDMxMDc2OH0.C_O1yzywEhDcTpWCUcL1EtqDGJj2NiHwgwbYLZBKrX4';

// Menggunakan nama variabel 'db' agar tidak bentrok dengan CDN Supabase
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
