import { defineField, defineType } from "sanity";

const reviewsSchema = defineType({
  name: "reviews",
  title: "Avis Clients",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre de la section",
      type: "string",
      description: "Titre principal de la section avis clients",
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre",
      type: "string",
      description: "Texte explicatif affiché sous le titre",
    }),
    defineField({
      name: "callToActionTitle",
      title: "Titre de l'appel à l'action",
      type: "string",
      description: "Titre du bloc incitant à laisser un avis",
    }),
    defineField({
      name: "callToActionText",
      title: "Texte de l'appel à l'action",
      type: "text",
      description:
        "Texte explicatif pour encourager les visiteurs à laisser un avis",
    }),
    defineField({
      name: "buttonText",
      title: "Texte du bouton",
      type: "string",
      description: "Texte affiché sur le bouton pour laisser un avis Google",
    }),
    defineField({
      name: "placeId",
      title: "ID Google Place",
      type: "string",
      description:
        "Identifiant Google Place de votre établissement pour les avis",
    }),
    defineField({
      name: "reviews",
      title: "Avis clients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Nom du client",
              type: "string",
            }),
            defineField({
              name: "rating",
              title: "Note (1-5)",
              type: "number",
              validation: (Rule) => Rule.min(1).max(5).precision(1),
            }),
            defineField({
              name: "comment",
              title: "Commentaire",
              type: "text",
            }),
            defineField({
              name: "date",
              title: "Date de l'avis",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "comment",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || "Section Avis Clients",
      };
    },
  },
});

export default reviewsSchema;
