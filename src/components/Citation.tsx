"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

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
      .fetch(`*[_type == "citation"][0]{
        subtitle,
        body
      }`)
      .then((data) => {
        if (data) {
          setCitationData(data);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center bg-darkgreen bg-cover py-8 px-6 text-white md:mx-8 md:py-12 md:my-8 md:rounded-md md:w-11/12" 
    style={{ backgroundImage: "url(/img/pattern.svg)"}}>


          {citationData.body && (
            <p className="mt-4  text-base leading-normal ">
              {citationData.body}
            </p>
          )}

    {citationData.subtitle && (
            <p className="mt-2 text-lg font-semibold">
              {citationData.subtitle}
            </p>
          )}
    </section>
  );
}
