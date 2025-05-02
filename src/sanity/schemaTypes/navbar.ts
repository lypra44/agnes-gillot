export const navbar = {
  name: 'navbar',
  title: 'Barre de navigation',
  type: 'document',
  fields: [
    {
      name: 'menuItems',
      title: 'Éléments du menu',
      type: 'array',
      description: 'Liste des éléments de menu dans la barre de navigation',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nom de l\'élément',
              type: 'string',
              description: 'Texte affiché dans le menu (ex: "Pour qui ? Pourquoi ?")'
            },
            {
              name: 'id',
              title: 'ID de section',
              type: 'string',
              description: 'Identifiant de la section ciblée (ex: "pourquoi", "techniques")'
            }
          ]
        }
      ]
    },
    {
      name: 'ctaText',
      title: 'Texte du bouton d\'action',
      type: 'string',
      description: 'Texte affiché sur le bouton d\'appel à l\'action (ex: "Prendre rendez-vous")'
    },
    {
      name: 'ctaTarget',
      title: 'Cible du bouton d\'action',
      type: 'string',
      description: 'ID de la section ciblée par le bouton (ex: "contact")'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Barre de navigation'
      }
    }
  }
}; 