import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { hero } from './hero'
import { intro } from './intro'
import { pourquoiSection } from './pourquoiSection'
import { techniques } from './techniques'
import { citation } from './citation'
import { massage } from './massage'
import { faq } from './faq'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    hero,
    intro,
    pourquoiSection,
    techniques,
    citation,
    massage,
    faq
  ],
}
