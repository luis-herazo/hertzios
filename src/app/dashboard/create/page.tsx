import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { createPost } from '@/actions/blog'
import AppTitle from '@/components/appTitle'
import Link from 'next/link'
import WysiwygEditor from '@/components/wysiwyg-editor'

export default function CreatePostPage() {
  
  async function handleSubmit(formData: FormData) {
    'use server'
    
    try {
      await createPost(formData)
    } catch (error) {
      console.error(error)
      redirect('/dashboard/create?error=true')
    }
    
    revalidatePath('/blog')
    revalidatePath('/dashboard')
    redirect('/dashboard')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-0">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard" className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
          <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <AppTitle Name="Crear Nuevo Post" />
      </div>

      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
        <form action={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-semibold text-foreground">Título del Artículo</label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
                placeholder="Ej: El futuro de la IA"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-sm font-semibold text-foreground">Categoría</label>
              <input
                id="category"
                name="category"
                type="text"
                required
                className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
                placeholder="Ej: Tecnología"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="author" className="text-sm font-semibold text-foreground">Autor</label>
            <input
              id="author"
              name="author"
              type="text"
              required
              className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
              placeholder="Tu nombre"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="excerpt" className="text-sm font-semibold text-foreground">Resumen (Excerpt)</label>
            <textarea
              id="excerpt"
              name="excerpt"
              rows={3}
              required
              className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full resize-none"
              placeholder="Un breve resumen que aparecerá en la tarjeta del blog..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-sm font-semibold text-foreground">Imagen Principal</label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
            />
            <p className="text-xs text-muted-foreground">Opcional. Debes configurar el bucket 'blog-images' en Supabase para que funcione.</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="content" className="text-sm font-semibold text-foreground">Contenido</label>
            <WysiwygEditor />
          </div>

          <div className="flex justify-end pt-4 border-t border-border/50">
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Publicar Artículo
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
