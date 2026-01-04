import Hero from '@/components/Hero';
import Clima from '@/components/Clima';
import Proyectos from './portafolio/page';
import Servicios from './servicios/page';
import ProyectosDestacados from '@/components/ProyectosDestacados';
 

const HOME = () => {
  return (
    <div className='h-full'>
      <main>
        <Hero />
        <Clima />
        <ProyectosDestacados />
        <Servicios />
        {/* Call to Action Section */}
        <section id="contacto" className="py-24 container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-800 p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">¿Buscas Hosting en Bs?</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Te tengo la solución, e-hosting el mejor hosting de Venezuela, con muchos años en el país, lo mejor es que puedes pagar en Bs.
              </p>
              <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                CONTRATAR AHORA
              </button>
            </div>
          </div>
        </section>
      </main>    
    </div >
  )
}

export default HOME