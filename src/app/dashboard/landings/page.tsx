import { getLandings, toggleLandingAction } from '@/actions/landings';
import Link from 'next/link';
import AppTitle from '@/components/appTitle';
import { Eye, ShieldCheck, ShieldAlert } from 'lucide-react';

export default async function AdminLandingsPage() {
  const landings = await getLandings();

  return (
    <div className="px-4 sm:px-0">
      <div className="flex justify-between items-center mb-8">
        <AppTitle Name="Administrar Landings" />
      </div>

      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-muted-foreground">
            <thead className="text-xs text-foreground uppercase bg-muted/50 border-b border-border/50">
              <tr>
                <th scope="col" className="px-6 py-4">Landing Page</th>
                <th scope="col" className="px-6 py-4">Ruta (Slug)</th>
                <th scope="col" className="px-6 py-4">Estado</th>
                <th scope="col" className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {landings.map((landing) => (
                <tr key={landing.slug} className="border-b border-border/10 hover:bg-muted/30 transition-colors">
                  <th scope="row" className="px-6 py-4 font-semibold text-foreground whitespace-nowrap">
                    {landing.title}
                  </th>
                  <td className="px-6 py-4 font-mono text-xs">
                    /landing/{landing.slug}
                  </td>
                  <td className="px-6 py-4">
                    {landing.active ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Activa
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-rose-500/10 text-rose-400 rounded-full text-xs font-semibold border border-rose-500/20">
                        <ShieldAlert className="h-3.5 w-3.5" />
                        Inactiva
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end items-center gap-4">
                      {landing.active && (
                        <Link 
                          href={`/landing/${landing.slug}`} 
                          target="_blank" 
                          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <Eye className="h-4 w-4" />
                          Ver Landing
                        </Link>
                      )}
                      
                      <form action={toggleLandingAction}>
                        <input type="hidden" name="slug" value={landing.slug} />
                        <input type="hidden" name="active" value={landing.active ? 'false' : 'true'} />
                        <button 
                          type="submit" 
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                            landing.active 
                              ? 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                              : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          }`}
                        >
                          {landing.active ? 'Desactivar' : 'Activar'}
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
              {landings.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                    No hay landings registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
