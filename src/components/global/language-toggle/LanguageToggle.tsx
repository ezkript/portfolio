"use client";

import { useLanguage } from '../../../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 hover:border-gray-500/50 rounded-lg transition-all duration-300 text-white hover:text-blue-300 group"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
      <span className="text-sm font-medium">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
};
