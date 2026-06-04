import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppTitle from "../../components/appTitle";
import SubTitle from "../../components/subTitle";
import DescriptionText from "@/components/descriptionText";
import { Code, Bot, Cable, Lightbulb, Palette, Rocket, Brain, Sparkles, Zap, RefreshCw, ShieldCheck, BarChart3, Users } from 'lucide-react';
import HomeContactForm from "@/components/HomeContactForm";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";
import TechStack from "@/components/TechStack";

const title = 'Potenciamos tu negocio con soluciones de software a medida'
const description = 'Ahorra tiempo, optimiza procesos y escala tus operaciones con nuestras automatizaciones e integraciones.'
const subtitle = 'Nuestras Soluciones para tu empresa'

export const metadata: Metadata = {
    title: "Hertzios | Desarrollo Web y Software a Medida",
    description:
        "Potenciamos tu negocio con soluciones de software a medida. Desarrollo de aplicaciones web, automatización de procesos e integración de sistemas.",
    alternates: {
        canonical: "/",
    },
};

export default function Homepage() {
    return (
        <div className="space-y-16 pb-10">
            {/* Section 1  Hero Section*/}
            <section className="py-10 md:py-20">
                <ScrollReveal direction="up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7 space-y-4">
                        <AppTitle Name={title} />
                        <DescriptionText Name={description} />
                        <div className="flex flex-wrap gap-4">
                            <Button
                                asChild
                                size="lg"
                            >
                                <Link href="/services">Ver Servicios</Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                            >
                                <Link href="/contact">Contactar</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="md:col-span-5">
                        <div className="relative w-full aspect-square md:aspect-auto md:h-[400px]">
                            <Image
                                src="/home.png"
                                alt="Hertzios - Soluciones digitales y desarrollo de software a medida"
                                fill
                                priority
                                className="object-cover rounded-lg [mask-image:radial-gradient(circle,black_50%,transparent_100%)]"
                            />
                        </div>
                    </div>
                </div>
                </ScrollReveal>
            </section>

            {/* Section 2  Nuestras Soluciones*/}
            <section>
                <ScrollReveal direction="up" delay={0.2}>
                <div className="text-center mb-10">
                    <SubTitle Name={subtitle} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <Code className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Desarrollo Web / Móvil</h3>
                            <p className="text-muted-foreground">
                                Creamos aplicaciones robustas y escalables para satisfacer tus necesidades.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <Bot className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Automatización de procesos</h3>
                            <p className="text-muted-foreground">
                                Optimizamos tus flujos de trabajo con soluciones de automatización inteligentes.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <Cable className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Integración de Sistemas</h3>
                            <p className="text-muted-foreground">
                                Conectamos tus herramientas y plataforma para que funcionen como un sistema unificado.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <Brain className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Integraciones con IA</h3>
                            <p className="text-muted-foreground">
                                Implementamos modelos avanzados y configuraciones de Inteligencia Artificial para potenciar tus operaciones.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                </ScrollReveal>
            </section>

            {/* Section 3 Como trabajamos*/}
            <section>
                <ScrollReveal direction="up" delay={0.2}>
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <SubTitle Name={'Cómo trabajamos'} />
                    <DescriptionText Name={'Nuestro proceso esta diseñado para que sea transparente, colaborativo y centrado en tus resultados. Te acompañamos en cada paso del camino.'} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <Lightbulb className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">1. Descubrimiento</h3>
                        <p className="text-muted-foreground">
                            Analizamos tus necesidades y definimos los objetivos clave del proyecto para asegurar el éxito.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Palette className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">2. Desarrollo</h3>
                        <p className="text-muted-foreground">
                            Diseño y desarrollo de la solución, implementando las mejores prácticas y tecnologías para una entrega rápida.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Rocket className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">3. Despliegue</h3>
                        <p className="text-muted-foreground">
                            Implementamos la solución en tu entorno y te brindamos el soporte necesario para una transición fluida.
                        </p>
                    </div>
                </div>
                </ScrollReveal>
            </section>

            {/* Section 4 — Por qué elegirnos */}
            <section>
                <ScrollReveal direction="up">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <SubTitle Name={'Por qué elegirnos'} />
                    <DescriptionText Name={'Combinamos inteligencia artificial, metodologías ágiles y tecnologías de vanguardia para entregar soluciones que realmente transforman tu negocio.'} />
                </div>

                {/* AI highlight card */}
                <div className="mb-6 rounded-2xl p-8 bg-gradient-to-r from-[var(--color-primary)]/10 via-[var(--color-secondary)]/10 to-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] shadow-lg">
                        <Sparkles className="h-10 w-10 text-white" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-foreground">Inteligencia Artificial aplicada a tu negocio</h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            Integramos modelos de IA —como GPT, Gemini y soluciones de visión computacional— directamente en tus flujos de trabajo. Desde chatbots empresariales y clasificación automática de documentos hasta análisis predictivo, convertimos los datos que ya tienes en ventajas competitivas reales.
                        </p>
                    </div>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Card className="border-border/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-3">
                                <RefreshCw className="h-8 w-8 text-primary" />
                                <h3 className="text-lg font-semibold">Desarrollo Ágil</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Trabajamos en sprints cortos con entregas iterativas. Verás resultados reales en semanas, no meses, con total visibilidad en cada etapa del proceso.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Zap className="h-8 w-8 text-primary" />
                                <h3 className="text-lg font-semibold">Stack Tecnológico Moderno</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Usamos las tecnologías más demandadas del mercado: Next.js, Node.js, Python, cloud-native en AWS/GCP/Azure, y arquitecturas de microservicios preparadas para escalar.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-3">
                                <BarChart3 className="h-8 w-8 text-primary" />
                                <h3 className="text-lg font-semibold">Escalabilidad desde el día 1</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Diseñamos arquitecturas que crecen con tu negocio. Desde una startup hasta miles de usuarios concurrentes, nuestras soluciones están listas para escalar sin rediseños costosos.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-3">
                                <ShieldCheck className="h-8 w-8 text-primary" />
                                <h3 className="text-lg font-semibold">Calidad y Seguridad</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Cada línea de código pasa por revisión, pruebas automatizadas y estándares de seguridad. Entregamos software robusto, seguro y mantenible a largo plazo.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Rocket className="h-8 w-8 text-primary" />
                                <h3 className="text-lg font-semibold">Entrega Rápida</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Nuestra metodología de CI/CD y automatización de despliegues nos permite lanzar funcionalidades nuevas de forma rápida, segura y sin interrupciones en producción.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Users className="h-8 w-8 text-primary" />
                                <h3 className="text-lg font-semibold">Equipo Comprometido</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                No somos solo proveedores, somos tu socio tecnológico. Ofrecemos soporte continuo, documentación clara y acompañamiento post-lanzamiento para que tu solución siempre funcione al máximo.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                </ScrollReveal>
            </section>

            <StatsCounter />
            
            <TechStack />

            {/* Section 5 Nuestros clientes*/}
            <section>
                <ScrollReveal direction="up">
                <div className="text-center mb-10">
                    <SubTitle Name={'Lo que dicen nuestros clientes'} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-border/40 shadow-sm">
                        <CardContent className="pt-6 flex flex-col h-full justify-between">
                            <p className="text-lg italic text-muted-foreground mb-6">
                                &quot;La automatización que desarrollaron para nosotros nos
                                ahorró mas de 20 horas de trabajo a la semana. !Increible!&quot;
                            </p>
                            <div className="flex items-center space-x-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarFallback>AG</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">Ana Garcia</p>
                                    <p className="text-sm text-muted-foreground">CEO, InnovaTech</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-border/40 shadow-sm">
                        <CardContent className="pt-6 flex flex-col h-full justify-between">
                            <p className="text-lg italic text-muted-foreground mb-6">
                                &quot;El equipo de Hertzios integró todos nuestros sistemas en un solo dashboard,
                                Nuestra eficiencia ha mejorado en un 40%&quot;
                            </p>
                            <div className="flex items-center space-x-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarFallback>CR</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">Carlos Rodríguez</p>
                                    <p className="text-sm text-muted-foreground">Director de Operaciones, Logística Global</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                </ScrollReveal>
            </section>

            {/* Section 5 formulario Contacto*/}
            <section>
                <ScrollReveal direction="up">
                <div className=" rounded-2xl p-8 md:p-12 border border-primary/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">
                                ¿Listo para transformar tu negocio?
                            </h3>
                            <p className="text-lg text-muted-foreground mb-8">
                                Completa el formulario y nuestro equipo se pondrá en contacto
                                contigo lo antes posible para discutir como podemos ayudarte.
                            </p>
                        </div>
                        <div>
                            <HomeContactForm />
                        </div>
                    </div>
                </div>
                </ScrollReveal>
            </section>
        </div>
    )
}