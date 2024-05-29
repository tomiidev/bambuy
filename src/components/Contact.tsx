import { useEffect, useState,  } from "react";
import { useForm, useWatch } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { MapIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";

type Info = {
  access_key: string;
  subject: string;
  from_name: string;
  botcheck: string;
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Info, any>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [submmited, setSubmmited] = useState(false);
  const [Message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    emailjs.init("08fNNRHbImpLQ7mtt");
  }, []); // El segundo parámetro vacío asegura que el efecto se ejecute solo una vez al montar el componente

  const resetear =() => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSuccess(false)
    setSubmmited(false);
  }
  const onSubmit = async (data: any, e: any) => {
    setSubmmited(true);
    
    var templateParams = {
      name: name,
      email: email,
      notes: Message
  };
   
  emailjs.send('service_8t1dguf', 'template_9dq3gvs', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
        setIsSuccess(true)
      }, function(error) {
         console.log('FAILED...', error);
      });
  }
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Contacto</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          ¿Queres conversar? Enviá un mensaje y estare feliz de <br/> poder conversar contigo.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 className="text-lg font-bold">Conversemos</h2>
          <p className="max-w-sm mt-4 mb-4 dark:text-neutral-400">
            Rellena el formulario o envianos mensaje por WhatsApp.
          </p>

          <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-neutral-400">
            <MapIcon className="w-4 h-4" />
            <span>Uruguay</span>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-neutral-400">
            <EnvelopeIcon className="w-4 h-4" />
            <a href="mailto:hello@halley.vercel.app">bambuydigital@gmail.com</a>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-neutral-400">
            <PhoneIcon className="w-4 h-4" />
            <a href="tel:51931999999">+598 508 710</a>
          </div>
        </div>

        <div>
          {!isSubmitSuccessful && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="hidden"
                value={process.env.NEXT_PUBLIC_FORM_CONTACT_API}
                {...register("access_key")}
              />
              <input type="hidden" {...register("subject")} />
              <input type="hidden" value="Halley" {...register("from_name")} />
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              ></input>

              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Nombre"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4 ${
                    errors.name
                      ? "border-rose-500 focus:border-rose-500 ring-rose-100 dark:ring-0"
                      : "border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                  }`}
                 onChange={(e)=>setName(e.target.value)}
                />
                {errors.name && (
                  <div className="mt-1 text-rose-500">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="email_address" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Tu email"
                  // name="email"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900   focus:ring-4  ${
                    errors.email
                      ? "border-rose-500 focus:border-rose-500 ring-rose-100 dark:ring-0"
                      : "border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                  }`}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className="mt-1 text-rose-500">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <textarea
                  // name="message"
                  placeholder="Deja tu mensaje..."
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white dark:placeholder:text-neutral-200 dark:bg-neutral-900   rounded-md outline-none  h-36 focus:ring-4  ${
                    errors.message
                      ? "border-rose-500 focus:border-rose-500 ring-rose-100 dark:ring-0"
                      : "border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                  }`}
                  onChange={(e)=>setMessage(e.target.value)}
                />
                {errors.message && (
                  <div className="mt-1 text-rose-500">
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 font-semibold text-white transition-colors bg-neutral-900 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7 dark:bg-white dark:text-black "
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white dark:text-neutral-900 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Enviar mensaje"
                )}
              </button>
            </form>
          )}

          { isSuccess&&submmited && (
            <>
              <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
                <svg
                  width="100"
                  height="100"
                  className="text-green-500"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="py-5 text-2xl font-medium text-green-500">
                  Success
                </h3>
                <p className="text-neutral-900 dark:text-neutral-300 md:px-4">
                  {Message}
                </p>
                <button
                  className="mt-6 py-2 px-4 bg-red-500 rounded-full focus:outline-none text-neutral-100"
                  onClick={() => resetear()}
                >
                  Atrás
                </button>
              </div>
            </>
          )}

          {!isSuccess  && submmited && (
            <div className="flex flex-col items-center justify-center text-center text-neutral-900 dark:text-neutral-300 rounded-md">
              <svg
                width="97"
                height="97"
                viewBox="0 0 97 97"
                className="text-rose-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                  stroke="CurrentColor"
                  strokeWidth="3"
                />
              </svg>

              <h3 className=" py-5 text-2xl font-medium text-rose-500">
                ¡Oops, Algo salió mal!
              </h3>
              <p className="text-neutral-900 dark:text-neutral-300 md:px-4">
                {Message}
              </p>
              <button
                className="mt-6 py-2 px-4 bg-rose-500 rounded-full focus:outline-none text-neutral-100"
                onClick={() => reset()}
              >
                Volver a intentar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
