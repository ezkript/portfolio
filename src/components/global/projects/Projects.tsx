'use client';

import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1. Una aplicación web moderna que permite a los usuarios...',
    image: '/projects/project1.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/tuusuario/proyecto1',
    liveUrl: 'https://proyecto1.com',
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2. Una plataforma que ayuda a los usuarios a...',
    image: '/projects/project2.jpg',
    technologies: ['Next.js', 'MongoDB', 'Express', 'AWS'],
    githubUrl: 'https://github.com/tuusuario/proyecto2',
    liveUrl: 'https://proyecto2.com',
  },
  // Agrega más proyectos aquí
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-light-primary dark:text-text-dark-primary mb-2">
          {project.title}
        </h3>
        <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="proyectos" className="py-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 