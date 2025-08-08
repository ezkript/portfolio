"use client";

import { useState } from "react";
import LightEffects from "./LightEffects";
import { useParallax } from "../hooks/useParallax";
import { 
  Github, 
  Calendar,
  Code2,
  Sparkles,
  Filter,
  Eye,
  Lock,
  X
} from "lucide-react";

const Projects = () => {
  const scrollY = useParallax();
  const [activeFilter, setActiveFilter] = useState("all");
  const [notification, setNotification] = useState<{ show: boolean; message: string }>({ 
    show: false, 
    message: "" 
  });
  const projects = [
    {
      id: 1,
      title: "TickPass",
      subtitle: "Plataforma de Administración de Eventos",
      description: "Sistema completo para gestión de eventos con funcionalidades avanzadas de comunicación en tiempo real y procesamiento de pagos.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
      technologies: ["React", "Next.js", "TypeScript", "Firebase", "tRPC"],
      category: "fullstack",
      status: "Activo",
      period: "Nov 2024 - Ago 2025",
      highlights: ["Tiempo Real", "Pagos", "Eventos"],
      github: "private",
      demo: "#"
    },
    {
      id: 2,
      title: "PixelBox",
      subtitle: "Sistema de Gestión de Turnos",
      description: "Solución integrada para hospitales y clínicas con capacidades multimedia y gestión de turnos en tiempo real.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
      technologies: ["React", "Next.js", "MongoDB", "WebSocket", "Tailwind"],
      category: "fullstack",
      status: "Completado",
      period: "May 2024 - Sep 2024",
      highlights: ["WebSocket", "Multimedia", "Hospitalario"],
      github: "private",
      demo: "#"
    }
  ];

  const categories = [
    { id: "all", label: "Todos", count: projects.length },
    { id: "fullstack", label: "Full Stack", count: projects.filter(p => p.category === "fullstack").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleGithubClick = (githubUrl: string, projectTitle: string) => {
    if (githubUrl === "private") {
      setNotification({
        show: true,
        message: `El repositorio de ${projectTitle} es privado por decisión de la empresa.`
      });
      
      // Auto-hide después de 4 segundos
      setTimeout(() => {
        setNotification({ show: false, message: "" });
      }, 4000);
    } else {
      window.open(githubUrl, "_blank");
    }
  };

  return (
    <section id="proyectos" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      {/* Notificación */}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 max-w-sm">
          <div className="bg-gray-900/95 backdrop-blur-sm border border-orange-500/50 rounded-xl p-4 shadow-2xl transform animate-slide-in-right">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <Lock className="w-5 h-5 text-orange-400 mt-0.5" />
              </div>
              <div className="flex-1">
                <p className="text-orange-200 text-sm leading-relaxed">
                  {notification.message}
                </p>
              </div>
              <button
                onClick={() => setNotification({ show: false, message: "" })}
                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Efectos de luces con parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <LightEffects variant="section" colorScheme="blue" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con iconos */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Code2 className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">Proyectos</h2>
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones que he desarrollado aplicando diferentes tecnologías y enfoques.
          </p>
        </div>

        {/* Filtros animados */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === category.id
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  {category.label}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeFilter === category.id
                      ? "bg-blue-800/50 text-blue-200"
                      : "bg-gray-700/50 text-gray-400"
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagen con overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                
                {/* Badge de estado */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Activo"
                      ? "bg-green-900/80 text-green-200 border border-green-700"
                      : "bg-blue-900/80 text-blue-200 border border-blue-700"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Overlay con acciones */}
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demo}
                    className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors duration-200 transform hover:scale-110"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => handleGithubClick(project.github, project.title)}
                    className={`p-3 rounded-full text-white transition-colors duration-200 transform hover:scale-110 ${
                      project.github === "private"
                        ? "bg-orange-600 hover:bg-orange-700"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-blue-300 text-sm font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 bg-blue-900/30 text-blue-200 rounded-md text-xs font-medium border border-blue-700/30"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/60 text-gray-300 rounded-lg text-xs font-medium border border-gray-700/50 hover:bg-gray-700/60 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-800/60 text-gray-400 rounded-lg text-xs font-medium border border-gray-700/50">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">¿Te interesa trabajar juntos?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Estos proyectos representan mi experiencia y enfoque. Si tienes una idea o necesitas ayuda con un proyecto, conversemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Ver Más Proyectos
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contacto");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border-2 border-blue-500/50 text-blue-200 font-medium rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 