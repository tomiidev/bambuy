import Image from "next/image";

const services = [
  {
    title: "Dolorum molestiae",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit laudantium",
    image: "/images/services/1.svg",
  },
  {
    title: "Commodi mollitia",
    description: "Nemo quos doloribus quo omnis mollitia nostrum excepturi impedit veniam ",
    image: "/images/services/2.svg",
  },
  {
    title: "Neque numquam",
    description: "Accusantium eius omnis minus debitis est odio earum labore ad itaque mollitia",
    image: "/images/services/3.svg",
  },
  {
    title: "Vero animi",
    description: "Dolores nemo labore soluta incidunt cumque repellat quod ducimus explicabo",
    image: "/images/services/4.svg",
  },
  {
    title: "Repudiandae pariatur",
    description: "voluptatum ex molestiae quae alias quasi eum magnam maxime autem atque",
    image: "/images/services/5.svg",
  },
  {
    title: "Placeat voluptas",
    description: "vitae iure impedit magni consequuntur nihil consectetur laboriosam perspiciatis",
    image: "/images/services/6.svg",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">
          What is Halley?
        </h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto">
          Patreon is the best place for creators to build memberships by providing exclusive access to their work and a deeper connection.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map((service) => (
          <div key={service.title}>
            <div className="h-32 w-auto flex place-content-center">
              <Image
              className="bg-slate-000"
                src={service.image}
                alt="Service description"
                width={130}
                height={130}
                quality={75}
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{service.title}</h2>
            <p className="pt-2 text-base text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}