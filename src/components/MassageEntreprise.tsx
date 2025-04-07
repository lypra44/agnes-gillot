"use client";

import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { ResponsiveSection } from "./ResponsiveSection";
import { AnimatedElement } from "./AnimatedElement";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

// Définissons un type pour nos données
interface Bienfait {
  title: string;
  body: string;
  image: string;
  liste: string[];
}

interface MassageData {
  title?: string;
  subtitle?: string;
  image: string;
  body?: string[];
  title1?: string;
  body1?: string;
  title2?: string;
  body2?: string;
  title3?: string;
  body3?: string;
  bienfaitsTitle?: string;
  bienfaitsSubtitle?: string;
  buttonText?: string;
  bienfaits?: Bienfait[];
}

const MassageQuery = groq`*[_type == "massage"][0]{
  title, 
  subtitle, 
  image, 
  body, 
  title1, 
  body1, 
  title2, 
  body2, 
  title3, 
  body3, 
  bienfaitsTitle, 
  bienfaitsSubtitle, 
  buttonText, 
  bienfaits
}`;

export function MassageEntreprise() {
  const [massageData, setMassageData] = useState<MassageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(MassageQuery);
        setMassageData(data);
      } catch (error) {
        console.error("Error fetching massage data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primarygreen"></div>
      </div>
    );
  }

  if (!massageData) {
    return null;
  }

  // Valeur par défaut pour le texte du bouton
  const buttonText = massageData.buttonText || "Demander un devis";

  return (
    <ResponsiveSection
      id="massage-entreprise"
      bgColor="bg-lightgreen"
      className="py-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête de section */}
        <AnimatedElement
          options={{ type: "fade-in", duration: 800 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-white gray-900 sm:text-4xl relative inline-block">
            {massageData.title}
          </h2>
          {massageData.subtitle && (
            <p className="text-xl text-gray-900 max-w-3xl mx-auto mt-4">
              {massageData.subtitle}
            </p>
          )}
        </AnimatedElement>

        {/* Présentation principale */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image principale */}
            <div className="relative h-96 lg:h-auto">
              <Image

              
                src={urlFor(massageData.image).url()}
                alt="Massage Amma en entreprise"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-primarygreen max-w-sm">
                  <p className="text-gray-800 italic text-sm">
                    &ldquo;Le massage Amma apporte équilibre et harmonie, en
                    libérant les tensions pour retrouver sérénité et
                    bien-être.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-8 lg:p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-primarygreen text-white flex items-center justify-center mr-3 text-sm">
                  ?
                </span>
                Qu&apos;est-ce que le massage Ama ?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {massageData.body1} </p>

              {massageData.body2 && (
                <p className="text-gray-700 leading-relaxed mb-6">
                  {massageData.body2}
                </p>
              )}

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primarygreen hover:bg-darkgreen transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {buttonText}
              </a>
            </div>
          </div>
        </div>

        {/* Sections d'informations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Comment se déroule une séance */}
          <AnimatedElement
            options={{ type: "slide-up", duration: 800, delay: 200 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden h-full"
          >
            <div className="p-8">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primarygreen"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Comment se déroule une séance ?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Une séance de massage Amma dure généralement entre 15 et 30
                minutes, ce qui en fait une solution idéale pour le milieu
                professionnel. Le praticien effectue une série de mouvements
                précis (pressions, percussions, étirements) qui permettent de
                détendre les muscles et de stimuler les points d&apos;énergie.
                Aucune huile n&apos;est utilisée et vous restez habillé, ce qui
                rend cette pratique particulièrement adaptée au contexte de
                l&apos;entreprise.
              </p>
            </div>
          </AnimatedElement>

          {/* Les bienfaits du massage */}
          <AnimatedElement
            options={{ type: "slide-up", duration: 800, delay: 300 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden h-full"
          >
            <div className="p-8">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primarygreen"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Les bienfaits du massage Ama
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {massageData.bienfaits?.map((bienfait, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primarygreen mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{bienfait.title}</span>
                  </div>
                )) || (
                  <>
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primarygreen mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Réduction du stress et de l&apos;anxiété
                      </span>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primarygreen mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Soulagement des tensions musculaires
                      </span>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primarygreen mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Amélioration de la concentration
                      </span>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primarygreen mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Stimulation de la circulation sanguine
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </ResponsiveSection>
  );
}
