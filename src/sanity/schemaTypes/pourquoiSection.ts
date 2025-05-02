export const pourquoiSection = {
  name: 'pourquoiSection',
  title: 'Section "Pour qui ? Pourquoi ?"',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      description: 'Titre principal de la section "Pour qui ? Pourquoi ?"'
    },
    {
      name: 'subtitle',
      title: 'Sous-titre de la section',
      type: 'string',
      description: 'Texte court qui apparaît sous le titre principal'
    },
    {
      name: 'body',
      title: 'Texte de présentation',
      type: 'text',
      description: 'Paragraphe explicatif présentant l\'approche naturopathique'
    },
    {
      name: 'image',
      title: 'Image d\'illustration',
      type: 'image',
      description: 'Image affichée à côté du texte',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title2',
      title: 'Titre de la liste de raisons',
      type: 'string',
      description: 'Titre qui apparaît au-dessus des listes de raisons pour consulter'
    },
    {
      name: 'bulletPoints',
      title: 'Raisons pour consulter',
      type: 'array',
      description: 'Liste des raisons pour consulter, regroupées par catégories',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Catégorie',
              type: 'string',
              description: 'Titre de la catégorie (ex: Stress, Digestion...)'
            },
            {
              name: 'liste',
              title: 'Liste des problématiques',
              type: 'array',
              description: 'Liste des problématiques spécifiques dans cette catégorie',
              of: [{type: 'string'}]
            }
          ]
        }
      ]
    },
  ],
}
