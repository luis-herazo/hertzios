import type { Metadata } from "next";
import Link from "next/link";
import { 
  Code2, 
  Award, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ChevronRight, 
  ArrowRight,
  Cpu,
  Workflow,
  Lightbulb,
  Building,
  AlertCircle,
  Database,
  Globe,
  Settings,
  Sparkles,
  Layers
} from "lucide-react";
import LuisConsultingForm from "@/components/LuisConsultingForm";
import ScrollReveal from "@/components/ScrollReveal";
import { isLandingActive } from "@/actions/landings";

export const metadata: Metadata = {
  title: "Luis Alberto Herazo C. | Consultor TI & Desarrollador Senior",
  description:
    "Desarrollo de Software Full Stack, Automatización de Procesos con IA, Orquestación de Agentes y Dirección de Proyectos (Project Management) con más de 15 años de experiencia.",
  alternates: {
    canonical: "/landing/luis-herazo",
  },
};

export default async function LuisHerazoLandingPage() {
  const active = await isLandingActive("luis-herazo");
  const whatsappUrl = "https://wa.me/584241599502?text=Hola%20Luis,%20vi%20tu%20landing%20page%20y%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n%20estrat%C3%A9gica%20con%20tigo.";

  if (!active) {
    return (
      <div className="min-h-screen text-slate-100 bg-[#080b11] flex flex-col justify-center items-center p-6 text-center font-sans">
        <div className="max-w-md p-8 rounded-2xl border border-white/10 bg-[#12080e]/85 shadow-2xl backdrop-blur-md space-y-6">
          <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
            <AlertCircle className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">Consultoría Temporalmente Inactiva</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            La landing page de servicios de Luis Herazo se encuentra temporalmente inactiva por mantenimiento. Si necesita comunicarse directamente con él, puede hacerlo a través de WhatsApp o correo electrónico.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <a href={whatsappUrl} className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all">
              Escribir a Luis por WhatsApp
            </a>
            <a href="mailto:luis.herazo.c@gmail.com" className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all">
              Enviar Correo
            </a>
          </div>
        </div>
      </div>
    );
  }

  const skills = [
    {
      category: "Inteligencia Artificial",
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      items: [
        "Integración de LLMs (OpenAI, Anthropic, Gemini API)",
        "Despliegue local de modelos OS (Llama, Mistral)",
        "Orquestación de Agentes Inteligentes",
        "Automatización cognitiva de flujos de trabajo"
      ]
    },
    {
      category: "Lenguajes de Programación",
      icon: <Code2 className="h-5 w-5 text-primary" />,
      items: [
        "JavaScript / NodeJS / TypeScript",
        "C# (.NET Core & Blazor)",
        "PHP (Laravel, CodeIgniter, Yii)",
        "Python (Modelos de IA & scripting)",
        "Elixir, Java SE"
      ]
    },
    {
      category: "Frameworks & Frontend",
      icon: <Layers className="h-5 w-5 text-primary" />,
      items: [
        "Next.js, React, Tailwind CSS",
        "OutSystems Developer Cloud (ODC)",
        "ASP.NET MVC, Blazor Server",
        "Bootstrap, JQuery, CSS3"
      ]
    },
    {
      category: "Bases de Datos & CMS/CRM",
      icon: <Database className="h-5 w-5 text-primary" />,
      items: [
        "PostgreSQL, MySQL, SQL Server, Oracle",
        "Firebase (Auth, Firestore, Hosting)",
        "Wordpress, Prestashop",
        "SuiteCRM, vTiger CRM"
      ]
    },
    {
      category: "DevOps & Metodologías",
      icon: <Settings className="h-5 w-5 text-primary" />,
      items: [
        "CI/CD (Jenkins, Azure DevOps, GitHub Actions)",
        "AWS (Lambda, Cognito, S3, Route53, Organizations)",
        "Metodologías Ágiles (SCRUM)",
        "Principios SOLID & Arquitecturas Limpias"
      ]
    },
    {
      category: "Marketing Digital & Datos",
      icon: <Globe className="h-5 w-5 text-primary" />,
      items: [
        "SEO / Google Ads / Tracking (GA4)",
        "Estrategias de Email Marketing",
        "Diseño de Landings de conversión",
        "Automatización de generación de leads"
      ]
    }
  ];

  const certifications = [
    "Associate Reactive Developer - OutSystems",
    "Elixir Development - Udemy",
    "Desarrollo de Aplicaciones Móviles - Google",
    "ITIL V3 Certified - CET (Cantv)",
    "Java SE Developer - Benllisoft",
    "Oracle Enterprise Linux - Oracle",
    "Administración de Sistemas Linux I y II - AVG",
    "Asistente Técnico en Telecomunicaciones - ADV Systema",
    "Programación Avanzada 1 y 2 - CENEAC / UCV"
  ];

  return (
    <div className="min-h-screen text-slate-100 bg-[#080b11] overflow-x-hidden font-sans">
      {/* Ambient background light */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#1f0f15]/30 to-transparent pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Profile/Value Pitch */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                  CEO & Founder Hertzios | Consultor Tecnológico
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Luis Alberto Herazo C.
                </h1>
                
                <p className="text-lg sm:text-xl font-medium text-rose-400">
                  Desarrollador Senior | Project Manager | Consultor TI
                </p>

                {/* Slogan Card */}
                <div className="p-6 rounded-xl border border-primary/20 bg-[#12080e]/60 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    "Más de 15 años transformando necesidades de negocio en código e infraestructura de alta disponibilidad."
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Especialista en desarrollo full-stack, DevOps, pasarelas de pago y la orquestación e integración de Inteligencia Artificial (LLMs y Agentes inteligentes) tanto en la nube como en servidores locales (on-premise).
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a 
                    href="#sesion" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary hover:bg-[#d63347] text-white font-bold transition-all text-sm shadow-lg shadow-primary/20"
                  >
                    Agendar Sesión Técnica de 30 Minutos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a 
                    href="mailto:luis.herazo.c@gmail.com" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-semibold transition-all text-sm"
                  >
                    <Mail className="mr-2 h-4 w-4 text-primary" />
                    luis.herazo.c@gmail.com
                  </a>
                </div>

                {/* Phone & Info badges */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-primary" />
                    Teléfono de contacto directo:
                  </span>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-mono font-semibold">
                    +58 424 1599502 (WhatsApp)
                  </a>
                </div>
              </div>

              {/* Form Block */}
              <div id="sesion" className="lg:col-span-5">
                <LuisConsultingForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section className="py-20 bg-[#0b0e15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Matriz de Habilidades Técnicas
              </h2>
              <p className="text-slate-400 mt-3 text-sm">
                Tecnologías y metodologías dominadas a nivel de producción en proyectos reales.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                <div className="p-6 rounded-2xl border border-white/5 bg-[#12080e]/30 hover:border-primary/20 transition-all h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <h4 className="text-base font-bold text-white">{skill.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions & Architected Systems Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Sistemas & Soluciones Diseñadas
            </h2>
            <p className="text-slate-400 mt-3 text-sm">
              Casos reales de arquitecturas de software y soluciones técnicas que he diseñado, implementado y escalado a nivel de producción.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Plataformas de Telemedicina",
              subtitle: "Alta Disponibilidad & Tiempo Real",
              icon: <Cpu className="h-6 w-6 text-primary" />,
              desc: "Arquitectura serverless de alta disponibilidad en AWS (SES, Cognito, EventBridge, Lambda) e integración de videollamadas y mensajería en tiempo real (Twilio, Agora, Firebase)."
            },
            {
              title: "Sistemas Gubernamentales y Venta Masiva",
              subtitle: "Administración & Impresión Automatizada",
              icon: <Workflow className="h-6 w-6 text-primary" />,
              desc: "Diseño y despliegue CI/CD en Azure DevOps de sistemas de administración tributaria y venta de marbetes (ASC Puerto Rico), junto con servidores de impresión integrados en .NET y Blazor."
            },
            {
              title: "Desarrollo OutSystems Mobile Cloud",
              subtitle: "Aplicaciones Reactivas Corporativas",
              icon: <Layers className="h-6 w-6 text-primary" />,
              desc: "Desarrollo de interfaces móviles reactivas y lógica de negocio cloud para la nube corporativa de marcas de distribución y comercio retail a gran escala (MAVI México)."
            },
            {
              title: "Orquestación de Agentes & Modelos de IA",
              subtitle: "Modelos On-Premise & Cloud API",
              icon: <Sparkles className="h-6 w-6 text-primary" />,
              desc: "Orquestación de agentes autónomos inteligentes integrando modelos fundacionales (OpenAI, Gemini) y despliegue local (Llama, Mistral) en servidores locales on-premise."
            },
            {
              title: "Ecosistemas Backend & DevOps",
              subtitle: "Integración de Pasarelas & Bases de Datos",
              icon: <Database className="h-6 w-6 text-primary" />,
              desc: "Construcción de backends robustos en C#, Node.js y PHP, optimización de consultas en grandes bases de datos (SQL Server, Oracle, PostgreSQL) y pasarelas de pago."
            },
            {
              title: "Capacitación y Entrenamiento Técnico",
              subtitle: "Python, Desarrollo Web & Ciberseguridad",
              icon: <Lightbulb className="h-6 w-6 text-primary" />,
              desc: "Dirección de programas académicos y corporativos entrenando equipos técnicos en lenguajes modernos de programación, redes e infraestructura segura."
            }
          ].map((sol, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.05}>
              <div className="p-6 rounded-2xl border border-white/5 bg-[#12080e]/40 hover:border-primary/20 hover:bg-[#12080e]/60 transition-all h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {sol.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{sol.title}</h3>
                    <span className="text-[10px] text-rose-400 font-semibold uppercase tracking-wider block mt-0.5">{sol.subtitle}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-[#0b0e15] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Certificaciones y Acreditaciones
              </h2>
              <p className="text-slate-400 mt-2 text-xs sm:text-sm">
                Validaciones de entrenamiento técnico y metodológico.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-[#12080e]/20 hover:border-primary/20 transition-all"
              >
                <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <span className="text-xs font-semibold text-slate-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sinergy with Hertzios Section */}
      <section className="py-20 border-t border-b border-white/5 bg-[#090b10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-rose-400">
                  Respaldo Técnico Colectivo de Hertzios
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Como **CEO y Fundador de Hertzios**, mi asesoramiento estratégico y de arquitectura no es individual; cuenta con el respaldo operativo de todo nuestro equipo de ingeniería. Esto nos permite diseñar soluciones que escalan desde el MVP inicial hasta sistemas empresariales listos para transaccionar de forma masiva.
                </p>
                <div className="space-y-4 text-xs">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Aseguramiento de Calidad (QA) y auditoría técnica cruzada.</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Diseño de interfaces intuitivas y usabilidad certificada.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="p-8 rounded-2xl border border-white/5 bg-[#12080e] shadow-xl space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Estructura Tecnológica en Alianza
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Planifiquemos un diagnóstico inicial y diseñemos el stack idóneo para su empresa.
                </p>
                <div className="text-center pt-4">
                  <a 
                    href="#sesion" 
                    className="inline-flex items-center text-xs font-bold text-primary hover:underline transition-colors"
                  >
                    Agendar mi sesión estratégica con Luis
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
              ¿Hablamos sobre su próximo proyecto?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Establezcamos una conversación técnica sin costo para mapear requerimientos, cuellos de botella e integraciones complejas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all text-sm shadow-lg shadow-emerald-600/20"
              >
                Escribir por WhatsApp
              </a>
              <a 
                href="#sesion" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary hover:bg-[#d63347] text-white font-bold transition-all text-sm"
              >
                Reservar Sesión de Consultoría
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-white/5 bg-[#05060a] text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Luis Herazo. Todos los derechos reservados.</p>
        <p className="mt-1">
          CEO & Founder de{" "}
          <Link href="/" className="text-primary hover:underline">
            Hertzios
          </Link>
        </p>
      </footer>
    </div>
  );
}
