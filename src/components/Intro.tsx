"use client";
import { Container } from "@/components/Container";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { scrollToSection } from "@/utils/scrollToSection";
import Image from "next/image";
import { AnimatedElement } from "@/components/AnimatedElement";
import GoogleReviewButton from "./GoogleReviewButton";
import GoogleReviews from "./GoogleReviews";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

// Définissons un type pour nos données
interface SectionIntroData {
  title?: string;
  subtitle?: string;
  image: string;
  body?: string[];
  reviewsTitle?: string;
  reviewsSubtitle?: string;
  reviewsCallToActionTitle?: string;
  reviewsCallToActionText?: string;
  reviewButtonText?: string;
  discoverButtonText?: string;
  googlePlaceId?: string;
  googleMapsApiKey?: string;
}

// Type pour les avis Google
interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  date: string;
}

const IntroQuery = groq`*[_type == "intro"][0]{
  title, 
  subtitle, 
  image, 
  body, 
  reviewsTitle, 
  reviewsSubtitle, 
  reviewsCallToActionTitle, 
  reviewsCallToActionText, 
  reviewButtonText, 
  discoverButtonText, 
  googlePlaceId, 
  googleMapsApiKey
}`;

export function SectionIntro() {
  const [IntroData, setSectionIntroData] = useState<SectionIntroData | null>(
    null
  );
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
  const discoverButtonText =
    IntroData.discoverButtonText || "Découvrir mes techniques";
  const googlePlaceId =
    IntroData.googlePlaceId || "0x4805f5576c12c701:0x57b942fc9d37ffec";
  const googleMapsApiKey =
    IntroData.googleMapsApiKey || "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

  // Fonction pour afficher les étoiles en fonction de la note
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <Container className="flex flex-col w-screen">
      <div
        id="naturopathie"
        className="flex flex-col text-left bg-lightgreen p-8 w-full xl:p-24"
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
          <h2 className="font-bold text-3xl leading-snug tracking-tight text-gray-800 mb-6 relative inline-block">
            {reviewsTitle}
          </h2>

          <p className="text-white mb-8">{reviewsSubtitle}</p>
        </AnimatedElement>

        <AnimatedElement
          options={{ type: "zoom-in", duration: 800, delay: 200 }}
          className="w-full max-w-5xl mx-auto mb-8"
        >
          <GoogleReviews placeId={googlePlaceId} apiKey={googleMapsApiKey} />
        </AnimatedElement>

        <AnimatedElement
          options={{ type: "slide-up", duration: 800, delay: 400 }}
          className="mt-8 text-center"
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

          <a
            href="#techniques"
            className="text-lightgreen bg-white py-3 px-6 rounded-md transition-all duration-300 ease-in-out hover:translate-y-[-3px] hover:bg-gray-800 hover:text-white shadow-md hover:shadow-lg inline-block"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("techniques");
            }}
          >
            {discoverButtonText}
          </a>
        </AnimatedElement>
      </div>
    </Container>
  );
}
