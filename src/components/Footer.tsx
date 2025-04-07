"use client";

import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

export const Footer = () => {
  const navigation = [
    { name: "La naturopathie", id: "naturopathie" },
    { name: "Pour qui ? Pourquoi ?", id: "pourquoi" },
    { name: "Les techniques", id: "techniques" },
    { name: "Massage AMA assis en entreprise", id: "massage-entreprise" },
    { name: "Contact", id: "contact" },
    { name: "FAQ", id: "faq" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkgreen text-white relative">
      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primarygreen text-white p-3 rounded-full shadow-lg hover:bg-lightgreen transition-all duration-300 hover:scale-110 focus:outline-none"
        aria-label="Retour en haut"
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo et présentation */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/img/logo.svg"
                alt="Logo Agnès Gillot Naturopathe"
                width={180}
                height={120}
                className="mb-4 bg-white p-2 rounded-lg"
              />
              <p className="text-gray-200 text-sm mt-4 max-w-xs">
                Naturopathe certifiée, je vous accompagne vers un mieux-être
                global grâce à des approches naturelles et personnalisées.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-lightgreen pb-2">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigation.map((menu, index) => (
                <li key={index}>
                  <a
                    href={`#${menu.id}`}
                    className="text-gray-200 hover:text-lightgreen transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-lightgreen rounded-full mr-2"></span>
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordonnées */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-lightgreen pb-2">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-lightgreen mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">07 83 26 18 11</span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 text-lightgreen mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">agnesgillot44@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-lightgreen mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  14 rue de l'Eglise, 44810 Héric
                </span>
              </li>
              <li className="flex items-start">
                <ClockIcon className="h-5 w-5 text-lightgreen mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">Lun-Ven&apos;: 9h-19h</span>
              </li>
            </ul>
          </div>

          {/* Mentions légales */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-lightgreen pb-2">
              Informations
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/mentions-legales"
                  className="text-gray-200 hover:text-lightgreen transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-lightgreen rounded-full mr-2"></span>
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/politique-confidentialite"
                  className="text-gray-200 hover:text-lightgreen transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-lightgreen rounded-full mr-2"></span>
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-lightgreen/30 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} Agnès Gillot - Naturopathe. Tous droits
              réservés.
            </p>
            <p className="text-gray-300 text-sm mt-4 md:mt-0">
              Site conçu et développé par{" "}
              <a href="#" className="text-lightgreen hover:underline">
                Mélanie Kitenge
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
