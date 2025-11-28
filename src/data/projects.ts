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
    }
];
