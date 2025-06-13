"use client";
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  source: string;
  visitDate?: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
  className?: string;
}

export function ReviewsCarousel({ reviews, className = "" }: ReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);
  
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex >= reviews.length - 1 ? 0 : currentIndex + 1);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  // Render stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`w-3 h-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
        />
      );
    }
    return stars;
  };
  
  return (
    <div className={`relative w-full ${className}`}>
      {/* Carousel container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-md h-auto min-h-[280px] flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {review.name}
                    </h3>
                    <p className="text-xs text-gray-500">{review.date}</p>
                    {review.visitDate && (
                      <p className="text-xs text-gray-400">
                        Visite en {review.visitDate}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                                 <blockquote className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-6">
                   &ldquo;{review.text}&rdquo;
                 </blockquote>
                
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-600 font-medium">
                      Avis {review.source}
                    </span>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 -left-0 sm:-left-2 lg:-left-5 z-20 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white bg-opacity-95 rounded-full shadow-md cursor-pointer transform -translate-y-1/2 transition-all duration-300 hover:bg-opacity-100 hover:shadow-lg hover:scale-110"
        aria-label="Avis précédent"
      >
        <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute top-1/2 -right-0 sm:-right-2 lg:-right-5 z-20 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white bg-opacity-95 rounded-full shadow-md cursor-pointer transform -translate-y-1/2 transition-all duration-300 hover:bg-opacity-100 hover:shadow-lg hover:scale-110"
        aria-label="Avis suivant"
      >
        <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>
      
      {/* Pagination dots */}
      <div className="mt-4 flex justify-center gap-1">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white opacity-100 scale-125" 
                : "bg-white opacity-70"
            }`}
            aria-label={`Aller à l'avis ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// CSS pour line-clamp (à ajouter aux styles globaux)
export const carouselStyles = `
  .line-clamp-6 {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`; 