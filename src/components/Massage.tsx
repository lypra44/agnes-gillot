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
  title1?: string;
  body1?: string;
  title2?: string;
  body2?: string;
  title3?: string;
  body3?: string;
}

const IntroQuery = groq`*[_type == "massage"][0]{title, subtitle, image, body}`;

export function Massage() {
  const [MassageData, setSectionMassageData] = useState<SectionIntroData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(IntroQuery);
        console.log("Received data:", data);
        setSectionMassageData(data);
      } catch (error) {
        console.error("Error fetching massage data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!MassageData) {
    return null;
  }

  return (
    <Container className="flex flex-col lg:flex-row">



    <Image
        src={urlFor(MassageData.image).url()}
        alt="image massage"
        width={1000}
        height={1000}
        className="w1/3"
      />

      <div
        className="flex flex-col text-left bg-lightgreen p-8"
        style={{ backgroundImage: "url(/img/pattern.svg)" }}
      >
        {MassageData.subtitle && (
          <p className=" text-white italic text-lg leading-snug sm:text-xl">
            {MassageData.subtitle}
          </p>
        )}

        {MassageData.title && (
          <h2 className=" responsive-h2 font-bold leading-snug tracking-tight text-gray-800">
            {MassageData.title}
          </h2>
        )}

        {MassageData.body && (
          <div className="responsive-p py-4 text-white">
            {MassageData.body}
          </div>
        )}

{MassageData.title1 && (
          <h2 className=" responsive-h2 font-bold leading-snug tracking-tight text-gray-800">
            {MassageData.title1}
          </h2>
        )}

        {MassageData.body1 && (
          <div className="responsive-p py-4 text-white">
            {MassageData.body1}
          </div>
        )}


{MassageData.title2 && (
          <h2 className=" responsive-h2 font-bold leading-snug tracking-tight text-gray-800">
            {MassageData.title2}
          </h2>
        )}

        {MassageData.body2 && (
          <div className="responsive-p py-4 text-white">
            {MassageData.body2}
          </div>
        )}
      </div>

    </Container>
  );
}
