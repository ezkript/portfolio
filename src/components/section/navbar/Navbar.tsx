"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [language, setLanguage] = useState("es");
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center">
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
          Inicio
        </button>
        <button
          onClick={() => scrollToSection("sobre-mi")}
          className={`px-2 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
            activeSection === "sobre-mi" 
              ? "text-white border-b-2 border-white" 
              : "text-white/80 hover:text-white"
          }`}
        >
          Sobre Mí
        </button>
        <button
          onClick={() => scrollToSection("proyectos")}
          className={`px-2 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
            activeSection === "proyectos" 
              ? "text-white border-b-2 border-white" 
              : "text-white/80 hover:text-white"
          }`}
        >
          Proyectos
        </button>
        <button
          onClick={() => scrollToSection("contacto")}
          className={`px-2 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
            activeSection === "contacto" 
              ? "text-white border-b-2 border-white" 
              : "text-white/80 hover:text-white"
          }`}
        >
          Contacto
        </button>
        <div className="w-px h-4 bg-white/30 mx-2"></div>
        <button
          onClick={toggleLanguage}
          className="px-2 py-2 text-xs font-medium tracking-wide uppercase text-white/80 hover:text-white transition-colors duration-200 border border-white/30 rounded hover:border-white/50"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 