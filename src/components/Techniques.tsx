"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface TechniquesData {
  title: string;
  subtitle: string;
  body: string;
}

export default function Techniques() {
  const [techniquesData, setTechniquesData] = useState<TechniquesData>({
    title: "",
    subtitle: "",
    body: "",
  });

  const [blocks, setBlocks] = useState<
    { image: { asset: { url: string } }; title: string; body: string }[]
  >([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "techniques"]{
        title,
        subtitle,
        body,
        blocks[]{
          image {
            asset -> {
              url
            }
          },
          title,
          body
        }
      }`
      )
      .then((data) => {
        if (data && data.length > 0) {
          const fetchedData = data[0];
          setTechniquesData({
            title: fetchedData.title || "",
            subtitle: fetchedData.subtitle || "",
            body: fetchedData.body || "",
          });
          setBlocks(fetchedData.blocks || []);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center bg-cover m-8 mb-16 xl:px-24 xl:py-6">
      <div id="techniques" className="">
        <div>
          <div className="flex flex-col-reverse w-full">
            {techniquesData.title && (
              <h2 className="font-bold leading-snug tracking-tight text-darkgreen md:uppercase">
                {techniquesData.title}
              </h2>
            )}
            {techniquesData.subtitle && (
              <h3 className="mt-1 text-gray-700 italic text-lg leading-snug">
                {techniquesData.subtitle}
              </h3>
            )}
          </div>

          {techniquesData.body && (
            <p className=" mt-4 text-gray-700 lg:w-11/12">
              {techniquesData.body}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 mt-10 lg:w-11/12 xl:w-2/3 xl:gap-16">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="block object-left text-left shadow-md rounded-md bg-white p-6 w-full border border-solid border-darkgreen"
            >
              {block.image && block.image.asset && (
                <Image
                  src={block.image.asset.url}
                  alt={block.title}
                  height={200}
                  width={100}
                  className="h-20 mb-4"
                />
              )}

              <h3 className="mb-4 text-darkgreen font-bold">{block.title}</h3>
              <p className="text-grey-800 leading-5 text-sm">{block.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
