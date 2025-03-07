"use client";

interface GoogleReviewsProps {
  placeId: string;
  apiKey: string;
}

export default function GoogleReviews({ placeId, apiKey }: GoogleReviewsProps) {
  // Utiliser des valeurs par défaut si les props ne sont pas fournies
  const googlePlaceId = placeId || "0x4805f5576c12c701:0x57b942fc9d37ffec";
  const googleMapsApiKey = apiKey || "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

  return (
    <div className="flex justify-center p-4 w-full">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:${googlePlaceId}&key=${googleMapsApiKey}`}
        width="100%"
        height="450"
        className="border-0 rounded-lg shadow-lg max-w-3xl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
