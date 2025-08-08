import { ProjectsData } from "./Projects.types";

export const getProjectsData = (t: (key: string) => string): ProjectsData => ({
    title: t('projects.title'),
    subtitle: t('projects.subtitle'),
    projects: [
      {
        id: 1,
        title: t('projects.tickpass.admin.title'),
        subtitle: t('projects.tickpass.admin.subtitle'),
        description: t('projects.tickpass.admin.description'),
        image: "https://api.microlink.io?url=https://apptickpass.com&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600&colorScheme=dark",
        technologies: ["Next.js", "TypeScript", "Supabase", "tRPC"],
        category: "fullstack",
        status: "Activo",
        period: t('projects.period.tickpass.admin'),
        highlights: [t('projects.highlights.realtime'), t('projects.highlights.payments'), t('projects.highlights.events')],
        github: "private",
        demo: "https://apptickpass.com"
      },
      {
        id: 2,
        title: t('projects.tickpass.ticketera.title'),
        subtitle: t('projects.tickpass.ticketera.subtitle'),
        description: t('projects.tickpass.ticketera.description'),
        image: "https://api.microlink.io?url=https://www.tickpass.online&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600&",
        technologies: ["Next.js", "TailwindCSS", "TypeScript", "Supabase"],
        category: "frontend",
        status: "Completado",
        period: t('projects.period.tickpass.ticketera'),
        highlights: [t('projects.highlights.realtime'), t('projects.highlights.payments'), t('projects.highlights.events')],
        github: "private",
        demo: "https://www.tickpass.online"
      },
      {
        id: 3,
        title: t('projects.publix.title'),
        subtitle: t('projects.publix.subtitle'),
        description: t('projects.publix.description'),
        image: "#",
        staticImage: "/publixgestion.png",
        technologies: ["React", "Next.js", "MongoDB", "WebSocket", "Tailwind"],
        category: "fullstack",
        status: "Completado",
        period: t('projects.period.publix'),
        highlights: [t('projects.highlights.websocket'), t('projects.highlights.multimedia'), "Raspberry Pi"],
        github: "private",
        demo: "#"
      },
      {
        id: 4,
        title: t('projects.pixelbox.title'),
        subtitle: t('projects.pixelbox.subtitle'),
        description: t('projects.pixelbox.description'),
        image: "https://api.microlink.io?url=https://www.pixelboxpublicidad.com&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600",
        technologies: ["React","Next.js", "TailwindCSS", "TypeScript"],
        category: "frontend",
        status: "Completado",
        period: t('projects.period.pixelbox'),
        highlights: [t('projects.highlights.portfolio'), t('projects.highlights.company'), t('projects.highlights.luck')],
        github: "private",
        demo: "https://pixelboxpublicidad.com"
      }
    ],
    categories: [
      { id: "all", label: t('projects.filters.all'), count: 0 },
      { id: "fullstack", label: t('projects.filters.fullstack'), count: 0 },
      { id: "frontend", label: t('projects.filters.frontend'), count: 0 }
    ],
    notificationMessage: t('projects.notification.private'),
    ctaSection: {
      title: t('projects.cta.title'),
      description: t('projects.cta.description'),
      buttons: {
        contact: t('projects.cta.contact')
      }
    }
  });
  