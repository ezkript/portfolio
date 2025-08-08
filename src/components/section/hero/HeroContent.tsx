"use client";
import React, { useState } from "react";
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiGit } from "react-icons/si";
import { SiReact, SiNodedotjs, SiTypescript, SiDocker } from "react-icons/si";
import { HiFolder, HiDownload } from "react-icons/hi";
import { CheckCircle, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HeroContent = () => {
  const [notification, setNotification] = useState<{ show: boolean; message: string }>({ 
    show: false, 
    message: "" 
  });
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = '/cv.pdf';
      link.download = 'GonzaloBalboa_DesarrolladorFullStack.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setNotification({
        show: true,
        message: t('hero.cv.success')
      });
      
      setTimeout(() => {
        setNotification({ show: false, message: "" });
      }, 4000);
    } catch (error) {
      console.error("Error al descargar CV:", error);
      setNotification({
        show: true,
        message: t('hero.cv.error')
      });
      
      setTimeout(() => {
        setNotification({ show: false, message: "" });
      }, 4000);
    }
  };

  const technologies = [
    { icon: SiReact, name: "React", color: "text-blue-400", delay: 0 },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500", delay: 100 },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600", delay: 200 },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600", delay: 300 },
    { icon: SiNextdotjs, name: "Next.js", color: "text-gray-300", delay: 400 },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400", delay: 500 },
    { icon: SiGit, name: "Git", color: "text-orange-500", delay: 600 },
    { icon: SiDocker, name: "Docker", color: "text-blue-500", delay: 700 }
  ];

  return (
    <div className="flex-1 max-w-2xl text-center lg:text-left">
      {notification.show ? (
        <div className="fixed top-4 right-4 z-50 max-w-sm">
          <div className="bg-gray-900/95 backdrop-blur-sm border border-green-500/50 rounded-xl p-4 shadow-2xl transform animate-slide-in-right">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              </div>
              <div className="flex-1">
                <p className="text-green-200 text-sm leading-relaxed">
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
      ) : null}
      <h1 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
        {t('hero.greeting')}
      </h1>
        <p className="text-lg lg:text-xl text-blue-200 mb-4">
          {t('hero.description')}
        </p>
      <div className="mb-8">
        <h2 className="text-lg lg:text-xl font-medium mb-6 text-blue-200">
          {t('hero.tech.stack')}
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center p-4 bg-gray-900/30 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${tech.delay}ms` }}
            >
              <tech.icon 
                className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
              />
              <span className="text-xs text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                {tech.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button 
          onClick={() => {
            const element = document.getElementById("proyectos");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
        >
          <HiFolder className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          {t('hero.cta')}
        </button>
        <button 
          onClick={handleDownloadCV}
          className="group px-6 py-3 border-2 border-white/80 text-white text-base font-medium rounded-xl hover:bg-white hover:text-blue-900 hover:border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 text-center shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 justify-center backdrop-blur-sm"
        >
          <HiDownload className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          {t('hero.cv.download')}
        </button>
      </div>
    </div>
  );
};

export default HeroContent; 