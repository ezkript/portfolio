'use client';

import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/tu-usuario',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/tu-usuario',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/tu-usuario',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:tu@email.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary">
              Contacto
            </h3>
            <p className="text-text-light-secondary dark:text-text-dark-secondary">
              ¿Tienes un proyecto en mente? No dudes en contactarme.
            </p>
            <a
              href="mailto:tu@email.com"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              tu@email.com
            </a>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#habilidades" className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary">
              Redes Sociales
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light-secondary hover:text-primary-600 dark:text-text-dark-secondary dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea Divisoria */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm">
              © {currentYear} Tu Nombre. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 