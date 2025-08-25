"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const translations = {
    es: {
      // Navbar
      'nav.home': 'Inicio',
      'nav.about': 'Sobre Mí',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
      
      // Hero
      'hero.title': 'Gonzalo Balboa',
      'hero.subtitle': 'Backend Developer',
      'hero.description': 'Desarrollador Web Full Stack, estudiante de ingeniería en sistemas.',
      'hero.cta': 'Ver Proyectos',
      'hero.greeting': '¡Hola! Soy Gonzalo',
      'hero.tech.stack': 'Stack tecnológico',
      'hero.cv.download': 'Descargar CV',
      'hero.cv.success': '¡CV descargado correctamente! Revisa tu carpeta de descargas.',
      'hero.cv.error': 'Error al descargar el CV. Por favor, inténtalo de nuevo.',
      
      // About
      'about.title': 'Sobre Mí',
      'about.subtitle': 'Full Stack Developer. Me gusta resolver problemas y mantenerme actualizado con las nuevas tecnologías.',
      'about.education.title': 'Educación',
      'about.education.degree': 'Ingeniería en Sistemas de Información',
      'about.education.institution': 'Universidad Tecnológica Nacional',
      'about.education.location': 'Tucumán, Argentina',
      'about.education.period': 'Enero 2022 - Presente',
      'about.education.description': 'Me especializo en el estudio completo del ciclo de vida de un sistema, desde la planeación del proyecto hasta la codificación y pruebas finales.',
      'about.experience.title': 'Experiencia Profesional',
      'about.experience.current': 'Actual',
      'about.experience.completed': 'Completado',
      'about.experience.position.fullstack': 'Desarrollador Full Stack',
      'about.experience.position.backend': 'Back-End Developer',
      'about.experience.company.tickpass': 'TickPass',
      'about.experience.company.pixelbox': 'PixelBox',
      'about.experience.company.immer': 'Immer Entertainment',
      'about.experience.description.tickpass': 'Desarrollo de plataformas para administración de eventos con funcionalidades avanzadas, incluyendo comunicación en tiempo real y procesamiento de pagos.',
      'about.experience.description.pixelbox': 'Diseño y desarrollo de sistemas de gestión de turnos integrados con capacidades multimedia para hospitales y clínicas.',
      'about.experience.description.immer': 'Desarrollo de APIs REST para gestión de eventos con integración de pagos y documentación técnica completa.',
      'about.experience.period.tickpass': 'Noviembre 2024 - Agosto 2025',
      'about.experience.period.pixelbox': 'Mayo 2024 - Septiembre 2024',
      'about.experience.period.immer': 'Julio 2023 - Enero 2024',
      'about.skills.title': 'Habilidades',
      'about.skills.languages': 'Lenguajes',
      'about.skills.frameworks': 'Frameworks',
      'about.skills.databases': 'Bases de Datos',
      'about.skills.tools': 'Herramientas',
      'about.languages.title': 'Idiomas',
      'about.languages.spanish': 'Español',
      'about.languages.english': 'Inglés',
      'about.languages.level.native': 'Nativo',
      'about.languages.level.advanced': 'Avanzado',
      
      // Projects
      'projects.title': 'Proyectos',
      'projects.subtitle': 'Soluciones que he desarrollado aplicando diferentes tecnologías y enfoques.',
      'projects.filters.all': 'Todos',
      'projects.filters.fullstack': 'Full Stack',
      'projects.filters.frontend': 'Frontend',
      'projects.status.active': 'Activo',
      'projects.status.completed': 'Completado',
      'projects.cta.title': '¿Te interesa trabajar juntos?',
      'projects.cta.description': 'Estos proyectos representan mi experiencia y enfoque. Si tienes una idea o necesitas ayuda con un proyecto, conversemos.',
      'projects.cta.more': 'Ver Más Proyectos',
      'projects.cta.contact': 'Contactar',
      'projects.notification.private': 'El repositorio de {projectTitle} es privado por decisión de la empresa.',
      'projects.tickpass.jlc.title': 'JLC Fire',
      'projects.tickpass.jlc.subtitle': 'Portfolio de la empresa JLC Fire',
      'projects.tickpass.jlc.description': 'Portfolio de la empresa JLC Fire, con información de la empresa, servicios, proyectos, etc.',
      'projects.tickpass.admin.title': 'Tickpass Admin',
      'projects.tickpass.admin.subtitle': 'Plataforma de Administración de Eventos',
      'projects.tickpass.admin.description': 'Sistema completo para gestión de eventos. Es el panel de administración para usuarios y dashboard para la ticketera Tickpass.',
      'projects.tickpass.ticketera.title': 'TickPass Ticketera',
      'projects.tickpass.ticketera.subtitle': 'Ticketera para eventos',
      'projects.tickpass.ticketera.description': 'Sistema de ticketera para eventos, permite visualizar eventos, adquirir tickets o productos asociados a los eventos. Pagos integrados.',
      'projects.publix.title': 'PublixGestión turnero',
      'projects.publix.subtitle': 'Sistema de Gestión de Turnos',
      'projects.publix.description': 'Solución integrada para hospitales y clínicas con capacidades multimedia y gestión de turnos en tiempo real.',
      'projects.pixelbox.title': 'PixelBox Web',
      'projects.pixelbox.subtitle': 'Portfolio de la empresa PixelBox',
      'projects.pixelbox.description': 'Portfolio de la empresa PixelBox, con información de la empresa, servicios, proyectos, etc.',
      'projects.highlights.realtime': 'Tiempo Real',
      'projects.highlights.payments': 'Pagos',
      'projects.highlights.events': 'Eventos',
      'projects.highlights.websocket': 'WebSocket',
      'projects.highlights.multimedia': 'Multimedia',
      'projects.highlights.hospital': 'Hospitalario',
      'projects.highlights.portfolio': 'Portfolio',
      'projects.highlights.company': 'Empresa',
      'projects.highlights.design': 'Diseño',
      'projects.highlights.luck': 'Ruleta de la suerte',
      'projects.period.tickpass.admin': 'Nov 2024 - Ago 2025',
      'projects.period.tickpass.ticketera': 'Nov 2024 - Ago 2025',
      'projects.period.publix': 'May 2024 - Sep 2024',
      'projects.period.pixelbox': 'Abril 2024 - May 2024',
      'projects.period.jlc': 'Agosto 2025 - Agosto 2025',
      // Contact
      'contact.title': 'Contacto',
      'contact.subtitle': '¿Te interesa trabajar juntos o tienes alguna pregunta? Conversemos sobre tu proyecto.',
      'contact.info.title': 'Información de Contacto',
      'contact.info.email': 'Email',
      'contact.info.phone': 'Teléfono',
      'contact.info.location': 'Ubicación',
      'contact.info.availability': 'Disponibilidad',
      'contact.info.availability.text': 'Disponible para proyectos freelance y oportunidades laborales',
      'contact.social.title': 'Redes Profesionales',
      'contact.social.linkedin.description': 'Conectemos profesionalmente',
      'contact.social.github.description': 'Revisa mis proyectos',
      'contact.form.title': 'Envíame un Mensaje',
      'contact.form.name': 'Nombre',
      'contact.form.email': 'Email',
      'contact.form.message': 'Mensaje',
      'contact.form.name.placeholder': 'Tu nombre completo',
      'contact.form.email.placeholder': 'tu@email.com',
      'contact.form.message.placeholder': 'Cuéntame sobre tu proyecto o consulta...',
      'contact.form.submit': 'Enviar Mensaje',
      'contact.form.submitting': 'Enviando...',
      'contact.form.success': '¡Mensaje enviado con éxito! Te responderé lo antes posible.',
      'contact.form.error.required': 'Todos los campos son obligatorios',
      'contact.form.error.config': 'El servicio de email no está configurado correctamente',
      'contact.form.error.unknown': 'Error desconocido al enviar el mensaje',
      'contact.form.error.send': 'Error al enviar el mensaje',
      
      // Common
      'common.view': 'Ver',
      'common.loading': 'Cargando...',
      'common.error': 'Error',
      'common.success': 'Éxito',
      'common.close': 'Cerrar',
    },
    en: {
      // Navbar
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      
      // Hero
      'hero.title': 'Gonzalo Balboa',
      'hero.subtitle': 'Backend Developer',
      'hero.description': 'Full Stack Web Developer, Systems Engineering student.',
      'hero.cta': 'View Projects',
      'hero.greeting': 'Hello! I\'m Gonzalo',
      'hero.tech.stack': 'Tech Stack',
      'hero.cv.download': 'Download CV',
      'hero.cv.success': 'CV downloaded successfully! Check your downloads folder.',
      'hero.cv.error': 'Error downloading CV. Please try again.',
      
      // About
      'about.title': 'About Me',
      'about.subtitle': 'Full Stack Developer. I like solving problems and keeping up to date with new technologies.',
      'about.education.title': 'Education',
      'about.education.degree': 'Information Systems Engineering',
      'about.education.institution': 'National Technological University',
      'about.education.location': 'Tucumán, Argentina',
      'about.education.period': 'January 2022 - Present',
      'about.education.description': 'I specialize in the complete study of a system\'s life cycle, from project planning to coding and final testing.',
      'about.experience.title': 'Professional Experience',
      'about.experience.current': 'Current',
      'about.experience.completed': 'Completed',
      'about.experience.position.fullstack': 'Full Stack Developer',
      'about.experience.position.backend': 'Back-End Developer',
      'about.experience.company.tickpass': 'TickPass',
      'about.experience.company.pixelbox': 'PixelBox',
      'about.experience.company.immer': 'Immer Entertainment',
      'about.experience.description.tickpass': 'Development of event management platforms with advanced features, including real-time communication and payment processing.',
      'about.experience.description.pixelbox': 'Design and development of integrated appointment management systems with multimedia capabilities for hospitals and clinics.',
      'about.experience.description.immer': 'Development of REST APIs for event management with payment integration and complete technical documentation.',
      'about.experience.period.tickpass': 'November 2024 - August 2025',
      'about.experience.period.pixelbox': 'May 2024 - September 2024',
      'about.experience.period.immer': 'July 2023 - January 2024',
      'about.skills.title': 'Skills',
      'about.skills.languages': 'Languages',
      'about.skills.frameworks': 'Frameworks',
      'about.skills.databases': 'Databases',
      'about.skills.tools': 'Tools',
      'about.languages.title': 'Languages',
      'about.languages.spanish': 'Spanish',
      'about.languages.english': 'English',
      'about.languages.level.native': 'Native',
      'about.languages.level.advanced': 'Advanced',
      
      // Projects
      'projects.title': 'Projects',
      'projects.subtitle': 'Solutions I have developed applying different technologies and approaches.',
      'projects.filters.all': 'All',
      'projects.filters.fullstack': 'Full Stack',
      'projects.filters.frontend': 'Frontend',
      'projects.status.active': 'Active',
      'projects.status.completed': 'Completed',
      'projects.cta.title': 'Interested in working together?',
      'projects.cta.description': 'These projects represent my experience and approach. If you have an idea or need help with a project, let\'s talk.',
      'projects.cta.more': 'View More Projects',
      'projects.cta.contact': 'Contact',
      'projects.notification.private': 'The repository for {projectTitle} is private by company decision.',
      'projects.tickpass.jlc.title': 'JLC Fire',
      'projects.tickpass.jlc.subtitle': 'JLC Fire Company Portfolio',
      'projects.tickpass.jlc.description': 'JLC Fire company portfolio with company information, services, projects, etc.',
      'projects.tickpass.admin.title': 'Tickpass Admin',
      'projects.tickpass.admin.subtitle': 'Event Management Platform',
      'projects.tickpass.admin.description': 'Complete event management system. It is the administration panel for users and dashboard for the Tickpass ticketing system.',
      'projects.tickpass.ticketera.title': 'TickPass Ticketera',
      'projects.tickpass.ticketera.subtitle': 'Event Ticketing System',
      'projects.tickpass.ticketera.description': 'Event ticketing system that allows viewing events, purchasing tickets or products associated with events. Integrated payments.',
      'projects.publix.title': 'PublixGestión turnero',
      'projects.publix.subtitle': 'Appointment Management System',
      'projects.publix.description': 'Integrated solution for hospitals and clinics with multimedia capabilities and real-time appointment management.',
      'projects.pixelbox.title': 'PixelBox Web',
      'projects.pixelbox.subtitle': 'PixelBox Company Portfolio',
      'projects.pixelbox.description': 'PixelBox company portfolio with company information, services, projects, etc.',
      'projects.highlights.realtime': 'Real Time',
      'projects.highlights.payments': 'Payments',
      'projects.highlights.events': 'Events',
      'projects.highlights.websocket': 'WebSocket',
      'projects.highlights.multimedia': 'Multimedia',
      'projects.highlights.hospital': 'Hospital',
      'projects.highlights.portfolio': 'Portfolio',
      'projects.highlights.company': 'Company',
      'projects.highlights.design': 'Design',
      'projects.highlights.luck': 'Luck Wheel',
      'projects.period.tickpass.admin': 'Nov 2024 - Aug 2025',
      'projects.period.tickpass.ticketera': 'Nov 2024 - Aug 2025',
      'projects.period.publix': 'May 2024 - Sep 2024',
      'projects.period.pixelbox': 'Apr 2024 - May 2024',
      'projects.period.jlc': 'Aug 2025 - Aug 2025',
      
      // Contact
      'contact.title': 'Contact',
      'contact.subtitle': 'Interested in working together or have any questions? Let\'s talk about your project.',
      'contact.info.title': 'Contact Information',
      'contact.info.email': 'Email',
      'contact.info.phone': 'Phone',
      'contact.info.location': 'Location',
      'contact.info.availability': 'Availability',
      'contact.info.availability.text': 'Available for freelance projects and job opportunities',
      'contact.social.title': 'Professional Networks',
      'contact.social.linkedin.description': 'Let\'s connect professionally',
      'contact.social.github.description': 'Check out my projects',
      'contact.form.title': 'Send me a Message',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.name.placeholder': 'Your full name',
      'contact.form.email.placeholder': 'your@email.com',
      'contact.form.message.placeholder': 'Tell me about your project or inquiry...',
      'contact.form.submit': 'Send Message',
      'contact.form.submitting': 'Sending...',
      'contact.form.success': 'Message sent successfully! I\'ll get back to you as soon as possible.',
      'contact.form.error.required': 'All fields are required',
      'contact.form.error.config': 'Email service is not configured correctly',
      'contact.form.error.unknown': 'Unknown error sending message',
      'contact.form.error.send': 'Error sending message',
      
      // Common
      'common.view': 'View',
      'common.loading': 'Loading...',
      'common.error': 'Error',
      'common.success': 'Success',
      'common.close': 'Close',
    }
  };

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
