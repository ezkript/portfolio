'use client';

import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-text-light-primary dark:text-text-dark-primary mb-6">
            Hola, soy <span className="text-primary-600 dark:text-primary-400">Tu Nombre</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-light-secondary dark:text-text-dark-secondary mb-8">
            Desarrollador Full Stack especializado en crear experiencias web excepcionales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contacto"
              className="btn-primary inline-flex items-center justify-center"
            >
              Contáctame
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#proyectos"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Ver Proyectos
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light-secondary hover:text-text-light-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light-secondary hover:text-text-light-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:tu@email.com"
              className="text-text-light-secondary hover:text-text-light-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 