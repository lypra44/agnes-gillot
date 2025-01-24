"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { useEffect, useState } from "react";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { scrollToSection } from "@/utils/scrollToSection";

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
    <Container className="flex flex-col items-center justify-center w-11/12 h-[calc(100vh-90px)] lg:flex-row">
      <div className="flex items-center justify-center w-5/6 lg:w-1/2 lg:mt-0">
        <div className="text-center sm:text-left">
          <h1
            className=" text-gray-800 sm:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white slide-up"
            style={{ animationDelay: "0s" }}
          >
            {heroData?.titlepart1} <br />{" "}
            <span className="text-primarygreen font-semibold">
              {heroData?.titlepart2}{" "}
            </span>
          </h1>
          <p
            className="py-2 text-base leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {heroData?.subtitle}
          </p>

          <div className="flex items-center w-full mt-6 text-base flex-col gap-4 sm:space-x-4 sm:space-y-0 sm:flex-row sm:w-2/3 md:justify-left">
            <a
              href="#techniques"
              className="px-4 py-2.5 font-medium text-center text-base text-white bg-lightgreen rounded-md transition-all duration-300 ease-in-out hover:translate-y-[-1px] hover:bg-primarygreen"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("techniques");
              }}
              style={{ animationDelay: "0.4s" }}
            >
              Mes techniques
            </a>

            <a
              href="#contact"
              className="px-4 py-2.5 font-medium text-base text-center text-white bg-lightgreen rounded-md transition-all duration-300 ease-in-out hover:translate-y-[-1px] hover:bg-primarygreen"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              style={{ animationDelay: "0.6s" }}
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
      <div className="flex lg:w-1/2 ">
        <Image
          src={urlFor(heroData.image).url()}
          alt="Hero Illustration"
          width={800}
          height={800}
          className="object-contain opacity-0 opacity"
          style={{ animationDelay: "0.8s" }}
        />
      </div>
    </Container>
  );
}
