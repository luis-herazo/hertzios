export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    architecture: string;
    technologies: string[];
    results: string[];
    image: string;
    url?: string;
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'fintech-core-migration',
        title: 'Modernización de Core Bancario',
        description: 'Migración de un sistema legado monolítico a una arquitectura de microservicios escalable para una Fintech líder en LATAM.',
        client: 'Fintech Andina',
        industry: 'Finanzas',
        challenge: 'El cliente operaba con un sistema monolítico heredado que limitaba la escalabilidad y aumentaba los tiempos de inactividad durante las actualizaciones. Necesitaban procesar transacciones en tiempo real y soportar un crecimiento del 300% en usuarios activos.',
        solution: 'Diseñamos e implementamos una arquitectura basada en microservicios utilizando Kubernetes para la orquestación. Desacoplamos los servicios críticos (pagos, usuarios, notificaciones) y utilizamos Kafka para la comunicación asíncrona entre eventos, garantizando alta disponibilidad y consistencia eventual.',
        architecture: 'Arquitectura de Microservicios en AWS. Frontend en React/Next.js servido vía CDN. Backend dividido en dominios (Auth, Ledger, Payments) comunicándose vía gRPC y eventos de Kafka. Base de datos PostgreSQL para datos transaccionales y DynamoDB para logs de auditoría.',
        technologies: ['Next.js', 'Node.js', 'Kubernetes', 'Kafka', 'AWS', 'PostgreSQL', 'Terraform'],
        results: [
            'Reducción del 99.9% en tiempo de inactividad por despliegues.',
            'Capacidad de procesamiento aumentada a 10,000 transacciones por segundo.',
            'Reducción del 40% en costos de infraestructura mediante auto-scaling.'
        ],
        image: '/projects/fintech.jpg'
    },
    {
        id: '2',
        slug: 'ecommerce-realtime-analytics',
        title: 'Plataforma de Analytics en Tiempo Real',
        description: 'Dashboard de inteligencia de negocios para un gigante del retail, procesando millones de eventos de usuarios diariamente.',
        client: 'Retail Global S.A.',
        industry: 'E-commerce',
        challenge: 'El equipo de marketing carecía de visibilidad en tiempo real sobre el comportamiento de los usuarios durante eventos de alto tráfico (Cyber Monday). Los reportes tardaban 24 horas en generarse, perdiendo oportunidades de optimización inmediata.',
        solution: 'Implementamos un pipeline de datos en tiempo real. Utilizamos Snowplow para la recolección de eventos, Kinesis para el stream processing y una arquitectura Lambda para agregaciones en tiempo real. Los datos se visualizan en un dashboard personalizado desarrollado en React con WebSockets.',
        architecture: 'Pipeline Serverless. Ingesta de datos vía API Gateway + Kinesis Firehose. Procesamiento con AWS Lambda y almacenamiento en Data Lake (S3) y Data Warehouse (Redshift). Capa de visualización con Next.js y Recharts conectados a una API GraphQL.',
        technologies: ['React', 'GraphQL', 'AWS Kinesis', 'AWS Lambda', 'Redshift', 'Python'],
        results: [
            'Visualización de métricas con latencia menor a 5 segundos.',
            'Aumento del 15% en conversión gracias a optimizaciones en tiempo real.',
            'Procesamiento de más de 50 millones de eventos diarios.'
        ],
        image: '/projects/analytics.jpg'
    },
    {
        id: '3',
        slug: 'iot-smart-logistics',
        title: 'Sistema de Logística IoT Inteligente',
        description: 'Seguimiento y optimización de rutas para una flota de transporte utilizando sensores IoT y Machine Learning.',
        client: 'Logística Express',
        industry: 'Logística',
        challenge: 'La empresa perdía dinero debido a rutas ineficientes y falta de control sobre el estado de la carga (temperatura, humedad) en transportes sensibles. El seguimiento GPS tradicional no ofrecía datos de telemetría avanzados.',
        solution: 'Desarrollamos una solución IoT integral. Dispositivos edge en los camiones envían telemetría vía MQTT. Un backend en Go procesa estos datos y un modelo de ML predice mantenimientos preventivos y optimiza rutas en función del tráfico y clima en tiempo real.',
        architecture: 'Arquitectura Event-Driven. Dispositivos IoT comunicándose vía MQTT a un broker HiveMQ. Backend de alto rendimiento en Go. Base de datos de series temporales (InfluxDB) para telemetría. Frontend móvil en React Native para los conductores.',
        technologies: ['Go', 'MQTT', 'InfluxDB', 'React Native', 'Docker', 'Google Cloud Platform'],
        results: [
            'Reducción del 20% en consumo de combustible.',
            'Disminución del 35% en pérdidas de carga refrigerada.',
            'Mejora en la puntualidad de entrega del 92% al 98%.'
        ],
        image: '/projects/iot.jpg'
    },
    {
        id: '4',
        slug: 'telemedicina-platform',
        title: 'Plataforma de Telemedicina Segura',
        description: 'Sistema de consultas médicas remotas con video en alta definición y cumplimiento estricto de normativas de privacidad.',
        client: 'Salud Conectada',
        industry: 'Salud',
        challenge: 'Necesidad urgente de escalar la atención remota post-pandemia. La solución existente era insegura, inestable y difícil de usar para pacientes mayores. Se requería cumplimiento estricto de HIPAA/GDPR.',
        solution: 'Construimos una plataforma web progresiva (PWA) centrada en la usabilidad. Implementamos WebRTC para video encriptado peer-to-peer. El almacenamiento de historiales médicos se aseguró con cifrado en reposo y tránsito, con estrictos controles de acceso basados en roles (RBAC).',
        architecture: 'Monolito Modular. Backend en NestJS para estructura y tipado fuerte. WebRTC (LiveKit) para streaming de video. Base de datos PostgreSQL con encriptación a nivel de columna para datos sensibles. Infraestructura en contenedores seguros.',
        technologies: ['TypeScript', 'NestJS', 'WebRTC', 'PostgreSQL', 'Redis', 'Azure'],
        results: [
            'Más de 50,000 consultas exitosas en el primer trimestre.',
            'Satisfacción del paciente (NPS) de 9/10.',
            'Cero incidentes de seguridad reportados en auditoría externa.'
        ],
        image: '/projects/telemedicina.jpg'
    },
    {
        id: '5',
        slug: 'wepah-event-platform',
        title: 'Plataforma Web para Wepah',
        description: 'Desarrollo de la plataforma web corporativa para Wepah, empresa de diseño y planificación de eventos sociales y corporativos con base en Miami, FL.',
        client: 'Wepah',
        industry: 'Eventos',
        challenge: 'Wepah necesitaba una presencia digital moderna y atractiva que reflejara su propuesta de valor en la planificación de eventos premium. Requerían un sistema para mostrar su portafolio, sus paquetes de servicios (Classic, Advanced, Customized) y capturar leads de manera eficiente.',
        solution: 'Diseñamos y desarrollamos wepah.com, un sitio web corporativo de alto impacto visual. Implementamos un portafolio dinámico de eventos, un catálogo de paquetes de servicios, integración con sistema de contacto y formularios de cotización personalizados. La plataforma también incluye una sección dedicada a la Wepah Foundation.',
        architecture: 'Sitio web moderno construido con Next.js y desplegado en Vercel para máxima performance global. Diseño responsivo con animaciones fluidas. Integración con sistema de email para gestión de leads y solicitudes de cotización.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Resend'],
        results: [
            'Aumento del 60% en solicitudes de cotización tras el lanzamiento.',
            'Tiempo de carga bajo 1.5s con puntaje Lighthouse de 98/100.',
            'Presencia digital consolidada en el mercado de eventos de Miami.'
        ],
        image: '/projects/wepah.jpg',
        url: 'https://www.wepah.com'
    },
    {
        id: '6',
        slug: 'escritorio-legal',
        title: 'Escritorio.legal',
        description: 'Plataforma integral para la administración de propiedades de alquiler. Gestiona edificios, unidades, inquilinos, contratos, cobros, gastos, propietarios y reportes desde un solo lugar.',
        client: 'Escritorio.legal',
        industry: 'PropTech',
        challenge: 'Los administradores de propiedades operaban con hojas de cálculo, correos dispersos y procesos manuales para gestionar contratos, cobros y mantenimiento. La falta de visibilidad centralizada generaba retrasos en pagos, disputas con inquilinos y pérdida de información crítica.',
        solution: 'Desarrollamos Escritorio.legal, una plataforma SaaS todo-en-uno que centraliza la gestión de edificios, unidades, inquilinos, contratos y cobros. Incluye portales de autoservicio para inquilinos (pago de renta, solicitudes de mantenimiento) y propietarios (reportes, estado financiero), con automatización de recordatorios y generación de reportes.',
        architecture: 'Aplicación web full-stack con Next.js en el frontend y un backend en Node.js/NestJS con PostgreSQL. Arquitectura multi-tenant con aislamiento de datos por cuenta. Integración con pasarelas de pago para cobros en línea. Despliegue en AWS con CI/CD automatizado.',
        technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript', 'AWS', 'Stripe', 'Prisma'],
        results: [
            'Reducción del 70% en tiempo dedicado a tareas administrativas manuales.',
            'Tasa de cobro puntual incrementada al 94% gracias a recordatorios automáticos.',
            'Portales de autoservicio adoptados por más del 80% de los inquilinos activos.'
        ],
        image: '/projects/escritorio-legal.jpg',
        url: 'https://www.escritorio.legal'
    },
    {
        id: '7',
        slug: 'printflow',
        title: 'PrintFlow',
        description: 'Solución integral de gestión de impresión automatizada para entornos de servidor. Supervisa directorios, procesa PDFs automáticamente y ofrece una interfaz web moderna para administración y monitoreo.',
        client: 'PrintFlow',
        industry: 'Software Empresarial',
        challenge: 'Las empresas carecían de control granular y robusto sobre sus colas de impresión y protocolos como IPP. La integración entre software y hardware de impresión era frágil, poco trazable y dependía de soluciones genéricas que no se adaptaban a flujos de trabajo específicos ni entornos de servidor.',
        solution: 'Desarrollamos PrintFlow, un servicio en segundo plano que supervisa directorios específicos y procesa archivos PDF para impresión automática mediante IPP. Incluye una interfaz web moderna para gestión de colas, configuración de impresoras, monitoreo en tiempo real y trazabilidad completa de cada trabajo de impresión.',
        architecture: 'Servicio backend en Python/Node.js que corre como daemon en el servidor. Integración nativa con el protocolo IPP para comunicación directa con impresoras. Interfaz web en Next.js con WebSockets para actualizaciones en tiempo real del estado de las colas. Base de datos SQLite/PostgreSQL para historial y configuración.',
        technologies: ['Python', 'Node.js', 'Next.js', 'IPP', 'WebSockets', 'PostgreSQL', 'Docker'],
        results: [
            'Reducción del 90% en trabajos de impresión fallidos gracias a reintentos automáticos.',
            'Visibilidad completa de colas con monitoreo en tiempo real desde cualquier dispositivo.',
            'Integración transparente con cualquier impresora compatible con IPP sin drivers adicionales.'
        ],
        image: '/projects/printflow.jpg'
    },
    {
        id: '8',
        slug: 'altern-energy-group',
        title: 'Altern Energy Group',
        description: 'Sitio web corporativo para un grupo americano de soluciones integrales para la industria energética, con sede en Houston, TX y operaciones activas en América Latina.',
        client: 'Altern Energy Group',
        industry: 'Energía',
        challenge: 'Altern Energy Group necesitaba una presencia digital que comunicara con autoridad su posicionamiento como grupo integrador de servicios energéticos en Latinoamérica. El sitio debía reflejar su estructura de 12+ empresas aliadas, su cobertura regional y facilitar el inicio de conversaciones con contrapartes calificadas.',
        solution: 'Desarrollamos alternenergygroup.com, un sitio web corporativo de alto impacto diseñado para el mercado de energía B2B. Incluye secciones de capacidades técnicas y comerciales, cobertura geográfica, liderazgo, portafolio de proyectos y un sistema de contacto exclusivo para contrapartes calificadas. El sitio refleja los estándares institucionales americanos requeridos por su sede en Houston.',
        architecture: 'Aplicación web construida con PHP y arquitectura de rutas dinámicas. Diseño responsivo enfocado en claridad y profesionalismo para audiencias del sector energético. Optimizado para SEO en inglés y español, con formulario de contacto seguro y gestión de acceso a portafolio bajo NDA.',
        technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'SEO', 'Responsive Design'],
        results: [
            'Presencia digital profesional alineada con estándares institucionales del sector energético.',
            'Canal de contacto directo con inversores, socios y contrapartes en América Latina y EE.UU.',
            'Cobertura de múltiples países: Colombia, Ecuador, Perú, México y mercados andinos.'
        ],
        image: '/projects/altern-energy.jpg',
        url: 'https://alternenergygroup.com'
    },
    {
        id: '9',
        slug: 'traza-ventures',
        title: 'Traza Ventures',
        description: 'Plataforma web para un socio de inversión de confianza enfocado en conectar a inversores con oportunidades en las economías de más rápido crecimiento del mundo.',
        client: 'Traza Ventures',
        industry: 'Inversiones',
        challenge: 'Traza Ventures necesitaba una presencia digital moderna que transmitiera credibilidad y confianza a inversores internacionales. La plataforma debía comunicar con claridad su propuesta de valor, su trayectoria desde 2018 y facilitar el contacto con potenciales socios e inversores interesados en mercados emergentes.',
        solution: 'Desarrollamos trazaventures.com, una plataforma web de alto impacto visual construida con React y Vite. El sitio presenta la propuesta de inversión de Traza, su trayectoria, mercados objetivo y canales de contacto directo para inversores calificados. Diseño elegante y profesional alineado con los estándares del sector financiero.',
        architecture: 'Single Page Application (SPA) desarrollada con Vite y React. Diseño responsivo con animaciones fluidas. Optimizada para performance y SEO. Desplegada con integración continua para actualizaciones rápidas de contenido.',
        technologies: ['React', 'Vite', 'TypeScript', 'CSS3', 'Responsive Design'],
        results: [
            'Presencia digital profesional lista desde el lanzamiento en 2024.',
            'Comunicación clara de la propuesta de valor para inversores internacionales.',
            'Plataforma escalable lista para incorporar funcionalidades de gestión de portafolio.'
        ],
        image: '/projects/traza-ventures.jpg',
        url: 'https://trazaventures.com'
    },
    {
        id: '10',
        slug: 'dts-desarrollo-tecnologico',
        title: 'DTS — Desarrollo Tecnológico y Servicios',
        description: 'Sitio web corporativo para empresa venezolana con más de 20 años de trayectoria en el sector de hidrocarburos, especializada en rehabilitación de pozos petroleros y mantenimiento de campos maduros.',
        client: 'DTS - Desarrollo Tecnológico y Servicios',
        industry: 'Oil & Gas',
        challenge: 'DTS contaba con décadas de experiencia operativa en la industria petrolera venezolana, pero carecía de una presencia digital moderna que reflejara su trayectoria y capacidades técnicas. Necesitaban un sitio que posicionara a la empresa ante nuevos clientes y socios del sector energético, incluyendo operadores como Petropiar y Chevron.',
        solution: 'Desarrollamos desarrollotecnologicoyservicios.com, una plataforma web corporativa que comunica con claridad los servicios de DTS: rehabilitación de pozos, mantenimiento integral de campos maduros, suministro de personal especializado y consultoría técnica. El sitio incluye portafolio de proyectos, información de cobertura en la Faja Petrolífera del Orinoco y canales de contacto para sus sedes en Anaco y Puerto La Cruz.',
        architecture: 'Single Page Application (SPA) desarrollada con Vite y React, con Material Icons para la interfaz. Diseño responsivo optimizado para presentar información técnica del sector oil & gas. Desplegada con CI/CD automatizado.',
        technologies: ['React', 'Vite', 'Material Icons', 'CSS3', 'Responsive Design'],
        results: [
            'Presencia digital profesional para una empresa con 20+ años de trayectoria en el sector.',
            'Visibilidad online de operaciones en la Faja Petrolífera del Orinoco y campos maduros.',
            'Canal de contacto directo para clientes del sector energético desde sedes en Anzoátegui.'
        ],
        image: '/projects/dts.jpg',
        url: 'https://desarrollotecnologicoyservicios.com'
    }
];
