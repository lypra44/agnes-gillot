"use client";

import { Container } from "@/components/Container";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// Définissons un type pour nos données
interface SectionIntroData {
  title?: string;
  subtitle?: string;
  image?: any;
  body?: any[];
}

const IntroQuery = groq`*[_type == "intro"][0]{title, subtitle, image, body}`;

export function SectionIntro() {
  const [IntroData, setSectionIntroData] = useState<SectionIntroData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(IntroQuery);
        console.log("Received data:", data);
        setSectionIntroData(data);
      } catch (error) {
        console.error("Error fetching intro data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!IntroData) {
    return null;
  }

  return (
    <Container className="flex flex-col w-screen md:flex-row">
      <div
        className="flex flex-col text-left bg-lightgreen p-8 md:w-2/3"
        style={{ backgroundImage: "url(/img/pattern.svg)" }}
      >
        {IntroData.subtitle && (
          <p className=" text-white italic text-lg leading-snug sm:text-xl">
            {IntroData.subtitle}
          </p>
        )}

        {IntroData.title && (
          <h2 className=" font-bold leading-snug tracking-tight text-gray-800">
            {IntroData.title}
          </h2>
        )}

        {IntroData.body && (
          <div className="py-4 text-white">{IntroData.body}</div>
        )}

        <a
          href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
          target="_blank"
          rel="noopener"
          className=" text-lightgreen bg-white mt-6"
        >
          Découvrir mes techniques
        </a>
      </div>

      <div
  className="h-96 md:w-1/3 md:h-auto bg-cover bg-center"
  style={{
    backgroundImage: `url(${urlFor(IntroData.image).url()})`,
  }}
>
</div>
    </Container>
  );
}
