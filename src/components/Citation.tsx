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
      className="flex flex-col items-center justify-center text-center bg-darkgreen bg-cover py-16 px-6 text-white md:py-24 md:my-12 md:rounded-xl w-11/12 xl:py-28 relative overflow-hidden"
      style={{ 
        backgroundImage: "url(/img/pattern.svg)",
        backgroundBlendMode: "soft-light"
      }}
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-24 h-24 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path fillRule="evenodd" d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M14 6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6zM4.75 9.25A.75.75 0 015.5 8.5h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm0 2.25a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm0 2.25a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zM18 4a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2V6a2 2 0 012-2h2z" clipRule="evenodd" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path fillRule="evenodd" d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M14 6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6zM4.75 9.25A.75.75 0 015.5 8.5h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm0 2.25a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm0 2.25a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zM18 4a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2V6a2 2 0 012-2h2z" clipRule="evenodd" />
        </svg>
      </div>

      <AnimatedElement options={{ type: 'fade-in', duration: 800 }} className="max-w-4xl mx-auto relative z-10">
        {citationData.body && (
          <div className="relative">
            <svg className="absolute -top-10 -left-10 w-16 h-16 text-white opacity-20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="mt-4 text-xl leading-relaxed lg:text-2xl xl:text-3xl font-light italic">
              {citationData.body}
            </p>
            <svg className="absolute -bottom-10 -right-10 w-16 h-16 text-white opacity-20 transform rotate-180" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
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
