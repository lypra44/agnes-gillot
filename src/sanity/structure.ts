import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  const items = [
    S.documentTypeListItem('post').title('Posts'),
    S.documentTypeListItem('category').title('Categories'),
    S.documentTypeListItem('author').title('Authors'),
    S.divider(),
    S.documentTypeListItem('hero').title('hero section'),
    S.documentTypeListItem('intro').title('Intro'),
    S.documentTypeListItem('pourquoiSection').title('Pourquoi section'),
    S.documentTypeListItem('techniques').title('Techniques'),
    S.documentTypeListItem('citation').title('Citation'),
    S.documentTypeListItem('massage').title('Massage'),
    S.documentTypeListItem('faq').title('Faq'),
    ...S.documentTypeListItems().filter(
      (item) => item.getId && !['post', 'category', 'author','citation', 'hero', 'intro', 'pourquoiSection', 'techniques','massage','faq'].includes(item.getId()!),
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
