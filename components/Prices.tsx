import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const pricesmonth = [
    {
        title: "PYME",
        price: 49,
        currency: "PEN",
        frecuency: "/ mensual",
        description: "Todas las funciones necesarias para hacer crecer tu negocio.",
        features: [
            "Comprobantes ilimitados ∞",
            "02 usuarios",
            "01 almacén",
            "Punto de venta",
            "Clientes",
            "Inventario",
            "Reportes",
            "App móvil",
        ],
        cta: "Empieza Gratis",
        mostPopular: false,
    },

    {
        title: "PRO",
        price: 69,
        currency: "PEN",
        frecuency: "/ mensual",
        description: "Todas las funciones necesarias para hacer crecer tu negocio.",
        features: [
            "Comprobantes ilimitados ∞",
            "04 usuarios",
            "02 almacenes",
            "Dashboard",
            "Punto de venta",
            "Clientes",
            "Inventario",
            "Compras",
            "Contabilidad",
            "Guías de remisón",
            "Reportes",
            "App móvil",
        ],
        cta: "Empieza Gratis",
        mostPopular: true,
    },

    {
        title: "PLUS",
        price: 99,
        currency: "PEN",
        frecuency: "/ mensual",
        description: "Todas las funciones necesarias para hacer crecer tu negocio.",
        features: [
            "Comprobantes ilimitados ∞",
            "06 usuarios",
            "03 almacenes",
            "Dashboard",
            "Punto de venta",
            "Clientes",
            "Inventario",
            "Compras",
            "Contabilidad",
            "Guías de remisón",
            "Reportes",
            "Finanzas",
            "App móvil",
        ],
        cta: "Empieza Gratis",
        mostPopular: false,
    },
];

export default function Prices() {
    return (
        <div className="bg-white" id="prices">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <h2 className="text-3xl font-bold text-center">
                    Precios accesibles 💰
                </h2>

                <p className="pt-4 text-lg text-center w-auto">
                    Tenemos el plan perfecto para tu negocio, elige el plan que mejor se
                    adapte.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {pricesmonth.map((plan) => (
                    <div
                        key={plan.title}
                        className="rounded-2xl border border-gray-100 shadow-lg p-8 relative flex flex-col"
                    >
                        <h3 className="text-lg font-bold leading-5">
                            {plan.title}
                        </h3>
                        {plan.mostPopular && (
                            <p className="absolute top-0 px-4 py-1 -translate-y-1/2 bg-rose-100 text-rose-500  rounded-full font-semibold tracking-wide shadow-md">
                                Recomendado
                            </p>
                        )}
                        <p className="mt-4  leading-6">{plan.description}</p>
                        <div className="mt-6 rounded-lg bg-gray-50 p-6 -mx-6">
                            <p className="text-sm font-semibold flex items-center">
                                <span>{plan.currency}</span>
                                <span className="text-4xl font-bold ml-3 ">{plan.price}</span>
                                <span className="ml-1.5">{plan.frecuency}</span>
                            </p>
                        </div>
                        {/* features */}

                        <ul className="mt-6 space-y-4 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature} className="leading-6 flex">
                                    <FaCheck className="mt-1 text-rose-500 shrink-0" />
                                    <span className="ml-3">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        {/* Call to action */}
                        <Link
                            href="#"
                            className={`  mt-8 block px-6 py-4 text-sm font-semibold leading-4 text-center rounded-full ${plan.mostPopular
                                ? "bg-rose-500 text-white shadow-md"
                                : "bg-black text-white"}      
                                      `}>
                            {plan.cta}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}