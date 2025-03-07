// Types d'animations disponibles
export type AnimationType = 
  | 'fade-in'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'rotate'
  | 'bounce';

// Interface pour les options d'animation
export interface AnimationOptions {
  type: AnimationType;
  duration?: number; // en millisecondes
  delay?: number; // en millisecondes
  threshold?: number; // entre 0 et 1, pourcentage de visibilité requis pour déclencher l'animation
  once?: boolean; // si true, l'animation ne se joue qu'une fois
}

// Fonction pour générer les classes CSS d'animation
export function getAnimationClasses(options: AnimationOptions): string {
  const { type, duration = 800, delay = 0 } = options;
  
  // Classes de base pour toutes les animations
  let classes = 'transition-all';
  
  // Durée et délai
  classes += ` duration-${Math.floor(duration / 100) * 100}`;
  if (delay > 0) {
    classes += ` delay-${Math.floor(delay / 100) * 100}`;
  }
  
  // Classes spécifiques selon le type d'animation
  switch (type) {
    case 'fade-in':
      classes += ' opacity-0 animate-fade-in';
      break;
    case 'slide-up':
      classes += ' translate-y-8 opacity-0 animate-slide-up';
      break;
    case 'slide-down':
      classes += ' -translate-y-8 opacity-0 animate-slide-down';
      break;
    case 'slide-left':
      classes += ' translate-x-8 opacity-0 animate-slide-left';
      break;
    case 'slide-right':
      classes += ' -translate-x-8 opacity-0 animate-slide-right';
      break;
    case 'zoom-in':
      classes += ' scale-95 opacity-0 animate-zoom-in';
      break;
    case 'zoom-out':
      classes += ' scale-105 opacity-0 animate-zoom-out';
      break;
    case 'rotate':
      classes += ' rotate-12 opacity-0 animate-rotate';
      break;
    case 'bounce':
      classes += ' animate-bounce';
      break;
    default:
      break;
  }
  
  return classes;
} 