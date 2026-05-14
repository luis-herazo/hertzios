'use server';

import { supabase } from '@/lib/supabase';

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return { error: 'Por favor ingresa un correo válido.' };
  }

  try {
    const { error } = await supabase
      .from('subscribers')
      .insert([{ email }]);

    if (error) {
      // Postgres unique violation error code is usually '23505'
      if (error.code === '23505') {
        return { error: 'Este correo ya está suscrito.' };
      }
      console.error('Error inserting subscriber:', error);
      return { error: 'Ocurrió un error. Inténtalo más tarde.' };
    }

    return { success: true };
  } catch (err) {
    console.error('Unexpected error subscribing:', err);
    return { error: 'Ocurrió un error inesperado.' };
  }
}

export async function getSubscribers() {
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching subscribers:', error);
      return [];
    }

    return data;
  } catch (err) {
    console.error('Unexpected error fetching subscribers:', err);
    return [];
  }
}

