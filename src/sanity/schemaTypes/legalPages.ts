export const legalPages = {
  name: "legalPages",
  title: "Pages légales",
  type: "document",
  fields: [
    // Mentions légales
    {
      name: "mentionsLegalesSectionTitle",
      title: "Titre de la page Mentions Légales",
      type: "string",
      description: "Titre principal affiché en haut de la page",
    },
    {
      name: "editeurNom",
      title: "Nom de l'éditeur",
      type: "string",
      description: "Votre nom complet en tant qu'éditeur du site",
    },
    {
      name: "editeurStatut",
      title: "Statut professionnel",
      type: "string",
      description: "Votre statut (Auto-entrepreneur, EIRL, etc.)",
    },
    {
      name: "editeurSiret",
      title: "Numéro SIRET",
      type: "string",
      description: "Votre numéro SIRET",
    },
    {
      name: "editeurAdresse",
      title: "Adresse professionnelle",
      type: "string",
      description: "Votre adresse professionnelle complète",
    },
    {
      name: "editeurTelephone",
      title: "Téléphone professionnel",
      type: "string",
      description: "Votre numéro de téléphone professionnel",
    },
    {
      name: "editeurEmail",
      title: "Email professionnel",
      type: "string",
      description: "Votre adresse email professionnelle",
    },
    {
      name: "hebergeurNom",
      title: "Nom de l'hébergeur",
      type: "string",
      description: "Nom de la société qui héberge votre site",
    },
    {
      name: "hebergeurAdresse",
      title: "Adresse de l'hébergeur",
      type: "string",
      description: "Adresse complète de l'hébergeur",
    },
    {
      name: "hebergeurSite",
      title: "Site web de l'hébergeur",
      type: "string",
      description: "URL du site web de l'hébergeur",
    },

    // Politique de confidentialité
    {
      name: "confidentialiteSectionTitle",
      title: "Titre de la page Politique de Confidentialité",
      type: "string",
      description: "Titre principal affiché en haut de la page",
    },
    {
      name: "confidentialiteIntroduction",
      title: "Introduction",
      type: "text",
      description:
        "Paragraphe d'introduction de la politique de confidentialité",
    },
    {
      name: "donneesCollectees",
      title: "Données collectées",
      type: "array",
      description: "Liste des types de données personnelles collectées",
      of: [{ type: "string" }],
    },
    {
      name: "finalitesDuTraitement",
      title: "Finalités du traitement",
      type: "array",
      description: "Pourquoi vous collectez ces données",
      of: [{ type: "string" }],
    },
    {
      name: "conservationDonnees",
      title: "Durée de conservation des données",
      type: "text",
      description:
        "Explication sur la durée pendant laquelle vous conservez les données",
    },
    {
      name: "droitsUtilisateurs",
      title: "Droits des utilisateurs",
      type: "text",
      description:
        "Explication des droits RGPD des utilisateurs et comment les exercer",
    },
  ],
  preview: {
    select: {
      title: "mentionsLegalesSectionTitle",
    },
    prepare() {
      return {
        title: "Pages légales",
      };
    },
  },
};
