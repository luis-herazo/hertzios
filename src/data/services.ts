export interface ServiceFeature {
    title: string;
    description: string;
}

export interface ServiceProcess {
    step: number;
    title: string;
    description: string;
}

export interface Service {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: string; // name for icon lookup
    features: ServiceFeature[];
    technologies: string[];
    process: ServiceProcess[];
    benefits: string[];
    useCases: string[];
}

export const services: Service[] = [
    {
        id: '1',
        slug: 'desarrollo-web-movil',
        title: 'Desarrollo Web / Móvil',
        shortDescription: 'Creamos aplicaciones robustas y escalables para satisfacer tus necesidades.',
        fullDescription: 'Diseñamos y desarrollamos aplicaciones web y móviles de alto rendimiento que impulsan el crecimiento de tu negocio. Desde sitios corporativos hasta plataformas SaaS complejas, nuestro equipo combina diseño centrado en el usuario con arquitecturas técnicas sólidas para entregar productos digitales que destacan.',
        icon: 'Code',
        features: [
            {
                title: 'Aplicaciones Web',
                description: 'Plataformas web modernas con Next.js, React y Vue.js. Optimizadas para SEO, rendimiento y escalabilidad.'
            },
            {
                title: 'Aplicaciones Móviles',
                description: 'Apps nativas y multiplataforma con React Native y Flutter para iOS y Android.'
            },
            {
                title: 'UX/UI Design',
                description: 'Diseño de interfaces intuitivas y atractivas centradas en la experiencia del usuario, con prototipos y pruebas de usabilidad.'
            },
            {
                title: 'Desarrollo de APIs',
                description: 'APIs RESTful y GraphQL robustas, documentadas y seguras que sirven como base de tu ecosistema digital.'
            },
            {
                title: 'E-commerce',
                description: 'Tiendas online personalizadas integradas con pasarelas de pago, gestión de inventario y análitica de ventas.'
            },
            {
                title: 'Plugins y Extensiones',
                description: 'Desarrollo de plugins para WordPress, Shopify, Salesforce y otras plataformas para extender sus funcionalidades.'
            },
        ],
        technologies: ['Next.js', 'React', 'Vue.js', 'TypeScript', 'Node.js', 'React Native', 'Flutter', 'PostgreSQL', 'MongoDB', 'AWS', 'Vercel'],
        process: [
            {
                step: 1,
                title: 'Descubrimiento y Planificación',
                description: 'Analizamos tus necesidades, definimos los requisitos funcionales y elaboramos el plan de desarrollo con estimaciones de tiempo y costo.'
            },
            {
                step: 2,
                title: 'Diseño UX/UI',
                description: 'Creamos wireframes, prototipos y el diseño visual final. Validamos con usuarios reales antes de escribir una línea de código.'
            },
            {
                step: 3,
                title: 'Desarrollo Iterativo',
                description: 'Trabajamos en sprints cortos con entregas frecuentes. Ves avances reales cada semana y puedes dar feedback en cada etapa.'
            },
            {
                step: 4,
                title: 'Pruebas y QA',
                description: 'Testing automatizado, pruebas de rendimiento, seguridad y compatibilidad en todos los dispositivos y navegadores.'
            },
            {
                step: 5,
                title: 'Despliegue y Soporte',
                description: 'Implementamos la solución con CI/CD, monitoreamos el rendimiento post-lanzamiento y ofrecemos soporte continuo.'
            }
        ],
        benefits: [
            'Reducción de tiempo de desarrollo hasta un 40% con metodología ágil',
            'Aplicaciones optimizadas con Lighthouse Score > 90',
            'Arquitecturas escalables que crecen con tu negocio',
            'Código limpio, documentado y fácil de mantener',
            'Soporte post-lanzamiento incluido'
        ],
        useCases: [
            'Plataformas SaaS y productos digitales',
            'E-commerce y marketplaces',
            'Portales corporativos y sitios institucionales',
            'Dashboards y herramientas internas',
            'Apps móviles para iOS y Android',
            'Sistemas de gestión a medida (ERP, CRM, etc.)'
        ]
    },
    {
        id: '2',
        slug: 'automatizacion-procesos',
        title: 'Automatización de Procesos',
        shortDescription: 'Optimizamos tus flujos de trabajo con soluciones de automatización inteligentes.',
        fullDescription: 'Eliminamos las tareas manuales y repetitivas que consumen el tiempo de tu equipo. Analizamos tus procesos operativos y diseñamos automatizaciones inteligentes que reducen errores, aceleran tiempos de respuesta y liberan a tu equipo para enfocarse en lo que realmente importa: hacer crecer tu negocio.',
        icon: 'SmartToy',
        features: [
            {
                title: 'Automatización de Workflows',
                description: 'Diseño y automatización de flujos de trabajo completos con herramientas como n8n, Zapier, Make y lógica personalizada.'
            },
            {
                title: 'Automatización de Tareas',
                description: 'Scripts y bots que ejecutan tareas repetitivas: envío de correos, generación de reportes, actualización de bases de datos.'
            },
            {
                title: 'Data Analysis & Processing',
                description: 'Pipelines de datos automatizados para recolección, limpieza, transformación y análisis de grandes volúmenes de información.'
            },
            {
                title: 'Data Entry & Processing',
                description: 'Captura automática de datos desde formularios, correos, documentos y sistemas externos, eliminando la entrada manual.'
            },
            {
                title: 'Automatización de Reportes',
                description: 'Generación y distribución automática de reportes periódicos en cualquier formato (PDF, Excel, dashboards).'
            },
            {
                title: 'RPA (Robotic Process Automation)',
                description: 'Robots de software que replican acciones humanas en sistemas legacy o interfaces web, sin necesidad de APIs.'
            }
        ],
        technologies: ['Python', 'n8n', 'Make', 'Zapier', 'Node.js', 'Selenium', 'Playwright', 'Apache Airflow', 'AWS Lambda', 'PostgreSQL'],
        process: [
            {
                step: 1,
                title: 'Auditoría de Procesos',
                description: 'Mapeamos todos tus procesos actuales, identificamos cuellos de botella y calculamos el retorno esperado de cada automatización.'
            },
            {
                step: 2,
                title: 'Diseño de la Solución',
                description: 'Diseñamos la arquitectura de automatización: qué herramientas usar, cómo integrar sistemas y qué métricas monitorear.'
            },
            {
                step: 3,
                title: 'Desarrollo e Integración',
                description: 'Construimos la automatización, conectamos todos los sistemas involucrados y configuramos manejo de errores y alertas.'
            },
            {
                step: 4,
                title: 'Pruebas y Validación',
                description: 'Probamos exhaustivamente con datos reales, validamos resultados y ajustamos antes de poner en producción.'
            },
            {
                step: 5,
                title: 'Monitoreo Continuo',
                description: 'Dashboard de monitoreo para supervisar el estado de tus automatizaciones y recibir alertas ante cualquier fallo.'
            }
        ],
        benefits: [
            'Ahorro de 20+ horas semanales por proceso automatizado',
            'Reducción de errores humanos hasta en un 95%',
            'Procesamiento de datos 10x más rápido',
            'Operación 24/7 sin intervención humana',
            'ROI típico recuperado en menos de 3 meses'
        ],
        useCases: [
            'Onboarding automatizado de clientes',
            'Sincronización entre CRM, ERP y e-commerce',
            'Generación automática de facturas y reportes financieros',
            'Notificaciones y seguimientos automáticos de ventas',
            'Procesamiento de pedidos y actualización de inventario',
            'Extracción de datos de portales web (web scraping)'
        ]
    },
    {
        id: '3',
        slug: 'integracion-sistemas',
        title: 'Integración de Sistemas',
        shortDescription: 'Conectamos tus herramientas y plataformas para que funcionen como un sistema unificado.',
        fullDescription: 'Cada empresa usa docenas de herramientas: CRM, ERP, e-commerce, plataformas de pagos, sistemas de logística... El problema es que no se hablan entre sí. Nosotros construimos los puentes de datos que unifican tu ecosistema digital, eliminando la duplicación de información y los silos operativos.',
        icon: 'Cable',
        features: [
            {
                title: 'Integración de APIs',
                description: 'Conectamos cualquier sistema que tenga API: Salesforce, HubSpot, Stripe, Shopify, SAP, y cientos más.'
            },
            {
                title: 'Conexión CRM / ERP / POS',
                description: 'Sincronización bidireccional entre tus sistemas de gestión de clientes, recursos empresariales y punto de venta.'
            },
            {
                title: 'Integración E-commerce',
                description: 'Conectamos tu tienda online con tu sistema de inventario, contabilidad, logística y atención al cliente.'
            },
            {
                title: 'Third-party Integrations',
                description: 'Integraciones con plataformas de marketing, analytics, pagos, comunicación y cualquier servicio de terceros.'
            },
            {
                title: 'Middleware y ESB',
                description: 'Desarrollo de capas intermedias (middleware) que orquestan la comunicación entre múltiples sistemas heterogéneos.'
            },
            {
                title: 'Migración de Datos',
                description: 'Migración segura de datos entre sistemas, con validación, transformación y preservación de la integridad de la información.'
            }
        ],
        technologies: ['REST APIs', 'GraphQL', 'WebSockets', 'Apache Kafka', 'RabbitMQ', 'Node.js', 'Python', 'Zapier', 'n8n', 'AWS API Gateway', 'PostgreSQL'],
        process: [
            {
                step: 1,
                title: 'Análisis del Ecosistema',
                description: 'Mapeamos todos tus sistemas actuales, sus APIs disponibles, formatos de datos y puntos de integración necesarios.'
            },
            {
                step: 2,
                title: 'Arquitectura de Integración',
                description: 'Diseñamos la arquitectura: qué sistemas conectar, en qué dirección fluyen los datos y cómo manejar conflictos y errores.'
            },
            {
                step: 3,
                title: 'Desarrollo de Conectores',
                description: 'Desarrollamos los conectores, transformaciones de datos y la lógica de sincronización entre cada par de sistemas.'
            },
            {
                step: 4,
                title: 'Pruebas de Integración',
                description: 'Pruebas exhaustivas con datos reales para garantizar la consistencia, integridad y rendimiento de cada flujo de datos.'
            },
            {
                step: 5,
                title: 'Monitoreo y Alertas',
                description: 'Panel centralizado para supervisar el estado de todas las integraciones con alertas en tiempo real ante cualquier fallo.'
            }
        ],
        benefits: [
            'Una sola fuente de verdad para todos tus datos',
            'Eliminación de duplicación de datos y errores de sincronización',
            'Visibilidad completa de operaciones en tiempo real',
            'Reducción del 80% en trabajo manual de transferencia de datos',
            'Decisiones más rápidas basadas en información unificada y actualizada'
        ],
        useCases: [
            'Sincronización Shopify ↔ SAP / QuickBooks',
            'Integración HubSpot / Salesforce ↔ ERP',
            'Conexión de múltiples tiendas online con un solo inventario',
            'Integración de pasarelas de pago con sistema contable',
            'Unificación de plataformas de logística y transporte',
            'Dashboard ejecutivo con datos de múltiples fuentes'
        ]
    }
];
