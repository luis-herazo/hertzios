import type { Metadata } from "next";
import { login } from './actions'
import AppTitle from "@/components/appTitle"

export const metadata: Metadata = {
  title: "Iniciar Sesión | Hertzios",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/login",
  },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const params = await searchParams
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <AppTitle Name="Iniciar Sesión" />
          <p className="text-muted-foreground text-sm">Ingresa a tu cuenta para administrar el blog.</p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-foreground">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
              placeholder="tu@email.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-semibold text-foreground">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
              placeholder="••••••••"
            />
          </div>
          
          <button
            formAction={login}
            className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
          >
            Entrar
          </button>

          {params?.message && (
            <p className="mt-4 text-center text-sm text-destructive font-medium bg-destructive/10 py-2 rounded-xl border border-destructive/20">
              {params.message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
