import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "¿Qué tipo de empresas se benefician más de estos servicios?",
    response:
      "Nuestros servicios son versátiles y adecuados para una amplia gama de empresas, desde startups hasta empresas consolidadas. Ya sea que estés comenzando tu presencia en línea o buscando optimizar un negocio existente.",
  },
  {
    question: "¿Cómo se personalizan las soluciones para adaptarse a las necesidades únicas de mi empresa?",
    response:
      "Cada empresa es única. El enfoque de personalización se basa en una evaluación detallada de tus requisitos. Ya sea en el diseño de una página web, el desarrollo de una aplicación web, etc. Se adaptan las soluciones para satisfacer tus objetivos específicos.",
  },
  {
    question: "¿Qué ventajas ofrece la administración online?",
    response:
      "La administración online ofrece flexibilidad, eficiencia y ahorro de tiempo. Permite gestionar operaciones desde cualquier lugar y mejora la comunicación con el equipo, adaptándose a las demandas del mercado actual.",
  },
  {
    question: "¿Cómo puede el desarrollo de software mejorar mi negocio?",
    response:
      "El desarrollo de software optimiza procesos, automatiza tareas repetitivas y mejora la precisión. Facilita la gestión de datos y recursos, aumentando la eficiencia operativa y permitiendo una toma de decisiones más informada y rápida.",
  },
  {
    "question": "¿Qué tipos de servicios administrativos se ofrecen?",
    "response": "Ofrecemos una amplia variedad de servicios administrativos para optimizar la gestión de tu negocio. Entre ellos se incluyen la gestión y organización de emails, administración de documentos, coordinación de proyectos, elaboración de informes y presentaciones, contabilidad básica, atención al cliente y mucho más. Nos adaptamos a tus necesidades para que puedas enfocarte en hacer crecer tu empresa."
}

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
      <div className="mx-auto w-full max-w-6xl rounded-2xl bg-transparent dark:bg-transparent">
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
