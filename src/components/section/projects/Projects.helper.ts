import { ProjectsData } from "./Projects.types";

export const projectsData: ProjectsData = {
    title: "Proyectos",
    subtitle: "Soluciones que he desarrollado aplicando diferentes tecnologías y enfoques.",
    projects: [
      {
        id: 1,
        title: "Tickpass Admin",
        subtitle: "Plataforma de Administración de Eventos",
        description: "Sistema completo para gestión de eventos. Es el panel de administración para usuarios y dashboard para la ticketera Tickpass.",
        image: "https://api.microlink.io?url=https://apptickpass.com&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600&colorScheme=dark",
        technologies: ["Next.js", "TypeScript", "Supabase", "tRPC"],
        category: "fullstack",
        status: "Activo",
        period: "Nov 2024 - Ago 2025",
        highlights: ["Tiempo Real", "Pagos", "Eventos"],
        github: "private",
        demo: "https://apptickpass.com"
      },
      {
        id: 2,
        title: "TickPass Ticketera",
        subtitle: "Ticketera para eventos",
        description: "Sistema de ticketera para eventos, permite visualizar eventos, adquirir tickets o productos asociados a los eventos. Pagos integrados.",
        image: "https://api.microlink.io?url=https://www.tickpass.online&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600&",
        technologies: ["Next.js", "TailwindCSS", "TypeScript", "Supabase"],
        category: "frontend",
        status: "Completado",
        period: "Nov 2024 - Ago 2025",
        highlights: ["Tiempo Real", "Pagos", "Eventos"],
        github: "private",
        demo: "https://www.tickpass.online"
      },
      {
        id: 3,
        title: "PublixGestión turnero",
        subtitle: "Sistema de Gestión de Turnos",
        description: "Solución integrada para hospitales y clínicas con capacidades multimedia y gestión de turnos en tiempo real.",
        image: "#",
        staticImage: "/publixgestion.png",
        technologies: ["React", "Next.js", "MongoDB", "WebSocket", "Tailwind"],
        category: "fullstack",
        status: "Completado",
        period: "May 2024 - Sep 2024",
        highlights: ["WebSocket", "Multimedia", "Raspberry Pi"],
        github: "private",
        demo: "#"
      },
      {
        id: 4,
        title: "PixelBox Web",
        subtitle: "Portfolio de la empresa PixelBox",
        description: "Portfolio de la empresa PixelBox, con información de la empresa, servicios, proyectos, etc.",
        image: "https://api.microlink.io?url=https://www.pixelboxpublicidad.com&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600",
        technologies: ["React","Next.js", "TailwindCSS", "TypeScript"],
        category: "frontend",
        status: "Completado",
        period: "Abril 2024 - May 2024",
        highlights: ["Portfolio", "Empresa", "Ruleta de la suerte"],
        github: "private",
        demo: "https://pixelboxpublicidad.com"
      }
    ],
    categories: [
      { id: "all", label: "Todos", count: 0 },
      { id: "fullstack", label: "Full Stack", count: 0 },
      { id: "frontend", label: "Frontend", count: 0 }
    ],
    notificationMessage: "El repositorio de {projectTitle} es privado por decisión de la empresa.",
    ctaSection: {
      title: "¿Te interesa trabajar juntos?",
      description: "Estos proyectos representan mi experiencia y enfoque. Si tienes una idea o necesitas ayuda con un proyecto, conversemos.",
      buttons: {
        contact: "Contactar"
      }
    }
  };
  