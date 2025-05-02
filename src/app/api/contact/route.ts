import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECAPTCHA_SECRET_KEY = "6LdOFywrAAAAABj7XROwTHBrzHRYasR0Se3IFLbf";

// Fonction pour vérifier le token reCAPTCHA
async function verifyRecaptcha(token: string) {
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

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, recaptchaToken, acceptPolicy } = await request.json();

    // Vérifier que tous les champs requis sont présents
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires" },
        { status: 400 }
      );
    }

    // Vérifier si la politique de confidentialité a été acceptée
    if (!acceptPolicy) {
      return NextResponse.json(
        { error: "Veuillez accepter la politique de confidentialité" },
        { status: 400 }
      );
    }

    // Vérifier le token reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Vérification reCAPTCHA requise" },
        { status: 400 }
      );
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: "Échec de la vérification reCAPTCHA. Veuillez réessayer." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Contact <contact@agnes-gillot.fr>",
      to: ["contact@agnes-gillot.fr"], // Remplacer par l'email de réception
      reply_to: email,
      subject: `Nouveau message du site web - ${name}`,
      html: `
        <h2>Nouveau message du site web</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || "Non renseigné"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <p><em>La politique de confidentialité a été acceptée.</em></p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
