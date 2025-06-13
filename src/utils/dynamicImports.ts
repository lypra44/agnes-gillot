import dynamic from 'next/dynamic';

// Lazy load de ReCAPTCHA
export const ReCAPTCHAComponent = dynamic(
  () => import('react-google-recaptcha'),
  {
    ssr: false,
    loading: () => null
  }
);

// Lazy load des modules Swiper
export const loadSwiperModules = async () => {
  const { Pagination, Navigation, Autoplay } = await import('swiper/modules');
  return { Pagination, Navigation, Autoplay };
};

// Preload des composants critiques
export const preloadCriticalComponents = () => {
  // Preload contact form components
  import('react-hook-form');
  
  // Preload hero image
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = '/img/logo.svg';
    document.head.appendChild(link);
  }
}; 