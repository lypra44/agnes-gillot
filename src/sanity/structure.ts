import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  const items = [
    // Éléments de navigation
    S.documentTypeListItem('navbar').title('Navigation'),
    S.documentTypeListItem('footer').title('Pied de page'),
    S.divider(),
    
    // Sections principales du site
    S.documentTypeListItem('hero').title('Section Hero'),
    S.documentTypeListItem('intro').title('Introduction'),
    S.documentTypeListItem('pourquoiSection').title('Section Pourquoi'),
    S.documentTypeListItem('techniques').title('Techniques'),
    S.documentTypeListItem('citation').title('Citation'),
    S.documentTypeListItem('massage').title('Massage Entreprise'),
    S.documentTypeListItem('contact').title('Contact'),
    S.documentTypeListItem('faq').title('FAQ'),
    S.divider(),
    
    // Autres types de contenu
    S.documentTypeListItem('legalPages').title('Pages Légales'),
    S.documentTypeListItem('reviews').title('Avis Clients'),
    
    // Elements supplémentaires
    ...S.documentTypeListItems().filter(
      (item) => item.getId && ![
        'navbar', 'footer', 'hero', 'intro', 'pourquoiSection', 
        'techniques', 'citation', 'massage', 'contact', 'faq',
        'legalPages', 'reviews'
      ].includes(item.getId()!),
    ),
  ];

  // Log pour vérifier les identifiants
  items.forEach((item) => {
    console.log("Item ID:", item.id);
  });

  return S.list().title("Site Agnès Gillot").items(items);
};
