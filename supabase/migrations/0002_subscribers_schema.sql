-- Supabase Migration: 0002_subscribers_schema.sql
-- Create the subscribers table for the newsletter

CREATE TABLE IF NOT EXISTS public.subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Note: No special storage policies needed here. 
-- Ensure that your service role key or API is securely inserting these records.
