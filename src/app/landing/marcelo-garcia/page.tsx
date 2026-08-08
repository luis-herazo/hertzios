import type { Metadata } from "next";
import Link from "next/link";
import { 
  Database, 
  Search, 
  TrendingUp, 
  Award, 
  Scale, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ChevronRight, 
  ArrowRight,
  GitBranch,
  BarChart4,
  FileCheck2,
  AlertCircle
} from "lucide-react";
import ConsultingForm from "@/components/ConsultingForm";
import ScrollReveal from "@/components/ScrollReveal";
import { isLandingActive } from "@/actions/landings";

export const metadata: Metadata = {
  title: "Marcelo García | Consultoría Especializada en TI & Operaciones",
  description:
    "Transforme el caos operativo en decisiones rentables. Gobierno de Datos, Auditoría de Inventarios, Control Patrimonial e Indicadores de Gestión (KPIs) con rigor forense.",
  alternates: {
    canonical: "/landing/marcelo-garcia",
  },
};

export default async function MarceloGarciaLandingPage() {
  const active = await isLandingActive("marcelo-garcia");
  const whatsappUrl1 = "https://wa.me/584164144017?text=Hola%20Marcelo,%20vi%20tu%20landing%20page%20y%20me%20gustar%C3%ADa%20solicitar%20un%20diagn%C3%B3stico%20inicial%20de%20operaciones%20para%20mi%20empresa.";
  const whatsappUrl2 = "https://wa.me/584168337914?text=Hola%20Marcelo,%20vi%20tu%20landing%20page%20y%20me%20gustar%C3%ADa%20solicitar%20un%20diagn%C3%B3stico%20inicial%20de%20operaciones%20para%20mi%20empresa.";

  if (!active) {
    return (
      <div className="min-h-screen text-slate-100 bg-[#070f1e] flex flex-col justify-center items-center p-6 text-center font-sans">
        <div className="max-w-md p-8 rounded-2xl border border-white/10 bg-[#0d1e3d]/85 shadow-2xl backdrop-blur-md space-y-6">
          <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
            <AlertCircle className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">Consultoría Temporalmente Inactiva</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            La landing page de servicios de Marcelo García se encuentra temporalmente inactiva por mantenimiento. Si necesita comunicarse directamente con él, puede hacerlo a través de WhatsApp o correo electrónico.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <a href={whatsappUrl1} className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all">
              Escribir a Marcelo por WhatsApp
            </a>
            <a href="mailto:mgarcia845@gmail.com" className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all">
              Enviar Correo
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-100 bg-[#070f1e] overflow-x-hidden font-sans">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#0f2347]/40 to-transparent pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Profile/Value Pitch */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  Consultoría Especializada en TI & Operaciones
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Marcelo García
                </h1>
                
                <p className="text-lg sm:text-xl font-medium text-cyan-300">
                  Especialista en Gobierno de Datos, Auditoría de Inventarios & Control Patrimonial
                </p>

                {/* Slogan Card */}
                <div className="p-6 rounded-xl border border-cyan-500/20 bg-[#0d2244]/60 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500"></div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    "Transforme el caos operativo en decisiones rentables"
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Ayudo a empresas y organizaciones a eliminar las fugas de inventario, estructurar sus bases de datos dispersas y construir indicadores clave (KPIs) confiables para una gestión transparente y eficiente.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a 
                    href="#diagnostico" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all text-sm shadow-lg shadow-cyan-500/20"
                  >
                    Agendar Diagnóstico Inicial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a 
                    href="mailto:mgarcia845@gmail.com" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-semibold transition-all text-sm"
                  >
                    <Mail className="mr-2 h-4 w-4 text-cyan-400" />
                    mgarcia845@gmail.com
                  </a>
                </div>

                {/* Phone badges */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-cyan-400" />
                    Teléfonos de contacto:
                  </span>
                  <a href={whatsappUrl1} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-mono">
                    0416-4144017 (WhatsApp)
                  </a>
                  <span className="hidden sm:inline text-slate-600">|</span>
                  <a href={whatsappUrl2} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-mono">
                    0416-8337914 (WhatsApp)
                  </a>
                </div>
              </div>

              {/* Form Block */}
              <div id="diagnostico" className="lg:col-span-5">
                <ConsultingForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-12 bg-[#09152b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              {
                icon: <Award className="h-10 w-10 text-cyan-400" />,
                title: "+12 Años de Experiencia",
                desc: "Trayectoria comprobada liderando proyectos complejos de auditoría logística y gobierno de datos en organizaciones comerciales y públicas."
              },
              {
                icon: <Scale className="h-10 w-10 text-cyan-400" />,
                title: "Rigor Forense y Técnico",
                desc: "Análisis milimétrico de inconsistencias. No solo contamos activos; reconstruimos los procesos operativos para sanear fugas."
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-cyan-400" />,
                title: "Resultados Medibles",
                desc: "Ahorros operativos inmediatos mediante la identificación de mermas y una visibilidad del 100% sobre la información gerencial."
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 p-5 rounded-xl border border-white/5 bg-[#0a1833]/40">
                <div className="shrink-0 flex items-center justify-center mx-auto md:mx-0 w-14 h-14 rounded-lg bg-cyan-950 text-cyan-400">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Portafolio de Servicios de Consultoría
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base">
              Soluciones estructuradas a dos de los desafíos más críticos de cualquier organización: la calidad de sus datos estratégicos y el control riguroso de su inventario físico.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Card 1 */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0b1d3a]/60 relative overflow-hidden group hover:border-cyan-500/30 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 -z-10 group-hover:scale-110 transition-transform">
                <Database className="h-40 w-40 text-cyan-400" />
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-cyan-950/80">
                    Línea de Servicio 01
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-4">
                    Limpieza, Estructuración y Curación de Datos (Data Governance)
                  </h3>
                  <p className="text-xs text-cyan-300/80 mt-1 uppercase tracking-wider font-semibold">
                    Optimización & Calidad de Información Gerencial
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Transformamos bases de datos desorganizadas y hojas de cálculo dispersas en fuentes únicas de verdad para la toma de decisiones. Diseñamos la estructura lógica para reportes directivos transparentes.
                </p>

                <ul className="space-y-3.5 pt-2">
                  {[
                    { title: "Normalización y Depuración", desc: "Corrección de registros duplicados, inconsistencias tipográficas, estandarización de formatos de datos y remediación de errores históricos." },
                    { title: "Migración e Integración", desc: "Estrategia técnica para mover datos entre sistemas (ERP, CRMs) de manera segura y sin pérdida de información de valor." },
                    { title: "Tableros de Control & KPIs", desc: "Estructuración de indicadores clave de rendimiento (KPIs) confiables e interactivos para el monitoreo en tiempo real de operaciones." },
                    { title: "Gobierno de Datos", desc: "Definición de políticas, roles y flujos de aprobación para asegurar que los datos del negocio sigan limpios y estructurados a largo plazo." }
                  ].map((sub, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 p-1 rounded-full bg-cyan-500/10 text-cyan-400 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-200 block">{sub.title}</strong>
                        <span className="text-xs text-slate-400 block mt-0.5">{sub.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a 
                  href="#diagnostico" 
                  className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Consultar sobre Gobierno de Datos
                  <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Service Card 2 */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0b1d3a]/60 relative overflow-hidden group hover:border-cyan-500/30 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 -z-10 group-hover:scale-110 transition-transform">
                <Search className="h-40 w-40 text-cyan-400" />
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-cyan-950/80">
                    Línea de Servicio 02
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-4">
                    Auditoría y Control de Inventarios & Bienes Patrimoniales
                  </h3>
                  <p className="text-xs text-cyan-300/80 mt-1 uppercase tracking-wider font-semibold">
                    Protección de Activos & Trazabilidad Logística
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Protegemos el patrimonio real de su empresa. Realizamos auditorías forenses de stock físico, identificamos el origen de las mermas operativas y estructuramos el control de activos fijos de forma auditable.
                </p>

                <ul className="space-y-3.5 pt-2">
                  {[
                    { title: "Auditoría Física y Conciliación", desc: "Toma física de inventarios e inventario general de activos fijos (maquinaria, mobiliario, TI), cruzando el stock real contra los libros contables." },
                    { title: "Trazabilidad Patrimonial", desc: "Historial completo de activos: asignaciones de responsabilidad por departamento, traslados, bajas y depreciaciones técnicas." },
                    { title: "Detección de Inconsistencias", desc: "Investigación detallada de pérdidas misteriosas, errores de facturación, fallas de recepción logística y fugas en almacén." },
                    { title: "Manuales de Procedimientos", desc: "Elaboración de manuales a medida para las operaciones diarias de almacén, compras, recepciones y auditorías periódicas internas." }
                  ].map((sub, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 p-1 rounded-full bg-cyan-500/10 text-cyan-400 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-200 block">{sub.title}</strong>
                        <span className="text-xs text-slate-400 block mt-0.5">{sub.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a 
                  href="#diagnostico" 
                  className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Consultar sobre Auditoría de Inventarios
                  <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sinergy Section (Hertzios Integration) */}
      <section className="py-20 border-t border-b border-white/5 bg-[#091326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Sinergia de Consultoría e Ingeniería de Software
              </h2>
              <p className="text-slate-400 mt-2 text-sm">
                ¿Qué pasa cuando el diagnóstico de procesos físicos se une con la ingeniería de software a medida?
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-cyan-300">
                  De la auditoría forense al sistema automatizado
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Muchas consultorías tradicionales terminan entregando un reporte en PDF que queda archivado. Al trabajar en alianza directa con <strong>Hertzios</strong>, resolvemos el problema de raíz:
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="shrink-0 h-6 w-6 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Levantamiento Físico y Gobierno (Marcelo García)</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Auditoría física exhaustiva, limpieza de bases de datos iniciales y diagramación de los flujos óptimos de trabajo.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="shrink-0 h-6 w-6 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Automatización y Desarrollo Técnico (Hertzios)</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Integración de APIs entre el punto de venta (POS) y almacén, creación de tableros de control con KPIs y alarmas automáticas ante discrepancias.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0b1b36] shadow-xl space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-cyan-400" />
                  Ecosistema Operativo Unificado
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Esta sinergia es ideal para empresas de retail, distribuidoras comerciales, clínicas, manufactura y operaciones logísticas complejas.
                </p>
                <div className="grid grid-cols-2 gap-3 text-center pt-2">
                  <div className="p-3 rounded-lg border border-white/5 bg-[#0d2142] text-xs">
                    <BarChart4 className="h-5 w-5 text-cyan-400 mx-auto mb-1.5" />
                    <span className="font-semibold text-slate-200 block">Tableros Directivos</span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">Datos sin sesgo</span>
                  </div>
                  <div className="p-3 rounded-lg border border-white/5 bg-[#0d2142] text-xs">
                    <FileCheck2 className="h-5 w-5 text-cyan-400 mx-auto mb-1.5" />
                    <span className="font-semibold text-slate-200 block">Cero Mermas</span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">Monitoreo active</span>
                  </div>
                </div>
                <div className="text-center pt-2">
                  <a 
                    href="#diagnostico" 
                    className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Agendar mi sesión de consultoría integrada
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-white">
              ¿Listo para ordenar sus operaciones?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              No deje que las fugas silenciosas de inventario y las decisiones basadas en datos desorganizados continúen minando su rentabilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href={whatsappUrl1} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all text-sm shadow-lg shadow-emerald-600/20"
              >
                Escribir por WhatsApp (Línea 1)
              </a>
              <a 
                href="#diagnostico" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all text-sm"
              >
                Reservar Sesión en Línea
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-white/5 bg-[#050b16] text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Marcelo García. Todos los derechos reservados.</p>
        <p className="mt-1">
          Consultoría en Alianza con{" "}
          <Link href="/" className="text-cyan-400 hover:underline">
            Hertzios
          </Link>
        </p>
      </footer>
    </div>
  );
}
