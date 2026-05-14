import { redirect, notFound } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getBlogPostById, updatePost } from '@/actions/blog'
import AppTitle from '@/components/appTitle'
import Link from 'next/link'
import WysiwygEditor from '@/components/wysiwyg-editor'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getBlogPostById(id);

  if (!post) {
    notFound();
  }

  async function handleSubmit(formData: FormData) {
    'use server'
    
    try {
      await updatePost(formData)
    } catch (error) {
      console.error(error)
      redirect(`/dashboard/edit/${id}?error=true`)
    }
    
    revalidatePath('/blog')
    revalidatePath('/dashboard')
    revalidatePath(`/blog/${post?.slug}`)
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
        <AppTitle Name="Editar Post" />
      </div>

      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
        <form action={handleSubmit} className="flex flex-col gap-6">
          <input type="hidden" name="id" value={post.id} />
          <input type="hidden" name="currentImage" value={post.image || ''} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-semibold text-foreground">Título del Artículo</label>
              <input
                id="title"
                name="title"
                type="text"
                required
                defaultValue={post.title}
                className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-sm font-semibold text-foreground">Categoría</label>
              <input
                id="category"
                name="category"
                type="text"
                required
                defaultValue={post.category}
                className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
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
              defaultValue={post.author}
              className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="excerpt" className="text-sm font-semibold text-foreground">Resumen (Excerpt)</label>
            <textarea
              id="excerpt"
              name="excerpt"
              rows={3}
              required
              defaultValue={post.excerpt}
              className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-sm font-semibold text-foreground">Actualizar Imagen Principal</label>
            {post.image && (
              <div className="text-xs text-muted-foreground mb-2">
                Imagen actual: <a href={post.image} target="_blank" className="text-primary hover:underline">Ver</a>
              </div>
            )}
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
            />
            <p className="text-xs text-muted-foreground">Opcional. Sube una nueva imagen si quieres reemplazar la actual.</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="content" className="text-sm font-semibold text-foreground">Contenido</label>
            <WysiwygEditor initialValue={post.content} />
          </div>

          <div className="flex justify-end pt-4 border-t border-border/50">
            <button
              type="submit"
              className="px-8 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
