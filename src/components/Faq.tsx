import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "¿Qué tipo de empresas se benefician más de sus servicios de eCommerce?",
    response:
      "Nuestros servicios de eCommerce son versátiles y adecuados para una amplia gama de empresas, desde startups hasta empresas consolidadas. Nos adaptamos a tus necesidades específicas, ya sea que estés comenzando tu presencia en línea o buscando optimizar una tienda existente.",
  },
  {
    question: "¿Cómo personalizan las soluciones para adaptarse a las necesidades únicas de mi empresa?",
    response:
      "Entendemos que cada empresa es única. Nuestro enfoque de personalización se basa en una evaluación detallada de tus requisitos. Ya sea en el diseño de una página web, el desarrollo de una aplicación o la implementación de un sistema CRM, adaptamos nuestras soluciones para satisfacer tus objetivos específicos.",
  },
  {
    question: "¿Cómo garantizan la seguridad de la información en sus servicios de CRM?",
    response:
      "La seguridad es nuestra máxima prioridad. Implementamos prácticas de seguridad de vanguardia en todas nuestras soluciones. Nuestros servicios de CRM incluyen medidas de cifrado, gestión de accesos y copias de seguridad regulares para garantizar la protección integral de la información crítica de tu empresa.",
  },
  {
    question: "¿Ofrecen soporte técnico continuo después de la implementación de sus servicios?",
    response:
      "Sí, nuestro compromiso no se detiene con la implementación. Ofrecemos un sólido servicio de soporte técnico para abordar cualquier pregunta o problema que puedas tener. Estamos acá para asegurarnos de que aproveches al máximo nuestras soluciones.",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        Preguntas frecuentes
      </h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        ¿Tenes alguna de estas dudas?
      </p>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
