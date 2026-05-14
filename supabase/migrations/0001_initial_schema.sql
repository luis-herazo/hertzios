-- Supabase Migration: 0001_initial_schema.sql
-- Create the posts table for the blog

CREATE TABLE IF NOT EXISTS public.posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  date text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image text,
  created_at timestamp with time zone DEFAULT now()
);

-- Note: In order for images to be uploaded, you will need to create a Storage Bucket named 'blog-images'
-- and set it to 'Public' in the Supabase Dashboard (Storage -> Create new bucket).
-- Also, ensure you add an access policy (Storage -> Policies) that allows INSERT for authenticated users,
-- and SELECT for all users.
