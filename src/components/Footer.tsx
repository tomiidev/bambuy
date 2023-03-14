import Image from "next/image";
import Link from "next/link";
import ThemeSwitchOption from "./ThemeSwitchOption";

const social = [
  {
    name: "facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
        <path
          d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "youtube",
    href: "https://www.youtube.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="none">
        <path
          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "linkedin",
    href: "https://www.linkedin.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
        <path
          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const column1 = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Faq", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const column2 = [
  { name: "Not Found 404", href: "404" },
  { name: "Documentation", href: "/" },
  { name: "Guides", href: "/" },
  { name: "Help", href: "/" },
];

const column3 = [
  { name: "Privacy Policy", href: "/" },
  { name: "Terms of Service", href: "/" },
  { name: "Support Terms", href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 dark:text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2 2xl:col-span-2">
          <Link href="/">
            <Image
              className="h-8 w-auto"
              src="/images/logos/logo-white.svg"
              alt="Logo Your Company"
              width={150}
              height={150}
              quality={75}
              sizes="100vw"
            />
          </Link>

          <p className="md:text-sm pt-4 w-auto sm:w-6/12 md:w-6/12 lg:w-8/12">
            Halley is ipsum dolor sit amet consectetur adipisicing itaque enim
            labore dolores culpa consequatur harum.
          </p>

          <div className="flex gap-2 pt-6 sm:pt-6 md:pt-6 lg:pt-12 max-w-[300px]">
            {social.map((red) => (
              <Link key={red.name} href={red.href} target="_blank">
                <div className="w-9 h-9 text-white bg-neutral-600 hover:opacity-75 rounded-full flex items-center justify-center">
                  {red.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
            COMPANY
          </h3>
          {column1.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-rose-500 md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
            RESOURCES
          </h3>
          {column2.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-rose-500 md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
            LEGAL
          </h3>
          {column3.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-rose-500 md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-12">
            <ThemeSwitchOption />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-6 text-center border-t border-neutral-800">
        <Link
          href="https://humbersanchez.com"
          target="_blank"
          className="text-neutral-300 dark:text-neutral-400 text-sm hover:text-rose-500 dark:hover:text-rose-500 transition duration-300"
        >
          &copy; Copyright {new Date().getFullYear()}. All rights reserved.
        </Link>
      </div>
    </footer>
  );
}
