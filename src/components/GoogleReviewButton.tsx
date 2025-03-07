"use client";

interface GoogleReviewButtonProps {
  placeId: string;
  buttonText?: string;
}

export default function GoogleReviewButton({ placeId, buttonText = "Laisser un avis Google" }: GoogleReviewButtonProps) {
  const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId || "0x4805f5576c12c701:0x57b942fc9d37ffec"}`;

  return (
    <a
      href={reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 bg-primarygreen text-white rounded-md shadow-md hover:bg-darkgreen transition-all duration-300 hover:shadow-lg hover:translate-y-[-3px]"
    >
      <span className="mr-2 text-lg">⭐</span>
      <span>{buttonText}</span>
    </a>
  );
} 