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
    <section className="flex flex-col items-center justify-center bg-cover m-8">

      <div className="">
        <div>
          {techniquesData.title && (
            <h2 className="mt-3 font-bold leading-snug tracking-tight text-darkgreen ">
              {techniquesData.title}
            </h2>
          )}
          {techniquesData.subtitle && (
            <h3 className="mt-2 text-gray-700">
              {techniquesData.subtitle}
            </h3>
          )}
          {techniquesData.body && (
            <p className=" mt-4 text-gray-700">
              {techniquesData.body}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-10 ml:grid ml:grid-cols-3 mt-10">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="block object-left text-left shadow-lg rounded-md bg-white p-6 w-full border-2 border-solid border-darkgreen"
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

              <h2 className="mb-4 text-darkgreen">{block.title}</h2>
              <p className="">{block.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
