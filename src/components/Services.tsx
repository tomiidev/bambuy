import Image from "next/image";

const services = [
  {
    title: "Ecommerce",
    description:
      "Desde la conceptualización de tu tienda en línea hasta la implementación de estrategias de pago y logística, te ayudamos a llevar tu negocio al mundo digital de manera efectiva y rentable.",
    image: "/images/services/1.svg",
    alt: "Service description",
  },
  {
    title: "Paginas web",
    description:
      "Sitios web personalizados que representan la esencia de tu marca. Ya sea que necesites una página informativa elegante o una plataforma interactiva, nuestro enfoque centrado en el usuario garantiza una experiencia web atractiva y funcional.",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Aplicaciones web",
    description:
      "Aplicaciones web intuitivas y de alto rendimiento. Nuestros servicios abarcan herramientas empresariales, asegurando que tu audiencia tenga acceso a experiencias web fluidas y eficientes.",
    image: "/images/services/3.svg",
    alt: "Service description",
  }
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">A un paso del <span className="text-red-700">TOP</span> con nuestras soluciones personalizadas</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Amamos lo que hacemos, por eso queremos ofrecerte lo mejor del mercado.
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
