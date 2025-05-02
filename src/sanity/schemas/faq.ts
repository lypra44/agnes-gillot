const faqSchema = {
  name: "faq",
  title: "FAQ (Questions fréquentes)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre principal de la section FAQ",
      type: "string",
      description: "Titre affiché en haut de la section FAQ (ex: 'Questions fréquentes')"
    },
    {
      name: "subtitle",
      title: "Texte d'introduction",
      type: "string",
      description: "Texte explicatif affiché sous le titre de la FAQ"
    },
    {
      name: "contactText",
      title: "Texte d'incitation à la prise de contact",
      type: "string",
      description: "Message invitant les visiteurs à vous contacter pour plus d'informations"
    },
    {
      name: "contactButtonText",
      title: "Texte du bouton de contact",
      type: "string",
      description: "Texte affiché sur le bouton menant à la section contact"
    },
    {
      name: "blocks",
      title: "Liste des questions-réponses",
      type: "array",
      description: "Ensemble des questions et réponses à afficher dans la FAQ",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question posée",
              type: "string",
              description: "Question fréquemment posée par les clients"
            },
            {
              name: "answer",
              title: "Réponse détaillée",
              type: "text",
              description: "Réponse complète à la question"
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
