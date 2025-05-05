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
              className="px-6 sm:px-8 py-3 sm:py-3.5 font-medium text-center text-white bg-lightgreen rounded-lg shadow-md transition-all duration-300 hover:bg-primarygreen hover:shadow-lg hover:translate-y-[-2px] text-sm sm:text-base lg:text-lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("techniques");
              }}
            >
              Mes techniques
            </a>

            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-3.5 font-medium text-center text-white bg-lightgreen rounded-lg shadow-md transition-all duration-300 hover:bg-primarygreen hover:shadow-lg hover:translate-y-[-2px] text-sm sm:text-base lg:text-lg"
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
        <div className="">
          <Image
            src={urlFor(heroData.image).url()}
            alt="Hero Illustration"
            width={500}
            height={500}
            className="object-contain object-center w-full h-auto"
          />
        </div>
      </AnimatedElement>
    </Container>
  );
}
