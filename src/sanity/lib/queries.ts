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