"use client";
import Image from "next/image";
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div
      id="contact"
      className="relative flex flex-col items-center w-screen overflow-hidden"
    >
      <Image
        src="/img/plant-1.svg"
        width="600"
        alt="N"
        height="200"
        className="absolute top-0 right-0 opacity-40"
      />

      <div className="flex w-full justify-center items-center flex-row">
        <div className="flex flex-col bg-darkgreen w-full text-white p-8 lg:rounded-lg lg:w-11/12 shadow-lg xl:flex-row xl:space-x-8">
          {/* Section Contact Info */}
          <div className="flex flex-col space-y-8 justify-between text-sm md:flex-1 lg:mx-4 xl:w-1/2 xl:justify-normal">
            <div>
              <h2 className="font-bold leading-snug tracking-tight uppercase">
                Prendre contact
              </h2>

              <p>
                Et si vous preniez soin de vous ? Contactez-moi pour prendre
                rendez-vous ou demander un devis.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:space-y-10">
              <div className="flex items-center space-x-4">
                <UserIcon className="h-6 w-6 xl:h-8 xl:w-8" />
                <p className="xl:text-lg">Agnès Gillot - Naturopathe</p>
              </div>

              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 xl:h-8 xl:w-8" />
                <p className="xl:text-lg">07 83 26 18 11</p>
              </div>

              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6 xl:h-8 xl:w-8" />
                <p className="xl:text-lg">agnesgillot44@gmail.com</p>
              </div>

              <div className="flex items-center space-x-4">
                <HomeIcon className="h-6 w-6 xl:h-8 xl:w-8" />
                <p className="xl:text-lg">14 rue de l’Église, 44810 Héric</p>
              </div>
            </div>
          </div>

          {/* Section Form */}
          <div className="relative xl:w-1/2">
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 text-gray-600">
              <form className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm">
                    Nom et Prénom
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm">
                    Objet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Objet"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Rédiger votre message ici..."
                    rows={4}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-white bg-primarygreen mt-6 px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
