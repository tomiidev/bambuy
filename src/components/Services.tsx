import Image from "next/image";

const services = [
  {
    title: "Tareas administrativas",
    description:
      "Seguimiento de ventas, armado de presupuestos, gestión de emails, gestión de agenda, etc.",
    image: "/images/services/admin.svg",
    alt: "Service description",
  },
  {
    title: "Desarrollo web/app",
    description:
      "Desarrollo de ecommerce, landing pages, apps como también automatizaciones que requiera y potencie el negocio.",
    image: "/images/services/ecommerce.svg",
    alt: "Service description",
  },
  {
    title: "Diseño gráfico",
    description:
      "Diseño de catalogos, flyers, etc.",
    image: "/images/services/design.svg",
    alt: "Service description",
  },
  {
    title: "Atención al cliente",
    description:
      "Respuestas a mensajes a través de redes sociales con 48 hs de retraso como máximo (siempre y cuando cuente con el conocimiento para dar respuesta).",
    image: "/images/services/support.svg",
    alt: "Service description",
  },
  {
    title: "Gestión de redes",
    description:
      "Planificación y diseño de publicaciones para Facebook, Instangram, LinkedIn y Mercado Libre (se usaran la/s que mas se adapte/n a tu negocio). Gestión total de las redes exceptuando la publicidad. ",
    image: "/images/services/cm.svg",
    alt: "Service description",
  }
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold"><span className="text-orange-300">Crece </span>sin límites</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
         
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
