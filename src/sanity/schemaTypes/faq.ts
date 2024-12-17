// src/schemas/faq.ts
export const faq = {
    name: 'faq',
    title: 'Faq',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Titre',
        type: 'string',
      },
      {
        name: 'blocks',
        title: 'Blocs de FAQ',
        type: 'array',
        of: [
          {
            title: 'Question/Réponse',
            type: 'object',
            fields: [
              {
                name: 'question',
                title: 'Question',
                type: 'string',
        
              },
              {
                name: 'answer',
                title: 'Réponse',
                type: 'text',
              },
            ],
            preview: {
              select: {
                title: 'question',
                subtitle: 'answer',
              },
            },
          },
        ],
      },
    ],
  };