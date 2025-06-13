import { useState, useEffect } from 'react';

interface UseImagePreloadOptions {
  onLoad?: () => void;
  onError?: () => void;
}

export const useImagePreload = (src: string, options?: UseImagePreloadOptions) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) {
      setHasError(true);
      return;
    }

    const img = new Image();
    
    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
      options?.onLoad?.();
    };
    
    img.onerror = () => {
      setHasError(true);
      setIsLoaded(false);
      options?.onError?.();
    };
    
    img.src = src;
    
    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, options]);

  return { isLoaded, hasError };
};

export const useMultipleImagePreload = (srcs: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!srcs.length) return;

    const promises = srcs.map((src) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    });

    const handleResults = async () => {
      const results = await Promise.allSettled(promises);
      
      const loaded = new Set<string>();
      const errors = new Set<string>();
      
      results.forEach((result, index) => {
        const src = srcs[index];
        if (result.status === 'fulfilled') {
          loaded.add(src);
        } else {
          errors.add(src);
        }
      });
      
      setLoadedImages(loaded);
      setErrorImages(errors);
    };

    handleResults();
  }, [srcs]);

  const allLoaded = srcs.length > 0 && loadedImages.size === srcs.length;
  const hasErrors = errorImages.size > 0;

  return { 
    loadedImages, 
    errorImages, 
    allLoaded, 
    hasErrors,
    isImageLoaded: (src: string) => loadedImages.has(src),
    hasImageError: (src: string) => errorImages.has(src)
  };
}; 