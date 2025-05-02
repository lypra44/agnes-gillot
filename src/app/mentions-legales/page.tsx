import { Container } from "@/components/Container";
import { ResponsiveSection } from "@/components/ResponsiveSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Agnès Gillot - Naturopathe à Bellevigne",
  description:
    "Mentions légales du site web d&apos;Agnès Gillot, naturopathe à Bellevigne (49)",
};

export default function MentionsLegales() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <ResponsiveSection className="py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Mentions Légales
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">
                1. Éditeur du site
              </h2>
              <p className="mb-2">
                <strong>Nom :</strong> Agnès Gillot
              </p>
              <p className="mb-2">
                <strong>Statut :</strong> Auto-entrepreneur
              </p>
              <p className="mb-2">
                <strong>SIRET :</strong> XX XXX XXX XXXXX
              </p>
              <p className="mb-2">
                <strong>Adresse professionnelle :</strong> 14 rue de l&apos;Église,
                44810 Héric
              </p>
              <p className="mb-2">
                <strong>Téléphone :</strong> 06 12 34 56 78
              </p>
              <p className="mb-2">
                <strong>Email :</strong> contact@agnes-gillot.fr
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">
                2. Hébergement
              </h2>
              <p className="mb-2">
                <strong>Hébergeur :</strong> Netlify, Inc.
              </p>
              <p className="mb-2">
                <strong>Adresse :</strong> 2325 3rd Street, Suite 215, San
                Francisco, California 94107, États-Unis
              </p>
              <p className="mb-2">
                <strong>Site web :</strong>{" "}
                <Link
                  href="https://www.netlify.com"
                  className="text-primarygreen hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.netlify.com
                </Link>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">
                3. Propriété intellectuelle
              </h2>
              <p className="mb-4">
                L&apos;ensemble du contenu de ce site (structure, textes, images,
                graphismes, logo, icônes, sons, logiciels...) est la propriété
                exclusive d&apos;Agnès Gillot, à l&apos;exception des éléments provenant
                de ressources externes dûment identifiées.
              </p>
              <p className="mb-4">
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                écrite préalable d&apos;Agnès Gillot.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l&apos;un quelconque
                des éléments qu&apos;il contient sera considérée comme constitutive
                d&apos;une contrefaçon et poursuivie conformément aux dispositions
                des articles L.335-2 et suivants du Code de Propriété
                Intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">
                4. Liens hypertextes
              </h2>
              <p className="mb-4">
                Le site peut contenir des liens hypertextes vers d&apos;autres sites
                internet ou d&apos;autres ressources disponibles sur Internet. Agnès
                Gillot ne dispose d&apos;aucun moyen pour contrôler les sites en
                connexion avec son site internet.
              </p>
              <p>
                Agnès Gillot ne répond pas de la disponibilité de tels sites et
                sources externes, ni ne la garantit. Elle ne peut être tenue
                pour responsable de tout dommage, de quelque nature que ce soit,
                résultant du contenu de ces sites ou sources externes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">
                5. Responsabilité
              </h2>
              <p className="mb-4">
                Les informations et services présentés sur ce site sont fournis
                à titre informatif. Agnès Gillot s&apos;efforce d&apos;assurer au mieux de
                ses possibilités l&apos;exactitude et la mise à jour des informations
                diffusées, dont elle se réserve le droit de corriger le contenu
                à tout moment.
              </p>
              <p className="mb-4">
                Agnès Gillot ne peut cependant garantir l&apos;exactitude, la
                précision ou l&apos;exhaustivité des informations mises à disposition
                sur ce site. En conséquence, Agnès Gillot décline toute
                responsabilité :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  pour toute imprécision, inexactitude ou omission portant sur
                  des informations disponibles sur le site ;
                </li>
                <li>
                  pour tous dommages résultant d&apos;une intrusion frauduleuse d&apos;un
                  tiers ayant entraîné une modification des informations mises à
                  disposition sur le site ;
                </li>
                <li>
                  et plus généralement pour tous dommages, directs ou indirects,
                  quelles qu&apos;en soient les causes, origines, natures ou
                  conséquences.
                </li>
              </ul>
              <p>
                Agnès Gillot n&apos;est en aucun cas responsable des éventuelles
                décisions que vous pourriez prendre à partir des informations
                présentes sur ce site. Il est recommandé de consulter un
                professionnel de santé pour tout avis médical.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primarygreen mb-3">
                6. Loi applicable et juridiction compétente
              </h2>
              <p className="mb-4">
                Les présentes mentions légales sont régies par la loi française.
                En cas de litige, les tribunaux français seront seuls
                compétents.
              </p>
              <p>
                Pour toute question relative aux présentes mentions légales,
                vous pouvez nous contacter à l&apos;adresse email suivante :
                contact@agnes-gillot.fr
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link href="/" className="text-primarygreen hover:underline">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </ResponsiveSection>
    </Container>
  );
}
