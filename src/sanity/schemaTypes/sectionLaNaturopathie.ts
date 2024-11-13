export const naturopathieSection = {
  name: 'sectionLaNaturopathie',
  title: 'Section La Naturopathie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string',
    },
    {
      name: 'imageUrl',
      title: 'URL de l\'image',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Contenu',
      type: 'array',
      of: [{ type: 'block' }],
    }
  ],
};
