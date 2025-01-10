"use client";

import { Container } from "@/components/Container";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

// Définissons un type pour nos données
interface Bienfait {
  title: string;
  body: string;
  image: string;
  liste: string[];
}

interface SectionIntroData {
  title?: string;
  subtitle?: string;
  image: string;
  body?: string[];
  title1?: string;
  body1?: string;
  title2?: string;
  body2?: string;
  title3?: string;
  body3?: string;
  bienfaits?: Bienfait[]; // Nouveau champ pour les bienfaits
}

const IntroQuery = groq`*[_type == "massage"][0]{title, subtitle, image, body, title1, body1, title2, body2, title3, body3, bienfaits}`;

export function Massage() {
  const [MassageData, setSectionMassageData] =
    useState<SectionIntroData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(IntroQuery);
        console.log("Received data:", data);
        setSectionMassageData(data);
      } catch (error) {
        console.error("Error fetching massage data:", error);
      }
    };

    fetchData();
  }, []);

  if (!MassageData) {
    return null;
  }

  return (
    <Container>
      <div
        id="massage"
        className="flex flex-col md:flex-col-reverse lg:flex-row"
      >
        <Image
          src={urlFor(MassageData.image).url()}
          alt="image massage"
          width={700}
          height={700}
          className="w1/3 md:object-cover md:object-center"
        />

        <div
          className="flex flex-col text-left bg-lightgreen p-8 lg:w-11/12 xl:p-24"
          style={{ backgroundImage: "url(/img/pattern.svg)" }}
        >
          <div className="flex flex-col-reverse">
            {MassageData.title && (
              <h2 className=" font-bold leading-snug tracking-tight text-white uppercase">
                {MassageData.title}
              </h2>
            )}

            {MassageData.subtitle && (
              <h3 className=" mt-1 text-gray-800 italic text-lg leading-snug sm:text-xl">
                {MassageData.subtitle}
              </h3>
            )}
          </div>
          {MassageData.body && (
            <p className="responsive-p py-4 text-white">{MassageData.body}</p>
          )}

          {MassageData.title2 && (
            <h4 className=" responsive-h2 mt-4 mb-2 font-semibold leading-snug tracking-tight text-white">
              {MassageData.title2}
            </h4>
          )}

          {MassageData.body2 && (
            <p className="responsive-p py-1 mb-4 text-white">
              {MassageData.body2}
            </p>
          )}

          {MassageData.title2 && (
            <h4 className=" responsive-h2 mt-4 mb-2 font-semibold leading-snug tracking-tight text-white">
              {MassageData.title3}
            </h4>
          )}

          {MassageData.body2 && (
            <p className="responsive-p py-1 text-white">{MassageData.body3}</p>
          )}
        </div>
      </div>

      {/* Section des bienfaits */}
      <div className="my-10 px-12 lg:pb-4 text-sm xl:px-24 xl:py-12">
        {MassageData.bienfaits &&
          MassageData.bienfaits.map((bienfait, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-8"
            >
              <div className="flex-1">
                <h2 className="text-primarygreen font-bold">
                  {bienfait.title}
                </h2>
                <p className="italic mt-1">{bienfait.body}</p>
                <ul className="list-disc pl-4 mt-2 text-gray-800">
                  {bienfait.liste.map((item, i) => (
                    <li className="pt-4" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href=""
                  className="text-white bg-primarygreen mt-8 inline-block py-2 px-4 rounded"
                >
                  Demander un devis
                </a>
              </div>
              <div className="flex lg:flex-none lg:ml-8">
                <Image
                  src={urlFor(bienfait.image).url()}
                  alt="image massage"
                  width={1000}
                  height={1000}
                  className="md:w-2/3 lg:w-full lg:max-w-sm object-bottom"
                />
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
}
