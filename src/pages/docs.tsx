import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import Image from "next/image";
import Link from "next/link";
const menus = [
  {
    id: "Introducción",
    url: "#introduccion",
  },
  {
    id: "Requisitos",
    url: "#requisitos",
  },
  {
    id: "Instalación",
    url: "#instalacion",
  },
  {
    id: "Estructura",
    url: "#estructura",
  },
  {
    id: "Funcionalidades",
    url: "#funcionalidades",
  },
  {
    id: "Personalización",
    url: "#personalizacion",
  },
  {
    id: "Producción",
    url: "#produccion",
  },
];
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
            Documentación Halley
          </h1>
        </Link>
        <ThemeSwitchButton />
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {menus.map((menu) => (
            <Link key={menu.id} href={menu.url}>
              <div className="bg-rose-500 text-white px-2 py-1 rounded-full font-medium hover:scale-105 text-center">
                {menu.id}
              </div>
            </Link>
          ))}
        </div>
        <h2
          className="text-rose-500 font-bold text-lg mt-10 mb-2"
          id="introduccion"
        >
          Introducción
        </h2>
        <p>
          Gracias por su compra. Estamos orgullosos de haber desarrollado una
          página web optimizada utilizando tecnologías modernas como Next.js y
          TailwindCSS para ofrecerle una experiencia de usuario excepcional y un
          diseño atractivo. <br />
          <br /> Esperamos que disfrute del sitio web y que le ayude a alcanzar
          sus objetivos en línea. Si necesita más ayuda o tiene alguna pregunta,
          no dude en ponerse en contacto con nosotros en cualquier momento.
        </p>
        <h2
          className="text-rose-500 font-bold text-lg mt-10 mb-2"
          id="requisitos"
        >
          Requisitos
        </h2>
        <p>Para utilizar la plantilla Halley, se requiere lo siguiente:</p>
        <br />
        <ul className="list-disc">
          <li>Node.js (versión 10 o superior)</li>
          <li>NPM (o Yarn)</li>
          <li>Conocimientos básicos de Next.js y Tailwind CSS</li>
        </ul>
        <h2
          className="text-rose-500 font-bold text-lg mt-10 mb-2"
          id="instalacion"
        >
          Instalación
        </h2>
        <ul className="list-disc">
          <li>
            Extraiga el contenido del archivostron <strong> halley.zip</strong>{" "}
            en el directorio raíz de su proyecto.
          </li>
          <li>
            Abra una terminal en la carpeta raíz del proyecto y ejecute{" "}
            <strong>npm install</strong> o <strong> yarn</strong> para instalar
            las dependencias del proyecto.
          </li>
          <li>
            Una vez instaladas las dependencias, ejecute{" "}
            <strong>npm run dev</strong> o <strong>yarn dev</strong> para
            iniciar el servidor de desarrollo.
          </li>
          <li>
            Abra su navegador y vaya a{" "}
            <strong>
              <Link href="http://localhost:3000" target="_blank">
                http://localhost:3000
              </Link>
            </strong>{" "}
            para ver el sitio web en acción.
          </li>
        </ul>
        <h2
          className="text-rose-500 font-bold text-lg mt-10 mb-2"
          id="estructura"
        >
          Estructura de directorios
        </h2>
        <p>
          La plantilla Halley sigue una estructura de directorios clara y
          organizada que facilita el desarrollo y mantenimiento del proyecto.
          Los principales directorios del proyecto se describen a continuación:
        </p>
        <br />
        <ul className="list-disc">
          <li>
            <span className="text-rose-500 font-bold">/public: </span> contiene
            archivos estáticos como imágenes
          </li>
          <li>
            <span className="text-rose-500 font-bold">src/:</span> Es la carpeta
            principal de la aplicación. Contiene todo el código fuente, y es
            donde se ubican los archivos que conforman la lógica de la
            aplicación.
          </li>
          <li>
            <span className="text-rose-500 font-bold">components/:</span>{" "}
            Carpeta donde se ubican los componentes de React reutilizables.
          </li>
          <li>
            <span className="text-rose-500 font-bold">pages/:</span> Carpeta
            donde se ubican las páginas de la aplicación.
          </li>
          <li>
            <span className="text-rose-500 font-bold">styles/:</span> Carpeta
            donde se almacenan los archivos de estilos de la aplicación,
            incluyendo el archivo principal de configuración de Tailwind CSS.
          </li>
        </ul>
        <h2
          className="text-rose-500 font-bold text-lg mt-10 mb-2"
          id="funcionalidades"
        >
          Funcionalidades
        </h2>
        <p>
          La plantilla Halley incluye las siguientes características
          principales:
        </p>
        <br />
        <ul className="list-disc">
          <li>
            Diseño responsivo que se adapta a diferentes tamaños de pantalla.
          </li>
          <li>Soporta tema claro y oscuro</li>
          <li>
            Menú de navegación fijo en la parte superior de la pantalla
            semitransparente.
          </li>
          <li>Hero principal, con mensaje llamativo e imagen destacada.</li>
          <li>
            Sección de servicios con iconos y descripciones de los servicios
            ofrecidos.
          </li>
          <li>
            Seccion de caracteristicas mas destacadas del servicio con una lista
            de funcionalidades e imagenes.
          </li>
          <li>Tabla de precios con switch por mes y año</li>
          <li>
            Sección de contacto con un formulario de contacto y enlaces a redes
            sociales.
          </li>
          <li>Prefooter llamado de acción para confirmar venta.</li>
          <li>Footer con enlaces principales y links de redes sociales.</li>
        </ul>
        <h2
          className="text-rose-500 font-bold text-lg mt-10 mb-2"
          id="personalizacion"
        >
          Personalización
        </h2>
        <p>
          La plantilla Halley ha sido desarrollada para ser fácilmente
          personalizable y escalable. Algunos de los aspectos que se pueden
          personalizar en esta plantilla son:
        </p>
        <p className="border-l-4 border-rose-500 pl-2 my-6">
          Empezamos editando nuestro componente <strong>Layout.tsx</strong>.
          Cambiando todo lo que está dentro del los recuadros indicados como:
          title, description, image, favicon y url donde se publicará su sitio.
        </p>
        <Image
          src="/images/docs/layout.jpg"
          alt=""
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
        />
        <p className="border-l-4 border-rose-500 pl-2 my-6">
          Podemos observar de como editar el menu de navegación y el logo
          principal
        </p>
        <Image
          src="/images/docs/images.jpg"
          alt=""
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
        />
        <p className="border-l-4 border-rose-500 pl-2 my-6">
          En esta seción se puede observar como podemos editar el objeto de
          servicios
        </p>
        <Image
          src="/images/docs/componente.jpg"
          alt=""
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
        />
        <p className="border-l-4 border-rose-500 pl-2 my-6">
          Edición de la tabla de los precios, asi mismo se observa como se
          pueden personalizar los colores con codigo hexadecimal tanto para el
          modo claro como para el modo oscuro ejemplo:{" "}
          <strong>bg-[#FF5733] dark:bg:[#3AFF33]</strong>
        </p>
        <Image
          src="/images/docs/precios.jpg"
          alt=""
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
        />
        <p className="border-l-4 border-rose-500 pl-2 my-6">
          En esta sección se configura la API del formulario de contacto, para
          ello creamos una API en{" "}
          <span className="text-rose-500">
            <Link
              href="https://web3forms.com/platforms/nextjs-contact-form"
              target="_blank"
            >
              https://web3forms.com/platforms/nextjs-contact-form
            </Link>
          </span>{" "}
          y reemplazamos en la variable de <strong>/.env</strong>
        </p>
        <Image
          src="/images/docs/api.png"
          alt=""
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
        />
        <Image
          src="/images/docs/form.jpg"
          alt=""
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
        />
        <h2
          className="text-rose-500 font-bold text-lg mt-10 mb-2"
          id="produccion"
        >
          Producción
        </h2>
        <p>
          Una vez realizado tus cambios, estás listo para hacer el build de tu
          proyecto ejecutando:
        </p>{" "}
        <br />
        <ul className="list-disc">
          <li>npm run build o yarn build</li>
        </ul>
        <p>Seguidamente ya se puede desplegar tu proyecto en vercel</p> <br />
        <ul className="list-disc">
          <li>
            Si aún no tienes una cuenta en Vercel, crea una en{" "}
            <Link href="vercel.com/signup" target="_blank">
              vercel.com/signup
            </Link>{" "}
            .
          </li>
          <li>Instala la CLI de Vercel ejecutando: npm install -g vercel</li>
          <li>Inicia sesión en Vercel ejecutando: vercel login</li>
          <li>
            Desde la terminal, navega hasta la carpeta raíz de tu proyecto y
            ejecuta: vercel
          </li>
          <li>
            Esto iniciará el proceso de despliegue de tu proyecto en Vercel.
            Sigue las instrucciones en pantalla para configurar el despliegue.
          </li>
          <li>
            Una vez que el despliegue esté completo, Vercel te proporcionará una
            URL donde podrás ver tu proyecto en línea.
          </li>
        </ul>{" "}
        <br />
        <br />
        <p>
          Echa un vistaso a la documentación oficial de Vercel sobre Despliegue{" "}
          <Link
            href="https://nextjs.org/docs/deployment"
            target="_blank"
            className="text-rose-500 font-bold"
          >
            https://nextjs.org/docs/deployment
          </Link>{" "}
        </p> <br /><br />
        <p>
          Soporte:{" "}
          <Link
            href="mailto:hola@humbersanchez.com"
            target="_blank"
            className="text-rose-500 font-bold"
          >
            hola@humbersanchez.com
          </Link>{" "}
        </p>
        <p className="text-4xl font-bold text-center my-16 text-rose-600 underline">
          GRACIAS !
        </p>
      </div>
    </div>
  );
}
