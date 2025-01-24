// src/utils/scrollToSection.ts

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 57; // Hauteur du menu
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth", // Défilement en douceur
    });
  }
};