import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const contents = [

  {
    title: "Dashboard",
    description:
      "Euismod fames in felis ornare interdum phasellus imperdiet habitant, elementum leo lobortis mus primis dictumst vehicula hendrerit, facilisis suscipit nullam cursus tincidunt natoque vestibulum.",
    features: [
      "Lacus eu mauris quisque tortor torquent",
      "Lorem ipsum dolor sit amet consectetur",
      "Lacus eu mauris quisque tortor torquent",
    ],
    image: "/images/features/dashboard.svg",
    order: false,
  },
  {
    title: "Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga natus at modi ea tempore sapiente optio, quas sint nobis pariatur, deserunt quidem, veniam autem quod mollitia.",
    features: [
      "But I must explain to you how all this mistaken",
      "At vero eos et accusamus et iusto odio dignissimos",
      "Voluptatum deleniti atque corrupti quos",
      "He endures pains to avoid worse pains",
    ],
    image: "/images/features/product.svg",
    order: true,
  },
  {
    title: "Inventory",
    description:
      "Porta facilisis ullamcorper rutrum erat luctus aliquam phasellus pharetra fusce, aliquet montes turpis mus accumsan donec pulvinar vitae habitasse, lectus lacinia sem cursus mauris eu tempus duis",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
    image: "/images/features/inventory.svg",
    order: false,
  },
];

export function Features() {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
      <h2 className="text-4xl font-bold text-center">
        Features
      </h2>
      <p className="pt-6 text-base max-w-2xl text-center m-auto">
        Halley nunc pulvinar lobortis duis. Leo mollis neque arcu ullamcorper aliquam sociis sem nullam, elementum vestibulum augue placerat odio hendrerit faucibus.
      </p>

      {contents.map((content) => (
        <div
          key={content.title}
          className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
        >
          <div
            className={`pt-8 md:pt-16 ${content.order ? "order-1 md:order-2" : "order-1"}`}
          >
            <h1 className="text-2xl font-bold">{content.title}</h1>
            <p className="pt-6 pb-6 text-base">{content.description}</p>

            <ul className="font-medium space-y-1 flex-1">
              {content.features.map((feature) => (
                <li key={feature} className="leading-6 flex">
                  <FaCheck className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`order-1 pt-8 md:pt-16 ${content.order
              ? "ml-0 2xl:-ml-40"
              : "mr-0 2xl:-mr-40"
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
              />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
