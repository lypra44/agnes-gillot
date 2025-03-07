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
        console.log("Received data:", data);
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

  // Valeurs par défaut pour les textes si non définis dans Sanity
  const bienfaitsTitle =
    massageData.bienfaitsTitle || "Les bienfaits du massage Amma";
  const bienfaitsSubtitle =
    massageData.bienfaitsSubtitle ||
    "Découvrez les nombreux avantages que le massage Amma peut apporter à vos employés et à votre entreprise.";
  const buttonText = massageData.buttonText || "Demander un devis";

  return (
    <ResponsiveSection
      id="massage-entreprise"
      bgColor="bg-gradient-to-b from-gray-50 to-white"
      className="py-16"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedElement
          options={{ type: "fade-in", duration: 800 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 relative inline-block">
            {massageData.title}
          </h2>
          {massageData.subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              {massageData.subtitle}
            </p>
          )}
        </AnimatedElement>

        {/* Section principale avec image et description */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Colonne de gauche - Image */}
          <AnimatedElement
            options={{ type: "slide-right", duration: 800, delay: 300 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[3/4]">
              <Image
                src={urlFor(massageData.image).url()}
                alt="Massage Amma en entreprise"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Massage AMA assis
                </h3>
                <p className="text-white/90 text-sm">
                  Une solution efficace pour le bien-être au travail
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-md p-6">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-primarygreen hover:bg-darkgreen transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
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
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {buttonText}
              </a>
            </div>
          </AnimatedElement>

          {/* Colonne de droite - Contenu */}
          <AnimatedElement
            options={{ type: "slide-left", duration: 800, delay: 400 }}
            className="lg:col-span-3"
          >
            {/* Description du service */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-primarygreen mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {massageData.title1}
                  </h3>
                  <p className="text-gray-600">{massageData.body1}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {massageData.title2}
                  </h3>
                  <p className="text-gray-600">{massageData.body2}</p>
                </div>
              </div>
            </div>

            {/* Bienfaits */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {bienfaitsTitle}
              </h3>

              {bienfaitsSubtitle && (
                <p className="text-gray-600 mb-6">{bienfaitsSubtitle}</p>
              )}

              <div className="space-y-6">
                {massageData.bienfaits?.map((bienfait, index) => (
                  <AnimatedElement
                    key={index}
                    options={{
                      type: "fade-in",
                      duration: 800,
                      delay: 200 + index * 100,
                    }}
                    className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 bg-primarygreen bg-opacity-10 p-3 rounded-lg">
                        {bienfait.image && (
                          <div className="relative w-10 h-10">
                            <Image
                              src={urlFor(bienfait.image).url()}
                              alt={bienfait.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {bienfait.title}
                        </h4>
                        <p className="text-gray-600 mb-3">{bienfait.body}</p>
                        {bienfait.liste && bienfait.liste.length > 0 && (
                          <ul className="space-y-2 pl-1">
                            {bienfait.liste.map((item, i) => (
                              <li key={i} className="flex items-start">
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
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </ResponsiveSection>
  );
}
