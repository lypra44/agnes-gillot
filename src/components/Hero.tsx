'use client'

import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import { useEffect, useState } from 'react'

import { groq } from 'next-sanity'
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

const heroQuery = groq`*[_type == "hero"][0]{title, subtitle, image}`

interface HeroData {
  title: string;
  subtitle: string;
  image: any; // or use more specific Sanity image type if available
}

export function Hero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null)

  useEffect(() => {
    client.fetch(heroQuery).then((data) => {
      setHeroData(data) // Met à jour l'état avec les données récupérées
    })
  }, [])

  console.log('heroData:', heroData) // Pour déboguer

  // Modifiez la vérification
  if (!heroData?.image) {
    return null;
  }

  return (
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            {heroData?.title} 
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            {heroData?.subtitle} 
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Mes techniques
              </a>  

              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Me contacter
              </a>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={urlFor(heroData.image).url()}
              alt="Hero Illustration"
              width={500}
              height={300}
            />
          </div>
        </div>
      </Container>
      
  );
}



