import { ProjectsData } from "./Projects.types";

export const getProjectsData = (t: (key: string) => string): ProjectsData => ({
    title: t('projects.title'),
    subtitle: t('projects.subtitle'),
    projects: [
      {
        id: 1,
        title: t('projects.tickpass.jlc.title'),
        subtitle: t('projects.tickpass.jlc.subtitle'),
        description: t('projects.tickpass.jlc.description'),
        image: "https://api.microlink.io?url=https://jlc-fire.vercel.app&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600",
        galleryImages: [
          "https://drive.google.com/uc?export=view&id=14nAKD7peelpulFm7qd2FyPKjyOgFC_OR&export=download",
          "https://drive.google.com/uc?export=view&id=1dqLMGmMppjlZmDx0JKO9rgFwN--YfXo9&export=download",
          "https://drive.google.com/uc?export=view&id=1wdsqiLO32CHOH5ZA0xqciqCvfOK-GVxG&export=download",
          "https://drive.google.com/uc?export=view&id=11YxlrnB3bdz7WLwbgU5EBYykJbBvxHJO&export=download",
          "https://drive.google.com/uc?export=view&id=1EYRqdkuKUdmaIe-HAqsiXZ4l8niVzwpx&export=download",
          "https://drive.google.com/uc?export=view&id=12_xmKdKIUGTsIYAmSgVENMv2pHZ_sXEN&export=download"
        ],
        technologies: ["React", "Next.js", "TailwindCSS", "TypeScript"],
        category: "frontend",
        status: "Completado",
        period: t('projects.period.jlc'),
        highlights: [t('projects.highlights.portfolio'), t('projects.highlights.company'), t('projects.highlights.design')],
        github: "https://github.com/ezkript/JLC-Fire",
        demo: "https://jlc-fire.vercel.app"
      },
      {
        id: 2,
        title: t('projects.tickpass.admin.title'),
        subtitle: t('projects.tickpass.admin.subtitle'),
        description: t('projects.tickpass.admin.description'),
        image: "https://api.microlink.io?url=https://apptickpass.com&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600&colorScheme=dark",
        galleryImages: [
          "https://drive.google.com/uc?export=view&id=1EBbKd4yiVGywYShrVHBBWq6g_Mpw7qFd&export=download",
          "https://drive.google.com/uc?export=view&id=1Gjoss19sKsBwz5fqf5KeF4DEqw8RPRNI&export=download",
          "https://drive.google.com/uc?export=view&id=1hGW5FgfAWsKwwB9HFiDBgRg3XiuTVKkX&export=download",
          "https://drive.google.com/uc?export=view&id=1sC-BvTfGm6jVw5VPmwkH-_Mjk1oXXFyI&export=download", 
          "https://drive.google.com/uc?export=view&id=17dNUj5kUNuejPbWpLisa7Yg0RXxWcGxQ&export=download"
        ],
        technologies: ["Next.js", "TypeScript", "Supabase", "tRPC"],
        category: "fullstack",
        status: "Activo",
        period: t('projects.period.tickpass.admin'),
        highlights: [t('projects.highlights.realtime'), t('projects.highlights.payments'), t('projects.highlights.events')],
        github: "private",
        demo: "https://apptickpass.com"
      },
      {
        id: 3,
        title: t('projects.tickpass.ticketera.title'),
        subtitle: t('projects.tickpass.ticketera.subtitle'),
        description: t('projects.tickpass.ticketera.description'),
        image: "https://api.microlink.io?url=https://www.tickpass.online&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600&",
        galleryImages: [
          "https://drive.google.com/uc?export=view&id=1RKjfsGVXeGffnLXbzZbP_xiPkQuqzSl6&export=download",
          "https://drive.google.com/uc?export=view&id=1HHqIKip4C8Bog1Y5zEKqmRFdNsTM5OA3&export=download",
          "https://drive.google.com/uc?export=view&id=19HL0sQ7uaWMT0kdFkPUThRCKoUacojBK&export=download",
          "https://drive.google.com/uc?export=view&id=1Vasf6dd7sJ8kkWFIi1pBvSAu3HnxmJGN&export=download"
        ],
        technologies: ["Next.js", "TailwindCSS", "TypeScript", "Supabase"],
        category: "frontend",
        status: "Completado",
        period: t('projects.period.tickpass.ticketera'),
        highlights: [t('projects.highlights.realtime'), t('projects.highlights.payments'), t('projects.highlights.events')],
        github: "private",
        demo: "https://www.tickpass.online"
      },
      {
        id: 4,
        title: t('projects.publix.title'),
        subtitle: t('projects.publix.subtitle'),
        description: t('projects.publix.description'),
        image: "https://api.microlink.io?url=https://publixgestion.vercel.app&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600",
        galleryImages: [
          "https://drive.google.com/uc?export=view&id=1-qAd2sunON2N9mc6WpeV6xpfsXyvqykb&export=download",
        ],
        technologies: ["React", "Next.js", "MongoDB", "WebSocket", "Tailwind"],
        category: "fullstack",
        status: "Completado",
        period: t('projects.period.publix'),
        highlights: [t('projects.highlights.websocket'), t('projects.highlights.multimedia'), "Raspberry Pi"],
        github: "private",
        demo: "https://publixgestion.vercel.app"
      },
      {
        id: 5,
        title: t('projects.pixelbox.title'),
        subtitle: t('projects.pixelbox.subtitle'),
        description: t('projects.pixelbox.description'),
        image: "https://api.microlink.io?url=https://www.pixelboxpublicidad.com&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600",
        galleryImages: [
          "/pixelbox.png",
          "/pixelbox.png",
          "/pixelbox.png"
        ],
        technologies: ["React","Next.js", "TailwindCSS", "TypeScript"],
        category: "frontend",
        status: "Completado",
        period: t('projects.period.pixelbox'),
        highlights: [t('projects.highlights.portfolio'), t('projects.highlights.company'), t('projects.highlights.luck')],
        github: "private",
        demo: "https://pixelboxpublicidad.com"
      },
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
  