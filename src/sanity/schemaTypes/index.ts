import { type SchemaTypeDefinition } from "sanity";
import { hero } from "./hero";
import { pourquoiSection } from "./pourquoiSection";
import { techniques } from "./techniques";
import { citation } from "./citation";
import { contact } from "./contact";
import { footer } from "./footer";
import { legalPages } from "./legalPages";
import { navbar } from "./navbar";
import { massage } from "./massage";

// Importer les schémas mis à jour depuis le dossier schemas
import updatedIntro from "../schemas/intro";
import updatedFaq from "../schemas/faq";
import updatedReviews from "../schemas/reviews";
import updatedContactInfo from "../schemas/contactInfo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Éléments de navigation
    navbar,
    footer,

    // Sections principales du site
    hero,
    updatedIntro,
    pourquoiSection,
    techniques,
    citation,
    massage,
    contact,
    updatedFaq,

    // Pages légales
    legalPages,

    // Avis clients
    updatedReviews,
    
    // Informations de contact
    updatedContactInfo,
  ],
};
