import type { Metadata } from "next";
import { Mail, Phone, Calendar, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import ContactPageForm from "@/components/ContactPageForm";

export const metadata: Metadata = {
    title: "Contacto",
    description:
        "¿Listo para transformar tu negocio? Contáctanos hoy mismo y empecemos a trabajar en tu próxima solución digital.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 max-w-6xl py-10 md:py-20">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 tracking-tight">
                    ¿Listo para empezar tu proyecto?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Completa el formulario a continuación o utiliza uno de nuestros otros métodos de contacto.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Left Column: Contact Form */}
                <div className="md:col-span-7">
                    <ContactPageForm />
                </div>

                {/* Right Column: Contact Info */}
                <div className="md:col-span-5 md:pl-8">
                    <h2 className="text-xl font-semibold mb-4">
                        Otras formas de contactar
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Si prefieres, puedes contactarnos directamente a través de estos canales.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                            <div className="bg-primary/10 text-primary p-2 rounded-md">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Correo Electrónico</h3>
                                <p className="text-sm text-muted-foreground">contacto@hertzios.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                            <div className="bg-primary/10 text-primary p-2 rounded-md">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Teléfono</h3>
                                <p className="text-sm text-muted-foreground">+58 424 159 9502</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                            <div className="bg-primary/10 text-primary p-2 rounded-md">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Agendar una reunión</h3>
                                <p className="text-sm text-muted-foreground">Reserva un espacio en nuestro Calendly</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-xl font-semibold mb-4">
                            Síguenos
                        </h2>
                        <div className="flex bg-muted/50 w-fit p-2 rounded-full space-x-2">
                            <Link href="#" className="p-2 hover:bg-background rounded-full transition-colors">
                                <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                            </Link>
                            <Link href="#" className="p-2 hover:bg-background rounded-full transition-colors">
                                <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
