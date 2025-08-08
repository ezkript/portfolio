import { AboutData } from "./About.types";

export const getAboutData = (t: (key: string) => string): AboutData => ({
    title: t('about.title'),
    subtitle: t('about.subtitle'),
    education: {
      degree: t('about.education.degree'),
      institution: t('about.education.institution'),
      location: t('about.education.location'),
      period: t('about.education.period'),
      description: t('about.education.description')
    },
    experience: [
      {
        id: 1,
        position: t('about.experience.position.fullstack'),
        company: t('about.experience.company.tickpass'),
        period: t('about.experience.period.tickpass'),
        description: t('about.experience.description.tickpass'),
        status: "Actual"
      },
      {
        id: 2,
        position: t('about.experience.position.fullstack'),
        company: t('about.experience.company.pixelbox'),
        period: t('about.experience.period.pixelbox'),
        description: t('about.experience.description.pixelbox'),
        status: "Completado"
      },
      {
        id: 3,
        position: t('about.experience.position.backend'),
        company: t('about.experience.company.immer'),
        period: t('about.experience.period.immer'),
        description: t('about.experience.description.immer'),
        status: "Completado"
      }
    ],
    skills: [
      {
        name: t('about.skills.languages'),
        skills: ["TypeScript", "JavaScript", "Python", "Java", "C++"]
      },
      {
        name: t('about.skills.frameworks'),
        skills: ["React + Next.js", "Express.js", "Node.js"]
      },
      {
        name: t('about.skills.databases'),
        skills: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"]
      },
      {
        name: t('about.skills.tools'),
        skills: ["Git", "Docker", "Linux", "TailwindCSS", "tRPC"]
      }
    ],
    languages: [
      {
        name: t('about.languages.spanish'),
        level: t('about.languages.level.native'),
        flag: "🇪🇸"
      },
      {
        name: t('about.languages.english'),
        level: "B2",
        flag: "🇺🇸"
      }
    ]
  });
  