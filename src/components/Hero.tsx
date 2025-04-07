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

export function Hero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    client.fetch(heroQuery).then((data) => {
      setHeroData(data); // Met à jour l'état avec les données récupérées
    });
  }, []);

  // Modifiez la vérification
  if (!heroData?.image) {
    return null;
  }

  return (
    <Container className="flex flex-col items-center justify-center w-full h-[calc(100vh-90px)] lg:flex-row">
      <AnimatedElement
        options={{ type: "slide-right", duration: 800 }}
        className="flex items-center justify-center w-full lg:w-1/2"
      >
        <div className="text-center sm:text-left max-w-xl">
          <h1 className="text-gray-800 sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8">
            {heroData?.titlepart1}{" "}
            <span className="text-primarygreen">{heroData?.titlepart2}</span>
          </h1>

          <p className="text-base leading-relaxed text-gray-600 lg:text-lg xl:text-xl mb-8">
            {heroData?.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#techniques"
              className="px-8 py-3.5 font-medium text-center text-white bg-lightgreen rounded-lg shadow-md transition-all duration-300 hover:bg-primarygreen hover:shadow-lg hover:translate-y-[-2px] text-base sm:text-lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("techniques");
              }}
            >
              Mes techniques
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 font-medium text-center text-white bg-lightgreen rounded-lg shadow-md transition-all duration-300 hover:bg-primarygreen hover:shadow-lg hover:translate-y-[-2px] text-base sm:text-lg"
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
        className="flex lg:w-1/2 mt-8 lg:mt-0"
      >
        <div className="relative w-full h-[500px] lg:h-[600px]">
          <Image
            src={urlFor(heroData.image).url()}
            alt="Hero Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </AnimatedElement>
    </Container>
  );
}
