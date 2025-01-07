"use client";
import Link from "next/link";
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
    "La naturopathie",
    "Pour qui ? Pourquoi ?",
    "Les techniques",
    "Massage AMA assis en entreprise",
    "Contact",
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
 <div className="bg-primarygreen">
        <p className="text-white py-1 text-center">{heroData?.annonce}</p>
    </div>
    
      <div className="w-screen border-b sticky z-50 bg-white top-0">

        <nav className="flex items-center justify-between p-2 px-4">
          {/* Logo */}
          <span>
            <Image src="/img/logo.svg" width="220" alt="N" height="200" />
          </span>

          {/* Menu Toggle */}
          <div
            aria-label="Toggle Menu"
            className={`ml-auto px-2 py-1 text-gray-500 rounded-md hover:text-primarygreen focus:text-primarygreen focus:bg-indigo-100 focus:outline-none ${open ? "opacity-100" : "opacity-50"}`}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </div>

          {/* Menu */}
          <div
            className={`fixed left-0 top-16 bg-white w-screen z-50 ${open ? "block" : "hidden"}`}
          >
            <ul className="items-center justify-end flex-1 pt-6 list-none">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href="/"
                    className="inline-block px-2 py-2 text-lg font-medium text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primarygreen focus:text-primarygreen focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    {menu}
                  </Link>
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
