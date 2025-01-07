export const massage = {
  name: 'massage',
  title: 'Massage',
  type: 'document',
  fields: [    
    {
    name: 'image',
    title: 'Image',
    type: 'image',
  },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
    {
      name: 'title2',
      title: 'titre',
      type: 'string',
    },
    {
      name: 'body2',
      title: 'Body',
      type: 'text',
    },
    {
      name: 'title3',
      title: 'titre',
      type: 'string',
    },
    {
      name: 'body3',
      title: 'Body',
      type: 'text',
    },

    {
      name: 'bienfaits',
      title: 'Les bienfaits du massage AMA',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Titre',
              type: 'string'
            },

            {
              name: 'body',
              title: 'corps de texte',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'liste',
              title: 'Liste',
              type: 'array',
              of: [{type: 'string'}]
            },
          ],
        },
      ],
    },
  ],
} 