import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  const signOut = async () => {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
    return redirect('/login')
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 border-r border-border/50 bg-card/50 backdrop-blur-md z-50 hidden md:flex flex-col">
        <div className="flex flex-col h-full pt-24 px-4 pb-6">
          <div className="mb-8 px-4">
            <span className="text-xl font-bold text-primary">Admin</span>
          </div>
          <nav className="flex-1 space-y-2">
            <Link 
              href="/dashboard" 
              className="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5L18.5 7H20" />
              </svg>
              Listar Posts
            </Link>
            <Link 
              href="/dashboard/create" 
              className="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Crear Nuevo Post
            </Link>
            <Link 
              href="/dashboard/subscribers" 
              className="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Suscriptores
            </Link>
          </nav>
          
          <div className="p-4 border-t border-border/50 mb-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground truncate" title={user.email}>{user.email}</span>
              <form action={signOut}>
                <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-xl transition-colors">
                  <svg className="mr-3 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Cerrar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content wrapper */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-30 border-b border-border/50 bg-background/95 backdrop-blur px-4 py-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">Admin</span>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">Posts</Link>
            <Link href="/dashboard/create" className="text-sm font-medium text-muted-foreground hover:text-foreground">Crear</Link>
            <Link href="/dashboard/subscribers" className="text-sm font-medium text-muted-foreground hover:text-foreground">Suscritos</Link>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 pt-24 md:pt-24">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
