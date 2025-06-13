"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { AnimatedElement } from "./AnimatedElement";

interface CitationData {
  subtitle: string;
  body: string;
}

// Skeleton loader component
const CitationSkeleton = () => (
  <section
    className="w-screen flex flex-col items-center justify-center text-center bg-lightgreen bg-cover py-16 px-6 text-white md:py-24 md:my-12 md:rounded-xl md:w-11/12 xl:py-28 relative overflow-hidden min-h-[300px]"
    style={{
      backgroundImage: "url(/img/pattern.svg)",
      backgroundBlendMode: "soft-light",
    }}
  >
    <div className="max-w-4xl mx-auto relative z-10 w-full">
      <div className="relative">
        {/* Quote skeleton */}
        <div className="mt-4 space-y-4">
          <div className="h-6 lg:h-8 bg-white/20 rounded animate-pulse"></div>
          <div className="h-6 lg:h-8 bg-white/20 rounded animate-pulse"></div>
          <div className="h-6 lg:h-8 bg-white/20 rounded animate-pulse w-3/4 mx-auto"></div>
        </div>
      </div>

      {/* Author skeleton */}
      <div className="mt-8">
        <div className="h-6 lg:h-8 bg-white/20 rounded animate-pulse w-1/2 mx-auto"></div>
      </div>
    </div>
  </section>
);

export default function Citation() {
  const [citationData, setCitationData] = useState<CitationData>({
    subtitle: "",
    body: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "citation"][0]{
        subtitle,
        body
      }`
      )
      .then((data) => {
        if (data) {
          setCitationData(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement de la citation:", error);
        setIsLoading(false);
      });
  }, []);

  // Show skeleton while loading
  if (isLoading) {
    return <CitationSkeleton />;
  }

  return (
    <section
      className="w-screen flex flex-col items-center justify-center text-center bg-lightgreen bg-cover py-16 px-6 text-white md:py-24 md:my-12 md:rounded-xl md:w-11/12 xl:py-28 relative overflow-hidden min-h-[300px]"
      style={{
        backgroundImage: "url(/img/pattern.svg)",
        backgroundBlendMode: "soft-light",
      }}
    >
      <AnimatedElement
        options={{ type: "fade-in", duration: 800 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {citationData.body && (
          <div className="relative">
            <svg
              className="absolute -top-10  left-0 w-16 h-16 text-white opacity-20"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="mt-4 text-xl leading-relaxed lg:text-2xl xl:text-3xl font-light italic min-h-[2em]">
              {citationData.body}
            </p>
            <svg
              className="absolute -bottom-10 right-0 w-16 h-16 text-white opacity-20 transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        )}

        {citationData.subtitle && (
          <p className="mt-8 text-xl lg:text-2xl font-semibold min-h-[1.5em]">
            — {citationData.subtitle}
          </p>
        )}
      </AnimatedElement>
    </section>
  );
}
