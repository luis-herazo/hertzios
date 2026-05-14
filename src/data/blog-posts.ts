export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image?: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "automatizacion-negocio-transformacion",
    title: "5 formas en que la automatización puede transformar tu negocio",
    date: "21 de Noviembre, 2025",
    author: "Ana García",
    category: "Automatización",
    excerpt: "La automatización de procesos ya no es una opción, es una necesidad. Descubre cómo la implementación de soluciones de automatización puede optimizar tus operaciones, reducir costos y liberar a tu equipo.",
    content: `
      <p>La automatización de procesos ya no es una opción, es una necesidad en el panorama empresarial actual. Las empresas que adoptan tecnologías de automatización no solo mejoran su eficiencia, sino que también ganan una ventaja competitiva significativa.</p>
      
      <h3>1. Optimización de Operaciones</h3>
      <p>Al automatizar tareas repetitivas, reduces el margen de error humano y aseguras que los procesos se ejecuten de manera consistente las 24 horas del día.</p>
      
      <h3>2. Reducción de Costos</h3>
      <p>Aunque la inversión inicial puede parecer alta, el retorno de inversión (ROI) a largo plazo es innegable. Menos errores significan menos gastos imprevistos.</p>
      
      <h3>3. Liberación de Talento Humano</h3>
      <p>Tu equipo puede enfocarse en tareas creativas y estratégicas que realmente aportan valor, en lugar de perder tiempo en procesos manuales tediosos.</p>
      
      <h3>4. Mejora en la Experiencia del Cliente</h3>
      <p>Respuestas más rápidas y procesos más fluidos resultan en clientes más satisfechos y leales.</p>
      
      <h3>5. Escalabilidad</h3>
      <p>Los sistemas automatizados pueden manejar aumentos en la carga de trabajo mucho más fácilmente que los procesos manuales.</p>
    `,
    image: "/images/blog/automation.png"
  },
  {
    id: "2",
    slug: "elegir-tecnologia-software",
    title: "Cómo elegir la tecnología adecuada para tu próximo proyecto",
    date: "15 de Noviembre, 2025",
    author: "Carlos Rodríguez",
    category: "Desarrollo",
    excerpt: "La elección de la pila de tecnología correcta es crucial para el éxito de cualquier proyecto de software. En este artículo, exploramos los factores clave que debes considerar.",
    content: `
      <p>Elegir el stack tecnológico adecuado es una de las decisiones más críticas que tomarás al iniciar un proyecto de software. No se trata solo de usar lo más moderno, sino lo que mejor se adapte a tus necesidades específicas.</p>
      
      <h3>Escalabilidad</h3>
      <p>¿Tendrá tu aplicación miles o millones de usuarios? Asegúrate de que tu base de datos y tu backend puedan crecer con tu negocio.</p>
      
      <h3>Disponibilidad de Talento</h3>
      <p>Es importante elegir tecnologías para las que sea fácil encontrar desarrolladores cualificados en el mercado.</p>
      
      <h3>Mantenibilidad</h3>
      <p>Un código fácil de mantener te ahorrará miles de dólares en el futuro. Busca lenguajes y frameworks con comunidades sólidas y buena documentación.</p>
    `,
    image: "/images/blog/tech-stack.png"
  },
  {
    id: "3",
    slug: "importancia-ux-aplicaciones",
    title: "La importancia de la experiencia de usuario (UX) en aplicaciones",
    date: "8 de Noviembre, 2025",
    author: "Laura Martinez",
    category: "Diseño",
    excerpt: "Una gran experiencia de usuario es lo que diferencia a una aplicación exitosa de una que no lo es. Aprende por qué la UX es tan importante y cómo mejorarla.",
    content: `
      <p>En un mundo lleno de aplicaciones, la facilidad de uso es el factor determinante para la retención de usuarios. La UX no es solo cómo se ve algo, sino cómo funciona.</p>
      
      <h3>Empatía con el Usuario</h3>
      <p>Diseñar pensando en los problemas reales del usuario es el primer paso para una UX exitosa.</p>
      
      <h3>Simplicidad</h3>
      <p>Menos es más. Una interfaz limpia y directa siempre superará a una sobrecargada de funciones innecesarias.</p>
    `,
    image: "/images/blog/ux-design.png"
  }
];
