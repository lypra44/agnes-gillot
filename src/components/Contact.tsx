"use client";
import Image from "next/image";
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  HomeIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { AnimatedElement } from "./AnimatedElement";
import { ResponsiveSection } from "./ResponsiveSection";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <ResponsiveSection
      id="contact"
      bgColor="bg-gray-50"
      className="py-16 relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <Image
          src="/img/plant-1.svg"
          width={600}
          height={600}
          alt="Décoration"
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 transform rotate-180">
        <Image
          src="/img/plant-1.svg"
          width={600}
          height={600}
          alt="Décoration"
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedElement
          options={{ type: "fade-in", duration: 800 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 relative inline-block">
            Prendre contact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Et si vous preniez soin de vous ? Contactez-moi pour prendre
            rendez-vous ou demander un devis.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Informations de contact */}
          <AnimatedElement
            options={{ type: "slide-right", duration: 800, delay: 200 }}
            className="h-full"
          >
            <div className="bg-darkgreen text-white rounded-xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                  <UserIcon className="h-5 w-5" />
                </span>
                Mes coordonnées
              </h3>

              <div className="space-y-6 mt-8">
                <div className="flex items-start space-x-4">
                  <UserIcon className="h-6 w-6 flex-shrink-0 mt-1 text-primarygreen" />
                  <div>
                    <h4 className="font-medium">Agnès Gillot</h4>
                    <p className="text-white text-opacity-80">
                      Naturopathe certifiée
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 mt-1 text-primarygreen" />
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-white text-opacity-80">07 83 26 18 11</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 mt-1 text-primarygreen" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-white text-opacity-80">
                      agnesgillot44@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <HomeIcon className="h-6 w-6 flex-shrink-0 mt-1 text-primarygreen" />
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <p className="text-white text-opacity-80">
                      14 rue de l'Eglise, 44810 Héric
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CalendarIcon className="h-6 w-6 flex-shrink-0 mt-1 text-primarygreen" />
                  <div>
                    <h4 className="font-medium">Jours d'ouverture</h4>
                    <p className="text-white text-opacity-80">
                      Du lundi au vendredi
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <ClockIcon className="h-6 w-6 flex-shrink-0 mt-1 text-primarygreen" />
                  <div>
                    <h4 className="font-medium">Horaires</h4>
                    <p className="text-white text-opacity-80">9h00 - 19h00</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Formulaire de contact */}
          <AnimatedElement
            options={{ type: "slide-left", duration: 800, delay: 300 }}
            className="h-full"
          >
            <div className="bg-white rounded-xl shadow-xl p-8 relative h-full">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primarygreen rounded-bl-xl rounded-tr-xl flex items-center justify-center">
                <EnvelopeIcon className="h-10 w-10 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6 pr-16">
                Envoyez-moi un message
              </h3>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-8 rounded-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-green-500 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="text-xl font-medium mb-2">Message envoyé !</h4>
                  <p>
                    Merci pour votre message. Je vous répondrai dans les plus
                    brefs délais.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nom et Prénom
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primarygreen focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primarygreen focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Objet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primarygreen focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Rédigez votre message ici..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primarygreen focus:border-transparent transition-all duration-300"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-primarygreen hover:bg-darkgreen hover:shadow-lg hover:translate-y-[-2px]"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      "Envoyer le message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </ResponsiveSection>
  );
}
