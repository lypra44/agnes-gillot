const introSchema = {
  name: "intro",
  title: "Introduction",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Sous-titre",
      type: "string",
    },
    {
      name: "body",
      title: "Contenu",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "reviewsTitle",
      title: "Titre de la section avis",
      type: "string",
      description: "Titre affiché au-dessus des avis Google",
    },
    {
      name: "reviewsSubtitle",
      title: "Sous-titre de la section avis",
      type: "string",
      description: "Texte explicatif affiché sous le titre des avis",
    },
    {
      name: "reviewsCallToActionTitle",
      title: "Titre de l'appel à l'action des avis",
      type: "string",
      description:
        "Titre affiché dans la boîte d'appel à l'action pour les avis",
    },
    {
      name: "reviewsCallToActionText",
      title: "Texte de l'appel à l'action des avis",
      type: "text",
      description:
        "Texte explicatif pour encourager les visiteurs à laisser un avis",
    },
    {
      name: "reviewButtonText",
      title: "Texte du bouton d'avis",
      type: "string",
      description: "Texte affiché sur le bouton pour laisser un avis",
    },
    {
      name: "discoverButtonText",
      title: "Texte du bouton découvrir",
      type: "string",
      description: "Texte affiché sur le bouton pour découvrir les techniques",
    },
    {
      name: "googlePlaceId",
      title: "ID de lieu Google",
      type: "string",
      description: "L'identifiant de votre établissement sur Google (place_id)",
    },
    {
      name: "googleMapsApiKey",
      title: "Clé API Google Maps",
      type: "string",
      description: "Votre clé API Google Maps pour afficher les avis",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};

export default introSchema;
