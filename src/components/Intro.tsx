"use client";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { AnimatedElement } from "@/components/AnimatedElement";
import GoogleReviewButton from "./GoogleReviewButton";

// Définissons un type pour nos données
interface SectionIntroData {
  reviewsTitle?: string;
  reviewsSubtitle?: string;
  reviewsCallToActionTitle?: string;
  reviewsCallToActionText?: string;
  reviewButtonText?: string;
  googlePlaceId?: string;
}

const IntroQuery = groq`*[_type == "intro"][0]{
  reviewsTitle, 
  reviewsSubtitle, 
  reviewsCallToActionTitle, 
  reviewsCallToActionText, 
  reviewButtonText, 
  googlePlaceId
}`;

export function SectionIntro() {
  const [IntroData, setSectionIntroData] = useState<SectionIntroData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(IntroQuery);
        console.log("Received data:", data);
        setSectionIntroData(data);
      } catch (error) {
        console.error("Error fetching intro data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!IntroData) {
    return null;
  }

  // Valeurs par défaut pour les textes si non définis dans Sanity
  const reviewsTitle = IntroData.reviewsTitle || "Ce que disent mes clients";
  const reviewsSubtitle =
    IntroData.reviewsSubtitle ||
    "Découvrez les témoignages de personnes qui ont bénéficié de mes services de naturopathie et de massage.";
  const reviewsCallToActionTitle =
    IntroData.reviewsCallToActionTitle || "Votre avis compte pour moi !";
  const reviewsCallToActionText =
    IntroData.reviewsCallToActionText ||
    "Votre expérience aide d'autres personnes à découvrir mes services. Si vous avez apprécié votre séance, n'hésitez pas à partager votre expérience sur Google.";
  const reviewButtonText =
    IntroData.reviewButtonText || "Laisser un avis Google";
  const googlePlaceId =
    IntroData.googlePlaceId || "0x4805f5576c12c701:0x57b942fc9d37ffec";

  return (
    <div className="flex flex-col w-screen">
      <div
        id="naturopathie"
        className="flex flex-col text-left bg-lightgreen p-8 w-full xl:p-12"
        style={{
          backgroundImage: "url(/img/pattern.svg)",
          backgroundSize: "cover",
          backgroundBlendMode: "soft-light",
        }}
      >
        <AnimatedElement
          options={{ type: "fade-in", duration: 800 }}
          className="mb-8 max-w-4xl mx-auto text-center"
        >
          <h2 className="font-bold text-3xl leading-snug tracking-tight text-gray-800 relative inline-block">
            {reviewsTitle}
          </h2>

          <p className="text-white mb-8">{reviewsSubtitle}</p>
        </AnimatedElement>

        <AnimatedElement
          options={{ type: "slide-up", duration: 800, delay: 400 }}
          className="text-center"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {reviewsCallToActionTitle}
            </h3>
            <p className="text-gray-600 mb-6">{reviewsCallToActionText}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoogleReviewButton
                placeId={googlePlaceId}
                buttonText={reviewButtonText}
              />
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
