"use client";
import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';

const MenuToggle = () => {
  const [open, setOpen] = useState(false);

  const navigation = ["Home", "About", "Services", "Contact"];

  return (
    <div>
      <div
        aria-label="Toggle Menu"
        className="ml-auto px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-primarygreen focus:text-primarygreen focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </div>
      <div className={`${open ? "block" : "hidden"} lg:hidden fixed left-0 top-16 bg-white w-screen border-black border`}>
        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          {navigation.map((menu, index) => (
            <li className="mr-3 nav__item" key={index}>
              <Link href="/" className="inline-block px-2 py-2 text-lg font-medium text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primarygreen focus:text-primarygreen focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                {menu}
              </Link>
            </li>
          ))}
        </ul>
    </div>
    </div>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigation = [
    "La naturopathie",
    "Pour qui ? Pourquoi ?",
    "Les techniques",
    "Massage AMA assis en entreprise",
    "Contact",
  ];

  return (
    <div className="w-screen border-b fixed bg-white">
      <nav className="container relative flex flex-wrap items-center justify-between p-2 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
              <span>
                <Image
                  src="/img/logo.svg"
                  width="250"
                  alt="N"
                  height="200"
                />
              </span>
          


        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="/" className="px-4 py-2 text-white bg-darkgreen rounded-md">
                Prendre rendez-vous
              </Link>
            </div>
        </div>
                
        <MenuToggle />
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-2 py-2 text-lg font-medium text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primarygreen focus:text-primarygreen focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}

