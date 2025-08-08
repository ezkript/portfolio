"use client";
import React from "react";
import { LightEffectsProps as Props } from "./LightEffects.types";

const LightEffects = (props: Props) => {
  const { variant, colorScheme } = props;

  const getColors = () => {
    switch (colorScheme) {
      case "blue":
        return {
          primary: "bg-blue-500/15",
          secondary: "bg-blue-400/10",
          accent: "bg-blue-300/20"
        };
      case "purple":
        return {
          primary: "bg-purple-500/15",
          secondary: "bg-purple-400/10",
          accent: "bg-purple-300/20"
        };
      case "cyan":
        return {
          primary: "bg-cyan-500/15",
          secondary: "bg-cyan-400/10",
          accent: "bg-cyan-300/20"
        };
      default:
        return {
          primary: "bg-blue-500/10",
          secondary: "bg-purple-400/8",
          accent: "bg-cyan-400/12"
        };
    }
  };

  const colors = getColors();

  if (variant === "hero") {
    return (
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${colors.primary} rounded-full blur-3xl animate-slow-pulse`}></div>
        <div className={`absolute top-1/3 right-1/3 w-80 h-80 ${colors.secondary} rounded-full blur-3xl animate-slow-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-72 h-72 ${colors.accent} rounded-full blur-3xl animate-slow-pulse`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute top-20 right-20 w-32 h-32 ${colors.accent} rounded-full blur-2xl animate-slow-bounce`} style={{ animationDelay: '0.5s' }}></div>
        <div className={`absolute bottom-32 right-1/4 w-24 h-24 ${colors.secondary} rounded-full blur-2xl animate-slow-bounce`} style={{ animationDelay: '1.5s' }}></div>
        <div className={`absolute top-1/2 left-20 w-28 h-28 ${colors.primary} rounded-full blur-2xl animate-slow-bounce`} style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-blue-300/10 via-transparent to-transparent rotate-12 blur-sm"></div>
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-purple-300/8 via-transparent to-transparent rotate-6 blur-sm"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-cyan-300/8 via-transparent to-transparent -rotate-6 blur-sm"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute top-20 left-10 w-64 h-64 ${colors.primary} rounded-full blur-3xl animate-slow-pulse`}></div>
      <div className={`absolute bottom-20 right-10 w-48 h-48 ${colors.secondary} rounded-full blur-3xl animate-slow-pulse`} style={{ animationDelay: '1.5s' }}></div>
      <div className={`absolute top-32 right-1/4 w-20 h-20 ${colors.accent} rounded-full blur-2xl animate-slow-bounce`} style={{ animationDelay: '0.8s' }}></div>
      <div className={`absolute bottom-32 left-1/4 w-16 h-16 ${colors.primary} rounded-full blur-2xl animate-slow-bounce`} style={{ animationDelay: '2s' }}></div>
      <div className={`absolute top-16 left-1/3 w-3 h-3 ${colors.accent.replace('/15', '/40').replace('/10', '/40').replace('/8', '/40').replace('/12', '/40')} rounded-full animate-slow-pulse blur-sm`}></div>
      <div className={`absolute bottom-16 right-1/3 w-2 h-2 ${colors.secondary.replace('/15', '/40').replace('/10', '/40').replace('/8', '/40').replace('/12', '/40')} rounded-full animate-slow-pulse blur-sm`} style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default LightEffects;