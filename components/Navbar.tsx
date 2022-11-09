import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitchNavbar from './ThemeSwitchNavbar';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '#services', current: false },
  { name: 'Pricing', href: '#pricing', current: false },
  { name: 'Faq', href: '#faq', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className=" fixed top-0 left-0 right-0 bg-white dark:bg-black text-black dark:text-neutral-400 border-b border-gray-200 dark:border-neutral-800 backdrop-blur-sm bg-white/90 dark:bg-black/80 z-20">
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center md:pl-0">
                  <Link href="/">
                    <Image
                      className="block h-8 w-auto lg:hidden"
                      src="/images/logos/logo-rose.svg"
                      alt="Logo Your Company"
                      width={150}
                      height={150}
                      quality={75}
                      sizes="100vw"
                    />
                  </Link>

                  <Link href="/">
                    <Image
                      className="hidden h-8 w-auto lg:block"
                      src="/images/logos/logo-rose.svg"
                      alt="Logo Your Company"
                      width={150}
                      height={150}
                      quality={75}
                      sizes="100vw"
                    />

                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-5 items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-black dark:text-neutral-400 ' : 'text-black dark:text-neutral-400 hover:underline',
                          'text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-10 sm:right-0 flex items-center gap-2">
                  <Link href="#">
                    <button className="bg-black dark:bg-white text-white dark:text-black px-4 p-2 text-base font-medium dark:hover:bg-rose-500 hover:bg-rose-500 hover:text-white dark:hover:text-white rounded-full">
                      Get free trial
                    </button>
                  </Link>
                  <ThemeSwitchNavbar />
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-black dark:text-white ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <RiCloseFill className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FiMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-4 min-h-screen border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-black">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-black dark:text-neutral-400' : 'text-black dark:text-neutral-400',
                    'block py-4 text-base font-medium border-b border-gray-200 dark:border-neutral-800'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
