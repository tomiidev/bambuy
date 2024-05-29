import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold">
          Administración y programación online.
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
          ¡Hola! Soy Tomás, tengo 25 años y estoy aquí para ofrecerte un servicio de alta calidad. Con conocimientos en administración y una sólida formación en programación, mi objetivo es proporcionarte soluciones integrales que no solo mejoren la eficiencia de tu negocio, sino que también impulsen su crecimiento y competitividad en el mercado. Esta combinación de habilidades me permite ofrecerte un servicio único, donde la gestión administrativa se une a las innovaciones tecnológicas.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
          
              <Link href={"https://wa.me/59897508710"} target="_blank">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
                 Hablemos
                </button>
              </Link>
          

        
          </div>
        </div>

        <div className="flex items-center mt-12">
          <Image
            src="/images/hero/yo.png"
            alt="Image hero description"
            width={400}
            height={662}
            quality={75}
            style={{
              borderRadius: '20px',
              transform:"rotate(3deg)"
            }}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
