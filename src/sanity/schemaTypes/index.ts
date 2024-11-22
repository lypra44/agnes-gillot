import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { hero } from './hero'
import { sectionIntro } from './sectionIntro'
import { pourquoiSection } from './pourquoiSection'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    hero,
    sectionIntro,
    pourquoiSection
  ],
}
