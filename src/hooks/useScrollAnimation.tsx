"use client";

import { useEffect, useRef, useState } from "react";
import { AnimationOptions } from "@/utils/animations";

export function useScrollAnimation(
  options: AnimationOptions = { type: "fade-in" }
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.1, once = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si l'élément est visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Si l'animation ne doit être jouée qu'une fois, on déconnecte l'observer
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          // Si l'élément n'est plus visible et que l'animation peut être rejouée
          setIsVisible(false);
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold, // pourcentage de visibilité requis
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  return { ref, isVisible };
}

// Composant d'animation
interface AnimatedElementProps {
  children: React.ReactNode;
  options?: AnimationOptions;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedElement({
  children,
  options = { type: "fade-in" },
}: AnimatedElementProps) {
  const { isVisible } = useScrollAnimation(options);
  const { type, duration = 800, delay = 0 } = options;

  // Styles d'animation
  const animationStyles: React.CSSProperties = {
    opacity: 0,
    transition: `all ${duration}ms ease-out ${delay}ms`,
  };

  // Styles spécifiques selon le type d'animation
  if (isVisible) {
    animationStyles.opacity = 1;
  }

  switch (type) {
    case "fade-in":
      // Déjà géré par opacity
      break;
    case "slide-up":
      animationStyles.transform = isVisible
        ? "translateY(0)"
        : "translateY(40px)";
      break;
    case "slide-down":
      animationStyles.transform = isVisible
        ? "translateY(0)"
        : "translateY(-40px)";
      break;
    case "slide-left":
      animationStyles.transform = isVisible
        ? "translateX(0)"
        : "translateX(40px)";
      break;
    case "slide-right":
      animationStyles.transform = isVisible
        ? "translateX(0)"
        : "translateX(-40px)";
      break;
    case "zoom-in":
      animationStyles.transform = isVisible ? "scale(1)" : "scale(0.95)";
      break;
    case "zoom-out":
      animationStyles.transform = isVisible ? "scale(1)" : "scale(1.05)";
      break;
    case "rotate":
      animationStyles.transform = isVisible ? "rotate(0deg)" : "rotate(10deg)";
      break;
    default:
      break;
  }

  return <>{children}</>;
}
