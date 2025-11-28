'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, LinkedIn, Twitter, Email, Phone, LocationOn } from '@mui/icons-material';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
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
                            <li className="flex items-start space-x-3">
                                <Email className="text-blue-500 mt-0.5" fontSize="small" />
                                <span className="text-sm">contacto@hertzios.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone className="text-blue-500 mt-0.5" fontSize="small" />
                                <span className="text-sm">+58 424 159 9502</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <LocationOn className="text-blue-500 mt-0.5" fontSize="small" />
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
                            <a href="#" className="bg-neutral-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Facebook fontSize="small" />
                            </a>
                            <a href="#" className="bg-neutral-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300">
                                <Instagram fontSize="small" />
                            </a>
                            <a href="#" className="bg-neutral-800 p-2 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
                                <Twitter fontSize="small" />
                            </a>
                            <a href="#" className="bg-neutral-800 p-2 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300">
                                <LinkedIn fontSize="small" />
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