"use client";

import {
  useEffect,
  useState,
  ElementType,
  ReactNode,
  CSSProperties,
  ComponentPropsWithoutRef,
  useId,
} from "react";
import { AnimationOptions } from "@/utils/animations";

interface AnimatedElementBaseProps {
  children: ReactNode;
  options?: AnimationOptions;
  className?: string;
}

type AnimatedElementProps<T extends ElementType> = AnimatedElementBaseProps & {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export const AnimatedElement = <T extends ElementType = "div">({
  children,
  options = { type: "fade-in" },
  className = "",
  as,
  ...rest
}: AnimatedElementProps<T>) => {
  const Component = as || "div";
  const [isVisible, setIsVisible] = useState(false);
  const id = useId();
  const elementId = `animated-element-${id}`;
  const {
    type,
    duration = 800,
    delay = 0,
    threshold = 0.1,
    once = true,
  } = options;

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, once, elementId]);

  // Base styles with will-change for performance
  const animationStyles: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  // Reduce transform values to minimize layout shift
  switch (type) {
    case "slide-up":
      animationStyles.transform = isVisible
        ? "translate3d(0, 0, 0)"
        : "translate3d(0, 20px, 0)";
      break;
    case "slide-down":
      animationStyles.transform = isVisible
        ? "translate3d(0, 0, 0)"
        : "translate3d(0, -20px, 0)";
      break;
    case "slide-left":
      animationStyles.transform = isVisible
        ? "translate3d(0, 0, 0)"
        : "translate3d(20px, 0, 0)";
      break;
    case "slide-right":
      animationStyles.transform = isVisible
        ? "translate3d(0, 0, 0)"
        : "translate3d(-20px, 0, 0)";
      break;
    case "zoom-in":
      animationStyles.transform = isVisible 
        ? "translate3d(0, 0, 0) scale(1)" 
        : "translate3d(0, 0, 0) scale(0.98)";
      break;
    case "zoom-out":
      animationStyles.transform = isVisible 
        ? "translate3d(0, 0, 0) scale(1)" 
        : "translate3d(0, 0, 0) scale(1.02)";
      break;
    case "rotate":
      animationStyles.transform = isVisible 
        ? "translate3d(0, 0, 0) rotate(0deg)" 
        : "translate3d(0, 0, 0) rotate(2deg)";
      break;
    case "fade-in":
    default:
      animationStyles.transform = "translate3d(0, 0, 0)";
      break;
  }

  return (
    <Component
      id={elementId}
      className={className}
      style={animationStyles}
      {...rest}
    >
      {children}
    </Component>
  );
};

AnimatedElement.displayName = "AnimatedElement";
