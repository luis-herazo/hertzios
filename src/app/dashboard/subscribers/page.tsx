import { getSubscribers } from '@/actions/subscribe'
import AppTitle from '@/components/appTitle'

export default async function SubscribersPage() {
  const subscribers = await getSubscribers()

  return (
    <div className="px-4 sm:px-0">
      <div className="mb-8">
        <AppTitle Name="Suscriptores del Boletín" />
        <p className="text-muted-foreground mt-2">
          Lista de correos registrados desde los artículos del blog.
        </p>
      </div>

      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-muted-foreground">
            <thead className="text-xs text-foreground uppercase bg-muted/50 border-b border-border/50">
              <tr>
                <th scope="col" className="px-6 py-4">Correo Electrónico</th>
                <th scope="col" className="px-6 py-4">Fecha de Suscripción</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub: any) => (
                <tr key={sub.id} className="border-b border-border/10 hover:bg-muted/30 transition-colors">
                  <th scope="row" className="px-6 py-4 font-medium text-foreground whitespace-nowrap">
                    {sub.email}
                  </th>
                  <td className="px-6 py-4">
                    {new Date(sub.created_at).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                </tr>
              ))}
              {subscribers.length === 0 && (
                <tr>
                  <td colSpan={2} className="px-6 py-8 text-center text-muted-foreground">
                    Todavía no hay suscriptores.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <div className="text-sm text-muted-foreground">
          Total de suscriptores: <span className="font-bold text-foreground">{subscribers.length}</span>
        </div>
      </div>
    </div>
  )
}
