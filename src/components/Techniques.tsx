"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { AnimatedElement } from "./AnimatedElement";
import { ResponsiveSection } from "./ResponsiveSection";

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

  // Icônes pour les techniques (si les images ne sont pas disponibles)
  const fallbackIcons = [
    <svg
      key="1"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-primarygreen"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>,
    <svg
      key="2"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-primarygreen"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
      />
    </svg>,
    <svg
      key="3"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-primarygreen"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>,
    <svg
      key="4"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-primarygreen"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    </svg>,
    <svg
      key="5"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-primarygreen"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>,
    <svg
      key="6"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-primarygreen"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>,
  ];

  return (
    <ResponsiveSection id="techniques" bgColor="bg-gray-50" className="py-16">
      <div className="max-w-7xl mx-auto">
        <AnimatedElement
          options={{ type: "fade-in", duration: 800 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 relative inline-block">
            {techniquesData.title}
          </h2>
          {techniquesData.subtitle && (
            <p className="text-xl text-gray-600 italic mt-4">
              {techniquesData.subtitle}
            </p>
          )}
          {techniquesData.body && (
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              {techniquesData.body}
            </p>
          )}
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blocks.map((block, index) => (
            <AnimatedElement
              key={index}
              options={{
                type: "zoom-in",
                duration: 800,
                delay: 200 + index * 100,
              }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-primarygreen bg-opacity-10 p-3 rounded-lg mr-4">
                      {block.image && block.image.asset ? (
                        <Image
                          src={block.image.asset.url}
                          alt={block.title}
                          height={48}
                          width={48}
                          className="h-12 w-12 object-contain"
                        />
                      ) : (
                        fallbackIcons[index % fallbackIcons.length]
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {block.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {block.body}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </ResponsiveSection>
  );
}
