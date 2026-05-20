'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import SubscribeForm from '@/components/subscribe-form';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div className="container mx-auto px-4">
                {/* Newsletter Section */}
                <div className="mb-16 pb-12 border-b border-neutral-800/50 text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">Únete a nuestra comunidad</h3>
                    <p className="text-neutral-400 mb-8">
                        Recibe nuestros mejores artículos, recursos y tendencias tecnológicas directamente en tu bandeja de entrada.
                    </p>
                    <SubscribeForm />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white tracking-wider">HERTZIOS</h2>
                        <p className="text-sm leading-relaxed text-neutral-400">
                            Transformamos ideas en experiencias digitales excepcionales.
                            Innovación y diseño en cada proyecto.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors duration-300 text-sm">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors duration-300 text-sm">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="hover:text-white transition-colors duration-300 text-sm">
                                    Proyectos
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors duration-300 text-sm">
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors duration-300 text-sm">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 group">
                                <Mail className="text-primary mt-0.5 w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">contacto@hertzios.com</span>
                            </li>
                            <li className="flex items-start space-x-3 group">
                                <Phone className="text-primary mt-0.5 w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">+58 424 159 9502</span>
                            </li>
                            <li className="flex items-start space-x-3 group">
                                <MapPin className="text-primary mt-0.5 w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">Caracas - Venezuela</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Síguenos</h3>
                        <p className="text-sm text-neutral-400 mb-4">
                            Mantente conectado con nosotros en nuestras redes sociales.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61587288105097" className="bg-neutral-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/hertzios/" className="bg-neutral-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/Hertzios1" className="bg-neutral-800 p-2 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/hertzios/" className="bg-neutral-800 p-2 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-neutral-500">
                            © {currentYear} Hertzios. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-6 text-sm text-neutral-500">
                            <Link href="/privacidad" className="hover:text-white transition-colors">
                                Política de Privacidad
                            </Link>
                            <Link href="/terminos" className="hover:text-white transition-colors">
                                Términos y Condiciones
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;