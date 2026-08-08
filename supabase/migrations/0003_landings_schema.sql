-- Supabase Migration: 0003_landings_schema.sql
-- Create the landings table to toggle active states

CREATE TABLE IF NOT EXISTS public.landings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  active boolean DEFAULT true NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Insert initial landings if they don't exist
INSERT INTO public.landings (slug, title, active)
VALUES 
  ('marcelo-garcia', 'Marcelo García - TI & Operaciones', true),
  ('luis-herazo', 'Luis Herazo - CEO & Full Stack Developer', true)
ON CONFLICT (slug) DO NOTHING;
