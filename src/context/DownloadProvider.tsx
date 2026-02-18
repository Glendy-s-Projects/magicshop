"use client";

import html2canvas from "html2canvas-pro";
import { createContext } from "react";
import { AllProviderProps, DownloadContextType } from "../types";

export const DownloadContext = createContext<DownloadContextType>(null!);

export const DownloadProvider = ({ children }: AllProviderProps) => {
  // Función para pre-cargar las imágenes de fondo
  const preloadBackgroundImages = async (element: HTMLElement): Promise<void> => {
    const allElements = element.querySelectorAll('*');
    const imagePromises: Promise<void>[] = [];

    allElements.forEach((el) => {
      const computedStyle = window.getComputedStyle(el);
      const backgroundImage = computedStyle.backgroundImage;

      if (backgroundImage && backgroundImage !== 'none') {
        const urlMatch = backgroundImage.match(/url\(['"]?([^'"]+)['"]?\)/);
        if (urlMatch && urlMatch[1]) {
          const imageUrl = urlMatch[1];
          const promise = new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve(); // Resolver incluso si falla
            img.src = imageUrl;
          });
          imagePromises.push(promise);
        }
      }
    });

    await Promise.all(imagePromises);
  };

  const handleDownloadImage = async () => {
    const element = document.getElementById("print");

    if (!element) {
      return;
    }
    
    // Pre-cargar todas las imágenes de fondo
    await preloadBackgroundImages(element);
    
    // Espera adicional para asegurar el renderizado completo
    await new Promise(resolve => setTimeout(resolve, 300));

    const options = {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: null,
      removeContainer: true,
      imageTimeout: 15000, // Timeout de 15 segundos para cargar imágenes
      onclone: (clonedDoc: Document) => {
        const clonedElement = clonedDoc.getElementById("print");
        if (clonedElement) {
          // Forzar el estilo de fuente en el elemento clonado
          clonedElement.style.fontFamily = getComputedStyle(element).fontFamily;
          
          // Asegurar que las imágenes de fondo se mantengan en el clon
          const originalElements = element.querySelectorAll('*');
          const clonedElements = clonedElement.querySelectorAll('*');
          
          originalElements.forEach((original, index) => {
            const originalStyle = window.getComputedStyle(original);
            const cloned = clonedElements[index];
            if (cloned && originalStyle.backgroundImage && originalStyle.backgroundImage !== 'none') {
              (cloned as HTMLElement).style.backgroundImage = originalStyle.backgroundImage;
              (cloned as HTMLElement).style.backgroundSize = originalStyle.backgroundSize;
              (cloned as HTMLElement).style.backgroundPosition = originalStyle.backgroundPosition;
              (cloned as HTMLElement).style.backgroundRepeat = originalStyle.backgroundRepeat;
            }
          });
        }
      },
    };
    const canvas = await html2canvas(element, options);
    const data = canvas.toDataURL("image/png", 1.0);
    const link = document.createElement("a");
    link.href = data;
    link.download = "BTS+ARMY";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DownloadContext.Provider value={{ handleDownloadImage }}>
      {children}
    </DownloadContext.Provider>
  );
};
