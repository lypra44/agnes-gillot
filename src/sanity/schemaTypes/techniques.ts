export const techniques = {
  name: 'techniques',
  title: 'Techniques',
  type: 'document',
  fields: [

    {
      name: 'title',
      title: 'Titre',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Corps de texte',
      type: 'text'
    },
    {
      name: 'blocks',
      title: 'Blocs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'title',
              title: 'Titre',
              type: 'string',
            },
            {
              name: 'body',
              title: 'Corps',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
} 