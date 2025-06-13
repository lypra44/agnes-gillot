const contactInfo = {
  name: 'contactInfo',
  title: 'Informations de Contact',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: 'Titre pour ce document de contact (ex: "Coordonnées principales")',
      initialValue: 'Coordonnées principales'
    },
    {
      name: 'role',
      title: 'Titre professionnel',
      type: 'string',
      description: 'Votre titre professionnel (ex: "Naturopathe")',
      initialValue: 'Naturopathe'
    },
    {
      name: 'roleDescription',
      title: 'Description du rôle',
      type: 'string',
      description: 'Description de vos certifications',
      initialValue: 'Certifiée en naturopathie et massage bien-être'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Adresse email de contact',
      initialValue: 'agnesgillot44@gmail.com'
    },
    {
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
      description: 'Numéro de téléphone de contact',
      initialValue: '07 83 26 18 11'
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'string',
      description: 'Adresse complète',
      initialValue: '14 rue de l\'Eglise, 44810 Héric'
    },
    {
      name: 'scheduleLabel',
      title: 'Horaires',
      type: 'string',
      description: 'Horaires d\'ouverture',
      initialValue: 'Lun-Ven: 9h-19h'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'email'
    }
  }
};

export default contactInfo; 