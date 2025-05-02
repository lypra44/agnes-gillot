export const footer = {
  name: 'footer',
  title: 'Pied de page',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description du cabinet',
      type: 'text',
      description: 'Texte de présentation court affiché sous le logo dans le pied de page'
    },
    {
      name: 'navigationTitle',
      title: 'Titre de la section Navigation',
      type: 'string',
      description: 'Titre affiché au-dessus des liens de navigation (ex: "Navigation")'
    },
    {
      name: 'contactTitle',
      title: 'Titre de la section Contact',
      type: 'string',
      description: 'Titre affiché au-dessus des coordonnées (ex: "Contact")'
    },
    {
      name: 'informationsTitle',
      title: 'Titre de la section Informations',
      type: 'string',
      description: 'Titre affiché au-dessus des liens légaux (ex: "Informations")'
    },
    {
      name: 'phoneFooter',
      title: 'Téléphone',
      type: 'string',
      description: 'Numéro de téléphone affiché dans le pied de page'
    },
    {
      name: 'emailFooter',
      title: 'Email',
      type: 'string',
      description: 'Adresse email affichée dans le pied de page'
    },
    {
      name: 'addressFooter',
      title: 'Adresse',
      type: 'string',
      description: 'Adresse affichée dans le pied de page'
    },
    {
      name: 'scheduleLabel',
      title: 'Libellé des horaires',
      type: 'string',
      description: 'Texte des horaires d\'ouverture (ex: "Lun-Ven: 9h-19h")'
    },
    {
      name: 'copyrightText',
      title: 'Texte de copyright',
      type: 'string',
      description: 'Texte de copyright affiché en bas de page (avant l\'année)'
    },
    {
      name: 'designerText',
      title: 'Mention du concepteur',
      type: 'string',
      description: 'Texte mentionnant le concepteur du site'
    },
    {
      name: 'designerName',
      title: 'Nom du concepteur',
      type: 'string',
      description: 'Nom du concepteur/développeur du site'
    },
    {
      name: 'designerLink',
      title: 'Lien du concepteur',
      type: 'url',
      description: 'URL vers le site du concepteur (optionnel)'
    }
  ]
}; 