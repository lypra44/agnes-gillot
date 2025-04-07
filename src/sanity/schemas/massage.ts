const massageSchema = {
  name: "massage",
  title: "Massage AMA",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre principal",
      type: "string",
      description: "Titre principal de la section Massage AMA",
    },
    {
      name: "subtitle",
      title: "Sous-titre",
      type: "string",
      description: "Sous-titre de la section Massage AMA",
    },
    {
      name: "image",
      title: "Image principale",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Image principale pour la section Massage AMA",
    },
    {
      name: "body",
      title: "Contenu principal",
      type: "text",
      description: "Texte principal de la section Massage AMA",
    },
    {
      name: "title1",
      title: "Titre du premier point",
      type: "string",
      description: "Titre du premier point de la description",
    },
    {
      name: "body1",
      title: "Contenu du premier point",
      type: "text",
      description: "Contenu du premier point de la description",
    },
    {
      name: "title2",
      title: "Titre du deuxième point",
      type: "string",
      description: "Titre du deuxième point de la description",
    },
    {
      name: "body2",
      title: "Contenu du deuxième point",
      type: "text",
      description: "Contenu du deuxième point de la description",
    },
    {
      name: "title3",
      title: "Titre du troisième point",
      type: "string",
      description: "Titre du troisième point de la description (optionnel)",
    },
    {
      name: "body3",
      title: "Contenu du troisième point",
      type: "text",
      description: "Contenu du troisième point de la description (optionnel)",
    },
    {
      name: "bienfaitsTitle",
      title: "Titre de la section bienfaits",
      type: "string",
      description: "Titre de la section des bienfaits du massage",
    },
    {
      name: "bienfaitsSubtitle",
      title: "Sous-titre de la section bienfaits",
      type: "string",
      description: "Texte explicatif pour la section des bienfaits",
    },
    {
      name: "buttonText",
      title: "Texte du bouton",
      type: "string",
      description: "Texte affiché sur le bouton de demande de devis",
    },
    {
      name: "bienfaits",
      title: "Bienfaits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Titre",
              type: "string",
            },
            {
              name: "body",
              title: "Description",
              type: "text",
            },
            {
              name: "image",
              title: "Icône",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "liste",
              title: "Liste des points",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};

export default massageSchema;
