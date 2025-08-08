import { AboutData } from "./About.types";

export const aboutData: AboutData = {
    title: "Sobre Mí",
    subtitle: "Backend developer. Me gusta resolver problemas y escribir código que funcione bien.",
    education: {
      degree: "Ingeniería en Sistemas de Información",
      institution: "Universidad Tecnológica Nacional",
      location: "Tucumán, Argentina",
      period: "Enero 2022 - Presente",
      description: "Me especializo en el estudio completo del ciclo de vida de un sistema, desde la planeación del proyecto hasta la codificación y pruebas finales."
    },
    experience: [
      {
        id: 1,
        position: "Desarrollador Full Stack",
        company: "TickPass",
        period: "Noviembre 2024 - Agosto 2025",
        description: "Desarrollo de plataformas para administración de eventos con funcionalidades avanzadas, incluyendo comunicación en tiempo real y procesamiento de pagos.",
        status: "Actual"
      },
      {
        id: 2,
        position: "Desarrollador Full Stack",
        company: "PixelBox",
        period: "Mayo 2024 - Septiembre 2024",
        description: "Diseño y desarrollo de sistemas de gestión de turnos integrados con capacidades multimedia para hospitales y clínicas.",
        status: "Completado"
      },
      {
        id: 3,
        position: "Back-End Developer",
        company: "Immer Entertainment",
        period: "Julio 2023 - Enero 2024",
        description: "Desarrollo de APIs REST para gestión de eventos con integración de pagos y documentación técnica completa.",
        status: "Completado"
      }
    ],
    skills: [
      {
        name: "Lenguajes",
        skills: ["Python", "TypeScript", "JavaScript", "Java", "C++"]
      },
      {
        name: "Frameworks",
        skills: ["React.js", "Next.js", "Nest.js", "Node.js"]
      },
      {
        name: "Bases de Datos",
        skills: ["MySQL", "MongoDB", "Firebase", "MariaDB"]
      },
      {
        name: "Herramientas",
        skills: ["Git", "Docker", "Linux", "Jest"]
      }
    ],
    languages: [
      {
        name: "Español",
        level: "Nativo",
        flag: "🇪🇸"
      },
      {
        name: "Inglés",
        level: "B2",
        flag: "🇺🇸"
      }
    ]
  };
  