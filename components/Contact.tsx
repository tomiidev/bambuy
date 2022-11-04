import { GrLocation } from "react-icons/gr"
import { MdOutlineMail } from "react-icons/md"
import { HiOutlinePhone } from "react-icons/hi"

export default function Contact() {
  return (
    <div className="bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">
          Contact
        </h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto">
          Want to contact us? Choose an option below and well be happy to show you how Halley can transform her companys web experience.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">

        <div>
          <h2 className="text-lg font-bold">Contact Halley</h2>
          <p className="max-w-sm mt-4 mb-4">Have something to say? We are here to help. Fill up the form or send email or call phone.</p>
          <div className="flex items-center mt-2 space-x-2 text-dark-600">
            <GrLocation className="w-4 h-4" />
            <span>Av Tomas Marsano 700, Lima - Perú</span>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-dark-600">
            <MdOutlineMail className="w-4 h-4" />
            <a href="mailto:hola@humbersanchez.com">
              hola@humbersanchez.com
            </a>
          </div>


          <div className="flex items-center mt-2 space-x-2 text-dark-600">
            <HiOutlinePhone className="w-4 h-4" />
            <a href="tel:51931133631">
              +51 931133631
            </a>
          </div>
        </div>

        <div>
          <form action="">
            <input
              type="text"
              placeholder="Full Names"
              autoComplete="false"
              className="w-full px-4 py-3 mb-4 border placeholder:text-gray-800 rounded-md outline-none border-gray-300 focus:border-gray-600"
            />

            <input
              type="text"
              placeholder="Email Address"
              autoComplete="false"
              className="w-full px-4 py-3 mb-4 border placeholder:text-gray-800 rounded-md outline-none border-gray-300 focus:border-gray-600"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              autoComplete="false"
              className="w-full px-4 py-3 mb-4 h-36 border placeholder:text-gray-800 rounded-md outline-none border-gray-300 focus:border-gray-600"
            />


            <button
              type="submit"
              className="w-full p-3 text-base font-medium text-white bg-black rounded-full">

              {/* <svg
                className="w-5 h-5 mx-auto text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg> */}
              Send Message
            </button>
          </form>


        </div>
      </div>
    </div >
  );
}