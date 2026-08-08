"use server";

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export interface LandingPageData {
  id?: string;
  slug: string;
  title: string;
  active: boolean;
  created_at?: string;
}

const localLandingsFallback: LandingPageData[] = [
  { slug: 'marcelo-garcia', title: 'Marcelo García - TI & Operaciones', active: true },
  { slug: 'luis-herazo', title: 'Luis Herazo - CEO & Full Stack Developer', active: true }
];

export async function getLandings(): Promise<LandingPageData[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('landings')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching landings from Supabase, using local fallback:', error);
      return localLandingsFallback;
    }
    
    if (!data || data.length === 0) {
      return localLandingsFallback;
    }
    
    return data as LandingPageData[];
  } catch (err) {
    console.error('Unexpected error fetching landings:', err);
    return localLandingsFallback;
  }
}

export async function isLandingActive(slug: string): Promise<boolean> {
  const landings = await getLandings();
  const landing = landings.find(l => l.slug === slug);
  return landing ? landing.active : false;
}

export async function toggleLandingActive(slug: string, active: boolean): Promise<void> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Debes iniciar sesión para administrar las landings');
  }

  try {
    const { data: existing, error: checkError } = await supabase
      .from('landings')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (checkError) throw checkError;

    if (!existing) {
      // Create if it doesn't exist
      const defaultInfo = localLandingsFallback.find(l => l.slug === slug);
      const newLanding = {
        slug,
        title: defaultInfo ? defaultInfo.title : slug,
        active: active
      };
      const { error: insertError } = await supabase
        .from('landings')
        .insert([newLanding]);
      if (insertError) throw insertError;
    } else {
      // Update existing
      const { error: updateError } = await supabase
        .from('landings')
        .update({ active })
        .eq('slug', slug);
      if (updateError) throw updateError;
    }

    revalidatePath(`/landing/${slug}`);
    revalidatePath('/dashboard/landings');
  } catch (err) {
    console.error('Error toggling landing active status in Supabase:', err);
    throw new Error('Error al actualizar el estado de la landing en la base de datos.');
  }
}

// Server action wrapper for form submissions or interactive click triggers
export async function toggleLandingAction(formData: FormData): Promise<void> {
  const slug = formData.get('slug') as string;
  const active = formData.get('active') === 'true';
  
  if (!slug) return;
  await toggleLandingActive(slug, active);
}
