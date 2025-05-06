export const heroQuery = `
*[_type == "hero"][0] {
  title,
  description,
  backgroundImage {
    asset->{
      _id,
      url
    }
  }
  // ... autres champs
}
`; 

// Requête pour récupérer les informations de contact
export const contactInfoQuery = `
*[_type == "contactInfo"][0] {
  title,
  role,
  roleDescription,
  email,
  phone,
  address,
  scheduleLabel
}
`; 