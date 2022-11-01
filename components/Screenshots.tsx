import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const contents = [
  {
    title: "Facturación Electrónica",
    description:
      "Emite tus facturas y boletas electrónicas con todos los requisitos dispuestos por SUNAT, con una interfaz amigable e intuitiva.",
    features: [
      "Búsqueda de productos por nombre y código de barras.",
      "Presentaciones y edición de precio para la venta actual.",
      "Búsqueda de cliente en SUNAT y RENIEC.",
    ],
    image: "/images/screenshots/ventas.png",
    order: false,
  },
  {
    title: "Dashboard",
    description:
      "Visualiza información relevante para la toma de decisiones, representados en gráficos dinámicos, que se actualizan en paralelo a los filtros seleccionados.",
    features: [
      "Total cobrado y pendiente de cobro.",
      "Filtros por periodos, última semana, por mes, etc.",
      "Totales de comprobantes y notas de venta.",
      "Ingresos, egresos, ganancias y alerta de stock.",
    ],
    image: "/images/screenshots/dashboard.png",
    order: true,
  },
  {
    title: "Inventarios",
    description:
      "Regulariza en cualquier momento el stock de tus productos, llevando un registro detallado de la hora, fecha y motivo.",
    features: [
      "Entrada, salida y traslados de productos entre varios almacenes.",
      "Controla el stock de tus productos en tiempo real.",
      "Descarga reportes de inventarios y kardex valorizados.",
    ],
    image: "/images/screenshots/inventarios.png",
    order: false,
  },
];

export function Screenshots() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pb-8">
      <h2 className="mt-8 md:mt-16 text-2xl font-bold text-center md:col-span-2">
        Gestiona tu empresa como los grandes 💡
      </h2>

      {contents.map((content) => (
        <div
          key={content.title}
          className="grid grid-cols-1 md:grid-cols-2 pt-8 md:gap-x-16 lg:gap-x-20 "
        >
          <div
            className={`md:mt-8 lg:mt-28 xl:mt-40 2xl:mt-44
          
          ${content.order ? "order-1 md:order-2" : "order-1"}

          `}
          >
            <h1 className="mt-4 font-bold text-3xl">{content.title}</h1>

            <p className="mt-8 mb-8 text-lg leading-7">{content.description}</p>

            <ul className="mt-6 space-y-4 flex-1 font-medium">
              {content.features.map((feature) => (
                <li key={feature} className="leading-6 flex">
                  <FaCheck className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`order-1 mt-16 md:mt-8 scale-110	
          ${
            content.order
              ? "ml-0 md:-ml-96 lg:-ml-96 xl:-ml-96 2xl:-ml-96"
              : "mr-0 md:-mr-96 lg:-mr-96 xl:-mr-96 2xl:-mr-96"
          }`}
          >
            <Image
              src={content.image}
              alt="Facturación electrónica Perú"
              width={1500}
              height={1063}
              quality={75}
              sizes="100vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
