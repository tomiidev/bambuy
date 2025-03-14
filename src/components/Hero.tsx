import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-1">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold text-center">
          Gestión digital integral
          </h1>
          <h2 className="text-xl mt-5 font-bold text-center">
          Administración, Desarrollo Web y Community Management
          </h2>
          <p className="pt-6 text-base w-auto sm:w-12/12 text-center md:w-12/12 dark:text-neutral-400">
            Somos un equipo especializado en administración, desarrollo web y gestión digital. Combinamos experiencia en administración con un sólido conocimiento en programación para ofrecerte soluciones integrales que optimicen tu negocio.

            Nuestro objetivo es mejorar la eficiencia de tus procesos, impulsar el crecimiento de tu empresa y brindarte herramientas tecnológicas innovadoras para que destaques en el mercado. Con nuestro servicio, la gestión administrativa y la tecnología se unen para llevar tu negocio al siguiente nivel.


          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-center">

            <Link href={"https://wa.me/59897508710"} target="_blank">
              <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
                Hablemos
              </button>
            </Link>



          </div>
        </div>

        {/* <div className="flex items-center mt-12">
          <Image
            src="/images/hero/yo.png"
            alt="Image hero description"
            width={400}
            height={662}
            quality={75}
            className="w-60 mx-auto sm:full"
            style={{
              borderRadius: '20px',
              transform: "rotate(3deg)"
            }}
            sizes="100vw"
            priority
          />
        </div> */}
      </div>
    </div>
  );
}
