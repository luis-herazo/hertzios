import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
    title: "Términos y Condiciones",
    description:
        "Términos y condiciones de uso del sitio web de Hertzios.",
};

export default function Terminos() {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                    Bienvenido a Hertzios. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Hertzios.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Aceptación de los Términos</h2>
                <p>
                    Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes usando el sitio web de Hertzios si no aceptas todos los términos y condiciones establecidos en esta página.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Licencia</h2>
                <p>
                    A menos que se indique lo contrario, Hertzios y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en Hertzios. Todos los derechos de propiedad intelectual están reservados. Puedes ver y/o imprimir páginas desde el sitio web para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Restricciones</h2>
                <p>
                    Está específicamente restringido a todo lo siguiente:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Publicar cualquier material del sitio web en cualquier otro medio.</li>
                    <li>Vender, sublicenciar y/o comercializar cualquier material del sitio web.</li>
                    <li>Usar este sitio web de cualquier manera que sea o pueda ser perjudicial para este sitio web.</li>
                    <li>Usar este sitio web de cualquier manera que afecte el acceso de los usuarios a este sitio web.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Contenido del Usuario</h2>
                <p>
                    En estos Términos y Condiciones, "Tu Contenido" significará cualquier audio, video, texto, imágenes u otro material que elijas mostrar en este sitio web. Al mostrar Tu Contenido, otorgas a Hertzios una licencia no exclusiva, mundial, irrevocable y sublicenciable para usar, reproducir, adaptar, publicar, traducir y distribuirlo en cualquier medio.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Variación de Términos</h2>
                <p>
                    Hertzios está autorizado a revisar estos términos en cualquier momento según lo considere oportuno, y al usar este sitio web se espera que revises estos términos regularmente.
                </p>
            </div>
        </div>
    );
}
