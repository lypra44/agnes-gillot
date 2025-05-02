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

  // Fonction pour tronquer le texte s'il est trop long
  const truncateText = (text: string, maxLength: number = 300) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  // Fonction pour ouvrir le lien d'avis Google
  const handleReviewClick = () => {
    if (IntroData?.googlePlaceId) {
      window.open(
        `https://search.google.com/local/writereview?placeid=${IntroData.googlePlaceId}`,
        "_blank"
      );
    } else {
      window.open("https://g.co/kgs/7QcPc6Q", "_blank");
    }
  };

  // Fonction pour ouvrir le lien vers tous les avis Google
  const handleViewAllReviews = () => {
    window.open("https://g.co/kgs/7QcPc6Q", "_blank");
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
    <div className="flex flex-col w-screen pt-8">
      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Styles de pagination personnalisés */
        :global(.swiper-pagination-bullet) {
          background-color: white;
          opacity: 0.7;
        }

        :global(.swiper-pagination-bullet-active) {
          background-color: white;
          opacity: 1;
        }
      `}</style>

      <div
        id="naturopathie"
        className="flex flex-col text-left bg-lightgreen p-4 w-full xl:p-8"
        style={{
          backgroundImage: "url(/img/pattern.svg)",
          backgroundSize: "cover",
          backgroundBlendMode: "soft-light",
        }}
      >
        <AnimatedElement
          options={{ type: "fade-in", duration: 800 }}
          className=" max-w-4xl mx-auto text-center"
        >
          <h2 className="font-title font-bold text-3xl leading-snug tracking-tight text-gray-800 relative inline-block">
            {reviewsTitle}
          </h2>

          <p className="font-body text-white mb-8">{reviewsSubtitle}</p>
        </AnimatedElement>

        <AnimatedElement
          options={{ type: "slide-up", duration: 800, delay: 200 }}
          className="mb-10 relative"
        >
          {/* Carrousel d'avis */}
          <div className="w-full max-w-4xl mx-auto px-12">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={20}
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
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="py-8"
            >
              {googleReviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg shadow-md p-6 h-64 flex flex-col">
                    <div className="flex items-center mb-2">
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
                    <div className="flex-grow overflow-hidden">
                      <p className="font-body text-sm text-gray-700 line-clamp-4">
                        {truncateText(review.text)}
                      </p>
                    </div>
                    {review.visitDate && (
                      <p className="text-xs text-gray-500 italic mt-2 invisible">
                        Visité en {review.visitDate}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Flèches de navigation personnalisées */}
            <div className="swiper-button-prev-custom absolute top-1/2 -left-2 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-90 rounded-full shadow-md cursor-pointer transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primarygreen"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 -right-2 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-90 rounded-full shadow-md cursor-pointer transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primarygreen"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>

            {/* Pagination personnalisée */}
            <div className="swiper-pagination-custom mt-4 flex justify-center"></div>
          </div>
        </AnimatedElement>

        <AnimatedElement
          options={{ type: "slide-up", duration: 800, delay: 400 }}
          className="text-center"
        >
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-md mx-auto mb-4 flex flex-col">
            <h3 className="font-title text-base font-semibold text-gray-800 mb-2">
              {reviewsCallToActionTitle}
            </h3>
            <p className="font-body text-sm text-gray-600 mb-4">
              {reviewsCallToActionText}
            </p>
            <div className="flex flex-row justify-center gap-4">
              <button
                onClick={handleReviewClick}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-md text-white bg-primarygreen hover:bg-darkgreen transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="mr-2"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
                {reviewButtonText}
              </button>
              <button
                onClick={handleViewAllReviews}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-md text-primarygreen bg-white border-primarygreen hover:bg-gray-50 transition-all duration-300"
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
