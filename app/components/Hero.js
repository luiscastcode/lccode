 
import Image from "next/image";
import BotonPrincipal from "./BotonPrincipal";
import BotonSecundario from "./BotonSecundario";
export default function Hero() {
  return (
    <section className="mt-[70px]">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div class="max-w-prose md:max-w-none">
              <h1 class="text-3xl text-gray-900 md:text-5xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text">
                Desarrollo y Diseño Web Para Emprendimientos
              </h1>

              <p class="mt-4 text-gray-700 text-xl">
                Desarrollo soluciones webs para emprendimientos que desean
                llevar su empresa a otro nivel.
              </p>
              <div className="flex mt-6 p-4">
                <BotonPrincipal url="/#proyectos" nombre="Proyectos" />

                <BotonSecundario url="/#servicios" nombre="Servicios" />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mx-auto">
            <Image width={500} height={500} src="/lcc.png" alt="lcc code" />
          </div>
        </div>
      </div>
    </section>
  );
}
