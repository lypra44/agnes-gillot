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
  image: any;
  title2: string;
  bulletPoints: { title: string; liste: string[]; backgroundImage: string; image: string }[];
}

export const SectionPourquoi = () => {
  const [pourquoiSectionData, setPourquoiSectionData] =
    useState<PourquoiSectionData>({
      title: "",
      subtitle: "",
      body: "",
      image: null,
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
    <Container className="p-8 ">
      <div className=" flex items-center justify-center flex-col-reverse h-fit mb-8 lg:flex-row">
        <Image
          src={urlFor(pourquoiSectionData.image).url()}
          alt={pourquoiSectionData.title}
          width={300}
          height={300}
          className=" object-contain lg:w-1/3 md:w-1/2 my-4"
        />

        <div className="">
          {pourquoiSectionData.title && (
            <p className="text-primarygreen italic text-lg leading-snug sm:text-xl">{pourquoiSectionData.title}</p>
          )}
          {pourquoiSectionData.subtitle && (
            <h2 className="font-bold text-gray-700">
              {pourquoiSectionData.subtitle}
            </h2>
          )}
          {pourquoiSectionData.body && (
            <p className="mt-6 text-base text-left leading-normal text-gray-700 dark:text-gray-300">
              {pourquoiSectionData.body}
            </p>
          )}
        </div>
      </div>



      <div className="flex items-center justify-center flex-col gap-12 mt-6">

        <h2 className="text-primarygreen text-center">{pourquoiSectionData.title2}</h2>

        {pourquoiSectionData.bulletPoints.map((point, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col bg-slate-100 rounded-sm h-1/4 w-full p-6 bg-contain bg-no-repeat bg-right-bottom md:w-3/5"
            style={{ backgroundImage: `url(/img/plantes-box-${index}.svg)` }}
          >
            {point.title && <h4 className="font-bold mb-4 text-darkgreen">{point.title}</h4>}
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
