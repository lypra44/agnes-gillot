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

  const animationStyles: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: `all ${duration}ms ease-out ${delay}ms`,
  };

  switch (type) {
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
