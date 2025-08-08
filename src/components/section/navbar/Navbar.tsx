"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "sobre-mi", "proyectos", "contacto"];
      const scrollPosition = window.scrollY + 100;

      setScrolled(window.scrollY > 20);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-4 md:px-6">
      {/* Desktop Menu - Centered */}
      <div className="hidden md:flex items-center justify-center flex-1">
        <div className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled 
            ? "bg-black/20 backdrop-blur-md border border-white/10" 
            : ""
        }`}>
        <button
          onClick={() => scrollToSection("hero")}
          className={`px-2 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
            activeSection === "hero" 
              ? "text-white border-b-2 border-white" 
              : "text-white/80 hover:text-white"
          }`}
        >
          {t('nav.home')}
        </button>
        <button
          onClick={() => scrollToSection("sobre-mi")}
          className={`px-2 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
            activeSection === "sobre-mi" 
              ? "text-white border-b-2 border-white" 
              : "text-white/80 hover:text-white"
          }`}
        >
          {t('nav.about')}
        </button>
        <button
          onClick={() => scrollToSection("proyectos")}
          className={`px-2 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
            activeSection === "proyectos" 
              ? "text-white border-b-2 border-white" 
              : "text-white/80 hover:text-white"
          }`}
        >
          {t('nav.projects')}
        </button>
        <button
          onClick={() => scrollToSection("contacto")}
          className={`px-2 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
            activeSection === "contacto" 
              ? "text-white border-b-2 border-white" 
              : "text-white/80 hover:text-white"
          }`}
        >
          {t('nav.contact')}
        </button>
        <div className="w-px h-4 bg-white/30 mx-2"></div>
        <button
          onClick={toggleLanguage}
          className="px-2 py-2 text-xs font-medium tracking-wide uppercase text-white/80 hover:text-white transition-colors duration-200 border border-white/30 rounded hover:border-white/50"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
        </div>
      </div>

      {/* Mobile Menu Button - Right aligned */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden ml-auto flex items-center justify-center w-10 h-10 rounded-lg bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/30 transition-all duration-300"
      >
        <div className="flex flex-col space-y-1">
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={closeMenu}>
          <div className="absolute top-20 right-4 w-64 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-4">
              <button
                onClick={() => { scrollToSection("hero"); closeMenu(); }}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeSection === "hero" 
                    ? "bg-blue-600/20 text-white border border-blue-500/30" 
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => { scrollToSection("sobre-mi"); closeMenu(); }}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeSection === "sobre-mi" 
                    ? "bg-blue-600/20 text-white border border-blue-500/30" 
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => { scrollToSection("proyectos"); closeMenu(); }}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeSection === "proyectos" 
                    ? "bg-blue-600/20 text-white border border-blue-500/30" 
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {t('nav.projects')}
              </button>
              <button
                onClick={() => { scrollToSection("contacto"); closeMenu(); }}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeSection === "contacto" 
                    ? "bg-blue-600/20 text-white border border-blue-500/30" 
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {t('nav.contact')}
              </button>
              <div className="border-t border-white/10 pt-4">
                <button
                  onClick={() => { toggleLanguage(); closeMenu(); }}
                  className="w-full px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 border border-white/20 hover:border-white/40"
                >
                  {language === "es" ? "Switch to English" : "Cambiar a Español"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 