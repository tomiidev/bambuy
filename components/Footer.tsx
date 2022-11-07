import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from './ThemeSwitch';

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const social = [
  {
    name: "twitter",
    href: "https://twitter.com/",
    icon: <FaTwitter size={16} />,
  },
  {
    name: "facebook",
    href: "https://facebook.com/",
    icon: <FaFacebook size={16} />,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram size={16} />,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/",
    icon: <FaYoutube size={16} />,
  },
];

const column1 = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Faq', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const column2 = [
  { name: 'Not Found 404', href: '404' },
  { name: 'Documentation', href: '#' },
  { name: 'Guides', href: '#' },
  { name: 'Help', href: '#' },
]

const column3 = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Support Terms', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-300 dark:text-neutral-400">
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

          <p className="text-sm pt-4 w-auto sm:w-6/12 md:w-6/12 lg:w-8/12">Halley is ipsum dolor sit amet consectetur adipisicing itaque enim labore dolores culpa consequatur harum.</p>

          <div className="flex gap-2 pt-6 sm:pt-6 md:pt-6 lg:pt-12 max-w-[300px]">
            {social.map((red) => (
              <Link key={red.name} href={red.href} target="_blank" className="text-white">
                <div className="w-9 h-9 bg-neutral-700 hover:bg-rose-500 rounded-full flex items-center justify-center">
                  {red.icon}
                </div>

              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold pb-4 pt-12 lg:pt-0">COMPANY</h3>
          {column1.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-rose-500 text-sm pt-2 grid">
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="text-xs font-bold pb-4 pt-12 lg:pt-0">RESOURCES</h3>
          {column2.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-rose-500 text-sm pt-2 grid">
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="text-xs font-bold pb-4 pt-12 lg:pt-0">LEGAL</h3>
          {column3.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-rose-500 text-sm pt-2 grid">
              {item.name}
            </Link>
          ))}
          <ThemeSwitch />
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