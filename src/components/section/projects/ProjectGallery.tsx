"use client";
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ProjectGalleryProps as Props } from "./Projects.types";

export const ProjectGallery= (props: Props) => {
  const { isOpen, onClose, images, projectTitle } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
          break;
        case "ArrowRight":
          setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full h-full flex flex-col">
        <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
          <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg truncate max-w-[200px] sm:max-w-[300px] md:max-w-none">
            {projectTitle} - Galería
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-2 sm:p-4 relative">
          <div className="relative max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[60vh] sm:max-h-[70vh] w-full h-full flex items-center justify-center">
            <Image
              src={images[currentImageIndex]}
              alt={`${projectTitle} - Imagen ${currentImageIndex + 1}`}
              width={1200}
              height={800}
              className="transition-all duration-300"
              style={{
                maxWidth: "100%",
                maxHeight: "60vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 hover:bg-gray-800/80 text-white rounded-full transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 hover:bg-gray-800/80 text-white rounded-full transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
        {images.length > 1 ? (
          <div className="p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex
                      ? "border-blue-500 scale-110"
                      : "border-gray-600 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        ): null}
        {images.length > 1 ? (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
            <span className="text-white text-sm">
              {currentImageIndex + 1} de {images.length}
            </span>
          </div>
        ): null}
      </div>
    </div>
  );
};
