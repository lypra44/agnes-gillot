const reviewsSchema = {
  name: "reviews",
  title: "Avis Clients",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre de la section",
      type: "string",
      description: "Titre principal de la section avis clients",
    },
    {
      name: "subtitle",
      title: "Sous-titre",
      type: "string",
      description: "Texte explicatif affiché sous le titre",
    },
    {
      name: "callToActionTitle",
      title: "Titre de l'appel à l'action",
      type: "string",
      description: "Titre du bloc incitant à laisser un avis",
    },
    {
      name: "callToActionText",
      title: "Texte de l'appel à l'action",
      type: "text",
      description:
        "Texte explicatif pour encourager les visiteurs à laisser un avis",
    },
    {
      name: "buttonText",
      title: "Texte du bouton",
      type: "string",
      description: "Texte affiché sur le bouton pour laisser un avis Google",
    },
    {
      name: "placeId",
      title: "ID Google Place",
      type: "string",
      description:
        "Identifiant Google Place de votre établissement pour les avis",
    },
    {
      name: "reviews",
      title: "Avis clients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Nom du client",
              type: "string",
            },
            {
              name: "rating",
              title: "Note (1-5)",
              type: "number",
              validation: (Rule) => Rule.min(1).max(5).precision(1),
            },
            {
              name: "comment",
              title: "Commentaire",
              type: "text",
            },
            {
              name: "date",
              title: "Date de l'avis",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "comment",
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Section Avis Clients",
      };
    },
  },
};

export default reviewsSchema;
