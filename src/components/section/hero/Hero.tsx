"use client";
import React from "react";
import HeroContent from "./HeroContent";
import HeroCode from "./HeroCode";
import LightEffects from "@/components/global/lighteffects/LightEffects";
import { useParallax } from "@/hooks/useParallax";

const Hero = () => {
  const scrollY = useParallax();

  return (
    <section id="hero" className="bg-gradient-to-b from-blue-900 via-blue-950 to-black min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <LightEffects variant="hero" colorScheme="mixed" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <HeroContent />
          <HeroCode />
        </div>
      </div>
    </section>
  );
};

export default Hero; 