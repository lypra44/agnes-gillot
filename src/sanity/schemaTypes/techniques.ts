export const techniques = {
  name: 'techniques',
  title: 'Section "Les techniques"',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre principal de la section',
      type: 'string',
      description: 'Titre affiché en haut de la section des techniques'
    },
    {
      name: 'subtitle',
      title: 'Sous-titre de la section',
      type: 'string',
      description: 'Texte explicatif affiché sous le titre principal'
    },
    {
      name: 'body',
      title: 'Introduction aux techniques',
      type: 'text',
      description: 'Paragraphe d\'introduction expliquant l\'approche globale des techniques'
    },
    {
      name: 'blocks',
      title: 'Liste des techniques proposées',
      type: 'array',
      description: 'Cartes présentant chaque technique (naturopathie, massage, réflexologie...)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image illustrative',
              type: 'image',
              description: 'Image représentant la technique (affichée en haut de la carte)',
              options: {
                hotspot: true
              }
            },
            {
              name: 'title',
              title: 'Nom de la technique',
              type: 'string',
              description: 'Titre de la technique (ex: Naturopathie, Réflexologie...)'
            },
            {
              name: 'body',
              title: 'Description de la technique',
              type: 'text',
              description: 'Explication détaillée de la technique et de ses bienfaits'
            },
          ],
        },
      ],
    },
  ],
} 