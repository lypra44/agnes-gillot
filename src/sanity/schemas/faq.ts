const faqSchema = {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      description: "Titre principal de la section FAQ",
    },
    {
      name: "subtitle",
      title: "Sous-titre",
      type: "string",
      description: "Texte explicatif sous le titre de la FAQ",
    },
    {
      name: "contactText",
      title: "Texte de contact",
      type: "string",
      description: "Texte affiché au-dessus du bouton de contact",
    },
    {
      name: "contactButtonText",
      title: "Texte du bouton de contact",
      type: "string",
      description: "Texte affiché sur le bouton de contact",
    },
    {
      name: "blocks",
      title: "Questions et réponses",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Réponse",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};

export default faqSchema;
