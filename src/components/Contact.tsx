"use client";
import { UserIcon, PhoneIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="flex flex-col items-center max-w-full">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col bg-darkgreen w-full p-5  lg:rounded-lg text-white">
          <div className="flex flex-col space-y-8 justify-between mb-10 text-sm md:flex-1 ">
            <div>
              <h2 className="mb-2">Contact</h2>
              <p> Contactez-moi pour prendre rendez-vous ou demander un devis.</p>
            </div>
            <div className="flex flex-col space-y-4">

  
            <div className="flex items-center space-x-4">
                <UserIcon className="h-6 w-6" />
                <span>Agnès Gillot - Naturopathe</span>
              </div>

              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6" />
                <span>07 83 26 18 11</span>
              </div>

              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6" />
                <span>agnesgillot44@gmail.com</span>
              </div>

              <div className="flex items-center space-x-4">
                <HomeIcon className="h-6 w-6" />
                <span>14 rue de l’Église, 44810 Héric</span>
              </div>

            </div>
          </div>
          <div className="relative">
            <div className="absolute invisible md:visible z-0 w-40 h-40 bg-green-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute invisible md:visible z-0 w-40 h-40 bg-green-400 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 text-gray-600 md:w-full">
              <form className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="" className="text-sm">
                    Nom et Prénom
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-sm">
                    Objet
                  </label>
                  <input
                    type="objet"
                    placeholder="Objet"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-sm">
                   Message
                  </label>
                  <textarea
                    placeholder="Rédiger votre message ici..."
                    rows={4}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                  ></textarea>
                </div>
                <a className="text-white bg-primarygreen mt-6">Envoyer</a>
              </form>
            </div>
          </div>
        </div>
      </div>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.8844132601453!2d-1.6547502230892732!3d47.414195671172834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805f5576c12c701%3A0x57b942fc9d37ffec!2sAgn%C3%A8s%20GILLOT%20-%20NATUROPATHE!5e0!3m2!1sfr!2sfr!4v1734444664500!5m2!1sfr!2sfr" 
        width="400" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  );
}
