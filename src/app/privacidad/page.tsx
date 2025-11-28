import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
    title: "Política de Privacidad",
    description:
        "Política de privacidad de Hertzios. Conoce cómo recopilamos, usamos y protegemos tu información.",
};

export default function Privacidad() {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                    En Hertzios, accesible desde nuestra web, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que es recopilada y registrada por Hertzios y cómo la usamos.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Información que recopilamos</h2>
                <p>
                    Si te pones en contacto con nosotros directamente, podemos recibir información adicional sobre ti, como tu nombre, dirección de correo electrónico, número de teléfono, el contenido del mensaje y/o archivos adjuntos que nos envíes, y cualquier otra información que elijas proporcionar.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Cómo usamos tu información</h2>
                <p>
                    Usamos la información que recopilamos de varias maneras, incluyendo para:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Proporcionar, operar y mantener nuestro sitio web</li>
                    <li>Mejorar, personalizar y expandir nuestro sitio web</li>
                    <li>Entender y analizar cómo usas nuestro sitio web</li>
                    <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
                    <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, incluso para servicio al cliente, para proporcionarte actualizaciones y otra información relacionada con el sitio web, y para fines de marketing y promoción</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Archivos de registro (Log Files)</h2>
                <p>
                    Hertzios sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan sitios web. Todas las empresas de alojamiento hacen esto y es parte del análisis de los servicios de alojamiento. La información recopilada por los archivos de registro incluye direcciones de protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP), fecha y hora, páginas de referencia/salida y posiblemente el número de clics.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies y Web Beacons</h2>
                <p>
                    Como cualquier otro sitio web, Hertzios utiliza 'cookies'. Estas cookies se utilizan para almacenar información, incluidas las preferencias de los visitantes y las páginas del sitio web a las que el visitante accedió o visitó. La información se utiliza para optimizar la experiencia de los usuarios personalizando el contenido de nuestra página web según el tipo de navegador de los visitantes y/u otra información.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Políticas de privacidad de terceros</h2>
                <p>
                    La Política de Privacidad de Hertzios no se aplica a otros anunciantes o sitios web. Por lo tanto, te aconsejamos que consultes las respectivas Políticas de Privacidad de estos servidores de anuncios de terceros para obtener información más detallada. Puede incluir sus prácticas e instrucciones sobre cómo optar por no participar en ciertas opciones.
                </p>
            </div>
        </div>
    );
}
