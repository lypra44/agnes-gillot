"use client";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Interface pour les données de la section Hero
interface HeroData {
  annonce: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigation = [
    { name: "La naturopathie", id: "naturopathie" },
    { name: "Pour qui ? Pourquoi ?", id: "pourquoi" },
    { name: "Les techniques", id: "techniques" },
    { name: "Massage AMA assis en entreprise", id: "massage-entreprise" },
    { name: "Contact", id: "contact" },
  ];

  // État pour stocker les données de Hero
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  // Query pour récupérer les données de Hero depuis Sanity
  const heroQuery = groq`*[_type == "hero"][0]{ annonce }`;

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
  }, []);

  return (
    <>
      {/* Annonce */}
      <div className="bg-primarygreen">
        <p className="text-white py-1 text-center">{heroData?.annonce}</p>
      </div>

      {/* Navbar */}
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
                  className="inline-block px-2 py-2 text-sm xl:text-base font-medium text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primarygreen focus:text-primarygreen focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
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
          >
            Prendre rendez-vous
          </a>

          {/* Menu : Mobile */}
          <div
            className={`absolute top-12 pl-4 pb-4 rounded-sm m-4 bg-white w-screen z-50 shadow-lg transition-transform duration-300 ${
              open
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0 hidden"
            }`}
          >
            <ul className="items-center justify-end flex-1 pt-4 list-none">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <a
                    href={`#${menu.id}`}
                    className="inline-block p-2 font-sm no-underline text-gray-800 hover:text-primarygreen font-medium"
                    onClick={() => setOpen(false)} // Ferme le menu après clic
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
