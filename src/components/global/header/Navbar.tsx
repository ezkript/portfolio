'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/global/themetoggle/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-transparent backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl w-screen mx-auto py-2 px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full justify-center items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden w-full flex justify-end items-center">
          <div className="px-3 py-2">
            <ThemeToggle />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-text-light-secondary hover:text-text-light-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menú principal</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center bg-transparent shadow-lg">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link block px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 