"use client";

import LightEffects from "./LightEffects";
import { useParallax } from "../hooks/useParallax";
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Calendar,
  MapPin,
  Award,
  Zap
} from "lucide-react";

const About = () => {
  const scrollY = useParallax();

  return (
    <section id="sobre-mi" className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
      {/* Efectos de luces con parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <LightEffects variant="section" colorScheme="blue" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header creativo */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Code2 className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">Sobre Mí</h2>
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Backend developer. Me gusta resolver problemas y escribir código que funcione bien.
          </p>
        </div>

        {/* Layout principal en tres columnas */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Columna 1: Educación */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Educación</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-200">
                  Ingeniería en Sistemas de Información
                </h4>
                
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Universidad Tecnológica Nacional, Tucumán, Argentina</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>Enero 2022 - Presente</span>
                </div>
                
                <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/20">
                  <p className="text-gray-300 leading-relaxed">
                    Me especializo en el estudio completo del ciclo de vida de un sistema, 
                    desde la planeación del proyecto hasta la codificación y pruebas finales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Experiencia Profesional */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gray-600/40 rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Experiencia Profesional</h3>
              </div>
              
              <div className="space-y-6">
                {/* TickPass */}
                <div className="relative pl-8 border-l-2 border-gray-600/50">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">Desarrollador Full Stack</h4>
                      <span className="text-sm text-green-400 bg-green-900/30 px-3 py-1 rounded-full">
                        Actual
                      </span>
                    </div>
                    <p className="text-blue-300 font-medium mb-2">TickPass</p>
                    <p className="text-gray-400 text-sm mb-3">Noviembre 2024 - Agosto 2025</p>
                    <p className="text-gray-300 leading-relaxed">
                      Desarrollo de plataformas para administración de eventos con funcionalidades 
                      avanzadas, incluyendo comunicación en tiempo real y procesamiento de pagos.
                    </p>
                  </div>
                </div>

                {/* PixelBox */}
                <div className="relative pl-8 border-l-2 border-gray-600/50">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                  <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                    <h4 className="text-lg font-semibold text-white mb-1">Desarrollador Full Stack</h4>
                    <p className="text-blue-300 font-medium mb-2">PixelBox</p>
                    <p className="text-gray-400 text-sm mb-3">Mayo 2024 - Septiembre 2024</p>
                    <p className="text-gray-300 leading-relaxed">
                      Diseño y desarrollo de sistemas de gestión de turnos integrados con 
                      capacidades multimedia para hospitales y clínicas.
                    </p>
                  </div>
                </div>

                {/* Immer Entertainment */}
                <div className="relative pl-8 border-l-2 border-gray-600/50">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-900"></div>
                  <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                    <h4 className="text-lg font-semibold text-white mb-1">Back-End Developer</h4>
                    <p className="text-blue-300 font-medium mb-2">Immer Entertainment</p>
                    <p className="text-gray-400 text-sm mb-3">Julio 2023 - Enero 2024</p>
                    <p className="text-gray-300 leading-relaxed">
                      Desarrollo de APIs REST para gestión de eventos con integración de 
                      pagos y documentación técnica completa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Habilidades técnicas con diseño moderno */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-300" />
            </div>
            <h3 className="text-2xl font-bold text-white">Habilidades</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-200 border-b border-blue-700/30 pb-2">
                Lenguajes
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "TypeScript", "JavaScript", "Java", "C++"].map((lang) => (
                  <span key={lang} className="px-3 py-1 bg-blue-900/40 text-blue-200 rounded-lg text-sm font-medium border border-blue-700/30 hover:bg-blue-800/50 transition-colors duration-200">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-200 border-b border-green-700/30 pb-2">
                Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "Nest.js", "Node.js"].map((framework) => (
                  <span key={framework} className="px-3 py-1 bg-green-900/40 text-green-200 rounded-lg text-sm font-medium border border-green-700/30 hover:bg-green-800/50 transition-colors duration-200">
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-200 border-b border-purple-700/30 pb-2">
                Bases de Datos
              </h4>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "MongoDB", "Firebase", "MariaDB"].map((db) => (
                  <span key={db} className="px-3 py-1 bg-purple-900/40 text-purple-200 rounded-lg text-sm font-medium border border-purple-700/30 hover:bg-purple-800/50 transition-colors duration-200">
                    {db}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-orange-200 border-b border-orange-700/30 pb-2">
                Herramientas
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "Linux", "Jest"].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-orange-900/40 text-orange-200 rounded-lg text-sm font-medium border border-orange-700/30 hover:bg-orange-800/50 transition-colors duration-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Idiomas en la parte inferior */}
          <div className="mt-8 pt-6 border-t border-gray-700/30">
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Idiomas</h4>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-red-900/40 text-red-200 rounded-lg font-medium border border-red-700/30">
                🇪🇸 Español Nativo
              </span>
              <span className="px-4 py-2 bg-blue-900/40 text-blue-200 rounded-lg font-medium border border-blue-700/30">
                🇺🇸 Inglés B2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 