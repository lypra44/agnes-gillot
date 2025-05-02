// headerType.ts
export const hero = {
  name: 'hero',
  title: 'Bannière d\'accueil',
  type: 'document',
  fields: [
    {
      name: 'annonce',
      title: 'Texte de la barre d\'annonce (haut de page)',
      type: 'string',
      description: 'Texte qui apparaît dans la barre verte tout en haut du site'
    },
    {
      name: 'titlepart1',
      title: 'Titre principal - Partie 1',
      type: 'string',
      description: 'Première partie du titre principal (texte noir)'
    },
    {
      name: 'titlepart2',
      title: 'Titre principal - Partie 2',
      type: 'string',
      description: 'Seconde partie du titre principal (texte vert)'
    },
    {
      name: 'subtitle',
      title: 'Sous-titre de la bannière',
      type: 'string',
      description: 'Texte descriptif affiché sous le titre principal'
    },
    {
      name: 'image',
      title: 'Image principale',
      type: 'image',
      description: 'Image affichée à droite dans la bannière d\'accueil',
      options: {
        hotspot: true
      }
    },
    {
      name: 'buttonText1',
      title: 'Texte du 1er bouton',
      type: 'string',
      description: 'Texte du bouton "Mes techniques"'
    },
    {
      name: 'buttonText2',
      title: 'Texte du 2ème bouton',
      type: 'string',
      description: 'Texte du bouton "Me contacter"'
    }
  ],
} 