import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/lcc.svg"
              width={48}
              height={48}
              className="h-8"
              alt="LCC Logo"
            />
            <span className="logoname self-center text-2xl whitespace-nowrap dark:text-white">
              Luis Cast Code
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/acercade" className="hover:underline me-4 md:me-6">
                Acerca de mi
              </Link>
            </li>

            <li>
              <Link
                href="mailto:cncompusistema@gmail.com"
                className="hover:underline"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="https://flowbite.com/" className="hover:underline">
            Luis Cast Code™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
