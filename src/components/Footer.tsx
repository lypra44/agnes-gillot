import Image from "next/image";

export const Footer = () => {
  const navigation = [
    { name: "La naturopathie", id: "naturopathie" },
    { name: "Pour qui ? Pourquoi ?", id: "pourquoi" },
    { name: "Les techniques", id: "techniques" },
    { name: "Massage AMA assis en entreprise", id: "massage" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-white text-gray-800 py-10 border-t flex items-center  justify-center w-full mx-8">
      {/* Logo et coordonnées */}
      <div className="flex flex-col items-center md:items-start w-1/3">
        <Image
          src="/img/logo.svg"
          alt="Logo"
          width={150}
          height={100}
          className="mb-4"
        />
        <p>Téléphone : 07 83 26 18 11</p>
        <p>Email : agnesgillot44@gmail.com</p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center flex-col text-center w-1/3">
        <ul>
          {navigation.map((menu, index) => (
            <li key={index} className="mb-1">
              <a
                href={`#${menu.id}`}
                className="text-gray-600 hover:text-primarygreen transition-colors text-sm"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mentions légales et crédits */}
      <div className="flex items-center justify-center flex-col text-center  w-1/3">
        <p>Site conçu et développé par Mélanie Kitenge</p>
        <a
          href="/mentions-legales"
          className="mt-2 text-primarygreen hover:underline"
        >
          Mentions légales
        </a>
      </div>
    </footer>
  );
};
