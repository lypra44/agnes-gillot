export const citation = {
  name: 'citation',
  title: 'Citation inspirante',
  type: 'document',
  fields: [
    {
      name: 'subtitle',
      title: 'Auteur de la citation',
      type: 'string',
      description: 'Nom de l\'auteur de la citation (affiché sous la citation)'
    },
    {
      name: 'body',
      title: 'Texte de la citation',
      type: 'text',
      description: 'La citation elle-même, affichée au centre de la section'
    },
    {
      name: 'backgroundImage',
      title: 'Image d\'arrière-plan',
      type: 'image',
      description: 'Image de fond pour la section de citation (optionnelle)',
      options: {
        hotspot: true
      }
    }
  ],
}
