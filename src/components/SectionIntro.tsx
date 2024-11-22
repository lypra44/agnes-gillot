'use client'

import { Container } from "@/components/Container";
import { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

// Définissons un type pour nos données
interface SectionIntroData {
  title?: string;
  subtitle?: string;
  image?: any;
  body?: any[];
}

const sectionIntroQuery = groq`*[_type == "sectionIntro"][0]{title, subtitle, image, body}`

export function SectionIntro() {
  const [sectionIntroData, setSectionIntroData] = useState<SectionIntroData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(sectionIntroQuery)
        console.log('Received data:', data)
        setSectionIntroData(data)
      } catch (error) {
        console.error('Error fetching section intro data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!sectionIntroData) {
    return null
  }

  return (
    <Container className="flex w-full flex-col mt-4 items-center justify-center text-center">
      {sectionIntroData.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {sectionIntroData.title}
        </h2>
      )}
      
      {sectionIntroData.subtitle && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {sectionIntroData.subtitle}
        </p>
      )}
       
       
        {sectionIntroData.body && (
        
          <div className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
           {sectionIntroData.body}
          </div>
        )}
    



      <div className="w-full">
        {sectionIntroData.image && (
          <img className="w-full h-auto"
            src={urlFor(sectionIntroData.image).url()}
            alt="Hero Illustration"
            width={500}
            height={300}
          />
        )}
      </div>
    </Container>
  );
}



