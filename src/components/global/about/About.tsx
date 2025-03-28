'use client';

import { User, Code, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Herramientas', items: ['Git', 'Docker', 'AWS', 'Figma'] },
  ];

  return (
    <section id="sobre-mi" className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary">
              Soy un desarrollador Full Stack apasionado por crear soluciones web innovadoras y eficientes. 
              Con más de 5 años de experiencia en el desarrollo web, me especializo en construir aplicaciones 
              modernas y escalables utilizando las últimas tecnologías.
            </p>
            <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary">
              Mi enfoque se centra en escribir código limpio y mantenible, siguiendo las mejores prácticas 
              de la industria y asegurando una excelente experiencia de usuario.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-primary-500" />
                <span className="text-text-light-secondary dark:text-text-dark-secondary">5+ años de experiencia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-primary-500" />
                <span className="text-text-light-secondary dark:text-text-dark-secondary">50+ proyectos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-primary-500" />
                <span className="text-text-light-secondary dark:text-text-dark-secondary">20+ clientes</span>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl"></div>
            <div className="relative h-full w-full">
              {/* Aquí puedes agregar tu imagen de perfil o una ilustración */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                <span className="text-text-light-secondary dark:text-text-dark-secondary">Tu imagen aquí</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 