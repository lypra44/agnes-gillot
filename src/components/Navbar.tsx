"use client";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState, useMemo } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { scrollToSection } from "@/utils/scrollToSection";

// Interface pour les données de la section Hero
interface HeroData {
  annonce: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Utilisation de useMemo pour éviter la recréation du tableau à chaque rendu
  const navigation = useMemo(
    () => [
      { name: "Pour qui ? Pourquoi ?", id: "pourquoi" },
      { name: "Les techniques", id: "techniques" },
      { name: "Massage AMA assis en entreprise", id: "massage-entreprise" },
      { name: "Contact", id: "contact" },
    ],
    []
  );

  // État pour stocker les données de Hero
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  // Query pour récupérer les données de Hero depuis Sanity
  const heroQuery = groq`*[_type == "hero"][0]{ annonce }`;

  // useEffect pour détecter la section active au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Zone centrale de la fenêtre
        threshold: 0,
      }
    );

    // Observer toutes les sections qui correspondent aux liens du menu
    navigation.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Nettoyer l'observer lors du démontage du composant
      navigation.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [navigation]);

  // useEffect pour récupérer les données à partir de Sanity
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await client.fetch(heroQuery);
        setHeroData(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données Hero :",
          error
        );
      }
    };

    fetchHeroData();
  }, [heroQuery]);

  return (
    <>
      {/* Fond sombre */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          open ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-40`}
      />

      {/* Annonce - doit être au-dessus du fond noir */}
      <div className="bg-primarygreen z-50 relative">
        <p className="text-white py-1 text-center">{heroData?.annonce}</p>
      </div>

      {/* Menu : Mobile */}
      <div
        className={`fixed top-6 pl-4 pb-4 rounded-sm mt-8 bg-white w-screen z-50 shadow-lg transition-all duration-300 ease-in-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <ul className="items-center justify-end flex-1 pt-4 list-none">
          {navigation.map((menu, index) => (
            <li className="mr-3 nav__item" key={index}>
              <a
                href={`#${menu.id}`}
                className={`inline-block p-2 font-sm no-underline font-medium transition-colors
                  ${
                    activeSection === menu.id
                      ? "text-primarygreen font-semibold"
                      : "text-gray-800 hover:text-primarygreen"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(menu.id);
                  setOpen(false);
                }}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Barre de navigation */}
      <div className="w-screen border-b sticky z-50 bg-white top-0 px-4">
        <nav className="relative flex flex-col lg:flex-row items-center justify-between p-2 px-4 z-50">
          {/* Logo */}
          <div className="flex justify-between w-full lg:w-auto">
            <span>
              <Image
                src="/img/logo.svg"
                width="220"
                alt="N"
                height="200"
                className="w-48"
              />
            </span>

            {/* Menu Button : Mobile */}
            <div
              aria-label="Toggle Menu"
              className={`lg:hidden ml-auto px-2 py-1 text-gray-500 rounded-md hover:text-primarygreen focus:text-primarygreen focus:bg-indigo-100 focus:outline-none transition-all duration-300 ${open ? "opacity-100 rotate-90" : "opacity-50 rotate-0"}`}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <XMarkIcon className="h-8 w-8 transition-transform duration-300" />
              ) : (
                <Bars3Icon className="h-8 w-8 transition-transform duration-300" />
              )}
            </div>
          </div>

          {/* Menu Liste : Desktop */}
          <ul className="hidden lg:flex items-center justify-end list-none">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href={`#${menu.id}`}
                  className={`inline-block px-2 py-2 text-sm xl:text-base font-medium no-underline rounded-md 
                  relative transition-colors
                  ${
                    activeSection === menu.id
                      ? "text-primarygreen after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primarygreen"
                      : "text-gray-800 hover:text-primarygreen"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(menu.id);
                  }}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden xl:flex px-6 py-2 font-medium text-center text-sm text-white bg-primarygreen rounded-md hover:bg-darkgreen"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Prendre rendez-vous
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
