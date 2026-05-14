import { supabase as legacySupabase } from '@/lib/supabase'
import { createClient } from '@/utils/supabase/server'
import { BlogPost } from '@/types/blog'
import { blogPosts as localPosts } from '@/data/blog-posts'

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await legacySupabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching posts from Supabase:', error)
      return localPosts as BlogPost[]
    }

    if (!data || data.length === 0) {
      return localPosts as BlogPost[]
    }

    return data as BlogPost[]
  } catch (err) {
    console.error('Unexpected error fetching posts:', err)
    return localPosts as BlogPost[]
  }
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await legacySupabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error(`Error fetching post with id ${id}:`, error)
      return localPosts.find(p => p.id === id) as BlogPost || null
    }

    return data as BlogPost
  } catch (err) {
    console.error('Unexpected error fetching post:', err)
    return localPosts.find(p => p.id === id) as BlogPost || null
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await legacySupabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) {
      console.error(`Error fetching post with slug ${slug}:`, error)
      return localPosts.find(p => p.slug === slug) as BlogPost || null
    }

    return data as BlogPost
  } catch (err) {
    console.error('Unexpected error fetching post:', err)
    return localPosts.find(p => p.slug === slug) as BlogPost || null
  }
}

export async function createPost(formData: FormData) {
  const supabaseAuth = await createClient();
  const { data: { user } } = await supabaseAuth.auth.getUser();
  
  if (!user) {
    throw new Error('Debes iniciar sesión para crear un post');
  }

  const title = formData.get('title') as string;
  // Generate simple slug from title
  let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  
  // Handle image upload
  let imageUrl = null;
  const imageFile = formData.get('image') as File;
  
  if (imageFile && imageFile.size > 0) {
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${slug}/${fileName}`;
    
    const { error: uploadError, data: uploadData } = await legacySupabase.storage
      .from('blog-images')
      .upload(filePath, imageFile);
      
    if (uploadError) {
      console.error('Error uploading image:', uploadError);
      // We continue without image rather than failing the whole post
    } else {
      const { data: { publicUrl } } = legacySupabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);
      imageUrl = publicUrl;
    }
  }
  
  const newPost = {
    title,
    slug,
    excerpt: formData.get('excerpt') as string,
    content: formData.get('content') as string,
    category: formData.get('category') as string,
    author: formData.get('author') as string,
    date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    image: imageUrl,
  };

  const { error } = await legacySupabase
    .from('posts')
    .insert([newPost]);

  if (error) {
    console.error('Error creating post:', error);
    throw new Error('Error al crear el post en la base de datos');
  }
}

export async function updatePost(formData: FormData) {
  const supabaseAuth = await createClient();
  const { data: { user } } = await supabaseAuth.auth.getUser();
  
  if (!user) {
    throw new Error('Debes iniciar sesión para editar un post');
  }

  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  
  // Optional Image upload
  let imageUrl = formData.get('currentImage') as string || null;
  const imageFile = formData.get('image') as File;
  
  if (imageFile && imageFile.size > 0) {
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${slug}/${fileName}`;
    
    const { error: uploadError } = await legacySupabase.storage
      .from('blog-images')
      .upload(filePath, imageFile);
      
    if (!uploadError) {
      const { data: { publicUrl } } = legacySupabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);
      imageUrl = publicUrl;
    }
  }
  
  const updatedPost = {
    title,
    slug,
    excerpt: formData.get('excerpt') as string,
    content: formData.get('content') as string,
    category: formData.get('category') as string,
    author: formData.get('author') as string,
    image: imageUrl,
  };

  const { error } = await legacySupabase
    .from('posts')
    .update(updatedPost)
    .eq('id', id);

  if (error) {
    console.error('Error updating post:', error);
    throw new Error('Error al actualizar el post en la base de datos');
  }
}


