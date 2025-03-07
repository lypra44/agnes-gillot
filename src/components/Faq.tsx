"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  QuestionMarkCircleIcon,
  LightBulbIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  HeartIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { AnimatedElement } from "./AnimatedElement";
import { ResponsiveSection } from "./ResponsiveSection";

interface FaqData {
  title?: string;
  subtitle?: string;
  contactText?: string;
  contactButtonText?: string;
  blocks?: {
    question: string;
    answer: string;
  }[];
}

export const Faq = () => {
  const [faqData, setFaqData] = useState<FaqData>({
    title: "",
    subtitle: "",
    contactText: "",
    contactButtonText: "",
    blocks: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const query = groq`*[_type == "faq"][0]{
                title,
                subtitle,
                contactText,
                contactButtonText,
                blocks
            }`;
      const data = await client.fetch(query);
      console.log("FAQ Data :", data);

      setFaqData(data);
    };

    fetchData();
  }, []);

  if (!faqData?.blocks) {
    return null;
  }

  // Icônes pour les questions
  const faqIcons = [
    <QuestionMarkCircleIcon key="1" className="w-6 h-6 text-primarygreen" />,
    <LightBulbIcon key="2" className="w-6 h-6 text-primarygreen" />,
    <ClockIcon key="3" className="w-6 h-6 text-primarygreen" />,
    <CurrencyDollarIcon key="4" className="w-6 h-6 text-primarygreen" />,
    <UserGroupIcon key="5" className="w-6 h-6 text-primarygreen" />,
    <HeartIcon key="6" className="w-6 h-6 text-primarygreen" />,
    <SparklesIcon key="7" className="w-6 h-6 text-primarygreen" />,
    <ShieldCheckIcon key="8" className="w-6 h-6 text-primarygreen" />,
  ];

  // Valeurs par défaut pour les textes si non définis dans Sanity
  const title = faqData.title || "Foire aux questions";
  const subtitle = faqData.subtitle || "Retrouvez les réponses aux questions les plus fréquemment posées";
  const contactText = faqData.contactText || "Vous avez d'autres questions ?";
  const contactButtonText = faqData.contactButtonText || "Me contacter";

  return (
    <ResponsiveSection
      id="faq"
      bgColor="bg-white"
      className="py-16"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedElement 
          options={{ type: 'fade-in', duration: 800 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 relative inline-block">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            {subtitle}
          </p>
        </AnimatedElement>

        <div className="max-w-3xl mx-auto">
          {faqData.blocks.map((faq, index) => (
            <AnimatedElement
              key={index}
              options={{ type: 'slide-up', duration: 800, delay: 200 + index * 100 }}
              className="mb-6"
            >
              <Disclosure>
                {({ open }) => (
                  <div className={`overflow-hidden rounded-xl transition-all duration-300 ${open ? 'shadow-lg' : 'shadow-md'}`}>
                    <DisclosureButton className={`flex items-center w-full px-6 py-5 text-left text-gray-800 bg-white hover:bg-gray-50 transition-all duration-300 ${open ? 'bg-gray-50' : ''}`}>
                      <div className="mr-4 flex-shrink-0">
                        {faqIcons[index % faqIcons.length]}
                      </div>
                      <span className="flex-grow font-medium">{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-primarygreen flex-shrink-0 ml-4`}
                      />
                    </DisclosureButton>

                    <DisclosurePanel className="px-6 pt-4 pb-6 bg-white border-t border-gray-100">
                      <div className="pl-10 text-gray-600">
                        {faq.answer}
                      </div>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement 
          options={{ type: 'fade-in', duration: 800, delay: 600 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">{contactText}</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-primarygreen hover:bg-darkgreen transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {contactButtonText}
          </a>
        </AnimatedElement>
      </div>
    </ResponsiveSection>
  );
};
