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
    <footer className="bg-white text-gray-800 py-6 border-t flex items-center flex-col justify-center w-full gap-8 md:flex-row md:px-6">
      {/* Logo et coordonnées */}
      <div className="flex flex-col items-center md:items-start md:w-1/3">
        <Image
          src="/img/logo.svg"
          alt="Logo"
          width={150}
          height={100}
          className="mb-4"
        />
        <p className="text-xs md:text-sm">Téléphone : 07 83 26 18 11</p>
        <p className="text-xs md:text-sm">Email : agnesgillot44@gmail.com</p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center flex-col text-center md:w-1/3 ">
        <ul>
          {navigation.map((menu, index) => (
            <li key={index} className="mb-1 ">
              <a
                href={`#${menu.id}`}
                className="text-gray-600 hover:text-primarygreen transition-colors text-xs md:text-sm"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mentions légales et crédits */}
      <div className="flex items-center justify-center flex-col text-center md:w-1/3 ">
        <p className="text-xs md:text-sm">
          Site conçu et développé par Mélanie Kitenge
        </p>
        <a
          href="/mentions-legales"
          className="mt-1 text-primarygreen hover:underline text-xs md:text-sm"
        >
          Mentions légales
        </a>
      </div>
    </footer>
  );
};
