"use client";
import React from "react";
import LightEffects from "@/components/global/lighteffects/LightEffects";
import { useParallax } from "@/hooks/useParallax";
import { Calendar, MapPin, Award, Zap } from "lucide-react";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import { getAboutData } from "./About.helper";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const scrollY = useParallax();
  const { t } = useLanguage();
  const aboutData = getAboutData(t);

  return (
    <section id="sobre-mi" className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <LightEffects variant="section" colorScheme="blue" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Code2 className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">{aboutData.title}</h2>
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {aboutData.subtitle}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('about.education.title')}</h3>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-200">
                  {aboutData.education.degree}
                </h4>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{aboutData.education.institution}, {aboutData.education.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>{aboutData.education.period}</span>
                </div>
                <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/20">
                  <p className="text-gray-300 leading-relaxed">
                    {aboutData.education.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gray-600/40 rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('about.experience.title')}</h3>
              </div>
              <div className="space-y-6">
                {aboutData.experience.map((exp, index) => (
                  <div key={exp.id} className="relative pl-8 border-l-2 border-gray-600/50">
                    <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full border-2 border-gray-900 ${
                      exp.status === "Actual" 
                        ? "bg-green-500" 
                        : index === 1 
                          ? "bg-blue-500" 
                          : "bg-purple-500"
                    }`}></div>
                    <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-lg font-semibold text-white">{exp.position}</h4>
                        {exp.status === "Actual" ? (
                          <span className="text-sm text-green-400 bg-green-900/30 px-3 py-1 rounded-full">
                            {t('about.experience.current')}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-blue-300 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                      <p className="text-gray-300 leading-relaxed hyphens-auto">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-blue-300" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t('about.skills.title')}</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.skills.map((skillCategory, index) => {
              const colors = ["blue", "green", "purple", "orange"];
              const color = colors[index];
              return (
                <div key={skillCategory.name} className="space-y-4">
                  <h4 className={`text-lg font-semibold text-${color}-200 border-b border-${color}-700/30 pb-2`}>
                    {skillCategory.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill) => (
                      <span key={skill} className={`px-3 py-1 bg-${color}-900/40 text-${color}-200 rounded-lg text-sm font-medium border border-${color}-700/30 hover:bg-${color}-800/50 transition-colors duration-200`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700/30">
            <h4 className="text-lg font-semibold text-gray-200 mb-4">{t('about.languages.title')}</h4>
            <div className="flex gap-4">
              {aboutData.languages.map((language, index) => (
                <span key={language.name} className={`px-4 py-2 rounded-lg font-medium border ${
                  index === 0 
                    ? "bg-red-900/40 text-red-200 border-red-700/30" 
                    : "bg-blue-900/40 text-blue-200 border-blue-700/30"
                }`}>
                  {language.flag} {language.name} {language.level}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 