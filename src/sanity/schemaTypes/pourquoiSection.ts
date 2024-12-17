export const pourquoiSection = {
  name: 'pourquoiSection',
  title: 'Pourquoi section',
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
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'title2',
      title: 'titre des listes',
      type: 'string'
    },
    {
      name: 'bulletPoints',
      title: 'Les raisons pour consulter',
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
              name: 'liste',
              title: 'Liste',
              type: 'array',
              of: [{type: 'string'}]
            }
          ]
        }
      ]
    },
  ],
}
