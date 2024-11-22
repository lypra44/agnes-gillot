export const sectionIntro = {
  name: 'sectionIntro',
  title: 'Section Intro',
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
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'body',
      title: 'Contenu',
      type: 'text',
    },
    {
      name: 'bulletPoints',
      title: 'Liste à puces',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'point',
              title: 'Point',
              type: 'string'
            }
          ]
        }
      ]
    }
  ],
};
