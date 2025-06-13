import { Metadata } from 'next';

export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.agnes-gillot.fr/#LocalBusiness",
    "name": "Agnès Gillot - Naturopathe",
    "description": "Naturopathe certifiée à Héric (44810). Consultations, massages bien-être, réflexologie plantaire. Accompagnement holistique pour votre santé naturelle.",
    "url": "https://www.agnes-gillot.fr",
    "telephone": "+33783261811",
    "priceRange": "€€",
    "image": "https://www.agnes-gillot.fr/images/agnes-gillot-naturopathe.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 rue de l'Eglise",
      "addressLocality": "Héric",
      "postalCode": "44810",
      "addressCountry": "FR",
      "addressRegion": "Loire-Atlantique"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.4178",
      "longitude": "-1.6556"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/agnesgillotnaturopathe",
      "https://www.instagram.com/agnesgillot_naturopathe"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "15"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Agnès Gillot - Naturopathe",
    "serviceType": "Naturopathie",
    "provider": {
      "@type": "Person",
      "name": "Agnès Gillot",
      "jobTitle": "Naturopathe Certifiée",
      "description": "Naturopathe diplômée spécialisée en massages bien-être et réflexologie plantaire",
      "image": "https://www.agnes-gillot.fr/images/agnes-gillot-naturopathe.jpg",
      "telephone": "+33783261811",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "14 rue de l'Eglise",
        "addressLocality": "Héric",
        "postalCode": "44810",
        "addressCountry": "FR"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Héric",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Loire-Atlantique"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Naturopathie",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultation Naturopathie",
            "description": "Bilan de vitalité personnalisé et conseils naturopathiques",
            "category": "Naturopathie"
          },
          "priceRange": "€€"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Massage Bien-être",
            "description": "Massages relaxants et thérapeutiques",
            "category": "Massage"
          },
          "priceRange": "€€"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Réflexologie Plantaire",
            "description": "Stimulation des points réflexes des pieds",
            "category": "Réflexologie"
          },
          "priceRange": "€€"
        }
      ]
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Agnès Gillot",
    "jobTitle": "Naturopathe Certifiée",
    "description": "Naturopathe diplômée et certifiée, spécialisée en accompagnement holistique, massages bien-être et réflexologie plantaire à Héric (Loire-Atlantique).",
    "image": "https://www.agnes-gillot.fr/images/agnes-gillot-naturopathe.jpg",
    "url": "https://www.agnes-gillot.fr",
    "telephone": "+33783261811",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 rue de l'Eglise",
      "addressLocality": "Héric",
      "postalCode": "44810",
      "addressCountry": "FR",
      "addressRegion": "Loire-Atlantique"
    },
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "Cabinet Agnès Gillot Naturopathe"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Certification Naturopathie",
      "credentialCategory": "Professional Certification"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que la naturopathie ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La naturopathie est une médecine holistique qui vise à renforcer les défenses de l'organisme par des moyens considérés comme naturels et biologiques."
        }
      },
      {
        "@type": "Question", 
        "name": "Où se trouve le cabinet d'Agnès Gillot ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le cabinet se situe au 14 rue de l'Eglise à Héric (44810), facilement accessible depuis Nort-sur-Erdre et la région nantaise."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les tarifs des consultations ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les tarifs varient selon le type de consultation. Contactez-moi au 07 83 26 18 11 pour plus d'informations sur les tarifs et modalités."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.agnes-gillot.fr"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

// Métadonnées optimisées pour l'export
export const seoMetadata: Metadata = {
  title: "Agnès Gillot - Naturopathe à Héric (44810) | Consultations & Massages",
  description: "Agnès Gillot, naturopathe certifiée à Héric (44810). Consultations personnalisées, massages bien-être, réflexologie. Prenez rendez-vous au 07 83 26 18 11.",
  keywords: "naturopathe Héric, naturopathie Loire-Atlantique, massage bien-être Héric, réflexologie plantaire 44810, consultation naturopathie",
  alternates: {
    canonical: 'https://www.agnes-gillot.fr'
  },
  openGraph: {
    title: "Agnès Gillot - Naturopathe à Héric (44810)",
    description: "Consultations naturopathie, massages bien-être et réflexologie. Cabinet à Héric, Loire-Atlantique.",
    url: 'https://www.agnes-gillot.fr',
    siteName: 'Agnès Gillot Naturopathe',
    images: [
      {
        url: 'https://www.agnes-gillot.fr/images/agnes-gillot-naturopathe.jpg',
        width: 1200,
        height: 630,
        alt: 'Agnès Gillot - Naturopathe à Héric'
      }
    ],
    locale: 'fr_FR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agnès Gillot - Naturopathe à Héric (44810)",
    description: "Consultations naturopathie, massages bien-être et réflexologie. Cabinet à Héric, Loire-Atlantique.",
    images: ['https://www.agnes-gillot.fr/images/agnes-gillot-naturopathe.jpg']
  },
  other: {
    'geo.region': 'FR-44',
    'geo.placename': 'Héric',
    'geo.position': '47.4178;-1.6556',
    'ICBM': '47.4178, -1.6556'
  }
}; 