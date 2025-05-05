"use client";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { AnimatedElement } from "@/components/AnimatedElement";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

// Définissons un type pour nos données
interface SectionIntroData {
  reviewsTitle?: string;
  reviewsSubtitle?: string;
  reviewsCallToActionTitle?: string;
  reviewsCallToActionText?: string;
  reviewButtonText?: string;
  googlePlaceId?: string;
}

// Type pour les avis
interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  source: string;
  visitDate?: string;
}

const IntroQuery = groq`*[_type == "intro"][0]{
  reviewsTitle, 
  reviewsSubtitle, 
  reviewsCallToActionTitle, 
  reviewsCallToActionText, 
  reviewButtonText, 
  googlePlaceId
}`;

// Données des avis clients
const clientReviews: Review[] = [
  {
    name: "Caroline B",
    rating: 5,
    date: "il y a un mois",
    text: "Madame Gillot a été à mon écoute et celle de ma fille en répondant à nos attentes. Merci pour les conseils et les soins de qualité",
    source: "Google",
    visitDate: "mars",
  },
  {
    name: "Samuel POTIRON",
    rating: 5,
    date: "il y a 11 mois",
    text: "C'est une personne très à l'écoute, qui analyse très bien la situation. Elle est bienveillante, on se sent en sécurité lors de la séance.",
    source: "Google",
    visitDate: "mai 2024",
  },
  {
    name: "Christine briand",
    rating: 5,
    date: "il y a 2 ans",
    text: "J'y vais depuis plusieurs mois, à l'écoute et très professionnelle. J'y allais pour un mauvais sommeil, je dors enfin. Elle me fait de la réflexologie plantaire, ce qui me convient. Très bon suivi d'une séance à l'autre. Je recommande.",
    source: "Google",
    visitDate: "novembre 2022",
  },
  {
    name: "Elise Nerriere",
    rating: 5,
    date: "il y a 2 ans",
    text: "Avec sa bienveillance, Mme Gillot sait répondre à mes besoins à chaque période de l'année ou de la vie... Ses soins et les traitements naturels proposés sont une aide précieuse au bien être !",
    source: "Google",
    visitDate: "décembre 2021",
  },
  {
    name: "Anne Guédon",
    rating: 5,
    date: "il y a 3 ans",
    text: "Conseils super adaptés, écoute et bienveillance. Les soins énergétiques sont top. Vraie sensation de bien être et de légèreté à la sortie et pendant un bon moment.",
    source: "Google",
    visitDate: "octobre 2021",
  },
  {
    name: "Angèla Rebin",
    rating: 5,
    date: "il y a 3 ans",
    text: "Une personne bienveillante et à l'écoute qui a rapidement cerné mes besoins. La réponse thérapeutique fut adaptée et m'a procuré un réel bien être.",
    source: "Google",
    visitDate: "janvier 2022",
  },
];

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

  // Fonction pour rendre les étoiles
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-3 h-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
        />
      );
    }
    return stars;
  };

  // Fonction pour ouvrir le lien d'avis Google
  const handleReviewClick = () => {
    if (IntroData?.googlePlaceId) {
      window.open(
        `https://www.google.fr/maps/place/Agn%C3%A8s+GILLOT+-+NATUROPATHE/@47.4141957,-1.6547502,17z/data=!4m8!3m7!1s0x4805f5576c12c701:0x57b942fc9d37ffec!8m2!3d47.4141957!4d-1.6521753!9m1!1b1!16s%2Fg%2F11kx5w_7jw?hl=fr&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D`,
        "_blank"
      );
    } else {
      window.open("https://g.co/kgs/7QcPc6Q", "_blank");
    }
  };

  // Fonction pour ouvrir le lien vers tous les avis Google
  const handleViewAllReviews = () => {
    window.open(
      "https://www.google.fr/maps/place/Agn%C3%A8s+GILLOT+-+NATUROPATHE/@47.4141957,-1.6547502,17z/data=!4m16!1m9!3m8!1s0x4805f5576c12c701:0x57b942fc9d37ffec!2sAgn%C3%A8s+GILLOT+-+NATUROPATHE!8m2!3d47.4141957!4d-1.6521753!9m1!1b1!16s%2Fg%2F11kx5w_7jw!3m5!1s0x4805f5576c12c701:0x57b942fc9d37ffec!8m2!3d47.4141957!4d-1.6521753!16s%2Fg%2F11kx5w_7jw?hl=fr&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!IntroData) {
    return null;
  }

  // Filtrer uniquement les avis Google
  const googleReviews = clientReviews.filter(
    (review) => review.source === "Google"
  );

  // Valeurs par défaut pour les textes si non définis dans Sanity
  const reviewsTitle = IntroData.reviewsTitle || "Ce que disent mes clients";
  const reviewsSubtitle =
    IntroData.reviewsSubtitle ||
    "Découvrez les témoignages de personnes qui ont bénéficié de mes services de naturopathie et de massage.";
  const reviewsCallToActionTitle =
    IntroData.reviewsCallToActionTitle || "Votre avis compte pour moi";
  const reviewsCallToActionText =
    IntroData.reviewsCallToActionText ||
    "Si vous avez apprécié votre séance, partagez votre expérience.";
  const reviewButtonText = IntroData.reviewButtonText || "Laisser un avis";

  return (
    <div className="flex flex-col w-screen pt-12 pb-8">
      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Styles de pagination personnalisés */
        :global(.swiper-pagination-bullet) {
          background-color: white;
          opacity: 0.7;
          margin: 0 6px !important;
          width: 10px !important;
          height: 10px !important;
        }

        :global(.swiper-pagination-bullet-active) {
          background-color: white;
          opacity: 1;
        }
      `}</style>

      <div
        id="naturopathie"
        className="flex flex-col text-left bg-lightgreen p-4 py-8 md:py-12 lg:py-16 w-full xl:p-12 mx-auto"
        style={{
          backgroundImage: "url(/img/pattern.svg)",
          backgroundSize: "cover",
          backgroundBlendMode: "soft-light",
        }}
      >
        <AnimatedElement
          options={{ type: "fade-in", duration: 800 }}
          className="max-w-4xl mx-auto text-center lg:max-w-5xl"
        >
          <h2 className="font-title font-bold leading-snug tracking-tight text-gray-800 relative inline-block lg:mb-3">
            {reviewsTitle}
          </h2>

          <p className="font-body text-white mb-8 lg:max-w-3xl lg:mx-auto">
            {reviewsSubtitle}
          </p>
        </AnimatedElement>

        <AnimatedElement
          options={{ type: "slide-up", duration: 800, delay: 200 }}
          className="mb-10 relative lg:mb-16"
        >
          {/* Carrousel d'avis */}
          <div className="w-full max-w-4xl mx-auto px-8 sm:px-12 relative lg:max-w-6xl">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-custom",
              }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 45,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="py-8"
            >
              {googleReviews.map((review, index) => (
                <SwiperSlide key={index} className="h-auto flex">
                  <div className="bg-white rounded-lg shadow-md p-6 h-64 md:h-56 lg:h-60 flex flex-col w-full">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-primarygreen text-white flex items-center justify-center font-title font-semibold">
                        {review.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-title font-semibold">
                          {review.name}
                        </h4>
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="font-body text-sm text-gray-700 line-clamp-6">
                        {review.text}
                      </p>
                    </div>
                    {review.visitDate && (
                      <p className="text-xs text-gray-500 italic mt-3">
                        Visité en {review.visitDate}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Flèches de navigation personnalisées */}
            <div className="swiper-button-prev-custom absolute top-1/2 -left-0 sm:-left-2 lg:-left-5 z-20 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white bg-opacity-95 rounded-full shadow-md cursor-pointer transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primarygreen sm:hidden"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primarygreen hidden sm:block"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 -right-0 sm:-right-2 lg:-right-5 z-20 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white bg-opacity-95 rounded-full shadow-md cursor-pointer transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primarygreen sm:hidden"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primarygreen hidden sm:block"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>

            {/* Pagination personnalisée */}
            <div className="swiper-pagination-custom mt-4 flex justify-center gap-1"></div>
          </div>
        </AnimatedElement>

        <AnimatedElement
          options={{ type: "slide-up", duration: 800, delay: 400 }}
          className="text-center"
        >
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-md mx-auto mb-4 flex flex-col lg:p-8 lg:max-w-xl">
            <h3 className="font-title text-base font-semibold text-gray-800 mb-2 lg:text-lg">
              {reviewsCallToActionTitle}
            </h3>
            <p className="font-body text-sm text-gray-600 mb-4 lg:mb-6">
              {reviewsCallToActionText}
            </p>
            <div className="flex flex-row justify-center gap-4">
              <button
                onClick={handleReviewClick}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-md text-white bg-primarygreen hover:bg-darkgreen transition-all duration-300 lg:px-6 lg:py-3"
              >
                {reviewButtonText}
              </button>
              <button
                onClick={handleViewAllReviews}
                className="inline-flex items-center justify-center px-4 py-2 border border-primarygreen text-sm font-medium rounded-md shadow-md text-primarygreen bg-white hover:bg-gray-50 transition-all duration-300 lg:px-6 lg:py-3"
              >
                Voir tous les avis
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
