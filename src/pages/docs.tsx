import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import Image from "next/image";
import Link from "next/link";

export default function Docs() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-6">
          <Image
            className="block h-8 w-auto"
            src="/images/logos/logo-rose.svg"
            alt="Logo Your Company"
            width={150}
            height={150}
            quality={75}
            sizes="100vw"
          />

          <h1 className="text-xl font-bold text-black dark:text-white">
            Documentation Halley
          </h1>
        </Link>
        <ThemeSwitchButton />
      </div>

      <div className="mt-10">
        <p>
          <span className="text-rose-500 text-xl font-bold">
            Thank you for your purchase.
          </span>{" "}
          We are proud to have developed an optimized webpage using modern
          technologies like Next.js and TailwindCSS to offer you an exceptional
          user experience and an attractive design. <br />
          <br /> We hope you enjoy the website and that it helps you achieve
          your online goals. If you need any further assistance or have any
          questions, please don't hesitate to contact us anytime. <br />
          <br />
        </p>
        <h2 className="font-bold text-lg mt-4 mb-2">
          1. Node.js® installation
        </h2>
        <p>
          Descargar e instalar Node.js si no contamos con ello,{" "}
          <Link
            href="https://nodejs.org/es/"
            target="_blank"
            className="text-rose-500 hover:underline font-bold"
          >
            download
          </Link>
        </p>
        <h2 className="font-bold text-lg mt-4 mb-2">
          2. Entorno de desarrollo
        </h2>
        <ul className="list-disc list-inside">
          <li>
            Descomprimir halley.zi y abrir con tu editor de
            codigo favorito la carpeta halley
          </li>
          <li>Abrimos una terminal en la ubicación de la carpeta halley y ejecutamos npm install </li>
          <li>Ejecutamos npm run dev para levantar un servidor local</li>
          <li>Abirmos http://localhost:3000 en tu navegador web</li>
        </ul>
        <h2 className="font-bold text-lg mt-4 mb-2">
          2. Editar Halley
        </h2>
        <p>Estructura de archivos</p>
      </div>
    </div>
  );
}
