import React from 'react'
 

const Footer = ( ) => {
  return (
     <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-xl">Luis Cast <span className="text-blue-500">Code</span></div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="/acerca-de" className="hover:text-white transition-colors">Acerca de mi</a>
            <a href="/portafolio" className="hover:text-white transition-colors">Portafolio</a>
            <a href="/contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
          <p className="text-sm text-gray-500">© 2024 Luis Cast Code™. Todos los derechos reservados.</p>
        </div>
      </footer>
  )
}

 

export default Footer