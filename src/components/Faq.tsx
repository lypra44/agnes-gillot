"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

interface FaqData {
  title?: string;
  blocks?: {
    question: string;
    answer: string;
  }[];
}

export const Faq = () => {
  const [faqData, setFaqData] = useState<FaqData>({
    title: "",
    blocks: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const query = groq`*[_type == "faq"][0]{
                title,
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

  return (
    <Container className="py-8">
      <h2 className="text-primarygreen font-bold text-center pb-4">
        {faqData.title}
      </h2>
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqData.blocks.map((faq, index) => (
          <div key={index} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-left text-gray-800 rounded-lg bg-gray-50">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-primarygreen`}
                    />
                  </DisclosureButton>

                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {faq.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};
