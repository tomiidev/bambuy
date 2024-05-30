import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Los beneficios de la administración online",
    description:
      "La administración online ofrece flexibilidad, eficiencia y ahorro de tiempo. Permite gestionar operaciones desde cualquier lugar y mejora la comunicación con el equipo.",
    features: [
      "Reducción de costos operativos",
      "Mayor productividad",
    
    ],
    image: "/images/features/admin.svg",
    order: false,
  },

  {
    title: "Desarrollo de software en la administración",
    description:
      "El desarrollo de software en la administración optimiza procesos, automatiza tareas repetitivas y mejora la precisión. Facilita la gestión de datos y recursos, aumentando la eficiencia operativa y permitiendo una toma de decisiones más informada y rápida.",
    features: [
      "Automatización de procesos",
      "Personalización y escalabilidad",
      "Seguridad de datos",
      "Integración de sistemas",

    ],
    image: "/images/features/dev.svg",
    order: true,
  },
  {
    title: "Soporte 24/7",
    description:
      "Disponibilidad constante para cualquier consulta y resolución de problemas, tu mano derecha en todo momento.",
    features: [
      "Disponibilidad constante",
      "Mejora en la satisfacción del cliente",

    ],
    image: "/images/features/dev.svg",
    order: false,
  },
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Potencia tu éxito</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={1920}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
