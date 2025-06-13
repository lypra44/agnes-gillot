"use client";

import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import React from "react";
import { Container } from "@/components/Container";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface PourquoiSectionData {
  title: string;
  subtitle: string;
  body: string;
  image: string;
  title2: string;
  bulletPoints: {
    title: string;
    liste: string[];
    backgroundImage: string;
    image: string;
  }[];
}

export const SectionPourquoi = () => {
  const [pourquoiSectionData, setPourquoiSectionData] =
    useState<PourquoiSectionData>({
      title: "",
      subtitle: "",
      body: "",
      image: "",
      title2: "",
      bulletPoints: [],
    });

  useEffect(() => {
    const fetchData = async () => {
      const query = groq`*[_type == "pourquoiSection"][0]{
                title,
                subtitle,
                title2,
                body,
                image,
                bulletPoints
            }`;
      const data = await client.fetch(query);
      setPourquoiSectionData(data);
    };

    fetchData();
  }, []);

  if (!pourquoiSectionData?.image) {
    return null;
  }

  return (
    <Container className=" p-8 lg:p-0 lg:w-11/12 lg:pb-10 md:pb-14 w-full!">
      <div
        id="pourquoi"
        className="w-full flex items-center justify-center flex-col-reverse h-fit mb-8 lg:flex-row-reverse xl:px-24 xl:py-10 max-w-7xl mx-auto"
      >
        <Image
          src={urlFor(pourquoiSectionData.image).url()}
          alt={pourquoiSectionData.title}
          width={800}
          height={800}
          className="object-contain w-full md:w-2/5 my-4 xl:mx-10 max-w-md 2xl:max-w-lg"
        />

        <div className="lg:w-2/3">
          {pourquoiSectionData.title && (
            <p className="text-primarygreen italic text-lg leading-snug sm:text-xl">
              {pourquoiSectionData.title}
            </p>
          )}
          {pourquoiSectionData.subtitle && (
            <h2 className="font-bold text-gray-700">
              {pourquoiSectionData.subtitle}
            </h2>
          )}
          {pourquoiSectionData.body && (
            <p className="mt-6 text-left leading-normal text-gray-700">
              {pourquoiSectionData.body}
            </p>
          )}
        </div>
      </div>
      <h2 className="text-primarygreen text-center font-bold">
        {pourquoiSectionData.title2}
      </h2>

      <div className="flex items-center justify-center flex-col gap-12 mt-12 lg:grid lg:grid-cols-3 max-w-7xl mx-auto">
        {pourquoiSectionData.bulletPoints.map((point, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col bg-slate-100 rounded-sm h-1/4 w-full p-6 bg-contain bg-no-repeat bg-right-bottom md:w-3/5 lg:w-full lg:h-full lg:justify-start"
            style={{ backgroundImage: `url(/img/plantes-box-${index}.svg)` }}
          >
            {point.title && (
              <h3 className="font-bold mb-4 text-darkgreen">{point.title}</h3>
            )}
            <ul className="pl-6">
              {point.liste.map((item, itemIndex) => (
                <li
                  className="text-sm leading-6 list-disc text-gray-700"
                  key={itemIndex}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};
