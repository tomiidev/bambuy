import Image from "next/image";
import Link from "next/link";
import ThemeSwitchOption from "./ThemeSwitchOption";
const social = [
  {
    name: "instagram",
    href: "https://www.instagram.com/bambuy_digital",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="none">
        <path
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          fill="currentColor"
        />
      </svg>
    ),
  }
];

const column1 = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "#services" },
  { name: "Preguntas frecuentes", href: "#faq" },
  { name: "Contacto", href: "#contact" },
];



export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 dark:text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2 2xl:col-span-2">
          <Link href="/">
          BAMBUY DIGITAL
          </Link>

          <p className="md:text-sm pt-4 w-auto sm:w-6/12 md:w-6/12 lg:w-8/12">
            Descubrí la diferencia de trabajar con una empresa que prioriza tu éxito.
          </p>

          <div className="flex gap-2 pt-6 sm:pt-6 md:pt-6 lg:pt-12 max-w-[300px]">
            {social.map((red) => (
              <Link key={red.name} href={red.href} target="_blank">
                <div className="w-9 h-9 p-2 text-white bg-white-500 hover:opacity-75 rounded-full flex items-center justify-center">
                  {red.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
            EMPRESA
          </h3>
          {column1.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-rose-500 md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
        </div>

     {/*    <div>
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
            RESOURCES
          </h3>
          {column2.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-rose-500 md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
        </div> */}

        {/* <div>
          
          <div className="mt-12">
            <ThemeSwitchOption />
          </div>
        </div> */}
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-6 text-center border-t border-neutral-800">
        <p
          className="text-neutral-300 dark:text-neutral-400 text-sm  cursor:pointer"
        >
          &copy; Copyright {new Date().getFullYear()}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
