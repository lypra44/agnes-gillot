import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  const items = [
    S.documentTypeListItem('post').title('Posts'),
    S.documentTypeListItem('category').title('Categories'),
    S.documentTypeListItem('author').title('Authors'),
    S.divider(),
    S.documentTypeListItem('hero').title('hero section'),
    S.documentTypeListItem('intro').title('intro'),
    S.documentTypeListItem('pourquoiSection').title('Pourquoi section'),
    S.documentTypeListItem('faq').title('Faq'),
    ...S.documentTypeListItems().filter(
      (item) => item.getId && !['post', 'category', 'author', 'hero', 'intro', 'pourquoiSection', 'faq'].includes(item.getId()!),
    ),
  ];

  // Log pour vérifier les identifiants
  items.forEach(item => {
    console.log('Item ID:', item.id);
  });

  return S.list()
    .title('Blog')
    .items(items);
    
}
