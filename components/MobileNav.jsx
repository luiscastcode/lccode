'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';


const links = [
  {
    nombrelink: 'home',
    ruta: '/'
  },
  {
    nombrelink: "Servicios",
    ruta: "/servicios",

  },
  {
    nombrelink: "Experiencia",
    ruta: "/experiencia",

  },
  {
    nombrelink: "Portafolio",
    ruta: "/portafolio",

  },
  {
    nombrelink: "Contacto",
    ruta: "/contacto",

  },
]

const MobileNav = () => {
  const nomruta = usePathname();
  return (
    <nav>
      <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
          <CiMenuFries className='text-[32px] text-accent-default' />
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
          {/**logo */}
          <div className='mt-32 mb-16 text-center text-2xl'>
            <Link href='/'>
              <h1 className='text-4xl font-bold'>
                LuisC<span className='text-accent-default'>.</span>
              </h1>
            </Link>
          </div>
          {/**NAV */}
          <nav className='flex flex-col justify-center items-center gap-8'>
            {links.map((link, index) => {
              return  (
                <Link
                  href={link.ruta}
                  key={index}
                  className={`${link.ruta === nomruta && "text-accent-default border-b-2 border-accent-default"} 
                  capitalize hover:text-accent-hover transition-all`}
                >
                  {link.nombrelink}
                </Link>
               )
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav