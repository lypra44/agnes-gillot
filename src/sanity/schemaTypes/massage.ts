export const massage = {
  name: 'massage',
  title: 'Massage AMA en entreprise',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre principal',
      type: 'string',
      description: 'Titre principal de la section massage (ex: "Massage AMA assis en entreprise")'
    },
    {
      name: 'subtitle',
      title: 'Sous-titre de la section',
      type: 'string',
      description: 'Texte explicatif affiché sous le titre principal'
    },
    {
      name: 'image',
      title: 'Image principale',
      type: 'image',
      description: 'Image principale du massage, affichée dans la présentation',
      options: {
        hotspot: true
      }
    },
    {
      name: 'titleCard',
      title: 'Titre sur l\'image',
      type: 'string',
      description: 'Titre affiché sur l\'image principale (ex: "Le massage Amma")'
    },
    {
      name: 'subtitleCard',
      title: 'Sous-titre sur l\'image',
      type: 'string',
      description: 'Texte affiché sous le titre sur l\'image principale'
    },
    {
      name: 'questionTitle',
      title: 'Titre de la question',
      type: 'string',
      description: 'Titre de la question "Qu\'est-ce que le massage Amma ?"'
    },
    {
      name: 'body1',
      title: 'Premier paragraphe',
      type: 'text',
      description: 'Premier paragraphe de la description du massage'
    },
    {
      name: 'body2',
      title: 'Second paragraphe',
      type: 'text',
      description: 'Second paragraphe de la description du massage (optionnel)'
    },
    {
      name: 'buttonText',
      title: 'Texte du bouton',
      type: 'string',
      description: 'Texte affiché sur le bouton de contact (ex: "Demander un devis")'
    },
    {
      name: 'seanceTitle',
      title: 'Titre de la section séance',
      type: 'string',
      description: 'Titre de la première carte informative (ex: "Comment se déroule une séance ?")'
    },
    {
      name: 'seanceDescription',
      title: 'Description de la séance',
      type: 'text',
      description: 'Description du déroulement d\'une séance de massage'
    },
    {
      name: 'seanceAvantage',
      title: 'Avantage de la séance',
      type: 'text',
      description: 'Texte d\'avantage affiché en bas de la carte (ex: concernant l\'habillement)'
    },
    {
      name: 'entrepriseTitle',
      title: 'Titre des avantages entreprise',
      type: 'string',
      description: 'Titre de la deuxième carte (ex: "Avantages pour l\'entreprise")'
    },
    {
      name: 'avantagesEntreprise',
      title: 'Avantages pour l\'entreprise',
      type: 'array',
      description: 'Liste des avantages pour l\'entreprise',
      of: [{ type: 'string' }]
    },
    {
      name: 'employesTitle',
      title: 'Titre des bienfaits employés',
      type: 'string',
      description: 'Titre de la troisième carte (ex: "Bienfaits pour les employés")'
    },
    {
      name: 'bienfaits',
      title: 'Bienfaits pour les employés',
      type: 'array',
      description: 'Liste des bienfaits du massage pour les employés',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Bienfait',
              type: 'string',
              description: 'Texte du bienfait (ex: "Réduction du stress")'
            }
          ],
          preview: {
            select: {
              title: 'title'
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}; 