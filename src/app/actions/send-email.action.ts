"use server";
import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

// Vérifier que les variables d'environnement requises sont définies
if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY n'est pas définie");
}

if (!process.env.RECAPTCHA_SECRET_KEY) {
  console.error("RECAPTCHA_SECRET_KEY n'est pas définie");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

// Fonction pour vérifier le token reCAPTCHA
async function verifyRecaptcha(token: string) {
  if (!token) return false;
  if (!RECAPTCHA_SECRET_KEY) {
    console.error("La clé secrète reCAPTCHA n'est pas configurée");
    return false;
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: "POST",
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Erreur de vérification reCAPTCHA:", error);
    return false;
  }
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  acceptPolicy?: boolean;
  recaptchaToken?: string;
}

export const sendEmail = async (formData: ContactFormData) => {
  try {
    // Vérification des données
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return {
        success: false,
        error: "Veuillez remplir tous les champs obligatoires",
      };
    }

    // Vérifier si la politique de confidentialité a été acceptée
    if (!formData.acceptPolicy) {
      return {
        success: false,
        error: "Veuillez accepter la politique de confidentialité",
      };
    }

    // Vérifier le token reCAPTCHA
    if (!formData.recaptchaToken) {
      return {
        success: false,
        error:
          "Veuillez confirmer que vous n'êtes pas un robot en cochant le reCAPTCHA",
      };
    }

    // Vérification du reCAPTCHA (seulement côté serveur)
    const isValidRecaptcha = await verifyRecaptcha(formData.recaptchaToken);
    if (!isValidRecaptcha) {
      return {
        success: false,
        error: "La vérification de sécurité a échoué. Veuillez réessayer.",
      };
    }

    // Vérifier que l'email de destination est configuré
    if (!process.env.EMAIL_TO) {
      console.error("EMAIL_TO n'est pas défini");
      return {
        success: false,
        error:
          "Configuration de messagerie incomplète. Veuillez contacter l'administrateur.",
      };
    }

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: `Formulaire de contact <${process.env.EMAIL_FROM || "no-reply@resend.dev"}>`,
      to: [process.env.EMAIL_TO],
      subject: `Nouveau message de ${formData.name}`,
      replyTo: formData.email,
      react: EmailTemplate({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    if (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      return {
        success: false,
        error:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ou me contacter directement par téléphone.",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Exception lors de l'envoi de l'email:", error);
    return {
      success: false,
      error:
        "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
    };
  }
};
