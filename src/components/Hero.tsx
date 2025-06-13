"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { scrollToSection } from "@/utils/scrollToSection";
import { AnimatedElement } from "./AnimatedElement";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

const heroQuery = groq`*[_type == "hero"][0]{titlepart1,titlepart2, subtitle, image}`;

interface HeroData {
  titlepart1: string;
  titlepart2: string;
  subtitle: string;
  image: string;
}

// Skeleton loader component
const HeroSkeleton = () => (
  <Container className="h-[calc(100vh-70px)] py-6 lg:px-10 flex flex-col lg:flex-row items-center justify-center">
    <div className="flex items-center justify-center w-full lg:w-1/2 px-4 sm:px-6">
      <div className="text-center sm:text-left max-w-xl mt-4 lg:mt-0 w-full">
        {/* Title skeleton */}
        <div className="mb-4 sm:mb-8">
          <div className="h-8 sm:h-10 lg:h-12 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-8 sm:h-10 lg:h-12 bg-gray-200 rounded animate-pulse w-3/4"></div>
        </div>

        {/* Subtitle skeleton */}
        <div className="mb-6 sm:mb-8">
          <div className="h-4 lg:h-5 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 lg:h-5 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 lg:h-5 bg-gray-200 rounded animate-pulse w-2/3"></div>
        </div>

        {/* Buttons skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="h-12 sm:h-14 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-12 sm:h-14 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>

    <div className="flex lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 px-4 sm:px-6">
      <div className="w-full aspect-square max-w-[500px]">
        <div className="w-full h-full bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  </Container>
);

export function Hero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client.fetch(heroQuery)
      .then((data) => {
        setHeroData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données hero:", error);
        setIsLoading(false);
      });
  }, []);

  // Show skeleton while loading
  if (isLoading || !heroData?.image) {
    return <HeroSkeleton />;
  }

  return (
    <Container className="h-[calc(100vh-70px)] py-6 lg:px-10 flex flex-col lg:flex-row items-center justify-center">
      <AnimatedElement
        options={{ type: "slide-right", duration: 800 }}
        className="flex items-center justify-center w-full lg:w-1/2 px-4 sm:px-6"
      >
        <div className="text-center sm:text-left max-w-xl mt-4 lg:mt-0">
          <h1 className="text-gray-800 font-bold mb-4 sm:mb-8">
            {heroData?.titlepart1} <br />
            <span className="text-primarygreen">
              {heroData?.titlepart2}
            </span>{" "}
          </h1>

          <p className="text-base leading-relaxed text-gray-600 lg:text-lg xl:text-xl mb-6 sm:mb-8">
            {heroData?.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#techniques"
              className="px-6 sm:px-8 py-3 sm:py-3.5 font-medium text-center text-white bg-greenbutton rounded-lg shadow-md transition-all duration-300 hover:bg-darkgreen hover:shadow-lg hover:translate-y-[-2px] text-sm sm:text-base lg:text-lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("techniques");
              }}
            >
              Mes techniques
            </a>

            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-3.5 font-medium text-center text-white bg-greenbutton rounded-lg shadow-md transition-all duration-300 hover:bg-darkgreen hover:shadow-lg hover:translate-y-[-2px] text-sm sm:text-base lg:text-lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Me contacter
            </a>
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement
        options={{ type: "slide-left", duration: 800, delay: 200 }}
        className="flex lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 px-4 sm:px-6"
      >
        <div className="w-full max-w-[600px] lg:max-w-[650px] xl:max-w-[700px] mx-auto">
          <Image
            src={urlFor(heroData.image).url()}
            alt="Hero Illustration"
            width={700}
            height={700}
            className="object-contain object-center w-screen h-auto"
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
          />
        </div>
      </AnimatedElement>
    </Container>
  );
}
