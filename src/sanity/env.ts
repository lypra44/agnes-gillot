export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-05-05";

// Utiliser des valeurs par défaut pour le développement
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "lwkszdwh";

export const googleMapsApiKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
export const googlePlaceId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "";
