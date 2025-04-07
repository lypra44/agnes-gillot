import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { hero } from "./hero";
import { pourquoiSection } from "./pourquoiSection";
import { techniques } from "./techniques";
import { citation } from "./citation";

// Importer les schémas mis à jour depuis le dossier schemas
import updatedIntro from "../schemas/intro";
import updatedMassage from "../schemas/massage";
import updatedFaq from "../schemas/faq";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    categoryType,
    authorType,
    hero,
    updatedIntro,
    pourquoiSection,
    techniques,
    citation,
    updatedMassage,
    updatedFaq,
    blockContentType,
  ],
};
