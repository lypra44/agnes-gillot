"use client";
import React, { useState, useRef } from "react";
import { ResponsiveSection } from "./ResponsiveSection";
import { AnimatedElement } from "./AnimatedElement";
import { useForm } from "react-hook-form";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  acceptPolicy: boolean;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmitForm = async (formData: FormData) => {
    try {
      setErrorMessage(null);

      // Vérifier si le reCAPTCHA a été validé
      if (!recaptchaValue) {
        setErrorMessage(
          "Veuillez confirmer que vous n'êtes pas un robot en cochant le reCAPTCHA"
        );
        return;
      }

      // Appel à l'API pour envoyer l'email
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: recaptchaValue,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi du message");
      }

      setIsSuccess(true);
      reset();
      // Réinitialiser le reCAPTCHA
      recaptchaRef.current?.reset();
      setRecaptchaValue(null);
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage(
        "Erreur lors de l&apos;envoi du message. Veuillez réessayer."
      );
    }
  };

  const onReCAPTCHAChange = (token: string | null) => {
    setRecaptchaValue(token);
  };

  return (
    <ResponsiveSection id="contact" className="py-16 relative">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/img/pattern.svg")',
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedElement
          options={{ type: "fade-in", duration: 800 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-darkgreen sm:text-4xl mb-4">
            Contact
          </h2>
          <p className="text-xl text-darkgreen  text-opacity-80 max-w-3xl mx-auto">
            N&apos;hésitez pas à me contacter pour toute question ou pour
            prendre rendez-vous.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Formulaire de contact */}
          <AnimatedElement
            options={{ type: "slide-right", duration: 800 }}
            className="lg:col-span-7 h-full"
          >
            <div className="bg-white rounded-xl shadow-xl p-8 border border-primarygreen h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Envoyez-moi un message
              </h3>

              <form
                onSubmit={handleSubmit(handleSubmitForm)}
                className="space-y-6 flex-grow flex flex-col"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Le nom est requis" })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primarygreen focus:border-primarygreen transition-all duration-300"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
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
                    {...register("email", {
                      required: "L&apos;email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Adresse email invalide",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primarygreen focus:border-primarygreen transition-all duration-300"
                    placeholder="Votre email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primarygreen focus:border-primarygreen transition-all duration-300"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div className="flex-grow">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Le message est requis",
                      minLength: {
                        value: 10,
                        message:
                          "Le message doit contenir au moins 10 caractères",
                      },
                    })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primarygreen focus:border-primarygreen transition-all duration-300 h-40"
                    placeholder="Votre message"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="acceptPolicy"
                      type="checkbox"
                      {...register("acceptPolicy", {
                        required:
                          "Vous devez accepter la politique de confidentialité",
                      })}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primarygreen"
                    />
                  </div>
                  <label
                    htmlFor="acceptPolicy"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    J&apos;accepte la{" "}
                    <Link
                      href="/politique-confidentialite"
                      className="text-primarygreen hover:underline"
                    >
                      politique de confidentialité
                    </Link>{" "}
                    et le traitement de mes données personnelles
                  </label>
                </div>
                {errors.acceptPolicy && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.acceptPolicy.message}
                  </p>
                )}

                <div className="my-4">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LdOFywrAAAAAMtBWYQPMue-P-R0HnNfZe2LhnZr"
                    onChange={onReCAPTCHAChange}
                  />
                </div>

                {errorMessage && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !recaptchaValue}
                  className="w-full px-6 py-3 bg-primarygreen text-white font-medium rounded-lg shadow-md hover:bg-darkgreen transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-auto"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>

                {isSuccess && (
                  <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg">
                    Votre message a été envoyé avec succès. Je vous répondrai
                    dans les plus brefs délais.
                  </div>
                )}
              </form>
            </div>
          </AnimatedElement>

          {/* Informations de contact */}
          <AnimatedElement
            options={{ type: "slide-left", duration: 800 }}
            className="lg:col-span-5 h-full"
          >
            <div className="bg-primarygreen rounded-xl shadow-xl overflow-hidden h-full">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-8">
                    Mes coordonnées
                  </h3>

                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primarygreen"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-white">
                          Naturopathe
                        </h4>
                        <p className="text-white text-opacity-90">
                          Certifiée en naturopathie et massage bien-être
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primarygreen"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-white">
                          Email
                        </h4>
                        <p className="text-white text-opacity-90">
                          contact@agnes-gillot.fr
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primarygreen"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-white">
                          Téléphone
                        </h4>
                        <p className="text-white text-opacity-90">
                          06 12 34 56 78
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primarygreen"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-white">
                          Adresse
                        </h4>
                        <p className="text-white text-opacity-90">
                          14 rue de l&apos;Eglise, 44810 Héric
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 relative ">
                  <Image
                    width={600}
                    height={600}
                    src="/img/plant-1.svg"
                    alt="Décoration plante"
                    className="relative -bottom-10 z-10 mx-auto opacity-30"
                  />
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </ResponsiveSection>
  );
}
