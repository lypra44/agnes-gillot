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
    <ResponsiveSection id="techniques">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          options={{ type: "fade-in", duration: 800 }}
          className="text-left mb-12 max-w-3xl"
        >
          <h2 className="font-bold text-primarygreen mb-2 relative inline-block">
            {techniquesData.title}
          </h2>
          {techniquesData.subtitle && (
            <p className="text-xl text-gray-600 italic">
              {techniquesData.subtitle}
            </p>
          )}
          {techniquesData.body && (
            <p className="mt-6 text-gray-600">{techniquesData.body}</p>
          )}
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {blocks.map((block, index) => (
            <AnimatedElement
              key={index}
              options={{
                type: "zoom-in",
                duration: 800,
                delay: 200 + index * 100,
              }}
            >
              <div
                className="group rounded-xl overflow-hidden h-full transition-all duration-500 
                border border-zinc-400 border-opacity-50 bg-white hover:border-primarygreen hover:shadow-xl 
                hover:shadow-green-100/40 hover:translate-y-[-8px] flex flex-col"
              >
                {/* Header avec icône */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 relative border-b border-green-100">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primarygreen opacity-5 rounded-bl-full"></div>
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-white shadow-md border border-green-100 mr-4 group-hover:bg-primarygreen group-hover:border-primarygreen transition-all duration-300">
                      {block.image && block.image.asset ? (
                        <Image
                          src={block.image.asset.url}
                          alt={block.title}
                          height={48}
                          width={48}
                          className="h-10 w-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                        />
                      ) : (
                        <div className="text-primarygreen group-hover:text-white transition-all duration-300">
                          {fallbackIcons[index % fallbackIcons.length]}
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-primarygreen transition-all duration-300">
                      {block.title}
                    </h3>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex-grow bg-white">
                  <p className="text-gray-600 leading-relaxed">{block.body}</p>
                </div>

                {/* Footer avec indicateur visuel */}
                <div className="px-6 py-4 flex justify-end">
                  <div className="w-12 h-1 bg-gray-200 rounded-full group-hover:bg-primarygreen transition-all duration-300"></div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </ResponsiveSection>
  );
}
