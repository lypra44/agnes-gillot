"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { AnimatedElement } from "./AnimatedElement";

interface CitationData {
  subtitle: string;
  body: string;
}

export default function Citation() {
  const [citationData, setCitationData] = useState<CitationData>({
    subtitle: "",
    body: "",
  });

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
      })
      .catch(console.error);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center text-center bg-lightgreen bg-cover py-16 px-6 text-white md:py-24 md:my-12 md:rounded-xl w-11/12 xl:py-28 relative overflow-hidden"
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
              className="absolute -top-10 -left-20 w-16 h-16 text-white opacity-20"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="mt-4 text-xl leading-relaxed lg:text-2xl xl:text-3xl font-light italic">
              {citationData.body}
            </p>
            <svg
              className="absolute -bottom-10 -right-20 w-16 h-16 text-white opacity-20 transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        )}

        {citationData.subtitle && (
          <p className="mt-8 text-xl lg:text-2xl font-semibold">
            — {citationData.subtitle}
          </p>
        )}
      </AnimatedElement>
    </section>
  );
}
