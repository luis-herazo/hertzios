import { getBlogPosts } from '@/actions/blog'
import Link from 'next/link'
import AppTitle from '@/components/appTitle'

export default async function DashboardPage() {
  const posts = await getBlogPosts()

  return (
    <div className="px-4 sm:px-0">
      <div className="flex justify-between items-center mb-8">
        <AppTitle Name="Administrar Posts" />
        <Link 
          href="/dashboard/create"
          className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          Crear Nuevo
        </Link>
      </div>

      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-muted-foreground">
            <thead className="text-xs text-foreground uppercase bg-muted/50 border-b border-border/50">
              <tr>
                <th scope="col" className="px-6 py-4">Título</th>
                <th scope="col" className="px-6 py-4">Fecha</th>
                <th scope="col" className="px-6 py-4">Categoría</th>
                <th scope="col" className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-border/10 hover:bg-muted/30 transition-colors">
                  <th scope="row" className="px-6 py-4 font-medium text-foreground whitespace-nowrap">
                    {post.title}
                  </th>
                  <td className="px-6 py-4">
                    {post.date}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/blog/${post.slug}`} target="_blank" className="font-medium text-secondary hover:underline mr-4">
                      Ver
                    </Link>
                    <Link href={`/dashboard/edit/${post.id}`} className="font-medium text-primary hover:underline">
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                    No hay posts publicados todavía.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
