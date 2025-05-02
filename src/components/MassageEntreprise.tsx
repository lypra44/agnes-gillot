"use client";

import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { ResponsiveSection } from "./ResponsiveSection";
import { AnimatedElement } from "./AnimatedElement";
import Button from "./Button";

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
      bgColor="bg-lightgreen bg-opacity-30"
      style={{
        backgroundImage: "url(/img/pattern.svg)",
        backgroundBlendMode: "soft-light",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <AnimatedElement
          options={{ type: "fade-in", duration: 800 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl relative inline-block">
            {massageData.title}
          </h2>
          {massageData.subtitle && (
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-4">
              {massageData.subtitle}
            </p>
          )}
        </AnimatedElement>

        {/* Présentation principale - structure améliorée */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image avec superposition */}
              <div className="relative h-80 lg:h-auto order-1 lg:order-1">
                <Image
                  src={urlFor(massageData.image).url()}
                  alt="Massage Amma en entreprise"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Le massage Amma</h3>
                  <p className="text-white/90 max-w-md">
                    Un art millénaire pour le bien-être en entreprise
                  </p>
                </div>
              </div>

              {/* Contenu descriptif */}
              <div className="p-8 lg:p-10 order-2 lg:order-2">
                <div className="prose prose-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    Qu&apos;est-ce que le massage Amma ?
                  </h3>

                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">{massageData.body1}</p>

                    {massageData.body2 && (
                      <p className="leading-relaxed">{massageData.body2}</p>
                    )}
                  </div>

                  <Button
                    as="a"
                    href="#contact"
                    variant="primary"
                    size="md"
                    className="mt-8"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    }
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections d'informations en cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                minutes. Le praticien effectue des mouvements précis (pressions,
                percussions, étirements) qui détendent les muscles et stimulent
                les points d&apos;énergie.
              </p>
              <div className="mt-4 p-3 bg-green-50 border-l-4 border-primarygreen rounded">
                <p className="text-sm text-gray-700">
                  <strong>Avantage :</strong> Aucune huile n&apos;est utilisée
                  et vous restez habillé, idéal pour le contexte professionnel.
                </p>
              </div>
            </div>
          </AnimatedElement>

          {/* Les bienfaits pour l'entreprise */}
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Avantages pour l&apos;entreprise
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
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
                    Réduction de l&apos;absentéisme
                  </span>
                </li>
                <li className="flex items-start">
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
                    Augmentation de la productivité
                  </span>
                </li>
                <li className="flex items-start">
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
                    Amélioration du climat social
                  </span>
                </li>
                <li className="flex items-start">
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
                    Image positive de l&apos;entreprise
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedElement>

          {/* Les bienfaits pour les employés */}
          <AnimatedElement
            options={{ type: "slide-up", duration: 800, delay: 400 }}
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
                Bienfaits pour les employés
              </h3>

              <div className="grid grid-cols-1 gap-3">
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
