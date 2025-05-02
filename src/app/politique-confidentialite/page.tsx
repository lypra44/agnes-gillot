import { Container } from "@/components/Container";
import { ResponsiveSection } from "@/components/ResponsiveSection";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Agnès Gillot - Naturopathe à Bellevigne',
  description: 'Politique de confidentialité du site web d\'Agnès Gillot, naturopathe à Bellevigne (49)',
};

export default function PolitiqueConfidentialite() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <ResponsiveSection className="py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">1. Introduction</h2>
              <p className="mb-4">
                Chez Agnès Gillot Naturopathie, nous accordons une importance particulière à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la façon dont nous recueillons, utilisons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
              </p>
              <p>
                En utilisant notre site web et en nous communiquant vos données personnelles, vous acceptez les pratiques décrites dans la présente politique de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">2. Données collectées</h2>
              <p className="mb-4">
                Nous pouvons collecter les types de données suivants :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                <li><strong>Données de communication :</strong> contenu des messages que vous nous envoyez via notre formulaire de contact</li>
                <li><strong>Données de connexion :</strong> adresse IP, type de navigateur, pages visitées, date et heure de connexion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">3. Finalités du traitement</h2>
              <p className="mb-4">
                Nous utilisons vos données personnelles pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Vous permettre de nous contacter via notre formulaire</li>
                <li>Répondre à vos demandes d'information</li>
                <li>Gérer la relation avec nos clients et prospects</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Vous informer sur nos services (avec votre consentement préalable)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">4. Base légale du traitement</h2>
              <p className="mb-4">
                Nous traitons vos données personnelles sur les bases légales suivantes :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Votre consentement :</strong> lorsque vous remplissez notre formulaire de contact</li>
                <li><strong>L'exécution d'un contrat :</strong> lorsque vous êtes client de nos services</li>
                <li><strong>Notre intérêt légitime :</strong> pour améliorer notre site et nos services</li>
                <li><strong>Nos obligations légales :</strong> pour respecter la législation applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">5. Destinataires des données</h2>
              <p className="mb-4">
                Les données que nous collectons sont destinées à :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Agnès Gillot, responsable du traitement</li>
                <li>Notre hébergeur de site web (Netlify)</li>
                <li>Notre service d'envoi d'emails (Resend)</li>
              </ul>
              <p>
                Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers sans votre consentement, sauf lorsque cela est nécessaire pour répondre à vos demandes ou si nous y sommes légalement tenus.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">6. Durée de conservation</h2>
              <p className="mb-4">
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, dans le respect des délais de prescription légale.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Les données issues des formulaires de contact sont conservées pendant 3 ans à compter du dernier contact</li>
                <li>Les données relatives aux clients sont conservées pendant la durée de la relation contractuelle, puis archivées selon les délais légaux applicables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">7. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction. Toutefois, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">8. Utilisation des cookies</h2>
              <p className="mb-4">
                Notre site peut utiliser des cookies pour améliorer votre expérience utilisateur. Les cookies sont de petits fichiers stockés sur votre appareil qui nous aident à analyser votre utilisation du site.
              </p>
              <p>
                Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être averti lorsqu'un cookie est envoyé. Toutefois, certaines fonctionnalités du site peuvent ne pas fonctionner correctement si vous refusez les cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">9. Vos droits</h2>
              <p className="mb-4">
                Conformément à la réglementation applicable en matière de protection des données personnelles, notamment le Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit de retirer votre consentement à tout moment</li>
                <li>Droit d'introduire une réclamation auprès de la CNIL</li>
              </ul>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter par email à contact@agnes-gillot.fr ou par courrier à l'adresse indiquée dans les mentions légales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">10. Modifications de la politique de confidentialité</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé des éventuelles modifications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">11. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, veuillez nous contacter à l'adresse email suivante : contact@agnes-gillot.fr
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link href="/" className="text-primarygreen hover:underline">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </ResponsiveSection>
    </Container>
  );
} 